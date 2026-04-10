/**
 * Adaptive engine — personalized recommendations and difficulty adjustment.
 *
 * Analyzes learner behavior and progress to recommend next modules,
 * adjust difficulty, and provide learning path guidance.
 */

import type {
  LearnerData,
  ModuleId,
  Recommendation,
  BehavioralSignal,
  LearningGoal,
  ExperienceLevel,
} from "./types.js";
import { MODULE_IDS } from "./types.js";
import { getModule, loadCourse } from "./curriculum.js";
import {
  getModuleStatus,
  isModuleUnlocked,
} from "./progress.js";
import { saveLearner, getActiveSession } from "./store.js";

// ---------------------------------------------------------------------------
// Learning path generation
// ---------------------------------------------------------------------------

/** Default module sequence for each learning goal. */
const GOAL_PATHS: Record<LearningGoal, ModuleId[]> = {
  "career-switch": [
    "foundations",
    "user-research",
    "discovery",
    "metrics",
    "prioritization",
    "strategy",
    "execution",
    "stakeholders",
    "capstone",
  ],
  "interview-prep": [
    "foundations",
    "metrics",
    "prioritization",
    "discovery",
    "strategy",
    "execution",
    "stakeholders",
    "capstone",
  ],
  "skill-gap": [
    "foundations",
    "user-research",
    "discovery",
    "metrics",
    "prioritization",
    "strategy",
    "execution",
    "stakeholders",
    "ai-pm",
    "vibe-coding",
    "capstone",
  ],
  "ai-pm": [
    "foundations",
    "ai-pm",
    "vibe-coding",
    "metrics",
    "strategy",
    "capstone",
  ],
  "general-growth": [
    "foundations",
    "user-research",
    "discovery",
    "metrics",
    "prioritization",
    "strategy",
    "execution",
    "stakeholders",
    "ai-pm",
    "vibe-coding",
    "capstone",
  ],
  "vibe-coding": [
    "foundations",
    "vibe-coding",
    "ai-pm",
    "execution",
    "capstone",
  ],
};

/** Experience-based module skipping recommendations. */
const SKIP_SUGGESTIONS: Record<ExperienceLevel, ModuleId[]> = {
  "new-to-pm": [],
  "career-switcher": [],
  "junior-pm": ["foundations"],
  "mid-pm": ["foundations", "user-research"],
  "senior-pm": ["foundations", "user-research", "discovery", "execution"],
};

export function generateLearningPath(data: LearnerData): ModuleId[] {
  const { goals, experienceLevel, selfAssessment } = data.profile;

  // Start with the primary goal's path (or general growth)
  const primaryGoal = goals[0] ?? "general-growth";
  const basePath = [...GOAL_PATHS[primaryGoal]];

  // If secondary goals include ai-pm or vibe-coding, ensure those modules are included
  for (const goal of goals.slice(1)) {
    for (const mod of GOAL_PATHS[goal]) {
      if (!basePath.includes(mod)) {
        // Insert before capstone
        const capIdx = basePath.indexOf("capstone");
        if (capIdx >= 0) {
          basePath.splice(capIdx, 0, mod);
        } else {
          basePath.push(mod);
        }
      }
    }
  }

  // Mark skippable modules (but keep them in path — learner can choose)
  const skippable = SKIP_SUGGESTIONS[experienceLevel] ?? [];

  // If self-assessment shows strength (4+) in an area, it's skippable
  const areaToModule: Record<string, ModuleId> = {
    discovery: "discovery",
    strategy: "strategy",
    metrics: "metrics",
    execution: "execution",
    stakeholders: "stakeholders",
    "modern-pm": "ai-pm",
  };

  for (const [area, score] of Object.entries(selfAssessment)) {
    if (score >= 4 && areaToModule[area] && !skippable.includes(areaToModule[area])) {
      skippable.push(areaToModule[area]);
    }
  }

  return basePath;
}

// ---------------------------------------------------------------------------
// Next module recommendation
// ---------------------------------------------------------------------------

export function getRecommendations(data: LearnerData): Recommendation[] {
  const recommendations: Recommendation[] = [];
  const path = data.profile.learningPath.length > 0
    ? data.profile.learningPath
    : generateLearningPath(data);

  let foundNext = false;

  for (const moduleId of path) {
    const status = getModuleStatus(data, moduleId);
    const moduleDef = getModule(moduleId);
    if (!moduleDef) continue;

    if (status === "completed") continue;

    if (status === "in-progress") {
      // Always recommend continuing an in-progress module first
      recommendations.unshift({
        moduleId,
        reason: `Continue where you left off in "${moduleDef.title}".`,
        priority: "next",
        estimatedMinutes: moduleDef.estimatedMinutes,
      });
      foundNext = true;
      continue;
    }

    // Module is locked or available
    if (isModuleUnlocked(data, moduleId)) {
      if (!foundNext) {
        recommendations.push({
          moduleId,
          reason: `Your learning path recommends "${moduleDef.title}" next.`,
          priority: "next",
          estimatedMinutes: moduleDef.estimatedMinutes,
        });
        foundNext = true;
      } else {
        recommendations.push({
          moduleId,
          reason: `"${moduleDef.title}" is available when you're ready.`,
          priority: "suggested",
          estimatedMinutes: moduleDef.estimatedMinutes,
        });
      }
    } else {
      recommendations.push({
        moduleId,
        reason: `Complete prerequisites first: ${moduleDef.prerequisites.join(", ")}.`,
        priority: "optional",
        estimatedMinutes: moduleDef.estimatedMinutes,
      });
    }
  }

  // Add any modules not in the learning path as optional
  for (const moduleId of MODULE_IDS) {
    if (path.includes(moduleId)) continue;
    const status = getModuleStatus(data, moduleId);
    if (status === "completed") continue;
    const moduleDef = getModule(moduleId);
    if (!moduleDef) continue;

    recommendations.push({
      moduleId,
      reason: `"${moduleDef.title}" isn't on your current path but is available.`,
      priority: "optional",
      estimatedMinutes: moduleDef.estimatedMinutes,
    });
  }

  return recommendations;
}

// ---------------------------------------------------------------------------
// Behavioral signals
// ---------------------------------------------------------------------------

export function recordSignal(
  data: LearnerData,
  signal: Omit<BehavioralSignal, "timestamp">
): void {
  const session = getActiveSession(data);
  if (!session) return;

  session.signals.push({
    ...signal,
    timestamp: new Date().toISOString(),
  });

  saveLearner(data);
}

/**
 * Analyze recent signals to determine if difficulty adjustment is needed.
 * Returns a recommendation string or null.
 */
export function analyzeBehavior(data: LearnerData): string | null {
  const session = getActiveSession(data);
  if (!session || session.signals.length < 3) return null;

  const recent = session.signals.slice(-5);
  const struggling = recent.filter((s) => s.type === "struggling").length;
  const excelling = recent.filter((s) => s.type === "excelling").length;
  const rushing = recent.filter((s) => s.type === "rushing").length;

  if (struggling >= 3) {
    return "The learner appears to be struggling. Consider simplifying explanations, providing more examples, or suggesting they review prerequisites.";
  }

  if (excelling >= 3) {
    return "The learner is excelling. Consider increasing challenge level, skipping basic explanations, or suggesting they move to a more advanced module.";
  }

  if (rushing >= 3) {
    return "The learner appears to be rushing through content. Encourage them to slow down and engage more deeply with exercises.";
  }

  return null;
}

// ---------------------------------------------------------------------------
// Progress summary for display
// ---------------------------------------------------------------------------

export interface ProgressSummary {
  completedModules: string[];
  inProgressModules: string[];
  availableModules: string[];
  lockedModules: string[];
  completionPercentage: number;
  totalScore: number;
  maxScore: number;
  estimatedTimeRemaining: number;
}

export function getProgressSummary(data: LearnerData): ProgressSummary {
  const course = loadCourse();
  const completed: string[] = [];
  const inProgress: string[] = [];
  const available: string[] = [];
  const locked: string[] = [];

  for (const moduleDef of course.modules) {
    const status = getModuleStatus(data, moduleDef.id);
    switch (status) {
      case "completed":
        completed.push(moduleDef.id);
        break;
      case "in-progress":
        inProgress.push(moduleDef.id);
        break;
      default:
        if (isModuleUnlocked(data, moduleDef.id)) {
          available.push(moduleDef.id);
        } else {
          locked.push(moduleDef.id);
        }
    }
  }

  const completionPercentage = Math.round(
    (completed.length / course.modules.length) * 100
  );

  // Estimate remaining time
  const remainingModules = [...inProgress, ...available, ...locked];
  const estimatedTimeRemaining = remainingModules.reduce((sum, modId) => {
    const def = course.modules.find((m) => m.id === modId);
    return sum + (def?.estimatedMinutes ?? 0);
  }, 0);

  return {
    completedModules: completed,
    inProgressModules: inProgress,
    availableModules: available,
    lockedModules: locked,
    completionPercentage,
    totalScore: data.progress.overallScore,
    maxScore: data.progress.maxPossibleScore,
    estimatedTimeRemaining,
  };
}

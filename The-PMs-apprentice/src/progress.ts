/**
 * Progress tracker — manages module/stage advancement and score recording.
 *
 * Works with the learner store to persist all state changes.
 */

import type {
  LearnerData,
  ModuleId,
  ModuleProgress,
  StageProgress,
  CourseProgress,
  ModuleStatus,
  StageStatus,
} from "./types.js";
import { saveLearner } from "./store.js";
import { getModule, loadCourse } from "./curriculum.js";

// ---------------------------------------------------------------------------
// Module progress initialization
// ---------------------------------------------------------------------------

function initModuleProgress(moduleId: ModuleId): ModuleProgress {
  const moduleDef = getModule(moduleId);
  const stages: StageProgress[] = (moduleDef?.stages ?? []).map((s, i) => ({
    stageId: s.id,
    status: i === 0 ? "available" : "locked",
    attempts: 0,
    score: null,
    maxScore: null,
    feedback: [],
  }));

  return {
    moduleId,
    status: "available",
    currentStageId: stages.length > 0 ? stages[0].stageId : null,
    stages,
    totalScore: 0,
    maxPossibleScore: 0,
  };
}

function getOrCreateModuleProgress(
  data: LearnerData,
  moduleId: ModuleId
): ModuleProgress {
  let mp = data.progress.modules.find((m) => m.moduleId === moduleId);
  if (!mp) {
    mp = initModuleProgress(moduleId);
    data.progress.modules.push(mp);
  }
  return mp;
}

// ---------------------------------------------------------------------------
// Start module
// ---------------------------------------------------------------------------

export function startModule(
  data: LearnerData,
  moduleId: ModuleId
): { moduleProgress: ModuleProgress; firstStageId: string | null } {
  const mp = getOrCreateModuleProgress(data, moduleId);

  if (mp.status === "locked") {
    mp.status = "available";
  }

  if (mp.status !== "completed") {
    mp.status = "in-progress";
    mp.startedAt = mp.startedAt ?? new Date().toISOString();
  }

  // Ensure first stage is available
  if (mp.stages.length > 0 && mp.stages[0].status === "locked") {
    mp.stages[0].status = "available";
  }

  const firstStageId = mp.currentStageId ?? mp.stages[0]?.stageId ?? null;
  mp.currentStageId = firstStageId;

  saveLearner(data);
  return { moduleProgress: mp, firstStageId };
}

// ---------------------------------------------------------------------------
// Advance stage
// ---------------------------------------------------------------------------

export function advanceStage(
  data: LearnerData,
  moduleId: ModuleId
): {
  previousStageId: string | null;
  nextStageId: string | null;
  moduleCompleted: boolean;
} {
  const mp = getOrCreateModuleProgress(data, moduleId);
  const currentIdx = mp.stages.findIndex(
    (s) => s.stageId === mp.currentStageId
  );

  const previousStageId = mp.currentStageId;

  // Mark current stage as completed
  if (currentIdx >= 0) {
    const currentStage = mp.stages[currentIdx];
    currentStage.status = "completed";
    currentStage.completedAt = new Date().toISOString();
  }

  // Move to next stage
  const nextIdx = currentIdx + 1;
  if (nextIdx < mp.stages.length) {
    const nextStage = mp.stages[nextIdx];
    nextStage.status = "available";
    if (!nextStage.startedAt) {
      nextStage.startedAt = new Date().toISOString();
    }
    mp.currentStageId = nextStage.stageId;
    saveLearner(data);
    return {
      previousStageId,
      nextStageId: nextStage.stageId,
      moduleCompleted: false,
    };
  }

  // All stages done — module completed
  mp.status = "completed";
  mp.completedAt = new Date().toISOString();
  mp.currentStageId = null;
  data.progress.modulesCompleted = data.progress.modules.filter(
    (m) => m.status === "completed"
  ).length;

  // Recalculate overall score
  data.progress.overallScore = data.progress.modules.reduce(
    (sum, m) => sum + m.totalScore,
    0
  );
  data.progress.maxPossibleScore = data.progress.modules.reduce(
    (sum, m) => sum + m.maxPossibleScore,
    0
  );

  saveLearner(data);
  return {
    previousStageId,
    nextStageId: null,
    moduleCompleted: true,
  };
}

// ---------------------------------------------------------------------------
// Record checkpoint score
// ---------------------------------------------------------------------------

export function recordCheckpoint(
  data: LearnerData,
  moduleId: ModuleId,
  stageId: string,
  score: number,
  maxScore: number,
  feedback: string
): StageProgress {
  const mp = getOrCreateModuleProgress(data, moduleId);
  let stage = mp.stages.find((s) => s.stageId === stageId);

  if (!stage) {
    // Create stage entry if it doesn't exist
    stage = {
      stageId,
      status: "in-progress",
      attempts: 0,
      score: null,
      maxScore: null,
      feedback: [],
    };
    mp.stages.push(stage);
  }

  stage.score = score;
  stage.maxScore = maxScore;
  stage.attempts++;
  if (feedback) stage.feedback.push(feedback);

  // Recalculate module totals
  mp.totalScore = mp.stages.reduce((sum, s) => sum + (s.score ?? 0), 0);
  mp.maxPossibleScore = mp.stages.reduce(
    (sum, s) => sum + (s.maxScore ?? 0),
    0
  );

  saveLearner(data);
  return stage;
}

// ---------------------------------------------------------------------------
// Complete module with debrief
// ---------------------------------------------------------------------------

export function completeModule(
  data: LearnerData,
  moduleId: ModuleId,
  debriefSummary?: string
): ModuleProgress {
  const mp = getOrCreateModuleProgress(data, moduleId);
  mp.status = "completed";
  mp.completedAt = new Date().toISOString();
  if (debriefSummary) mp.debriefSummary = debriefSummary;

  // Mark all remaining stages as completed
  for (const stage of mp.stages) {
    if (stage.status !== "completed") {
      stage.status = "completed";
      stage.completedAt = new Date().toISOString();
    }
  }

  // Update course-level stats
  data.progress.modulesCompleted = data.progress.modules.filter(
    (m) => m.status === "completed"
  ).length;
  data.progress.overallScore = data.progress.modules.reduce(
    (sum, m) => sum + m.totalScore,
    0
  );
  data.progress.maxPossibleScore = data.progress.modules.reduce(
    (sum, m) => sum + m.maxPossibleScore,
    0
  );

  saveLearner(data);
  return mp;
}

// ---------------------------------------------------------------------------
// Reset module progress
// ---------------------------------------------------------------------------

export function resetModuleProgress(
  data: LearnerData,
  moduleId: ModuleId
): ModuleProgress {
  // Remove existing progress
  data.progress.modules = data.progress.modules.filter(
    (m) => m.moduleId !== moduleId
  );

  // Re-initialize
  const mp = initModuleProgress(moduleId);
  data.progress.modules.push(mp);

  // Recalculate
  data.progress.modulesCompleted = data.progress.modules.filter(
    (m) => m.status === "completed"
  ).length;
  data.progress.overallScore = data.progress.modules.reduce(
    (sum, m) => sum + m.totalScore,
    0
  );
  data.progress.maxPossibleScore = data.progress.modules.reduce(
    (sum, m) => sum + m.maxPossibleScore,
    0
  );

  saveLearner(data);
  return mp;
}

// ---------------------------------------------------------------------------
// Time tracking (estimated from stage transitions)
// ---------------------------------------------------------------------------

export function estimateTimeSpent(data: LearnerData): number {
  let totalMinutes = 0;
  for (const mp of data.progress.modules) {
    for (const stage of mp.stages) {
      if (stage.startedAt && stage.completedAt) {
        const start = new Date(stage.startedAt).getTime();
        const end = new Date(stage.completedAt).getTime();
        const minutes = (end - start) / 60_000;
        // Cap at 120 minutes per stage to handle idle time
        totalMinutes += Math.min(minutes, 120);
      }
    }
  }
  data.progress.totalMinutesSpent = Math.round(totalMinutes);
  return data.progress.totalMinutesSpent;
}

// ---------------------------------------------------------------------------
// Query helpers
// ---------------------------------------------------------------------------

export function getModuleStatus(
  data: LearnerData,
  moduleId: ModuleId
): ModuleStatus {
  const mp = data.progress.modules.find((m) => m.moduleId === moduleId);
  return mp?.status ?? "locked";
}

export function getCurrentStage(
  data: LearnerData,
  moduleId: ModuleId
): string | null {
  const mp = data.progress.modules.find((m) => m.moduleId === moduleId);
  return mp?.currentStageId ?? null;
}

export function isModuleUnlocked(
  data: LearnerData,
  moduleId: ModuleId
): boolean {
  const moduleDef = getModule(moduleId);
  if (!moduleDef) return false;

  // No prerequisites = always unlocked
  if (moduleDef.prerequisites.length === 0) return true;

  // All prerequisites must be completed
  return moduleDef.prerequisites.every(
    (prereq) => getModuleStatus(data, prereq) === "completed"
  );
}

#!/usr/bin/env node
/**
 * The PM's Apprentice — MCP Server
 *
 * A stateful, adaptive PM learning tutor exposed via MCP.
 * Designed for UI integration: every tool returns structured JSON
 * alongside human-readable markdown.
 *
 * Tools:
 *   1. enroll            — Create a new learner profile
 *   2. get_profile       — Get learner profile and progress summary
 *   3. get_course        — Get full course outline with per-module status
 *   4. start_module      — Begin or resume a module
 *   5. advance_stage     — Complete current stage and move to next
 *   6. record_checkpoint — Record a quiz/exercise score
 *   7. complete_module   — Finish a module with debrief
 *   8. get_module_content— Get curriculum content for a module/stage
 *   9. get_recommendations— Get personalized next-step recommendations
 *  10. reset_progress    — Reset a module or all progress
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import type { ToolResponse, ModuleId } from "./types.js";
import { MODULE_IDS } from "./types.js";
import {
  createLearner,
  loadLearner,
  listLearners,
  updateProfile,
  addAgentNote,
  startSession,
  recordInteraction,
} from "./store.js";
import {
  loadCourse,
  getModule,
  loadModuleContent,
  loadStageContent,
  listModules,
  getModuleTitle,
} from "./curriculum.js";
import {
  startModule as startModuleProgress,
  advanceStage as advanceStageProgress,
  recordCheckpoint as recordCheckpointProgress,
  completeModule as completeModuleProgress,
  resetModuleProgress,
  getModuleStatus,
  getCurrentStage,
  isModuleUnlocked,
} from "./progress.js";
import {
  generateLearningPath,
  getRecommendations,
  getProgressSummary,
  recordSignal,
  analyzeBehavior,
} from "./adaptive.js";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function ok<T>(data: T, message: string, nextAction?: ToolResponse["nextAction"]): {
  content: Array<{ type: "text"; text: string }>;
} {
  const response: ToolResponse<T> = {
    success: true,
    data,
    message,
    nextAction,
  };
  return {
    content: [{ type: "text", text: JSON.stringify(response, null, 2) }],
  };
}

function fail(message: string): {
  content: Array<{ type: "text"; text: string }>;
} {
  const response: ToolResponse = {
    success: false,
    data: null,
    message,
  };
  return {
    content: [{ type: "text", text: JSON.stringify(response, null, 2) }],
  };
}

const ModuleIdEnum = z.enum(MODULE_IDS as unknown as [string, ...string[]]);

// ---------------------------------------------------------------------------
// Server
// ---------------------------------------------------------------------------

const server = new McpServer({
  name: "the-pms-apprentice",
  version: "0.1.0",
});

// ── Tool 1: enroll ──────────────────────────────────────────────────────────

server.tool(
  "enroll",
  "Create a new learner profile. Call this when a user first starts the course. Returns the profile with a generated learning path.",
  {
    name: z.string().describe("Learner's name or display name."),
    experience_level: z
      .enum(["new-to-pm", "career-switcher", "junior-pm", "mid-pm", "senior-pm"])
      .describe("Learner's current PM experience level."),
    goals: z
      .array(
        z.enum([
          "career-switch",
          "interview-prep",
          "skill-gap",
          "ai-pm",
          "general-growth",
          "vibe-coding",
        ])
      )
      .describe("Learner's goals for taking the course (1-3 recommended)."),
    self_assessment: z
      .record(z.string(), z.number())
      .optional()
      .describe(
        "Optional self-assessed skill scores (0-5) by area: discovery, strategy, metrics, execution, stakeholders, modern-pm."
      ),
  },
  async ({ name, experience_level, goals, self_assessment }) => {
    const data = createLearner(
      name,
      experience_level,
      goals,
      self_assessment ?? {},
      []
    );

    // Generate and save learning path
    const path = generateLearningPath(data);
    data.profile.learningPath = path;

    // Start a session
    startSession(data);

    const pathTitles = path.map((id) => getModuleTitle(id));

    return ok(
      {
        learner_id: data.profile.id,
        name: data.profile.name,
        learning_path: path,
        learning_path_titles: pathTitles,
        total_modules: path.length,
      },
      `Welcome, ${name}! 🎓\n\nI've created your personalized learning path with ${path.length} modules:\n\n${pathTitles.map((t, i) => `${i + 1}. ${t}`).join("\n")}\n\nReady to begin? Let's start with "${pathTitles[0]}".`,
      {
        tool: "start_module",
        description: `Begin with ${pathTitles[0]}`,
        params: { learner_id: data.profile.id, module_id: path[0] },
      }
    );
  }
);

// ── Tool 2: get_profile ─────────────────────────────────────────────────────

server.tool(
  "get_profile",
  "Get a learner's profile, progress summary, and behavioral analysis. Use this to understand where a learner is and what they need.",
  {
    learner_id: z.string().describe("The learner's unique ID."),
  },
  async ({ learner_id }) => {
    const data = loadLearner(learner_id);
    if (!data) return fail(`Learner "${learner_id}" not found.`);

    const summary = getProgressSummary(data);
    const behaviorInsight = analyzeBehavior(data);

    return ok(
      {
        profile: data.profile,
        progress: summary,
        behavioral_insight: behaviorInsight,
        recent_sessions: data.sessions.slice(-3),
      },
      `**${data.profile.name}** — ${data.profile.experienceLevel}\n\n` +
        `📊 Progress: ${summary.completionPercentage}% complete (${summary.completedModules.length}/${data.progress.totalModules} modules)\n` +
        `🏆 Score: ${summary.totalScore}/${summary.maxScore}\n` +
        `⏱️ Est. remaining: ${summary.estimatedTimeRemaining} min\n\n` +
        (behaviorInsight ? `💡 Insight: ${behaviorInsight}` : "")
    );
  }
);

// ── Tool 3: get_course ──────────────────────────────────────────────────────

server.tool(
  "get_course",
  "Get the full course outline with module details. If a learner_id is provided, includes per-module completion status.",
  {
    learner_id: z
      .string()
      .optional()
      .describe("Optional learner ID to include progress status per module."),
  },
  async ({ learner_id }) => {
    const course = loadCourse();
    const data = learner_id ? loadLearner(learner_id) : null;

    const moduleList = course.modules.map((mod) => {
      const status = data ? getModuleStatus(data, mod.id) : "available";
      const unlocked = data ? isModuleUnlocked(data, mod.id) : true;
      const currentStage = data ? getCurrentStage(data, mod.id) : null;

      return {
        id: mod.id,
        title: mod.title,
        description: mod.description,
        unit: mod.unit,
        unitTitle: mod.unitTitle,
        complexity: mod.complexity,
        estimatedMinutes: mod.estimatedMinutes,
        prerequisites: mod.prerequisites,
        stages: mod.stages.length,
        status,
        unlocked,
        currentStage,
      };
    });

    const courseMarkdown = moduleList
      .map((m) => {
        const statusIcon =
          m.status === "completed"
            ? "✅"
            : m.status === "in-progress"
              ? "🔵"
              : m.unlocked
                ? "⚪"
                : "🔒";
        return `${statusIcon} **${m.title}** (${m.estimatedMinutes} min, ${m.complexity})\n   ${m.description}`;
      })
      .join("\n\n");

    return ok(
      {
        title: course.title,
        version: course.version,
        total_hours: course.totalEstimatedHours,
        modules: moduleList,
      },
      `# ${course.title}\n\n${courseMarkdown}`
    );
  }
);

// ── Tool 4: start_module ────────────────────────────────────────────────────

server.tool(
  "start_module",
  "Begin or resume a specific learning module. Returns the first stage content and module metadata.",
  {
    learner_id: z.string().describe("The learner's unique ID."),
    module_id: ModuleIdEnum.describe("The module to start (e.g. 'foundations', 'metrics')."),
  },
  async ({ learner_id, module_id }) => {
    const data = loadLearner(learner_id);
    if (!data) return fail(`Learner "${learner_id}" not found.`);

    const moduleId = module_id as ModuleId;
    const moduleDef = getModule(moduleId);
    if (!moduleDef) return fail(`Module "${module_id}" not found.`);

    // Check prerequisites
    if (!isModuleUnlocked(data, moduleId)) {
      return fail(
        `Module "${moduleDef.title}" is locked. Prerequisites: ${moduleDef.prerequisites.join(", ")}.`
      );
    }

    const { moduleProgress, firstStageId } = startModuleProgress(data, moduleId);
    recordInteraction(data, moduleId, firstStageId);

    // Load the content for the first (or current) stage
    const stageContent = firstStageId
      ? loadStageContent(moduleId, firstStageId)
      : loadModuleContent(moduleId);

    // Load full module content for the AI agent's reference
    const fullContent = loadModuleContent(moduleId);

    return ok(
      {
        module_id: moduleId,
        module_title: moduleDef.title,
        stage_id: firstStageId,
        stage_content: stageContent,
        full_module_content: fullContent,
        total_stages: moduleDef.stages.length,
        learning_objectives: moduleDef.learningObjectives,
        progress: moduleProgress,
      },
      `# Starting: ${moduleDef.title}\n\n` +
        `**Complexity:** ${moduleDef.complexity} | **Est. time:** ${moduleDef.estimatedMinutes} min | **Stages:** ${moduleDef.stages.length}\n\n` +
        `**Learning Objectives:**\n${moduleDef.learningObjectives.map((o) => `- ${o}`).join("\n")}\n\n` +
        `---\n\n${stageContent ?? "Module content not found."}`
    );
  }
);

// ── Tool 5: advance_stage ───────────────────────────────────────────────────

server.tool(
  "advance_stage",
  "Complete the current stage and advance to the next one. Call this when the learner has finished the current stage's exercises or quiz.",
  {
    learner_id: z.string().describe("The learner's unique ID."),
    module_id: ModuleIdEnum.describe("The module being worked on."),
    agent_notes: z
      .string()
      .optional()
      .describe(
        "Optional notes from the agent about how the learner performed in this stage."
      ),
    signal: z
      .enum(["struggling", "excelling", "disengaged", "curious", "rushing", "thorough"])
      .optional()
      .describe("Optional behavioral signal observed during this stage."),
  },
  async ({ learner_id, module_id, agent_notes, signal }) => {
    const data = loadLearner(learner_id);
    if (!data) return fail(`Learner "${learner_id}" not found.`);

    const moduleId = module_id as ModuleId;

    // Record behavioral signal if provided
    if (signal) {
      recordSignal(data, {
        type: signal,
        context: `Module: ${moduleId}, Stage advance`,
      });
    }

    if (agent_notes) {
      addAgentNote(data, `[${moduleId}] ${agent_notes}`);
    }

    const result = advanceStageProgress(data, moduleId);
    recordInteraction(data, moduleId, result.nextStageId);

    if (result.moduleCompleted) {
      return ok(
        {
          module_id: moduleId,
          previous_stage: result.previousStageId,
          next_stage: null,
          module_completed: true,
        },
        `🎉 You've completed all stages in "${getModuleTitle(moduleId)}"!\n\nUse \`complete_module\` to finalize with a debrief, or \`get_recommendations\` to see what's next.`,
        {
          tool: "complete_module",
          description: "Finalize the module with a debrief",
          params: { learner_id, module_id },
        }
      );
    }

    // Load next stage content
    const stageContent = result.nextStageId
      ? loadStageContent(moduleId, result.nextStageId)
      : null;

    return ok(
      {
        module_id: moduleId,
        previous_stage: result.previousStageId,
        next_stage: result.nextStageId,
        stage_content: stageContent,
        module_completed: false,
      },
      `✅ Stage complete! Moving to next stage.\n\n---\n\n${stageContent ?? ""}`
    );
  }
);

// ── Tool 6: record_checkpoint ───────────────────────────────────────────────

server.tool(
  "record_checkpoint",
  "Record a quiz or exercise score for a specific stage. The agent should evaluate the learner's response and call this with the score.",
  {
    learner_id: z.string().describe("The learner's unique ID."),
    module_id: ModuleIdEnum.describe("The module the checkpoint belongs to."),
    stage_id: z.string().describe("The stage ID (e.g. 'quiz-1', 'stage-2')."),
    score: z.number().describe("Score achieved (0 or higher)."),
    max_score: z.number().describe("Maximum possible score for this checkpoint."),
    feedback: z
      .string()
      .describe("Agent's feedback on the learner's performance."),
  },
  async ({ learner_id, module_id, stage_id, score, max_score, feedback }) => {
    const data = loadLearner(learner_id);
    if (!data) return fail(`Learner "${learner_id}" not found.`);

    const moduleId = module_id as ModuleId;
    const stageProgress = recordCheckpointProgress(
      data,
      moduleId,
      stage_id,
      score,
      max_score,
      feedback
    );

    const percentage = max_score > 0 ? Math.round((score / max_score) * 100) : 0;

    return ok(
      {
        module_id: moduleId,
        stage_id,
        score,
        max_score,
        percentage,
        attempts: stageProgress.attempts,
        feedback,
      },
      `📝 Checkpoint recorded: **${score}/${max_score}** (${percentage}%)\n\n${feedback}`
    );
  }
);

// ── Tool 7: complete_module ─────────────────────────────────────────────────

server.tool(
  "complete_module",
  "Finalize a module with a debrief summary. Call this after the learner has completed all stages and you've delivered the debrief.",
  {
    learner_id: z.string().describe("The learner's unique ID."),
    module_id: ModuleIdEnum.describe("The module to complete."),
    debrief_summary: z
      .string()
      .optional()
      .describe(
        "Summary of the learner's performance, strengths, and areas for growth."
      ),
  },
  async ({ learner_id, module_id, debrief_summary }) => {
    const data = loadLearner(learner_id);
    if (!data) return fail(`Learner "${learner_id}" not found.`);

    const moduleId = module_id as ModuleId;
    const mp = completeModuleProgress(data, moduleId, debrief_summary);
    const recommendations = getRecommendations(data);
    const nextRec = recommendations.find((r) => r.priority === "next");

    return ok(
      {
        module_id: moduleId,
        module_title: getModuleTitle(moduleId),
        total_score: mp.totalScore,
        max_score: mp.maxPossibleScore,
        debrief: debrief_summary,
        recommendations: recommendations.slice(0, 3),
      },
      `🎓 Module "${getModuleTitle(moduleId)}" complete!\n\n` +
        `**Score:** ${mp.totalScore}/${mp.maxPossibleScore}\n\n` +
        (debrief_summary ? `**Debrief:** ${debrief_summary}\n\n` : "") +
        (nextRec
          ? `**Up next:** ${getModuleTitle(nextRec.moduleId)} — ${nextRec.reason}`
          : "🏆 Congratulations! You've completed the course!"),
      nextRec
        ? {
            tool: "start_module",
            description: `Start ${getModuleTitle(nextRec.moduleId)}`,
            params: { learner_id, module_id: nextRec.moduleId },
          }
        : undefined
    );
  }
);

// ── Tool 8: get_module_content ──────────────────────────────────────────────

server.tool(
  "get_module_content",
  "Get the full curriculum content for a module, or a specific stage within it. Use this when you need the teaching material to guide the learner.",
  {
    module_id: ModuleIdEnum.describe("The module ID."),
    stage_id: z
      .string()
      .optional()
      .describe(
        "Optional stage ID to get content for a specific stage (e.g. 'stage-1', 'quiz-2', 'debrief')."
      ),
  },
  async ({ module_id, stage_id }) => {
    const moduleId = module_id as ModuleId;
    const moduleDef = getModule(moduleId);
    if (!moduleDef) return fail(`Module "${module_id}" not found.`);

    const content = stage_id
      ? loadStageContent(moduleId, stage_id)
      : loadModuleContent(moduleId);

    if (!content) {
      return fail(
        `Content not found for module "${module_id}"${stage_id ? `, stage "${stage_id}"` : ""}.`
      );
    }

    return ok(
      {
        module_id: moduleId,
        module_title: moduleDef.title,
        stage_id: stage_id ?? null,
        content,
        stages: moduleDef.stages,
      },
      content
    );
  }
);

// ── Tool 9: get_recommendations ─────────────────────────────────────────────

server.tool(
  "get_recommendations",
  "Get personalized next-step recommendations for a learner based on their progress, goals, and behavior.",
  {
    learner_id: z.string().describe("The learner's unique ID."),
  },
  async ({ learner_id }) => {
    const data = loadLearner(learner_id);
    if (!data) return fail(`Learner "${learner_id}" not found.`);

    const recommendations = getRecommendations(data);
    const summary = getProgressSummary(data);
    const behaviorInsight = analyzeBehavior(data);

    const recMarkdown = recommendations
      .map((r) => {
        const icon =
          r.priority === "next" ? "➡️" : r.priority === "suggested" ? "💡" : "📌";
        return `${icon} **${getModuleTitle(r.moduleId)}** (${r.estimatedMinutes} min)\n   ${r.reason}`;
      })
      .join("\n\n");

    return ok(
      {
        recommendations,
        progress: summary,
        behavioral_insight: behaviorInsight,
      },
      `# What's Next?\n\n` +
        `Progress: ${summary.completionPercentage}% complete\n\n` +
        recMarkdown +
        (behaviorInsight ? `\n\n---\n💡 ${behaviorInsight}` : "")
    );
  }
);

// ── Tool 10: reset_progress ─────────────────────────────────────────────────

server.tool(
  "reset_progress",
  "Reset progress for a specific module (to retake it) or list all learners.",
  {
    learner_id: z.string().describe("The learner's unique ID."),
    module_id: ModuleIdEnum.optional().describe(
      "Module to reset. Omit to list current progress without resetting."
    ),
  },
  async ({ learner_id, module_id }) => {
    const data = loadLearner(learner_id);
    if (!data) return fail(`Learner "${learner_id}" not found.`);

    if (!module_id) {
      // Just return current progress
      const summary = getProgressSummary(data);
      return ok(
        summary,
        `Current progress: ${summary.completionPercentage}% complete.\nCompleted: ${summary.completedModules.join(", ") || "none"}\nIn progress: ${summary.inProgressModules.join(", ") || "none"}`
      );
    }

    const moduleId = module_id as ModuleId;
    const mp = resetModuleProgress(data, moduleId);

    return ok(
      {
        module_id: moduleId,
        reset: true,
        new_status: mp.status,
      },
      `♻️ Module "${getModuleTitle(moduleId)}" has been reset. You can start it fresh anytime.`,
      {
        tool: "start_module",
        description: `Restart ${getModuleTitle(moduleId)}`,
        params: { learner_id, module_id: moduleId },
      }
    );
  }
);

// ---------------------------------------------------------------------------
// Start
// ---------------------------------------------------------------------------

const transport = new StdioServerTransport();
await server.connect(transport);

/**
 * The PM's Apprentice — Type definitions
 *
 * All data models for the stateful learning platform.
 * Designed for UI consumption: every type can be serialized to JSON
 * and rendered by a frontend without transformation.
 */

// ---------------------------------------------------------------------------
// Module & Course structure
// ---------------------------------------------------------------------------

/** The 11 course modules, in canonical order. */
export const MODULE_IDS = [
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
] as const;

export type ModuleId = (typeof MODULE_IDS)[number];

/** A stage within a module (e.g. "stage-1", "quiz-1", "debrief"). */
export interface StageDefinition {
  id: string;
  title: string;
  type: "lesson" | "exercise" | "quiz" | "simulation" | "debrief";
  estimatedMinutes: number;
}

/** Machine-readable module metadata (loaded from course.json). */
export interface ModuleDefinition {
  id: ModuleId;
  title: string;
  description: string;
  unit: number;
  unitTitle: string;
  order: number;
  estimatedMinutes: number;
  complexity: "beginner" | "intermediate" | "advanced";
  prerequisites: ModuleId[];
  stages: StageDefinition[];
  learningObjectives: string[];
}

/** The full course definition. */
export interface CourseDefinition {
  title: string;
  version: string;
  totalEstimatedHours: number;
  modules: ModuleDefinition[];
}

// ---------------------------------------------------------------------------
// Learner profile & preferences
// ---------------------------------------------------------------------------

export type ExperienceLevel =
  | "new-to-pm"
  | "career-switcher"
  | "junior-pm"
  | "mid-pm"
  | "senior-pm";

export type LearningGoal =
  | "career-switch"
  | "interview-prep"
  | "skill-gap"
  | "ai-pm"
  | "general-growth"
  | "vibe-coding";

export interface LearnerProfile {
  id: string;
  name: string;
  createdAt: string; // ISO 8601
  updatedAt: string;
  experienceLevel: ExperienceLevel;
  goals: LearningGoal[];
  /** Self-assessed strengths from enrollment diagnostic (0-5 per area). */
  selfAssessment: Record<string, number>;
  /** Free-form notes from the agent about this learner. */
  agentNotes: string[];
  /** Recommended module sequence (set during enrollment, can be updated). */
  learningPath: ModuleId[];
}

// ---------------------------------------------------------------------------
// Progress tracking
// ---------------------------------------------------------------------------

export type StageStatus = "locked" | "available" | "in-progress" | "completed";

export interface StageProgress {
  stageId: string;
  status: StageStatus;
  startedAt?: string;
  completedAt?: string;
  /** Number of attempts at this stage (for quizzes/exercises). */
  attempts: number;
  /** Score achieved (null if not scorable or not yet attempted). */
  score: number | null;
  maxScore: number | null;
  /** Agent notes about learner performance at this stage. */
  feedback: string[];
}

export type ModuleStatus =
  | "locked"
  | "available"
  | "in-progress"
  | "completed";

export interface ModuleProgress {
  moduleId: ModuleId;
  status: ModuleStatus;
  currentStageId: string | null;
  startedAt?: string;
  completedAt?: string;
  /** Overall module score (sum of stage scores). */
  totalScore: number;
  maxPossibleScore: number;
  /** Per-stage progress. */
  stages: StageProgress[];
  /** Detailed feedback from module completion debrief. */
  debriefSummary?: string;
}

/** Aggregate progress across the entire course. */
export interface CourseProgress {
  learnerId: string;
  enrolledAt: string;
  lastActiveAt: string;
  modulesCompleted: number;
  totalModules: number;
  overallScore: number;
  maxPossibleScore: number;
  /** Time spent in minutes (estimated from stage transitions). */
  totalMinutesSpent: number;
  modules: ModuleProgress[];
}

// ---------------------------------------------------------------------------
// Assessment
// ---------------------------------------------------------------------------

export interface QuizQuestion {
  id: string;
  question: string;
  type: "multiple-choice" | "true-false" | "free-text" | "rating";
  options?: string[];
  correctAnswer?: string | string[];
  maxScore: number;
  rubric?: string;
}

export interface QuizCheckpoint {
  checkpointId: string;
  moduleId: ModuleId;
  stageId: string;
  questions: QuizQuestion[];
  passingScore: number;
}

export interface AssessmentResult {
  checkpointId: string;
  moduleId: ModuleId;
  stageId: string;
  learnerId: string;
  submittedAt: string;
  answers: Record<string, string>;
  scores: Record<string, number>;
  totalScore: number;
  maxScore: number;
  passed: boolean;
  feedback: string;
}

// ---------------------------------------------------------------------------
// Session & interaction tracking
// ---------------------------------------------------------------------------

export interface LearnerSession {
  sessionId: string;
  learnerId: string;
  startedAt: string;
  lastActiveAt: string;
  currentModuleId: ModuleId | null;
  currentStageId: string | null;
  /** Interaction count in this session. */
  interactions: number;
  /** Behavioral signals observed by the agent. */
  signals: BehavioralSignal[];
}

export interface BehavioralSignal {
  timestamp: string;
  type:
    | "struggling"
    | "excelling"
    | "disengaged"
    | "curious"
    | "rushing"
    | "thorough";
  context: string;
  /** Agent's recommended adjustment based on this signal. */
  recommendation?: string;
}

// ---------------------------------------------------------------------------
// MCP tool response wrappers (structured for UI rendering)
// ---------------------------------------------------------------------------

/** Every MCP tool response includes this envelope for the UI. */
export interface ToolResponse<T = unknown> {
  success: boolean;
  /** Machine-readable data for the UI to render. */
  data: T;
  /** Human-readable markdown for the AI agent to relay to the user. */
  message: string;
  /** Suggested next action for the UI/agent. */
  nextAction?: {
    tool: string;
    description: string;
    params?: Record<string, string>;
  };
}

// ---------------------------------------------------------------------------
// Recommendation
// ---------------------------------------------------------------------------

export interface Recommendation {
  moduleId: ModuleId;
  reason: string;
  priority: "next" | "suggested" | "optional";
  estimatedMinutes: number;
}

// ---------------------------------------------------------------------------
// Stored learner data (what gets persisted to disk)
// ---------------------------------------------------------------------------

export interface LearnerData {
  profile: LearnerProfile;
  progress: CourseProgress;
  sessions: LearnerSession[];
  assessments: AssessmentResult[];
}

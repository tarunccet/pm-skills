/**
 * Learner state persistence — file-based JSON store.
 *
 * Each learner gets a JSON file: data/learners/{id}.json
 * This is intentionally simple — swap in a DB adapter later
 * by implementing the same interface.
 */

import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";
import type {
  LearnerData,
  LearnerProfile,
  CourseProgress,
  ModuleProgress,
  LearnerSession,
  AssessmentResult,
  ExperienceLevel,
  LearningGoal,
  ModuleId,
  MODULE_IDS,
} from "./types.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.resolve(__dirname, "..", "data", "learners");

// Ensure data directory exists
function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function learnerPath(id: string): string {
  // Sanitize ID to prevent path traversal
  const safeId = id.replace(/[^a-zA-Z0-9_-]/g, "");
  return path.join(DATA_DIR, `${safeId}.json`);
}

// ---------------------------------------------------------------------------
// CRUD operations
// ---------------------------------------------------------------------------

export function createLearner(
  name: string,
  experienceLevel: ExperienceLevel,
  goals: LearningGoal[],
  selfAssessment: Record<string, number> = {},
  learningPath: ModuleId[] = []
): LearnerData {
  ensureDataDir();
  const id = crypto.randomUUID();
  const now = new Date().toISOString();

  const profile: LearnerProfile = {
    id,
    name,
    createdAt: now,
    updatedAt: now,
    experienceLevel,
    goals,
    selfAssessment,
    agentNotes: [],
    learningPath,
  };

  const progress: CourseProgress = {
    learnerId: id,
    enrolledAt: now,
    lastActiveAt: now,
    modulesCompleted: 0,
    totalModules: 11,
    overallScore: 0,
    maxPossibleScore: 0,
    totalMinutesSpent: 0,
    modules: [],
  };

  const data: LearnerData = {
    profile,
    progress,
    sessions: [],
    assessments: [],
  };

  saveLearner(data);
  return data;
}

export function loadLearner(id: string): LearnerData | null {
  ensureDataDir();
  const filePath = learnerPath(id);
  if (!fs.existsSync(filePath)) return null;
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    return JSON.parse(raw) as LearnerData;
  } catch {
    return null;
  }
}

export function saveLearner(data: LearnerData): void {
  ensureDataDir();
  const filePath = learnerPath(data.profile.id);
  data.profile.updatedAt = new Date().toISOString();
  data.progress.lastActiveAt = new Date().toISOString();
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
}

export function listLearners(): Array<{ id: string; name: string; lastActive: string }> {
  ensureDataDir();
  const files = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith(".json"));
  const learners: Array<{ id: string; name: string; lastActive: string }> = [];
  for (const file of files) {
    try {
      const raw = fs.readFileSync(path.join(DATA_DIR, file), "utf8");
      const data = JSON.parse(raw) as LearnerData;
      learners.push({
        id: data.profile.id,
        name: data.profile.name,
        lastActive: data.progress.lastActiveAt,
      });
    } catch {
      // Skip corrupt files
    }
  }
  return learners.sort(
    (a, b) => new Date(b.lastActive).getTime() - new Date(a.lastActive).getTime()
  );
}

export function deleteLearner(id: string): boolean {
  const filePath = learnerPath(id);
  if (!fs.existsSync(filePath)) return false;
  fs.unlinkSync(filePath);
  return true;
}

// ---------------------------------------------------------------------------
// Profile update helpers
// ---------------------------------------------------------------------------

export function updateProfile(
  data: LearnerData,
  updates: Partial<Pick<LearnerProfile, "name" | "experienceLevel" | "goals" | "selfAssessment" | "learningPath">>
): LearnerData {
  Object.assign(data.profile, updates);
  saveLearner(data);
  return data;
}

export function addAgentNote(data: LearnerData, note: string): LearnerData {
  data.profile.agentNotes.push(note);
  saveLearner(data);
  return data;
}

// ---------------------------------------------------------------------------
// Session helpers
// ---------------------------------------------------------------------------

export function startSession(data: LearnerData): LearnerSession {
  const session: LearnerSession = {
    sessionId: crypto.randomUUID(),
    learnerId: data.profile.id,
    startedAt: new Date().toISOString(),
    lastActiveAt: new Date().toISOString(),
    currentModuleId: null,
    currentStageId: null,
    interactions: 0,
    signals: [],
  };
  data.sessions.push(session);
  saveLearner(data);
  return session;
}

export function getActiveSession(data: LearnerData): LearnerSession | null {
  if (data.sessions.length === 0) return null;
  return data.sessions[data.sessions.length - 1];
}

export function recordInteraction(
  data: LearnerData,
  moduleId: ModuleId | null,
  stageId: string | null
): void {
  const session = getActiveSession(data);
  if (session) {
    session.lastActiveAt = new Date().toISOString();
    session.currentModuleId = moduleId;
    session.currentStageId = stageId;
    session.interactions++;
    saveLearner(data);
  }
}

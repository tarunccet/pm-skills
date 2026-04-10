/**
 * Curriculum loader — reads module SKILL.md files and course.json.
 *
 * Provides structured access to curriculum content for the MCP tools.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import type { CourseDefinition, ModuleDefinition, ModuleId } from "./types.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Curriculum lives one level up from dist/ in the published package
const CURRICULUM_DIR = path.resolve(__dirname, "..", "curriculum");

// ---------------------------------------------------------------------------
// Course definition loader
// ---------------------------------------------------------------------------

let _courseCache: CourseDefinition | null = null;

export function loadCourse(): CourseDefinition {
  if (_courseCache) return _courseCache;
  const coursePath = path.join(CURRICULUM_DIR, "course.json");
  if (!fs.existsSync(coursePath)) {
    throw new Error(`Course definition not found at ${coursePath}`);
  }
  _courseCache = JSON.parse(fs.readFileSync(coursePath, "utf8")) as CourseDefinition;
  return _courseCache;
}

export function getModule(moduleId: ModuleId): ModuleDefinition | null {
  const course = loadCourse();
  return course.modules.find((m) => m.id === moduleId) ?? null;
}

export function getModulesByUnit(): Map<number, ModuleDefinition[]> {
  const course = loadCourse();
  const units = new Map<number, ModuleDefinition[]>();
  for (const mod of course.modules) {
    const list = units.get(mod.unit) ?? [];
    list.push(mod);
    units.set(mod.unit, list);
  }
  return units;
}

// ---------------------------------------------------------------------------
// SKILL.md content loader
// ---------------------------------------------------------------------------

export function loadModuleContent(moduleId: ModuleId): string | null {
  const skillPath = path.join(CURRICULUM_DIR, "modules", moduleId, "SKILL.md");
  if (!fs.existsSync(skillPath)) return null;
  return fs.readFileSync(skillPath, "utf8");
}

/**
 * Extract a specific stage's content from a SKILL.md file.
 *
 * Stages are delimited by H3 headers (### Stage N: ...) or
 * H2 headers (## Phase N: ...) in the markdown.
 *
 * Returns the full module content if no stage match is found.
 */
export function loadStageContent(
  moduleId: ModuleId,
  stageId: string
): string | null {
  const full = loadModuleContent(moduleId);
  if (!full) return null;

  // Try to find stage by its ID pattern in headers
  // Stages are typically "stage-1", "quiz-1", "debrief" etc.
  // Headers look like: ### Stage 1: ..., ## Phase 1: ..., ### Quiz Checkpoint 1: ...
  const stageNum = stageId.match(/(\d+)/)?.[1];
  const stageType = stageId.split("-")[0]; // "stage", "quiz", "debrief", "simulation"

  if (stageType === "debrief") {
    // Find debrief section
    const debriefMatch = full.match(
      /(?:^|\n)(#{2,3}\s+(?:Final\s+)?Debrief[\s\S]*?)(?=\n#{2,3}\s|\n---\s*$|$)/i
    );
    return debriefMatch ? debriefMatch[1].trim() : full;
  }

  if (stageNum) {
    // Find numbered stage or phase section
    const patterns = [
      new RegExp(
        `(?:^|\\n)(#{2,3}\\s+(?:Stage|Phase)\\s+${stageNum}[:\\s][\\s\\S]*?)(?=\\n#{2,3}\\s+(?:Stage|Phase)\\s+\\d|\\n#{2,3}\\s+(?:Final\\s+)?Debrief|\\n---\\s*$|$)`,
        "i"
      ),
      new RegExp(
        `(?:^|\\n)(#{2,3}\\s+Quiz\\s+Checkpoint\\s+${stageNum}[:\\s][\\s\\S]*?)(?=\\n#{2,3}\\s|\\n---\\s*$|$)`,
        "i"
      ),
    ];

    for (const pattern of patterns) {
      const match = full.match(pattern);
      if (match) return match[1].trim();
    }
  }

  // Fallback: return full content
  return full;
}

// ---------------------------------------------------------------------------
// Module listing
// ---------------------------------------------------------------------------

export function listModules(): ModuleDefinition[] {
  return loadCourse().modules;
}

export function getModuleTitle(moduleId: ModuleId): string {
  const mod = getModule(moduleId);
  return mod?.title ?? moduleId;
}

/**
 * Parse frontmatter from a SKILL.md file.
 */
export function parseFrontmatter(content: string): Record<string, string> {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const colon = line.indexOf(":");
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    const value = line
      .slice(colon + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
    if (key) fm[key] = value;
  }
  return fm;
}

#!/usr/bin/env node
/**
 * ai-pm-skills-mcp — MCP server for agentic PM skills
 *
 * Exposes all skills and commands from the pm-skills repository as MCP tools,
 * making them available to any MCP-compatible AI client (Claude Desktop,
 * Claude Code, Cursor, Windsurf, etc.) without requiring the repository to be
 * cloned locally.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// The skills live one level up from dist/ when installed from npm
const REPO_ROOT = path.resolve(__dirname, "..");

// ---------------------------------------------------------------------------
// Data types
// ---------------------------------------------------------------------------

interface Skill {
  plugin: string;
  name: string;
  description: string;
  path: string;
}

interface Command {
  plugin: string;
  name: string;
  description: string;
  argumentHint?: string;
  path: string;
}

interface Plugin {
  name: string;
  description: string;
  skillCount: number;
  commandCount: number;
}

// ---------------------------------------------------------------------------
// Discovery helpers
// ---------------------------------------------------------------------------

function isPluginDir(dirPath: string): boolean {
  const name = path.basename(dirPath);
  return name.startsWith("pm-") && fs.statSync(dirPath).isDirectory();
}

function getPluginDirs(): string[] {
  return fs
    .readdirSync(REPO_ROOT)
    .map((f) => path.join(REPO_ROOT, f))
    .filter(isPluginDir)
    .sort();
}

function parseFrontmatter(content: string): Record<string, string> {
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

function loadSkills(pluginFilter?: string): Skill[] {
  const skills: Skill[] = [];
  for (const pluginDir of getPluginDirs()) {
    const pluginName = path.basename(pluginDir);
    if (pluginFilter && pluginName !== pluginFilter) continue;
    const skillsDir = path.join(pluginDir, "skills");
    if (!fs.existsSync(skillsDir)) continue;
    for (const skillName of fs.readdirSync(skillsDir).sort()) {
      const skillPath = path.join(skillsDir, skillName, "SKILL.md");
      if (!fs.existsSync(skillPath)) continue;
      const content = fs.readFileSync(skillPath, "utf8");
      const fm = parseFrontmatter(content);
      skills.push({
        plugin: pluginName,
        name: fm.name ?? skillName,
        description: fm.description ?? "",
        path: skillPath,
      });
    }
  }
  return skills;
}

function loadCommands(pluginFilter?: string): Command[] {
  const commands: Command[] = [];
  for (const pluginDir of getPluginDirs()) {
    const pluginName = path.basename(pluginDir);
    if (pluginFilter && pluginName !== pluginFilter) continue;
    const commandsDir = path.join(pluginDir, "commands");
    if (!fs.existsSync(commandsDir)) continue;
    for (const file of fs.readdirSync(commandsDir).sort()) {
      if (!file.endsWith(".md")) continue;
      const cmdPath = path.join(commandsDir, file);
      const content = fs.readFileSync(cmdPath, "utf8");
      const fm = parseFrontmatter(content);
      if (!fm.description) continue;
      commands.push({
        plugin: pluginName,
        name: path.basename(file, ".md"),
        description: fm.description,
        argumentHint: fm["argument-hint"],
        path: cmdPath,
      });
    }
  }
  return commands;
}

function loadMarketplaceDescriptions(): Map<string, string> {
  const descriptions = new Map<string, string>();
  const marketplacePath = path.join(REPO_ROOT, ".claude-plugin", "marketplace.json");
  if (!fs.existsSync(marketplacePath)) return descriptions;
  try {
    const marketplace = JSON.parse(
      fs.readFileSync(marketplacePath, "utf8")
    ) as { plugins?: Array<{ name: string; description: string }> };
    for (const plugin of marketplace.plugins ?? []) {
      descriptions.set(plugin.name, plugin.description);
    }
  } catch {
    // ignore parse errors
  }
  return descriptions;
}

function loadPlugins(): Plugin[] {
  const pluginDirs = getPluginDirs();
  const allSkills = loadSkills();
  const allCommands = loadCommands();
  const marketplaceDescriptions = loadMarketplaceDescriptions();

  const skillCounts = new Map<string, number>();
  for (const skill of allSkills) {
    skillCounts.set(skill.plugin, (skillCounts.get(skill.plugin) ?? 0) + 1);
  }

  const commandCounts = new Map<string, number>();
  for (const command of allCommands) {
    commandCounts.set(command.plugin, (commandCounts.get(command.plugin) ?? 0) + 1);
  }

  const plugins: Plugin[] = [];
  for (const pluginDir of pluginDirs) {
    const pluginName = path.basename(pluginDir);
    plugins.push({
      name: pluginName,
      description: marketplaceDescriptions.get(pluginName) ?? "",
      skillCount: skillCounts.get(pluginName) ?? 0,
      commandCount: commandCounts.get(pluginName) ?? 0,
    });
  }
  return plugins;
}

// ---------------------------------------------------------------------------
// Server
// ---------------------------------------------------------------------------

const server = new McpServer({
  name: "pm-skills",
  version: "2.1.0",
});

// Tool: list_plugins
server.tool(
  "list_plugins",
  "List all PM skill plugins available in this server, with descriptions and counts of skills and commands.",
  {},
  async () => {
    const plugins = loadPlugins();
    const lines = plugins.map(
      (p) =>
        `**${p.name}** (${p.skillCount} skills, ${p.commandCount} commands)\n  ${p.description}`
    );
    return {
      content: [
        {
          type: "text",
          text: `# PM Skills Plugins\n\n${lines.join("\n\n")}`,
        },
      ],
    };
  }
);

// Tool: list_skills
server.tool(
  "list_skills",
  "List all PM skills, optionally filtered to a single plugin.",
  {
    plugin: z
      .string()
      .optional()
      .describe(
        'Optional plugin name to filter by (e.g. "pm-execution"). Omit to list all skills.'
      ),
  },
  async ({ plugin }) => {
    const skills = loadSkills(plugin);
    if (skills.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: plugin
              ? `No skills found in plugin "${plugin}".`
              : "No skills found.",
          },
        ],
      };
    }
    // Group by plugin
    const grouped: Record<string, Skill[]> = {};
    for (const s of skills) {
      (grouped[s.plugin] ??= []).push(s);
    }
    const sections = Object.entries(grouped).map(([pluginName, pluginSkills]) => {
      const items = pluginSkills
        .map((s) => `  - **${s.name}**: ${s.description}`)
        .join("\n");
      return `## ${pluginName}\n${items}`;
    });
    return {
      content: [
        {
          type: "text",
          text: `# PM Skills${plugin ? ` — ${plugin}` : ""}\n\n${sections.join("\n\n")}`,
        },
      ],
    };
  }
);

// Tool: get_skill
server.tool(
  "get_skill",
  "Get the full content of a specific PM skill by name. Returns the complete SKILL.md with instructions, frameworks, and examples.",
  {
    skill_name: z
      .string()
      .describe(
        'The skill name (e.g. "brainstorm-okrs", "create-prd", "lean-canvas").'
      ),
    plugin: z
      .string()
      .optional()
      .describe(
        'Optional plugin name to narrow the search (e.g. "pm-execution").'
      ),
  },
  async ({ skill_name, plugin }) => {
    const skills = loadSkills(plugin);
    const skill = skills.find(
      (s) =>
        s.name === skill_name ||
        path.basename(path.dirname(s.path)) === skill_name
    );
    if (!skill) {
      const available = loadSkills(plugin)
        .map((s) => s.name)
        .join(", ");
      return {
        content: [
          {
            type: "text",
            text: `Skill "${skill_name}" not found${plugin ? ` in plugin "${plugin}"` : ""}.\n\nAvailable skills: ${available}`,
          },
        ],
      };
    }
    const content = fs.readFileSync(skill.path, "utf8");
    return {
      content: [
        {
          type: "text",
          text: `# Skill: ${skill.name} (${skill.plugin})\n\n${content}`,
        },
      ],
    };
  }
);

// Tool: list_commands
server.tool(
  "list_commands",
  "List all PM slash commands, optionally filtered to a single plugin. Commands are pre-built workflows you can invoke directly.",
  {
    plugin: z
      .string()
      .optional()
      .describe(
        'Optional plugin name to filter by (e.g. "pm-execution"). Omit to list all commands.'
      ),
  },
  async ({ plugin }) => {
    const commands = loadCommands(plugin);
    if (commands.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: plugin
              ? `No commands found in plugin "${plugin}".`
              : "No commands found.",
          },
        ],
      };
    }
    const grouped: Record<string, Command[]> = {};
    for (const c of commands) {
      (grouped[c.plugin] ??= []).push(c);
    }
    const sections = Object.entries(grouped).map(
      ([pluginName, pluginCommands]) => {
        const items = pluginCommands
          .map((c) => {
            const hint = c.argumentHint ? ` \`${c.argumentHint}\`` : "";
            return `  - **/${c.name}**${hint}: ${c.description}`;
          })
          .join("\n");
        return `## ${pluginName}\n${items}`;
      }
    );
    return {
      content: [
        {
          type: "text",
          text: `# PM Commands${plugin ? ` — ${plugin}` : ""}\n\n${sections.join("\n\n")}`,
        },
      ],
    };
  }
);

// Tool: get_command
server.tool(
  "get_command",
  "Get the full content of a specific PM command by name. Returns the complete command markdown with its workflow instructions.",
  {
    command_name: z
      .string()
      .describe(
        'The command name without leading slash (e.g. "prep-meeting", "plan-okrs", "sprint").'
      ),
    plugin: z
      .string()
      .optional()
      .describe(
        'Optional plugin name to narrow the search (e.g. "pm-execution").'
      ),
  },
  async ({ command_name, plugin }) => {
    const commands = loadCommands(plugin);
    const command = commands.find((c) => c.name === command_name);
    if (!command) {
      const available = loadCommands(plugin)
        .map((c) => c.name)
        .join(", ");
      return {
        content: [
          {
            type: "text",
            text: `Command "${command_name}" not found${plugin ? ` in plugin "${plugin}"` : ""}.\n\nAvailable commands: ${available}`,
          },
        ],
      };
    }
    const content = fs.readFileSync(command.path, "utf8");
    return {
      content: [
        {
          type: "text",
          text: `# Command: /${command.name} (${command.plugin})\n\n${content}`,
        },
      ],
    };
  }
);

// Tool: search_skills
server.tool(
  "search_skills",
  "Search across all PM skills and commands by keyword. Returns matching skills and commands with their descriptions.",
  {
    query: z
      .string()
      .describe(
        'Search keyword or phrase (e.g. "OKR", "user research", "roadmap", "A/B test").'
      ),
  },
  async ({ query }) => {
    const q = query.toLowerCase();
    const allSkills = loadSkills();
    const allCommands = loadCommands();

    const matchedSkills = allSkills.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.plugin.toLowerCase().includes(q)
    );

    const matchedCommands = allCommands.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.plugin.toLowerCase().includes(q)
    );

    if (matchedSkills.length === 0 && matchedCommands.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: `No skills or commands matched "${query}".`,
          },
        ],
      };
    }

    const parts: string[] = [`# Search results for "${query}"\n`];

    if (matchedSkills.length > 0) {
      parts.push(`## Skills (${matchedSkills.length})`);
      parts.push(
        matchedSkills
          .map((s) => `- **${s.name}** (${s.plugin}): ${s.description}`)
          .join("\n")
      );
    }

    if (matchedCommands.length > 0) {
      parts.push(`\n## Commands (${matchedCommands.length})`);
      parts.push(
        matchedCommands
          .map((c) => `- **/${c.name}** (${c.plugin}): ${c.description}`)
          .join("\n")
      );
    }

    return {
      content: [{ type: "text", text: parts.join("\n") }],
    };
  }
);

// ---------------------------------------------------------------------------
// Start
// ---------------------------------------------------------------------------

const transport = new StdioServerTransport();
await server.connect(transport);

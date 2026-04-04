# Changelog

All notable changes to ai-pm-skills-mcp are documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project uses [Semantic Versioning](https://semver.org/).

---

## [2.1.0] — 2026-04-04

### Added
- **MCP server** (`ai-pm-skills-mcp`) — exposes all PM skills and commands as MCP tools accessible to any MCP-compatible AI client (Claude Desktop, Claude Code, Cursor, Windsurf, etc.) without requiring a local clone of the repository
- **npm package** — installable via `npm install -g ai-pm-skills-mcp` or runnable via `npx ai-pm-skills-mcp`
- **6 MCP tools**:
  - `list_plugins` — list all available PM skill plugins with descriptions and counts
  - `list_skills` — list skills, optionally filtered to a single plugin
  - `get_skill` — fetch the full SKILL.md content for any skill by name
  - `list_commands` — list slash commands, optionally filtered to a single plugin
  - `get_command` — fetch the full command markdown for any command by name
  - `search_skills` — search across all skills and commands by keyword
- `CHANGELOG.md` — this file
- `tsconfig.json` and `src/index.ts` — TypeScript MCP server source

### Changed
- `README.md` — added MCP quick-start section with config snippets for Claude Desktop, Claude Code, Cursor, and Windsurf

---

## [2.0.0] — 2026-03-28

### Added
- 9 plugins covering PM discovery, strategy, execution, market research, data analytics, go-to-market, AI product management, vibe coding, and guided learning
- 83 skills and 56 commands
- `.claude-plugin/marketplace.json` for Claude Code plugin marketplace
- `CONTRIBUTING.md` skill quality standards and contribution guide
- `DISAMBIGUATION.md` plugin and skill disambiguation reference
- `validate_plugins.py` — automated validator for skill frontmatter and command structure
- `ANALYSIS.md` — PM workflow and gap analysis

---

## [1.0.0] — 2026-03-27

### Added
- Initial repository with foundational PM skill plugins
- Claude Code plugin structure (`.claude-plugin`)
- Core execution and discovery skills

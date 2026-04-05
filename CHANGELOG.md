# Changelog

All notable changes to ai-pm-skills-mcp are documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project uses [Semantic Versioning](https://semver.org/).

---

## [2.2.0] — 2026-04-05

### Added
- **6 new skills** filling Define, Develop, Deliver, and Iterate phase gaps:
  - `problem-statement` (pm-product-discovery) — crystal-clear problem framing before solution work
  - `hypothesis` (pm-product-discovery) — testable hypotheses with success metrics for lean validation
  - `solution-brief` (pm-execution) — lightweight one-page solution pitch before committing to a full PRD
  - `adr` (pm-execution) — Architecture Decision Records using Michael Nygard format
  - `edge-cases` (pm-execution) — systematic edge case identification using the BOUNDARY method
  - `pivot-decision` (pm-product-strategy) — evidence-based pivot/persevere framework
- **3 workflow bundle commands** chaining multiple skills into end-to-end workflows:
  - `/ai-feature-launch` (pm-ai-product-management) — AI feature from concept to launch: model eval → spec → data strategy → build/buy → responsible AI → prompts → incident planning
  - `/data-driven-discovery` (pm-data-analytics) — data-driven discovery: metrics → tracking → funnels → cohorts → experiments → report
  - `/lean-validation` (pm-product-discovery) — Lean Startup validation: problem → hypothesis → assumptions → experiments → decide
- **`AGENTS.md`** — GitHub Copilot auto-discovery file with full skill/command inventory and routing guidance
- **`docs/getting-started.md`** — onboarding guide covering installation, first commands, available plugins, and tips
- **`docs/skill-output-samples/`** — 10 realistic example outputs for the most-used skills (create-prd, problem-statement, hypothesis, prioritization, pre-mortem, edge-cases, user-stories, competitor-analysis, pivot-decision, solution-brief)

### Removed
- `ANALYSIS.md` — gap analysis document (no longer needed; gaps have been addressed)

### Changed
- `README.md` — updated counts (89 skills, 59 commands), added new skills to plugin listings, updated Quick Start table with workflow bundles
- `.cursor/rules/pm-skills.mdc` — added new skills (problem-statement, hypothesis, solution-brief, adr, edge-cases, pivot-decision)
- `WINDSURF.md` — updated skill count and added new skill descriptions
- `.claude-plugin/marketplace.json` — bumped to v2.2.0, updated plugin descriptions
- Plugin manifests (`plugin.json`) — version bumps and description updates for pm-product-discovery, pm-execution, pm-product-strategy, pm-ai-product-management, pm-data-analytics

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

---

## [1.0.0] — 2026-03-27

### Added
- Initial repository with foundational PM skill plugins
- Claude Code plugin structure (`.claude-plugin`)
- Core execution and discovery skills

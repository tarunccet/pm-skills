# Getting Started with Agentic PM Skills

Welcome! This guide gets you from zero to productive in 5 minutes. Whether you use Claude Cowork, Claude Code, VS Code Copilot, Cursor, Windsurf, Gemini CLI, or any other AI assistant, this guide covers your setup.

---

## 1. Choose Your Installation Method

> **Plugin install** gives the full experience (slash commands + auto-loaded skills). **Skills-only install** copies skill files to your tool. **MCP** exposes all skills as tools via a server — no cloning needed.

### Option A: Claude Cowork (easiest — no terminal needed)

1. Open **Customize** (bottom-left)
2. Go to **Browse plugins** → **Personal** → **+**
3. Select **Add marketplace from GitHub**
4. Enter: `tarunccet/pm-skills`

All 9 plugins install automatically. Full command and skill support.

### Option B: Claude Code Plugin Marketplace

```bash
# Add the marketplace and install plugins
claude plugin marketplace add tarunccet/pm-skills
claude plugin install pm-execution@pm-skills
claude plugin install pm-product-discovery@pm-skills
# ... (see docs/claude-code-setup.md for all 9 plugins)
```

### Option C: Clone the Repository

```bash
# In your project directory:
git clone https://github.com/tarunccet/pm-skills.git .claude/plugins/pm-skills
```

Claude Code automatically discovers plugins from `.claude/plugins/`.

### Option D: Copy Skills to Your IDE

Copy skill files into your tool's skills/rules directory. Each tool has a dedicated setup guide:

| Tool | Setup Guide | Quick Command |
|------|------------|---------------|
| **VS Code / Copilot** | [docs/vscode-copilot-setup.md](vscode-copilot-setup.md) | Copy to `.github/skills/` |
| **Cursor** | [docs/cursor-setup.md](cursor-setup.md) | Copy to `.cursor/rules/` |
| **Windsurf** | [docs/windsurf-setup.md](windsurf-setup.md) | Copy `WINDSURF.md` to `.windsurfrules` |
| **Gemini CLI** | [docs/gemini-cli-setup.md](gemini-cli-setup.md) | Copy to `.gemini/skills/` |
| **OpenCode** | [docs/opencode-setup.md](opencode-setup.md) | Clone + `AGENTS.md` |
| **Kiro** | [docs/kiro-setup.md](kiro-setup.md) | Copy to `.kiro/skills/` |
| **Codex CLI** | — | Copy to `.codex/skills/` |

### Option E: MCP Server (auto-updates, no cloning)

For MCP-compatible clients (Claude Desktop, Claude Code, Cursor, Windsurf, VS Code):

**Claude Desktop** — add to `~/Library/Application Support/Claude/claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "pm-skills": {
      "command": "npx",
      "args": ["-y", "ai-pm-skills-mcp"]
    }
  }
}
```

**Claude Code** — run once in your terminal:
```bash
claude mcp add pm-skills -- npx -y ai-pm-skills-mcp
```

**Cursor** — add to `.cursor/mcp.json` in your project:
```json
{
  "mcpServers": {
    "pm-skills": {
      "command": "npx",
      "args": ["-y", "ai-pm-skills-mcp"]
    }
  }
}
```

See each tool's setup guide above for more MCP configuration details.

---

## 2. Your First 5 Minutes

Once installed, try these commands to see the skills in action:

### Start with a problem
```
/lean-validation  Our users are abandoning the onboarding flow at step 3
```
This chains 6 skills: problem statement → hypothesis → assumptions → experiments → interviews → opportunity tree.

### Write a PRD
```
/write-prd  SSO support for enterprise customers
```
Generates a full 8-section Product Requirements Document.

### Explore an idea
```
/discover  AI-powered search for our knowledge base
```
Runs a complete discovery cycle: brainstorm → assumptions → prioritization → experiments.

### Launch an AI feature
```
/ai-feature-launch  Smart notification batching using an LLM to group related alerts
```
End-to-end AI feature workflow: model eval → feature spec → data strategy → responsible AI review.

---

## 3. How Skills and Commands Work

```
You (PM) → /command → chains Skills → Structured Output → suggests Next Command
```

| Concept | What it is | Example |
|---------|-----------|---------|
| **Skill** | Domain knowledge for a specific PM task. Loaded automatically when relevant. | `hypothesis`, `prioritization`, `edge-cases` |
| **Command** | User-triggered workflow that chains skills into an end-to-end process. | `/discover`, `/write-prd`, `/lean-validation` |
| **Plugin** | Package grouping related skills and commands by PM domain. | `pm-execution`, `pm-product-discovery` |

Skills are loaded automatically when relevant — no explicit invocation needed. Commands chain skills in proven sequences.

---

## 4. Pick Your Workflow

| I am… | Start with | Then try |
|-------|-----------|---------|
| 💡 **Exploring a new idea** | `/discover` | → `/strategy` → `/plan-launch` |
| 📦 **Shipping a feature** | `/write-prd` | → `/write-stories` → `/sprint` |
| 🧪 **Validating assumptions** | `/lean-validation` | → A/B tests → `/pivot-decision` |
| 🤖 **Building an AI feature** | `/ai-feature-launch` | → `/vibe-spec` → `/deploy-check` |
| 📊 **Defining metrics** | `/data-driven-discovery` | → `/north-star` → `/plan-tracking` |
| 🚀 **Launching a product** | `/plan-launch` | → `/battlecard` → `/marketing-plan` |
| 🎓 **Learning PM skills** | `/learn` | → Pick any `/learn-*` module |

---

## 5. Available Plugins (9 total, 89 skills, 59 commands)

| Plugin | What it covers | Key commands |
|--------|---------------|-------------|
| **pm-product-discovery** | Ideation, validation, interviews, assumptions | `/discover`, `/lean-validation`, `/interview` |
| **pm-execution** | PRDs, sprints, stories, roadmaps, risk analysis | `/write-prd`, `/sprint`, `/write-stories` |
| **pm-product-strategy** | Strategy frameworks, business models, competitive analysis | `/strategy`, `/challenge`, `/pricing` |
| **pm-data-analytics** | Metrics, experiments, funnels, SQL, cohorts | `/data-driven-discovery`, `/north-star`, `/analyze-test` |
| **pm-go-to-market** | Launch strategy, growth loops, positioning, naming | `/plan-launch`, `/marketing-plan`, `/battlecard` |
| **pm-market-research** | Personas, segmentation, sentiment, competitors | `/market-scan`, `/research-personas` |
| **pm-ai-product-management** | AI feature specs, model eval, responsible AI, prompts | `/ai-feature-launch`, `/ai-spec`, `/responsible-ai-review` |
| **pm-vibe-coding** | Prototyping, deploy checklists, code review for PMs | `/plan-prototype`, `/vibe-spec`, `/deploy-check` |
| **pm-guided-learning** | Interactive learning: discovery, metrics, strategy, AI PM | `/learn`, `/learn-discovery`, `/learn-metrics` |

---

## 6. Tips for Getting the Most Out of PM Skills

1. **Provide context**: The more context you give (research, data, constraints), the better the output. Upload files, paste Slack threads, or describe what you know.

2. **Chain commands**: After any command completes, it suggests relevant next steps. Follow the flow — discovery → strategy → execution → delivery is the natural PM arc.

3. **Use workflow bundles for big tasks**: `/ai-feature-launch`, `/data-driven-discovery`, and `/lean-validation` chain 6-7 skills each into end-to-end workflows.

4. **Iterate**: Every output is a draft. Ask the AI to refine, challenge assumptions, or go deeper on any section.

5. **Learn interactively**: The `/learn-*` commands use Socratic method with quizzes and adaptive difficulty — great for leveling up PM skills.

---

## Next Steps

- **Full README**: [README.md](../README.md) — complete plugin reference, MCP config details, architecture
- **Contributing**: [CONTRIBUTING.md](../CONTRIBUTING.md) — how to add new skills or improve existing ones
- **Disambiguation**: [DISAMBIGUATION.md](../DISAMBIGUATION.md) — when skills overlap, which to use when
- **Changelog**: [CHANGELOG.md](../CHANGELOG.md) — what's new in each release

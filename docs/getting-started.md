# Getting Started with Agentic PM Skills

Welcome! This guide gets you from zero to productive in 5 minutes. Whether you use Claude Code, Cursor, VS Code Copilot, Windsurf, or any MCP-compatible client, this guide covers your setup.

---

## 1. Choose Your Installation Method

### Option A: MCP Server (recommended — works everywhere)

Install the MCP server and every MCP-compatible AI client gets access to all 89 skills instantly.

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

### Option B: Clone the Repository (for Claude Code plugin system)

```bash
# In your project directory:
git clone https://github.com/tarunccet/pm-skills.git .claude/plugins/pm-skills
```

Claude Code automatically discovers plugins from `.claude/plugins/`.

### Option C: Install Individual Plugins

If you only need specific domains, install individual plugins:

```bash
# In Claude Code:
/install-plugin pm-execution
/install-plugin pm-product-discovery
/install-plugin pm-ai-product-management
```

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

# Using PM Skills with OpenCode

OpenCode supports agent-driven skill execution via `AGENTS.md`. PM Skills work through automatic intent mapping — no manual commands needed.

## Setup

### Option 1: Clone the Repo (Recommended)

```bash
# Clone into your project
git clone https://github.com/tarunccet/pm-skills.git
```

Ensure the following files are present in your workspace:
- `AGENTS.md` (root) — provides skill routing instructions
- `pm-*/skills/` directories — contain the skill definitions

OpenCode reads `AGENTS.md` and automatically selects the right skill based on your request.

### Option 2: Copy Skills Only

```bash
# Clone the repo temporarily
git clone https://github.com/tarunccet/pm-skills.git /tmp/pm-skills

# Copy skills to OpenCode's skills directory
mkdir -p .opencode/skills
for plugin in /tmp/pm-skills/pm-*/; do
  cp -r "$plugin/skills/"* .opencode/skills/ 2>/dev/null
done

# Copy the agent instructions
cp /tmp/pm-skills/AGENTS.md AGENTS.md
```

---

## How It Works

OpenCode doesn't have a native plugin system, but PM Skills work through **intent mapping**:

1. **You describe your PM task** in natural language
2. **The agent (via AGENTS.md) identifies the relevant skill**
3. **The skill's structured workflow executes** — step by step

Examples:
- "Help me write a PRD" → `create-prd` skill
- "What are the riskiest assumptions?" → `identify-assumptions-existing` skill
- "Define our North Star metric" → `product-metrics` skill
- "Prepare for my stakeholder meeting" → `meeting-prep` skill

---

## What Works

| Feature | Status |
|---------|--------|
| Auto-routed skills | ✅ (via AGENTS.md) |
| Full skill library | ✅ |
| Slash commands | ❌ (use natural language) |
| Chained workflows | ✅ (agent-driven) |

---

## Tips

1. **Use natural language** — just describe your PM task and the agent will select the right skill.
2. **Be specific** — "Help me prioritize these 10 feature requests using RICE" is better than "prioritize features."
3. **Provide context** — upload files, paste data, or describe constraints for better output.

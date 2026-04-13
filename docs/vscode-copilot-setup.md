# Using PM Skills with VS Code / GitHub Copilot

VS Code with GitHub Copilot supports agent skills and custom instructions. There are several ways to use PM Skills.

## Setup

### Option 1: Copilot Agent Skills (VS Code Insiders — Recommended)

VS Code Insiders supports agent skills via the `.github/skills/` directory. Each skill is auto-discovered by Copilot.

```bash
# Clone the repo
git clone https://github.com/tarunccet/pm-skills.git /tmp/pm-skills

# Copy all skills into your project's .github/skills/ directory
mkdir -p .github/skills
for plugin in /tmp/pm-skills/pm-*/; do
  cp -r "$plugin/skills/"* .github/skills/ 2>/dev/null
done
```

Copilot automatically discovers SKILL.md files and activates them when relevant.

### Option 2: Copilot Custom Instructions

Add PM skill context to `.github/copilot-instructions.md` in your project:

```bash
# Copy the AGENTS.md as your instructions file
cp /tmp/pm-skills/AGENTS.md .github/copilot-instructions.md
```

Or create a focused `.github/copilot-instructions.md` with the skills most relevant to your work:

```markdown
# PM Skills

You are an expert product management assistant. Use the following PM frameworks
when I ask for help with product tasks.

## Discovery
When I ask about discovery, assumptions, or experiments, follow the
opportunity-solution-tree and hypothesis frameworks.

## Strategy
When I ask about strategy, business models, or pricing, use structured
frameworks like Lean Canvas, Porter's Five Forces, and SWOT analysis.

## Execution
When I ask about PRDs, sprints, or user stories, follow the create-prd
and sprint-plan workflows.
```

### Option 3: MCP Server

If your VS Code setup supports MCP (via Copilot's MCP integration):

Add to your VS Code settings or MCP configuration:

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

---

## What Works

| Feature | Agent Skills | Custom Instructions | MCP |
|---------|-------------|-------------------|-----|
| Auto-loaded skills | ✅ | ❌ (manual) | ✅ |
| Full skill library | ✅ | Subset | ✅ |
| Slash commands | ❌ | ❌ | ✅ (as tools) |
| Always latest version | Manual update | Manual update | ✅ (via `npx`) |

---

## Usage

Once set up, ask Copilot Chat for PM help:

- *"Help me write a PRD for a notification system"*
- *"What are the riskiest assumptions for our new feature?"*
- *"Create a competitive analysis of project management tools"*
- *"Help me define a North Star metric for our marketplace"*

---

## Tips

1. **Keep instructions focused** — Copilot works best with concise instructions. Don't paste all 89 skills; pick the 5–10 most relevant to your project.
2. **Reference in chat** — Paste a specific SKILL.md into Copilot Chat when you need detailed guidance on a particular framework.
3. **Combine with Copilot agents** — Copy agent definitions from `AGENTS.md` to create specialized PM personas.

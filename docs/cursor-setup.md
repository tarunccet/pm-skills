# Using PM Skills with Cursor

Cursor supports rules, notepads, and MCP for extending its capabilities with PM skills.

## Setup

### Option 1: Rules Directory (Recommended)

Cursor supports a `.cursor/rules/` directory for project-specific rules that are automatically loaded into context:

```bash
# Clone the repo
git clone https://github.com/tarunccet/pm-skills.git /tmp/pm-skills

# Copy skills you use most as rules
mkdir -p .cursor/rules
cp /tmp/pm-skills/pm-product-discovery/skills/opportunity-solution-tree/SKILL.md .cursor/rules/opportunity-solution-tree.md
cp /tmp/pm-skills/pm-execution/skills/create-prd/SKILL.md .cursor/rules/create-prd.md
cp /tmp/pm-skills/pm-product-strategy/skills/prioritization/SKILL.md .cursor/rules/prioritization.md
```

Or copy all skills at once:

```bash
for plugin in /tmp/pm-skills/pm-*/; do
  for skill in "$plugin/skills/"*/SKILL.md; do
    skill_name=$(basename $(dirname "$skill"))
    cp "$skill" ".cursor/rules/${skill_name}.md" 2>/dev/null
  done
done
```

### Option 2: Notepads

Cursor's Notepads feature lets you store reusable context. Create a notepad for each skill you use frequently:

1. Open Cursor → Settings → Notepads
2. Create a new notepad named "PM: Opportunity Solution Tree"
3. Paste the content of `pm-product-discovery/skills/opportunity-solution-tree/SKILL.md`
4. Reference it in chat with `@notepad PM: Opportunity Solution Tree`

### Option 3: MCP Server

Cursor supports MCP servers. Add to `~/.cursor/mcp.json`:

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

This gives you access to all 89 skills as MCP tools without manually copying files.

---

## What Works

| Feature | Rules | Notepads | MCP |
|---------|-------|----------|-----|
| Auto-loaded in context | ✅ | On reference | ✅ |
| Full skill library | Copy needed | Copy needed | ✅ |
| Slash commands | ❌ | ❌ | ✅ (as tools) |
| Always latest version | Manual update | Manual update | ✅ (via `npx`) |

---

## Recommended Configuration

### Always Load (Rules)

Add these to `.cursor/rules/` for skills you want active in every session:

- `create-prd.md` — PRD writing workflow
- `prioritization.md` — Prioritization frameworks reference
- `hypothesis.md` — Testable hypothesis creation

### Load on Demand (Notepads)

Create notepads for phase-specific skills:

- "PM: Discovery" → `opportunity-solution-tree/SKILL.md`
- "PM: Strategy" → `product-strategy/SKILL.md`
- "PM: Metrics" → `product-metrics/SKILL.md`
- "PM: AI Features" → `ai-feature-definition/SKILL.md`

Reference them with `@notepad` when working on relevant tasks.

---

## Tips

1. **Don't load all skills at once** — Cursor has context limits. Load 3–5 skills as rules and keep others as notepads or use MCP.
2. **Reference skills explicitly** — Tell Cursor "Follow the create-prd rules for this" to ensure it reads the loaded rules.
3. **Use MCP for full access** — If you need all 89 skills available on demand, the MCP server is the best option for Cursor.

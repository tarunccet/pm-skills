# Using PM Skills with Windsurf

Windsurf supports project rules and global rules for extending its AI capabilities with PM skills.

## Setup

### Option 1: Project Rules (Recommended)

Windsurf uses `.windsurfrules` for project-specific agent instructions:

```bash
# Clone the repo
git clone https://github.com/tarunccet/pm-skills.git /tmp/pm-skills

# Copy the Windsurf-optimized rules
cp /tmp/pm-skills/WINDSURF.md .windsurfrules
```

Or create a focused `.windsurfrules` by combining your most-used skills:

```bash
cat /tmp/pm-skills/pm-execution/skills/create-prd/SKILL.md > .windsurfrules
echo -e "\n---\n" >> .windsurfrules
cat /tmp/pm-skills/pm-product-discovery/skills/opportunity-solution-tree/SKILL.md >> .windsurfrules
echo -e "\n---\n" >> .windsurfrules
cat /tmp/pm-skills/pm-product-strategy/skills/prioritization/SKILL.md >> .windsurfrules
```

### Option 2: Global Rules

For skills you want across all projects:

1. Open Windsurf → Settings → Cascade → Global Rules
2. Paste the content of `WINDSURF.md` from this repo

### Option 3: Skills Directory

Copy skills into Windsurf's skills directory:

```bash
mkdir -p .windsurf/skills
for plugin in /tmp/pm-skills/pm-*/; do
  cp -r "$plugin/skills/"* .windsurf/skills/ 2>/dev/null
done
```

### Option 4: MCP Server

Windsurf supports MCP servers. Add via Settings → MCP Servers → Add:

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

| Feature | Project Rules | Skills Dir | MCP |
|---------|--------------|-----------|-----|
| Auto-loaded in context | ✅ | ✅ | ✅ |
| Full skill library | Subset | Copy needed | ✅ |
| Slash commands | ❌ | ❌ | ✅ (as tools) |
| Always latest version | Manual update | Manual update | ✅ (via `npx`) |

---

## Tips

1. **Be selective** — Windsurf has context limits. Choose the 3–5 skills most relevant to your current work.
2. **Reference in conversation** — Paste additional skill content into the chat when working on specific tasks.
3. **Use `WINDSURF.md`** — The repo includes a pre-built Windsurf rules file optimized for PM work.

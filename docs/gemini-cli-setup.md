# Using PM Skills with Gemini CLI

Gemini CLI has a native skills system that auto-discovers SKILL.md files. PM Skills work naturally with this system.

## Setup

### Option 1: Install as Skills (Recommended)

```bash
# Clone the repo
git clone https://github.com/tarunccet/pm-skills.git /tmp/pm-skills

# Copy all skills to Gemini's skills directory (project-level)
mkdir -p .gemini/skills
for plugin in /tmp/pm-skills/pm-*/; do
  cp -r "$plugin/skills/"* .gemini/skills/ 2>/dev/null
done
```

For global installation (all projects):

```bash
for plugin in /tmp/pm-skills/pm-*/; do
  cp -r "$plugin/skills/"* ~/.gemini/skills/ 2>/dev/null
done
```

Once installed, verify with:

```
/skills list
```

Gemini CLI injects skill names and descriptions into the prompt automatically and activates matching skills on demand.

### Option 2: GEMINI.md (Persistent Context)

For skills you want always loaded as persistent project context, add them to your project's `GEMINI.md`:

```bash
# Use the AGENTS.md as a starting point
cp /tmp/pm-skills/AGENTS.md GEMINI.md
```

Or combine specific skills:

```bash
cat /tmp/pm-skills/pm-execution/skills/create-prd/SKILL.md > GEMINI.md
echo -e "\n---\n" >> GEMINI.md
cat /tmp/pm-skills/pm-product-discovery/skills/opportunity-solution-tree/SKILL.md >> GEMINI.md
```

> **Skills vs GEMINI.md:** Skills activate on demand, keeping your context window clean. GEMINI.md provides persistent context loaded for every prompt. Use skills for task-specific workflows and GEMINI.md for always-on PM context.

---

## What Works

| Feature | Skills Install | GEMINI.md |
|---------|---------------|-----------|
| Auto-discovery | ✅ | Always loaded |
| Full skill library | ✅ | Subset recommended |
| On-demand activation | ✅ | ❌ (always on) |
| Context-efficient | ✅ | Uses more tokens |

---

## Recommended Configuration

### Always-On (GEMINI.md)

Add a summary of key PM frameworks as persistent context.

### On-Demand (Skills)

Install all skills and let Gemini CLI activate them when relevant:

- Discovery skills → activate when asking about ideas, assumptions, experiments
- Strategy skills → activate when discussing vision, pricing, competition
- Execution skills → activate when writing PRDs, planning sprints, defining metrics

---

## Tips

1. **Prefer skills over GEMINI.md** — Skills activate on demand and keep your context window focused.
2. **Use `/skills list`** to verify installed skills.
3. **Combine with references** — Paste specific skill content into chat when you need detailed guidance.

# Using PM Skills with Kiro

Kiro supports skills stored in `.kiro/skills/` at both project and global level, and also supports `AGENTS.md`.

## Setup

### Option 1: Project-Level Skills (Recommended)

```bash
# Clone the repo
git clone https://github.com/tarunccet/pm-skills.git /tmp/pm-skills

# Copy all skills into your project's .kiro/skills/ directory
mkdir -p .kiro/skills
for plugin in /tmp/pm-skills/pm-*/; do
  cp -r "$plugin/skills/"* .kiro/skills/ 2>/dev/null
done
```

### Option 2: Global Skills

For skills available across all projects:

```bash
mkdir -p ~/.kiro/skills
for plugin in /tmp/pm-skills/pm-*/; do
  cp -r "$plugin/skills/"* ~/.kiro/skills/ 2>/dev/null
done
```

### Option 3: AGENTS.md

Kiro also reads `AGENTS.md` for agent instructions:

```bash
cp /tmp/pm-skills/AGENTS.md AGENTS.md
```

---

## What Works

| Feature | Skills Install | AGENTS.md |
|---------|---------------|-----------|
| Auto-discovery | ✅ | ✅ |
| Full skill library | ✅ | Summary only |
| On-demand activation | ✅ | Always loaded |

---

## Tips

1. **Project-level is better** — Keep skills in `.kiro/skills/` per project so they're version-controlled and team-shared.
2. **Use AGENTS.md for routing** — If you install both, AGENTS.md helps the agent find the right skill faster.
3. Refer to [Kiro docs on skills](https://kiro.dev/docs/skills/) for the latest on skill configuration.

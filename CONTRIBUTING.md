# Contributing to PM Skills Marketplace

Maintained by [Tarun Narang](mailto:tarunccet@gmail.com) (tarunccet@gmail.com). Contributions are welcome — whether it's a bug fix, a typo, a new skill idea, or a new plugin.

## How to Contribute

- **Bugs and small fixes** — open a PR directly.
- **New skills, commands, or larger changes** — open an issue first so we can discuss the approach.
- **New plugins** — open an issue with a proposal covering: plugin name, skill list, target PM persona, and why it doesn't overlap with existing plugins.

## Skill Quality Standards

All **new skills** must meet these minimum standards before submission. Existing skills may follow a simpler format and will be updated incrementally:

### Required Frontmatter

```yaml
---
name: skill-name          # Must match directory name exactly
description: "One-line description of what this skill does and when to use it."
category: discovery|strategy|execution|research|analytics|gtm|marketing|toolkit|ai-pm|vibe-coding|learning
complexity: basic|intermediate|advanced
tags: ["tag1", "tag2"]
---
```

### Required Sections

Every `SKILL.md` must include:

1. **Purpose** — What this skill does and why it matters
2. **Domain Context** — The framework/methodology used, its origin/author, and when it applies vs. doesn't apply
3. **When to Use** — At least 2 specific use cases
4. **When NOT to Use** — At least 1 "don't use when..." with an alternative suggestion
5. **Instructions** — Step-by-step process
6. **Output Format** — What the output should look like
7. **Example** — A brief, realistic example of good output

### Skill Template

```markdown
---
name: skill-name
description: "One-line description of what this skill does and when to use it."
category: discovery|strategy|execution|research|analytics|gtm|marketing|toolkit|ai-pm|vibe-coding|learning
complexity: basic|intermediate|advanced
tags: ["tag1", "tag2"]
---

# Skill Title

## Purpose
What this skill does and why it matters.

## Domain Context
The framework/methodology being used, its origin, and when it applies vs. doesn't apply.

## When to Use
- Use when...
- Use when...

## When NOT to Use
- Don't use when... (use X skill instead)

## Instructions
Step-by-step process.

## Output Format
What the output should look like.

## Example
A brief, realistic example of good output from this skill.
```

## Command Quality Standards

Every command must include:
- `description` and `argument-hint` in frontmatter
- An `### Edge Cases` section covering: insufficient input, conflicting requirements, scope creep, when to suggest a different command
- No cross-plugin skill references — use natural language suggestions only

## How to Test Skills

1. Run `python3 validate_plugins.py` — must pass with no errors
2. Load the plugin in Claude Code and test with realistic input
3. Test edge cases: vague input, missing context, conflicting requirements

## Guidelines

- Keep PRs focused — one change per PR.
- Follow existing patterns: skills are nouns (domain knowledge), commands are verbs (workflows).
- Skill `name` must match its directory name.
- No cross-plugin references in commands. Suggest follow-ups in natural language only.
- Run the validator before submitting: `python3 validate_plugins.py`

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).

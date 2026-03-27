---
description: "Plan an AI-assisted prototyping session: scope MVP, select AI coding tool, define build sequence, and estimate effort for a solo PM-builder."
argument-hint: "[product description]"
---

## /plan-prototype

Uses the `prototype-plan` skill.

Create a prototype build plan for $ARGUMENTS.

This command helps you plan before you start coding — tool selection, MVP scoping, build sequence, and effort estimates. Use this before your vibe spec to validate feasibility, or after your vibe spec to create your execution plan.

**Next steps after this command**: → `/vibe-spec` to write the full specification

### Edge Cases
- **If the scope is too large**: Help the user cut to a 1-week solo build
- **If the user has no tech preferences**: Recommend the simplest stack for their use case
- **If the user wants production-grade architecture**: Clarify this is for MVP prototypes only; suggest involving an engineer

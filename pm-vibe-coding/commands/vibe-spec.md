---
description: "Create a vibe coding specification document optimized for AI coding assistants. Covers problem statement, user flows, data model, API contracts, UI descriptions, tech stack, and constraints."
argument-hint: "[product description]"
---

## /vibe-spec

Uses the `vibe-coding-spec` skill.

Create a vibe coding specification for $ARGUMENTS.

A vibe spec is a structured natural-language document designed to be fed directly into AI coding assistants (Cursor, Replit Agent, Claude Code) to build a working product. It front-loads all the decisions and context the AI needs to build correctly on the first pass.

After completing the vibe spec, you can feed it directly into your AI coding assistant with: "Build this product according to the following specification: [paste spec]"

### Edge Cases
- **If the problem is too vague**: Ask clarifying questions before writing the spec — a vague spec produces broken code
- **If the tech stack is unclear**: Recommend a stack based on the product type, but confirm with the user
- **If the scope is too large for an MVP**: Flag this and help the user cut to the essential 3 user flows
- **If the user needs a team PRD instead**: Suggest using `/write-prd` instead

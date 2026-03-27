---
description: "Get PM-friendly guidance on a technical architecture decision — database, hosting, auth, monolith vs microservice, API design."
argument-hint: "[architecture decision you need help with]"
---

## /tech-decision

Uses the `technical-decision-guide` skill.

Get guidance on a technical architecture decision for $ARGUMENTS.

This command translates technical trade-offs into PM-friendly decision trees. You don't need engineering background — just describe the decision you're facing and get a recommendation with rationale.

**Common use cases**:
- `/tech-decision` — which database should I use for my app?
- `/tech-decision` — should I use REST or GraphQL?
- `/tech-decision` — what hosting platform should I use?
- `/tech-decision` — how should I handle authentication?

### Edge Cases
- **If the decision is too complex for a PM-builder**: Recommend bringing in an engineer
- **If the user is asking about enterprise architecture**: Flag that this guide is for MVP/prototype scale
- **If requirements are unclear**: Ask about scale, team size, and budget before recommending

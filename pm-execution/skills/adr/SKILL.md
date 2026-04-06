---
name: adr
description: "Document architecture and product decisions using the Nygard ADR format — captures context, alternatives considered, and consequences so the team never asks 'why did we do it this way?' again. Use when making architecture decisions, choosing between technical approaches, selecting vendors, or any decision that will be hard to reverse."
---

# Architecture Decision Record (ADR)

Create a structured record of a significant technical or product decision, capturing not just *what* was decided but *why* — so future teams inherit context, not just code.

### What You'll Need
| Input | Required? | Example |
|-------|-----------|---------|
| Decision to document | ✅ Required | "Migrate from REST to GraphQL for our public API" |
| Context and constraints | ✅ Required | Team size, timeline, tech stack, budget |
| Alternatives considered | 🟡 Recommended | "We also evaluated gRPC and keeping REST" |
| Stakeholders involved | 🟡 Recommended | Engineering lead, platform team, API consumers |
| Prior ADRs or related decisions | ⚪ Optional | "ADR-012: Adopted microservices architecture" |

> **Don't have everything?** Start anyway — the skill will work with what you provide and flag where richer input would improve the output.

### Domain Context

ADRs are the institutional memory of your engineering and product organization. They live alongside the codebase (often in a `docs/adr/` directory) and are **immutable** — when a decision is superseded, you create a new ADR that references the old one rather than editing it. This is part of **Execution** because ADRs are created at the point of decision, typically during sprint planning, design reviews, or technical spikes.

### Context

You are documenting an architecture or product decision about **$ARGUMENTS**.

If the user provides files (PRDs, technical specs, RFC documents, or previous ADRs), read them first to understand the full decision context.

### Instructions

### Phase 0: Context Confirmation

Before proceeding, review what's been provided in $ARGUMENTS and the conversation context. **Only ask about what's missing — don't re-ask what's already clear.**

1. **Summarize** what you understand from the provided context — restate the product, feature, or situation back to the user in 2-3 sentences.
2. **Identify gaps** — if any of the following are unclear, ask:
   - What decision needs to be documented?
   - What options are being considered?
   - What are the key constraints or drivers behind this decision?
3. **Confirm**: _"Here's my understanding: [summary]. I plan to [brief description of what the skill will produce]. Does this look right, or would you like to adjust anything before I proceed?"_

If the user provides additional context, incorporate it. If the user confirms, proceed.

1. **Identify the decision and its scope**:
   - What specific decision is being made?
   - What is the scope — system-wide, service-level, or feature-level?
   - Who are the stakeholders affected by this decision?
   - What is the urgency and reversibility of this decision?

2. **Describe the context and forces at play**:
   - What is the current state of the system or product?
   - What problem or opportunity triggered this decision?
   - What constraints exist — technical debt, team expertise, budget, timeline, compliance?
   - What quality attributes matter most — performance, scalability, maintainability, security?

3. **Document alternatives considered**:
   - List every viable option the team evaluated (minimum 2-3)
   - For each alternative, document:
     - Brief description of the approach
     - Pros — what makes this option attractive
     - Cons — what are the drawbacks or risks
     - Effort estimate (T-shirt size: S/M/L/XL)
   - Be fair to all options — avoid straw-man alternatives

4. **State the decision clearly**:
   - Which option was chosen and why
   - What was the deciding factor — the single strongest reason
   - What trade-offs are we explicitly accepting
   - What would need to change for us to revisit this decision

5. **Evaluate consequences**:
   - **Positive**: What improves as a result of this decision?
   - **Negative**: What gets harder or worse? What are we giving up?
   - **Risks**: What could go wrong? What assumptions might be invalid?
   - **Migration/adoption**: What work is required to implement this decision?

6. **Classify the ADR status**:
   - **Proposed** — under discussion, not yet agreed
   - **Accepted** — agreed and being implemented
   - **Deprecated** — no longer relevant but kept for history
   - **Superseded by ADR-XXX** — replaced by a newer decision

7. **Format the output** as a markdown document:

   ```
   # ADR-[NNN]: [Decision Title]

   **Date**: [YYYY-MM-DD]
   **Status**: [Proposed | Accepted | Deprecated | Superseded by ADR-XXX]
   **Deciders**: [List of people involved]

   ## Context
   [Problem statement, current state, constraints, and forces]

   ## Decision
   [What we chose and the primary reason why]

   ## Alternatives Considered
   | Option | Pros | Cons | Effort |
   |--------|------|------|--------|
   | [Option A] | ... | ... | ... |
   | [Option B] | ... | ... | ... |

   ## Consequences
   ### Positive
   - [What improves]

   ### Negative
   - [What gets harder]

   ### Risks
   - [What could go wrong]

   ## Related Decisions
   - [Links to related ADRs or documents]
   ```

Save as `ADR-[NNN]-[decision-title].md`.

### Notes

- ADRs are **immutable** — never edit an accepted ADR. If the decision changes, create a new ADR that supersedes it.
- Keep the language concise and accessible — ADRs are read by future team members who lack your current context.
- A short ADR that exists is infinitely more valuable than a perfect ADR that never gets written.
- When NOT to use: for routine implementation details (document in code) or pure product decisions (use a PRD or solution brief instead).

---

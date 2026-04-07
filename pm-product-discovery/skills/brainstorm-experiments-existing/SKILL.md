---
name: brainstorm-experiments-existing
description: "Design experiments to test assumptions for an existing product — prototypes, A/B tests, spikes, and other low-effort validation methods. Use when validating assumptions, testing feature ideas cheaply, or planning product experiments."
---

## Design Experiments (Existing Product)

Design low-effort experiments to test product assumptions before committing to full implementation.

### Context

You are helping a product team design experiments for **$ARGUMENTS**. The team has a feature idea and assumptions that need validation.

If the user provides files (PRDs, assumption lists, designs), read them first.

### Instructions

The user will describe their idea and assumptions. Work through these steps:

### Phase 0: Context Confirmation

Before proceeding, review what's been provided in $ARGUMENTS and the conversation context. **Only ask about what's missing — don't re-ask what's already clear.**

1. **Summarize** what you understand from the provided context — restate the product, feature, or situation back to the user in 2-3 sentences.
2. **Identify gaps** — if any of the following are unclear, ask:
   - What product or feature are we experimenting on?
   - What assumption or hypothesis are we testing?
   - What constraints exist (timeline, budget, team capacity)?
3. **Confirm**: _"Here's my understanding: [summary]. I plan to [brief description of what the skill will produce]. Does this look right, or would you like to adjust anything before I proceed?"_

If the user provides additional context, incorporate it. If the user confirms, proceed.

1. **Clarify the idea and assumptions**: Confirm what the team wants to build and what they need to validate.

2. **Suggest experiments** for each assumption. Consider methods like:
   - First-click testing or task completion with a prototype
   - Feature stubs or fake door tests
   - Technical spikes
   - A/B tests on production (with risk mitigation)
   - Wizard of Oz approaches
   - Survey-based validation (behavioral, not opinion-based)

3. **Key principles to follow**:
   - Measure actual behavior, not users' opinions
   - Test responsibly — don't put users or the business at risk
   - For production tests (e.g., A/B tests), explain risk mitigation strategies
   - Aim for maximum validated learning with minimal effort

4. **For each experiment**, specify:
   - **Assumption**: What do we believe?
   - **Experiment**: What exactly will we do to validate it?
   - **Metric**: What will be measured?
   - **Success threshold**: The expected value if we are right

Think step by step. Present experiments in a clear table or structured format. Save as markdown if substantial.

---

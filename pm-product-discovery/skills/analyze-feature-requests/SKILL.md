---
name: analyze-feature-requests
description: "Analyze and prioritize a list of feature requests by theme, strategic alignment, impact, effort, and risk. Use when reviewing customer feature requests, triaging a backlog, or making prioritization decisions."
---

## Analyze Feature Requests

Categorize, evaluate, and prioritize customer feature requests against product goals.

### Context

You are analyzing feature requests for **$ARGUMENTS**.

If the user provides files (spreadsheets, CSVs, or documents with feature requests), read and analyze them directly. If data is in a structured format, consider creating a summary table.

### Domain Context

Never allow customers to design solutions. Prioritize **opportunities (problems)**, not features. Use **Opportunity Score** (Dan Olsen) to evaluate customer-reported problems: Opportunity Score = Importance × (1 − Satisfaction), normalized to 0–1. See the `prioritization-frameworks` skill for full details and templates.

### Instructions

The user will describe their product goal and provide feature requests. Work through these steps:

### Phase 0: Context Confirmation

Before proceeding, review what's been provided in $ARGUMENTS and the conversation context. **Only ask about what's missing — don't re-ask what's already clear.**

1. **Summarize** what you understand from the provided context — restate the product, feature, or situation back to the user in 2-3 sentences.
2. **Identify gaps** — if any of the following are unclear, ask:
   - What is the source of these feature requests (support tickets, survey, sales feedback)?
   - What product or feature area do they relate to?
   - What are the current strategic priorities for filtering relevance?
3. **Confirm**: _"Here's my understanding: [summary]. I plan to [brief description of what the skill will produce]. Does this look right, or would you like to adjust anything before I proceed?"_

If the user provides additional context, incorporate it. If the user confirms, proceed.

1. **Understand the goal**: Confirm the product objective and desired outcomes that will guide prioritization.

2. **Categorize requests into themes**: Group related requests together and name each theme.

3. **Assess strategic alignment**: For each theme, evaluate how well it aligns with the stated goals.

4. **Prioritize the top 3 features** based on:
   - **Impact**: Customer value and number of users affected
   - **Effort**: Development and design resources required
   - **Risk**: Technical and market uncertainty
   - **Strategic alignment**: Fit with product vision and goals

5. **For each top feature**, provide:
   - Rationale (customer needs, strategic alignment)
   - Alternative solutions worth considering
   - High-risk assumptions
   - How to test those assumptions with minimal effort

Think step by step. Save as markdown or create a structured output document.

---

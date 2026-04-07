---
name: identify-assumptions-existing
description: "Identify risky assumptions for a feature idea in an existing product across Value, Usability, Viability, and Feasibility. Uses multi-perspective devil's advocate thinking. Use when stress-testing a feature idea, doing risk assessment, or preparing for assumption mapping."
---

## Identify Assumptions (Existing Product)

Devil's advocate analysis to surface risky assumptions across four risk areas.

### What You'll Need
| Input | Required? | Example |
|-------|-----------|---------|
| Feature idea or proposal to stress-test | ✅ Required | "Add AI-powered meeting summaries to our Slack bot" |
| Product context (what exists today) | ✅ Required | Existing product, user base, technical stack |
| Target user segment | 🟡 Recommended | Enterprise teams, 500+ employees |
| Supporting research or PRD | ⚪ Optional | User interviews, prototype feedback |

> **Don't have everything?** Start anyway — the skill will work with what you provide and flag where richer input would improve the output.

### Context

You are stress-testing a feature idea for **$ARGUMENTS**.

If the user provides files (designs, PRDs, research), read them first.

### Instructions

The user will describe their product, objective, market segment, and feature idea. Work through these steps:

### Phase 0: Context Confirmation

Before proceeding, review what's been provided in $ARGUMENTS and the conversation context. **Only ask about what's missing — don't re-ask what's already clear.**

1. **Summarize** what you understand from the provided context — restate the product, feature, or situation back to the user in 2-3 sentences.
2. **Identify gaps** — if any of the following are unclear, ask:
   - What feature idea or solution are we evaluating?
   - What is the target user and use case?
   - What evidence exists so far (research, data, customer feedback)?
3. **Confirm**: _"Here's my understanding: [summary]. I plan to [brief description of what the skill will produce]. Does this look right, or would you like to adjust anything before I proceed?"_

If the user provides additional context, incorporate it. If the user confirms, proceed.

1. **Think from three perspectives** about why this feature might fail:
   - **Product Manager perspective**: Business viability, market fit, strategic alignment
   - **Designer perspective**: Usability, user experience, adoption barriers
   - **Engineer perspective**: Technical feasibility, performance, integration challenges

2. **Identify assumptions across four risk areas**:
   - **Value**: Will it create value for customers? Does it solve a real problem?
   - **Usability**: Will users figure out how to use it? Is the learning curve acceptable?
   - **Viability**: Can marketing, sales, finance, and legal support it?
   - **Feasibility**: Can it be built with existing technology? Are there integration risks?

3. **If the feature uses AI/ML, also evaluate**:
   - **AI Quality**: Will model outputs be accurate and reliable enough? What's the error tolerance? How will model drift or regressions be detected?
   - **AI Trust**: Will users trust the AI outputs? Is there a risk of automation bias or distrust leading to low adoption?
   - **Data**: Is there sufficient, unbiased, and permissioned data available? Could the training or retrieval data introduce harmful biases?
   - **Responsible AI**: Could the AI outputs cause harm, embarrassment, or regulatory issues? Are guardrails sufficient?

4. **For each assumption**, note:
   - What specifically could go wrong
   - How confident you are (High/Medium/Low)
   - Suggested way to test it

Think step by step. Be thorough but constructive — the goal is to strengthen the idea, not kill it.

---

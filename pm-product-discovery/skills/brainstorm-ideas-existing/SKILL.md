---
name: brainstorm-ideas-existing
description: "Brainstorm product ideas for an existing product using multi-perspective ideation from PM, Designer, and Engineer viewpoints. Use when generating new feature ideas, brainstorming solutions for an identified opportunity, or ideating with a product trio."
---

## Brainstorm Product Ideas (Existing Product)

Multi-perspective ideation for continuous product discovery. Generates ideas from PM, Designer, and Engineer viewpoints, then prioritizes the best five.

### What You'll Need
| Input | Required? | Example |
|-------|-----------|---------|
| Product description and current state | ✅ Required | B2B project management SaaS, 50k MAU |
| Desired outcome or opportunity to address | ✅ Required | "Increase 7-day retention from 28% to 40%" |
| User research or persona context | 🟡 Recommended | Interview notes, NPS verbatims, churn reasons |
| Opportunity Solution Tree (if exists) | ⚪ Optional | Existing OST showing mapped opportunities |

> **Don't have everything?** Start anyway — the skill will work with what you provide and flag where richer input would improve the output.

### Context

You are supporting a product trio performing continuous product discovery for **$ARGUMENTS**.

If the user provides files (research data, opportunity trees, personas), read them first. If they mention a product URL, use web search to understand the product.

### Domain Context

**Product Trio** (Teresa Torres, *Continuous Discovery Habits*): PM + Designer + Engineer collaborate on discovery together. "Best ideas often come from engineers." Discovery is not linear — loop back if experiments fail. Use the **Opportunity Solution Tree** (Teresa Torres) to map opportunities → solutions → experiments.

### Instructions

The user will describe their objective, target segment, and desired outcomes. Work through these steps:

### Phase 0: Context Confirmation

Before proceeding, review what's been provided in $ARGUMENTS and the conversation context. **Only ask about what's missing — don't re-ask what's already clear.**

1. **Summarize** what you understand from the provided context — restate the product, feature, or situation back to the user in 2-3 sentences.
2. **Identify gaps** — if any of the following are unclear, ask:
   - What product or feature area needs new ideas?
   - What is the desired outcome or metric to improve?
   - What has already been tried or considered?
3. **Confirm**: _"Here's my understanding: [summary]. I plan to [brief description of what the skill will produce]. Does this look right, or would you like to adjust anything before I proceed?"_

If the user provides additional context, incorporate it. If the user confirms, proceed.

1. **Understand the opportunity**: Confirm the product, objective, market segment, and desired outcomes. Ask for clarification if anything is ambiguous.

2. **Ideate from three perspectives** — generate 5 ideas each from:
   - **Product Manager**: Focus on business value, strategic alignment, and customer impact
   - **Product Designer**: Focus on user experience, usability, and delight
   - **Software Engineer**: Focus on technical possibilities, data leverage, and scalable solutions

3. **Prioritize the top 5 ideas** across all perspectives based on:
   - Strategic alignment with the stated objective
   - Potential impact on desired outcomes
   - Feasibility and effort required
   - Differentiation from existing solutions

4. **For each prioritized idea**, provide:
   - A clear name and one-sentence description
   - Why it was selected (reasoning)
   - Key assumptions to validate

Think step by step. Present ideas in a clear, structured format.

If the output is substantial, save it as a markdown document in the user's workspace.

---

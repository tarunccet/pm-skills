---
name: value-proposition-canvas
description: "Design a strategic value proposition using a 6-part JTBD template (Who, Why, What before, How, What after, Alternatives), then generate marketing-ready value prop statements for different segments and channels. Use when creating a value proposition, analyzing customer value delivery, writing marketing copy, or developing sales messaging."
category: strategy
complexity: intermediate
tags: ["value-proposition", "jtbd", "marketing-copy", "positioning", "customer-value"]
---

# Value Proposition Canvas

> **Quick reference:** Use for crafting your strategic value proposition using the 6-part JTBD framework. For marketing-ready copy (taglines, headlines, pitch statements), use `positioning-ideas` in pm-go-to-market.

## Purpose
Develop a comprehensive value proposition in two layers: first, a strategic JTBD-grounded value prop that clarifies *why* customers should choose your product; second, marketing-ready statements that translate that strategy into copy for specific segments, channels, and use cases.

## Domain Context
This skill uses a **6-part JTBD template** (by Tarun Narang) that starts with the customer and works toward the solution. It addresses the key limitations of Strategyzer's Value Proposition Canvas:

- **Customer first**: Starts with Who/Why, not the product — avoids solution-first thinking
- **One segment at a time**: Forces focus; Strategyzer's canvas encourages multi-segment dilution
- **Explicit alternatives**: Section 6 forces you to name what customers would use without you
- **Actionable output**: Produces a reusable statement ready for marketing, sales, and onboarding

Use Strategyzer's Value Proposition Canvas when you need detailed pains/gains decomposition for a mature product. Use this template for clarity, speed, and actionable output.

Jobs-to-be-Done (JTBD) framework focuses on the progress the customer is trying to make, not demographics. Value propositions are segment-specific — you may have different value props for different customer groups.

## When to Use
- Use when creating or refining a value proposition from scratch
- Use when you need marketing copy, sales messaging, or onboarding messages grounded in strategy
- Use when preparing a pitch, investor deck, or positioning document
- Use when expanding to a new customer segment and need tailored messaging

## When NOT to Use
- Don't use when you need full market segmentation (use the `user-segmentation` skill instead)
- Don't use when you need product positioning against competitors (use `competitive-battlecard` in pm-go-to-market)

## Instructions

You are a product strategist and growth expert specializing in value proposition design and marketing-ready messaging.

### Input
Your task is to develop a value proposition for **$ARGUMENTS**.

If the user provides customer research, interview transcripts, usage data, or existing marketing copy, read and analyze them before proceeding. Ground the value proposition in evidence wherever possible.

### Phase 0: Context Confirmation

Before proceeding, review what's been provided in $ARGUMENTS and the conversation context. **Only ask about what's missing — don't re-ask what's already clear.**

1. **Summarize** what you understand from the provided context — restate the product, market, or situation back to the user in 2-3 sentences.
2. **Identify gaps** — if any of the following are unclear, ask:
   - What product or feature is this value proposition for?
   - Who is the target customer segment?
   - What are the customer's primary jobs-to-be-done?
3. **Confirm**: _"Here's my understanding: [summary]. I plan to [brief description of what the skill will produce]. Does this look right, or would you like to adjust anything before I proceed?"_

If the user provides additional context, incorporate it. If the user confirms, proceed.

---

### Part 1: Strategic Value Proposition (6-Part JTBD Template)

Work through each section in order. Ask clarifying questions if critical inputs are missing.

**1. Who**
- Who is this value proposition for?
- What customer segment are we addressing?
- What are their key characteristics, roles, and constraints?

**2. Why (Problem)**
- What is the customer's core problem or need?
- What's the Job to Be Done (JTBD)?
- What desired outcomes are they trying to achieve?

**3. What Before**
- What is the customer's current situation?
- What are they using today to solve this problem?
- What friction, cost, or pain exists in the current approach?

**4. How (Solution)**
- How does the product solve the problem?
- What specific features or capabilities deliver value?
- Why is this solution better than the alternatives?

**5. What After**
- What is the improved outcome or future state?
- How does the customer's life or work change?
- What becomes possible that wasn't before?

**6. Alternatives**
- What other solutions could customers use?
- Why would they choose this product instead?
- What is the switching cost or friction from alternatives?

**Synthesize into:**
- A **Value Proposition Statement** (1-2 sentences): Captures the customer, problem, solution, and outcome in a single crisp statement
- A **Positioning Statement**: "[For] [target customer] [who] [has this need], [product name] is [category] [that] [key benefit]. Unlike [primary alternative], [product name] [key differentiator]."

---

### Part 2: Marketing-Ready Value Prop Statements

After completing Part 1, offer to generate marketing-ready statements.

Ask:
- Which segments need targeted messaging? (list segments or default to 3 from the analysis)
- Which channels will these statements be used for? (website hero, email, sales deck, onboarding, ad copy)
- Any brand tone or voice guidelines?

For each segment × channel combination, generate a value proposition statement that:
- Directly addresses the segment's specific pain point and desired outcome from Part 1
- Emphasizes the primary benefit first, then capability second
- Uses language that resonates with that audience (technical for engineers, outcome-focused for executives, benefit-led for consumers)
- Is appropriately concise for the channel (headline: ≤10 words; email: 1-2 sentences; slide: ≤25 words)

**Statement Structure per Segment**:
```
[Segment name]
Channel: [where this will be used]
Statement: [the value prop statement]
Proof point: [one data point, customer quote, or specific capability that supports it]
```

---

## Output Format

**Part 1 output**: Six filled-in template sections → Value Proposition Statement → Positioning Statement

**Part 2 output**: Statements table or list organized by segment, with channel variants and proof points

## Example

**Product**: Canva (for non-designers who need to create marketing graphics)

**Part 1:**
- **Who**: Non-designers at small businesses and marketing teams who need professional-looking graphics
- **Why**: They need to produce on-brand designs quickly without hiring designers or learning complex tools
- **What Before**: Using PowerPoint (limited), Photoshop (too complex), or hiring freelancers (slow, expensive)
- **How**: Drag-and-drop templates, thousands of design elements, AI design assistance, intuitive interface
- **What After**: Create professional designs in minutes; launch campaigns faster; eliminate design bottlenecks
- **Alternatives**: Adobe Suite (steep learning curve), Fiverr (slow turnaround), competitors (fewer templates)

**Value Proposition Statement**: "Canva lets non-designers create professional marketing graphics in minutes with drag-and-drop templates — eliminating the designer bottleneck without sacrificing quality."

**Part 2 sample:**
> **For Social Media Marketers** (Website hero)
> "Launch on-brand social campaigns in minutes, not days."
> *Proof point: Canva users create 30+ designs/month on average with no design background*

## Best Practices

- Always ground the value proposition in customer evidence — interviews, support data, or usage patterns beat assumptions
- Value props should be segment-specific; avoid one-size-fits-all statements
- The stronger your value prop, the easier marketing, sales, and product decisions become
- Test value propositions with real customers before finalizing — use them in interviews or A/B tests
- Revisit the value proposition when expanding to new segments or when competitive dynamics shift
- Use a **Value Curve** (Blue Ocean Strategy) to visually compare your offering against competitors across key factors

---

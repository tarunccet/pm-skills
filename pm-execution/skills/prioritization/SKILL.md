---
name: prioritization
description: "Unified prioritization skill that adapts to what you're prioritizing: features (ICE/RICE/Opportunity Score), assumptions (Impact × Risk matrix + experiment design), backlog items (strategic alignment + effort), or general trade-offs. Includes reference to all 9 prioritization frameworks. Use when prioritizing a backlog, triaging assumptions, ranking ideas, or choosing between competing initiatives."
category: execution
complexity: intermediate
tags: ["prioritization", "rice", "ice", "kano", "moscow", "opportunity-score", "backlog", "assumptions", "frameworks"]
---

# Prioritization

## Purpose
Apply the right prioritization framework to what you're actually prioritizing — customer problems, product features, risky assumptions, backlog items, or competing initiatives. The framework should match the decision, not the other way around.

## Domain Context

**Core principle**: Never allow customers to design solutions. Prioritize **problems (opportunities)**, not features. A backlog full of solutions is a sign of skipped discovery.

**Opportunity Score** (Dan Olsen, *The Lean Product Playbook*): The recommended framework for prioritizing customer problems. Survey customers on Importance and Satisfaction for each need (normalize to 0-1 scale).
- **Current value** = Importance × Satisfaction
- **Opportunity Score** = Importance × (1 − Satisfaction)
- **Customer value created** = Importance × (S2 − S1)

High Importance + Low Satisfaction = highest Opportunity Score = best problem to solve. Plot on an Importance vs. Satisfaction chart — the upper-left quadrant is the sweet spot.

**ICE** (Impact × Confidence × Ease): Useful for prioritizing initiatives and ideas. Considers value, risk, and economic factors in a single pass.

**RICE** (Reach × Impact × Confidence / Effort): Adds Reach as a separate dimension from Impact. Useful for larger teams needing more granularity in audience sizing.

## When to Use
- Use when you have a list of features, ideas, or initiatives and need to rank them
- Use when you have a list of assumptions to triage before designing experiments
- Use when your backlog has grown unwieldy and needs ruthless prioritization
- Use when stakeholders are lobbying for competing priorities and you need an objective framework

## When NOT to Use
- Don't use when you haven't yet defined the customer problem — do discovery first (use `brainstorm-ideas` or `identify-assumptions` skills)
- Don't use when you need sprint planning (use `sprint-plan` skill — it handles capacity and dependencies)

## Instructions

You are a product strategist specializing in structured prioritization, decision-making frameworks, and backlog management.

### Phase 0: Context Confirmation

Before proceeding, review what's been provided in $ARGUMENTS and the conversation context. **Only ask about what's missing — don't re-ask what's already clear.**

1. **Summarize** what you understand from the provided context — restate the product, feature, or situation back to the user in 2-3 sentences.
2. **Identify gaps** — if any of the following are unclear, ask:
   - What items need to be prioritized (features, bugs, initiatives)?
   - What framework preference do you have (RICE, ICE, Opportunity Score)?
   - What is the key metric or goal driving prioritization?
3. **Confirm**: _"Here's my understanding: [summary]. I plan to [brief description of what the skill will produce]. Does this look right, or would you like to adjust anything before I proceed?"_

If the user provides additional context, incorporate it. If the user confirms, proceed.

### Input
Your task is to help prioritize for **$ARGUMENTS**.

If the user provides files (spreadsheets, backlogs, opportunity assessments, assumption logs, research data), read and analyze them directly before proceeding.

### Step 1: Determine What You're Prioritizing

Ask (or infer from $ARGUMENTS):

1. **`features`** — A backlog of feature ideas or product capabilities to rank and select from
2. **`assumptions`** — A list of hypotheses or beliefs that need to be tested before committing to build
3. **`backlog`** — Sprint-ready backlog items (user stories, tasks) that need to be sequenced
4. **`general`** — Competing initiatives, bets, or strategic options that need trade-off analysis

If $ARGUMENTS clearly signals the type (e.g., "prioritize these feature requests", "rank these assumptions"), proceed directly to the matching mode.

---

### Mode 1: Feature Prioritization

**When to use**: You have a list of feature ideas and need to decide which to pursue and in what order.

**Framework selection**:
- Use **Opportunity Score** if you have customer importance/satisfaction data → prioritizes problems, not solutions
- Use **ICE** for quick relative scoring when customer data is sparse
- Use **RICE** for larger teams with distinct audience segments
- Use **Kano Model** to understand whether features are must-haves, performance differentiators, or delighters

**Steps**:

1. **Confirm the objective**: What product goal or OKR are these features serving? Features that don't serve a defined outcome should be questioned.

2. **Evaluate each feature** against:
   - **Impact** (Opportunity Score if available, otherwise 1-10 estimate): How much does it move the needle on the defined outcome? How many customers are affected?
   - **Confidence** (1-10): How certain are we this will deliver the expected impact? What evidence exists?
   - **Ease** (1-10): How much development, design, and coordination is required? Lower effort = higher score.
   - **Strategic alignment**: Does it fit the current product vision and roadmap themes?
   - **Risk**: What assumptions need to be true? What could go wrong?

3. **Score using ICE**: Score = Impact × Confidence × Ease. Rank highest to lowest.

4. **Recommend top 5 features** with:
   - Clear ranking with scores
   - Brief rationale for each selection
   - Key trade-offs considered
   - What was deprioritized and why
   - Flags for items that need assumption testing before building

5. **Present as a prioritization table**:

| Rank | Feature | Impact (1-10) | Confidence (1-10) | Ease (1-10) | ICE Score | Rationale |
|---|---|---|---|---|---|---|
| 1 | [Feature] | | | | | |

---

### Mode 2: Assumption Prioritization

**When to use**: You have a list of hypotheses or assumptions and need to decide what to test first to reduce risk most efficiently.

**Framework**: Impact × Risk matrix

**Steps**:

1. **For each assumption**, evaluate two dimensions:
   - **Impact** = Value if assumption is true × Number of customers affected (in ICE: Impact = Opportunity Score × # Customers)
   - **Risk** = (1 − Confidence) × Effort to validate

2. **Categorize each assumption** in the Impact × Risk matrix:

| Category | Action |
|---|---|
| **High Impact, High Risk** | 🧪 **Design an experiment** — riskiest bets, most valuable to validate |
| **High Impact, Low Risk** | ✅ **Proceed to build** — high reward, low uncertainty |
| **Low Impact, Low Risk** | ⏸ **Defer** — not worth testing or building now |
| **Low Impact, High Risk** | ❌ **Reject** — not worth the investment |

3. **For each High Impact, High Risk assumption** (the critical ones to test), suggest an experiment that:
   - Maximizes validated learning with minimal effort
   - Measures actual behavior, not stated preferences
   - Has a clear success metric and threshold
   - Specifies the minimum sample or timeline required

4. **Present results**:

| Assumption | Impact (H/M/L) | Risk (H/M/L) | Category | Recommended Action | Experiment Design |
|---|---|---|---|---|---|
| [Assumption] | | | | | |

5. **Identify the "leap of faith" assumptions** — the 1-3 assumptions that, if wrong, would invalidate the entire idea. These should be tested first.

---

### Mode 3: Backlog Prioritization

**When to use**: You have sprint-ready backlog items and need to sequence them for the next sprint or planning cycle.

**Dimensions to evaluate**:
- **Customer value**: Does this item directly solve a customer problem or deliver on a job-to-be-done?
- **Strategic alignment**: Does it contribute to current OKRs or roadmap themes?
- **Dependencies**: Does other work block or require this item?
- **Effort**: Relative story points or t-shirt sizing
- **Technical debt / risk**: Does delaying this create compounding cost?

**Steps**:

1. Group items into buckets:
   - **Must-do**: Committed deliverables, P0 bugs, compliance requirements
   - **High value**: Directly serves customer outcomes and current OKRs
   - **Enablers**: Technical work that unlocks future high-value items
   - **Nice-to-have**: Low urgency, low strategic impact

2. Within each bucket, sequence by: (dependencies first) → (highest customer value) → (lowest effort)

3. Flag any items that should be broken down before entering a sprint

4. Present as a prioritized backlog with rationale for top 10 items

---

### Mode 4: General / Strategic Prioritization

**When to use**: Competing bets, strategic initiatives, or resource allocation decisions where no standard backlog framework applies.

Use a **Weighted Decision Matrix**:

1. Define evaluation criteria and assign weights (criteria should reflect your actual strategic priorities)
2. Score each option 1-5 on each criterion
3. Calculate weighted score: Σ(criterion weight × score)
4. Present top options with scores, rationale, and key trade-offs

Example criteria (adjust to context): Strategic alignment (30%), Customer impact (25%), Revenue potential (20%), Feasibility (15%), Time to value (10%)

Also consider: **Risk vs. Reward** — plot options on a 2×2 to identify quick wins (high reward, low risk), strategic bets (high reward, high risk), time sinks (low reward, high risk), and fillers (low reward, low risk).

---

## Framework Reference: All 9 Prioritization Frameworks

| Framework | Best For | Key Formula / Method |
|---|---|---|
| **Opportunity Score** | Customer problems | Importance × (1 − Satisfaction). Normalize to 0–1. Upper-left quadrant = sweet spot. |
| **ICE** | Ideas / initiatives | Impact × Confidence × Ease. Higher = do first. |
| **RICE** | Ideas at scale | (Reach × Impact × Confidence) / Effort. Adds audience sizing to ICE. |
| Impact vs. Effort | Quick triage | Simple 2×2. Fast but not rigorous for strategic decisions. |
| Risk vs. Reward | Initiatives with uncertainty | Like Impact vs Effort but replaces Effort with Risk. |
| Kano Model | Understanding expectations | Must-be, Performance, Attractive, Indifferent, Reverse. For insight, not ranking. |
| Weighted Decision Matrix | Multi-factor decisions | Assign weights to criteria; score each option. Builds stakeholder buy-in. |
| MoSCoW | Requirements scoping | Must/Should/Could/Won't. Project management origin; use with caution for strategy. |
| Eisenhower Matrix | Personal PM tasks | Urgent vs. Important 2×2. For individual task management. |

**Templates**:
- [Opportunity Score Template (Google Slides)](https://docs.google.com/presentation/d/1jg-LuF_3QHsf6f1nE1f98i4C0aulnRNMOO1jftgti8M/edit#slide=id.g796641d975_0_3)
- [ICE Template (Google Sheets)](https://docs.google.com/spreadsheets/d/1LUfnsPolhZgm7X2oij-7EUe0CJT-Dwr-/edit?usp=share_link&ouid=111307342557889008106&rtpof=true&sd=true)
- [RICE Template (Google Sheets)](https://docs.google.com/spreadsheets/d/1S-6QpyOz5MCrV7B67LUWdZkAzn38Eahv/edit?usp=sharing&ouid=111307342557889008106&rtpof=true&sd=true)

---

## Output Format
- **Features**: Prioritized table with ICE/RICE scores + top 5 recommendations with rationale
- **Assumptions**: Impact × Risk matrix table + experiment designs for high-risk/high-impact items
- **Backlog**: Bucketed + sequenced backlog with dependency flags
- **General**: Weighted decision matrix + Risk/Reward 2×2 summary

## Example

**Feature prioritization input**: "Here are 8 feature requests for our project management tool: [list]"
**Expected output excerpt**:
> **#1: Smart deadline reminders (ICE: 8×7×8 = 448)** — High impact (affects 80% of users who miss deadlines), high confidence (validated in 5 interviews), relatively easy (pushes on existing notification infrastructure). **#2: Guest access links (ICE: 7×8×7 = 392)** — Strong demand signal from sales, client-facing teams blocked without it.

## Best Practices

- Always anchor prioritization to a defined product objective or OKR — without an outcome, ranking is arbitrary
- Prioritize validated problems over proposed solutions
- Use ICE/RICE as a starting point, not a final verdict — scores are directional, not gospel
- Surface and challenge the highest-risk assumptions before committing to build
- Deprioritized items deserve a brief explanation — builds trust with stakeholders who championed them
- Re-run prioritization when the market context or business goals change significantly

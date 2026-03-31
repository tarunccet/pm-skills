---
name: user-segmentation
description: "Unified segmentation skill with three modes: market segmentation (identify 3-5 opportunity segments with JTBD and fit analysis), user segmentation (cluster existing users from feedback data by behavior and needs), or beachhead selection (evaluate candidate segments against burning pain, WTP, winnability, and referral potential to pick the best launch segment). Use when exploring market opportunities, building a segmentation model from user data, or choosing where to focus first."
category: research
complexity: advanced
tags: ["segmentation", "market-segments", "user-segmentation", "beachhead", "jtbd", "go-to-market"]
---

# User Segmentation

> **Quick reference:** Use for segmenting users from existing feedback/survey data (user mode), for strategic market segments (market mode), or for picking your best launch segment (beachhead mode). For detailed individual personas from research, use `research-personas`.

## Purpose
Answer the right segmentation question for your current stage — whether you're exploring a market for opportunity sizing, clustering your existing users to target them differently, or picking the single best segment to dominate first at launch.

## Domain Context
Segmentation draws on three distinct methodologies depending on the question:

- **Market segmentation** (Kotler/STP): Divide a broad market into distinct groups based on shared characteristics and needs. Useful for opportunity evaluation, TAM analysis, and strategic targeting decisions.
- **Behavioral user segmentation** (JTBD + clustering): Group existing users by what they're trying to accomplish, not by demographics. Grounded in Teresa Torres' continuous discovery framework and Kathy Sierra's "badass users" thinking.
- **Beachhead strategy** (Geoffrey Moore, *Crossing the Chasm*): Choose the smallest winnable, referenceable market that validates PMF and enables adjacent expansion. Focused on launch decisions under resource constraints.

## When to Use
- Use `market` mode when exploring a new market, sizing TAM/SAM, or evaluating which segments to enter
- Use `user` mode when you have existing feedback data (interviews, support tickets, surveys, usage logs) and need to understand distinct user groups
- Use `beachhead` mode when deciding where to focus limited GTM resources for an initial launch
- Combine modes sequentially: market segmentation → beachhead selection is a common workflow

## When NOT to Use
- Don't use when you need user personas (use the `user-personas` skill — it creates narrative persona profiles)
- Don't use when you need ICP for a sales motion (use `ideal-customer-profile` skill)
- Don't use when you already know your segment and need GTM strategy (use `gtm-strategy` skill)

## Instructions

You are a strategic market researcher and behavioral analyst specializing in segmentation, customer clustering, and go-to-market targeting.

### Input
Your task is to help with segmentation for **$ARGUMENTS**.

### Step 1: Choose Segmentation Mode

Ask the user which mode applies:

1. **`market`** — Identify and evaluate 3-5 distinct market segments for opportunity assessment
2. **`user`** — Analyze existing user feedback data to surface distinct behavioral segments
3. **`beachhead`** — Evaluate candidate segments and identify the single best launch segment

If $ARGUMENTS already signals the mode (e.g., "segment my user feedback" → user; "where should we launch first" → beachhead), proceed directly.

You may also chain modes: after market segmentation, offer to run beachhead selection on the identified segments.

---

### Mode 1: Market Segmentation

**When to use**: Exploring a new market, sizing opportunity, choosing strategic targets.

**Analysis Steps (Think Step by Step)**

1. **Market Exploration**: Consider the full addressable market for $ARGUMENTS
2. **Segmentation Dimensions**: Identify logical segmentation axes (behavioral, demographic, firmographic, needs-based, use-case-based)
3. **Segment Definition**: Create 3-5 distinct, non-overlapping customer segments
4. **Characterization**: Develop rich profiles and validate distinctness
5. **Opportunity Assessment**: Evaluate market size, growth potential, and competitive intensity per segment

**Output: For each of the 3-5 segments**

**Segment Name & Overview**
- Clear, memorable segment identifier
- Size estimate (% of total market or absolute numbers)
- Growth trajectory and market dynamics

**Key Demographics & Firmographics**
- Core characteristics (age, role, company size, industry, geography)
- Decision-maker profiles if B2B

**Jobs-to-be-Done**
- Primary job and desired outcome
- Frequency, context, and stakes of the job
- Success criteria and desired outcomes

**Key Pain Points & Obstacles**
- Barriers to job completion specific to this segment
- Consequences of not solving the problem

**Desired Gains & Success Factors**
- Outcomes that matter most to this segment
- Preferred solution characteristics
- Cost and time constraints

**Product Fit Analysis**
- How well $ARGUMENTS serves this segment's needs
- Unique value proposition for this segment
- Potential adoption barriers or resistance

**Competitive Landscape**
- Existing solutions or workarounds this segment uses
- Alternative approaches and direct competitors serving them

After the segment profiles, provide a **Segment Prioritization Summary** — a table ranking segments by: market size, growth rate, competition intensity, and product fit. Highlight the top 1-2 recommended targets with rationale.

---

### Mode 2: User Segmentation (from Feedback Data)

**When to use**: You have existing user feedback (interviews, support tickets, surveys, usage logs) and want to understand distinct user groups to target them differently.

**Analysis Steps (Think Step by Step)**

1. **Data Preparation**: Read and organize all provided user feedback and data
2. **Behavior Extraction**: Identify key behavioral patterns, usage modes, and user journeys
3. **Needs Analysis**: Map jobs-to-be-done, desired outcomes, and pain points per user
4. **Clustering**: Group users into distinct segments based on behavioral and needs similarity
5. **Validation**: Ensure segments are coherent, non-overlapping, and actionable
6. **Characterization**: Develop rich profiles with representative quotes

**Output: For each identified segment (minimum 3)**

**Segment Name & Overview**
- Clear, descriptive segment identifier
- Size: estimated number or percentage of user base
- Brief one-sentence characterization

**Behavioral Characteristics**
- How this segment uses $ARGUMENTS (primary use cases, frequency, depth)
- Typical user journey and key touchpoints
- Technical proficiency or sophistication level
- Integration with other tools or workflows

**Jobs-to-be-Done & Motivations**
- Core job(s) this segment is trying to accomplish
- Underlying motivations and desired outcomes
- What success looks like for this segment

**Key Needs & Pain Points**
- Unmet needs specific to this segment's behavior
- Obstacles preventing effective job completion
- Current workarounds or alternative solutions they employ
- Severity and frequency of pain points

**Current Product Fit**
- How well $ARGUMENTS currently serves this segment
- Features or capabilities this segment values most
- Gaps or limitations most frustrating to this segment
- Churn risk signal

**Differentiated Value Opportunity**
- What unique value could be unlocked for this segment
- Feature or experience improvements that would maximize fit
- Messaging most resonant with this segment

**Segment Priority Recommendation**
- Strategic importance: growth potential, revenue impact, alignment with vision
- Implementation difficulty: ease of serving this segment's needs
- Recommendation: invest, maintain, or deprioritize

---

### Mode 3: Beachhead Segment Selection

**When to use**: Deciding where to focus limited launch resources. Based on Geoffrey Moore's beachhead strategy in *Crossing the Chasm*.

**Core principle**: Start absurdly specific. A niche beachhead is better than a vague mass market. Choose the smallest winnable, referenceable market that validates PMF and enables expansion.

**Step 1: Enumerate Candidate Segments**
List all plausible launch segments across: industry verticals, company sizes, job titles/roles, geographic regions, use cases, customer maturity levels.

**Step 2: Evaluate Each Candidate Against 4 Criteria**

**Criterion 1 — Burning Pain Point** (Does this segment experience an acute, unmet problem?)
- Daily frustration with the status quo
- Significant productivity loss or cost impact
- Emotional urgency to find a solution
- Current workarounds are expensive or fragile
- Problem is getting worse over time

**Criterion 2 — Willingness to Pay** (Does this segment have budget and motivation to pay?)
- Documented budget allocation for this problem area
- ROI is clear and compelling (value > cost)
- Decision-maker has autonomy or influence over budget
- No free or DIY alternatives that fully satisfy need

**Criterion 3 — Winnable Market Share** (Can you capture 60-70% in 3-18 months?)
- Segment is large enough but not oversaturated
- Limited competition or easy differentiation
- Your product has clear competitive advantage
- You have unique access or distribution advantage

**Criterion 4 — Referral Potential** (Will customers naturally refer to others?)
- Segment contains professional communities or associations
- Customers interact with adjacent segments (expansion opportunity)
- High word-of-mouth culture in this industry
- Solving the problem for one creates demand in adjacent segments

**Step 3: Score Each Candidate**

| Segment | Burning Pain (1-5) | WTP (1-5) | Winnable (1-5) | Referral (1-5) | Total | Notes |
|---|---|---|---|---|---|---|
| [Segment A] | | | | | | |
| [Segment B] | | | | | | |

**Step 4: Select Beachhead and Define Expansion Path**

For the recommended beachhead:
- Pain point validation and evidence
- Willingness-to-pay assessment and pricing guidance
- Realistic market share and revenue projections in 12 months
- Referral and expansion pathways to adjacent segments
- 90-day customer acquisition focus
- Post-beachhead expansion roadmap: which adjacent segment to enter second and why

---

## Output Format
- **Market mode**: Segment profiles (3-5) → prioritization table with recommendations
- **User mode**: Segment profiles (3+) with behavioral data, quotes, and invest/maintain/deprioritize recommendation
- **Beachhead mode**: Candidate evaluation table → beachhead recommendation with scoring rationale → expansion roadmap

## Example

**Beachhead mode prompt**: "Where should we launch our AI contract review tool first?"
**Expected output excerpt**:
> **Top candidate segments evaluated**: In-house legal teams at Series B–D startups, solo practitioners at small law firms, procurement teams at mid-market SaaS companies
> **Recommended beachhead**: In-house legal at Series B–D startups — burning pain (reviewing vendor contracts with no legal headcount), clear WTP ($500-2k/mo), winnable (few AI tools built for this niche), strong referral (legal ops community is tight-knit)

## Best Practices

- Ensure segments are measurable, accessible, and distinct
- Ground user segmentation in behavioral and motivational data, not just demographics
- For beachhead selection, validate all four criteria with at least 10 customer interviews before committing
- Focus all launch resources on dominating the beachhead — don't dilute efforts across segments
- Plan beachhead exit only after achieving 60%+ market share in that segment
- Flag any segments underrepresented in feedback data and recommend additional research

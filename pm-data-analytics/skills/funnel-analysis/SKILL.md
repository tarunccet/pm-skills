---
name: funnel-analysis
description: "Analyze a conversion funnel — identify drop-off points, calculate stage-by-stage conversion rates, generate leakage hypotheses, and recommend improvement experiments. Use when diagnosing funnel performance, prioritizing optimization work, or designing experiments to improve conversion."
---

# Funnel Analysis

### What You'll Need
| Input | Required? | Example |
|-------|-----------|---------|
| Funnel stage names and conversion data | ✅ Required | Sign-up → Activation → First Purchase (1000 → 420 → 180 users) |
| Time period for the analysis | ✅ Required | Q4 2025, last 30 days |
| Product / feature being analyzed | ✅ Required | Onboarding flow for B2B SaaS |
| Historical baseline or benchmark | 🟡 Recommended | Industry average activation rate ~40% |
| Qualitative user feedback about drop-off points | ⚪ Optional | Session recordings, support tickets |

> **Don't have everything?** Start anyway — the skill will work with what you provide and flag where richer input would improve the output.

## Purpose
Systematically analyze a conversion funnel to find the highest-impact drop-off points, generate hypotheses for why users are leaving, and recommend concrete experiments to improve flow.

## Domain Context
Funnel analysis answers the question: "Where are we losing users, and why?" The most valuable insight isn't just *where* the biggest drop occurs — it's *why* it happens and *what to test next*. This skill combines quantitative analysis (conversion rates, leakage volume) with structured hypothesis generation to turn data into action.

**Key principle:** Fix the biggest leaks first, but consider absolute volume, not just percentage drop. A 5% drop at 100,000 users/month is more impactful than a 30% drop at 1,000 users/month.

## Instructions

You are analyzing a conversion funnel for **$ARGUMENTS**.

Work through each section systematically.

### Step 1: Map the Funnel

For each stage provided, calculate:
- **Users entering**: count or percentage
- **Users exiting**: count or percentage
- **Conversion rate**: users who proceeded / users who entered × 100
- **Drop-off rate**: 100 - conversion rate
- **Drop-off volume**: absolute number of users lost at this stage

Present as a table:

| Stage | Users In | Users Out | Conversion Rate | Drop-off | Drop-off Volume |
|-------|----------|-----------|----------------|----------|----------------|
| [Stage 1] | [N] | [N] | [%] | [%] | [N] |
| ... | | | | | |

**Overall funnel conversion**: [first stage users → last stage users] = [%]

### Step 2: Identify the Biggest Leaks

Rank stages by drop-off volume (not just percentage). Highlight the top 2-3 stages where the most users are lost.

### Step 3: Generate Leakage Hypotheses

For each major drop-off stage, generate 3-5 hypotheses for *why* users are leaving:

**Hypothesis format:** "Users are dropping at [stage] because [reason]. Evidence: [what would confirm this]. Effort: [Low/Medium/High]."

Draw from common funnel failure patterns:
- **Friction**: Too many steps, confusing UI, slow load time
- **Value not clear**: Users don't understand what they get if they continue
- **Trust gap**: Missing social proof, unclear privacy, unfamiliar brand
- **Wrong audience**: Users who arrived don't match the product's target persona
- **Technical failure**: Errors, broken flows, mobile incompatibility
- **Timing mismatch**: Asking for commitment (payment, sign-up) too early

### Step 4: Prioritize Experiments

For the top 2-3 drop-off stages, recommend experiments using an ICE score (Impact × Confidence × Ease):

| Experiment | Stage | Hypothesis Tested | Expected Impact | Confidence | Ease | ICE Score | Recommended? |
|-----------|-------|-------------------|----------------|-----------|------|-----------|-------------|
| [Experiment name] | [Stage] | [Hypothesis #] | [H/M/L] | [H/M/L] | [H/M/L] | [1-10] | [Y/N] |

### Step 5: Generate Output Report

```
## Funnel Analysis: [Product / Flow Name]

**Period**: [date range]
**Overall conversion**: [X]%

### Stage-by-Stage Breakdown
[Table from Step 1]

### Biggest Leaks (ranked by volume)
1. [Stage]: [N] users lost ([%] drop) — [brief reason]
2. [Stage]: [N] users lost ([%] drop) — [brief reason]

### Leakage Hypotheses
[Step 3 hypotheses for top stages]

### Recommended Experiments
[Step 4 table]

### Quick Wins (low effort, moderate+ impact)
- [Experiment]: [Expected lift] — [1-sentence rationale]

### Benchmarks
[Industry benchmarks for this funnel type if available]

### Next Steps
- Run [Experiment 1] first — highest ICE score
- Instrument [stage] to gather qualitative data on drop-off reason
- Review with [team] to validate hypotheses before building
```

## Notes
- Funnel data can be misleading without segmentation — the same funnel often has very different conversion rates by acquisition channel, device type, or user persona
- Always validate hypotheses with qualitative data (session recordings, user interviews) before committing to a fix
- Benchmark against industry norms, but your product's context matters more — a 2% free-to-paid conversion in B2B SaaS is excellent; in consumer apps it may be poor

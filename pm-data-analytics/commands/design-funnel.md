---
description: Analyze a conversion funnel — identify drop-off points, calculate conversion rates at each stage, generate leakage hypotheses, and recommend improvement experiments
argument-hint: "<funnel name or product context>"
---

# /design-funnel -- Conversion Funnel Analysis

Systematically analyze your conversion funnel to find the highest-impact drop-off points and get prioritized, experiment-ready improvement recommendations.

## Invocation

```
/design-funnel Our signup → activation → first purchase funnel (last 30 days)
/design-funnel Onboarding: visit → signup → profile_complete → first_project → invite_team
/design-funnel [attach CSV with funnel stage data]
```

## Workflow

### Step 1: Gather Funnel Data

Ask:
- What are the stages of the funnel? (list them in order)
- What are the user counts or conversion rates at each stage?
- What time period does this cover?
- What product / feature is this funnel for?
- Any known context about drop-off points? (user feedback, session recordings)

### Step 2: Run the Analysis

Apply the **funnel-analysis** skill:

- Calculate stage-by-stage conversion rates and drop-off volumes
- Rank stages by absolute user loss (not just percentage)
- Identify the top 2-3 highest-impact leaks
- Generate 3-5 hypotheses per major drop-off stage
- Score hypotheses by evidence strength and fix effort

### Step 3: Recommend Experiments

For the top drop-off stages:
- Recommend 3-5 experiments ranked by ICE score (Impact × Confidence × Ease)
- Specify what each experiment tests
- Estimate implementation effort (days)
- Define success metrics and minimum detectable effect

### Step 4: Generate Report

```
## Funnel Analysis: [Product / Flow]

**Period**: [date range]
**Overall conversion**: [X%]

### Funnel Snapshot
[Stage-by-stage table]

### Top Leaks
1. [Stage]: [X] users lost — [primary hypothesis]
2. [Stage]: [X] users lost — [primary hypothesis]

### Recommended Experiments (by ICE score)
[Experiment table]

### Quick Wins (< 1 week effort)
[List]
```

### Step 5: Offer Next Steps

- "Want me to **write SQL queries** to pull this funnel data from your database?"
- "Should I **design the A/B test** for the top experiment?"
- "Want me to **design an event tracking plan** to instrument this funnel properly?"

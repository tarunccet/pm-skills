---
description: Run a full data-driven product discovery cycle — from defining metrics through funnel analysis and experiments to actionable insights
argument-hint: "<product area or question to investigate>"
---

# /data-driven-discovery -- Data-Driven Discovery Workflow

Run a structured data-driven discovery process that moves from defining what to measure to analyzing experiments and producing actionable recommendations. This command chains analytics skills into a single end-to-end workflow.

## Invocation

```
/data-driven-discovery Why is our trial-to-paid conversion dropping?
/data-driven-discovery New onboarding flow — measure impact and optimize
/data-driven-discovery                    # asks what you're investigating
```

## Workflow

### Step 1: Define What to Measure

Apply the **product-metrics** skill:

- Identify the North Star metric for the product area under investigation
- Define 3-5 input metrics that drive the North Star
- Set baseline values and target thresholds for each metric

Ask the user:
- What product area are you investigating? (feature, flow, segment)
- What does success look like? (growth, retention, revenue, engagement)
- What data sources are available? (analytics tools, databases, event logs)

**Checkpoint**: "Here's the proposed metrics framework. Does the North Star feel right? Want to adjust any input metrics before we instrument?"

### Step 2: Design the Tracking Plan

Apply the **event-tracking-plan** skill to define key events across the user journey, specify event properties and naming conventions, map events to Step 1 metrics, and identify instrumentation gaps. Produce a spec ready for engineering.

### Step 3: Analyze Current Funnels

Apply the **funnel-analysis** skill:

- Map the conversion funnel for the area under investigation
- Calculate conversion rates between each step
- Identify the biggest drop-off points with magnitude and impact
- Generate hypotheses for why users drop off at each stage

**Checkpoint**: "Here are the funnel drop-off points and hypotheses. Which areas feel most impactful to dig into? Want to focus on a specific stage?"

### Step 4: Segment Users

Apply the **cohort-analysis** skill to define meaningful cohorts (signup date, plan tier, channel, behavior), analyze retention curves, identify high- and low-performing segments, surface behavioral differences, and flag leading indicators of churn or activation.

### Step 5: Design and Analyze Experiments

Apply the **ab-test-analysis** skill:

- For each hypothesis from Step 3, design an A/B test with control/variant, primary and guardrail metrics, sample size, and success criteria
- If the user has existing results, analyze statistical significance, segment breakdowns, and deliver a ship / extend / stop recommendation

**Checkpoint**: "Here are the experiment designs. Ready to launch, or want to adjust test parameters? Share past results and I'll analyze those too."

### Step 6: Define Precise Metrics

Apply the **metric-definition** skill to produce formal specs for each key metric: name, definition, formula, data source, granularity, segmentation dimensions, and edge cases. Distinguish operational metrics from vanity metrics.

### Step 7: Compile Data-Driven Discovery Report

```
## Data-Driven Discovery Report: [Product Area]

**Date**: [today] | **Analyst**: [user] | **Status**: Draft

### 1. Investigation Summary
[What we investigated, why, and what data sources we used]

### 2. Metrics Framework
| Metric | Type | Baseline | Target | Status |
|--------|------|----------|--------|--------|

### 3. Funnel Analysis
| Step | Users | Conversion | Drop-off | Hypothesis |
|------|-------|-----------|----------|------------|

### 4. Cohort Insights
| Cohort | Retention (D7) | Retention (D30) | Key Behavior Difference |
|--------|----------------|-----------------|------------------------|

### 5. Experiment Plan
| # | Hypothesis | Test Design | Primary Metric | Runtime | Status |
|---|-----------|------------|----------------|---------|--------|

### 6. Metric Definitions
| Metric | Formula | Source | Granularity | Edge Cases |
|--------|---------|--------|-------------|------------|

### 7. Recommendations
1. [Top finding and recommended action]
2. [Second finding and recommended action]
3. [Third finding and recommended action]

### 8. Open Questions
| Question | Data Needed | Owner |
|----------|------------|-------|
```

Save the report as a markdown file to the user's workspace.

### Step 8: Offer Next Steps

- "Want me to **write a PRD** for the top recommendation?"
- "Should I **design more experiments** to validate these findings?"
- "Want me to **write SQL queries** to pull the data for this dashboard?"
- "Should I **create a stakeholder update** with these insights?"

## Notes

- This is a 20-40 minute structured workflow — let the user know upfront
- At each checkpoint, the user can redirect, skip ahead, or go deeper
- If the user already has analytics data, import it rather than working from assumptions
- Steps 3-5 can run in parallel if the user has data for multiple areas
- For early-stage products with limited data, focus on Steps 1-2 and design experiments to generate data
- Always distinguish correlation from causation when presenting cohort insights

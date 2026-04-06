---
name: metric-definition
description: "Define and distinguish operational, vanity, and actionable metrics. Write complete metric specs with name, definition, data source, calculation formula, owner, and review cadence. Use when formalizing metrics, building a metrics dictionary, or aligning a team on how metrics are measured."
---

# Metric Definition

### What You'll Need
| Input | Required? | Example |
|-------|-----------|---------|
| Metric name(s) to define | ✅ Required | "Weekly Active Users", "Activation Rate" |
| Product / context | ✅ Required | B2B SaaS project management tool |
| Data sources available | 🟡 Recommended | PostgreSQL events table, Segment, Mixpanel |
| Team or squad that owns the metric | ⚪ Optional | Growth team, Onboarding squad |
| Current tracking / calculation method | ⚪ Optional | "We count DAU from our analytics dashboard" |

> **Don't have everything?** Start anyway — the skill will work with what you provide and flag where richer input would improve the output.

## Purpose
Create precise, unambiguous metric definitions that a team can rally around. Eliminates the silent disagreements where two people say the same metric name but compute it differently.

## Domain Context
Most metric confusion stems from one of three problems:
1. **Vanity metrics** — metrics that feel good but don't reflect real value (e.g., total registered users, page views without engagement context)
2. **Ambiguous definitions** — "Active user" means something different to every team member
3. **Misaligned scope** — tracking a metric nobody can influence or that doesn't connect to business outcomes

This skill uses a structured spec format that forces clarity on definition, formula, data source, and ownership before a metric gets into a dashboard.

## Instructions

You are defining metrics for **$ARGUMENTS**.

### Phase 0: Context Confirmation

Before proceeding, review what's been provided in $ARGUMENTS and the conversation context. **Only ask about what's missing — don't re-ask what's already clear.**

1. **Summarize** what you understand from the provided context — restate the product, feature, or situation back to the user in 2-3 sentences.
2. **Identify gaps** — if any of the following are unclear, ask:
   - What metric or set of metrics needs to be defined?
   - What product area or business function do they measure?
   - Who will consume this metric (dashboard, alert, report)?
3. **Confirm**: _"Here's my understanding: [summary]. I plan to [brief description of what the skill will produce]. Does this look right, or would you like to adjust anything before I proceed?"_

If the user provides additional context, incorporate it. If the user confirms, proceed.

### Step 1: Classify Each Metric

For each metric provided, classify it:

| Category | Definition | Examples |
|----------|-----------|---------|
| **Operational / Actionable** | Teams can directly influence this metric; it reflects real user behavior or business outcomes | Activation rate, feature adoption rate, trial-to-paid conversion |
| **Vanity** | Looks impressive but doesn't indicate health or progress; hard to act on | Total registered users, page views, social media followers |
| **Leading indicator** | Predicts future outcomes; moves before lagging metrics change | Users who complete onboarding → predicts retention |
| **Lagging indicator** | Reflects outcomes that already happened; slow to respond to changes | Annual revenue, annual churn rate |
| **Health / guardrail** | Monitors something you must not break; not a goal | Error rate, p99 latency, support ticket volume |

Flag any vanity metrics and explain why they're vanity — then suggest an actionable alternative.

### Step 2: Write the Metric Spec

For each metric, produce a complete spec:

```
## Metric: [Metric Name]

**Type**: [Operational / Vanity / Leading / Lagging / Health]
**Owner**: [Team or role responsible for moving this metric]
**Last updated**: [date]

### Definition
[One precise sentence. Avoid ambiguity. Define edge cases.]

Example of a good definition: "Percentage of new users who complete at least 3 core actions within their first 7 days after sign-up, where core actions are defined as: [action A], [action B], [action C]."

Example of a bad definition: "Users who are active."

### Formula
[Numerator] / [Denominator] × 100 (if percentage)
OR
[Precise calculation description]

**Numerator**: [precise definition]
**Denominator**: [precise definition]
**Excludes**: [what is excluded and why — e.g., internal users, test accounts]
**Time window**: [e.g., rolling 7 days, calendar month, event-based]

### Data Source
| Element | Source | Table / Collection | Field |
|---------|--------|-------------------|-------|
| [numerator element] | [database/platform] | [table] | [field] |
| [denominator element] | [database/platform] | [table] | [field] |

### Example SQL (if applicable)
```sql
-- [Metric name] calculation
SELECT
  [numerator query] AS numerator,
  [denominator query] AS denominator,
  ROUND(100.0 * [numerator] / NULLIF([denominator], 0), 2) AS metric_value
FROM [table]
WHERE [conditions]
```

### Baseline & Targets
| Period | Value | Notes |
|--------|-------|-------|
| Current baseline | [value] | [context] |
| 30-day target | [value] | |
| 90-day target | [value] | |

### Review Cadence
- **Tracked**: [Daily / Weekly / Monthly]
- **Reviewed in**: [Weekly metrics review / Sprint review / Board meeting]
- **Alert threshold**: Trigger review if metric drops more than [X]% week-over-week

### Related Metrics
- **Drives**: [North Star metric this feeds into]
- **Driven by**: [Input metrics that influence this]
- **Counter-metric**: [Metric that catches gaming — e.g., if activation rate = success metric, completion quality = counter]

### Known Limitations
[What this metric doesn't capture. What could make it misleading.]
```

### Step 3: Flag Vanity Metrics

For any metric classified as vanity, explicitly note:
- Why it's vanity (what useful signal it lacks)
- The actionable alternative to track instead
- Whether to stop tracking it entirely or keep it as secondary context

### Step 4: Build the Metrics Dictionary (if multiple metrics)

If defining 3+ metrics, produce a summary table:

| Metric | Type | Owner | Formula (simplified) | Cadence | Dashboard |
|--------|------|-------|---------------------|---------|-----------|
| [Metric] | [Type] | [Owner] | [Formula] | [Freq.] | [Link] |

## Notes
- A metric without a formula isn't a metric — it's a concept
- Every metric should have exactly one owner; "everyone's" metric is nobody's metric
- Counter-metrics prevent Goodhart's Law: when a metric becomes a target, optimize the counter-metric too
- Revisit definitions quarterly — product changes often silently invalidate old formulas

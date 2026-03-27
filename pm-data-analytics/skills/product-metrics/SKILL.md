---
name: product-metrics
description: "Define a complete product metrics framework: North Star metric selection, input metrics, dashboard design, alert thresholds, and — for AI products — a four-layer AI metrics stack (model quality, operational, product-level, business). Use when setting up metrics for a new product, choosing a North Star, designing a dashboard, or defining KPIs for an AI feature."
category: analytics
complexity: advanced
tags: ["north-star", "metrics", "kpi", "dashboard", "ai-metrics", "product-analytics", "measurement"]
---

# Product Metrics

## Purpose
Design a rigorous product metrics framework from the North Star metric down to alert thresholds — with an optional AI-specific layer for products that include machine learning or generative AI features.

## Domain Context

**Metrics hierarchy**: Metrics = all measurable things. KPIs = a few key quantitative metrics tracked over a longer period. North Star Metric (NSM) = a single customer-centric KPI that is a leading indicator of long-term business success.

**North Star Metric IS**: A single, customer-centric KPI that reflects the value customers get from the product and serves as a leading indicator of long-term business success. Revenue is never a good NSM — it's a lagging indicator.

**North Star Metric is NOT**: Multiple metrics, a revenue/LTV metric, an OKR (that's goal-setting), or a strategy (though choosing the right NSM is a strategic choice).

**4 criteria for a good metric** (Ben Yoskovitz, *Lean Analytics*):
1. **Understandable** — creates a common language across the org
2. **Comparative** — tracked over time, not a snapshot
3. **Ratio or Rate** — more revealing than whole numbers
4. **Behavior-changing** — if a metric won't change how you behave, it's a bad metric

**The Three Business Games** (for NSM selection):
- **Attention Game**: Revenue from user time/engagement (Facebook, Spotify, YouTube)
- **Transaction Game**: Revenue from purchases/platform transactions (Amazon, Uber, Airbnb)
- **Productivity Game**: Revenue from efficiency gains (Canva, Dropbox, Notion, B2B SaaS)

**Goodhart's Law**: When a metric becomes a target, it ceases to be a good metric. Counter-metrics prevent this.

## When to Use
- Use when setting up metrics for a new product or feature launch
- Use when your current North Star feels wrong or your team isn't aligned on what to measure
- Use when designing or redesigning a product analytics dashboard
- Use when defining success metrics for an AI feature, model, or product

## When NOT to Use
- Don't use when you need SQL queries to compute these metrics (use `sql-queries` skill)
- Don't use when you need cohort analysis (use `cohort-analysis` skill)
- Don't use when you need A/B test analysis (use `ab-test-analysis` skill)

## Instructions

You are a metrics strategist and data analyst specializing in product measurement frameworks, North Star metric design, and AI product metrics.

### Input
Your task is to define a product metrics framework for **$ARGUMENTS**.

If the user provides existing dashboards, analytics data, OKRs, strategy docs, or feature specs, read them before proceeding.

### Step 1: Gather Context

Ask (or infer from $ARGUMENTS):
- What is the product or feature area?
- What stage is it in? (pre-launch, recently launched, mature)
- What are the current business goals or OKRs?
- Do you have existing metrics? What's working or broken?
- **Is this for an AI product or feature?** (determines whether to include AI metrics layer)
- What analytics tools are you using?

### Step 2: Classify the Business Game

Identify which game the product plays:
- **Attention**: Time/engagement-based value delivery → NSM candidates: DAU, daily active minutes, content completion rate
- **Transaction**: Transaction-based value delivery → NSM candidates: transactions per user per month, GMV, booking completion rate
- **Productivity**: Efficiency-based value delivery → NSM candidates: tasks completed, time-to-value, successful outcomes per user

### Step 3: Define the North Star Metric

Propose 2-3 NSM candidates. Validate each against 7 criteria:

| Criterion | Requirement |
|---|---|
| Expresses customer value | Reflects value delivered to customers, not just activity |
| Leading indicator | Predicts future revenue growth |
| Measurable | Has a precise definition and trackable data source |
| Understandable | The whole team can explain it in one sentence |
| Actionable | Teams can directly influence it through product decisions |
| Not a vanity metric | Changing it requires real behavior change |
| Not gameable | You can't inflate it without delivering real value |

Recommend the strongest candidate with rationale and explain why other candidates were rejected.

### Step 4: Define the Metrics Framework

Organize metrics into four layers:

**Layer 1 — North Star Metric**: The single metric capturing core customer value

**Layer 2 — Input Metrics (3-5)**: Levers that directly drive the North Star. Each should be:
- Directly actionable by a specific team
- A leading indicator of the NSM
- MECE collectively (mutually exclusive, collectively exhaustive in explaining NSM movement)

**Layer 3 — Health Metrics (3-5)**: Guardrails that should stay stable. If they degrade, something is broken. Examples: error rate, latency p95, NPS, churn rate, support ticket volume.

**Layer 4 — Counter-Metrics (1-2)**: Protect against Goodhart's Law. Example: if NSM is DAU, counter-metric is session quality score to prevent hollow engagement.

**For each metric, define**:

| Metric | Layer | Definition | Data Source | Visualization | Target | Alert Threshold |
|---|---|---|---|---|---|---|
| [Name] | NSM/Input/Health/Counter | [Exact formula: numerator/denominator, time window] | [Where data comes from] | [Line/Bar/Funnel/Number] | [Goal] | [When to trigger alert] |

### Step 5: Design Dashboard Layout

```
┌─────────────────────────────────────────────┐
│  NORTH STAR: [Metric] — [Current Value]     │
│  Trend: [↑/↓ X% vs last period]             │
├──────────────────┬──────────────────────────┤
│  Input Metric 1  │  Input Metric 2          │
│  [Sparkline]     │  [Sparkline]             │
├──────────────────┼──────────────────────────┤
│  Input Metric 3  │  Input Metric 4          │
│  [Sparkline]     │  [Sparkline]             │
├──────────────────┴──────────────────────────┤
│  HEALTH: [Latency] [Error Rate] [NPS]       │
├─────────────────────────────────────────────┤
│  BUSINESS: [MRR] [CAC] [LTV] [Churn]        │
└─────────────────────────────────────────────┘
```

Adapt the layout to the specific metrics defined above.

### Step 6: Set Alert Thresholds and Review Cadence

| Metric | Green (Healthy) | Yellow (Investigate) | Red (Act Now) | Check Frequency |
|---|---|---|---|---|
| [metric] | [healthy range] | [warning threshold] | [critical threshold] | [daily/weekly/monthly] |

**Review cadence**:
- **Daily**: Operational health (errors, latency, critical flows)
- **Weekly**: Input metrics and engagement trends
- **Monthly**: North Star, business metrics, OKR progress
- **Quarterly**: Strategic review and metric recalibration

### Step 7 (If AI Product): Add AI Metrics Layer

If the product includes AI or ML features, add a four-layer AI metrics stack:

**AI Layer 1 — Model Quality Metrics**:

*Classification / ranking*: Precision, Recall, F1-score (per class + macro/weighted), AUC-ROC, AUC-PR for imbalanced classes

*Text generation (LLMs)*: BLEU (n-gram precision vs. reference), ROUGE-L (recall-oriented), BERTScore (semantic similarity), LLM-as-judge score, Human evaluation rubric: relevance, fluency, factuality, helpfulness (1-5 scale)

*RAG and grounded generation*: Hallucination rate (% responses with factual errors), Groundedness (% claims traceable to retrieved context), Citation accuracy, Context utilization rate

**AI Layer 2 — Operational Metrics**:
- **Latency**: p50, p95, p99 end-to-end response time (not just model inference)
- **Throughput**: Requests per second at peak; queue depth under load
- **Error rate**: Model errors, timeout rate, parse failures (target: < 0.1%)
- **Cost per inference**: Total cost / successful requests; trend over time
- **Token utilization**: Avg input + output tokens; headroom vs. context window limit
- **Availability**: Uptime SLA compliance; vendor-caused vs. self-caused outages

**AI Layer 3 — Product-Level AI Metrics**:
- **Task completion rate**: % of AI-assisted tasks completed successfully
- **AI feature adoption rate**: % of eligible users who engage with the AI feature
- **Override / correction rate**: % of AI outputs users edit or reject (high = quality issue)
- **Re-generation rate**: % of times users request a new output (dissatisfaction signal)
- **Trust score**: % of outputs receiving explicit positive feedback; trend over time
- **Time-to-value**: Time from AI feature engagement to desired outcome

**AI Layer 4 — Business Impact Metrics**:
- **Revenue attribution**: Incremental revenue from AI-assisted conversions
- **Cost savings**: Reduction in manual work, support tickets, or headcount enabled by AI
- **NPS delta**: NPS difference between AI feature users vs. non-users
- **Retention impact**: Retention rate of AI adopters vs. control group
- **AI feature ROI**: (Revenue + savings) / (model + infra + labor costs)

**AI North Star selection** — common candidates by AI type:
- Copilot/assistant → **task completion rate with AI**
- Recommendation → **click-through rate on AI recommendations**
- Generation → **accepted output rate** (not re-generated, not discarded)
- Classification → **accuracy on production distribution**

**AI degradation detection**:
- Set alert thresholds: p95 latency > X ms, error rate > Y%, hallucination rate > Z%
- Implement shadow mode / canary evaluation before full rollout
- Define model drift detection: distribution shift in inputs, output quality degradation over time
- Schedule periodic offline eval refreshes (weekly or per model update)

### Step 8: Recommend Tooling

Based on the user's context, recommend:
- **Product analytics**: Amplitude, Mixpanel, PostHog (event-based tracking)
- **SQL-based dashboards**: Looker, Metabase, Mode, Redash
- **Operational health**: Datadog, Grafana, New Relic
- **AI-specific**: Langfuse, Weights & Biases, Arize, WhyLabs (for model monitoring)

---

## Output Format

Full metrics framework document with:
1. North Star Metric with business game classification, definition, and validation table
2. Metrics framework table (all layers)
3. Dashboard layout diagram
4. Alert thresholds table
5. Review cadence schedule
6. AI metrics stack (if applicable)
7. Tooling recommendations

## Example

**Product**: B2B SaaS project management tool (Productivity game)

**North Star**: "Projects completed per active team per month"
- Expresses value: ✅ Captures actual work done, not just logins
- Leading indicator: ✅ Completed projects → retention → expansion revenue
- Actionable: ✅ Onboarding team improves time-to-first-project; features team adds templates

**Input metrics**: Time-to-first-project, Active projects per team, Task completion rate, Team collaboration events/week

**Counter-metric**: Average project cycle time (to prevent inflating "completions" with trivially small projects)

## Best Practices

- A good North Star is rare — most teams pick vanity metrics. Push for a metric that captures *user value delivered*, not just engagement
- Start with fewer metrics, well-instrumented, over a sprawling dashboard nobody checks
- Counter-metrics prevent Goodhart's Law — always pair your North Star with one
- For pre-launch products, define metrics now but note baselines will need calibration after launch
- For AI products, monitor model quality metrics at launch and after every model update
- Revisit the metrics framework annually or when the business model changes significantly

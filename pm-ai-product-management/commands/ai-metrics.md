---
description: Define success metrics for an AI feature — model quality, operational, product, and business KPIs
argument-hint: "<AI feature or product to define metrics for>"
---

# /ai-metrics -- AI Product Metrics Framework

Define a comprehensive metrics framework for an AI feature spanning model quality, operational performance, user experience, and business impact. Produces a metrics document with targets, measurement methods, and alert thresholds.

## Invocation

```
/ai-metrics Smart document summarisation feature
/ai-metrics AI-powered churn prediction model for a SaaS product
/ai-metrics Real-time translation in a video conferencing app
/ai-metrics Personalised onboarding assistant for a B2B platform
/ai-metrics                          # interactive mode — asks what you need
```

## Workflow

### Step 1: Gather Context

Ask the user for:

- **Feature description**: what does the AI feature do? What are its inputs and outputs?
- **Model type**: LLM generation, classification, ranking, regression, RAG, or combination?
- **User goal**: what outcome does the user want from this feature?
- **Business goal**: what business outcome does this feature drive? (retention, revenue, cost saving, engagement)
- **Current baselines**: what metrics are already tracked, if any? What are current values?
- **Known failure modes**: what does bad look like? What would trigger an incident?

If the user provides an AI feature spec or PRD, read it directly.

### Step 2: Apply `ai-product-metrics` Skill

Activate the `ai-product-metrics` skill to generate the full four-layer metrics framework.

### Step 3: Define Model Quality Metrics

Select and define the appropriate model quality metrics for the AI type:

- **Generation (LLMs)**: hallucination rate, groundedness, BLEU/ROUGE/BERTScore, LLM-as-judge score, human eval
- **Classification**: precision, recall, F1, AUC-ROC, confusion matrix analysis
- **Regression / prediction**: RMSE, MAE, MAPE, R²
- **RAG / retrieval**: citation accuracy, context utilisation, groundedness score
- **Ranking / recommendation**: NDCG, MAP, click-through rate on top-ranked items

For each metric: define the formula, the measurement method, the target value, and the minimum acceptable floor.

### Step 4: Define Operational Metrics

Establish operational targets:

- **Latency**: p50, p95, p99 targets (end-to-end, not just model inference)
- **Throughput**: requests per second at peak load
- **Error rate**: acceptable % of failed or malformed model responses
- **Cost per inference**: target $ / 1,000 requests; cost budget per month
- **Token utilisation**: average tokens per request; headroom vs. context window

Define alert thresholds for each operational metric.

### Step 5: Define Product-Level Metrics

Identify the metrics that capture user value and adoption:

- **Task completion rate**: primary signal of feature utility
- **AI feature adoption rate**: % of eligible users who engage
- **Override / correction rate**: % of outputs users edit or reject
- **Re-generation rate**: % of times users request a new output
- **Explicit feedback rate and sentiment**: thumbs up/down ratios, trends
- **Time-to-value**: time from AI interaction to desired outcome

### Step 6: Define Business Metrics

Connect AI performance to business outcomes:

- **Revenue attribution**: via A/B test or difference-in-differences analysis
- **Cost savings**: reduction in manual tasks, support volume, or headcount enabled
- **NPS delta**: NPS among AI feature users vs. non-users or pre/post cohort
- **Retention impact**: cohort retention rate for users who adopted the AI feature

### Step 7: Select North Star Metric

Recommend a single North Star metric for this AI feature:

- Must capture the AI's core value in one number
- Must be measurable, actionable, and leading (not lagging)
- Common choices by AI type:
  - Assistant / copilot → **Accepted output rate** (not corrected, not discarded)
  - Classifier → **Production F1 on current distribution**
  - Recommendation → **Click-through rate on AI recommendations**
  - Generation → **Task completion rate with AI**

### Step 8: Produce Metrics Framework Document

Generate the deliverable with:

1. **North Star metric**: definition, target, measurement method
2. **Full metrics table**:

   | Metric | Layer | Definition | Target | Floor | Measurement Method | Alert Threshold | Owner |
   |---|---|---|---|---|---|---|---|

3. **Alerting and degradation detection strategy**
4. **Measurement tooling recommendations** (analytics platform, eval pipeline, monitoring stack)
5. **Review cadence**: which metrics are reviewed in real-time, hourly, daily, weekly, and per model update
6. **Baseline values** (current state, if known) and target improvement timeline

### Step 9: Offer Next Steps

- "Want me to create an **AI feature spec** with non-functional requirements linked to these metrics using `/ai-spec`?"
- "Want me to create an **AI incident response plan** with alert thresholds from this framework?"
- "Want me to set up an **AI roadmap** with model improvement milestones based on these metrics using `/ai-roadmap`?"

## Notes

- Override/correction rate is the most powerful implicit quality signal — prioritise collecting it from day one
- Avoid vanity metrics: a high thumbs-up rate means nothing if task completion rate is low
- North Star metric must be chosen before launch and tracked from first user; don't wait until you have enough data
- Cost-per-inference should be tracked from day one — AI costs are easy to ignore until they become a surprise line item
- Model quality metrics require a benchmark dataset to evaluate against; create this before or alongside feature development

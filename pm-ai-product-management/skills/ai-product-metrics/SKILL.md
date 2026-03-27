---
name: ai-product-metrics
description: "Define and structure success metrics for AI features across model quality, operational performance, user experience, and business impact layers. Use when setting up measurement for an AI feature, defining AI KPIs, or diagnosing AI product performance issues."
---

## AI Product Metrics

Define a comprehensive metrics framework for AI features spanning model quality, operations, product experience, and business outcomes.

### Context

You are defining success metrics for **$ARGUMENTS**.

### Instructions

1. **Understand the AI feature and goals**:
   - What does the AI do? (generation, classification, recommendation, retrieval, prediction)
   - What does success look like for users? For the business?
   - What failure modes matter most?

2. **Layer 1 — Model quality metrics**:

   **Classification / ranking**:
   - Precision, Recall, F1-score (per class and macro/weighted)
   - AUC-ROC, AUC-PR for imbalanced classes
   - Confusion matrix analysis

   **Regression / prediction**:
   - RMSE (Root Mean Square Error), MAE (Mean Absolute Error)
   - MAPE (Mean Absolute Percentage Error) for percentage-scale predictions
   - R² goodness of fit

   **Text generation (LLMs)**:
   - BLEU (n-gram precision vs. reference), ROUGE-L (recall-oriented)
   - BERTScore (semantic similarity using embeddings)
   - LLM-as-judge score (model rates its own or another model's output)
   - Human evaluation: relevance, fluency, factuality, helpfulness (1–5 scale)

   **RAG and grounded generation**:
   - Hallucination rate: % of responses containing factually incorrect claims
   - Groundedness: % of claims traceable to retrieved context
   - Citation accuracy: % of citations pointing to correct source
   - Context utilisation: % of retrieved context actually used

3. **Layer 2 — Operational metrics**:
   - **Latency**: p50, p95, p99 response time (measure end-to-end, not just model inference)
   - **Throughput**: requests per second at peak; queue depth under load
   - **Error rate**: model errors, timeout rate, parse failures (target < 0.1%)
   - **Cost per inference**: total cost / successful requests; cost trend over time
   - **Token utilisation**: avg input + output tokens; headroom vs. context window limit
   - **Availability**: uptime SLA compliance; vendor-caused vs. self-caused outages

4. **Layer 3 — Product-level metrics**:
   - **Task completion rate**: % of AI-assisted tasks completed successfully
   - **AI feature adoption rate**: % of eligible users who engage with the AI feature
   - **Override / correction rate**: % of AI outputs that users edit or reject (high rate = low quality)
   - **Re-generation rate**: % of times users request a new output (dissatisfaction signal)
   - **Explicit feedback rate**: % of outputs receiving thumbs up/down or star rating
   - **Trust score**: % of explicit positive feedback; trend over time
   - **Time-to-value**: time from AI feature engagement to desired outcome
   - **Feature abandonment rate**: % of sessions where user starts but abandons AI feature

5. **Layer 4 — Business metrics**:
   - **Revenue attribution**: incremental revenue from AI-assisted conversions
   - **Cost savings**: reduction in manual work, support tickets, or headcount enabled by AI
   - **NPS delta**: difference in NPS between AI feature users vs. non-users
   - **Retention impact**: retention rate of users who adopt AI feature vs. control
   - **AI feature ROI**: (revenue + savings) / (model + infra + labour costs)

6. **North Star metric selection**:
   - Identify the single metric that best captures AI value for this use case
   - Common North Stars by AI type:
     - Copilot/assistant: **task completion rate with AI**
     - Recommendation: **click-through rate on AI recommendations**
     - Generation: **accepted output rate** (not re-generated, not discarded)
     - Classification: **accuracy on production distribution**
   - Define target value and measurement cadence

7. **Alerting and degradation detection**:
   - Set alert thresholds: p95 latency > X ms, error rate > Y%, hallucination rate > Z%
   - Implement shadow mode / canary evaluation before full rollout
   - Define model drift detection: distribution shift in inputs, output quality degradation over time
   - Schedule periodic offline eval refreshes (weekly or per model update)

8. **Produce metrics framework document**:
   - Metrics table: metric name, layer, definition, target, measurement method, alert threshold
   - North Star metric with rationale
   - Measurement tooling recommendations
   - Review cadence

Think step by step. Save as markdown.

---

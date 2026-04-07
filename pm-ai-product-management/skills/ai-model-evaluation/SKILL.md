---
name: ai-model-evaluation
description: "Evaluate and compare LLMs, ML APIs, and fine-tuned models for product fit across quality, latency, cost, compliance, and vendor risk dimensions. Use when selecting an AI model or vendor, comparing foundation model options, or making build-vs-API decisions for a product use case."
---

## AI Model Evaluation

Help PMs systematically evaluate AI models (LLMs, ML APIs, fine-tuned models) for product fit using a structured framework.

### Context

You are helping evaluate AI models or vendors for **$ARGUMENTS**.

### Instructions

### Phase 0: Context Confirmation

Before proceeding, confirm your understanding of the request:

1. **Summarize** what you understand from $ARGUMENTS — restate the product, feature, or situation back to the user in 2-3 sentences.
2. **Identify gaps** — check whether the following are clear (ask if not):
   - What task will the model perform?
   - Who are the end users and what quality bar do they expect?
   - What are the hard constraints (latency, cost, data residency)?
   - Have any candidate models been identified already?
3. **Confirm**: _"Here's my understanding: [summary]. I plan to evaluate candidate models across quality, latency, cost, compliance, and vendor risk dimensions and produce a scored evaluation report. Does this look right, or would you like to adjust anything before I proceed?"_

If the user provides additional context, incorporate it before moving to Step 1. If the user confirms, proceed.

Once context is confirmed, proceed to the detailed analysis steps below.

1. **Clarify the use case**:
   - What task will the model perform? (classification, generation, summarisation, code, multimodal)
   - Who are the end users and what quality bar do they expect?
   - What are the hard constraints? (latency budget, cost ceiling, data residency, compliance requirements)

2. **Identify candidate models / vendors**:
   - List at least three candidates spanning foundation model APIs (e.g., OpenAI, Anthropic, Google), open-weight models (e.g., Llama, Mistral), and fine-tuned alternatives
   - Note the latest available versions for each

3. **Score each candidate on the evaluation matrix** (see table below):
   - Rate each dimension 1–5 and explain the rating
   - Weight dimensions according to the user's stated priorities

4. **Assess quality benchmarks**:
   - **Generation tasks**: BLEU, ROUGE-L, BERTScore, human evaluation, LLM-as-judge
   - **Classification tasks**: precision, recall, F1, AUC-ROC on a held-out test set
   - **RAG / grounded tasks**: hallucination rate, groundedness score, citation accuracy
   - Recommend running a small offline eval (50–200 examples) before committing

5. **Model operational requirements**:
   - **Latency**: p50 / p95 / p99 requirements vs. measured API latency; streaming availability
   - **Throughput**: requests per second needed; rate limits of candidate APIs
   - **Context window**: max tokens needed for the use case (with headroom for prompt + output)
   - **Modality support**: text, images, audio, video, tool/function calling, structured outputs

6. **Cost modelling**:
   - Estimate monthly cost at target request volume: `requests/month × avg_tokens × price_per_token`
   - Compare input vs. output token pricing; consider caching and batching savings
   - Model cost trajectory as volume scales 10× and 100×

7. **Fine-tuning and customisation**:
   - Does the model support fine-tuning? (LoRA, full fine-tune, RLHF)
   - What data volume is required? What is the fine-tuning cost and cadence?
   - Evaluate RAG as a lower-cost customisation alternative

8. **Data privacy and compliance**:
   - GDPR: Is data processed in the EU? Is there a data processing agreement?
   - HIPAA: Is the vendor a BAA signatory?
   - SOC 2 Type II certification status
   - Zero data retention / training opt-out policies
   - Data residency and sovereignty requirements

9. **Vendor risk**:
   - Deprecation risk: historical model deprecation timeline; migration notice periods
   - Lock-in risk: proprietary API surface vs. OpenAI-compatible endpoints
   - Stability: SLA uptime guarantees, incident history
   - Company viability: funding, revenue, strategic roadmap

10. **Decision framework — build vs. API vs. fine-tune**:
    - **Use API as-is**: commodity task, fast time-to-market, no data advantage, low volume
    - **Fine-tune base model**: domain-specific language/style, consistent format, moderate data available
    - **Build custom model**: core differentiator, large proprietary dataset, regulatory requirement, extreme cost sensitivity at scale

11. **Produce evaluation report**:
    - Scoring matrix (see template below)
    - Top recommendation with rationale
    - Risks and mitigations
    - Suggested proof-of-concept scope

### Evaluation Scoring Matrix

| Dimension | Weight | Candidate A | Candidate B | Candidate C |
|---|---|---|---|---|
| Task alignment / output quality | 25% | /5 | /5 | /5 |
| Latency (p95) | 15% | /5 | /5 | /5 |
| Cost at scale | 15% | /5 | /5 | /5 |
| Context window | 10% | /5 | /5 | /5 |
| Fine-tuning capability | 10% | /5 | /5 | /5 |
| Data privacy / compliance | 15% | /5 | /5 | /5 |
| Vendor lock-in risk | 5% | /5 | /5 | /5 |
| Deprecation / stability risk | 5% | /5 | /5 | /5 |
| **Weighted total** | 100% | | | |

Think step by step. Save as markdown.

---

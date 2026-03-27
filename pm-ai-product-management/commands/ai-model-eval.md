---
description: Evaluate and compare AI models or vendors for a specific product use case
argument-hint: "<use case or capability to evaluate>"
---

# /ai-model-eval -- AI Model Evaluation

Systematically evaluate and compare AI models, LLM APIs, and vendor options for a specific product use case using a structured scoring matrix covering quality, latency, cost, compliance, and vendor risk.

## Invocation

```
/ai-model-eval Customer support ticket classification
/ai-model-eval Long-document summarisation for legal contracts
/ai-model-eval Real-time code completion in an IDE plugin
/ai-model-eval Product image tagging and attribute extraction
/ai-model-eval                          # interactive mode — asks what you need
```

## Workflow

### Step 1: Collect Requirements

Gather the following before evaluating candidates:

- **Use case**: what task will the model perform? What are the inputs and outputs?
- **Quality needs**: what is the minimum acceptable quality? Are there specific benchmark targets?
- **Latency budget**: what is the maximum acceptable p95 response time (ms)?
- **Cost constraints**: what is the maximum cost per 1,000 inferences ($)?
- **Volume**: current and projected requests per month (to model cost and rate limits)
- **Compliance requirements**: GDPR, HIPAA, SOC 2, data residency, zero-retention?
- **Context window needs**: maximum tokens needed per request (prompt + output)?
- **Modality and capability requirements**: text-only? Multimodal? Tool/function calling? Structured JSON output?
- **Fine-tuning need**: is customisation required to meet quality targets?

### Step 2: Apply `ai-model-evaluation` Skill

Activate the `ai-model-evaluation` skill to structure the evaluation framework and scoring matrix.

### Step 3: Identify Candidate Models / Vendors

Generate a shortlist of at least three candidates spanning:

- **Foundation model APIs**: OpenAI (GPT-4o, o3), Anthropic (Claude Sonnet/Opus), Google (Gemini), Mistral, Cohere
- **Open-weight / self-hosted models**: Llama 3, Mistral, Gemma, Qwen (for cost-sensitive or data-residency cases)
- **Specialised APIs**: domain-specific models if relevant (e.g., medical, legal, code-specialised)
- **Fine-tuned options**: fine-tuned version of a base model using the team's proprietary data

Note the latest available model version and pricing for each candidate.

### Step 4: Score Each Candidate on the Evaluation Matrix

Rate each candidate on all dimensions (1–5) with brief justification:

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

Adjust dimension weights based on the user's stated priorities (e.g., increase compliance weight for healthcare use cases).

### Step 5: Apply `ai-build-buy-partner` Skill for Recommendation

Use the `ai-build-buy-partner` skill to evaluate the broader sourcing decision:

- Is the capability strategic enough to justify building custom?
- Would fine-tuning a base model outperform API options at acceptable cost?
- Is a hybrid approach (API + RAG) the best tradeoff?

Model the cost break-even: at what monthly request volume does self-hosting become cheaper than API usage?

### Step 6: Generate Comparison Report with Recommendation

Produce the evaluation report with:

1. **Use case summary and requirements**
2. **Candidate shortlist with current version and pricing**
3. **Offline evaluation results** (if the user can run sample inputs — prompt for 20–50 test cases)
4. **Scoring matrix** with weighted totals and per-dimension justification
5. **Cost model**: estimated monthly cost at current volume and at 10× volume for each candidate
6. **Compliance assessment**: pass/fail per compliance requirement for each candidate
7. **Recommendation**: top choice with rationale; second choice as fallback
8. **Risks and mitigations**: key risks of the recommended choice and how to mitigate them
9. **Suggested proof-of-concept scope**: minimum experiment to validate the recommendation before committing

### Step 7: Offer Next Steps

- "Want me to create an **AI feature spec** for this use case using `/ai-spec`?"
- "Want me to **define success metrics** for evaluating model performance in production using `/ai-metrics`?"
- "Want me to conduct a **responsible AI review** of the shortlisted models using `/responsible-ai-review`?"

## Notes

- Do not rely solely on public leaderboard scores — they rarely reflect real-world task performance on your specific use case
- Run at minimum a 50-example offline evaluation on candidate models before making a final decision
- Pricing changes frequently — verify current prices at evaluation time, not from cached knowledge
- Consider total cost of ownership: API cost + integration effort + ongoing prompt maintenance + monitoring
- For compliance-sensitive use cases, request vendor data processing agreements and audit reports before recommending

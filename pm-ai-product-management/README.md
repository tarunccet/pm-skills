# pm-ai-product-management

A [Claude Code](https://claude.ai/code) plugin for AI product managers. Provides structured skills and slash commands for every stage of the AI product lifecycle — from evaluating models and writing AI feature specs to running responsible AI reviews, handling AI incidents, and building data strategies.

Built for PMs who ship AI-powered products and need rigorous, repeatable frameworks for the unique challenges of probabilistic systems.

> **Note**: AI competitive analysis is now part of the unified `competitor-analysis` skill (ai-focused mode) in pm-market-research. AI product metrics are now part of the unified `product-metrics` skill in pm-data-analytics.

---

## Skills

Skills are activated automatically by Claude Code when relevant, or can be referenced explicitly in a command.

### `ai-model-evaluation`
Evaluate and compare LLMs, ML APIs, and fine-tuned models for product fit. Covers task alignment, quality benchmarks (BLEU, ROUGE, LLM-as-judge), latency, cost modelling, context window needs, fine-tuning capability, compliance (GDPR, HIPAA, SOC 2), vendor lock-in risk, and deprecation risk. Includes a weighted scoring matrix template.

### `responsible-ai`
Assess AI features for ethical risks, bias, safety issues, and regulatory compliance. Covers fairness metrics (demographic parity, equal opportunity, disparate impact), transparency and explainability, harm prevention and red-teaming, privacy governance, environmental impact, EU AI Act risk tiers, NIST AI RMF, and incident response planning.

### `prompt-engineering`
Design production-ready prompts including system prompts, few-shot examples, chain-of-thought instructions, structured output schemas, and guardrails. Covers prompt injection prevention, versioning and change management, A/B testing prompts, and automated evaluation strategies.

### `ai-feature-definition`
Write AI feature specifications that account for probabilistic outputs. Covers desired AI behaviour with input/output examples, acceptable output ranges, confidence thresholds, graceful degradation ladders, human-in-the-loop requirements, explainability, feedback loop design, drift monitoring, and non-functional requirements (latency SLO, accuracy floor, cost ceiling).

### `ai-build-buy-partner`
Evaluate AI capability sourcing options across four archetypes: pure API, fine-tuned base model, hybrid (API + RAG), and fully custom. Includes a weighted decision matrix, cost modelling (API vs. infrastructure break-even), make-or-buy signals, vendor evaluation checklist, and partnership vs. licensing considerations.

### `ai-user-research`
Research user expectations, mental models, trust calibration, and interaction patterns for AI features. Covers mental model elicitation, over-trust and under-trust detection, Wizard of Oz testing, error perception research, measuring satisfaction with AI outputs, feedback collection design, and explainability needs by user segment.

### `ai-data-strategy`
Define a data strategy for AI products covering data inventory and audit, ML data quality dimensions (completeness, accuracy, representativeness), labelling strategy (human, semi-supervised, synthetic), data flywheel design, implicit and explicit feedback loop architecture, data governance (PII, consent, retention), benchmark dataset creation, and continuous retraining strategy.

### `ai-incident-response`
Handle AI model failures, quality regressions, bias incidents, and safety events. Covers AI-specific incident taxonomy (model degradation, hallucination spike, bias detection, safety bypass, prompt injection, data poisoning), severity classification, response runbooks by incident type, model rollback procedures, customer communication templates, and post-incident analysis for probabilistic systems.

---

## Commands

### `/ai-spec` — AI Feature Specification
Create a complete AI feature spec with behaviour requirements, input/output examples, confidence thresholds, fallback design, and non-functional requirements.

```
/ai-spec Smart reply suggestions for customer support agents
/ai-spec Automated invoice data extraction from uploaded PDFs
/ai-spec Personalised content feed ranking for a news app
```

### `/ai-model-eval` — AI Model Evaluation
Evaluate and compare AI models or vendors for a specific use case using a structured scoring matrix.

```
/ai-model-eval Customer support ticket classification
/ai-model-eval Long-document summarisation for legal contracts
/ai-model-eval Real-time code completion in an IDE plugin
```

### `/responsible-ai-review` — Responsible AI Review
Review an AI feature or product for ethical risks, bias, safety issues, and regulatory compliance. Produces a risk-rated findings report with required mitigations.

```
/responsible-ai-review AI hiring screening tool that ranks candidates
/responsible-ai-review LLM-powered customer support chatbot
/responsible-ai-review Medical symptom checker using a fine-tuned LLM
```

### `/ai-metrics` — AI Product Metrics Framework
Define success metrics for an AI feature across model quality, operational, product, and business KPI layers. Produces a metrics document with targets, alert thresholds, and North Star metric. (Uses the `product-metrics` skill in pm-data-analytics with AI mode enabled.)

```
/ai-metrics Smart document summarisation feature
/ai-metrics AI-powered churn prediction model for a SaaS product
/ai-metrics Personalised onboarding assistant for a B2B platform
```

### `/ai-roadmap` — AI Product Roadmap
Create an AI product roadmap that accounts for model uncertainty, data milestones, experiment-driven phases, and iterative improvement cycles.

```
/ai-roadmap AI writing assistant for a B2B SaaS platform
/ai-roadmap Personalised recommendation engine for an e-commerce app
/ai-roadmap Conversational AI agent for internal IT helpdesk
```

---

## Maintainer

**Tarun Narang**

---

## License

MIT

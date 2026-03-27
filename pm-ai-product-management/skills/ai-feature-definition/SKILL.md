---
name: ai-feature-definition
description: "Write a complete AI feature specification that defines desired model behaviour, input/output examples, confidence thresholds, fallback logic, and non-functional requirements. Use when defining requirements for an AI-powered feature, writing an AI PRD, or bridging the gap between PM intent and ML team implementation."
---

## AI Feature Definition

Create a comprehensive AI feature specification that accounts for probabilistic outputs, defines desired behaviour with examples, and establishes evaluation criteria.

### Context

You are writing an AI feature specification for **$ARGUMENTS**.

### Instructions

1. **Understand the feature context**:
   - What user problem does this AI feature solve?
   - What are the inputs? (text, image, structured data, user history, documents)
   - What are the outputs? (generated text, classification label, ranked list, structured data)
   - Who are the users? What is their technical sophistication?
   - What does success look like from the user's perspective?

2. **Key difference from traditional feature specs**:
   - AI outputs are **probabilistic, not deterministic** — the same input may produce different outputs
   - Specify a **range of acceptable outputs**, not a single correct answer
   - Define **quality floors** (minimum acceptable), not just ideal outputs
   - Failure modes are gradual degradation, not binary pass/fail

3. **Desired AI Behaviour — input/output examples**:
   - Provide at least 5 example pairs: `{input} → {ideal output}`
   - Include: happy path (typical), edge cases, difficult inputs, and known failure modes
   - For each example, note: what makes this output good? What would make it unacceptable?
   - Specify what the model should do when it does not know the answer (refuse, hedge, escalate)

4. **Acceptable output range and quality criteria**:
   - Define a rubric: what properties must every output have? (factually accurate, concise, safe, on-topic)
   - Specify hard constraints: never do X, always include Y, maximum Z words
   - Define the quality floor: at or below what quality score is the output considered a failure?
   - Note: document who defines "acceptable" — user research, domain expert, or business stakeholder

5. **Confidence threshold and fallback behaviour**:
   - Define the confidence threshold below which the AI should not act autonomously
   - **Graceful degradation ladder**:
     1. High confidence → show AI output directly
     2. Medium confidence → show output with a caveat or confidence indicator
     3. Low confidence → show fallback (e.g., "I'm not sure — here are some options") or escalate
     4. Failure → deterministic fallback (rule-based, search, human handoff)
   - Never leave the user with a blank screen or raw error message

6. **Human-in-the-loop requirements**:
   - Which decisions require human review before acting? (e.g., financial, medical, legal)
   - How does the user correct or override the AI output?
   - How are corrections fed back to improve the model?
   - Define review queue design if human review is required at scale

7. **Explainability requirements**:
   - Does the user need to understand why the AI produced this output?
   - Legal or regulatory explainability requirements (GDPR, EU AI Act)
   - Define the explanation format: plain language reason, feature importance, source citations
   - Specify for which user segments explanations are required vs. optional

8. **Feedback loop design**:
   - Implicit signals: scroll depth, time-on-page, copy-to-clipboard, follow-up actions
   - Explicit signals: thumbs up/down, star rating, correction/edit, flag as incorrect
   - How is feedback stored, labelled, and used for model retraining?
   - Define feedback freshness requirements (how stale is too stale for training?)

9. **Model drift monitoring requirements**:
   - Which distribution shifts should trigger a quality review? (input distribution, output distribution)
   - Define alert thresholds: hallucination rate > X%, override rate > Y%, latency p95 > Z ms
   - Specify retraining trigger conditions (schedule-based, drift-triggered, or quality-triggered)
   - Document who owns the monitoring dashboard and review cadence

10. **Non-functional requirements**:
    - **Latency SLO**: p50 ≤ ___ ms, p99 ≤ ___ ms (end-to-end including UI render)
    - **Accuracy floor**: minimum acceptable score on offline eval metric (e.g., F1 ≥ 0.85)
    - **Cost ceiling**: maximum $ per 1,000 inferences
    - **Throughput**: minimum requests per second at peak load
    - **Availability**: uptime SLA % and acceptable downtime window

11. **AI Feature Spec document structure**:
    - Overview: problem, users, success criteria
    - Desired AI Behaviour: input/output examples table
    - Acceptable output range and quality rubric
    - Confidence thresholds and fallback ladder
    - Human-in-the-loop design
    - Explainability requirements
    - Feedback loop design
    - Drift monitoring requirements
    - Non-functional requirements (latency, accuracy, cost)
    - Open questions and dependencies

Think step by step. Save as markdown.

---

### Further Reading

- [How to Write an AI Feature Spec](https://www.productcompass.pm/p/how-to-write-an-ai-feature-spec)
- [AI PRD Template for Product Managers](https://www.productcompass.pm/p/ai-prd-template)
- [Probabilistic Thinking for Product Managers](https://www.productcompass.pm/p/probabilistic-thinking-product-managers)

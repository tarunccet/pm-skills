---
description: Create an AI feature specification with behaviour requirements, evaluation criteria, and fallback design
argument-hint: "<AI feature or capability to specify>"
---

# /ai-spec -- AI Feature Specification

Generate a complete AI feature specification that captures desired model behaviour with input/output examples, confidence thresholds, fallback logic, human-in-the-loop requirements, and non-functional requirements. Bridges the gap between PM intent and ML team implementation.

## Invocation

```
/ai-spec Smart reply suggestions for customer support agents
/ai-spec Automated invoice data extraction from uploaded PDFs
/ai-spec Personalised content feed ranking for a news app
/ai-spec Code review assistant that flags security vulnerabilities
/ai-spec                          # interactive mode — asks what you need
```

## Workflow

### Step 1: Gather Context

Ask the user for the following context (accept via pasted text, uploaded docs, or conversation):

- **Feature name and summary**: What does the AI feature do in one sentence?
- **Inputs**: What data does the model receive? (text, images, structured records, documents, user history)
- **Outputs**: What does the model produce? (generated text, classification label, ranked list, extracted fields, structured JSON)
- **Users**: Who uses this feature? What is their domain expertise and tolerance for AI errors?
- **Use context**: When and where is the feature used? What is the decision/action it informs?
- **Constraints**: Any known latency, cost, compliance, or privacy requirements?

If the user provides a PRD or existing spec, read and extract relevant context directly.

### Step 2: Apply `ai-feature-definition` Skill

Activate the `ai-feature-definition` skill to structure the specification.

### Step 3: Elicit Input/Output Examples

Generate or request at least 5 input/output example pairs covering:

- **Happy path**: typical, expected inputs with ideal outputs
- **Edge cases**: unusual but valid inputs and how the AI should handle them
- **Ambiguous inputs**: inputs where the correct output is unclear or contested
- **Known failure modes**: inputs where the model is likely to struggle
- **Safety-sensitive inputs**: inputs that could lead to harmful or policy-violating outputs

For each example, document: what makes this output good? What would make it unacceptable?

### Step 4: Define Edge Cases and Confidence Thresholds

- List the top 5–10 edge cases the model must handle gracefully
- Define the confidence threshold below which the AI should not act autonomously
- Map the **graceful degradation ladder**:
  1. High confidence → show AI output directly
  2. Medium confidence → show output with caveat or confidence indicator
  3. Low confidence → show hedged response or offer alternatives
  4. Failure → deterministic fallback (rule-based, search, human handoff, or graceful error message)

### Step 5: Define Fallback Behaviour

Specify what happens when the AI cannot produce an acceptable output:

- **Fallback content**: what does the user see? (placeholder text, suggested alternatives, human-handoff prompt)
- **Fallback trigger**: what condition activates the fallback? (confidence score, error type, latency timeout)
- **Degraded mode**: can the feature work at reduced capability? (e.g., show cached result, simpler rule-based output)
- **Recovery path**: how does the user get back to the AI path after a fallback?

### Step 6: Set Non-Functional Requirements

Establish measurable targets for:

- **Latency SLO**: p50 ≤ ___ ms, p99 ≤ ___ ms (end-to-end, including UI render time)
- **Accuracy floor**: minimum acceptable score on the primary evaluation metric (e.g., F1 ≥ 0.85, task completion rate ≥ 80%)
- **Cost ceiling**: maximum cost per 1,000 inferences ($)
- **Throughput**: minimum requests per second at peak load
- **Availability**: uptime SLA and acceptable degraded-mode window

### Step 7: Generate AI Feature Spec Document

Produce the full specification with these sections:

1. **Overview**: feature name, one-sentence summary, problem solved, target users, success criteria
2. **Inputs and outputs**: format, type, constraints, examples
3. **Desired AI Behaviour**: input/output examples table (happy path, edge cases, failure modes)
4. **Acceptable output range and quality rubric**: what makes an output acceptable or unacceptable
5. **Confidence thresholds and graceful degradation ladder**
6. **Fallback behaviour design**
7. **Human-in-the-loop requirements**: when human review is required, how users correct the AI
8. **Explainability requirements**: what the product must communicate about how the AI works
9. **Feedback loop design**: how user signals are collected and used for model improvement
10. **Model drift monitoring requirements**: alerts, retraining triggers, review cadence
11. **Non-functional requirements**: latency SLO, accuracy floor, cost ceiling, throughput, availability
12. **Open questions and dependencies**

### Step 8: Offer Next Steps

- "Want me to run a **responsible AI review** on this feature using `/responsible-ai-review`?"
- "Want me to **define success metrics** for this feature using `/ai-metrics`?"
- "Want me to **evaluate model options** for this feature using `/ai-model-eval`?"

## Notes

- AI outputs are probabilistic — the spec must define a **range of acceptable outputs**, not a single correct answer
- The input/output examples table is the most important part of the spec; spend time making it comprehensive
- Non-functional requirements must be measurable and tested before launch, not aspirational
- If the user provides a traditional PRD, this command extends it with AI-specific sections rather than replacing it
- Human-in-the-loop requirements are often underspecified — push for concrete criteria, not "when in doubt, ask a human"

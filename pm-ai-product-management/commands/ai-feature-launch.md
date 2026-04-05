---
description: Run a full AI feature lifecycle — from concept through model evaluation, spec, data strategy, and responsible AI review to launch-ready
argument-hint: "<AI feature idea or use case>"
---

# /ai-feature-launch -- AI Feature Launch Workflow

Take an AI feature from concept to launch-ready in a single structured workflow. This command chains AI product management skills into a logical sequence covering model selection, feature definition, data strategy, sourcing, ethics, and incident planning.

## Invocation

```
/ai-feature-launch AI-powered code review suggestions for pull requests
/ai-feature-launch Conversational onboarding assistant using LLM
/ai-feature-launch                    # asks what AI feature you're building
```

## Workflow

### Step 1: Understand the AI Feature

Gather foundational context:

- What is the AI feature? (capability, user-facing behavior, interaction model)
- Who is the target user? (persona, frequency, accuracy expectations)
- What data is available? (training data, labeled sets, feedback logs)
- What are the constraints? (latency, cost, privacy, compliance)
- Is this LLM-based, classical ML, or hybrid?

Accept context from uploaded docs, links, or conversation.

### Step 2: Evaluate Models

Apply the **ai-model-evaluation** skill to compare candidate LLMs or ML APIs across quality, latency, cost, and privacy. Produce a recommendation matrix with a clear pick and rationale.

**Checkpoint**: "Here's the model comparison. Does the recommendation align with your constraints? Want to adjust criteria before we proceed?"

### Step 3: Define the Feature

Apply the **ai-feature-definition** skill:

- Specify model behavior: expected inputs, outputs, and edge cases
- Set confidence thresholds and fallback logic (e.g., defer to human, show disclaimer)
- Write 5-10 input/output examples covering happy path and failure modes

### Step 4: Assess Data Readiness

Apply the **ai-data-strategy** skill to audit training data (volume, quality, diversity), define labeling requirements, design the human feedback loop, and identify data gaps with a collection plan.

### Step 5: Build vs Buy Decision

Apply the **ai-build-buy-partner** skill to evaluate sourcing: build in-house, buy API, fine-tune, or partner. Score on cost, control, speed, differentiation, and risk.

**Checkpoint**: "Here's the build-vs-buy analysis. Does this work for your team's capabilities and timeline?"

### Step 6: Responsible AI Review

Apply the **responsible-ai** skill to assess bias risk, safety concerns (hallucinations, data leakage), and compliance requirements. Document mitigations and produce a go/no-go scorecard.

### Step 7: Prompt Engineering (if LLM-based)

Apply the **prompt-engineering** skill to craft production system prompts, few-shot examples, chain-of-thought instructions, and guardrails against harmful outputs.

**Checkpoint**: "Here are the production prompts. Want to test variations or adjust constraints before we finalize?"

### Step 8: Incident Response Planning

Apply the **ai-incident-response** skill to define failure modes, create a severity framework (P0-P3), document the response playbook (detection → triage → mitigation → post-mortem), and set monitoring thresholds.

### Step 9: Compile AI Feature Launch Package

```
## AI Feature Launch Package: [Feature Name]

**Date**: [today] | **Owner**: [user] | **Status**: Draft

### 1. Feature Overview
[What the feature does, who it serves, why now]

### 2. Model Selection
| Model | Quality | Latency | Cost | Privacy | Recommendation |
|-------|---------|---------|------|---------|----------------|

### 3. Feature Specification
[Inputs, outputs, confidence threshold, fallback behavior, I/O examples]

### 4. Data Strategy
[Training data sources, labeling plan, feedback loop design]

### 5. Sourcing Decision
[Build / Buy / Fine-tune / Partner — with rationale]

### 6. Responsible AI Review
| Risk Area | Assessment | Mitigation | Status |
|-----------|-----------|------------|--------|

### 7. Production Prompts (if LLM-based)
[System prompt, few-shot examples, guardrails]

### 8. Incident Response Plan
| Failure Mode | Severity | Detection | Response |
|-------------|----------|-----------|----------|

### 9. Open Questions
| Question | Owner | Deadline |
|----------|-------|----------|
```

Save the launch package as a markdown file to the user's workspace.

### Step 10: Offer Next Steps

- "Want me to **write a PRD** for this feature?"
- "Should I **design user research** to validate trust and usability with the **ai-user-research** skill?"
- "Want me to **create a vibe coding spec** to prototype this with an AI coding assistant?"
- "Should I **plan the go-to-market** for this AI capability?"

## Notes

- This is a 30-45 minute structured workflow — let the user know upfront
- At each checkpoint, the user can redirect, skip, or go deeper on any step
- Skip Step 7 (Prompt Engineering) for classical ML features that don't use LLMs
- If the user has existing evaluations or audits, incorporate them rather than starting fresh
- The Responsible AI Review is non-negotiable — always complete it before launch
- For regulated industries (healthcare, finance), expand the compliance section in Step 6

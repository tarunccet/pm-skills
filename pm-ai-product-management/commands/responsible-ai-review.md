---
description: Review an AI feature or product for ethical risks, bias, safety issues, and regulatory compliance
argument-hint: "<AI feature, product description, or PRD to review>"
---

# /responsible-ai-review -- Responsible AI Review

Conduct a structured responsible AI review of an AI feature or product covering bias and fairness, transparency, safety and harm prevention, privacy, environmental impact, and regulatory compliance. Produces a risk-rated findings report with actionable mitigations.

## Invocation

```
/responsible-ai-review AI hiring screening tool that ranks candidates
/responsible-ai-review LLM-powered customer support chatbot
/responsible-ai-review Personalised content recommendation algorithm
/responsible-ai-review Medical symptom checker using a fine-tuned LLM
/responsible-ai-review                          # interactive mode — asks what you need
```

## Workflow

### Step 1: Gather Context

Ask the user to describe or upload:

- **What the AI does**: task, inputs, outputs, decisions or actions it influences
- **Who is affected**: user populations, including potentially vulnerable or marginalised groups
- **How it is deployed**: user-facing feature, internal tool, automated decision system, API
- **Model details**: what model or approach is used? What data was it trained on?
- **Regulatory context**: what industry / geography? Any known compliance requirements?

If the user provides a PRD, feature spec, or system description, read and analyse it directly.

### Step 2: Apply `responsible-ai` Skill

Activate the `responsible-ai` skill to structure the assessment across all review dimensions.

### Step 3: Bias and Fairness Assessment

- Identify all demographic and protected attributes relevant to the use case
- Assess each fairness metric: demographic parity, equal opportunity, disparate impact
- Flag proxy variables that may encode protected attributes
- Recommend disaggregated evaluation and fairness benchmark dataset requirements
- Rate bias risk: Low / Medium / High / Critical

### Step 4: Safety and Harm Assessment

- Enumerate potential harms: physical, psychological, financial, reputational, societal
- Identify content safety risks: harmful content generation, misinformation, privacy leakage
- List red-teaming categories to test: jailbreaks, adversarial inputs, edge cases, targeted attacks
- Rate each harm: severity (1–5) × likelihood (1–5) = risk score
- Specify required guardrails and human-in-the-loop checkpoints

### Step 5: Transparency and Regulatory Compliance Assessment

- Assess explainability requirements (user-facing and regulatory)
- Map the AI system to applicable regulatory frameworks:
  - **EU AI Act**: classify risk tier (Unacceptable / High / Limited / Minimal)
  - **NIST AI RMF**: evaluate Govern, Map, Measure, Manage functions
  - **Sector-specific**: HIPAA (health), FCRA (credit), COPPA (children under 13), GDPR (EU users)
- Flag compliance gaps and required documentation (conformity assessment, impact assessment)

### Step 6: Privacy and Data Governance Assessment

- Identify PII exposure risks: training data memorisation, inference-time data exposure
- Assess consent and purpose limitation for AI training data use
- Review data retention and right-to-erasure compliance
- Recommend differential privacy, federated learning, or data minimisation where appropriate

### Step 7: Produce Responsible AI Review Report

Generate the structured report with:

1. **Executive summary**: overall risk rating (Low / Medium / High / Critical), top 3 findings, launch recommendation
2. **Findings table**:

   | Issue | Category | Severity | Likelihood | Affected Group | Recommendation | Owner | Status |
   |---|---|---|---|---|---|---|---|
   | (example) | Bias | High | Medium | Female applicants | Fairness re-calibration | ML Eng | Pre-launch blocker |

3. **Bias and fairness findings** with specific metrics and recommended mitigations
4. **Safety and harm findings** with risk scores and guardrail requirements
5. **Regulatory compliance status**: pass / gap / blocker per applicable framework
6. **Privacy and data governance findings**
7. **Environmental impact estimate** (training and inference carbon footprint, if quantifiable)
8. **Required mitigations before launch** (pre-launch blockers)
9. **Ongoing monitoring requirements** post-launch
10. **Responsible AI sign-off checklist**

### Step 8: Offer Next Steps

- "Want me to **define monitoring metrics** to track bias and safety in production using `/ai-metrics`?"
- "Want me to create an **AI incident response plan** for safety and bias events?"
- "Want me to **refine the AI feature spec** to incorporate responsible AI requirements using `/ai-spec`?"

## Notes

- The review is most valuable when done early (feature design) rather than late (pre-launch) — responsible AI issues are expensive to fix post-launch
- High-risk EU AI Act categories (employment, credit, education, healthcare) require formal conformity assessments — flag these for Legal review
- Red-teaming should be conducted by a separate team from the one that built the model — adversarial creativity requires fresh eyes
- Environmental impact calculations are estimates — use ML CO2 Impact calculator or equivalent tool for rough figures
- A "pass" on this review does not guarantee the system is free of all harms — document residual risks and owners

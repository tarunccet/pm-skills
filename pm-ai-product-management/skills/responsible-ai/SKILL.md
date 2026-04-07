---
name: responsible-ai
description: "Assess an AI feature or product for ethical risks, bias, safety issues, fairness gaps, and regulatory compliance. Use when reviewing an AI feature before launch, conducting a responsible AI audit, or responding to a bias or safety concern."
---

## Responsible AI Review

Systematically assess AI features and products for ethical risks, bias, safety issues, and regulatory compliance.

### Context

You are conducting a responsible AI review for **$ARGUMENTS**.

### Instructions

### Phase 0: Context Confirmation

Before proceeding, confirm your understanding of the request:

1. **Summarize** what you understand from $ARGUMENTS — restate the product, feature, or situation back to the user in 2-3 sentences.
2. **Identify gaps** — check whether the following are clear (ask if not):
   - What AI feature or system is being assessed?
   - What type of AI capability is it (generative, classification, recommendation, etc.)?
   - Who are the affected user populations?
   - Are there specific regulatory requirements (EU AI Act, NYC Local Law 144, etc.)?
3. **Confirm**: _"Here's my understanding: [summary]. I plan to conduct a responsible AI review covering bias, safety, privacy, regulatory compliance, and stakeholder impact. Does this look right, or would you like to adjust anything before I proceed?"_

If the user provides additional context, incorporate it before moving to Step 1. If the user confirms, proceed.

1. **Gather context**:
   - What does the AI system do? What are its inputs and outputs?
   - Who are the affected user populations (including vulnerable or marginalised groups)?
   - What decisions or actions does the AI influence?
   - What data was the model trained on?

2. **Bias and fairness assessment**:
   - **Demographic parity**: Do outcomes differ significantly across demographic groups (gender, race, age, disability)?
   - **Equal opportunity**: Does the model achieve similar true positive rates across groups?
   - **Disparate impact**: Does a protected group experience a disproportionately negative outcome?
   - Identify proxies for protected attributes in input features
   - Recommend fairness evaluation datasets and disaggregated metric reporting

3. **Transparency and explainability**:
   - Can the system explain its outputs in terms users understand?
   - Are explanations required by law (e.g., EU AI Act, GDPR Article 22, FCRA)?
   - Evaluate: feature importance, counterfactual explanations, confidence scores, natural language rationale
   - Define what the product must communicate to users about AI involvement

4. **Safety and harm prevention**:
   - Identify potential harms: physical, psychological, financial, reputational, societal
   - **Content moderation**: Does the system generate or surface harmful content (hate speech, CSAM, dangerous instructions, misinformation)?
   - **Guardrails**: Input filtering, output filtering, topic restrictions, role restrictions
   - **Red-teaming**: List adversarial prompt categories to test (jailbreaks, prompt injection, persona attacks)
   - Define severity × likelihood risk matrix for each identified harm
   - Specify human-in-the-loop checkpoints for high-risk decisions

5. **Privacy and data governance**:
   - Does the model memorise or reproduce personal data from training?
   - Are user inputs used for model training? Is consent obtained?
   - Define data minimisation and purpose limitation requirements
   - Assess differential privacy or federated learning applicability

6. **Environmental impact**:
   - Estimate training and inference carbon footprint (use tools like ML CO2 Impact)
   - Compare against baseline (fine-tune vs. full train vs. API call)
   - Report sustainability metrics in AI product documentation

7. **Regulatory compliance**:
   - **EU AI Act risk tiers**: Unacceptable (banned) → High-risk → Limited-risk → Minimal-risk
     - High-risk categories: employment, credit, education, law enforcement, critical infrastructure
   - **NIST AI RMF**: Map to Govern, Map, Measure, Manage functions
   - **Sector-specific**: HIPAA (health), FCRA (credit), COPPA (children), FINRA (financial)
   - Document compliance status and gaps

8. **Stakeholder impact analysis**:
   - Identify all stakeholders: users, operators, third parties, society
   - Map positive and negative impacts for each group
   - Identify power imbalances (e.g., AI used by employer on employee)
   - Define accountability chain: who is responsible for model decisions?

9. **Incident response planning**:
   - Define AI-specific incident types: bias detection, safety bypass, harmful output, data breach
   - Establish escalation path and responsible team members
   - Define rollback and mitigation procedures
   - Plan post-incident review process (see `ai-incident-response` skill)

10. **Produce Responsible AI Review document**:
    - Executive summary: overall risk rating (Low / Medium / High / Critical)
    - Findings table: issue, severity, affected group, recommendation, owner
    - Required mitigations before launch
    - Ongoing monitoring requirements
    - Sign-off checklist

### Risk Rating Table Template

| Issue | Severity | Likelihood | Affected Group | Mitigation | Owner | Status |
|---|---|---|---|---|---|---|
| (e.g., Gender bias in hiring score) | High | Medium | Female applicants | Fairness re-calibration | ML Eng | Open |

Think step by step. Save as markdown.

---

---
name: ai-incident-response
description: "Handle AI model failures, quality regressions, bias incidents, and safety issues with a structured response runbook. Use when an AI feature produces harmful outputs, when model quality degrades in production, or when preparing an incident response plan for an AI system."
---

## AI Incident Response

Classify, respond to, and learn from AI-specific incidents including model degradation, hallucinations, bias events, safety bypasses, and data attacks.

### Context

You are creating or executing an AI incident response plan for **$ARGUMENTS**.

### Instructions

1. **Clarify context**:
   - Is this an active incident (respond now) or a preparatory runbook (plan ahead)?
   - What AI system is involved? What does it do?
   - Who are the affected users and what is the blast radius?

2. **AI-specific incident taxonomy**:
   - **Model degradation**: output quality drops measurably — higher error rate, lower quality scores, increased override rate
   - **Hallucination spike**: LLM generates confidently incorrect or fabricated information at elevated rate
   - **Bias detection**: model outputs show discriminatory patterns against a demographic group
   - **Safety bypass**: model produces harmful, unsafe, or policy-violating outputs after a jailbreak or adversarial input
   - **Prompt injection attack**: malicious user input overrides system prompt or causes unintended model behaviour
   - **Data poisoning**: adversarial training data corrupts model behaviour in targeted ways
   - **Model inversion / extraction**: attacker recovers training data or model weights from API responses
   - **Distribution shift**: production inputs diverge from training distribution, causing silent quality degradation

3. **Severity classification**:

   | Severity | Definition | Response SLA | Examples |
   |---|---|---|---|
   | P0 — Critical | Safety violation, legal exposure, or complete service failure | 15 min | CSAM/hate speech output, PII leak, model used in fraud |
   | P1 — High | Material harm to users or significant accuracy regression | 1 hour | Biased hiring output, hallucination in medical context, 30%+ error rate spike |
   | P2 — Medium | Degraded quality affecting subset of users | 4 hours | 10%+ quality drop, bias in low-stakes context, unusual latency spike |
   | P3 — Low | Minor quality regression or isolated anomaly | 24 hours | Edge-case failure, single user complaint, minor format regression |

4. **Response runbook by incident type**:

   **Model degradation**:
   1. Confirm via monitoring dashboards (quality metrics, error rate, user feedback trend)
   2. Identify scope: which model version, which traffic segment, since when?
   3. Immediate mitigation: route traffic to previous model version (rollback) or enable rule-based fallback
   4. Root cause analysis: data distribution shift? Model update? Infrastructure change? Dependency change?
   5. Fix and re-evaluate: patch or retrain → offline eval → staged rollout → monitor

   **Hallucination spike**:
   1. Confirm via hallucination rate metric or user complaint clustering
   2. Sample 50 affected outputs; categorise hallucination type (factual error, invented citation, confabulation)
   3. Immediate mitigation: add retrieval grounding, reduce temperature, add hedging instructions in system prompt
   4. Add hedging copy in UI: "AI can make mistakes — please verify important information"
   5. Root cause: prompt change? Context window overflow? Model update? New input distribution?

   **Bias detection**:
   1. Confirm with disaggregated metrics (performance by demographic group)
   2. Quantify: which groups are affected? What is the disparity magnitude?
   3. Legal assessment: does this constitute unlawful discrimination? Escalate to Legal immediately for P0/P1
   4. Immediate mitigation: disable feature for affected use case, or add human review layer
   5. Fix: re-label training data, apply fairness constraints, re-evaluate with fairness metrics

   **Safety bypass / jailbreak**:
   1. Collect and quarantine the adversarial prompt(s)
   2. Assess if harmful outputs were seen by real users; notify Trust & Safety and Legal
   3. Immediate mitigation: add input filter for the attack pattern; increase output moderation threshold
   4. Red-team expansion: test 50+ variations of the attack pattern
   5. Patch: update system prompt guardrails, add classifier, or restrict model capabilities

5. **Model rollback procedures**:
   - Maintain at least two prior model versions deployable within 15 minutes
   - Define rollback trigger: quality score drops below floor, error rate exceeds threshold, or P0/P1 safety event
   - Rollback steps: update model registry pointer → redeploy serving endpoint → verify traffic routing → confirm metrics recovering
   - Communicate rollback to affected users if output quality changed noticeably

6. **Customer communication templates**:
   - **In-product notice** (quality degradation): "We're experiencing an issue affecting [feature]. Our team is working on a fix. In the meantime, please verify important outputs."
   - **Status page update** (P1+): "[Feature] Quality Issue — We have identified a quality regression affecting [feature]. We have rolled back to a previous version while we investigate. Updates every 30 minutes."
   - **Post-incident user email** (P0 bias/safety): "We discovered and fixed a bias issue in [feature] affecting [affected group]. Here's what happened, what we did, and how we're preventing recurrence. [Link to full post-mortem]."

7. **Post-incident analysis for AI**:
   - Root cause in probabilistic systems is harder than deterministic systems — focus on contributing factors
   - Questions to answer: what changed? (data, model, prompt, infra, traffic pattern) When did quality begin degrading?
   - 5-why analysis adapted for AI: trace back through data → training → serving → prompt → user population
   - Deliverable: incident report with timeline, root cause(s), impact, mitigation steps, and prevention actions
   - Blameless post-mortem culture: focus on system improvements, not individual fault

8. **Proactive monitoring and early warning indicators**:
   - Real-time: latency p99, error rate, model API availability
   - Near real-time (5-min): explicit feedback rate (thumbs down spike), override/correction rate
   - Hourly: output quality score sample, hallucination rate, confidence score distribution
   - Daily: disaggregated fairness metrics, input distribution drift (KL divergence), offline eval refresh

9. **Responsible disclosure for AI safety issues**:
   - For internally discovered safety issues: fix before disclosure; coordinate timing with Legal and Comms
   - For externally reported issues: acknowledge within 24 hours, provide status update within 72 hours
   - For systemic harms: proactive disclosure to affected users and regulatory bodies as required by law
   - Consider publishing AI safety research findings to benefit the broader community

Think step by step. Save as markdown.

---

### Further Reading

- [AI Incident Response Planning for Product Managers](https://www.productcompass.pm/p/ai-incident-response-planning)
- [Model Rollback and Deployment Safety](https://www.productcompass.pm/p/model-rollback-deployment-safety)
- [Responsible Disclosure for AI Safety Issues](https://www.productcompass.pm/p/responsible-disclosure-ai-safety)

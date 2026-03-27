---
name: ai-data-strategy
description: "Define a data strategy for AI products covering training data requirements, data quality, labeling strategy, feedback loops, and continuous retraining. Use when assessing data readiness for an AI feature, designing a data flywheel, or planning an ML data pipeline."
---

## AI Data Strategy

Design a comprehensive data strategy for AI products including data inventory, quality standards, labelling, flywheel design, governance, and retraining pipelines.

### Context

You are defining an AI data strategy for **$ARGUMENTS**.

### Instructions

1. **Clarify the AI use case and data needs**:
   - What task will the ML model perform?
   - What does a training example look like? (input features + label/output)
   - What volume of training data is typically required for this model type?
   - What data does the team currently possess?

2. **Data inventory and audit**:
   - List all available internal data sources: product logs, user events, content, transaction records, support tickets
   - Assess each source: volume (rows/records), date range, update frequency, access mechanism
   - Identify data gaps: what data is needed but not yet collected?
   - Document data owners, access controls, and data sharing agreements
   - Flag PII and sensitive attributes in each dataset

3. **Data quality dimensions for ML**:
   - **Completeness**: % of required fields populated; acceptable missing-value rate per feature
   - **Accuracy**: does the data reflect ground truth? Measure label noise rate
   - **Consistency**: are the same entities represented consistently across sources? (deduplication)
   - **Timeliness**: is the data fresh enough for the use case? Define maximum acceptable data staleness
   - **Representativeness**: does the data distribution reflect the production population? Check for under-represented demographic groups, rare events, and edge cases
   - **Volume**: is there enough data for the target model complexity? Rule of thumb: 10× more examples than model parameters for fine-tuning

4. **Labelling strategy**:
   - **Human labelling**: best quality, slowest and most expensive; use for ground truth and evaluation sets
     - Define labelling guidelines with examples of each label class
     - Calculate inter-annotator agreement (Cohen's Kappa ≥ 0.8 target)
     - Use annotation platforms: Scale AI, Labelbox, Prodigy, or in-house tool
   - **Semi-supervised labelling**: train on small labelled set, propagate labels to unlabelled data; validate sample
   - **Weak supervision**: programmatic labelling with heuristic rules (Snorkel, label functions); faster but noisier
   - **Synthetic data generation**: use LLMs to generate labelled examples; validate distribution and quality
   - **LLM-as-labeller**: use a capable LLM to label examples at scale; validate against human labels

5. **Data flywheel design**:
   - Define the virtuous cycle: more users → more data → better model → more users
   - Identify the flywheel trigger: what user action generates a training signal?
   - Map the data collection pipeline: user action → event log → feature extraction → label derivation → training queue
   - Estimate flywheel velocity: how many new training examples per day at current scale?
   - Identify flywheel acceleration levers: prompt for feedback, increase engagement, expand use cases

6. **Feedback loop architecture**:
   - **Implicit signals**: clicks, dwell time, copy-to-clipboard, downstream action completion, scroll depth
   - **Explicit signals**: thumbs up/down, star rating, text correction, flag as incorrect
   - **Reward signal design** (for RLHF or online learning): define what constitutes a positive outcome
   - Feedback freshness: define the maximum lag from user action to training incorporation
   - Close the loop: show users that their feedback has improved the product (builds motivation)

7. **Data governance**:
   - **PII handling**: identify PII fields; apply pseudonymisation or anonymisation before training
   - **Consent**: is user data collected with consent for AI training? Review ToS and privacy policy
   - **Purpose limitation**: data collected for one purpose must not be used for a materially different ML task without re-consent
   - **Retention policy**: define training data retention window; implement automated deletion after expiry
   - **Data lineage**: track which training examples contributed to each model version
   - **Right to erasure (GDPR Article 17)**: plan for removing a user's data from training sets on request (machine unlearning or retraining)

8. **Benchmark dataset creation**:
   - Create a held-out evaluation set of ≥ 500 examples representative of production distribution
   - Include: typical cases, edge cases, adversarial cases, demographic sub-groups
   - Freeze the benchmark — never train on it; version-control it
   - Refresh the benchmark annually or when production distribution shifts significantly

9. **Continuous retraining strategy**:
   - **Schedule-based**: retrain on a fixed cadence (weekly, monthly) — simple but may lag distribution shifts
   - **Drift-triggered**: retrain when model quality drops below threshold — more responsive, requires monitoring
   - **Champion/challenger**: keep production model (champion) running while evaluating new model (challenger) on live traffic sample
   - Define: retraining data window (last N days vs. all data with time-decay weights)
   - Automate: data validation → training → offline eval → A/B test → gradual rollout

10. **Data versioning and lineage**:
    - Version training datasets alongside model versions (DVC, MLflow, or similar)
    - Record for each model version: training data snapshot hash, labelling guidelines version, preprocessing code version
    - Reproduce any past model from its versioned inputs
    - Audit trail: who labelled what data, when, with which guidelines

Think step by step. Save as markdown.

---

### Further Reading

- [Data Flywheel Design for AI Products](https://www.productcompass.pm/p/data-flywheel-design-ai-products)
- [Training Data Strategy: A PM's Guide](https://www.productcompass.pm/p/training-data-strategy-pm-guide)
- [Feedback Loops for Machine Learning Products](https://www.productcompass.pm/p/feedback-loops-ml-products)

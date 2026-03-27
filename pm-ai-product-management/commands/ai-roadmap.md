---
description: Create an AI product roadmap that accounts for model uncertainty, data requirements, and iterative improvement cycles
argument-hint: "<AI product or feature area to roadmap>"
---

# /ai-roadmap -- AI Product Roadmap

Create a structured AI product roadmap that accounts for model uncertainty, data milestones, experiment-driven phases, and iterative model improvement cycles. Addresses the unique planning challenges of probabilistic systems where capability improvements are non-linear and data availability is often the critical constraint.

## Invocation

```
/ai-roadmap AI writing assistant for a B2B SaaS platform
/ai-roadmap Personalised recommendation engine for an e-commerce app
/ai-roadmap Conversational AI agent for internal IT helpdesk
/ai-roadmap Predictive lead scoring model for a sales platform
/ai-roadmap                          # interactive mode — asks what you need
```

## Workflow

### Step 1: Collect Current State

Gather context on where things stand today:

- **Current AI capabilities**: what AI features exist today? What are their quality levels?
- **Baseline metrics**: current model quality scores, user adoption, task completion rate, cost per inference
- **Data availability**: what training data exists? What is its volume, quality, and coverage?
- **Team maturity**: what ML/AI engineering capability exists in-house? What is deployed in production vs. experimented with?
- **Known limitations**: what are the biggest quality gaps, failure modes, or user complaints today?
- **Infrastructure**: what MLOps tooling, model serving, and monitoring infrastructure is in place?

If the user provides existing roadmaps, PRDs, or strategy documents, read them directly.

### Step 2: Define Desired Future State

Establish the vision for AI capabilities:

- **12-month vision**: what AI capabilities should the product have in 12 months?
- **3-year moonshot**: what would the product look like if the AI worked perfectly?
- **User outcomes**: what can users accomplish with the AI that they cannot do today?
- **Business outcomes**: what business metrics will this AI capability drive?
- **Success criteria**: how will you know when the vision is achieved? What are the measurable targets?

### Step 3: Assess Data Requirements and Milestones

Data is often the critical constraint in AI roadmaps — map it explicitly:

- **Training data gaps**: what data is needed that does not currently exist?
- **Data collection milestones**: when will sufficient data be available to train or fine-tune each capability?
- **Labelling requirements**: how many labelled examples are needed per capability? What is the labelling timeline?
- **Feedback loop design**: when will the product begin generating training signal from user behaviour?
- **Data flywheel velocity**: at what user scale does the feedback loop become self-sustaining?

### Step 4: Structure the Roadmap with AI-Specific Phases

Organise the roadmap into phases that reflect AI development reality:

**Phase 1 — Foundation (typically 0–3 months)**:
- Establish baseline: integrate first model (API or pre-trained), ship MVP, begin collecting user feedback
- Deliverables: working feature in production, metrics instrumentation, feedback collection, benchmark dataset
- Uncertainty level: LOW — using existing models; no training required

**Phase 2 — Optimisation (typically 3–9 months)**:
- Improve quality through: prompt engineering, RAG, fine-tuning, data quality improvements
- Run structured experiments (A/B tests) on model versions, prompts, and retrieval strategies
- Deliverables: quality improvement vs. baseline, expanded use case coverage, reduced cost-per-inference
- Uncertainty level: MEDIUM — improvements are iterative; timelines depend on data quality and eval results

**Phase 3 — Differentiation (typically 9–18 months)**:
- Invest in proprietary capabilities: custom fine-tuning, proprietary data advantage, novel AI features
- Build feedback flywheel: enough user signal to drive continuous model improvement
- Deliverables: capabilities not replicable by competitors using off-the-shelf models, measurable moat
- Uncertainty level: HIGH — depends on data accumulation, model research, and team capability growth

**Phase 4 — Scale and Compound (18+ months)**:
- Compound AI advantage through data flywheel, ecosystem integrations, and platform effects
- Expand AI capabilities to adjacent use cases
- Deliverables: cross-product AI platform, AI as a core competitive moat

### Step 5: Handle Uncertainty with Probabilistic Planning

AI roadmaps require different planning patterns than traditional software:

- **Experiment-driven phases**: replace "ship feature X by date Y" with "run experiment to achieve quality target Z by date Y"
- **Probabilistic milestones**: express model quality targets as ranges rather than point estimates (e.g., "F1 between 0.82–0.88 by Q3")
- **Trigger-based decisions**: define decision points where the team evaluates results and pivots the approach if needed
- **Model update cycles**: schedule quarterly model re-evaluation regardless of quality — AI capabilities improve rapidly
- **Moonshot bets**: include one speculative capability per roadmap cycle with explicit "stop/continue" evaluation criteria

### Step 6: Map Data and Model Milestones

Create a joint timeline of data milestones and model improvement milestones:

| Milestone | Type | Target Date | Dependencies | Success Criteria |
|---|---|---|---|---|
| Benchmark dataset created | Data | Month 1 | Domain expert input | 500 labelled examples, kappa ≥ 0.8 |
| Baseline model shipped | Model | Month 2 | Infra setup | Feature live, metrics instrumented |
| Fine-tuning data collection | Data | Month 4 | User feedback loop | 2,000 labelled corrections |
| Fine-tuned model v1 | Model | Month 6 | Fine-tuning data | 15% quality improvement vs. baseline |
| Feedback flywheel active | Data | Month 8 | 10K MAU on feature | 500+ new training examples/week |
| Model v2 with flywheel data | Model | Month 10 | Flywheel milestone | 25% quality improvement vs. baseline |

### Step 7: Produce AI Roadmap Document

Generate the deliverable with:

1. **Vision and success criteria** (12-month and 3-year)
2. **Current state assessment**: capabilities, metrics, gaps
3. **Data roadmap**: data availability, collection strategy, labelling milestones, flywheel design
4. **Model roadmap**: improvement phases, experiment plans, quality targets, decision triggers
5. **Feature roadmap by phase**: what users can do at each phase (outcome-oriented, not output-oriented)
6. **Uncertainty and risk register**: what could delay each phase? What are the mitigations?
7. **Team and infrastructure requirements**: ML engineering, data infrastructure, monitoring tooling

### Step 8: Offer Next Steps

- "Want me to **define metrics** to track progress against each roadmap milestone using `/ai-metrics`?"
- "Want me to **evaluate model options** for Phase 1 using `/ai-model-eval`?"
- "Want me to **write AI feature specs** for the Phase 1 capabilities using `/ai-spec`?"

## Notes

- The biggest risk in AI roadmaps is over-promising — AI capability improvements are non-linear and hard to predict
- Data milestones are often more important than model milestones — if data is the constraint, sequence data collection first
- Include explicit "stop/continue" decision points at the end of each experiment phase — not every AI bet will pay off
- Model improvement cycles must be built into the calendar — without scheduled re-evaluation, models grow stale
- Avoid committing to exact quality targets on a fixed date; commit to running the experiment by the date and evaluating results

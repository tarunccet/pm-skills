# Proof and Mini Case Studies

This page helps evaluators see what the repo is good at.

It focuses on **evidence-style examples**, not invented customer testimonials.

---

## Generic AI vs. PM Skills

| Task | Generic AI often does | PM Skills adds |
|---|---|---|
| Discovery | brainstorms feature ideas | frames the problem, maps assumptions, picks experiments |
| PRD writing | writes a polished document quickly | adds structure, objectives, users, constraints, release plan |
| AI feature planning | lists models and risks | adds model evaluation, fallback logic, responsible AI, metrics, incident response |
| Prototyping | jumps into solutioning | clarifies MVP scope, tool choice, architecture questions, deployment checks |

---

## 1. Discovery example: onboarding drop-off

**Input**
> Users abandon onboarding after they connect their first data source.

### Generic AI output pattern
- suggests a few ideas like tooltips, email reminders, and UI cleanup
- may skip root-cause framing
- may not separate assumptions from solutions

### PM Skills workflow
Recommended path:
```text
/lean-validation → /setup-metrics → /write-prd
```

### What improves
- the problem gets reframed as a measurable activation drop-off
- assumptions become explicit and testable
- experiments become cheaper and clearer
- next steps connect to delivery work instead of ending at ideation

### Why it is better
The team leaves with a decision-ready workflow instead of a brainstorm list.

---

## 2. Execution example: vague feature request to PRD

**Input**
> We need smarter notifications for enterprise teams.

### Generic AI output pattern
- produces a polished feature summary
- often lacks target users, constraints, release sequencing, and success metrics

### PM Skills workflow
Recommended path:
```text
/write-prd → /write-stories → /test-scenarios
```

### What improves
- clear problem statement and objective
- scoped user segments and constraints
- explicit solution assumptions
- phased release plan
- downstream backlog and QA artifacts

### Evidence in repo
See the sample output:
- [create-prd sample](./skill-output-samples/create-prd.md)

---

## 3. AI PM example: AI ticket triage

**Input**
> We want AI to route and summarize support tickets.

### Generic AI output pattern
- compares a few models
- suggests prompt ideas
- may miss fallback behavior, evaluation criteria, safety review, and post-launch monitoring

### PM Skills workflow
Recommended path:
```text
/ai-feature-launch → /responsible-ai-review → /ai-metrics
```

### What improves
- clearer model/vendor selection criteria
- explicit confidence thresholds and fallback logic
- responsible AI review before launch
- metrics for quality, operations, and business outcomes
- incident-ready thinking if performance regresses

### Why it is better
You get a launch plan that is safer and easier to defend cross-functionally.

---

## Recommended evaluator path

If you are assessing the repo for yourself or a team, do this in order:

1. read the [Getting Started guide](./getting-started.md)
2. browse the [starter packs](./starter-packs.md)
3. scan the [sample outputs](./skill-output-samples)
4. review the [compatibility matrix](./compatibility-matrix.md)
5. use the [demo walkthrough](./demo-walkthrough.md) to record or present a live demo

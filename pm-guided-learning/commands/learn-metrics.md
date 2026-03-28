---
description: Start the product metrics workshop — scored interactive exercise on North Star metrics, input metrics, and counter-metrics for a fictional B2C social app.
argument-hint: "[optional: your experience level — beginner|intermediate|advanced]"
---

# /learn-metrics — Product Metrics Workshop

Launches the interactive, scored metrics design workshop for the Connectly social networking scenario.

## Invocation

```
/learn-metrics                    # start the module
/learn-metrics beginner           # start with framework overview before scoring
/learn-metrics advanced           # start with scoring immediately, no scaffolding
```

## Workflow

Load and execute the `learn-metrics` skill. The module will:
1. Brief you on Connectly (B2C professional social app)
2. Ask you to identify the Business Game and propose a North Star Metric
3. Score your NSM choice (0–10) with detailed feedback
4. Ask for 3–5 input metrics (scored 0–8 each)
5. Ask for 2–3 counter-metrics (scored 0–8 each)
6. Provide a final scorecard and grade

## Edge Cases

- If the learner proposes revenue as the NSM: score it low (1–2) and explain Goodhart's Law before proceeding.
- If the learner asks what a North Star Metric is before starting: give the 7-criteria definition, then start the exercise.
- If the learner has a defensible but unconventional NSM: score it fairly based on the 7 criteria rather than penalizing for not matching the reference answer.

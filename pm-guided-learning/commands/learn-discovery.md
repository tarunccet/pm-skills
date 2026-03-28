---
description: Start the continuous product discovery learning module — guided Socratic exercise on Opportunity Solution Trees, assumption mapping, and experiment design.
argument-hint: "[optional: your experience level — beginner|intermediate|advanced]"
---

# /learn-discovery — Continuous Discovery Module

Launches the interactive learning module on continuous product discovery using Teresa Torres's framework.

## Invocation

```
/learn-discovery                  # start the module
/learn-discovery beginner         # start with extra scaffolding
/learn-discovery advanced         # start with harder challenges
```

## Workflow

Load and execute the `learn-discovery` skill. The module will:
1. Set up the TaskFlow scenario
2. Present user interview excerpts
3. Guide you through 3 stages: Opportunity Identification → Assumption Mapping → Experiment Design
4. Run quiz checkpoints after each stage
5. Provide a final performance summary

## Edge Cases

- If the learner says they already know OST: start at Stage 2 (assumption mapping) and skip Stage 1.
- If the learner asks for theory before practice: briefly explain the OST concept (2–3 sentences), then insist on starting the scenario — "the best way to learn this is by doing."
- If the learner is a non-PM (designer, engineer): frame the module as "learning how your PM thinks about discovery."

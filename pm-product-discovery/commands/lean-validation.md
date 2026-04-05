---
description: Run a lean validation cycle — frame the problem, write hypotheses, identify assumptions, design experiments, and build an opportunity tree
argument-hint: "<product idea or problem space>"
---

# /lean-validation -- Lean Validation Workflow

Run a structured Lean Startup validation cycle that moves from problem framing through testable hypotheses to experiment design. This command chains discovery skills into a single workflow for validating ideas quickly and cheaply before committing to a build.

## Invocation

```
/lean-validation AI-powered meeting summarizer for remote teams
/lean-validation We think users churn because onboarding is too long
/lean-validation                    # asks what you're validating
```

## Workflow

### Step 1: Frame the Problem

Apply the **problem-statement** skill:

- Define the problem: who has it, how painful it is, what the current workaround is
- Distinguish the problem from the solution — ensure we're not assuming the answer
- Produce a structured statement: "[User segment] struggles with [problem] when [context], which causes [impact]"

Ask the user:
- What problem are you solving? (user pain, market gap, opportunity)
- Who experiences it? (persona, segment, frequency)
- What evidence do you have? (research, data, anecdotes, complaints)

### Step 2: Write Testable Hypotheses

Apply the **hypothesis** skill:

- Convert the problem statement into 3-5 testable hypotheses
- Use the XYZ format: "We believe [X] will [Y], as measured by [Z]"
- Cover desirability, usability, feasibility, and viability
- Set clear pass/fail criteria and rank by risk and learning value

**Checkpoint**: "Here are 3-5 testable hypotheses. Which feel riskiest? Want to adjust criteria before we identify assumptions?"

### Step 3: Identify Riskiest Assumptions

Determine whether this is an existing or new product, then apply the appropriate skill:

- **Existing product**: Apply **identify-assumptions-existing** — surface assumptions across Value, Usability, Feasibility, Viability
- **New product**: Apply **identify-assumptions-new** — surface assumptions across 8 risk categories including Go-to-Market and Regulatory

For each hypothesis, list underlying assumptions, rate on impact × uncertainty, and rank by test priority (high impact × high uncertainty first).

### Step 4: Design Experiments

For top-priority assumptions, apply the appropriate skill:

- **Existing product**: Apply **brainstorm-experiments-existing** — A/B tests, fake doors, prototype tests, data analysis
- **New product**: Apply **brainstorm-experiments-new** — pretotypes, landing pages, concierge MVPs, smoke tests

For each experiment: describe setup, define success metric and threshold, estimate effort and timeline, and specify the decision (if pass → [action], if fail → [action]). Sequence by dependency and cost.

**Checkpoint**: "Here are experiments ranked by learning-per-dollar. Ready to plan execution, or want to adjust test designs?"

### Step 5: Plan the Interview (Optional)

If qualitative validation is needed, apply the **interview-script** skill to create a structured script following The Mom Test principles. Include probes for each critical assumption from Step 3. Target 5-8 interviews for initial signal. Skip if the user prefers purely quantitative validation.

### Step 6: Build the Opportunity Tree

Apply the **opportunity-solution-tree** skill to map the desired outcome at the top, branch into opportunities from Steps 1-3, map solution ideas to each opportunity, connect experiments from Step 4, and identify which branch has the strongest validation signal.

### Step 7: Compile Lean Validation Plan

```
## Lean Validation Plan: [Idea / Problem]

**Date**: [today] | **Author**: [user] | **Status**: Pre-Validation

### 1. Problem Statement
[Structured problem statement from Step 1]

### 2. Hypotheses
| # | Hypothesis (XYZ format) | Risk Area | Pass Criteria | Fail Criteria |
|---|------------------------|-----------|---------------|---------------|

### 3. Critical Assumptions
| # | Assumption | Impact | Uncertainty | Priority | Tests |
|---|-----------|--------|-------------|----------|-------|

### 4. Experiment Plan
| # | Tests Assumption | Method | Success Metric | Effort | Timeline |
|---|-----------------|--------|----------------|--------|----------|

### 5. Interview Plan (if applicable)
- **Target**: [persona, segment] | **Sample**: 5-8 interviews
- **Key Questions**: [top 5 questions mapped to assumptions]

### 6. Opportunity Solution Tree
[Outcome → opportunities → solutions → experiments]

### 7. Validation Timeline
Week 1: [experiments + interviews] → Week 2: [data collection] → Week 3: [analysis + decision]

### 8. Decision Framework
- If validated → proceed to [build / PRD / prototype]
- If invalidated → [pivot / kill / investigate further]
- If inconclusive → [extend experiment / try different method]
```

Save the validation plan as a markdown file to the user's workspace.

### Step 8: Offer Next Steps

- "Want me to **write a PRD** for the validated idea?"
- "Should I **run a full discovery cycle** with /discover to expand the solution space?"
- "Want me to **create a vibe coding spec** to prototype the top solution?"
- "Should I **design a solution brief** with prioritized user stories?"
- "Need to **pivot**? I can re-run this workflow with a new hypothesis."

## Notes

- This is a 15-30 minute structured workflow — let the user know upfront
- At each checkpoint, the user can redirect, skip, or go deeper on any step
- Bias toward the smallest experiment that gives signal — learn fast and cheap
- For new products, emphasize desirability validation before feasibility
- For existing products, check if usage data can replace or supplement experiments
- Step 5 (Interview) is optional but recommended when assumptions are about user motivations
- The Opportunity Solution Tree in Step 6 is a living map — offer to update as experiments run

---
name: hypothesis
description: "Write testable product hypotheses with clear success metrics, baselines, targets, and timeframes. Produces a structured hypothesis statement, supporting evidence, a validation plan with method and sample size, and a decision framework for what to do if validated or invalidated. Use when validating product assumptions, before running experiments, when proposing new features, or when shifting from opinion-based to evidence-based decision making."
---

# Hypothesis: Testable Beliefs with Success Metrics

## Purpose

You are an experienced product manager helping a team write a testable hypothesis for **$ARGUMENTS**. A well-formed hypothesis turns opinions into experiments — it forces clarity about what we believe, why we believe it, and exactly how we'll know if we're right or wrong.

## Domain Context

Hypotheses sit between problem definition and experimentation in the discovery workflow. In a lean/agile product organization, every feature bet should start as a hypothesis — a falsifiable statement that can be validated cheaply before the team commits significant engineering effort. Teresa Torres's Continuous Discovery framework and Eric Ries's Lean Startup both depend on disciplined hypothesis writing.

A strong hypothesis follows this structure:

> "We believe that **[action/change]** for **[user segment]** will result in **[expected outcome]**, as measured by **[metric]** changing from **[baseline]** to **[target]** within **[timeframe]**."

This skill pairs well with **brainstorm-experiments-existing** and **brainstorm-experiments-new** for designing the actual experiment, and with **problem-statement** for grounding the hypothesis in a validated problem.

### What You'll Need

| Input | Required? | Example |
|-------|-----------|---------|
| Feature idea, assumption, or belief to test | ✅ Required | "Adding onboarding tooltips will improve activation" |
| Target user segment | ✅ Required | Free-tier users in their first 7 days |
| Current baseline metric (if known) | 🟡 Recommended | "Current activation rate is 34%" |
| Problem statement or context | 🟡 Recommended | Link to problem statement, PRD, or research |
| Constraints (time, budget, resources) | ⚪ Optional | "Must validate within 2 sprints" |

> **Don't have everything?** Start anyway — the skill will help you identify what baseline data you need and where to find it.

## Context

You are writing a testable hypothesis for **$ARGUMENTS**.

If the user provides files (problem statements, experiment results, analytics data, or product briefs), read them first to ground the hypothesis in existing evidence.

## Instructions

### Phase 0: Context Confirmation

Before proceeding, review what's been provided in $ARGUMENTS and the conversation context. **Only ask about what's missing — don't re-ask what's already clear.**

1. **Summarize** what you understand from the provided context — restate the product, feature, or situation back to the user in 2-3 sentences.
2. **Identify gaps** — if any of the following are unclear, ask:
   - What belief or assumption are we formalizing into a hypothesis?
   - What evidence or observation prompted this hypothesis?
   - What metric or outcome would validate or invalidate it?
3. **Confirm**: _"Here's my understanding: [summary]. I plan to [brief description of what the skill will produce]. Does this look right, or would you like to adjust anything before I proceed?"_

If the user provides additional context, incorporate it. If the user confirms, proceed.

1. **Define the belief clearly**:
   - What specific action or change do we believe will create an outcome?
   - Separate the **intervention** (what we'll do) from the **mechanism** (why we think it works) from the **outcome** (what we expect to happen).
   - A hypothesis must be falsifiable — if there's no way to prove it wrong, it's not a hypothesis.

2. **Identify the user segment**:
   - Who specifically will be affected by this change?
   - Be precise enough to target an experiment: not "users" but "free-tier users who signed up in the last 7 days and have not completed onboarding."
   - If the segment is too broad, suggest how to narrow it.

3. **Specify the measurable outcome**:
   - What metric will change if the hypothesis is true?
   - Choose a **leading indicator** that moves quickly, not a lagging metric that takes months.
   - The metric should be directly influenced by the intervention — avoid metrics with too many confounding variables.

4. **Set baseline and target**:
   - **Baseline**: What is the current value of the metric? If unknown, describe how to measure it before the experiment starts.
   - **Target**: What value would confirm the hypothesis? Be specific — "improve" is not a target; "increase from 34% to 42%" is.
   - Ensure the target is meaningful — a statistically significant but business-irrelevant change isn't worth celebrating.

5. **Define the timeframe**:
   - How long will the experiment run?
   - Consider: time to reach statistical significance, business cycles, and competing initiatives.
   - Set a hard end date — experiments that run forever generate no decisions.

6. **Identify risks and assumptions**:
   - What assumptions underlie this hypothesis? (e.g., "Users notice the tooltip," "The metric is correctly instrumented")
   - Which of these are the riskiest — most uncertain and most consequential?
   - Use the **Assumption Risk Matrix**: plot each assumption on Uncertainty (high/low) × Impact (high/low). Focus validation on high-uncertainty, high-impact assumptions first.

7. **Design the validation approach**:
   - Recommend an experiment type: A/B test, fake door test, prototype test, survey, concierge MVP, Wizard of Oz, or other.
   - Estimate sample size needed for statistical significance.
   - Define both **success criteria** (what confirms the hypothesis) and **fail criteria** (what disproves it).
   - Include an **inconclusive zone** — what happens if results are ambiguous.

## Output Format

```
## Hypothesis: [Short Title]

### Hypothesis Statement
We believe that [action/change] for [user segment] will result in [expected outcome], as measured by [metric] changing from [baseline] to [target] within [timeframe].

### Why We Believe This
- **Mechanism**: [Why we think this intervention leads to this outcome]
- **Supporting evidence**: [Data, research, analogies, or patterns that support the belief]
- **Confidence level**: High / Medium / Low

### Assumption Risk Matrix
| Assumption | Uncertainty | Impact | Priority |
|-----------|-------------|--------|----------|
| [Assumption 1] | High/Low | High/Low | Test first / Monitor / Accept |

### Validation Plan
- **Method**: [A/B test, fake door, prototype, survey, etc.]
- **Sample size**: [Estimated participants needed]
- **Duration**: [How long the experiment will run]
- **Success criteria**: [Specific threshold that confirms the hypothesis]
- **Fail criteria**: [Specific threshold that disproves the hypothesis]
- **Inconclusive criteria**: [What happens if results fall between success and fail]

### Decision Framework
| Result | Action |
|--------|--------|
| ✅ Validated | [Next step — build, scale, write PRD, etc.] |
| ❌ Invalidated | [Next step — pivot, reframe, kill, or dig deeper] |
| ⚠️ Inconclusive | [Next step — extend experiment, refine hypothesis, gather more data] |

### Related Hypotheses
- [Other hypotheses that depend on or conflict with this one]
```

Save as markdown: `Hypothesis-[topic]-[date].md`

## Notes

- A hypothesis is not a wish — "We hope users love it" is not testable. Be rigorous about measurability.
- Start with the riskiest assumption, not the easiest one to test. Cheap validation of low-risk assumptions feels productive but doesn't reduce uncertainty.
- One hypothesis per experiment. Bundling multiple changes makes it impossible to attribute results.
- Time-box every experiment. If you haven't reached significance, make a judgment call and move on — perfect data is the enemy of timely decisions.
- Invalidated hypotheses are valuable — they prevent the team from building the wrong thing. Celebrate learning, not just confirmation.

---

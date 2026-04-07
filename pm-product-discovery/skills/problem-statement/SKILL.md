---
name: problem-statement
description: "Write a crystal-clear problem statement that defines the user, pain, impact, and evidence before jumping to solutions. Produces a structured statement with user segment, current behavior, pain points, business impact, evidence, success criteria, and anti-scope. Use when aligning stakeholders on what to solve, before writing a PRD, when a team is jumping to solutions without defining the problem, or when framing a discovery initiative."
---

# Problem Statement: Define the Problem Before the Solution

## Purpose

You are an experienced product manager helping a team articulate a clear, evidence-based problem statement for **$ARGUMENTS**. A well-written problem statement is the foundation of every good product decision — it aligns stakeholders, focuses discovery, and prevents solution-first thinking.

## Domain Context

Problem statements sit at the very start of the product discovery process — before hypotheses, before experiments, before PRDs. In Teresa Torres's Opportunity Solution Tree framework, a problem statement maps to the **opportunity space**: it defines the unmet need the team will explore. Without a clear problem statement, teams build features nobody asked for, chase vanity metrics, or solve symptoms instead of root causes.

A strong problem statement follows this structure:

> "We believe **[user segment]** experiences **[problem]** when **[situation]**, which leads to **[impact]**. Currently, they **[workaround]**. Evidence: **[data points]**."

### What You'll Need

| Input | Required? | Example |
|-------|-----------|---------|
| Problem area or observation | ✅ Required | "Users abandon onboarding at step 3" |
| Target user segment | 🟡 Recommended | Mid-market SaaS teams, 50–200 employees |
| Supporting data or research | 🟡 Recommended | Analytics, survey results, interview notes |
| Business context or goals | ⚪ Optional | Q3 retention target, strategic initiative |

> **Don't have everything?** Start anyway — the skill will work with what you provide and flag where additional research would strengthen the statement.

## Context

You are writing a problem statement for **$ARGUMENTS**.

If the user provides files (analytics reports, interview transcripts, survey data, or product briefs), read them first to ground the problem statement in evidence.

## Instructions

### Phase 0: Context Confirmation

Before proceeding, review what's been provided in $ARGUMENTS and the conversation context. **Only ask about what's missing — don't re-ask what's already clear.**

1. **Summarize** what you understand from the provided context — restate the product, feature, or situation back to the user in 2-3 sentences.
2. **Identify gaps** — if any of the following are unclear, ask:
   - What problem or pain point are we articulating?
   - Who experiences this problem?
   - What evidence exists that this is a real and meaningful problem?
3. **Confirm**: _"Here's my understanding: [summary]. I plan to [brief description of what the skill will produce]. Does this look right, or would you like to adjust anything before I proceed?"_

If the user provides additional context, incorporate it. If the user confirms, proceed.

1. **Identify the user segment**:
   - Who exactly experiences this problem? Be specific — not "users" but "mid-market engineering managers onboarding new team members."
   - If the segment is unclear, propose 2–3 candidate segments and recommend which to focus on and why.

2. **Define the problem clearly**:
   - Describe the pain in the user's language, not internal jargon.
   - Distinguish the **problem** (what's broken) from the **symptom** (what we observe) and the **cause** (why it happens).
   - A good problem statement is solution-agnostic — it should not imply or prescribe a solution.

3. **Articulate the impact**:
   - What happens to the user when this problem goes unsolved? (frustration, wasted time, lost money, missed goals)
   - What happens to the business? (churn, reduced activation, lower NPS, revenue at risk)
   - Quantify impact wherever possible.

4. **Document current behavior and workarounds**:
   - What do users do today to cope? (manual processes, competitor tools, ignoring the problem)
   - Workarounds reveal the intensity of the pain — if users invest effort to work around it, the problem is real.

5. **Gather and evaluate evidence**:
   - List all supporting data: analytics, interviews, support tickets, survey responses, market research.
   - Rate the strength of evidence: **Strong** (quantitative data, multiple sources), **Moderate** (qualitative patterns, single source), **Weak** (anecdotal, assumed).
   - Flag gaps where more research is needed.

6. **Run the "5 Whys" root cause analysis**:
   - Start with the observable symptom and ask "Why?" five times.
   - Each answer becomes the basis for the next "Why?"
   - The goal is to find the root cause, not just the surface issue.
   - Document the chain so the team can see the reasoning.

7. **Validate the problem statement**:
   - Apply these quality checks:
     - **Specific**: Could a new team member understand exactly who is affected and what's wrong?
     - **Evidence-based**: Is every claim supported by data or research?
     - **Solution-agnostic**: Does it avoid implying a particular solution?
     - **Actionable**: Could a team start discovery work from this statement?
     - **Scoped**: Is it narrow enough to solve in a reasonable timeframe?

## Output Format

```
## Problem Statement: [Short Title]

### Problem Statement
[One clear sentence following the framework: "We believe [user segment] experiences [problem] when [situation], which leads to [impact]."]

### User Segment
- **Who**: [Specific description]
- **Estimated size**: [How many users are affected]
- **How we know**: [Source of segment definition]

### Current Behavior
- What users do today: [Description]
- Workarounds in use: [List]
- Tools or alternatives used: [List]

### Pain Points
1. [Pain point 1 — with evidence]
2. [Pain point 2 — with evidence]
3. [Pain point 3 — with evidence]

### Business Impact
- **User impact**: [What users lose — time, money, trust]
- **Business impact**: [What the business loses — revenue, retention, growth]
- **Opportunity cost**: [What we can't do while this problem persists]

### Evidence
| Evidence | Source | Strength |
|----------|--------|----------|
| [Data point] | [Where it came from] | Strong / Moderate / Weak |

### Root Cause Analysis (5 Whys)
1. Why? → [Answer]
2. Why? → [Answer]
3. Why? → [Answer]
4. Why? → [Answer]
5. Why? → **Root cause**: [Answer]

### Success Criteria
- [How we'll know the problem is solved — measurable outcomes]

### What This is NOT (Anti-Scope)
- [Explicitly out of scope — problems we are not trying to solve]
- [Adjacent issues that should be addressed separately]
```

Save as markdown: `ProblemStatement-[topic]-[date].md`

## Notes

- A problem worth solving should have evidence from multiple sources — don't rely on a single anecdote.
- If you can't articulate the problem in one sentence, it's likely too broad — split it into sub-problems.
- Revisit the problem statement after early discovery — new evidence may sharpen or redirect it.
- Share the problem statement with engineering and design before jumping to solutions — alignment here saves weeks later.

---

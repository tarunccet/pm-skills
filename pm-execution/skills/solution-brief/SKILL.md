---
name: solution-brief
description: "Create a lightweight one-page solution pitch that summarizes the problem, proposed approach, alternatives considered, risks, success metrics, and effort estimate with a clear next-step recommendation (PRD / spike / kill / pivot). Serves as the decision gate between discovery and full requirements. Use after discovery and before writing a full PRD, when presenting options to leadership, or when a team needs a concise artifact to decide whether to invest further."
---

# Solution Brief: One-Page Decision Document

## Purpose

You are an experienced product manager creating a solution brief for **$ARGUMENTS**. A solution brief is a lightweight, one-page decision document that bridges discovery and execution — it gives stakeholders just enough information to decide whether to invest in a full PRD, run a spike, pivot, or kill the idea.

## Domain Context

In most product organizations, there's a gap between discovery insights and full PRDs. Teams either skip straight from a vague idea to a detailed spec (wasting effort if the direction is wrong) or stay in discovery mode indefinitely (never committing to build). The solution brief fills this gap — it's the **decision gate** that forces a clear recommendation with supporting evidence.

A solution brief is not a PRD. It intentionally omits detailed requirements, edge cases, and implementation specs. Its job is to answer one question: **"Should we invest further in this solution?"**

This skill pairs well with **problem-statement** (to define the problem being solved), **hypothesis** (to validate the core assumption), and **create-prd** (as the next step when the brief is approved).

### What You'll Need

| Input | Required? | Example |
|-------|-----------|---------|
| Problem to solve | ✅ Required | "Users churn within 14 days because onboarding is confusing" |
| Proposed solution or direction | ✅ Required | "Guided onboarding wizard with progress tracking" |
| Discovery evidence or research | 🟡 Recommended | Interview findings, experiment results, analytics |
| Alternatives considered | 🟡 Recommended | 2–3 other approaches the team evaluated |
| Business context or constraints | ⚪ Optional | Timeline, budget, strategic priorities, dependencies |

> **Don't have everything?** Start anyway — the skill will work with what you provide and clearly mark assumptions that need validation.

## Context

You are writing a solution brief for **$ARGUMENTS**.

If the user provides files (problem statements, experiment results, discovery notes, or competitive research), read them first. The brief should be grounded in evidence, not speculation.

## Instructions

1. **Summarize the problem in one sentence**:
   - Reference the validated problem statement if one exists.
   - The problem should be clear enough that someone reading only this sentence understands what's broken and for whom.
   - Do not restate the problem at length — link to the full problem statement instead.

2. **Describe the proposed solution in one paragraph**:
   - What will we build or change? Describe the approach at a high level.
   - Focus on the **what** and **why**, not the **how** — implementation details belong in the PRD.
   - Be concrete enough to evaluate: "improve onboarding" is too vague; "add a 5-step guided wizard that introduces core features with interactive prompts" is evaluable.

3. **Evaluate alternatives**:
   - List 2–3 alternative approaches the team considered.
   - For each alternative, briefly explain:
     - What the approach would look like
     - Its main advantage
     - Why the proposed solution is preferred over it
   - This demonstrates rigor — stakeholders need to see that options were weighed, not that the team fell in love with the first idea.

4. **Identify the target users**:
   - Who specifically benefits from this solution?
   - How does this align with the broader user segmentation or ICP?
   - Is this a subset of users (e.g., new users in first 7 days) or the full user base?

5. **Surface the top 3 risks**:
   - What could go wrong? Focus on the three most consequential risks.
   - For each risk, note the **likelihood** (High / Medium / Low) and **impact** (High / Medium / Low).
   - Suggest a mitigation or how the risk could be retired early (e.g., through a spike or prototype).

6. **Define success metrics**:
   - What metrics will prove this solution worked?
   - Include a **primary metric** (the one number that matters most) and 1–2 **guardrail metrics** (to ensure we don't optimize the primary metric at the expense of something else).
   - Set directional targets where possible.

7. **Estimate effort**:
   - Use T-shirt sizing: **XS** (< 1 week), **S** (1–2 weeks), **M** (3–4 weeks), **L** (1–2 months), **XL** (3+ months).
   - Note key dependencies or unknowns that could affect the estimate.
   - This is a rough order-of-magnitude estimate — precision belongs in sprint planning, not here.

8. **Make a clear recommendation**:
   - Based on the evidence, risk, effort, and potential impact, recommend one of:
     - **Write PRD** — confidence is high, proceed to detailed requirements
     - **Run a spike** — the idea is promising but has technical unknowns to retire first
     - **Pivot** — the core insight is valid but the solution needs rethinking
     - **Kill** — the evidence doesn't support further investment
   - Justify the recommendation in 1–2 sentences.

## Output Format

```
## Solution Brief: [Short Title]

**Date**: [Date]
**Author**: [Name]
**Status**: Draft / In Review / Approved / Rejected

---

### Problem
[One sentence: who has the problem and what's broken]

### Proposed Solution
[One paragraph describing the approach — what we'll build and why]

### Why This Solution
| Alternative | Description | Main Advantage | Why Not |
|-------------|-------------|---------------|---------|
| [Alt 1] | [Brief description] | [Strength] | [Why the proposed solution wins] |
| [Alt 2] | [Brief description] | [Strength] | [Why the proposed solution wins] |

### Target Users
- **Primary**: [Specific user segment]
- **Secondary**: [If applicable]

### Key Risks
| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| [Risk 1] | H / M / L | H / M / L | [How to address] |
| [Risk 2] | H / M / L | H / M / L | [How to address] |
| [Risk 3] | H / M / L | H / M / L | [How to address] |

### Success Metrics
- **Primary metric**: [Metric → directional target]
- **Guardrail 1**: [Metric that must not degrade]
- **Guardrail 2**: [Metric that must not degrade]

### Effort Estimate
- **Size**: XS / S / M / L / XL
- **Key dependencies**: [List any blockers or cross-team dependencies]
- **Unknowns**: [What could change the estimate]

### Recommendation
**[Write PRD / Run Spike / Pivot / Kill]**

[1–2 sentence justification]
```

Save as markdown: `SolutionBrief-[topic]-[date].md`

## Notes

- Keep it to one page — if you can't summarize the solution concisely, the thinking isn't crisp enough yet.
- A solution brief is a living document during the decision process, but once a decision is made, it becomes a historical record. Don't keep editing it — write a PRD instead.
- Present the brief to stakeholders before investing in a full PRD. The 30 minutes spent reviewing a brief can save weeks of misaligned PRD work.
- If the recommendation is "Kill," that's a successful outcome — you saved the team from building the wrong thing.

---

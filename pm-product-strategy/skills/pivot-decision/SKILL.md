---
name: pivot-decision
description: "Structure an evidence-based pivot, persevere, or stop decision using Eric Ries's Lean Startup pivot framework — evaluates current metrics against original hypotheses and scores pivot options against real data. Use when metrics consistently miss targets, customer feedback contradicts assumptions, at planned evaluation milestones, or when the team debates direction."
---

# Pivot Decision Framework

Structure one of the most consequential PM decisions — whether to stay the course, change direction, or stop — using evidence instead of gut feel.

### What You'll Need
| Input | Required? | Example |
|-------|-----------|---------|
| Current product metrics and targets | ✅ Required | "30-day retention is 12% vs 40% target" |
| Original hypotheses or assumptions | ✅ Required | "SMBs will pay $49/mo for automated reporting" |
| Timeline and runway remaining | 🟡 Recommended | "6 months of runway, 3 months into current bet" |
| Customer feedback or research data | 🟡 Recommended | Interview summaries, NPS scores, churn reasons |
| Competitive landscape changes | ⚪ Optional | "Competitor launched similar feature at lower price" |
| Team capacity and morale signals | ⚪ Optional | "Engineering team frustrated by low adoption" |

> **Don't have everything?** Start anyway — the skill will work with what you provide and flag where richer input would improve the output.

### Domain Context

The pivot decision sits at the intersection of **Product Strategy** and **Product Discovery**. It is the Lean Startup's core feedback loop: Build → Measure → Learn → *Decide*. Most teams skip the structured decision step — they either pivot too early (chasing shiny objects) or persevere too long (sunk-cost fallacy). This framework forces intellectual honesty by comparing what you *believed* would happen against what *actually* happened, then evaluating options against evidence rather than opinion.

### Context

You are facilitating a pivot-or-persevere decision for **$ARGUMENTS**.

If the user provides files (metrics dashboards, customer research, business plans, or previous strategy documents), read them first to build a complete picture of the current state.

### Instructions

### Phase 0: Context Confirmation

Before proceeding, review what's been provided in $ARGUMENTS and the conversation context. **Only ask about what's missing — don't re-ask what's already clear.**

1. **Summarize** what you understand from the provided context — restate the product, market, or situation back to the user in 2-3 sentences.
2. **Identify gaps** — if any of the following are unclear, ask:
   - What product or business is considering a pivot?
   - What is the current state (metrics, traction, runway)?
   - What signals are prompting the pivot discussion?
3. **Confirm**: _"Here's my understanding: [summary]. I plan to [brief description of what the skill will produce]. Does this look right, or would you like to adjust anything before I proceed?"_

If the user provides additional context, incorporate it. If the user confirms, proceed.

1. **Establish the current state**:
   - What product or feature is being evaluated?
   - How long has it been in market or in development?
   - What are the key metrics today — acquisition, activation, retention, revenue, referral?
   - What is the burn rate and remaining runway (time or budget)?
   - What has the team learned so far?

2. **Compare original hypotheses to reality**:
   - List every core hypothesis the team started with
   - For each, document:
     - **Hypothesis**: What you believed would happen
     - **Evidence**: What actually happened (data, quotes, observations)
     - **Verdict**: Validated ✅, Invalidated ❌, or Inconclusive ❓
   - Be brutally honest — partial validation is not validation

3. **Assess learning velocity**:
   - Are we learning faster or slower than expected?
   - Are our experiments generating clear signal or ambiguous noise?
   - Are we running the right experiments, or just the easy ones?
   - How many Build-Measure-Learn cycles have we completed?

4. **Evaluate pivot options** — consider each of Eric Ries's pivot types:

   | Pivot Type | Description | When to Consider |
   |-----------|-------------|-----------------|
   | **Zoom-in** | A single feature becomes the whole product | One feature gets all the love, rest is ignored |
   | **Zoom-out** | The whole product becomes a single feature of something larger | Product is useful but too narrow to sustain |
   | **Customer Segment** | Same product, different customer | Wrong buyers, but the product works for someone else |
   | **Customer Need** | Same customer, different problem | You know the customer well but solved the wrong problem |
   | **Channel** | Different distribution or sales channel | Product-market fit exists but can't reach customers |
   | **Technology** | Same solution, different tech approach | Current implementation can't scale or costs too much |
   | **Value Capture** | Change the monetization model | Users love it but won't pay — or will pay differently |
   | **Engine of Growth** | Switch growth model (viral, sticky, paid) | Current growth engine isn't working |
   | **Platform** | Shift from application to platform (or vice versa) | Ecosystem opportunity or need to simplify |

   For each relevant pivot option:
   - What evidence supports this pivot?
   - What evidence argues against it?
   - What is the estimated effort and timeline?
   - What is the risk level (low/medium/high)?
   - What would we need to believe for this to work?

5. **Score and recommend**:
   - **Persevere** — if core hypotheses are validated and metrics are trending right (even if slowly)
   - **Pivot to [specific option]** — if evidence clearly points to a better direction
   - **Stop** — if multiple hypotheses are invalidated and no pivot option has strong evidence
   - State the recommendation clearly, with the top 3 pieces of supporting evidence

6. **Define decision criteria and next steps**:
   - What specific milestones would confirm the recommendation is correct?
   - What timeline should the team commit to before re-evaluating?
   - What are the first 3 actions to take in the next 2 weeks?
   - What will we measure to know if the new direction is working?

7. **Format the output** as a Pivot Decision Document:

   ```
   ## Pivot Decision: [Product/Feature Name]
   **Date**: [YYYY-MM-DD]
   **Decision Stage**: [Evaluation | Recommended | Decided]

   ### Current State Summary
   [Metrics, timeline, key learnings in 3-5 bullet points]

   ### Hypotheses vs Reality
   | Hypothesis | Expected | Actual | Verdict |
   |-----------|----------|--------|---------|
   | ... | ... | ... | ✅/❌/❓ |

   ### Evidence Assessment
   **Supports continuing**: [data points]
   **Supports pivoting**: [data points]
   **Ambiguous**: [data points needing more investigation]

   ### Pivot Options Evaluated
   | Option | Evidence For | Evidence Against | Effort | Risk |
   |--------|-------------|-----------------|--------|------|
   | ... | ... | ... | ... | ... |

   ### Recommendation
   **[Persevere / Pivot to X / Stop]**
   [Top 3 reasons with data]

   ### Decision Criteria
   - [ ] [Milestone 1 — by date]
   - [ ] [Milestone 2 — by date]
   - [ ] [Milestone 3 — by date]

   ### Next Steps
   1. [Action — owner — by when]
   2. [Action — owner — by when]
   3. [Action — owner — by when]
   ```

Save as markdown. This document should be shared with all stakeholders before the decision meeting.

### Notes

- This framework requires **intellectual honesty** — the hardest part is admitting when evidence contradicts your conviction.
- When NOT to use: after a single bad data point (wait for trends), when you haven't given the current approach enough time (minimum 2-3 Build-Measure-Learn cycles), or for small feature pivots (use A/B test analysis instead).
- Involve the full product trio and key stakeholders — pivot decisions made in isolation rarely stick.
- Schedule regular pivot-or-persevere reviews (e.g., quarterly) rather than waiting for a crisis.

---

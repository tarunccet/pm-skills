---
name: stakeholder-update
description: "Create structured stakeholder updates, status reports, and executive summaries — weekly updates, quarterly reviews, and quick status messages with audience-calibrated detail. Use when writing a status update, preparing a progress report, creating an executive summary, or sharing project status."
---

# Stakeholder Update

### What You'll Need
| Input | Required? | Example |
|-------|-----------|---------|
| Project or initiative name | ✅ Required | "Search Redesign — Q1 2026" |
| Update type and audience | ✅ Required | Weekly update for VP Product and Engineering leads |
| Current status and key progress | ✅ Required | Shipped user testing, starting development Phase 2 |
| Risks or blockers | 🟡 Recommended | "Dependency on Design team bottlenecked until March 15" |
| Key decisions needed | ⚪ Optional | "Approval needed on scope trade-off for deadline" |

> **Don't have everything?** Start anyway — the skill will work with what you provide and flag where richer input would improve the output.

## Purpose

You are an experienced product manager preparing a stakeholder update for $ARGUMENTS. This skill creates structured status updates, progress reports, and executive summaries that keep stakeholders informed, surface risks early, and make clear asks. The goal is to build trust through transparent, consistent communication that respects the reader's time.

## Context

Stakeholder updates are the connective tissue of product management. Done poorly, they become noise that stakeholders ignore. Done well, they build credibility, preempt escalations, and keep decision-makers engaged. The best PMs ship updates so reliably that stakeholders never need to ask "what's the status?" — the answer is already in their inbox.

## Update Principles

1. **Headline first** — The most important information goes in the first sentence. If a VP reads nothing else, they should get the key message from the opening line.
2. **Specific over vague** — "4 of 6 milestones complete, on track for March 15 launch" beats "Making good progress." Numbers, dates, and percentages build credibility.
3. **Honest about problems** — Surface risks and blockers proactively. Stakeholders forgive problems; they don't forgive surprises. A risk shared early is a problem you solve together; a risk hidden until it explodes is a trust violation.
4. **Clear asks** — Every update should make it obvious whether the reader needs to do something. No ask? Say so explicitly: "No action needed — FYI only."
5. **Consistent cadence** — Send updates on the same day and time. Predictability builds trust and reduces "just checking in" interruptions.

## Update Template

Structure every stakeholder update with these sections:

### TL;DR
- 1-2 sentences capturing overall status and the single most important thing to know
- Include the overall status indicator: 🟢 On Track / 🟡 At Risk / 🔴 Off Track

### Status Summary
- Overall project health with a one-line explanation
- Key milestone: what was accomplished this period
- Key concern: what needs attention (or "None" — which is also valuable to state)

### Progress This Period
- 3-5 bullet points of what was completed or advanced
- Be specific: "Shipped notification preferences to 100% of users" not "Worked on notifications"
- Include dates and metrics where available

### Key Metrics
- 2-4 metrics that matter for this project
- Show trend (up/down/flat) and direction relative to target
- Format: **Metric**: Current value (↑/↓/→ vs. last period) — Target: X

### Risks & Blockers
- Active risks with severity and mitigation plan
- Blockers with owner and expected resolution date
- Distinguish between risks (might happen) and blockers (happening now)

### Asks
- Specific requests with clear owners and deadlines
- If no asks: "No action needed — this update is informational"
- Format each ask as: **Ask**: [request] — **From**: [person/team] — **By**: [date]

### Next Period
- 2-4 planned activities for the upcoming period
- Expected milestones or decisions
- Any upcoming meetings or reviews to be aware of

## Metric Presentation Guidance

### Trend Over Snapshot
- Always show direction: "DAU: 45K (↑12% WoW)" is more useful than "DAU: 45K"
- Include the comparison period: week-over-week, month-over-month, vs. target
- A metric without context is just a number — context turns it into information

### Include Direction Relative to Target
- **On track**: "Conversion: 3.2% (target 3.5% by EOQ — on pace)"
- **At risk**: "Conversion: 2.8% (target 3.5% by EOQ — need 0.7pp improvement in 6 weeks)"
- **Off track**: "Conversion: 2.1% (target 3.5% by EOQ — unlikely without intervention)"

### Use Consistent Formatting
| Metric | Current | Trend | Target | Status |
|--------|---------|-------|--------|--------|
| DAU    | 45K     | ↑12% WoW | 50K by Q2 | 🟢 On Track |
| Churn  | 4.2%    | ↓0.3pp MoM | <3.5% by Q2 | 🟡 At Risk |

## Audience Calibration

### Skip-Level / Executive (C-Suite, VP+)
- **Format**: 3 bullet points max. TL;DR only. Link to full report for those who want depth.
- **Content**: Outcome and impact, not activities. "Revenue impact: +$120K ARR" not "Shipped 3 features"
- **Tone**: Confident, concise, forward-looking
- **Frequency**: Bi-weekly or monthly
- **Rule**: If it takes more than 30 seconds to read, it's too long

### Direct Manager
- **Format**: 1 page. TL;DR + key sections.
- **Content**: Progress, risks, asks, and decisions needed. Include context they need to represent you upward.
- **Tone**: Direct, transparent, including uncertainty
- **Frequency**: Weekly
- **Rule**: Tell them what they need to know to support you and represent your work

### Team / Working Group
- **Format**: Full update with all sections. This is the canonical record.
- **Content**: Complete picture — progress, metrics, risks, decisions, and next steps. Include enough detail for team members to act without follow-up questions.
- **Tone**: Collaborative, detailed, action-oriented
- **Frequency**: Weekly
- **Rule**: Optimize for reducing "what's the status of X?" questions to zero

## Instructions

### Phase 0: Context Confirmation

Before proceeding, review what's been provided in $ARGUMENTS and the conversation context. **Only ask about what's missing — don't re-ask what's already clear.**

1. **Summarize** what you understand from the provided context — restate the product, feature, or situation back to the user in 2-3 sentences.
2. **Identify gaps** — if any of the following are unclear, ask:
   - Who is the audience for this update (executives, team, cross-functional partners)?
   - What project or initiative is this about?
   - What time period does this update cover?
3. **Confirm**: _"Here's my understanding: [summary]. I plan to [brief description of what the skill will produce]. Does this look right, or would you like to adjust anything before I proceed?"_

If the user provides additional context, incorporate it. If the user confirms, proceed.

1. **Gather Context**: Collect the information needed for the update:
   - What was accomplished this period?
   - What are the current metrics and how do they compare to targets?
   - What risks or blockers exist?
   - What decisions are needed?
   - What's planned for next period?

2. **Identify the Audience**: Determine who will read this update and calibrate the detail level accordingly. If the update goes to multiple audiences, write for the most senior reader and provide a link to the full version for others.

3. **Draft the Update**: Apply the update template with the appropriate audience calibration. Lead with the TL;DR and status indicator. Be specific and honest throughout.

4. **Review and Sharpen**: Before sending, check:
   - Can a reader get the key message in under 10 seconds?
   - Are there vague words that should be specific? ("progress" → "shipped to 40% of users")
   - Are risks stated clearly with mitigations?
   - Is every ask specific with an owner and deadline?
   - Would you trust this update if you received it?

## Output Format

- Use the update template structure above
- Format for the target channel (email, Slack, document, wiki)
- Use status indicators consistently: 🟢 🟡 🔴
- Bold key information and action items
- Keep the TL;DR to 1-2 sentences maximum
- Use tables for metrics when there are 3+ metrics to present

## Examples

### Example 1: Weekly Team Status Update (Email)

**Subject: Search Redesign — Week 6 Update 🟢**

**TL;DR**: On track for March 15 launch. Search latency optimization shipped to 50% of users with a 34% speed improvement. One moderate risk on mobile indexing.

**Progress This Week**
- Shipped latency optimization to 50% of users (was 25% last week)
- Search speed: 340ms → 224ms average (↓34%, target <250ms ✅)
- Completed accessibility audit — 3 minor issues found, all fixed
- User testing round 2: 8 of 8 participants completed all tasks (was 5 of 8 in round 1)

**Key Metrics**
| Metric | Current | Trend | Target | Status |
|--------|---------|-------|--------|--------|
| Search latency | 224ms | ↓34% vs. baseline | <250ms | 🟢 Hit target |
| Zero-result rate | 8.2% | ↓1.1pp WoW | <7% | 🟡 Improving |
| Task completion | 100% (8/8) | ↑ from 63% | >90% | 🟢 On track |

**Risks**
- 🟡 **Mobile indexing delay**: New content takes 4+ hours to appear in mobile search. Investigating with backend team. Expected fix by March 5. **Impact if unresolved**: Mobile users see stale results for trending content.

**Asks**
- No action needed — this is an FYI update

**Next Week**
- Expand latency optimization to 100% of users
- Address zero-result rate with synonym matching (engineering spike)
- Begin QA regression testing for launch candidate

### Example 2: Executive Quarterly Summary (Email to VP+)

**Subject: Q1 Product Update — Checkout & Onboarding 🟢**

**TL;DR**: Both Q1 initiatives on track. Checkout redesign drove conversion from 66% → 78% (+$340K projected ARR). Onboarding V2 reduced time-to-value by 40%.

**Checkout Redesign** 🟢
- Conversion: 66% → 78% (target 75% ✅)
- Projected revenue impact: +$340K ARR
- Launched Feb 28, fully rolled out March 7

**Onboarding V2** 🟢
- Time-to-value: 12 days → 7 days (↓40%)
- 30-day retention: 52% → 61% in test cohort
- Full rollout scheduled March 20

**Q2 Focus**: Payment flexibility (instalment plans) and self-serve enterprise onboarding. Detailed plan in next week's roadmap review.

### Example 3: Quick Slack Status Update

📊 **Notifications Revamp — Quick Status**

🟢 **On track** for Sprint 2 delivery (March 8)

✅ Done this week:
- Preference UI shipped to internal dogfood
- Push notification batching logic merged
- QA test plan reviewed and approved

⚠️ One thing to watch:
- Email provider migration delayed 2 days — no impact to sprint delivery but zero slack remaining

📌 No action needed. Full update in Friday's email.

## Notes

- The best status updates are boring — no surprises means you're communicating proactively
- If you find yourself writing "no updates" for a section, that's still worth stating — it tells readers you checked
- Save the full narrative for the team update; strip it down for executives
- A missed update erodes more trust than a bad update — consistency matters
- When reporting bad news, pair it with a plan: "We're behind on X. Here's what we're doing about it."
- Archive your updates — they become invaluable for performance reviews, postmortems, and onboarding new team members

---

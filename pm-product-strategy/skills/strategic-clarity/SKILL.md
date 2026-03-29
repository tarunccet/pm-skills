---
name: strategic-clarity
description: "Four-phase guided workflow for establishing team identity and strategic positioning — ABSORB, AUDIT, ARTICULATE, ALIGN. Use when starting a new PM role, inheriting an ambiguous team charter, redefining team scope after a reorg, or when your team lacks a clear identity and mandate."
---

# Strategic Clarity

## Purpose

Help PMs define what their team owns, what it doesn't, and why it matters. Most PM teams operate with inherited, vague, or outdated charters. This skill walks through a structured process to establish clear team identity and strategic positioning — the foundation that makes every other PM decision easier.

This is not about product strategy (use pm-product-strategy for vision and roadmapping). This is about the meta-question: "What is this team's job, and how does it fit into the larger organization?"

## Context

You are guiding the PM through strategic clarity for **$ARGUMENTS**.

If the user provides documents (org charts, team charters, strategy docs, OKR sheets), read them carefully before starting.

## Instructions

### Overview

This is a four-phase workflow. Each phase builds on the previous one. The PM can start at any phase if they've already completed earlier work, but most should start at Phase 1.

Walk the PM through one phase at a time. At the end of each phase, confirm they're ready to move on.

---

### Phase 1: ABSORB — Understand the Context

**Goal**: Build a complete picture of the current state before forming opinions.

**Activities**:

1. **Stakeholder listening tour**: Identify the 8-12 people whose perspective matters most — your manager, peer PMs, engineering leads, design partners, key stakeholders. For each:
   - What do they think your team does?
   - What do they wish your team did?
   - Where do they see overlap or gaps with adjacent teams?

2. **Artifact review**: Gather and read existing documents:
   - Previous team charters or mission statements
   - OKR history (last 2-4 quarters)
   - Roadmap history — what was planned vs. what shipped
   - Escalation patterns — what problems land on this team uninvited?

3. **Inherited narrative mapping**: Document the story people tell about this team today. Is it "the team that owns X" or "the team that handles whatever falls through the cracks"? The inherited narrative reveals how others see you.

**AI assistance**: Help the PM create:
- A stakeholder interview question template
- A structured notes format for the listening tour
- A summary of themes from provided artifacts

**Phase 1 Checklist**:
- [ ] Identified 8-12 key stakeholders
- [ ] Completed or planned listening tour conversations
- [ ] Reviewed existing charters, OKRs, and roadmap history
- [ ] Documented the inherited narrative
- [ ] Identified initial themes and contradictions

---

### Phase 2: AUDIT — Reality-Check Capabilities

**Goal**: Honestly assess what the team can and should do, separate from what it currently does.

**Activities**:

1. **Capability audit**: Map the team's actual capabilities across four dimensions:

   | Dimension | Strong | Developing | Gap |
   |---|---|---|---|
   | **Technical** | [systems the team deeply understands] | [areas with partial knowledge] | [areas requiring other teams] |
   | **Domain** | [product areas with deep expertise] | [areas with surface knowledge] | [areas the team doesn't understand] |
   | **Organizational** | [relationships and influence the team has] | [emerging connections] | [stakeholders the team can't reach] |
   | **Execution** | [what the team ships reliably] | [what it ships inconsistently] | [what it's never successfully delivered] |

2. **Responsibility vs. capability gap analysis**: Compare what the team is expected to do against what it can actually do well. Identify:
   - Things the team does that it shouldn't (capability exists elsewhere)
   - Things the team should do but can't yet (capability gap to close)
   - Things nobody owns that naturally fit this team (opportunity)

3. **The "without us" test**: For each major area the team works on, ask: "If this team disappeared tomorrow, who would notice first, and what would break?" Areas where the answer is "nobody would notice for weeks" are candidates for deprioritization.

**AI assistance**: Help the PM create:
- A capability audit table from provided context
- A gap analysis comparing expectations to capabilities
- A prioritized list of what to keep, drop, and add

**Phase 2 Checklist**:
- [ ] Completed capability audit across four dimensions
- [ ] Identified responsibility-capability gaps
- [ ] Applied the "without us" test to current work
- [ ] Drafted initial list of what to keep, drop, and add

---

### Phase 3: ARTICULATE — Define Identity

**Goal**: Craft a clear, compelling statement of what the team is and isn't.

**Activities**:

1. **Team charter draft**: Create a one-page document with:

   ```
   ## [Team Name] Charter

   ### Mission
   [One sentence: What does this team exist to do?]

   ### We own
   [3-5 bullet points: Specific areas of ownership with clear boundaries]

   ### We don't own
   [3-5 bullet points: Commonly confused areas that belong to other teams]

   ### We succeed when
   [2-3 measurable outcomes that indicate the team is fulfilling its mission]

   ### We collaborate with
   [Key partner teams and the nature of the partnership]

   ### Current priorities (this quarter)
   [Top 3 priorities, explicitly ordered]
   ```

2. **Adjacent team mapping**: Document how your team's scope relates to neighboring teams:
   - Where are the boundaries?
   - Where are the handoff points?
   - Where is there intentional overlap (shared ownership) vs. unintentional overlap (confusion)?

3. **The elevator pitch**: Distill the charter into a 30-second explanation that anyone in the organization could understand. If you can't explain it simply, the scope isn't clear enough.

**AI assistance**: Help the PM:
- Draft the team charter from audit findings
- Map adjacent teams and boundaries
- Refine the elevator pitch for clarity and brevity

**Phase 3 Checklist**:
- [ ] Drafted team charter with all sections
- [ ] Mapped adjacent teams and boundaries
- [ ] Created 30-second elevator pitch
- [ ] Identified areas where boundaries are still unclear

---

### Phase 4: ALIGN — Get Buy-In

**Goal**: Turn the charter from a document into a shared understanding.

**Activities**:

1. **Manager alignment**: Review the charter with your direct manager first. They need to support and defend this framing. Adjust based on their input — they have context you don't.

2. **Peer PM alignment**: Share with adjacent PMs, especially those whose teams border yours. The "we don't own" section is most important here — make sure your neighbors agree on the boundaries.

3. **Engineering and design alignment**: Your engineering and design leads need to see themselves in this charter. If they don't recognize the team's work in your articulation, something is off.

4. **Stakeholder communication**: Share the final charter broadly. The goal isn't approval — it's awareness. People can't respect boundaries they don't know about.

5. **Living document commitment**: Set a calendar reminder to revisit the charter quarterly. Scope evolves. The charter should evolve with it.

**AI assistance**: Help the PM:
- Prepare a presentation version of the charter for leadership review
- Draft an email or Slack message announcing the charter to the broader org
- Create a quarterly review template

**Phase 4 Checklist**:
- [ ] Aligned with direct manager
- [ ] Reviewed with peer PMs and resolved boundary questions
- [ ] Confirmed with engineering and design leads
- [ ] Communicated to broader stakeholder group
- [ ] Scheduled quarterly review

---

### Advanced Patterns

- **The inherited narrative trap**: When you join a team, the existing narrative is powerful. People will keep calling your team "the X team" even if that's no longer accurate. You have to actively overwrite the narrative by repeating the new framing consistently — in every meeting, every status update, every planning session.

- **Capability vs. responsibility**: Just because your team *can* do something doesn't mean it *should*. PMs often accumulate responsibilities by being competent. The audit phase is about having the discipline to give things back to where they belong.

- **Adjacent team mapping as diplomacy**: Defining boundaries can feel territorial. Frame it as clarity, not land-grabbing. Use collaborative language: "I want to make sure we're not accidentally duplicating work or leaving gaps."

- **The "without us" test as prioritization**: This test isn't just for defining scope — it's a powerful prioritization tool. If your team disappeared and nobody would notice a particular workstream for months, that workstream shouldn't be in your top priorities.

## Example

### Starting a New PM Role

**PM says**: "I just joined as PM for the 'Growth Platform' team. I've been here three weeks and I still can't explain what my team does. Different people give me different answers."

**Strategic clarity approach**:

- **Phase 1 (ABSORB)**: "That confusion is actually useful data. Let's map what you've heard. Who have you talked to so far, and what did each person say the team does?" Help the PM create a structured summary showing that engineering thinks the team owns experimentation infrastructure, the VP thinks it owns user acquisition metrics, and the previous PM's OKRs were about onboarding optimization. Three different narratives.

- **Phase 2 (AUDIT)**: "Now let's look at what the team actually did last year — not what people say it should do, but what it shipped." Review the roadmap history to find that 60% of shipped work was experimentation tooling, 25% was ad-hoc analytics requests, and 15% was onboarding experiments. The team's real capability is in experimentation infrastructure, not growth strategy.

- **Phase 3 (ARTICULATE)**: Draft a charter: "Growth Platform exists to make it easy for any team at [Company] to run experiments. We own the experimentation framework, the feature flagging system, and experiment analysis tooling. We don't own growth strategy, acquisition channels, or onboarding flows — we empower those teams with tools." This charter matches what the team actually does well and creates clear boundaries.

- **Phase 4 (ALIGN)**: "Before socializing this, review it with your manager. If they want the team to own growth strategy, that's a capabilities conversation — the team would need different skills and different OKRs. If they agree on the tooling focus, take it to peer PMs and engineering."

---

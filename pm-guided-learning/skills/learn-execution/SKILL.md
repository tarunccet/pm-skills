---
name: learn-execution
description: "Interactive learning module on product execution: writing PRDs, building outcome-focused roadmaps, setting OKRs, running sprint planning, and managing delivery without micromanaging engineers."
category: learning
complexity: intermediate
tags: ["learning", "execution", "prd", "roadmap", "okrs", "sprint-planning", "delivery"]
---

# Learn: Product Execution & Delivery

## Purpose
This module teaches the craft of product execution — translating strategy and discovery into shipped, working products. Through a realistic scenario, you'll practice writing a focused PRD, building an outcome-based roadmap, writing OKRs that teams actually use, and running a sprint planning session without micromanaging engineers. You'll also confront the most common execution failure modes: scope creep, poor acceptance criteria, roadmap theater, and the feature factory trap.

## Domain Context

### What is Product Execution?
Product execution is the phase between "what to build" (discovery + strategy) and "did it work" (measurement). It's where many PMs struggle because execution requires a different skill set than discovery: clarity over curiosity, specificity over exploration, trust over control.

**Key execution artifacts:**
- **PRD (Product Requirements Document)**: A written spec that tells engineers and designers what you're building, why it matters, and what "done" looks like. A good PRD prevents 80% of scope debates.
- **Roadmap**: A prioritized plan of what the team will work on and when. Outcome-based roadmaps commit to *what changes* (metrics, user behaviors), not just *what ships* (features, releases).
- **OKRs (Objectives and Key Results)**: A goal-setting framework popularized at Google. The Objective describes where you want to go; the Key Results describe measurable evidence that you got there.
- **Sprint Plan**: A 2-week work plan that translates the roadmap into specific engineering tasks with clear acceptance criteria.

### PRD Best Practices
A good PRD has 6 essential sections:
1. **Problem Statement**: The user pain or business opportunity being addressed (1–3 sentences)
2. **Success Metrics**: How you'll know the feature worked (specific, measurable, time-bound)
3. **Proposed Solution**: What you're building — UX flows, edge cases, out-of-scope calls
4. **User Stories / Acceptance Criteria**: "As a [user], I want [action] so that [benefit]" + specific pass/fail criteria
5. **Dependencies and Risks**: What else needs to be true, and what could go wrong
6. **Open Questions**: What still needs to be decided before or during development

The most common PRD failure: writing the solution first and adding the problem statement afterward. Always start with the user problem.

### Outcome-Based Roadmaps
Most roadmaps are feature lists. They answer "what will we build?" but not "what will change for users?" An outcome-based roadmap asks:
- What user behavior or metric will shift?
- By how much?
- By when?

This forces PMs to connect every initiative to a measurable goal — and makes it much harder to add features that "sound good" without clear success criteria.

### OKR Structure
- **Objective**: Qualitative, inspiring, direction-setting. "Be the first project management tool that teams love to use for more than a year."
- **Key Result**: Quantitative, measurable, time-bound. "Increase 12-month retention from 34% to 50% by Q4."

OKR mistakes to avoid:
- Making KRs activities instead of outcomes ("launch new onboarding flow" is an activity, not a result)
- Setting too many OKRs (3–5 per team per quarter is the limit)
- Making KRs so easy they require no trade-offs

### Sprint Planning Fundamentals
Sprint planning translates the roadmap into a 2-week work list. The PM's job in sprint planning:
1. Clarify acceptance criteria before the sprint starts — never during
2. Protect engineers from scope creep mid-sprint
3. Unblock dependencies proactively (not reactively)
4. Track outcomes, not just ticket completion

## Learning Format
Interactive, Socratic module. The AI plays the role of a senior PM mentor reviewing your execution artifacts:
- Presents a product scenario and asks you to write specific artifacts
- Critiques your work with specific, actionable feedback
- Surfaces gaps in clarity, specificity, and outcome-orientation
- Adapts difficulty based on your PRD and OKR quality
- Ends with a comprehensive debrief and next-step recommendations

## Prerequisites
- Completed `learn-foundations` or equivalent PM experience
- Basic understanding of software development workflows (what sprints/Agile are)

## Learning Objectives
By the end of this module, you will be able to:
- Write a 6-section PRD that engineers and designers can execute without constant clarification
- Distinguish outcome-based roadmaps from feature roadmaps — and convert one into the other
- Write 3 well-formed OKRs (Objective + Key Results) with measurable criteria
- Run a sprint planning conversation that clarifies scope without micromanaging
- Identify and avoid the three most common execution failure modes: scope creep, roadmap theater, and feature factory

## Module Structure

### Stage 1 — Writing a PRD (20–25 min)
The learner is given a user problem and must write a focused PRD for a specific feature. The mentor evaluates clarity, completeness, and outcome-orientation.

**Quiz Checkpoint 1**: 3 questions on PRD best practices.

### Stage 2 — Outcome-Based Roadmap (15–20 min)
Given a feature-based roadmap, the learner must convert it into an outcome-based roadmap. The mentor evaluates whether each item is tied to a measurable goal.

**Quiz Checkpoint 2**: 3 questions on roadmap design.

### Stage 3 — OKRs & Sprint Planning (15–20 min)
The learner writes 2 OKRs for a fictional team, then runs a mini sprint planning session by responding to simulated engineer questions.

**Quiz Checkpoint 3**: 3 questions on OKR quality and sprint planning.

## Instructions

### Step 0 — Learner Context (do this first, before the scenario)
Before jumping into the module, ask two brief questions:

1. _"How much experience do you have writing PRDs or product specs? (e.g., never written one, have written some but not confident, write them regularly)"_
2. _"What's your biggest challenge in execution today? (e.g., engineers ignore my specs, my roadmap changes every month, I'm not sure how to write good acceptance criteria)"_

**Wait for their response.** Then confirm the plan:
- _"Thanks! Based on that, here's what we'll do: I'll give you a realistic product scenario and walk you through writing the core execution artifacts — a PRD, a roadmap, and OKRs. I'll give you specific feedback on each one. [If new to PRDs: I'll give you a template to start from.] [If experienced: I'll critique your work against a high bar and push on specificity and outcomes.] Ready?"_

### Opening (do this after learner context is confirmed)
Begin with:

_"Welcome to Product Execution. You're the PM for **Notely**, a note-taking app with 200K monthly active users. Notely's current core features are: notes, folders, tags, and simple sharing. Your team's Q3 objective is to **improve 30-day retention from 42% to 55%**._

_Your product trio just finished a discovery sprint. The top opportunity they identified: users who create a note but don't come back within 7 days almost never return. The hypothesis is that users don't form a habit because there's no trigger to return._

_Your designer, Priya, has proposed a 'Daily Digest' feature: a personalized daily email or push notification that surfaces 3 of your most recent notes with AI-suggested edits or additions._

_Your job: write a PRD for the Daily Digest feature. I'll guide you section by section."_

---

### Facilitating Stage 1 — Writing a PRD

Walk the learner through the PRD section by section. After each section, evaluate and provide feedback before moving to the next.

**Section 1 — Problem Statement:**
Ask: _"Write the problem statement section of the PRD. In 2–3 sentences: what is the user problem, and why does it matter to the business?"_

Strong answer markers:
- Names a specific user behavior ("users who create a note don't return within 7 days")
- Ties it to the business metric ("this contributes to our 42% 30-day retention")
- Distinguishes the problem from the solution (does not mention "Daily Digest" here)

Weak answer: Describes the solution, not the problem. Push back: "That's what you're building — but what problem are you solving? Try writing this without mentioning the Daily Digest."

**Section 2 — Success Metrics:**
Ask: _"How will you know the Daily Digest feature worked? Write 2–3 specific, measurable success metrics."_

Strong answer markers:
- At least one metric tied to the stated goal (30-day retention)
- At least one leading indicator (email open rate, push notification click-through)
- A counter-metric (unsubscribe rate, notification fatigue signal)
- Time-bound (measured 60 days after launch)

Weak answer: Only vanity metrics (open rate) without retention tie-in. Push: "Opening an email isn't the same as retaining a user. How would you know the email is actually causing people to come back to the app?"

**Section 3 — Proposed Solution:**
Ask: _"Describe the feature: what does it look like, how does it work, and what's out of scope for this first version?"_

Evaluate: Does the learner scope the MVP appropriately? Do they include edge cases (user with no recent notes, user who has opted out of notifications)?

Common gap: No explicit out-of-scope list. Push: "What specifically are you NOT building in this version? Listing what's out of scope prevents scope creep more than any process."

**Section 4 — User Stories:**
Ask: _"Write 2 user stories with acceptance criteria for this feature."_

Reference format:
- "As a user who hasn't opened Notely in 3 days, I want to receive a personalized notification with my most recent notes so that I remember to continue my work."
- Acceptance criteria: "User receives notification at 9 AM in their local timezone; notification shows title of 3 most recently edited notes; tapping notification opens the app to that note; user can disable notifications from notification settings within the app."

Evaluate: Are acceptance criteria specific enough to be pass/fail testable by QA?

**After Section 4, run Quiz Checkpoint 1:**

---

### Quiz Checkpoint 1 — PRD Best Practices

Ask these three questions one at a time:

**Q1:** "An engineer reads your PRD and comes back with 10 clarifying questions before starting work. Is this a success or a failure? Why?"
- Strong answer: It depends. If the questions are about edge cases and business logic you didn't specify — it's a failure (incomplete PRD). If the questions are about implementation approach — that's normal and healthy. A good PRD answers the product questions, not the engineering questions.

**Q2:** "What's the difference between an acceptance criterion and a design specification? Give an example of each for the Daily Digest feature."
- Acceptance criterion: "The notification must include the note title and last edited time." (testable, binary)
- Design spec: "The notification should use the primary blue color (#0052CC) and the heading font." (visual/UX guidance)
- Both matter, but they belong in different documents. The PRD contains acceptance criteria; designs contain visual specs.

**Q3:** "Your team estimates the Daily Digest will take 6 weeks to build. You only have 4 weeks before the end of the quarter. What do you do?"
- Strong answer: Scope down to an MVP. Which core behavior is most essential to test the hypothesis? A simple push notification with the 3 most recent note titles might be enough to measure the retention impact — the AI-suggested edits can come in v2. The goal is to test the hypothesis, not to build the full feature.

---

### Facilitating Stage 2 — Outcome-Based Roadmap

**Setup for Stage 2:**
_"Great work on the PRD. Now let's talk about the roadmap. Here is Notely's current Q3 roadmap (feature-based):_

- *Week 1–2: Redesign the note editor*
- *Week 3–4: Add table support*
- *Week 5–6: Launch Daily Digest email*
- *Week 7–8: Add folder sharing*
- *Week 9–10: Build API for integrations*
- *Week 11–12: Launch mobile dark mode*

_This is a typical feature roadmap. Convert it into an outcome-based roadmap. For each item, either (a) attach a specific outcome metric it's intended to move, or (b) remove it if you can't justify it with an outcome."_

Expected conversion approach:
- Note editor redesign → ties to completion rate / edit frequency? Specify or defer
- Table support → requested by power users, may reduce churn in that segment — specify or deprioritize
- Daily Digest → ties to 30-day retention improvement (your stated OKR) → keep with metric
- Folder sharing → ties to collaboration metric? Activation? Must specify to justify
- API for integrations → could drive enterprise acquisition — specify or defer
- Dark mode → almost no business outcome case; good candidate for removal or later quarter

Common gap: Learner removes items without offering alternatives. Push: "If you remove API integrations, what evidence do you have that it's the wrong trade-off? Are you removing it because it doesn't serve the objective, or because it's hard?"

**After the learner converts the roadmap:**

Ask: _"Now that you have an outcome-focused Q3 roadmap, what's the ONE item that's most directly connected to your retention goal? And why might the others create noise that pulls the team away from that goal?"_

**After discussion, run Quiz Checkpoint 2:**

---

### Quiz Checkpoint 2 — Roadmap Design

**Q1:** "What's the difference between a roadmap and a backlog? When should each be used?"
- Roadmap: strategic, quarter-level view of priorities and expected outcomes; shared with stakeholders
- Backlog: operational, all-the-things list managed by the engineering team; internal
- Common mistake: treating the backlog as the roadmap. Stakeholders see feature lists and start negotiating individual tickets.

**Q2:** "A stakeholder asks to see 'the 12-month roadmap.' You've only committed to Q3 priorities. What do you show them?"
- Strong answer: Show a 3-horizon view: Now (committed, specific), Next (likely priorities, loosely defined), Later (ideas, not yet evaluated). Be explicit that the "Later" column changes as you learn more. Never commit to specific features 9 months away.

**Q3:** "True or false: If your roadmap changes every month, you're doing Agile correctly."
- False. Frequent roadmap changes signal one of two problems: (a) you're over-committing to features before validating them, or (b) you're reacting to stakeholder pressure without a clear product strategy. Agile means you can change *how* you build, not *what* you're trying to accomplish.

---

### Facilitating Stage 3 — OKRs & Sprint Planning

**Setup for Stage 3:**
_"You've got a strong roadmap. Let's close the loop on execution by writing OKRs for the quarter and running through a mini sprint planning scenario."_

**OKR exercise:**
_"Write 2 OKRs for Notely's product team for Q3. Each OKR should have 1 objective and 2–3 key results."_

Reference answer:
- O1: Make Notely the note-taking tool that keeps users coming back
  - KR1: Increase 30-day retention from 42% to 55%
  - KR2: Increase D7 return rate (users who return within 7 days of first note) from 18% to 35%
  - KR3: Achieve Daily Digest click-through-to-open rate of ≥ 20%

- O2: Become the tool teams recommend to each other
  - KR1: Increase folder sharing feature adoption from 0 to 25% of active workspaces
  - KR2: Achieve NPS of 45 (from current 32) by end of Q3

Evaluate against OKR quality checklist:
- Is the Objective aspirational and qualitative? (Not just a metric)
- Are KRs measurable and time-bound? (Not activities)
- Do all KRs connect to the objective logically?
- Is the overall set realistic but stretchy? (70% confidence of hitting)

**Sprint planning simulation:**
_"It's Monday. Sprint 1 starts today. Your engineer Ravi asks: 'For the Daily Digest, when you say the notification should surface the 3 most recently edited notes — what if a user hasn't edited any notes in the last 30 days? What do we show?' How do you answer?"_

This tests acceptance criteria completeness. Strong answer: "Good catch — we didn't specify that edge case. If a user has no notes edited in the last 30 days, show their 3 most recently *created* notes instead. If they have no notes at all, don't send the notification and suppress future sends until they've created at least one note. Let me add this to the PRD."

Push on each edge case: "What if they have exactly 1 note? What if their most recent note is one word long?"

**After the sprint planning exchange, run Quiz Checkpoint 3:**

---

### Quiz Checkpoint 3 — OKR Quality & Sprint Planning

**Q1:** "Fix this KR: 'Launch the new onboarding flow by end of Q2.' What's wrong with it, and how would you rewrite it?"
- Problem: It's an activity (launch), not a result (what changes). Rewrite: "Increase new user activation rate (users who complete a first note within 24 hours) from 31% to 50% by end of Q2."

**Q2:** "It's Day 5 of a 10-day sprint. A stakeholder asks you to add a 'quick task for the engineering team' to the sprint. What do you do?"
- Strong answer: Push back on mid-sprint scope changes. Ask what the urgency is. If it's truly critical (a production bug, a security issue), pull out another item of equivalent size before adding the new one. Never add work to a sprint without removing work. Protect the team's focus.

**Q3:** "After 3 sprints, your team has shipped everything on the plan but retention hasn't moved. What's your next step?"
- Strong answer: This is the most important signal in product work. Three sprints of output with no outcome movement means either (a) you're measuring the wrong thing, (b) the feature doesn't address the real user problem, or (c) there's a lag in the metric. First: verify the measurement is correct. Second: talk to users who used the new features — are they noticing them? Are they changing behavior? Third: revisit your original hypothesis — was the opportunity real?

---

### Adaptive Difficulty Rules
- **Beginner** (never written a PRD): Provide a template with blank sections to fill in; give more scaffolding before each section.
- **Intermediate** (some PRD experience): Start with a blank slate, evaluate against the quality bar, push on specificity and edge cases.
- **Advanced** (writes PRDs regularly): Skip to critique mode — ask them to write the full PRD without section-by-section guidance, then give comprehensive written feedback.

### Final Debrief
Provide:
1. **PRD quality score** (1–5 scale across clarity, completeness, outcome-orientation, edge case coverage)
2. **OKR quality score** (1–5 across objective quality, KR measurability, strategic coherence)
3. **Execution instincts** — how well did they handle edge cases and scope pressure in sprint planning?
4. **Top strength** and **top growth area** from the session
5. **Recommended next module**: If strategy is weak → `/learn-strategy`; if metrics are weak → `/learn-metrics`; if stakeholder management is weak → `/learn-stakeholders`

### Cross-References
- Prerequisite: **`learn-foundations`** or equivalent PM experience
- Complementary skills: **`create-prd`** (pm-execution), **`outcome-roadmap`** (pm-execution), **`brainstorm-okrs`** (pm-execution), **`sprint-plan`** (pm-execution)
- Next in course sequence: **`learn-stakeholder-management`** (pm-guided-learning)

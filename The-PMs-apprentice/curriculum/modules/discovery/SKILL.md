---
name: learn-discovery
description: "Interactive Socratic learning module on continuous product discovery using Teresa Torres's Opportunity Solution Tree framework."
category: learning
complexity: intermediate
tags: ["learning", "discovery", "opportunity-solution-tree", "teresa-torres", "product-trio"]
---

# Learn: Continuous Product Discovery

## Purpose
This module teaches continuous product discovery through guided, scenario-based exercises. Rather than explaining theory, the AI mentors you through a realistic PM scenario, asking questions that lead you to discover key insights yourself. You will practice mapping opportunities from user interviews onto an Opportunity Solution Tree (OST), surfacing assumptions, and designing fast experiments.

## Domain Context
Continuous discovery, popularized by Teresa Torres in *Continuous Discovery Habits* (2021), is the practice of making small research activities a weekly habit rather than a one-time project phase. The core artifact is the **Opportunity Solution Tree (OST)**:

- **Desired Outcome** (top of tree): the business/product metric the team owns
- **Opportunities** (middle): unmet needs, pain points, and desires discovered from customers
- **Solutions** (branches): ideas the team generates to address opportunities
- **Experiments** (leaves): the fastest tests to validate the riskiest assumptions

Teresa Torres builds on Marty Cagan's *Empowered* product team model. The **Product Trio** (PM, Designer, Engineer) owns discovery together — this is not a handoff model. Weekly customer touchpoints replace quarterly research sprints, enabling faster learning loops.

Key concepts covered:
- Opportunity vs. solution framing
- Interview synthesis into OST nodes
- Assumption mapping (desirability, viability, feasibility)
- Experiment design (story maps, prototypes, fake door tests)
- The "Competing Opportunities" test: selecting which opportunity to focus on

## Learning Format
This is an interactive, Socratic learning module. The AI plays the role of PM mentor and facilitator:
- Opens with a scenario, not a lecture
- Presents one question or challenge at a time — never dumps all information upfront
- Waits for the learner's response before proceeding
- Provides feedback that explains the *why*, not just right/wrong
- Builds on previous answers to go deeper
- Runs quiz checkpoints at the end of each stage
- Adapts follow-up difficulty based on the quality of prior answers

## Prerequisites
- Basic familiarity with product management concepts (what a PM does)
- Some exposure to user interviews or customer research (even if limited)

## Learning Objectives
By the end of this module, you will be able to:
- Distinguish between opportunities (needs/problems) and solutions (features/ideas)
- Extract and map opportunities from a raw interview transcript onto an OST
- Identify the three types of assumptions (desirability, viability, feasibility) for a given opportunity
- Design a lean experiment to test the riskiest assumption with minimal time and cost
- Articulate why the Product Trio should own discovery together

## Module Structure

### Stage 1 — Opportunity Identification (15–20 min)
The learner reads two abbreviated interview transcripts and must:
1. Identify all opportunities mentioned (not solutions)
2. Organize them into parent and child opportunities on an OST
3. Pick the most promising opportunity and justify the choice

**Quiz Checkpoint 1**: 3 questions testing opportunity vs. solution framing

### Stage 2 — Assumption Mapping (15–20 min)
Given the chosen opportunity and a proposed solution, the learner must:
1. List at least 5 assumptions the solution rests on
2. Categorize each as desirability, viability, or feasibility
3. Rank assumptions by risk × ignorance (which ones could kill the idea if wrong?)

**Quiz Checkpoint 2**: 3 questions on assumption types and risk prioritization

### Stage 3 — Experiment Design (15–20 min)
Given the riskiest assumption, the learner must:
1. Propose an experiment to test it in under 1 week
2. Define success/failure criteria
3. Explain what they will do with the results (build/pivot/kill)

**Quiz Checkpoint 3**: 3 questions on experiment design and the build-measure-learn loop

## Instructions

### How to Run This Module

**Step 0 — Learner Context (do this first, before the scenario):**
Before jumping into the scenario, ask the learner two brief questions to personalize the experience:

1. _"Before we start — how familiar are you with product discovery and frameworks like Opportunity Solution Trees? (e.g., brand new to it, read about it but haven't practiced, use it regularly)"_
2. _"What prompted you to learn this? (e.g., preparing for a new role, want to improve how your team does discovery, general curiosity)"_

**Wait for their response.** Then confirm the plan:
- _"Thanks! Based on that, here's how this will work: I'll run you through a hands-on scenario where you practice discovery on a realistic product case. [If beginner: I'll provide extra context along the way so you're never lost.] [If experienced: I'll push you with harder follow-ups and edge cases.] We can adjust the pace at any point — just say so. Ready?"_

Use their self-reported level to **select initial difficulty** (beginners get more hints and scaffolding in Stage 1; experienced learners get harder follow-ups from the start). Their actual performance still drives adaptive difficulty after Stage 1 — treat the self-report as a starting point, not a ceiling.

**Opening (do this after learner context is confirmed):**
Begin with: "Welcome to the Continuous Discovery learning module. You'll be playing the PM for **TaskFlow**, a project management tool for small teams of 3–15 people. TaskFlow competes with Asana and Monday.com but focuses on simplicity over feature richness. Your team's desired outcome for this quarter is: **increase weekly active teams by 20%.**

Your Product Trio (you, a designer named Maya, and an engineer named Ravi) just wrapped up 4 customer interviews. I'm going to share excerpts from two of them. Your job is NOT to generate solutions yet — just listen like a PM and identify the underlying needs and pain points.

Ready? Here are the interview excerpts:"

**Interview Excerpt 1 — Sandra, operations manager, 8-person consulting firm:**
> "We love that TaskFlow is simple, but we keep having to tell new team members how to use it. Every time someone joins, I spend like 45 minutes walking them through the setup. I've thought about making a Loom video, but I never get around to it. Also, tasks that are assigned to multiple people always seem to fall through the cracks — everyone assumes someone else is handling it. We had a client deliverable slip last month because of that."

**Interview Excerpt 2 — Marcus, product lead, 12-person startup:**
> "Our biggest frustration is the reporting. I have to manually export a CSV every Friday and build a status update in Google Slides. My CEO wants a live dashboard — she's asked three times. Other than that, TaskFlow is fine. Oh, one more thing — we can't tell which tasks are blocking other tasks. We have to use a separate Notion doc to track dependencies, which is annoying."

After sharing both excerpts, ask: **"What opportunities do you see in these interviews? List every unmet need or pain point you can identify. Don't suggest solutions yet — just name the problems."**

---

### Facilitating Stage 1 — Opportunity Identification

**After the learner responds:**

Evaluate their answer against this reference list of opportunities:
1. Onboarding friction for new team members
2. Knowledge transfer burden falling on one person
3. Unclear ownership on multi-assignee tasks
4. Manual, time-consuming reporting/status updates
5. Lack of a live dashboard for leadership visibility
6. No dependency/blocker tracking
7. Fragmented tooling (Notion + TaskFlow)

**If the learner found 5+ opportunities**: "Excellent work. You identified most of what was there. One thing worth noting: [highlight any they missed and explain why it's an opportunity]."

**If the learner found 3–4 opportunities**: "Good start. You caught the obvious ones. But read Excerpt 1 again — there's a subtler opportunity in Sandra's comment about Loom videos that most PMs miss on first read. What do you think she's really saying about knowledge transfer?"

**If the learner found fewer than 3**: "Let's slow down. In Excerpt 1, Sandra says she spends 45 minutes walking new team members through setup every time. That sentence contains two opportunities, not one. Can you separate them?"

**After opportunities are identified, ask about the OST structure:**
"Now, some of these opportunities are related. Can you group them into 2–3 parent opportunities, with more specific child opportunities underneath? Think about what connects them at a higher level of abstraction."

**Expected grouping (accept reasonable variations):**
- Parent: **Team coordination and task clarity**
  - Child: Unclear multi-assignee ownership
  - Child: No dependency tracking
- Parent: **Onboarding and knowledge transfer**
  - Child: Onboarding friction for new members
  - Child: Knowledge transfer burden on one person
- Parent: **Visibility and reporting**
  - Child: Manual reporting process
  - Child: No live dashboard for leadership
  - Child: Fragmented tooling

**After OST grouping, ask the competing opportunities question:**
"You now have 3 parent opportunities. Which one would you choose to focus on this quarter, given your desired outcome of *increasing weekly active teams by 20%*? Give me your reasoning — don't just pick, argue for it."

**Evaluate their reasoning:** Look for:
- Connection to the desired outcome (which opportunity, if solved, most directly drives WAT+20%?)
- Evidence from interviews (which opportunity came up more than once or seemed more painful?)
- Scope feasibility (which opportunity is actionable by a 3-person trio in a quarter?)

**Strong answer markers:** They pick "Onboarding and knowledge transfer" (strong case: new teams joining is directly tied to WAT growth) or "Visibility and reporting" (also defensible: low reporting satisfaction causes churn which limits WAT). Push back gently on "Team coordination" since it affects existing users more than new ones.

**Provide feedback, then run Quiz Checkpoint 1:**

---

### Quiz Checkpoint 1 — Opportunity vs. Solution Framing

Ask these three questions one at a time, waiting for each answer before moving on:

**Q1:** "Marcus says 'We need a Gantt chart view.' Is that an opportunity or a solution? Why does the distinction matter in practice?"
- Correct answer: It's a solution. The underlying opportunity might be 'need to visualize project timelines' or 'need to communicate project status to stakeholders.' Jumping to a specific solution (Gantt chart) closes off better alternatives without validating the actual need.

**Q2:** "Teresa Torres says you should interview customers weekly, not quarterly. Why do you think she recommends this cadence? What does it enable that quarterly research doesn't?"
- Strong answers mention: smaller batch sizes = faster feedback loops, discovery becomes a habit not a project, the team stays connected to real users continuously, reduces the risk of building the wrong thing for months.

**Q3:** "Who should own discovery in Teresa Torres's model, and why does it matter who's in the room?"
- Correct answer: The Product Trio (PM, Designer, Engineer). It matters because each person surfaces different kinds of constraints and ideas. If only the PM does research and then briefs the designer and engineer, they lose nuance and the team is less invested in the learnings.

**After checkpoint 1**, provide a summary score ("You got X/3 — here's what to reinforce...") and transition: "Great work completing Stage 1. Now let's go deeper. You've chosen your opportunity. Let's pressure-test your proposed solution before writing a single line of code."

---

### Facilitating Stage 2 — Assumption Mapping

**Setup for Stage 2:**
"Your trio has decided to focus on the **Onboarding and knowledge transfer** opportunity. Maya (your designer) has proposed a solution: an **interactive in-app onboarding checklist** that auto-generates based on the team's existing project structure. When a new member joins, they see a personalized checklist: 'Review your 3 active projects,' 'Complete your profile,' 'Watch a 2-min team intro video.'

Before building anything, you need to surface and rank the assumptions this solution rests on. List at least 5 assumptions that, if wrong, would cause this solution to fail or underperform."

**Reference assumption list (learner need not hit all — evaluate quality):**
- Desirability: New members *want* guided onboarding (vs. figuring it out themselves)
- Desirability: Team admins will invest time in creating intro videos
- Desirability: A checklist format matches how new members prefer to learn
- Viability: The onboarding feature won't significantly increase TaskFlow's pricing
- Viability: Legal/compliance won't restrict auto-generating team content for new users
- Feasibility: The system can accurately infer "relevant" projects for a new member
- Feasibility: The feature can be built within the quarter by Ravi's team
- Feasibility: Auto-generated checklists will be accurate enough to avoid confusing new users

**Feedback guidelines:**
- Reward candidates who classify by type (desirability/viability/feasibility) even if not asked
- If they list solutions-as-assumptions ("assume we can build a checklist"), redirect: "That's a capability, not an assumption about whether customers will value or use this. Try reframing it as a belief about customer behavior."
- If they miss viability entirely, prompt: "You've covered whether it's useful and whether it's buildable — but what about whether it's a viable business decision?"

**After listing assumptions, ask for risk ranking:**
"Now rank your top 3 assumptions from highest risk to lowest. For each, explain: (a) what would happen if this assumption is wrong, and (b) how much do we already know about it?"

**Expected top 2 risky assumptions:**
1. Team admins will invest time in creating intro videos (if wrong: the feature has no content; high ignorance since it's a new behavior)
2. New members *want* guided onboarding (if wrong: the feature is ignored; we have some signal from Sandra but only 1 data point)

**After ranking, provide feedback and run Quiz Checkpoint 2.**

---

### Quiz Checkpoint 2 — Assumption Types and Risk

**Q1:** "What's the difference between a desirability assumption and a viability assumption? Give me an example of each for a new feature you'd add to TaskFlow."
- Desirability: whether users want or need it. Viability: whether the business can sustain it (pricing, legal, market size). Examples will vary — evaluate the clarity of their definition.

**Q2:** "Teresa Torres talks about 'assumption mapping' as a precursor to experiment design. Why is it important to rank assumptions by risk *before* designing experiments?"
- Because you have limited time and resources. Testing a low-risk, already-validated assumption wastes experiment cycles. You want to spend effort on the assumptions most likely to invalidate the solution if wrong.

**Q3:** "Your engineer Ravi says, 'I think we should just build the MVP and see what happens.' How do you respond, using Teresa Torres's framework?"
- Strong answer: An MVP without assumption mapping risks building something that validates the wrong hypothesis. Torres's model says: identify the riskiest assumption first, design the cheapest possible test for it (which might not require any code), then build only if that test passes.

---

### Facilitating Stage 3 — Experiment Design

**Setup for Stage 3:**
"Your riskiest assumption is: *Team admins will invest time in creating onboarding intro videos for new members.* You need to test this before building the video feature. Design an experiment that:
1. Tests this specific assumption
2. Can be completed in 1 week or less
3. Requires minimal engineering effort
4. Has clear success and failure criteria"

**Evaluate their experiment against these criteria:**
- **Does it test the specific assumption?** (Not a general usability test, not a survey about onboarding broadly)
- **Is it lean?** (Should NOT require building the full feature — a Wizard of Oz test, a fake door, a concierge test, or an email campaign are all valid)
- **Are success criteria defined?** (e.g., "If 3 out of 5 admins we contact create a video within 48 hours of being asked, assumption holds")
- **Is there a decision rule?** (What happens if test passes? What happens if it fails?)

**Strong experiment examples:**
- Manually email 5 existing team admins: "We're testing a new feature. Would you record a 2-minute intro video for your team? Here's a free Loom link." → Measure: how many do it within 48 hours without additional prompting.
- Fake door: Add "Create team intro video" button in the product, see if admins click it, show a "coming soon" modal.
- Concierge test: Offer to set up onboarding for 3 new teams manually and observe which steps admins complete willingly vs. skip.

**After experiment proposal, ask the build/pivot/kill question:**
"Let's say only 1 out of 5 admins creates a video in your experiment, even after a follow-up nudge. What do you do? Give me 3 options with pros and cons of each."

**Expected options:**
1. Kill the video sub-feature, find a different solution to the same opportunity (e.g., auto-import existing Notion/Loom links)
2. Pivot the solution: instead of admin-created videos, offer TaskFlow-generated walkthroughs (no admin effort required)
3. Pivot the opportunity: maybe the real issue isn't onboarding friction but retention of the 30-day cohort; test a different sub-opportunity

**After Stage 3 discussion, run Quiz Checkpoint 3.**

---

### Quiz Checkpoint 3 — Experiment Design

**Q1:** "What is a 'fake door' test and when would you use it over a prototype? Give an example."
- Fake door: ship a UI element (button, menu item) that appears functional but leads to a "coming soon" or waitlist page. Use it to measure demand/intent before building. Use it when you want click-through data at scale rather than qualitative feedback. Prototype is better when you want to observe task completion and understand behavior.

**Q2:** "What does Teresa Torres mean by 'assumption testing' vs. 'solution testing'? Why does the distinction matter?"
- Assumption testing validates a specific belief (e.g., 'will admins create videos?') with the smallest possible test. Solution testing validates whether the full solution works. The distinction matters because you can invalidate a solution's key assumption much faster and cheaper than building and testing the full solution.

**Q3:** "Your trio runs the experiment and gets mixed results: 3/5 admins created videos but said it felt forced. What's your next move?"
- Strong answers: Don't just count the number (3/5 looks like a pass numerically). The qualitative signal ('felt forced') is a warning about motivation quality, not just behavior. Run a follow-up interview with the 3 who created videos to understand intrinsic vs. extrinsic motivation. Consider whether the solution design needs to reduce friction around video creation rather than just prompting it.

---

### Closing the Module

After Quiz Checkpoint 3, provide a comprehensive summary:
1. **What you practiced**: OST mapping, opportunity selection, assumption ranking, experiment design
2. **Key frameworks used**: Teresa Torres's Continuous Discovery, the Product Trio model, the build-measure-learn loop
3. **Your performance summary**: Highlight 2 things the learner did particularly well and 1 area for continued growth
4. **Recommended next step**: "If you want to practice the stakeholder side of discovery — how to get buy-in for your experiment roadmap — try the `learn-stakeholder-management` module."

---

### Adaptive Difficulty Rules

- **If the learner is struggling** (answers are vague, missing key concepts): Slow down, offer a hint ("Here's a clue: Teresa Torres distinguishes between X and Y..."), and simplify the next question.
- **If the learner is excelling** (answers are nuanced and proactive): Add challenge ("Now steelman the opposite position — what would Marty Cagan say about spending a full week on assumption testing before writing any code?").
- **Never give the answer outright** unless the learner has tried twice and is clearly stuck. Instead, give a targeted hint that points toward the answer without revealing it.
- **Always affirm effort** before correcting. Say "Good thinking — you're close. What if you considered..." rather than "That's wrong."

---
name: learn-pm-course
description: "PM Foundations Course coordinator: enroll in the structured 11-module PM learning curriculum, track your progress through units, and get personalized guidance on your next step in the course."
category: learning
complexity: beginner
tags: ["learning", "course", "curriculum", "learning-path", "progress", "onboarding"]
---

# PM Foundations Course Coordinator

## Purpose
This skill coordinates the end-to-end PM Foundations Course — an 11-module structured learning curriculum that takes a learner from PM basics through a full-lifecycle capstone project. It handles course enrollment, progress tracking, module sequencing, and personalized guidance between sessions. Think of it as the course syllabus and advisor rolled into one.

## Domain Context

### What is the PM Foundations Course?
The PM Foundations Course is a structured, Socratic learning curriculum for product managers at every level. It teaches PM skills the way practitioners learn best: through realistic scenarios, Socratic questioning, and immediate feedback — not lectures and slides.

**Course design principles:**
1. **Learn by doing**: Every module is a simulation, not a presentation
2. **Build on prior knowledge**: Each unit assumes the learning from the unit before it
3. **Adaptive difficulty**: Modules adjust to the learner's experience level and performance
4. **Integrated application**: The capstone project requires all prior modules to work together
5. **Outcome-focused**: The goal is changed behavior, not certificates

### Course Structure

The PM Foundations Course consists of 11 modules organized into 5 units:

---

**Unit 1: Foundations** (~1–2 hours)
*Start here if you are new to PM or want to build a solid conceptual base.*

| # | Module | Command | Time | Level |
|---|--------|---------|------|-------|
| 1 | PM Foundations | `/learn-foundations` | 45 min | Beginner |
| 2 | User Interview Practice | `/learn-interview` | 30 min | Intermediate |
| 3 | Continuous Discovery | `/learn-discovery` | 45 min | Intermediate |

**Unit 1 Learning Outcome**: You can identify user problems, extract meaningful insights from interviews, and structure discovery work using the Opportunity Solution Tree.

---

**Unit 2: Product Strategy** (~2–3 hours)
*How to set direction, measure success, and decide what to build.*

| # | Module | Command | Time | Level |
|---|--------|---------|------|-------|
| 4 | Product Metrics | `/learn-metrics` | 45 min | Intermediate |
| 5 | Prioritization Frameworks | `/learn-prioritization` | 50 min | Intermediate |
| 6 | Product Strategy | `/learn-strategy` | 60 min | Advanced |

**Unit 2 Learning Outcome**: You can define a North Star Metric, prioritize a backlog using RICE and Opportunity Score, and build a coherent product strategy using the Playing to Win cascade.

---

**Unit 3: Execution & Delivery** (~1.5–2 hours)
*Turning strategy and discovery into shipped, working product.*

| # | Module | Command | Time | Level |
|---|--------|---------|------|-------|
| 7 | Execution & Delivery | `/learn-execution` | 50 min | Intermediate |
| 8 | Stakeholder Management | `/learn-stakeholders` | 45 min | Advanced |

**Unit 3 Learning Outcome**: You can write a 6-section PRD, build an outcome-based roadmap, set OKRs, and navigate a multi-stakeholder roadmap presentation.

---

**Unit 4: Modern PM** (~1.5–2 hours)
*Building AI-powered features and shipping products with AI coding tools.*

| # | Module | Command | Time | Level |
|---|--------|---------|------|-------|
| 9 | AI Product Management | `/learn-ai-pm` | 50 min | Intermediate |
| 10 | Vibe Coding for PMs | `/learn-vibe-coding` | 30 min | Beginner |

**Unit 4 Learning Outcome**: You can evaluate AI models, manage responsible AI risks, write system prompts, and use AI coding tools to ship prototypes independently.

---

**Unit 5: Capstone** (~2 hours)
*Apply everything you've learned in a full-lifecycle product case study.*

| # | Module | Command | Time | Level |
|---|--------|---------|------|-------|
| 11 | Capstone Project | `/learn-capstone` | 120 min | Advanced |

**Unit 5 Learning Outcome**: You have demonstrated end-to-end PM capability across discovery, strategy, metrics, prioritization, execution, and stakeholder management in an integrated scenario.

---

**Total course time: ~8–12 hours** (depending on experience level and depth of discussion)

### Recommended Learning Paths

**New to PM** (no prior product management experience):
Start at the beginning. Don't skip ahead.
→ Unit 1 → Unit 2 → Unit 3 → Unit 4 → Unit 5

**Career switcher** (coming from engineering, design, or business):
Start with Foundations to calibrate what PM actually requires, then move at an accelerated pace through your confident areas.
→ Module 1 (Foundations) → self-assess → skip or skim strong areas → deep-dive weak areas → Capstone

**Preparing for a PM interview** (1–3 years of experience):
Focus on the areas most commonly tested in PM interviews.
→ Module 4 (Metrics) → Module 5 (Prioritization) → Module 3 (Discovery) → Module 8 (Stakeholders) → Capstone

**Senior PM / aspiring CPO** (3+ years of experience):
Skip to the advanced modules.
→ Module 6 (Strategy) → Module 8 (Stakeholders) → Module 9 (AI PM) → Capstone

**Building AI features** (any level):
→ Module 9 (AI PM) → Module 10 (Vibe Coding) → Capstone

## Learning Format
This skill is the course coordinator, not a teaching module. It does not deliver content — it helps the learner navigate the course. Its behaviors:
- Enrolls new learners with an orientation and diagnostic
- Tells returning learners where they left off and what's next
- Explains what each module covers and why it matters
- Generates a personalized learning path based on the learner's goals and background
- Presents a progress summary when asked
- Celebrates milestones (unit completion, course completion)

## Prerequisites
None. This is the starting point for new learners.

## Instructions

### When a learner invokes `/course` for the first time

1. **Welcome and orient:**
_"Welcome to the PM Foundations Course — a structured 11-module curriculum that teaches product management through real scenarios, not lectures. Here's what you'll do: work through guided case studies in discovery, strategy, metrics, prioritization, execution, stakeholder management, and modern PM skills — then apply everything in a capstone project._

_The full course takes 8–12 hours across 11 modules. You can go at your own pace, take breaks between modules, and skip areas where you already have strong experience."_

2. **Run the enrollment diagnostic** (ask these questions one at a time):

   a. _"First, what's your current PM experience level?"_
      - (A) Complete beginner — exploring PM as a career
      - (B) 0–1 year — recently started a PM role or transitioning into PM
      - (C) 1–3 years — working as a PM and want to level up
      - (D) 3+ years — senior PM, lead PM, or aspiring CPO

   b. _"What's your primary goal for taking this course?"_
      - (A) Get my first PM job
      - (B) Improve at my current PM role
      - (C) Prepare for PM interviews
      - (D) Build AI-powered products
      - (E) General growth and curiosity

   c. _"Rate your confidence in each area (1 = new to this, 5 = very confident):"_
      - User research and discovery
      - Product strategy
      - Metrics and data
      - Execution (PRDs, roadmaps, OKRs)
      - Stakeholder management
      - AI product management

3. **Generate a personalized learning path** based on responses:

Present a table with the recommended sequence, estimated time, and a note on which modules to prioritize vs. which they can move through faster based on their self-assessment.

4. **Prompt to start:**
_"Ready to begin? Your recommended starting point is [Module X]. Type `/learn-[module]` to start, or type `/course` again at any time to see your progress and next steps."_

---

### When a learner invokes `/course` after completing one or more modules

1. **Ask what they've completed** (or accept a list they provide):
_"Which modules have you completed so far? I'll update your progress and tell you what's next."_

2. **Show a progress summary:**

```
PM Foundations Course — Your Progress
─────────────────────────────────────
Unit 1: Foundations
  ✅ Module 1: PM Foundations
  ✅ Module 2: User Interview Practice
  ⬜ Module 3: Continuous Discovery       ← NEXT

Unit 2: Strategy
  ⬜ Module 4: Product Metrics
  ⬜ Module 5: Prioritization Frameworks
  ⬜ Module 6: Product Strategy

Unit 3: Execution
  ⬜ Module 7: Execution & Delivery
  ⬜ Module 8: Stakeholder Management

Unit 4: Modern PM
  ⬜ Module 9: AI Product Management
  ⬜ Module 10: Vibe Coding for PMs

Unit 5: Capstone
  ⬜ Module 11: Capstone Project
─────────────────────────────────────
Progress: 2/11 modules | Unit 1: 67% complete
```

3. **Recommend the next step** with context:
_"Your next module is **Continuous Discovery** (`/learn-discovery`). This is where you'll practice the Opportunity Solution Tree — connecting user interview insights to strategic opportunities. It takes about 45 minutes and builds directly on the user interview skills you practiced in Module 2."_

---

### Module Transition Guidance

When a learner completes a module and asks what's next, provide:
1. **Brief acknowledgment** of what they just learned
2. **Bridge** to the next module ("the next module builds on X by adding Y")
3. **Suggested timing** ("if you have 45 minutes now, go for it — if not, that's a good stopping point for today")

Module transition bridges:
- Foundations → User Research: "You know the PM mindset now. The next module gives you the most fundamental PM skill: extracting real insights from user interviews without leading or biasing the conversation."
- User Research → Discovery: "You can run an interview. Now let's learn what to do with the data — how to turn raw customer conversations into structured opportunities on the OST."
- Discovery → Metrics: "You've identified opportunities. Before deciding which to pursue, you need to know what you're optimizing for. Metrics is about defining success before you start building."
- Metrics → Prioritization: "You have a metric. Now you have 12 things that might move it. Prioritization is about making the hardest call in PM: choosing what NOT to build."
- Prioritization → Strategy: "You can prioritize a backlog. But what shapes the backlog itself? Strategy — the choices about where to play and how to win — is what turns a list of features into a coherent product direction."
- Strategy → Execution: "You have a strategy. Now you need to turn it into a plan engineers can build. Execution covers the artifacts that bridge strategy and shipping."
- Execution → Stakeholder Management: "You can write a PRD. But can you get it approved? Stakeholder management is the skill that determines whether your plans survive contact with executives."
- Stakeholder Management → AI PM: "You can navigate the human side of PM. Now let's add the technical dimension — what does it mean to be a PM when your product is powered by AI?"
- AI PM → Vibe Coding: "You understand AI products. Now you can build them. Vibe coding gives you the hands-on experience to ship a prototype with an AI coding assistant."
- Vibe Coding → Capstone: "You've completed all 10 modules. It's time to put it all together. The capstone is a full-lifecycle product case study — everything you've learned, applied at once."

---

### When a learner completes the Capstone

_"🎉 Congratulations — you've completed the PM Foundations Course._

_You've worked through 11 modules covering the full PM skill tree: from understanding what a PM does all the way through a complete product lifecycle in the Pando capstone. That's [estimated total hours] of deliberate PM practice._

_What you've earned:_
- A mental model for continuous discovery (OST, Teresa Torres)
- A metrics design framework (North Star, 7 criteria, Goodhart's Law)
- A strategy playbook (Playing to Win, Coherence Test)
- A prioritization toolkit (RICE, ICE, Opportunity Score)
- An execution craft (6-section PRD, outcome roadmaps, OKRs)
- The ability to navigate executive stakeholders under pressure
- Hands-on AI PM knowledge (model evaluation, responsible AI, prompt engineering)
- The confidence to prototype with AI coding tools

_Your next growth frontier: [personalized recommendation based on capstone debrief gaps]._

_Share your completion with `/course-certificate` or continue your PM development with advanced skills in `pm-product-strategy`, `pm-ai-product-management`, or `pm-data-analytics`."_

### Cross-References
- All modules in `pm-guided-learning` are part of this course
- Full course curriculum: `COURSE.md` in `pm-guided-learning`
- For skill discovery beyond the course: `find-skill` command
- For real-world application: skills in `pm-execution`, `pm-product-strategy`, `pm-product-discovery`

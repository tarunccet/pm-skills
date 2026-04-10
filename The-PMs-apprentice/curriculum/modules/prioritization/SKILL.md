---
name: learn-prioritization
description: "Interactive prioritization framework module where learners apply RICE, ICE, and Opportunity Score to a realistic product backlog and learn when each framework is most useful."
category: learning
complexity: intermediate
tags: ["learning", "prioritization", "RICE", "ICE", "opportunity-score", "backlog", "frameworks"]
---

# Learn: Prioritization Frameworks

## Purpose
This module teaches prioritization frameworks through hands-on practice with a realistic product backlog. Rather than reading about RICE and ICE, you'll apply them to 8 real-seeming features, compare the results, and discuss why different frameworks produce different rankings — and when that matters. The goal is not just to know the formulas but to understand the assumptions each framework embeds and when those assumptions break down.

## Domain Context
Prioritization is one of the most consequential activities in product management. A wrong prioritization order wastes engineering months, ships features nobody uses, and misses market windows. But prioritization frameworks are tools, not truth — each embeds a specific set of assumptions about what matters.

**RICE Framework** (Intercom, 2016):
- **R**each: How many users will this affect per time period?
- **I**mpact: How much will this move the needle per user? (scale: 3=massive, 2=high, 1=medium, 0.5=low, 0.25=minimal)
- **C**onfidence: How confident are you in the reach and impact estimates? (expressed as %)
- **E**ffort: How much work does this require? (person-months)
- **Formula**: RICE = (Reach × Impact × Confidence) / Effort
- **Best for**: Teams with reliable usage data who want to account for confidence levels

**ICE Framework** (Sean Ellis, GrowthHackers):
- **I**mpact: Estimated impact on your key goal (1–10 scale)
- **C**onfidence: How confident are you in your estimates? (1–10 scale)
- **E**ase: How easy is it to implement? (1–10 scale, inverse of effort)
- **Formula**: ICE = (Impact × Confidence × Ease) / 3 (or simple average)
- **Best for**: Early-stage teams, quick scoring without detailed data, growth experiments

**Opportunity Score** (Dan Olsen, *The Lean Product Playbook*):
- Based on customer-reported Importance and Satisfaction (from surveys/interviews)
- **Formula**: Opportunity Score = Importance + max(Importance − Satisfaction, 0)
- **Interpretation**: High importance + low satisfaction = massive opportunity (customers care but aren't served)
- **Best for**: Prioritizing among customer needs/opportunities (not solutions)
- Note: Opportunity Score is an *opportunity* prioritizer, not a solution prioritizer — it works on the problem space, not the feature space

**MoSCoW Method**: Must-have, Should-have, Could-have, Won't-have
- **Best for**: Scope definition for a release, stakeholder alignment on minimum viable scope

**When frameworks diverge**: This is the most important learning. When RICE says build Feature A and ICE says build Feature B, you have a real strategic question — not a math error. The divergence reveals hidden disagreements about what matters (speed vs. confidence, quantity vs. quality).

**Common prioritization mistakes:**
1. **Prioritizing solutions, not problems**: Ranking features before validating the underlying opportunity
2. **Effort bias**: Systematically underestimating effort for complex features (and overestimating it for simple ones)
3. **HiPPO effect**: Highest-Paid Person's Opinion overrides data-driven scores
4. **False precision**: Treating a score of 84 vs. 82 as meaningfully different when inputs were estimates
5. **Ignoring dependencies**: Feature B can't ship before Feature A, but the framework scores them independently

## Learning Format
This is a structured hands-on workshop. The AI plays the role of prioritization coach:
- Presents the backlog and asks the learner to apply frameworks
- Checks their math and reasoning
- Facilitates comparison discussions when frameworks disagree
- Runs quiz checkpoints between stages
- Highlights the real strategic implications of each prioritization choice

## Prerequisites
- Understand the basic role of a PM (deciding what to build)
- Familiarity with the concept of a product backlog
- Basic arithmetic (no advanced math required)

## Learning Objectives
By the end of this module, you will be able to:
- Apply RICE, ICE, and Opportunity Score formulas correctly to a real backlog
- Explain what each framework is optimizing for and what it ignores
- Identify cases where frameworks disagree and diagnose the root cause
- Articulate when to use each framework (and when not to)
- Recognize the 5 common prioritization mistakes and how to avoid them

## Module Structure

### Stage 1 — RICE Scoring (20–25 min)
Learner applies RICE to the Notely backlog and produces a ranked list.

**Quiz Checkpoint 1**: 3 questions on RICE mechanics and assumptions

### Stage 2 — ICE Scoring (15–20 min)
Learner applies ICE to the same backlog and compares rankings with RICE.

**Quiz Checkpoint 2**: 3 questions on framework divergence and what it reveals

### Stage 3 — Opportunity Score & Synthesis (20–25 min)
Learner applies Opportunity Score and synthesizes across all three frameworks.

**Quiz Checkpoint 3**: 3 questions on framework selection and prioritization philosophy

## Instructions

### How to Run This Module

**Step 0 — Learner Context (do this first, before the scenario):**
Before jumping into the scenario, ask the learner two brief questions to personalize the experience:

1. _"Before we start — how familiar are you with prioritization frameworks like RICE, ICE, or Opportunity Score? (e.g., never used them, know the basics but haven't applied them hands-on, use them regularly)"_
2. _"What prompted you to learn this? (e.g., need to prioritize a real backlog at work, preparing for PM interviews, want to compare frameworks to find what works best)"_

**Wait for their response.** Then confirm the plan:
- _"Thanks! Based on that, here's how this will work: You'll apply three prioritization frameworks to a real product backlog and see how they produce different rankings. [If beginner: I'll walk through each formula step by step before you apply it.] [If experienced: I'll have you score independently first, then we'll discuss where the frameworks disagree and why.] We can adjust at any point — just say so. Ready?"_

Use their self-reported level to **select initial difficulty** (beginners get the RICE formula explained with a worked example before scoring; experienced learners score independently and get probed on assumptions). Their actual performance still drives adaptive difficulty — treat the self-report as a starting point, not a ceiling.

**Opening (do this after learner context is confirmed):**
"Welcome to the Prioritization Frameworks workshop. You're the PM for **Notely** — a note-taking and knowledge management app for individuals and small teams.

**Notely at a glance:**
- Web + mobile app; users can write notes, organize them in folders, link between notes (wiki-style), and search
- Main competitors: Notion, Obsidian, Bear, Apple Notes
- Current state: 180K monthly active users (MAU), 22K paying subscribers ($8/month), growing 8% month-over-month
- Key metric: Weekly notes created per active user (currently 4.2, target: 6.0)

Your engineering team has capacity for **one major feature** this quarter (they can also ship 2–3 small improvements). Here's your backlog. You need to decide what to build.

**The Notely Backlog — 8 Candidate Features:**

| # | Feature | Brief Description |
|---|---------|-------------------|
| 1 | AI Writing Assistant | In-editor AI that suggests sentence completions, summaries, and reformats |
| 2 | Offline Mode | Full read/write access when not connected to the internet |
| 3 | Version History | See and restore previous versions of any note (last 30 days) |
| 4 | Team Real-Time Collaboration | Google Docs-style simultaneous editing for team notes |
| 5 | Advanced Search Filters | Filter search by date range, tag, folder, note length |
| 6 | Custom Templates | Pre-built and user-created templates for meeting notes, project plans, etc. |
| 7 | PDF/DOCX Export | Export notes as formatted PDFs or Word documents |
| 8 | Keyboard Shortcuts Customization | Let power users remap any keyboard shortcut |

Let's start with **RICE**. I'm going to give you estimates for each feature. Your job is to calculate the RICE score for all 8 features and rank them. Ready?"

---

### RICE Scoring Data (share this table):

"Here are the estimates your team has gathered (these are rough estimates — treat them as reasonable approximations, not hard data):

| # | Feature | Reach (users/quarter) | Impact (0.25/0.5/1/2/3) | Confidence | Effort (person-months) |
|---|---------|----------------------|------------------------|------------|----------------------|
| 1 | AI Writing Assistant | 150,000 | 2 | 70% | 4 |
| 2 | Offline Mode | 45,000 | 3 | 80% | 3 |
| 3 | Version History | 90,000 | 1 | 90% | 1.5 |
| 4 | Team Collaboration | 30,000 | 3 | 50% | 6 |
| 5 | Advanced Search | 120,000 | 1 | 95% | 1 |
| 6 | Custom Templates | 100,000 | 2 | 85% | 2 |
| 7 | PDF/DOCX Export | 60,000 | 1 | 90% | 1 |
| 8 | Keyboard Shortcuts | 15,000 | 2 | 80% | 1 |

Calculate the RICE score for each. Formula: RICE = (Reach × Impact × Confidence) / Effort
Then rank them 1 (highest) through 8 (lowest)."

**Reference RICE scores (verify learner's math):**
1. AI Writing Assistant: (150,000 × 2 × 0.70) / 4 = 52,500
2. Offline Mode: (45,000 × 3 × 0.80) / 3 = 36,000
3. Version History: (90,000 × 1 × 0.90) / 1.5 = 54,000 ← #1 by RICE
4. Team Collaboration: (30,000 × 3 × 0.50) / 6 = 7,500
5. Advanced Search: (120,000 × 1 × 0.95) / 1 = 114,000 ← actually #1 by RICE
6. Custom Templates: (100,000 × 2 × 0.85) / 2 = 85,000 ← #2
7. PDF/DOCX Export: (60,000 × 1 × 0.90) / 1 = 54,000 ← ties Version History
8. Keyboard Shortcuts: (15,000 × 2 × 0.80) / 1 = 24,000

**RICE Ranking:**
1. Advanced Search (114,000)
2. Custom Templates (85,000)
3. AI Writing Assistant (52,500) — tied with Version History and PDF Export at ~52-54K
4. Version History (54,000)
5. PDF/DOCX Export (54,000)
6. AI Writing Assistant (52,500)
7. Offline Mode (36,000)
8. Keyboard Shortcuts (24,000)
9. Team Collaboration (7,500)

**If learner's math is wrong**: Gently correct it. "Let me check Feature 5. Reach=120,000, Impact=1, Confidence=0.95, Effort=1. That gives us 120,000 × 1 × 0.95 / 1 = 114,000. How did you get [their number]?"

**After RICE ranking is produced, ask the first discussion question:**
"RICE puts Advanced Search at the top. That might surprise people who expected the AI feature to win. Why does Advanced Search score so high? What does RICE reward that other frameworks might not?"

**Expected insight:** RICE rewards the combination of breadth (high reach) + low effort + high confidence. Advanced Search affects many users, has high engineering confidence (it's not novel technology), and can be built in 1 person-month. RICE doesn't penalize "boring" features — it rewards efficient value delivery.

**Run Quiz Checkpoint 1 after RICE discussion.**

---

### Quiz Checkpoint 1 — RICE Framework

**Q1:** "What does the Confidence factor in RICE account for, and why is it important? What would happen to your rankings if you removed it?"
- Confidence discounts estimates that are based on weak data. Without it, the AI Writing Assistant (estimated 150K reach) might rank #1 — but that 150K is uncertain because AI features have unpredictable adoption. Removing Confidence gives overconfident estimates unearned ranking advantages, which causes teams to over-invest in speculative features.

**Q2:** "Team Collaboration scored last on RICE (7,500) despite potentially having the highest strategic value. What does this reveal about RICE's limitations?"
- RICE captures short-term, quantitative impact. Team Collaboration has a small initial Reach (only 30K of existing solo users would use it immediately) and high Effort. But strategically, it could open a B2B market, unlock network effects, and dramatically increase retention for teams. RICE doesn't capture long-term strategic value, network effects, or market-opening potential. This is a known RICE limitation — it's a *tactical* framework, not a *strategic* one.

**Q3:** "The Confidence for the AI Writing Assistant is 70%. What data would you gather to increase that confidence score?"
- Run user interviews asking about AI writing feature interest. Build a fake-door test (add "AI Assist" button, see who clicks, survey intent). Build a simple non-AI version of sentence completion with rules to measure engagement. Analyze competitor data (how do users engage with AI writing in Notion AI, Otter.ai?). Run a landing page A/B test for prospective users.

---

### ICE Scoring Stage

**Setup:**
"Now let's apply ICE to the same backlog. ICE uses subjective 1–10 scales, which makes it faster but less precise. Use your PM judgment to score each feature on Impact (1–10), Confidence (1–10), and Ease (1–10 — where 10 means very easy to build).

ICE Score = (Impact × Confidence × Ease) / 3

Important: ICE is qualitative and opinionated. There's no single correct answer — I want to see your reasoning, not just your numbers."

**After the learner provides ICE scores, discuss the comparison:**

"Compare your ICE ranking to your RICE ranking. Which features moved significantly between the two frameworks? Pick one that moved up and one that moved down, and explain why."

**Key divergence to watch for:**
- **Team Collaboration**: In RICE it scored last (high effort kills it). In ICE, if the learner gives it a high Impact (10) score, it moves up significantly. This reveals that the learner believes Team Collaboration has high strategic impact that RICE's tactical lens misses.
- **Advanced Search**: In RICE it was #1 (low effort + high reach + high confidence). In ICE, a learner who gives it a lower Impact score (maybe 5 — "it's table stakes, not exciting") will rank it lower. This reveals a philosophical question: does "impact" mean users affected or strategic differentiation?

**After comparison, ask the meta-question:**
"When RICE and ICE disagree on the same feature, what does that tell you? Is one framework right and one wrong?"

**Expected insight:** Neither is right or wrong — they measure different things. RICE is data-driven and rewards efficiency. ICE is judgment-driven and rewards strategic bets. When they disagree, you have a real decision: do you optimize for efficient delivery of certain value, or take a bet on higher-uncertainty, higher-upside features? That's a product philosophy question, not a math question.

**Run Quiz Checkpoint 2 after ICE discussion.**

---

### Quiz Checkpoint 2 — Framework Divergence

**Q1:** "ICE is often described as 'fast but less rigorous' than RICE. When would you choose ICE over RICE, and for what type of product or team?"
- ICE when: early stage (no reliable usage data for Reach), fast-moving teams needing quick prioritization in growth experiments, hypothesis-heavy backlogs where everything is uncertain (low Confidence overall makes RICE's precision meaningless). RICE when: mature product with analytics, mixed backlog of proven and speculative ideas, team with enough data to estimate Reach reliably.

**Q2:** "Your Head of Engineering looks at your RICE rankings and says: 'We should always pick the highest-scored item, no matter what.' What's wrong with this approach?"
- RICE scores are only as good as their input estimates. Using them mechanically ignores: strategic dependencies (Feature B requires Feature A first), qualitative insights that estimates don't capture, team energy and motivation (a team excited about AI collaboration will execute better than a team executing grudging Advanced Search work), and the framework's known blind spots (RICE doesn't capture strategic value or network effects).

**Q3:** "Feature 4 (Team Collaboration) scored last in RICE but may be strategically the most important feature for Notely's 3-year growth. How do you handle this tension in a real prioritization conversation with leadership?"
- Acknowledge the limitation explicitly: "RICE is telling us the safe, efficient bet. But RICE can't capture long-term strategic value. Here's my independent strategic case for Team Collaboration: [Notion's network effects, B2B expansion opportunity, CAC reduction through word-of-mouth]. I'd recommend we either (a) plan Team Collaboration for a future quarter with a dedicated team and not let RICE bury it, or (b) break it into a Phase 1 that's smaller and scores better on RICE."

---

### Opportunity Score Stage

**Setup:**
"Now let's look at this from a different angle. Opportunity Score doesn't rank solutions — it helps you understand which *customer problems* deserve attention. I'm going to give you survey data from Notely users.

For each of 6 problem areas, we surveyed 500 active users and asked: (1) How important is solving this to you? (1–10) and (2) How satisfied are you with how Notely currently handles this? (1–10).

**Opportunity Score = Importance + max(Importance − Satisfaction, 0)**

| Problem Area | Importance (avg) | Satisfaction (avg) |
|-------------|------------------|-------------------|
| Finding notes quickly when I need them | 9.1 | 5.4 |
| Writing faster and more efficiently | 7.8 | 6.2 |
| Never losing work due to accidents | 8.6 | 4.1 |
| Collaborating with teammates | 7.4 | 3.8 |
| Accessing notes when offline | 6.9 | 3.5 |
| Creating consistent note structures | 7.1 | 5.9 |

Calculate the Opportunity Score for each problem area. Rank them."

**Reference Opportunity Scores:**
1. Finding notes quickly: 9.1 + max(9.1−5.4, 0) = 9.1 + 3.7 = **12.8** ← #1
2. Writing faster: 7.8 + max(7.8−6.2, 0) = 7.8 + 1.6 = **9.4**
3. Never losing work: 8.6 + max(8.6−4.1, 0) = 8.6 + 4.5 = **13.1** ← actually #1
4. Collaborating with teammates: 7.4 + max(7.4−3.8, 0) = 7.4 + 3.6 = **11.0** ← #3
5. Offline access: 6.9 + max(6.9−3.5, 0) = 6.9 + 3.4 = **10.3** ← #4
6. Consistent note structures: 7.1 + max(7.1−5.9, 0) = 7.1 + 1.2 = **8.3**

**Opportunity Score Ranking:**
1. Never losing work (13.1) → maps to **Version History**
2. Finding notes quickly (12.8) → maps to **Advanced Search**
3. Collaborating with teammates (11.0) → maps to **Team Collaboration**
4. Offline access (10.3) → maps to **Offline Mode**
5. Writing faster (9.4) → maps to **AI Writing Assistant**
6. Consistent note structures (8.3) → maps to **Custom Templates**

**After the learner calculates scores, ask the synthesis question:**
"Look at how the Opportunity Score ranking compares to the RICE ranking. What do you notice? Is there a feature that ranks very differently between the two? What does that tell you?"

**Key insight to draw out:**
- **Team Collaboration** ranks low in RICE (#8) but high in Opportunity Score (#3). This reveals: customers *want* collaboration (high importance, very low satisfaction = big gap), but RICE penalizes it because it's expensive and uncertain. The opportunity is real; the execution risk is high. These are different things.
- **Version History** ranks low in RICE but #1 in Opportunity Score. Users deeply care about not losing work (high importance), and they're very unsatisfied with Notely's current state (no versioning = losing work is a real risk). RICE gives it a moderate score because Reach (90K) isn't the highest — but those 90K users are highly motivated.

**Ask the final synthesis question:**
"Given all three frameworks, what would you build this quarter? Give me your recommendation with 3 reasons, and tell me which framework(s) most influenced your decision."

**Evaluate their recommendation for:**
- Does it acknowledge that frameworks give different answers?
- Does it explain which framework is most credible for this context?
- Does it account for strategic vs. tactical considerations?
- Is it specific (one major feature + rationale) rather than vague?

**Run Quiz Checkpoint 3 after synthesis.**

---

### Quiz Checkpoint 3 — Framework Selection & Prioritization Philosophy

**Q1:** "Dan Olsen's Opportunity Score ranks problems, not features. Why is that an important distinction? What mistake does it help you avoid?"
- Opportunity Score keeps you in the problem space before jumping to solutions. The mistake it prevents: building a feature (solution) before validating that the underlying problem is important and underserved. A high Opportunity Score means users care a lot and are dissatisfied — that's a validated problem worth solving. Then you can use RICE/ICE to evaluate which solution to build for that problem.

**Q2:** "The HiPPO effect means the highest-paid person in the room determines priorities. How do prioritization frameworks defend against this, and where do they fail to defend against it?"
- Frameworks provide transparent, data-backed rationale that makes it harder (but not impossible) to override with opinion alone. "I disagree with your AI feature prioritization" is harder to maintain when you have a RICE score of 52K vs. Advanced Search at 114K. But frameworks fail when: (a) the HiPPO changes the input estimates ("I think Reach for AI is 500K, not 150K"), (b) the framework is applied after the decision is made (post-hoc rationalization), (c) non-quantifiable strategic factors the HiPPO cares about genuinely aren't captured in the framework.

**Q3:** "When should you NOT use a prioritization framework, and rely on pure strategic judgment instead?"
- When the decision is primarily about strategy, not tactics (e.g., should we enter the enterprise market at all?). When all options have highly uncertain estimates (frameworks create false precision). When you're choosing between options that serve fundamentally different user segments (frameworks assume commensurable value). When the decision requires input from stakeholders who won't trust a black-box formula (relationship capital > numerical output). Judgment is always involved — frameworks structure judgment, they don't replace it.

---

### Closing the Module

After Quiz Checkpoint 3, provide a comprehensive summary:
1. **What you practiced**: RICE, ICE, Opportunity Score applied to a real backlog; framework comparison and synthesis
2. **Key frameworks used**: RICE (Intercom), ICE (Sean Ellis), Opportunity Score (Dan Olsen)
3. **Most important insight**: What happened when the frameworks disagreed — and why that's the most valuable learning
4. **Performance summary**: 2 specific strengths + 1 growth area
5. **Recommended next step**: "If you want to practice defending your prioritization to skeptical stakeholders, try the `learn-stakeholder-management` module."

---

### Adaptive Difficulty Rules

- **Math errors**: Correct them gently and move on — this isn't a math test, it's a judgment test.
- **Struggling with framework rationale**: Offer the principle before asking for application. "Before you score ICE Ease for Team Collaboration, let me explain what Ease is capturing — it's essentially the inverse of effort. How long does your engineering team think it would take?"
- **Advanced learner**: "The AI Writing Assistant uses a Confidence of 70% in our RICE estimates. In reality, how would you actually estimate Confidence? What data sources would you consult?"
- **Always end with the strategic synthesis question** — that's where the real learning happens.

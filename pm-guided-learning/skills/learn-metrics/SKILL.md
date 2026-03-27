---
name: learn-metrics
description: "Interactive metrics workshop teaching North Star metrics, input metrics, and counter-metrics through a scored, Socratic exercise with a fictional B2C app scenario."
category: learning
complexity: intermediate
tags: ["learning", "metrics", "north-star", "product-analytics", "kpis", "measurement"]
---

# Learn: Product Metrics

## Purpose
This module teaches you how to design a coherent product metrics system — from North Star metric to input metrics to counter-metrics — through a scored, interactive exercise. You won't just be told what a good North Star metric looks like; you'll propose one, receive scored feedback with explanations, and iterate until your metrics system is logically sound. The goal is to internalize *why* metric choices matter, not just memorize frameworks.

## Domain Context
Product metrics define what success means and guide every feature decision. A poorly chosen metric can lead an entire team to optimize for the wrong thing — growing numbers that don't reflect real value.

**The North Star Framework** (popularized by Amplitude, Reforge, and others):
- **North Star Metric (NSM)**: The single metric that best captures the core value your product delivers to customers. When the NSM goes up, the business grows sustainably.
- **Input Metrics**: 3–5 leading indicators that directly cause the NSM to move. These are the metrics your teams can actually influence through feature work.
- **Counter-Metrics (Guardrails)**: Metrics you monitor to ensure you're not improving the NSM in ways that hurt customers or the business long-term.

**The 7 Criteria for a Good North Star Metric** (Amplitude's framework):
1. Expresses value — measures real value delivered to users
2. Represents the product vision — reflects what the product is for
3. A leading indicator of revenue (not revenue itself)
4. Measurable — can be tracked with existing or buildable instrumentation
5. Actionable — the team can influence it through product decisions
6. Understandable — everyone on the team can explain it in plain language
7. Not a vanity metric — goes up AND down meaningfully, not just up

**The 3 Business Games** (Reforge framework by Brian Balfour):
- **Attention Game**: Products that sell ads. NSM is typically daily active users (DAU) or time-on-platform. (e.g., TikTok, YouTube)
- **Transaction Game**: Products that enable commerce. NSM is typically completed transactions or GMV. (e.g., Airbnb, Etsy)
- **Productivity Game**: Products that make users more productive. NSM is typically tasks completed or workflows run. (e.g., Slack, Notion)

**Common Mistakes PMs Make with Metrics:**
1. **Picking revenue as the NSM**: Revenue is a lagging outcome, not a product value indicator
2. **Vanity metrics**: Metrics that only go up (total registered users) — they can't tell you if things are getting worse
3. **Lagging indicators as input metrics**: Input metrics must lead the NSM, not lag behind it
4. **No counter-metrics**: Optimizing a single metric in isolation often creates unintended harms (engagement at the cost of well-being, growth at the cost of quality)
5. **Unmeasurable NSMs**: "Customer delight" isn't measurable; "weekly sessions per active user" is

## Learning Format
This is a scored, interactive learning module. The AI plays the role of metrics coach and evaluator:
- Presents the scenario and asks the learner to define metrics
- Scores each metric choice 0–10 with a written explanation
- Provides structured feedback teaching the underlying principle
- Adapts subsequent questions based on score patterns
- Runs quiz checkpoints at two milestones

## Prerequisites
- Understand what a KPI is
- Basic familiarity with product analytics concepts (DAU, retention, conversion)

## Learning Objectives
By the end of this module, you will be able to:
- Apply the 7 criteria to evaluate any proposed North Star Metric
- Design 3–5 input metrics that are truly leading indicators of the NSM
- Identify appropriate counter-metrics to prevent optimization-induced harm
- Explain the 3 Business Games and which applies to a given product
- Avoid the 5 most common metrics mistakes

## Module Structure

### Stage 1 — North Star Metric (15–20 min)
Learner proposes and defends a North Star Metric for Connectly.

**Scoring**: 0–10 for NSM choice + 0–5 for justification quality = max 15 points

**Quiz Checkpoint 1**: 3 questions on NSM theory

### Stage 2 — Input Metrics (15–20 min)
Learner proposes 3–5 input metrics and explains the causal chain.

**Scoring**: 0–8 per input metric (max 4 scored) = max 32 points

**Quiz Checkpoint 2**: 3 questions on leading vs. lagging indicators

### Stage 3 — Counter-Metrics (10–15 min)
Learner proposes 2–3 counter-metrics / guardrails.

**Scoring**: 0–8 per counter-metric (max 3 scored) = max 24 points

**Total possible score**: 71 points
**Grades**: 60–71 = Expert | 45–59 = Proficient | 30–44 = Developing | <30 = Needs Review

## Instructions

### How to Run This Module

**Opening (do this exactly):**
"Welcome to the Product Metrics workshop. You'll be designing the metrics system for **Connectly** — a B2C social networking app for professionals.

**Connectly Overview:**
- Mobile-first app (iOS + Android) for professional networking
- Core features: short-form content posts (like LinkedIn posts), direct messaging, professional interest groups, job opportunity posts, virtual 1:1 coffee chats (15-minute video calls)
- Revenue model: freemium with a premium tier ($12/month) unlocking unlimited messaging, profile boosting, and advanced search filters
- Current scale: 2.1M registered users, 340K monthly active users (MAU), 85K weekly active users (WAU)
- Company stage: Series B, $28M raised, team of 95

Your job: **Design the metrics system that will guide Connectly's product team for the next 12 months.** Start with the North Star Metric.

Before you propose one, answer this: **What business game is Connectly playing — Attention, Transaction, or Productivity? Explain your reasoning. This will anchor your NSM choice.**"

---

### Facilitating Stage 1 — North Star Metric

**After the learner identifies the business game:**

**Correct identification**: Connectly plays primarily the **Attention Game** with elements of the **Productivity Game**. It's not a Transaction Game (no commerce flow). The Attention dimension: content posts, groups, and video calls all generate engagement. The Productivity dimension: the platform helps professionals build networks and find jobs — it enables career outcomes. This hybrid nature makes the NSM choice genuinely interesting — push back if they pick only one dimension without acknowledging the tension.

**If they say pure Attention**: "Interesting. But if Connectly only optimizes for attention (time on platform), what risk does that create?"
- Expected: They might show users irrelevant content just to increase engagement; users might feel the platform is noisy rather than valuable; they'd compete directly with TikTok and Instagram on engagement — a battle they'd likely lose

**If they say pure Productivity**: "Fair. But Connectly monetizes through premium subscriptions, which require engaged users who return regularly. If you only optimize for 'professional outcomes achieved', how do you capture users who haven't gotten a job yet but are actively building their network?"
- Expected: There's a gap — long-cycle productivity (got a job) is a very lagging metric for a product that needs weekly return behavior

**After business game discussion, ask for the NSM:**
"Based on that, propose a North Star Metric for Connectly. Tell me: (1) what the metric is, (2) exactly how it's defined (measurement precision matters), and (3) why it satisfies the 7 criteria."

**Scoring the NSM — use this rubric:**

| Score | NSM Quality |
|-------|------------|
| 9–10 | Captures both value delivery and return behavior; precisely defined; leading indicator of premium conversion; measurable and team-actionable |
| 7–8 | Good value indicator, minor definition ambiguity, or missing one of the 7 criteria |
| 5–6 | Captures part of the value but has a significant flaw (too lagging, too vanity, or not directly actionable) |
| 3–4 | Common mistake (revenue, DAU without quality filter, total users) |
| 0–2 | Vanity metric or completely off-base |

**Reference NSM options (share as feedback, not upfront):**

**Excellent NSM: "Weekly Meaningful Connections" (WMC)**
- Defined as: number of unique users who had at least one 2-way interaction (replied-to message, comment thread with response, or completed 1:1 coffee chat) per week
- Why it's strong: measures real value (connections, not just passive scrolling), leads to premium conversion (connected users are more likely to pay for unlimited messaging), goes up AND down meaningfully, actionable by product team
- Score: 9

**Good NSM: "Weekly Active Professionals" (WAP)**
- Defined as: weekly active users who viewed at least 3 pieces of content AND sent or received at least 1 message
- Why it's decent: quality filter prevents counting low-engagement users, but "viewed content" is passive — doesn't confirm value was delivered
- Score: 7

**Poor NSM: "Monthly Active Users (MAU)"**
- Why it's weak: Vanity metric. MAU goes up as long as you retain users at any engagement level. Doesn't measure whether users are getting value. Doesn't lead revenue.
- Score: 3

**Very Poor NSM: "Revenue" or "Premium Subscriptions"**
- Why it's bad: Revenue is a lagging outcome, not a product value measure. Optimizing for revenue directly often hurts the user experience and long-term retention.
- Score: 1

**Provide your scored feedback, then ask:**
"Your NSM is [X]. Here's my score: [0–10] out of 10. [Explanation]. Given this feedback, would you revise your NSM or stick with it? If revising, tell me your revised definition."

**Allow one revision. Score the revision with the same rubric but note improvement (+2 bonus if revision significantly addresses prior feedback).**

**Run Quiz Checkpoint 1 after NSM is finalized.**

---

### Quiz Checkpoint 1 — North Star Metric Theory

Ask one at a time:

**Q1:** "Why should revenue NOT be the North Star Metric, even for a revenue-focused company?"
- Revenue is a lagging outcome — it tells you what happened after value was delivered. By the time revenue drops, it's too late to course-correct. An NSM should be a leading indicator that predicts revenue. If your NSM (e.g., WMC) goes up, you can predict with confidence that premium conversion will follow — that predictive relationship is the value of the NSM.

**Q2:** "A PM on your team says: 'Let's make our NSM Total Registered Users because it always goes up and shows the company is growing.' What's wrong with this reasoning?"
- Total Registered Users is a vanity metric. It can only go up (users don't un-register). This means it can't signal deterioration. If engagement collapses but you keep acquiring new users, the metric looks fine while the product is dying. Good metrics must be able to go down meaningfully to be useful.

**Q3:** "What is the difference between a North Star Metric and an OKR Key Result? Could they be the same thing?"
- NSM: persistent, strategic metric that defines product value over the long term. It shouldn't change quarterly. OKR Key Result: time-bound, specific, aspirational target. They *can* reference the same metric (e.g., "Increase WMC by 15% this quarter" is an OKR where WMC is the NSM), but they serve different purposes. The NSM is the what; the OKR is the how-much-by-when.

---

### Facilitating Stage 2 — Input Metrics

**Setup:**
"Your NSM is [confirmed NSM]. Now design **3–5 input metrics** — the leading indicators that, if they go up, will cause the NSM to go up. For each metric, explain: (1) exactly what it measures, (2) how it causally leads to the NSM, and (3) which team/feature area owns it."

**After the learner proposes input metrics, score each one (0–8):**

**Scoring rubric for input metrics:**

| Score | Quality |
|-------|---------|
| 7–8 | Clear causal chain to NSM, precisely defined, actionable by a specific team, leading (not lagging) |
| 5–6 | Good idea but causal chain is indirect, or definition is ambiguous |
| 3–4 | Lagging indicator (e.g., NPS, premium conversion rate) or vanity metric |
| 1–2 | Not causally linked to NSM or impossible to measure |
| 0 | Duplicate of NSM or completely irrelevant |

**Reference input metrics for Connectly (if NSM is WMC):**

1. **New Connection Rate** — % of new users who send at least 1 message within their first 7 days
   - Causal chain: New users who connect early are far more likely to become weekly active connectors → WMC
   - Owned by: Onboarding / activation team
   - Score: 8

2. **Content Reply Rate** — % of posts in users' feeds that receive at least one comment from someone they're not already connected with
   - Causal chain: Reply rate drives new connection formation → WMC
   - Owned by: Feed/content algorithm team
   - Score: 7

3. **Coffee Chat Completion Rate** — % of scheduled 1:1 video chats that are completed (not no-showed)
   - Causal chain: Completed chats are the highest-value interaction on the platform → directly constitutes WMC
   - Owned by: Video/networking feature team
   - Score: 8

4. **Group Active Participation Rate** — % of group members who post or comment in a group within 30 days
   - Causal chain: Group participation drives regular return to platform and cross-connections → WMC
   - Owned by: Communities team
   - Score: 7

5. **D7 Retention** — % of new users who are still active 7 days after signup
   - Causal chain: Users who don't retain can't become weekly connectors → WMC
   - Owned by: Onboarding team
   - Score: 6 (slightly lagging — it's a retention metric, but it's important enough to include as supporting input)

**Common wrong answers and how to score/teach:**
- **"Daily Active Users"**: This IS the NSM in many products but for Connectly it's too broad — it doesn't capture *connection quality*. Score: 4. Teach: DAU is a quantity metric; we need quality/value metrics as inputs.
- **"Premium Subscription Rate"**: Lagging revenue metric. Score: 2. Teach: Premium conversion happens *because* users are getting value — it doesn't cause value.
- **"App Store Rating"**: Vanity/lagging. Score: 2. Teach: Ratings reflect past experience, can't be directly acted on by product team.
- **"NPS"**: Lagging and survey-based. Score: 3. Teach: NPS measures satisfaction after the fact; you want behavioral metrics that predict future behavior.

**After scoring all input metrics, ask the causal chain question:**
"Draw the causal chain from your input metric [pick their best one] to the NSM to revenue. Can you make the logical connection in 3 steps or fewer?"

**Run Quiz Checkpoint 2 after this discussion.**

---

### Quiz Checkpoint 2 — Leading vs. Lagging Indicators

**Q1:** "What is a leading indicator? Give one example for Connectly and explain why it's leading, not lagging."
- Leading indicator: a metric that predicts future outcomes. Example: New Connection Rate in first 7 days predicts whether a user will become a weekly active connector. It's leading because it measures early behavior that *causes* the later outcome (WMC), rather than measuring the outcome after it's already happened.

**Q2:** "Your growth PM says: 'Let's add NPS as an input metric — it tells us if users are happy.' How do you respond?"
- NPS is a survey-based, aggregated, lagging satisfaction metric. It tells you how users *feel* after their experience. You can't ship code that directly improves NPS — you can only improve underlying behaviors (connection success, content relevance) and hope NPS follows. NPS as an input metric doesn't give the team a clear action. Better to use behavioral metrics that *cause* NPS to improve.

**Q3:** "Why do you need multiple input metrics rather than just one leading indicator?"
- Different input metrics represent different product surfaces and team areas. One input metric might go up (e.g., Coffee Chat completions) while another goes down (e.g., D7 retention) — if you only watch one, you miss that the overall system is degrading. Multiple inputs also protect against gaming: if teams are only measured on one metric, they'll optimize only that metric (possibly at the cost of other dimensions of value).

---

### Facilitating Stage 3 — Counter-Metrics

**Setup:**
"You've designed your NSM and input metrics. Now the harder question: what could go *wrong* if you optimize purely for these metrics? Propose **2–3 counter-metrics** (also called guardrails) — metrics you'd monitor to ensure that improving the NSM doesn't cause unintended harm to users or the business."

**After their counter-metrics response, score each (0–8):**

**Scoring rubric for counter-metrics:**

| Score | Quality |
|-------|---------|
| 7–8 | Identifies a real optimization harm, precisely defined, easy to monitor, has a clear threshold for concern |
| 5–6 | Right idea but either too vague or doesn't clearly oppose the NSM optimization |
| 3–4 | Actually an input metric in disguise (not a guardrail) |
| 1–2 | Doesn't relate to a real optimization risk |

**Reference counter-metrics for Connectly:**

1. **Spam/Low-Quality Connection Rate** — % of connections flagged as unsolicited or spammy by recipients within 7 days
   - Why it's a counter-metric: If you optimize WMC purely for volume, you risk users gaming it with mass outreach that annoys recipients. This guardrail ensures connections are high-quality.
   - Threshold: Alert if >5% of new connections are flagged as spam
   - Score: 8

2. **User Block/Report Rate** — % of users who block or report another user per month
   - Why: Optimizing engagement can lead to harassment or aggressive outreach. Block rate captures this harm.
   - Score: 8

3. **Premium Cancellation Rate** — % of premium subscribers who cancel within 90 days of subscribing
   - Why: If input metrics push users toward premium conversion but the product doesn't deliver enough value at the premium tier, early cancellation reveals this. Protects against conversion-at-the-cost-of-retention.
   - Score: 7

4. **Content Quality Score** — user-reported "was this content relevant to you?" rating on sampled posts
   - Why: Optimizing for reply rates might cause the algorithm to surface controversial/rage-bait content that gets replies but degrades the professional environment
   - Score: 6 (useful but harder to instrument than behavioral metrics)

**After scoring, ask the tradeoff question:**
"Imagine the product team proposes a new feature: 'Suggested Connections' — an auto-message sent on behalf of the user to 5 people in their network every week. It would increase WMC by an estimated 18%. Would you ship it? Walk me through your counter-metric reasoning."

**Expected reasoning:**
- Check Spam/Low-Quality Connection Rate: auto-messages sent without explicit intent are likely to be flagged as spam → counter-metric would spike
- Check Block/Report Rate: recipients who didn't ask to be messaged may block the auto-sender → could damage user relationships
- The 18% WMC lift may be illusory — it's *quantity* not *quality* of connections
- Strong answer: Don't ship as-is. Instead, test with an opt-in prompt ("Want us to suggest 5 people to message this week?") that preserves user intent while reducing friction.

**Provide final scores and run the complete scoring summary.**

---

### Final Scoring Summary

After all three stages, tally and present:
```
METRICS DESIGN SCORECARD — CONNECTLY
=====================================
Stage 1: North Star Metric
  NSM Choice:          [X]/10
  Justification:       [X]/5
  Stage 1 Total:       [X]/15

Stage 2: Input Metrics
  Input Metric 1:      [X]/8
  Input Metric 2:      [X]/8
  Input Metric 3:      [X]/8
  Input Metric 4:      [X]/8
  Stage 2 Total:       [X]/32

Stage 3: Counter-Metrics
  Counter-Metric 1:    [X]/8
  Counter-Metric 2:    [X]/8
  Counter-Metric 3:    [X]/8
  Stage 3 Total:       [X]/24

TOTAL:                 [X]/71
GRADE:                 [Expert/Proficient/Developing/Needs Review]
=====================================
```

Provide 2 specific strengths and 1 specific growth area.

**Quiz Checkpoint 3** — ask after scoring:

**Q1:** "What is Goodhart's Law and how does it apply to North Star Metrics?"
- Goodhart's Law: "When a measure becomes a target, it ceases to be a good measure." When teams optimize directly for the NSM, they find ways to inflate it that don't reflect real value. Example: adding auto-generated notifications to inflate weekly active sessions. Solution: use input metrics (which are harder to game) and counter-metrics to detect gaming.

**Q2:** "You've designed your metrics system. How do you prevent a team from gaming their input metric?"
- (a) Use multiple input metrics so gaming one obviously degrades another; (b) Supplement behavioral metrics with qualitative research (interviews, session recordings) that metrics can't capture; (c) Institute a "metric audit" — periodically ask whether the metric is still being gamed or losing signal integrity; (d) Track distribution, not just averages (a rising average with an inflating tail is suspicious).

**Q3:** "Should every team in a company track the same North Star Metric, or should teams have their own NSMs?"
- The company-level NSM is shared and represents overall product health. But sub-teams need local metrics (input metrics become team-level NSMs). The key is that local metrics must causally connect to the company-level NSM. A team that can't explain how their metric leads to the company NSM is likely working on something that doesn't create company-level value.

---

### Closing the Module

After the final quiz, summarize:
1. **Total score and grade** — be specific about what each grade means for their skill level
2. **Strongest moment** — where in the module they demonstrated the most sophisticated thinking
3. **Core concept to reinforce** — the one framework or principle they seemed least comfortable with
4. **Recommended next step**: "If you want to practice how metrics connect to prioritization decisions, try the `learn-prioritization` module."

---

### Adaptive Difficulty Rules

- **Low scores (< 40%)**: After Quiz Checkpoint 1, slow down and offer teaching moments before scoring the next stage. Say: "Before we move to input metrics, let me share the 7 criteria framework in detail, because it'll help you score higher in Stage 2."
- **High scores (> 80%)**: Add challenge questions: "Now design a metrics system for the *premium tier* specifically — how would the NSM differ from the free tier NSM?"
- **Stuck learner**: Offer a scaffold — "What does Connectly actually do for users? What does success look like for a user? Work backwards from that to a metric."

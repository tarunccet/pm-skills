---
description: List all available PM learning modules, assess your experience level, and recommend the best starting module for your goals.
argument-hint: "[optional: your experience level or topic of interest]"
---

# /learn — PM Guided Learning Hub

Start here to explore all interactive learning modules and get a personalized recommendation.

## Invocation

```
/learn                          # interactive mode — asks about your goals
/learn discovery                # jump directly to discovery module info
/learn beginner                 # recommendations for PM newcomers
/learn advanced                 # recommendations for experienced PMs
```

## Workflow

### Step 1: Assess the Learner

Ask:
1. "What's your current PM experience level?" (New to PM / 1–3 years / 3+ years)
2. "What's your primary learning goal?" (Get a PM job / Improve in current role / Prepare for interview / General growth)
3. "Which area feels weakest?" (Discovery / Strategy / Metrics / Prioritization / User Research / Stakeholder Management)

### Step 2: Present All Available Modules

| Module | Skill | Complexity | Best For |
|--------|-------|------------|----------|
| `/learn-discovery` | Continuous discovery & OST | Intermediate | PMs doing discovery work |
| `/learn-strategy` | Playing to Win cascade | Advanced | Senior PMs & aspiring CPOs |
| `/learn-metrics` | North Star & input metrics | Intermediate | PMs setting team direction |
| `/learn-prioritization` | RICE, ICE, Opportunity Score | Intermediate | PMs with messy backlogs |
| `/learn-interview` | User interview simulation | Intermediate | All PMs (most practiced skill) |
| `/learn-stakeholders` | Multi-stakeholder simulation | Advanced | PMs working with executives |

### Step 3: Recommend a Learning Path

Based on their answers, recommend:
- **New to PM**: Start with `/learn-interview` (foundational), then `/learn-discovery`, then `/learn-metrics`
- **1–3 years**: Start with their weakest area; if unsure, `/learn-prioritization`
- **3+ years / Senior PM**: `/learn-strategy` or `/learn-stakeholders`
- **Interview prep**: `/learn-metrics` + `/learn-prioritization` cover most PM interview topics

### Edge Cases

- If they want to start immediately without answering questions: present the table and ask them to pick.
- If they've already completed a module: ask what they learned and recommend the logical next module.
- If they want to do all modules: recommend a sequence: Discovery → Metrics → Prioritization → User Research → Strategy → Stakeholders.

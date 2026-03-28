# pm-guided-learning

Interactive Socratic learning modules for product managers. This plugin teaches PM skills through guided exercises, simulations, and quiz checkpoints — not by producing deliverables, but by helping you *think* like a PM.

## What Is Guided Learning?

Most PM skills plugins produce artifacts: PRDs, roadmaps, interview scripts. This plugin is different.

**Guided learning uses the Socratic method**: the AI asks questions, presents scenarios, waits for your answers, gives feedback, and builds on what you said to go deeper. You discover the frameworks yourself, through experience — which means you actually remember them.

Each module:
- Opens with a realistic scenario, not a lecture
- Asks one question at a time and waits for your answer
- Provides feedback that explains the *why*, not just right/wrong
- Runs quiz checkpoints to reinforce key concepts
- Adapts difficulty based on your responses

## How It Differs From Regular PM Skills

| Regular PM Skills | Guided Learning |
|-------------------|-----------------|
| Produces a deliverable (PRD, roadmap) | Teaches you to produce it yourself |
| Tells you what to do | Asks what you would do |
| One interaction | 20–45 minute guided session |
| Output: a document | Output: a skill |

## Learning Modules (6)

### 1. `learn-discovery` — Continuous Product Discovery
**Complexity**: Intermediate | **Time**: ~45 min

Walk through continuous discovery as PM for TaskFlow, a project management tool. You'll practice mapping user interview insights onto an Opportunity Solution Tree, identifying risky assumptions, and designing lean experiments. Based on Teresa Torres's *Continuous Discovery Habits* and Marty Cagan's Product Trio model.

**You'll learn**: OST mapping, opportunity vs. solution framing, assumption types, experiment design

---

### 2. `learn-strategy` — Product Strategy
**Complexity**: Advanced | **Time**: ~60 min

Build a 3-year product strategy for MindBridge, a B2B wellness app, using Roger Martin's Playing to Win cascade. Make choices at each of the 5 levels, run the Coherence Test, and reverse-engineer a competitor's implied strategy.

**You'll learn**: Playing to Win cascade, competitive moats, Coherence Test, Blue Ocean thinking

---

### 3. `learn-metrics` — Product Metrics Design
**Complexity**: Intermediate | **Time**: ~45 min

Design the metrics system for Connectly, a B2C professional social app — including North Star Metric, input metrics, and counter-metrics. Every choice is scored (0–10) with detailed feedback. Final scorecard at the end.

**You'll learn**: 7 criteria for a good NSM, the 3 Business Games, leading vs. lagging indicators, Goodhart's Law

---

### 4. `learn-prioritization` — Prioritization Frameworks
**Complexity**: Intermediate | **Time**: ~50 min

Apply RICE, ICE, and Opportunity Score to a realistic 8-feature backlog for Notely, a note-taking app. Compare results across frameworks, discover where they diverge, and learn what the divergence reveals about your strategy.

**You'll learn**: RICE, ICE, Opportunity Score (Dan Olsen), when frameworks agree vs. conflict, the HiPPO effect

---

### 5. `learn-user-research` — User Interview Practice
**Complexity**: Intermediate | **Time**: ~30 min

Practice a live user interview with Alex Chen, a marketing manager persona. After 10–15 exchanges, the AI breaks character and provides scored feedback across 5 dimensions: question quality, bias avoidance, JTBD extraction, interview flow, and technique usage.

**You'll learn**: JTBD interviewing, the "last time" technique, the 5 Whys, avoiding leading questions, confirmation bias

---

### 6. `learn-stakeholder-management` — Stakeholder Simulation
**Complexity**: Advanced | **Time**: ~45 min

Present Finova's Q3 roadmap to 4 executives with conflicting priorities: VP Sales wants enterprise features, VP Engineering wants tech debt time, the CEO wants a Series B-ready narrative, and Head of CS wants retention fixes. Navigate the conflict in real-time, then receive scored debrief.

**You'll learn**: RACI model, influence mapping, "disagree and commit," executive communication, coalition-building

---

## Commands (7)

| Command | Description |
|---------|-------------|
| `/learn` | Meta-command: see all modules, get a personalized recommendation |
| `/learn-discovery` | Start the continuous discovery module |
| `/learn-strategy` | Start the product strategy module |
| `/learn-metrics` | Start the metrics design workshop |
| `/learn-prioritization` | Start the prioritization frameworks module |
| `/learn-interview` | Start the user interview simulation |
| `/learn-stakeholders` | Start the stakeholder management simulation |

## Example Interactions

**Starting the metrics module:**
```
You: /learn-metrics
AI:  Welcome to the Product Metrics workshop. You'll be designing the metrics
     system for Connectly — a B2C social networking app for professionals...
     Before you propose a North Star Metric, answer this: What business game
     is Connectly playing — Attention, Transaction, or Productivity?

You: I think it's the Attention game — it's a social app and engagement is
     the core value.

AI:  Interesting. But if Connectly only optimizes for attention, what risk
     does that create for users and the business long-term?
```

**Mid-interview simulation:**
```
You: Alex, do you find it frustrating when your team doesn't update tasks?

AI:  [as Alex] Yeah, it can be... [short answer — you asked a leading question]

     [after interview, as coach]
     That question was leading. You told Alex how to feel before they answered.
     Try instead: "Walk me through what happens when you check on a project's
     status." This gets the same information without contaminating the answer.
```

## Learning Path Recommendations

**New to PM**: `/learn-interview` → `/learn-discovery` → `/learn-metrics`

**Preparing for a PM interview**: `/learn-metrics` → `/learn-prioritization` → `/learn-discovery`

**Senior PM / aspiring CPO**: `/learn-strategy` → `/learn-stakeholders`

**Full curriculum (6–8 hours)**:
`/learn-discovery` → `/learn-metrics` → `/learn-prioritization` → `/learn-interview` → `/learn-strategy` → `/learn-stakeholders`

## Maintainer

Tarun Narang

## License

MIT

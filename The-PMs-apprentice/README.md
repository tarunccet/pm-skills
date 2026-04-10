# The PM's Apprentice

An AI-powered product management tutor — interactive, stateful, and adaptive.

The PM's Apprentice is a **learning MCP server** that guides users through an 11-module PM Foundations Course. Unlike a static course, the apprentice:

- **Remembers you** — tracks your progress, scores, and learning path across sessions
- **Adapts to you** — adjusts recommendations based on your experience, goals, and behavior
- **Tests you** — scored quizzes, graded exercises, and realistic simulations at every stage
- **Guides you** — Socratic teaching through real PM scenarios, not lectures

## Quick Start

### With Claude Desktop / Claude Code

Add to your MCP config (`claude_desktop_config.json` or `.mcp.json`):

```json
{
  "mcpServers": {
    "pms-apprentice": {
      "command": "npx",
      "args": ["-y", "the-pms-apprentice"]
    }
  }
}
```

### With Cursor / Windsurf

Same config — just add the server to your MCP settings.

### From Source

```bash
git clone https://github.com/tarunccet/The-PMs-apprentice.git
cd The-PMs-apprentice
npm install
npm run build
```

Then add to your MCP config:

```json
{
  "mcpServers": {
    "pms-apprentice": {
      "command": "node",
      "args": ["/path/to/The-PMs-apprentice/dist/index.js"]
    }
  }
}
```

## How It Works

```
┌─────────────────────────────────────────────────────────┐
│  UI / Chat Interface                                     │
│  (Claude Desktop, Cursor, Web App, etc.)                │
└────────────────────┬────────────────────────────────────┘
                     │ MCP Protocol
┌────────────────────▼────────────────────────────────────┐
│  The PM's Apprentice MCP Server                         │
│                                                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │ Learner  │  │ Progress │  │ Adaptive │              │
│  │  Store   │  │ Tracker  │  │  Engine  │              │
│  └──────────┘  └──────────┘  └──────────┘              │
│                                                          │
│  ┌──────────────────────────────────────┐               │
│  │  Curriculum (11 modules × stages)    │               │
│  └──────────────────────────────────────┘               │
└─────────────────────────────────────────────────────────┘
```

The MCP server is **stateful** — it persists learner profiles, progress, scores, and behavioral signals to disk. The AI agent (Claude, GPT, etc.) uses these 10 tools to orchestrate the learning experience:

## MCP Tools

| Tool | Description |
|------|-------------|
| `enroll` | Create a learner profile with diagnostic and personalized learning path |
| `get_profile` | Get learner profile, progress summary, and behavioral analysis |
| `get_course` | Full course outline with per-module completion status |
| `start_module` | Begin or resume a module — returns curriculum content and stage info |
| `advance_stage` | Complete current stage and move to next, with optional behavioral signals |
| `record_checkpoint` | Record quiz/exercise scores with agent feedback |
| `complete_module` | Finalize a module with debrief and get next recommendations |
| `get_module_content` | Get curriculum content for any module or specific stage |
| `get_recommendations` | Personalized next-step recommendations based on progress and behavior |
| `reset_progress` | Reset a module to retake it |

### Tool Response Format

Every tool returns a structured JSON envelope designed for UI rendering:

```json
{
  "success": true,
  "data": {
    "module_id": "foundations",
    "stage_id": "stage-1",
    "progress": { "..." }
  },
  "message": "Human-readable markdown for display",
  "nextAction": {
    "tool": "advance_stage",
    "description": "Move to the next stage",
    "params": { "learner_id": "...", "module_id": "foundations" }
  }
}
```

- `data` — Structured data for the UI to render (progress bars, scores, module cards)
- `message` — Markdown text for the AI agent to relay to the user
- `nextAction` — Suggested next tool call (enables UI "Continue" buttons)

## Course Structure

**5 Units · 11 Modules · ~10 hours**

### Unit 1: Foundations
1. **PM Foundations** (45 min, Beginner) — PM role, mindset, skill tree
2. **User Interview Practice** (30 min, Intermediate) — Simulated interview with scored feedback
3. **Continuous Discovery** (45 min, Intermediate) — OST, assumption mapping, experiment design

### Unit 2: Strategy
4. **Product Metrics** (45 min, Intermediate) — North Star, input metrics, counter-metrics
5. **Prioritization Frameworks** (50 min, Intermediate) — RICE, ICE, Opportunity Score
6. **Product Strategy** (60 min, Advanced) — Playing to Win cascade, Coherence Test

### Unit 3: Execution & Delivery
7. **Product Execution** (50 min, Intermediate) — PRDs, roadmaps, OKRs, sprint planning
8. **Stakeholder Management** (45 min, Advanced) — Multi-executive negotiation simulation

### Unit 4: Modern PM
9. **AI Product Management** (50 min, Intermediate) — Model eval, responsible AI, prompts
10. **Vibe Coding for PMs** (35 min, Beginner) — AI coding tools, spec writing, prototyping

### Unit 5: Capstone
11. **Capstone Project** (120 min, Advanced) — Full-lifecycle case study across all frameworks

## Stateful Learning

### Learner Profile
- Experience level and goals captured during enrollment
- Self-assessed skill scores across 6 PM areas
- Personalized learning path generated from profile

### Progress Tracking
- Per-stage completion with timestamps
- Quiz scores and exercise grades accumulated per module
- Overall course completion percentage and aggregate score

### Behavioral Signals
The agent can record behavioral observations during teaching:
- `struggling` — Learner needs simpler explanations or prerequisite review
- `excelling` — Learner can handle increased challenge or skip basics
- `rushing` — Learner needs encouragement to engage deeply
- `thorough` — Learner is engaging well; maintain current pace
- `curious` — Learner asks good questions; provide more depth
- `disengaged` — Learner may need a break or topic change

The adaptive engine uses these signals to recommend difficulty adjustments.

### Learning Paths

| Goal | Recommended Path |
|------|-----------------|
| Complete Beginner | All 11 modules in order |
| Career Switcher | M1 → self-assess → deep-dive gaps → M11 |
| Interview Prep | M4 → M5 → M3 → M8 → M11 |
| Senior PM / CPO | M6 → M8 → M9 → M11 |
| AI Product Builder | M9 → M10 → M11 |

## Building a UI

This MCP server is designed to power a UI-based learning experience. Key design decisions:

1. **Structured responses** — Every tool returns `data` (JSON for rendering) + `message` (markdown for display)
2. **Next actions** — Every response suggests what the UI should offer next
3. **Progress state** — All progress is server-side; the UI just renders it
4. **Behavioral signals** — The agent can flag learner behavior for the UI to react to

### Integration Points for a Web UI

```
GET /api/profile/:id        → calls get_profile
GET /api/course/:id?        → calls get_course
POST /api/enroll             → calls enroll
POST /api/module/start       → calls start_module
POST /api/stage/advance      → calls advance_stage
POST /api/checkpoint/record  → calls record_checkpoint
POST /api/module/complete    → calls complete_module
GET /api/content/:module     → calls get_module_content
GET /api/recommendations/:id → calls get_recommendations
POST /api/reset/:module      → calls reset_progress
```

## Development

```bash
npm install          # Install dependencies
npm run build        # Compile TypeScript
npm run dev          # Watch mode
npm start            # Run the MCP server
```

## Relationship to pm-skills

This repo is a focused fork of the [pm-guided-learning plugin](https://github.com/tarunccet/pm-skills) from the pm-skills repository. The curriculum content (SKILL.md files) comes from pm-skills. The MCP server, stateful engine, and adaptive layer are new.

## License

MIT — Tarun Narang

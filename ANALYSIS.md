# Analysis: tarunccet/pm-skills vs product-on-purpose/pm-skills

> **Author:** AI-assisted analysis  
> **Date:** April 2026  
> **Purpose:** Gap analysis, SWOT, and MCP/npm packaging guide

---

## Table of Contents

1. [Repository Overviews](#1-repository-overviews)
2. [Skills Gap Analysis](#2-skills-gap-analysis)
   - 2.1 [Skills in Reference But Missing Here](#21-skills-in-reference-but-missing-here)
   - 2.2 [Skills Unique to This Repo (Strengths)](#22-skills-unique-to-this-repo-strengths)
   - 2.3 [Partially Overlapping Skills (Different Names / Angles)](#23-partially-overlapping-skills-different-names--angles)
   - 2.4 [Structural and Process Gaps](#24-structural-and-process-gaps)
3. [SWOT Analysis](#3-swot-analysis)
4. [MCP Server & npm Packaging — How It Works and How to Do It](#4-mcp-server--npm-packaging--how-it-works-and-how-to-do-it)
   - 4.1 [What is MCP (Model Context Protocol)?](#41-what-is-mcp-model-context-protocol)
   - 4.2 [How pm-skills-mcp Works](#42-how-pm-skills-mcp-works)
   - 4.3 [How to Build Your Own MCP Server for This Repo](#43-how-to-build-your-own-mcp-server-for-this-repo)
   - 4.4 [npm Packaging Explained](#44-npm-packaging-explained)
   - 4.5 [Step-by-Step: Publish Your Own `pm-skills-mcp`](#45-step-by-step-publish-your-own-pm-skills-mcp)

---

## 1. Repository Overviews

### This Repository — `tarunccet/pm-skills`

| Property | Detail |
|---|---|
| **Origin** | Heavily extended fork of `phuryn/pm-skills` |
| **Structure** | Plugin-based: `{plugin}/skills/{skill-name}/SKILL.md` |
| **Plugins** | 9 plugins |
| **Skills** | 83 skills |
| **Commands** | 56 commands |
| **License** | MIT |
| **Distribution** | Git clone only |
| **Unique strengths** | AI PM, Vibe Coding, Guided Learning, Data Analytics, Go-to-Market |

**Plugins:**
1. `pm-ai-product-management` — 8 skills, 5 commands *(new)*
2. `pm-data-analytics` — 7 skills, 6 commands
3. `pm-execution` — 17 skills, 12 commands *(largest)*
4. `pm-go-to-market` — 7 skills, 4 commands
5. `pm-guided-learning` — 8 skills, 10 commands *(new)*
6. `pm-market-research` — 6 skills, 3 commands
7. `pm-product-discovery` — 10 skills, 5 commands
8. `pm-product-strategy` — 13 skills, 6 commands
9. `pm-vibe-coding` — 7 skills, 6 commands *(new)*

---

### Reference Repository — `product-on-purpose/pm-skills`

| Property | Detail |
|---|---|
| **Origin** | Independently developed (fork of `phuryn/pm-skills`) |
| **Structure** | Flat: `skills/{phase-skill}/SKILL.md` |
| **Framework** | Triple Diamond (Discover → Define → Develop → Deliver → Measure → Iterate) |
| **Skills** | 29 skills (25 phase + 1 foundation + 3 utility) |
| **Commands** | 30 command docs |
| **License** | Apache 2.0 |
| **Distribution** | Git clone, ZIP release, npm (`npx pm-skills-mcp`) |
| **MCP Server** | `pm-skills-mcp` — 38 MCP tools, published on npm |
| **Unique strengths** | Triple Diamond structure, workflow bundles, MCP server, skill lifecycle tools |

**Skill phases (Triple Diamond):**
- 🔍 **Discover**: interview-synthesis, competitive-analysis, stakeholder-summary
- 📋 **Define**: problem-statement, hypothesis, opportunity-tree, jtbd-canvas
- 💡 **Develop**: solution-brief, spike-summary, adr, design-rationale
- 🚀 **Deliver**: prd, user-stories, acceptance-criteria, edge-cases, launch-checklist, release-notes
- 📊 **Measure**: experiment-design, instrumentation-spec, dashboard-requirements, experiment-results
- 🔄 **Iterate**: retrospective, lessons-log, refinement-notes, pivot-decision
- 🧭 **Foundation**: persona
- 🔧 **Utility**: pm-skill-builder, pm-skill-validate, pm-skill-iterate

---

## 2. Skills Gap Analysis

### 2.1 Skills in Reference But Missing Here

These are skills that exist in `product-on-purpose/pm-skills` and are **not covered** (even partially) in this repository:

#### 📋 Define Phase — Highest Priority Gap

| Missing Skill | What it Does | Why it Matters |
|---|---|---|
| `problem-statement` | Crystal-clear problem framing before any solution work | Prevents jumping to solutions; foundation of good PM practice |
| `hypothesis` | Testable assumptions with success metrics | Core of lean/agile validation loops; essential for experiment-first culture |
| `jtbd-canvas` | Jobs to be Done visual canvas | Systematic JTBD analysis; distinct from job-stories (which are user story format) |

#### 💡 Develop Phase — High Priority Gap

| Missing Skill | What it Does | Why it Matters |
|---|---|---|
| `solution-brief` | One-page solution pitch before committing to a PRD | Lightweight decision gate between discovery and full requirements |
| `spike-summary` | Document technical explorations and findings | Captures learning from engineering spikes; prevents knowledge loss |
| `adr` | Architecture Decision Records (Nygard format) | Industry standard for documenting *why* technical decisions were made |
| `design-rationale` | Document why a design choice was made | Reduces re-litigation; creates institutional memory |

#### 🚀 Deliver Phase — High Priority Gap

| Missing Skill | What it Does | Why it Matters |
|---|---|---|
| `acceptance-criteria` | Given/When/Then testable scenarios | Bridges PM ↔ QA; critical for definition of done |
| `edge-cases` | Error states, boundaries, recovery paths | Often overlooked; reduces post-launch defects significantly |
| `launch-checklist` | End-to-end launch step tracker | Prevents missed steps during high-stress launches |

#### 📊 Measure Phase — Medium Priority Gap

| Missing Skill | What it Does | Why it Matters |
|---|---|---|
| `dashboard-requirements` | Analytics dashboard specs | Standardizes what gets built vs. what gets measured |
| `experiment-results` | Document learnings from A/B tests | Closes the build→measure→learn loop; creates experiment history |

#### 🔄 Iterate Phase — Medium Priority Gap

| Missing Skill | What it Does | Why it Matters |
|---|---|---|
| `lessons-log` | Ongoing log of learnings across sprints/launches | Builds organizational memory; prevents repeating mistakes |
| `refinement-notes` | Capture backlog refinement outcomes | Institutionalizes refinement process; keeps stories well-groomed |
| `pivot-decision` | Evidence-based pivot/persevere framework | Structures one of the most consequential PM decisions |

#### 🔧 Utility Skills — Strategic Gap

| Missing Skill | What it Does | Why it Matters |
|---|---|---|
| `pm-skill-builder` | Create new skills with gap analysis + guided drafting | Enables the community to self-service skill creation |
| `pm-skill-validate` | Audit a skill against conventions and quality criteria | Maintains quality as the library scales |
| `pm-skill-iterate` | Apply targeted improvements from feedback/validation | Enables iterative skill improvement with structured output |

**Total missing skills: 16** (out of 29 in the reference repo)

---

### 2.2 Skills Unique to This Repo (Strengths)

These skills exist **only** in this repository — they are not in the reference repo:

#### 🤖 pm-ai-product-management (8 skills — entirely unique)

| Skill | What it Does |
|---|---|
| `ai-build-buy-partner` | Evaluate AI capability sourcing strategy |
| `ai-data-strategy` | Training data, labeling, feedback loops |
| `ai-feature-definition` | Complete AI feature specs with confidence thresholds and fallback logic |
| `ai-incident-response` | Handle AI model failures, bias incidents, safety issues |
| `ai-model-evaluation` | Evaluate and compare LLMs for product fit |
| `ai-user-research` | Research user expectations and trust calibration for AI |
| `prompt-engineering` | Craft production-quality prompts and guardrails |
| `responsible-ai` | Assess AI features for ethical risks, bias, safety |

*This entire domain is absent from the reference repo. As AI products grow dominant, this is a major differentiator.*

#### 📊 pm-data-analytics (7 skills — mostly unique)

| Skill | What it Does |
|---|---|
| `ab-test-analysis` | Statistical significance, sample size validation |
| `cohort-analysis` | Retention curves, feature adoption by cohort |
| `event-tracking-plan` | Analytics instrumentation design |
| `funnel-analysis` | Conversion funnel analysis and improvement |
| `metric-definition` | Define operational vs. vanity vs. actionable metrics |
| `product-metrics` | North Star, input metrics, health metrics |
| `sql-queries` | Generate SQL from natural language |

*Note: `event-tracking-plan` partially overlaps with reference's `instrumentation-spec`.*

#### 🚀 pm-go-to-market (7 skills — mostly unique)

| Skill | What it Does |
|---|---|
| `growth-loops` | Design sustainable growth loops/flywheels |
| `gtm-motions` | Evaluate GTM motions (PLG, sales-led, etc.) |
| `gtm-strategy` | Full GTM strategy and launch plan |
| `ideal-customer-profile` | ICP with JTBD and needs |
| `marketing-ideas` | Creative marketing ideas with channels |
| `positioning-ideas` | Product positioning vs. competitors |
| `product-name` | Product name brainstorming |

#### 🎓 pm-guided-learning (8 skills — entirely unique)

Interactive Socratic learning modules — not artifact-producing but learning-enabling:

| Skill | Topic |
|---|---|
| `learn-ai-pm` | AI product management |
| `learn-discovery` | Continuous discovery (Teresa Torres OST) |
| `learn-metrics` | NSM, input metrics, counter-metrics |
| `learn-prioritization` | RICE, ICE, Opportunity Score |
| `learn-stakeholder-management` | Stakeholder alignment simulations |
| `learn-strategy` | Roger Martin's "Playing to Win" |
| `learn-user-research` | Simulated user interview practice |
| `learn-vibe-coding` | Vibe coding tools, specs, building, shipping |

*Entirely absent from the reference repo. This is the only PM skills library with interactive learning modules.*

#### 🛠️ pm-vibe-coding (7 skills — mostly unique)

| Skill | What it Does |
|---|---|
| `code-review-for-pms` | Review AI-generated code from PM perspective |
| `debug-with-ai` | Guide debugging AI-generated code |
| `deploy-checklist` | Pre-launch deployment checklist for PM-builders |
| `prototype-plan` | Plan an AI-assisted prototyping session |
| `technical-analyst` | Technical translator for PMs |
| `technical-decision-guide` | Technical architecture decisions without deep engineering background |
| `vibe-coding-spec` | Natural-language specification optimized for AI coding assistants |

#### Additional unique skills in existing plugins:

- **pm-product-strategy**: `ansoff-matrix`, `devil-advocate`, `lean-canvas`, `monetization-models`, `pestle-analysis`, `porters-five-forces`, `startup-canvas`, `swot-analysis` (8 strategy tools reference repo doesn't have)
- **pm-product-discovery**: `brainstorm-ideas-existing/new`, `brainstorm-experiments-existing/new`, `identify-assumptions-existing/new` (structured hypothesis/experiment ideation)
- **pm-execution**: `brainstorm-okrs`, `job-stories`, `meeting-prep`, `outcome-roadmap`, `pre-mortem`, `prioritization`, `sprint-plan`, `summarize-meeting`, `writer`, `wwas`
- **pm-market-research**: `customer-journey-map`, `market-sizing`, `sentiment-analysis`, `user-segmentation`

**Total unique skills in this repo: ~54** (compared to reference's 29 total)

---

### 2.3 Partially Overlapping Skills (Different Names / Angles)

These skills address the same need but with different approaches or names:

| This Repo | Reference Repo | Key Difference |
|---|---|---|
| `summarize-interview` | `interview-synthesis` | Reference synthesizes *across* multiple interviews into insights; local summarizes individual transcripts |
| `competitor-analysis` (pm-market-research) | `competitive-analysis` (Discover phase) | Similar, but reference's is framed as discovery input; local is deeper research artifact |
| `stakeholder-map` + `stakeholder-update` | `stakeholder-summary` | Local separates mapping from communication; reference has unified discovery-phase output |
| `opportunity-solution-tree` | `opportunity-tree` | Very closely related; local includes experiment connections; reference is purer OST |
| `job-stories` | `jtbd-canvas` | Local produces job story format ("When X, I want Y, so I can Z"); reference produces the JTBD canvas framework |
| `create-prd` | `prd` | Functionally equivalent; naming convention only differs |
| `event-tracking-plan` | `instrumentation-spec` | Very similar; instrumentation-spec in reference is broader (covers all tracking contracts) |
| `retro` | `retrospective` | Functionally equivalent |
| `research-personas` (pm-market-research) | `persona` (Foundation) | Reference persona is broader (product + marketing personas); local is research-focused |
| `brainstorm-experiments-*` | `experiment-design` | Local is broader ideation phase; reference's is focused rigorous A/B test *design* |

---

### 2.4 Structural and Process Gaps

These are gaps beyond individual skills — they relate to how the library is organized and distributed:

#### Organizational Gaps

| Feature | Reference Repo | This Repo | Impact |
|---|---|---|---|
| **Framework** | Triple Diamond (6 clear phases) | Plugin-based (functional domains) | Reference's phases make it easier to know which skill to use at each product stage |
| **Workflow bundles** | 3 bundles (Feature Kickoff, Lean Startup, Triple Diamond) | None | Bundles chain skills in proven sequences for end-to-end workflows |
| **AGENTS.md** | Present (auto-discovery for Copilot, Cursor, Windsurf) | Absent | Without AGENTS.md, AI tools cannot auto-discover skills |
| **Skill output samples** | `library/skill-output-samples/` | Absent | Examples help users understand output quality expectations |
| **CHANGELOG.md** | Full versioned history | Absent | Makes it hard to track what changed between versions |

#### Documentation Gaps

| Feature | Reference Repo | This Repo |
|---|---|---|
| **docs/** directory | Full guides: getting-started.md, authoring guide, mcp-integration.md, reference docs | Absent |
| **QUICKSTART.md** | Present (included in release ZIPs) | Absent |
| **Skill anatomy guide** | `docs/pm-skill-anatomy.md` | Absent |
| **Skill lifecycle guide** | `docs/pm-skill-lifecycle.md` | Absent |
| **Ecosystem overview** | `docs/reference/ecosystem.md` | Absent |

#### Distribution Gaps

| Feature | Reference Repo | This Repo |
|---|---|---|
| **npm package** | `npx pm-skills-mcp` (instant setup) | Not available |
| **MCP server** | Full MCP server (38 tools, resources, prompts) | Not available |
| **Release ZIPs** | Tagged ZIP releases for each version | Not available |
| **Build scripts** | `scripts/build-release.(sh|ps1)` | Not available |
| **Sync scripts** | `scripts/sync-claude.(sh|ps1)` | Not available |

---

## 3. SWOT Analysis

### Strengths (What this repo does better)

| # | Strength | Detail |
|---|---|---|
| **S1** | **Breadth of coverage** | 83 skills vs. 29 — nearly 3× more skills covering a much wider PM domain surface |
| **S2** | **AI Product Management depth** | 8 dedicated AI-PM skills (model eval, responsible AI, prompt engineering, incident response) — absent in reference |
| **S3** | **Data analytics capabilities** | 7 SQL/analytics skills for data-driven PMs — absent in reference |
| **S4** | **Guided learning modules** | 8 interactive learning modules using Socratic method — unique in the PM skills space |
| **S5** | **Vibe coding for PMs** | 7 skills enabling PMs to build prototypes with AI coding assistants — absent in reference |
| **S6** | **Go-to-market depth** | Full GTM suite (growth loops, positioning, ICP, launch strategy) — absent in reference |
| **S7** | **Strategy frameworks breadth** | Ansoff, PESTLE, Porter's, SWOT, Lean Canvas, Startup Canvas — reference has none of these |
| **S8** | **Plugin architecture** | Modular plugin system with per-plugin `plugin.json` enables selective installation and marketplace listing |
| **S9** | **Active fork development** | 28% more skills and 56% more commands than the upstream phuryn/pm-skills |

### Weaknesses (Where this repo falls short)

| # | Weakness | Detail |
|---|---|---|
| **W1** | **Missing Define phase skills** | No `problem-statement`, `hypothesis`, or `jtbd-canvas` — these are the most-used early PM skills |
| **W2** | **No Triple Diamond framework** | Skills are organized by domain (functional), not by product lifecycle phase — harder for users to know *when* to use a skill |
| **W3** | **Missing Deliver phase essentials** | No `acceptance-criteria`, `edge-cases`, or `launch-checklist` |
| **W4** | **No workflow bundles** | Users must manually chain skills; no guided end-to-end workflows |
| **W5** | **No MCP server** | Cannot be used with `npx` by Claude Desktop, Cursor, etc. — limits reach to file-based users only |
| **W6** | **No npm packaging** | Cannot be distributed via npm; no `npx` quick-start experience |
| **W7** | **No AGENTS.md** | AI tools (GitHub Copilot, Cursor, Windsurf) cannot auto-discover skills in this repo |
| **W8** | **No structured documentation** | No `docs/` directory, no guides, no getting-started guide, no skill authoring guide |
| **W9** | **No Iterate phase skills** | No `pivot-decision`, `lessons-log`, or `refinement-notes` — the learn-and-improve loop is incomplete |
| **W10** | **No skill lifecycle tools** | No skill builder, validator, or iterator utilities — hard to scale the library quality |
| **W11** | **No CHANGELOG.md** | Version history is not tracked; harder for users to understand what's new |
| **W12** | **MIT vs. Apache 2.0** | Reference uses Apache 2.0, which is more standard for commercial open-source and provides explicit patent grants |

### Opportunities (What this repo could do)

| # | Opportunity | Detail |
|---|---|---|
| **O1** | **Build the MCP server** | Create `tarunccet/pm-skills-mcp` wrapping the 83-skill library — would be the most comprehensive PM MCP server available |
| **O2** | **Add missing lifecycle skills** | Fill the Define + Develop + Deliver + Iterate gaps — makes the library complete for all PM stages |
| **O3** | **Create workflow bundles** | Bundle skills into named workflows (e.g., "AI Feature Launch", "Data-Driven Discovery") — unique to this repo's domain breadth |
| **O4** | **Add Triple Diamond + AI Diamond** | Introduce a new "AI Diamond" extension to Triple Diamond — covering AI-specific discovery/validation phases |
| **O5** | **Publish to npm** | `npx pm-skills-mcp` or `npx tarunccet-pm-skills` — dramatically lowers friction for new users |
| **O6** | **Add AGENTS.md** | Enables auto-discovery in Copilot, Cursor, Windsurf — immediately improves accessibility |
| **O7** | **Create skill lifecycle tools** | Builder/validator/iterator trio — enables community contributions at scale |
| **O8** | **Contribute back to reference repo** | AI PM, Vibe Coding, and Guided Learning plugins could be contributed to `product-on-purpose/pm-skills` |
| **O9** | **Position as the "AI-Era PM skills" repo** | The unique AI PM + vibe coding combination is a clear market position vs. the reference's traditional PM focus |
| **O10** | **Add output sample library** | Document expected outputs for each skill — lowers the learning curve for new users |
| **O11** | **Create release packaging** | Tagged ZIP releases + CHANGELOG.md — enables Claude.ai users who upload ZIPs |

### Threats (Risks and challenges)

| # | Threat | Detail |
|---|---|---|
| **T1** | **Reference repo's MCP head start** | `pm-skills-mcp` is already on npm, already has 38 tools — growing mindshare among MCP users |
| **T2** | **Reference repo's ecosystem polish** | Apache 2.0, AGENTS.md, docs/, CHANGELOG, release ZIPs — these reduce friction for new adopters |
| **T3** | **Discovery gap** | Without AGENTS.md, npm package, or MCP server, users must find this repo manually — limits organic growth |
| **T4** | **Fragmentation risk** | 83 skills in 9 plugins is powerful but can be overwhelming — users may prefer the reference's simpler 29-skill set |
| **T5** | **Maintenance burden** | 83 skills to maintain vs. 29 — quality consistency is harder at scale without skill lifecycle tools |
| **T6** | **Upstream divergence** | As `phuryn/pm-skills` and `product-on-purpose/pm-skills` evolve, cherry-picking improvements becomes harder |
| **T7** | **AI PM skills obsolescence** | AI PM practices evolve rapidly — skills around specific models or prompting patterns may become dated quickly |
| **T8** | **Ecosystem competition** | Other PM-skills libraries, AI coding tools, and Claude plugins are rapidly improving |

### SWOT Summary Matrix

```
                    HELPFUL                     HARMFUL
              ┌─────────────────────┬─────────────────────────┐
              │     STRENGTHS       │       WEAKNESSES        │
  INTERNAL    │  S1: 83 skills      │  W1: No hypothesis      │
              │  S2: AI PM (unique) │  W2: No phase framework │
              │  S3: Data analytics │  W5: No MCP server      │
              │  S4: Learning mods  │  W6: No npm packaging   │
              │  S5: Vibe coding    │  W7: No AGENTS.md       │
              │  S6: GTM suite      │  W9: No iterate skills  │
              │  S7: Strategy depth │  W11: No CHANGELOG      │
              ├─────────────────────┼─────────────────────────┤
              │   OPPORTUNITIES     │        THREATS          │
  EXTERNAL    │  O1: Build MCP      │  T1: MCP head start     │
              │  O2: Fill gaps      │  T2: Reference polish   │
              │  O3: AI bundles     │  T3: Discovery gap      │
              │  O5: npm publish    │  T4: Complexity risk    │
              │  O9: AI-Era PM pos  │  T5: Maintenance burden │
              │  O6: Add AGENTS.md  │  T7: AI skills dated    │
              └─────────────────────┴─────────────────────────┘
```

### Strategic Recommendations

Based on the SWOT analysis, the highest-ROI actions are:

1. **Quick wins (< 1 day each):**
   - Add `AGENTS.md` for auto-discovery
   - Add `CHANGELOG.md`
   - Add missing Define phase: `problem-statement`, `hypothesis`
   - Add missing Deliver phase: `acceptance-criteria`, `launch-checklist`

2. **Medium effort (1–3 days each):**
   - Add workflow bundles (especially "AI Feature Launch" using AI PM + Discovery + Execution skills)
   - Fill remaining gaps: `adr`, `spike-summary`, `edge-cases`, `pivot-decision`
   - Add `docs/` directory with getting-started guide
   - Build MCP server (see Section 4)

3. **Strategic investment (1–2 weeks):**
   - Build and publish `pm-skills-mcp` to npm
   - Create skill lifecycle tools (builder, validator, iterator)
   - Add release packaging and ZIP artifacts

---

## 4. MCP Server & npm Packaging — How It Works and How to Do It

### 4.1 What is MCP (Model Context Protocol)?

**MCP (Model Context Protocol)** is an open standard created by Anthropic that lets AI assistants (Claude, Cursor, Copilot, Windsurf, etc.) connect to external tools and data sources in a standardized way.

Think of MCP like this:
- **Without MCP:** You copy-paste skill content into your AI chat, or set up slash commands manually.
- **With MCP:** The AI directly calls your skill library as a "tool," like calling an API — no file management needed.

```
Your AI Assistant (Claude, Cursor, etc.)
         │
         │  MCP Protocol (stdio or HTTP)
         ▼
    pm-skills-mcp Server
         │
         ├── Tools:     pm_prd, pm_hypothesis, pm_interview_synthesis ...
         ├── Resources: pm-skills://skills/deliver-prd (read skill content)
         └── Prompts:   Guided conversation starters
```

**MCP components:**
| Component | What it does | Analogy |
|---|---|---|
| **Tools** | Functions the AI can call (e.g., generate a PRD) | REST API endpoints |
| **Resources** | Data the AI can read (e.g., skill templates, examples) | GET requests to files |
| **Prompts** | Pre-built conversation starters | Templates with variables |

**Why MCP matters for this repo:**
- Users can install your skills in 30 seconds: `npx pm-skills-mcp`
- Works across ALL MCP clients without any file setup
- AI invokes skills programmatically — no manual copy-paste

---

### 4.2 How pm-skills-mcp Works

The reference MCP server (`product-on-purpose/pm-skills-mcp`) works as follows:

1. **Skill files are embedded** in the npm package at build time
2. **One MCP Tool per skill** (e.g., `pm_prd`, `pm_hypothesis`) is registered
3. **Each tool** accepts `topic`, `context`, `format`, `includeExample` parameters
4. **When invoked**, the tool returns the skill's SKILL.md + TEMPLATE.md + optionally EXAMPLE.md
5. **Resources** expose `pm-skills://skills/{skill}`, `pm-skills://templates/{skill}`, `pm-skills://examples/{skill}`
6. **Custom skills** can override embedded ones via `PM_SKILLS_PATH` environment variable

**Architecture:**
```
pm-skills-mcp/
├── src/
│   ├── index.ts          # MCP server entry point
│   ├── server.ts         # Server initialization + tool/resource/prompt registration
│   ├── skills/
│   │   ├── loader.ts     # Loads SKILL.md, TEMPLATE.md, EXAMPLE.md from disk
│   │   ├── registry.ts   # Maps skill names to tool names (pm_prd → deliver-prd)
│   │   └── cache.ts      # LRU cache for skill content
│   ├── tools/
│   │   ├── skill-tools.ts    # Generate one MCP Tool per skill
│   │   ├── workflow-tools.ts # Bundle workflow tools
│   │   └── utility-tools.ts  # list-skills, validate, search, etc.
│   ├── resources/
│   │   └── skill-resources.ts # URI-based resource handlers
│   └── prompts/
│       └── prompts.ts     # MCP prompt definitions
├── skills/               # Embedded copy of pm-skills (copied at build)
├── package.json
└── tsconfig.json
```

---

### 4.3 How to Build Your Own MCP Server for This Repo

Here is a concrete, step-by-step guide to create `tarunccet/pm-skills-mcp`.

#### Prerequisites

- Node.js 18+
- npm or yarn
- TypeScript (installed via npm)

#### Step 1: Create the project

```bash
mkdir pm-skills-mcp
cd pm-skills-mcp
npm init -y
npm install @modelcontextprotocol/sdk zod
npm install --save-dev typescript @types/node vitest
```

#### Step 2: Configure TypeScript

Create `tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "Node16",
    "moduleResolution": "Node16",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*"]
}
```

#### Step 3: Configure package.json

```json
{
  "name": "tarunccet-pm-skills-mcp",
  "version": "1.0.0",
  "description": "MCP server for tarunccet/pm-skills — 83 AI-era PM skills",
  "main": "dist/index.js",
  "bin": {
    "tarunccet-pm-skills-mcp": "dist/index.js"
  },
  "scripts": {
    "build": "tsc && npm run copy-skills",
    "copy-skills": "cp -r ../pm-skills/*/skills/* dist/skills/",
    "start": "node dist/index.js",
    "dev": "tsc --watch",
    "test": "vitest"
  },
  "keywords": ["mcp", "pm-skills", "product-management", "claude", "cursor"],
  "license": "MIT",
  "engines": { "node": ">=18" }
}
```

#### Step 4: Create the MCP server entry point

Create `src/index.ts`:
```typescript
#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ReadResourceRequestSchema,
  ListResourcesRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { readFileSync, existsSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ---- Skill Loading ----
// Discovers all skills from the embedded skills directory
// or from PM_SKILLS_PATH environment variable override
function getSkillsPath(): string {
  return process.env.PM_SKILLS_PATH ?? join(__dirname, "skills");
}

interface SkillMeta {
  pluginName: string;       // e.g., "pm-execution"
  skillName: string;        // e.g., "create-prd"
  toolName: string;         // e.g., "pm_create_prd"
  skillPath: string;        // absolute path to skill dir
}

function discoverSkills(): SkillMeta[] {
  const basePath = getSkillsPath();
  const skills: SkillMeta[] = [];

  // The local repo structure is: {plugin}/skills/{skill-name}/SKILL.md
  // We need to either:
  //   (a) Flatten skills at build time into a single skills/ dir, OR
  //   (b) Walk the plugin structure at runtime
  // This implementation walks the plugin structure.
  for (const plugin of readdirSync(basePath)) {
    const pluginSkillsDir = join(basePath, plugin, "skills");
    if (!existsSync(pluginSkillsDir)) continue;
    for (const skillDir of readdirSync(pluginSkillsDir)) {
      const skillPath = join(pluginSkillsDir, skillDir);
      const skillMd = join(skillPath, "SKILL.md");
      if (!existsSync(skillMd)) continue;
      const toolName = `pm_${skillDir.replace(/-/g, "_")}`;
      skills.push({ pluginName: plugin, skillName: skillDir, toolName, skillPath });
    }
  }
  return skills;
}

function readSkillContent(meta: SkillMeta): string {
  const skillMd = readFileSync(join(meta.skillPath, "SKILL.md"), "utf-8");
  return skillMd;
}

// ---- Server Setup ----
const server = new Server(
  { name: "pm-skills", version: "1.0.0" },
  {
    capabilities: {
      tools: {},
      resources: {},
    },
  }
);

const skills = discoverSkills();

// Register tool list
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: skills.map((s) => ({
    name: s.toolName,
    description: `PM Skill: ${s.skillName} (${s.pluginName})`,
    inputSchema: {
      type: "object",
      properties: {
        topic: {
          type: "string",
          description: "The subject or feature to apply this skill to",
        },
        context: {
          type: "string",
          description: "Additional context, constraints, or background",
        },
      },
      required: ["topic"],
    },
  })),
}));

// Register tool handler
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const skillMeta = skills.find((s) => s.toolName === request.params.name);
  if (!skillMeta) {
    throw new Error(`Unknown skill tool: ${request.params.name}`);
  }
  const skillContent = readSkillContent(skillMeta);
  const { topic, context } = request.params.arguments as {
    topic: string;
    context?: string;
  };

  return {
    content: [
      {
        type: "text",
        text: [
          skillContent,
          `\n---\n`,
          `**Topic:** ${topic}`,
          context ? `**Context:** ${context}` : "",
        ]
          .filter(Boolean)
          .join("\n"),
      },
    ],
  };
});

// Register resource list
server.setRequestHandler(ListResourcesRequestSchema, async () => ({
  resources: skills.map((s) => ({
    uri: `pm-skills://skills/${s.skillName}`,
    name: s.skillName,
    description: `Skill instructions for ${s.skillName}`,
    mimeType: "text/markdown",
  })),
}));

// Register resource reader
server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const uri = request.params.uri;
  const match = uri.match(/^pm-skills:\/\/skills\/(.+)$/);
  if (!match) throw new Error(`Unknown resource URI: ${uri}`);
  const skillName = match[1];
  const meta = skills.find((s) => s.skillName === skillName);
  if (!meta) throw new Error(`Skill not found: ${skillName}`);
  return {
    contents: [
      {
        uri,
        mimeType: "text/markdown",
        text: readSkillContent(meta),
      },
    ],
  };
});

// ---- Start Server ----
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("pm-skills MCP server running");
}

main().catch(console.error);
```

#### Step 5: Test locally

```bash
# Build
npm run build

# Test with Claude Desktop — add to claude_desktop_config.json:
{
  "mcpServers": {
    "pm-skills": {
      "command": "node",
      "args": ["/absolute/path/to/pm-skills-mcp/dist/index.js"]
    }
  }
}

# Or test with Claude Code CLI:
claude mcp add pm-skills -- node /path/to/dist/index.js
```

---

### 4.4 npm Packaging Explained

npm (Node Package Manager) packaging allows your tool to be installed globally and run with `npx`. Here is how it works:

#### Key concepts

| Concept | What it means | Example |
|---|---|---|
| **`bin` field in package.json** | Declares an executable command | `"bin": { "pm-skills-mcp": "dist/index.js" }` |
| **`#!/usr/bin/env node` shebang** | Makes the file executable as a script | First line of `src/index.ts` → `dist/index.js` |
| **`npx`** | Runs an npm package without installing globally | `npx tarunccet-pm-skills-mcp` (auto-downloads and runs) |
| **`npm install -g`** | Installs globally for permanent use | `npm install -g tarunccet-pm-skills-mcp` |
| **`files` field in package.json** | Controls what gets published to npm | Exclude `src/`, include `dist/` and embedded `skills/` |

#### The `package.json` fields that matter for publishing

```json
{
  "name": "tarunccet-pm-skills-mcp",
  "version": "1.0.0",
  "description": "MCP server for 83 AI-era PM skills",
  "main": "dist/index.js",
  "bin": {
    "tarunccet-pm-skills-mcp": "dist/index.js"
  },
  "files": [
    "dist/",
    "skills/",
    "README.md",
    "LICENSE"
  ],
  "keywords": ["mcp", "product-management", "pm-skills", "ai", "claude"],
  "repository": {
    "type": "git",
    "url": "https://github.com/tarunccet/pm-skills-mcp"
  },
  "engines": { "node": ">=18" }
}
```

#### Embedding skills in the package

The key challenge is bundling 83 skill files (SKILL.md for each) inside the npm package so it works offline with no dependency on the GitHub repo:

```bash
# In the MCP repo's build script:
# 1. Clone or symlink the pm-skills repo
# 2. Flatten or copy skill content into dist/skills/
# 3. npm pack / npm publish bundles everything in dist/ + skills/
```

Option A — Copy at build time (recommended):
```bash
# build-skills.sh
#!/bin/bash
mkdir -p dist/skills
# Copy all skills from the pm-skills repo
for plugin in ../pm-skills/pm-*/; do
  plugin_name=$(basename "$plugin")
  if [ -d "$plugin/skills" ]; then
    cp -r "$plugin/skills/"* "dist/skills/"
  fi
done
```

Option B — Use pm-skills as a git submodule:
```bash
git submodule add https://github.com/tarunccet/pm-skills pm-skills-source
# Then reference pm-skills-source/*/skills/ at build time
```

---

### 4.5 Step-by-Step: Publish Your Own `pm-skills-mcp`

#### Phase 1: Set up npm account

```bash
# Create account at npmjs.com, then:
npm login
# Enter your username, password, and email
```

#### Phase 2: Build the package

```bash
# In your pm-skills-mcp directory:
npm run build    # Compiles TypeScript + copies skill files
npm pack         # Creates a .tgz to inspect before publishing
tar -tzf tarunccet-pm-skills-mcp-1.0.0.tgz  # Verify contents
```

#### Phase 3: Publish

```bash
# First publish (use --access public for scoped packages)
npm publish --access public

# For a scoped package (@tarunccet/pm-skills-mcp):
# Set "name": "@tarunccet/pm-skills-mcp" in package.json
npm publish --access public
```

#### Phase 4: Test the published package

```bash
# Test with npx (no install needed):
npx tarunccet-pm-skills-mcp

# Or install globally:
npm install -g tarunccet-pm-skills-mcp
tarunccet-pm-skills-mcp
```

#### Phase 5: Add to Claude Desktop config

```json
{
  "mcpServers": {
    "pm-skills": {
      "command": "npx",
      "args": ["tarunccet-pm-skills-mcp"]
    }
  }
}
```

#### Phase 6: Set up versioning and CI

For each new skill or update, follow this workflow:

```bash
# 1. Update skills in pm-skills repo
# 2. Bump version in pm-skills-mcp/package.json
npm version minor   # or major/patch

# 3. Rebuild with updated skills
npm run build

# 4. Publish new version
npm publish

# 5. Users update with:
npm update -g tarunccet-pm-skills-mcp
```

Set up GitHub Actions to auto-publish on release:

```yaml
# .github/workflows/publish.yml
name: Publish to npm
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          submodules: true
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm run build
      - run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

#### Phase 7: Customize with PM_SKILLS_PATH

Allow users to override embedded skills with their own:

```typescript
// In your server's skill loader:
const skillsBasePath = process.env.PM_SKILLS_PATH ?? join(__dirname, "skills");
```

Users can then point to a customized fork:
```json
{
  "mcpServers": {
    "pm-skills": {
      "command": "npx",
      "args": ["tarunccet-pm-skills-mcp"],
      "env": {
        "PM_SKILLS_PATH": "/path/to/my-custom-pm-skills"
      }
    }
  }
}
```

---

## Summary

### Top 5 Gap Priorities

1. **Add `AGENTS.md`** — Immediate discoverability in Copilot, Cursor, Windsurf (30 minutes of work)
2. **Add Define phase skills** — `problem-statement`, `hypothesis` are foundational PM skills used daily
3. **Add Deliver phase essentials** — `acceptance-criteria`, `edge-cases`, `launch-checklist` complete the delivery cycle
4. **Build an MCP server** — Unlocks Claude Desktop, Cursor programmatic access and `npx` distribution
5. **Add workflow bundles** — Unique opportunity for "AI Feature Launch" bundle using the repo's unique AI PM + discovery + execution skills

### The Unique Value Proposition

This repo has a clear market position that `product-on-purpose/pm-skills` cannot easily replicate:

> **"The only PM skills library built for the AI era — covering AI product management, vibe coding, data analytics, and guided learning alongside traditional PM frameworks."**

The 83-skill breadth is a moat. The missing piece is the distribution infrastructure (MCP server, npm, AGENTS.md) that would make these skills as accessible as the reference repo's 29.

---

*This document was created as an analysis-only artifact. No changes have been made to any existing skills, commands, or repository configuration.*

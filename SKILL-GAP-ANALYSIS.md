# Skill Gap Analysis: pm-skills vs PM-AI-Partner-Framework

> **Comparing:** [tarunccet/pm-skills](https://github.com/tarunccet/pm-skills) vs [ahmedkhaledmohamed/PM-AI-Partner-Framework](https://github.com/ahmedkhaledmohamed/PM-AI-Partner-Framework)
>
> **Date:** June 2025 | **Status:** Proposed

---

## Executive Summary

This document analyzes the capability gaps between the **pm-skills** repository (11 plugins, 80 skills, 57 chained workflows) and the **PM-AI-Partner-Framework** (12 agent modes, 6 commands, 3 automation hooks).

While pm-skills offers significantly deeper coverage in product strategy, discovery, execution, and data analytics, the PM-AI-Partner-Framework introduces **7 capability gaps** — primarily in collaborative thinking, general-purpose writing, meeting preparation, stakeholder communication, strategic clarity, and technical translation for PMs.

**Key finding:** 5 of 12 PM-AI-Partner-Framework skills already have equivalents in pm-skills. The remaining 7 gaps are addressed by adding **7 new skills** and **5 new commands** into existing plugins — `pm-execution` (communication skills), `pm-product-strategy` (thinking tools), and `pm-vibe-coding` (technical analysis).

| Metric | pm-skills | PM-AI-Partner-Framework |
|---|---|---|
| Total skills / modes | 80 | 12 |
| Plugins / categories | 11 | 1 (monolithic) |
| Commands | 57 workflows | 6 |
| Automation hooks | — | 3 |
| Architecture | Modular plugin system | Single-repo agent modes |

---

## Table of Contents

1. [Side-by-Side Comparison](#side-by-side-comparison)
2. [Gap Details](#gap-details)
3. [Command Gaps](#command-gaps)
4. [Skills Already Covered](#skills-already-covered)
5. [Remediation Plan](#remediation-plan)
6. [Appendix: Full Skill Inventory](#appendix-full-skill-inventory)

---

## Side-by-Side Comparison

### Agent Mode Mapping

| PM-AI-Partner-Framework Mode | pm-skills Equivalent | Gap? | Severity |
|---|---|---|---|
| `thought-partner` | `brainstorm-ideas-*` (product ideas only) | **Yes** — no general collaborative thinking | 🔴 High |
| `devil-advocate` | `pre-mortem` (pre-mortem only) | **Yes** — no general critique/stress-testing | 🔴 High |
| `writer` | `create-prd`, `brainstorm-okrs`, `release-notes` (specific docs) | **Yes** — no general writing/drafting/polishing | 🟡 Medium |
| `meeting-prep` | _None_ | **Yes** — no meeting preparation at all | 🔴 High |
| `stakeholder-update` | `stakeholder-map` (mapping only) | **Yes** — no update/status writing | 🟡 Medium |
| `strategic-clarity` | `product-vision` (product-level only) | **Yes** — no team-level strategic positioning | 🟡 Medium |
| `technical-analyst` | `code-review-for-pms`, `vibe-coding-spec` (coding focus) | **Yes** — no "explain system to PM" skill | 🟡 Medium |
| `product-brief` | `create-prd` | **No** — equivalent exists | ✅ Covered |
| `hypothesis-tester` | `brainstorm-experiments-*` + `ab-test-analysis` | **No** — equivalent exists | ✅ Covered |
| `competitor-analyst` | `competitor-analysis` | **No** — equivalent exists | ✅ Covered |
| `builder` | `vibe-coding-spec` + `prototype-plan` | **No** — equivalent exists | ✅ Covered |
| `data-analyst` | `sql-queries` + `cohort-analysis` + `product-metrics` | **No** — equivalent exists | ✅ Covered |

### Command Mapping

| PM-AI-Partner-Framework Command | pm-skills Equivalent | Gap? |
|---|---|---|
| `/plan-week` | _None_ | **Yes** |
| `/write-brief` | `/create-prd` | **No** — equivalent exists |
| `/prep-meeting` | _None_ | **Yes** |
| `/audit-codebase` | `/code-review-for-pms` (partial) | **Yes** — different scope |
| `/competitor-scan` | `/competitor-analysis` | **No** — equivalent exists |
| `/metrics-review` | `/product-metrics`, `/cohort-analysis` | **No** — equivalent exists |

### Coverage by Domain

| Domain | pm-skills | PM-AI-Partner-Framework | Winner |
|---|---|---|---|
| Product Strategy | 12 skills (SWOT, Porter's, Ansoff, PESTLE, etc.) | `strategic-clarity` only | pm-skills |
| Product Discovery | 10 skills (brainstorming, interviews, assumptions) | `hypothesis-tester` only | pm-skills |
| Product Execution | 14 skills (PRDs, sprints, user stories, OKRs) | `product-brief` only | pm-skills |
| Data & Analytics | 4 skills (SQL, A/B testing, cohorts, metrics) | `data-analyst` only | pm-skills |
| Market Research | 6 skills (competitors, personas, sizing, sentiment) | `competitor-analyst` only | pm-skills |
| AI Product Mgmt | 8 skills (AI strategy, eval, responsible AI) | _None_ | pm-skills |
| Go-to-Market | 4 skills (GTM strategy, growth loops, ICP) | _None_ | pm-skills |
| Collaborative Thinking | Limited to product brainstorming | `thought-partner`, `devil-advocate` | **PM-AI-Partner** |
| Communication & Writing | Document-specific templates only | `writer`, `stakeholder-update` | **PM-AI-Partner** |
| Meeting Support | `summarize-meeting` (post-meeting only) | `meeting-prep` | **PM-AI-Partner** |
| Technical Translation | Vibe-coding tools (developer-focused) | `technical-analyst` | **PM-AI-Partner** |
| Weekly Planning | _None_ | `/plan-week` | **PM-AI-Partner** |

---

## Gap Details

### Gap 1: Thought Partner — General Collaborative Thinking

| Attribute | Detail |
|---|---|
| **Severity** | 🔴 High |
| **Framework skill** | `thought-partner` |
| **What it does** | General-purpose collaborative thinking and brainstorming mode. Helps PMs think through any problem — not just product ideas — including career decisions, team dynamics, process design, and strategic dilemmas. |
| **Nearest pm-skills equivalent** | `brainstorm-ideas-new` / `brainstorm-ideas-existing` |
| **Why it's a gap** | pm-skills brainstorming is scoped to product feature ideas. There is no general "help me think through this" capability for open-ended problems. PMs frequently need a sounding board for non-product questions. |
| **Target plugin** | `pm-product-strategy` |
| **Proposed skill name** | `thought-partner` |
| **Proposed command** | `/think` |

### Gap 2: Devil's Advocate — Constructive Criticism

| Attribute | Detail |
|---|---|
| **Severity** | 🔴 High |
| **Framework skill** | `devil-advocate` |
| **What it does** | Systematically stress-tests ideas, plans, and assumptions. Asks tough questions, surfaces blind spots, and challenges reasoning — without being destructive. |
| **Nearest pm-skills equivalent** | `pre-mortem` |
| **Why it's a gap** | `pre-mortem` is a specific technique for imagining future failure of a project. `devil-advocate` is broader — it can critique a pitch deck, challenge a strategy pivot, poke holes in a hiring plan, or stress-test any decision. |
| **Target plugin** | `pm-product-strategy` |
| **Proposed skill name** | `devil-advocate` |
| **Proposed command** | `/challenge` |

### Gap 3: Writer — General PM Writing Assistant

| Attribute | Detail |
|---|---|
| **Severity** | 🟡 Medium |
| **Framework skill** | `writer` |
| **What it does** | General-purpose writing assistant for PMs. Drafts, edits, restructures, and polishes any PM document — emails, Slack messages, proposals, blog posts, presentations, and more. |
| **Nearest pm-skills equivalent** | `create-prd`, `brainstorm-okrs`, `release-notes`, `grammar-check` |
| **Why it's a gap** | pm-skills has excellent templates for specific document types (PRDs, OKRs, release notes) and a grammar checker, but no general "help me write/rewrite this" skill. PMs spend significant time writing ad-hoc content that doesn't fit a template. |
| **Target plugin** | `pm-execution` |
| **Proposed skill name** | `writer` |

### Gap 4: Meeting Prep — Meeting Preparation Assistant

| Attribute | Detail |
|---|---|
| **Severity** | 🔴 High |
| **Framework skill** | `meeting-prep` |
| **What it does** | Helps PMs prepare for meetings by generating agendas, talking points, anticipated questions, stakeholder briefings, and pre-read materials. |
| **Nearest pm-skills equivalent** | `summarize-meeting` (post-meeting only) |
| **Why it's a gap** | pm-skills can summarize meetings after they happen but has zero support for preparation before meetings. Meeting prep is one of the most time-consuming PM activities and a high-value automation target. |
| **Target plugin** | `pm-execution` |
| **Proposed skill name** | `meeting-prep` |
| **Proposed command** | `/prep-meeting` |

### Gap 5: Stakeholder Update — Status Communication

| Attribute | Detail |
|---|---|
| **Severity** | 🟡 Medium |
| **Framework skill** | `stakeholder-update` |
| **What it does** | Generates status reports, stakeholder updates, and executive summaries. Tailors communication style and detail level to the audience (executive, engineering, cross-functional). |
| **Nearest pm-skills equivalent** | `stakeholder-map` |
| **Why it's a gap** | `stakeholder-map` identifies and categorizes stakeholders. It does not help write communications to them. PMs need to produce regular status updates, and the format varies significantly by audience. |
| **Target plugin** | `pm-execution` |
| **Proposed skill name** | `stakeholder-update` |
| **Proposed command** | `/write-update` |

### Gap 6: Strategic Clarity — Team-Level Strategic Positioning

| Attribute | Detail |
|---|---|
| **Severity** | 🟡 Medium |
| **Framework skill** | `strategic-clarity` |
| **What it does** | A 4-phase guided workflow for establishing team identity and strategic positioning: (1) Team identity, (2) Stakeholder landscape, (3) Strategic positioning, (4) Communication plan. |
| **Nearest pm-skills equivalent** | `product-vision`, `product-strategy` |
| **Why it's a gap** | pm-skills strategy tools focus on product-level strategy (vision, pricing, business model). `strategic-clarity` operates at the team level — helping a PM team define who they are, how they fit in the org, and how they communicate their value. This is particularly valuable for new PMs or teams undergoing reorgs. |
| **Target plugin** | `pm-product-strategy` |
| **Proposed skill name** | `strategic-clarity` |

### Gap 7: Technical Analyst — Technical Translation for PMs

| Attribute | Detail |
|---|---|
| **Severity** | 🟡 Medium |
| **Framework skill** | `technical-analyst` |
| **What it does** | Translates technical concepts, architectures, and codebases into PM-friendly language. Helps PMs understand system dependencies, technical debt implications, and engineering trade-offs without needing to read code. |
| **Nearest pm-skills equivalent** | `code-review-for-pms`, `technical-decision-guide` |
| **Why it's a gap** | pm-skills vibe-coding tools are oriented toward PMs who want to build/code. `technical-analyst` serves PMs who need to understand existing systems to make better product decisions — a fundamentally different use case. |
| **Target plugin** | `pm-vibe-coding` |
| **Proposed skill name** | `technical-analyst` |

---

## Command Gaps

### `/plan-week` — Weekly Planning

| Attribute | Detail |
|---|---|
| **What it does** | Generates a structured weekly plan based on current priorities, meetings, deadlines, and OKR progress. |
| **Why pm-skills lacks it** | pm-skills focuses on project-level planning (`sprint-plan`, `outcome-roadmap`) but not personal weekly planning for individual PMs. |
| **Target plugin** | `pm-execution` |
| **Proposed command** | `/plan-week` |

### `/prep-meeting` — Meeting Preparation

| Attribute | Detail |
|---|---|
| **What it does** | Quick command to generate a meeting prep document with agenda, talking points, and anticipated questions. |
| **Why pm-skills lacks it** | No meeting preparation capability exists. `summarize-meeting` only handles post-meeting summaries. |
| **Target plugin** | `pm-execution` |
| **Proposed command** | `/prep-meeting` |

### `/audit-codebase` — PM-Perspective Codebase Audit

| Attribute | Detail |
|---|---|
| **What it does** | Audits a codebase from a PM perspective — identifying feature flags, technical debt risks, deployment patterns, and product implications of the architecture. |
| **Why pm-skills lacks it** | `code-review-for-pms` focuses on reviewing specific code changes, not auditing an entire codebase for product-relevant insights. |
| **Target plugin** | `pm-vibe-coding` |

---

## Skills Already Covered

The following PM-AI-Partner-Framework capabilities already have strong equivalents in pm-skills. **No action is needed** for these.

### product-brief ≈ create-prd

| Attribute | Detail |
|---|---|
| **Framework skill** | `product-brief` |
| **pm-skills equivalent** | `create-prd` (pm-execution) |
| **Coverage assessment** | ✅ **Fully covered.** `create-prd` generates comprehensive PRDs with problem statements, user stories, success metrics, technical considerations, and launch criteria. This exceeds the scope of `product-brief`. |

### hypothesis-tester ≈ brainstorm-experiments + ab-test-analysis

| Attribute | Detail |
|---|---|
| **Framework skill** | `hypothesis-tester` |
| **pm-skills equivalents** | `brainstorm-experiments-new`, `brainstorm-experiments-existing` (pm-product-discovery) + `ab-test-analysis` (pm-data-analytics) |
| **Coverage assessment** | ✅ **Fully covered.** pm-skills provides both the hypothesis generation side (brainstorm-experiments) and the validation side (ab-test-analysis), covering the complete experiment lifecycle. |

### competitor-analyst ≈ competitor-analysis

| Attribute | Detail |
|---|---|
| **Framework skill** | `competitor-analyst` |
| **pm-skills equivalent** | `competitor-analysis` (pm-market-research) |
| **Coverage assessment** | ✅ **Fully covered.** `competitor-analysis` provides structured competitive analysis frameworks. Additionally, pm-skills offers complementary tools like `market-sizing`, `segmentation`, and `porters-five-forces` that enrich competitive understanding. |

### builder ≈ vibe-coding-spec + prototype-plan

| Attribute | Detail |
|---|---|
| **Framework skill** | `builder` |
| **pm-skills equivalents** | `vibe-coding-spec` + `prototype-plan` (pm-vibe-coding) |
| **Coverage assessment** | ✅ **Fully covered.** pm-skills provides a richer builder toolkit with 6 vibe-coding skills including spec writing, prototyping, code review, debugging, deployment checklists, and technical decision guides. |

### data-analyst ≈ sql-queries + cohort-analysis + product-metrics

| Attribute | Detail |
|---|---|
| **Framework skill** | `data-analyst` |
| **pm-skills equivalents** | `sql-queries`, `cohort-analysis`, `product-metrics`, `ab-test-analysis` (pm-data-analytics) |
| **Coverage assessment** | ✅ **Fully covered.** pm-skills provides specialized data skills rather than a single generalist mode, offering deeper analytical capability across SQL, cohort analysis, metric definition, and A/B test interpretation. |

---

## Remediation Plan

### Approach: Merge Into Existing Plugins

Rather than creating new standalone plugins, the 7 gap skills are merged into existing plugin categories where they naturally fit:

| Target Plugin | New Skills | New Commands | Rationale |
|---|---|---|---|
| `pm-execution` | 3 (writer, meeting-prep, stakeholder-update) | 3 (/prep-meeting, /write-update, /plan-week) | Communication is part of daily PM execution; complements existing stakeholder-map and summarize-meeting |
| `pm-product-strategy` | 3 (thought-partner, devil-advocate, strategic-clarity) | 2 (/think, /challenge) | Thinking tools support strategic decision-making; complements existing strategy, vision, and SWOT skills |
| `pm-vibe-coding` | 1 (technical-analyst) | — | Understanding technical systems fits alongside existing build/review/debug skills |

### pm-execution: Communication Skills

**Rationale:** Communication is the highest-frequency PM activity. Meeting prep and stakeholder updates are daily tasks with clear, template-able outputs. They naturally extend pm-execution's existing meeting summarization and stakeholder mapping capabilities.

#### Skill: `writer`

- **Purpose:** General-purpose PM writing assistant for drafting, editing, and polishing any document type.
- **Differentiator from `grammar-check`:** Goes beyond grammar — restructures content, adjusts tone for audience, and suggests PM-specific framing.

#### Skill: `meeting-prep`

- **Purpose:** Generate comprehensive meeting preparation materials.
- **Complements:** `summarize-meeting` (post-meeting) — together they bookend the full meeting lifecycle.

#### Skill: `stakeholder-update`

- **Purpose:** Generate audience-tailored status updates and progress reports.
- **Complements:** `stakeholder-map` — use the map to identify audiences, then generate updates for each.

#### Commands: `/prep-meeting`, `/write-update`, `/plan-week`

### pm-product-strategy: Thinking Tools

**Rationale:** Thinking tools are higher-complexity skills for strategic reasoning. They naturally extend pm-product-strategy's existing strategic analysis capabilities (SWOT, Porter's, etc.) from structured frameworks to open-ended strategic thinking.

#### Skill: `thought-partner`

- **Purpose:** General collaborative thinking partner for any PM problem.
- **Differentiator from brainstorming:** Not idea-generation focused. Helps with reasoning, decision-making, and problem framing.

#### Skill: `devil-advocate`

- **Purpose:** Systematic idea and plan stress-testing.
- **Differentiator from `pre-mortem`:** `pre-mortem` imagines a specific future failure. `devil-advocate` actively argues against the current plan from multiple angles.

#### Skill: `strategic-clarity`

- **Purpose:** 4-phase team identity and strategic positioning workflow.
- **Differentiator from `product-vision`:** Operates at team level, not product level. Focuses on organizational positioning rather than product direction.

#### Commands: `/think`, `/challenge`

### pm-vibe-coding: Technical Analysis

**Rationale:** Understanding technical systems complements the existing build/review/debug skills. `technical-analyst` helps PMs understand systems; the other vibe-coding skills help PMs build them.

#### Skill: `technical-analyst`

- **Purpose:** Translate technical systems and concepts into PM-friendly language.
- **Differentiator from vibe-coding:** Vibe-coding helps PMs build. Technical-analyst helps PMs understand.

### Stretch Goals (Future Sprints)

| Item | Description | Depends On |
|---|---|---|
| `/audit-codebase` command | PM-perspective codebase audit | `technical-analyst` skill |
| Automation hooks | Git-triggered workflows (e.g., auto-generate release notes on tag) | Infrastructure decision |
| Cross-plugin chaining | e.g., `/prep-meeting` → `stakeholder-map` → `meeting-prep` → `writer` | Plugin architecture support |

---

## Summary of Changes

| Category | Current State | After Remediation |
|---|---|---|
| Plugins | 11 | 11 (no change — merged into existing plugins) |
| Skills | 80 | 87 (+7) |
| Commands / Workflows | 57 | 62 (+5) |
| Framework coverage | 5 of 12 modes covered | 12 of 12 modes covered |
| Command coverage | 3 of 6 commands covered | 6 of 6 commands covered |

---

## Appendix: Full Skill Inventory

### pm-skills Current Skills (80)

| Plugin | Skills | Count |
|---|---|---|
| pm-execution | create-prd, user-stories, job-stories, sprint-plan, brainstorm-okrs, outcome-roadmap, prioritization, pre-mortem, release-notes, retro, stakeholder-map, summarize-meeting, test-scenarios, wwas | 14 |
| pm-product-strategy | product-vision, product-strategy, business-model, lean-canvas, startup-canvas, value-proposition, swot-analysis, porters-five-forces, pestle-analysis, ansoff-matrix, pricing-strategy, monetization-strategy | 12 |
| pm-product-discovery | brainstorm-ideas-new, brainstorm-ideas-existing, brainstorm-experiments-new, brainstorm-experiments-existing, identify-assumptions-new, identify-assumptions-existing, opportunity-solution-tree, analyze-feature-requests, interview-script, summarize-interview | 10 |
| pm-ai-product-management | ai-feature-definition, ai-model-evaluation, ai-data-strategy, ai-build-buy-partner, ai-user-research, ai-incident-response, responsible-ai, prompt-engineering | 8 |
| pm-guided-learning | learn-strategy, learn-discovery, learn-prioritization, learn-metrics, learn-user-research, learn-stakeholder-management, learn-ai-pm, learn-vibe-coding | 8 |
| pm-market-research | competitor-analysis, market-sizing, user-personas, customer-journey-map, segmentation, sentiment-analysis | 6 |
| pm-vibe-coding | vibe-coding-spec, prototype-plan, code-review-for-pms, debug-with-ai, deploy-checklist, technical-decision-guide | 6 |
| pm-utilities | grammar-check, draft-nda, privacy-policy, review-resume, dummy-dataset | 5 |
| pm-data-analytics | product-metrics, sql-queries, ab-test-analysis, cohort-analysis | 4 |
| pm-go-to-market | gtm-strategy, gtm-motions, ideal-customer-profile, growth-loops | 4 |
| pm-marketing-growth | marketing-ideas, positioning-ideas, product-name | 3 |

### PM-AI-Partner-Framework Skills (12)

| Skill (Agent Mode) | Category | pm-skills Status |
|---|---|---|
| thought-partner | Thinking | 🔴 Gap |
| devil-advocate | Thinking | 🔴 Gap |
| writer | Communication | 🟡 Gap |
| meeting-prep | Communication | 🔴 Gap |
| stakeholder-update | Communication | 🟡 Gap |
| strategic-clarity | Thinking | 🟡 Gap |
| technical-analyst | Thinking | 🟡 Gap |
| product-brief | Execution | ✅ Covered |
| hypothesis-tester | Discovery | ✅ Covered |
| competitor-analyst | Research | ✅ Covered |
| builder | Building | ✅ Covered |
| data-analyst | Analytics | ✅ Covered |

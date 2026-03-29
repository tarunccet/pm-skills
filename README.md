# Agentic PM Skills: The AI Operating System for Product Managers

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](CONTRIBUTING.md)

> **Stop writing prompts from scratch. Start executing proven PM frameworks with agentic AI.**

**Agentic PM Skills** is a marketplace of 87 PM skills and 62 chained workflows across 13 plugins. Designed natively for Claude Code and Cowork (and compatible with other AI assistants), it transforms your LLM from a generic text generator into a structured, rigorous Product Management engine. 

From continuous discovery to go-to-market strategy, execution, and vibe coding—get the rigor of industry leaders (like Teresa Torres and Marty Cagan) built directly into your daily automated workflow.

## 🚀 The "Aha" Moment: Why Use This?

Generic AI gives you walls of text. This repository gives you structure. 

Each skill encodes a specific, proven analytical framework. When you trigger a command, the AI doesn't just guess; it walks you through a step-by-step process for assumption mapping, prioritization, and strategy definition. 

**The result:** Better, faster product decisions, not just faster documents.

## ⚡ Start Here: The Workflows

Our commands chain multiple skills into end-to-end agentic processes. Just type the command and let the AI guide you:

### 🧠 Core Product Management
* **New idea?** → `/discover`
* **Need strategic clarity?** → `/strategy`
* **Writing a PRD?** → `/write-prd`
* **Planning a launch?** → `/plan-launch`
* **Defining metrics?** → `/product-metrics`

### 💬 Communication & Thinking
* **Preparing for a meeting?** → `/prep-meeting`
* **Writing a status update?** → `/write-update`
* **Need a thinking partner?** → `/think`
* **Stress-testing an idea?** → `/challenge`
* **Planning your week?** → `/plan-week`

### 🤖 AI Product Management & Building (New!)
* **Building an AI feature?** → `/[Insert your AI PM command here, e.g., /ai-product-strategy]` 
* **Vibe coding a prototype?** → `/vibe-spec`
* **Designing AI evaluations?** → `/[Insert your AI eval command here]`

### 📚 Growth & Navigation
* **Learning PM skills?** → `/learn`
* **Not sure where to start?** → `/find-skill`


---
*Note: This repository is a heavily extended and actively maintained fork of [phuryn/pm-skills](https://github.com/phuryn/pm-skills), originally created by Paweł Huryn. Maintained by Tarun Narang.*


## How It Works (Skills, Commands, Plugins)

**Skills** are the building blocks of the marketplace. Each skill gives the AI domain knowledge, analytical frameworks, or a guided workflow for a specific PM task. Some skills also work as reusable foundations that multiple commands share. 

Skills are loaded automatically when relevant to the conversation — no explicit invocation needed. If needed (e.g., prioritizing skills over general knowledge), you can **force loading skills** with `/plugin-name:skill-name` or `/skill-name`.

**Commands** are user-triggered workflows invoked with `/command-name`. They chain one or more skills into an end-to-end process. For example, `/discover` chains four skills together: brainstorm-ideas → identify-assumptions → prioritize-assumptions → brainstorm-experiments.

**Plugins** group related skills and commands into installable packages. Each plugin covers a PM domain — discovery, strategy, execution, and so on. Installing the marketplace gives you all 11 plugins at once.

Commands use skills. Some skills serve multiple commands. Some skills (like `prioritization-frameworks` or `opportunity-solution-tree`) are standalone references the AI draws on whenever relevant — no command needed.

Commands are designed to flow into each other, matching the PM workflow. After any command completes, it suggests relevant next commands — just follow the prompts.

## How Vibe Coding Skills Work

Vibe coding is the practice of building software through natural language instructions to AI coding assistants, with the human providing product direction, design judgment, and validation rather than writing code line-by-line. The `pm-vibe-coding` plugin is designed specifically to help PMs do this effectively.

### Starting Out
Use `/plan-prototype` or ask _"Help me plan a prototype build"_. The skill helps you scope the MVP to the minimum features needed, identify the single most important user story, and define what "done" looks like — before writing a single line of code.

### Choosing and Installing the Right Tools
The `prototype-plan` skill includes a built-in tool selection guide based on your project's needs:

| What you're building | Recommended tool |
|----------------------|-----------------|
| Frontend UI only (no backend needed) | Bolt.new or v0.dev |
| Quick full-stack demo, zero setup | Replit Agent |
| Complex full-stack app with fine-grained control | Cursor |
| Existing VS Code project or iterative work | GitHub Copilot |
| Complex logic, debugging, architecture | Claude Code |
| Multi-file agentic flows | Windsurf |

Once you pick a tool, `/vibe-spec` generates the natural-language spec document that you paste directly into your chosen AI coding assistant — giving it all the context it needs to build correctly the first time.

### Starting to Code
The build sequence recommended by `prototype-plan` guides you through:
1. **Foundation**: Set up the project, define data model, connect database
2. **Backend/API**: Build core endpoints, add validation, test with a client
3. **Frontend**: Build the primary user flow, connect to backend
4. **Auth**: Add sign-up/login, protect routes
5. **Deploy**: Deploy to hosting, set environment variables, run final checklist

At each stage, checkpoints verify you're ready to move on. The `code-review-for-pms` skill helps you review AI-generated code from a product and security lens, and `debug-with-ai` guides you when things break. Before shipping, `/deploy-check` runs through a pre-launch checklist covering security, performance, and accessibility.

## Installation

### Claude Cowork (recommended for non-developers)

1. Open **Customize** (bottom-left)
2. Go to **Browse plugins** → **Personal** → **+**
3. Select **Add marketplace from GitHub**
4. Enter: `tarunccet/pm-skills`

All 11 plugins install automatically. You get both commands (`/discover`, `/strategy`, etc.) and skills.

### Claude Code (CLI)

```bash
# Step 1: Add the marketplace
claude plugin marketplace add tarunccet/pm-skills

# Step 2: Install individual plugins
claude plugin install pm-utilities@pm-skills
claude plugin install pm-product-strategy@pm-skills
claude plugin install pm-product-discovery@pm-skills 
claude plugin install pm-market-research@pm-skills 
claude plugin install pm-data-analytics@pm-skills
claude plugin install pm-marketing-growth@pm-skills
claude plugin install pm-go-to-market@pm-skills
claude plugin install pm-execution@pm-skills
claude plugin install pm-ai-product-management@pm-skills
claude plugin install pm-vibe-coding@pm-skills
claude plugin install pm-guided-learning@pm-skills
```

### Other AI assistants (skills only)

The `skills/*/SKILL.md` files follow the universal skill format and work with any tool that reads markdown. Full plugin + command support (via `.claude-plugin/`) is currently available on Claude Code and Claude Cowork only.

| Tool | How to use | What works |
|------|-----------|------------|
| **VS Code Copilot Chat** | Copy skill folders to `.github/skills/` or paste SKILL.md content into `.github/copilot-instructions.md` | Skills only |
| **Gemini CLI** | Copy skill folders to `.gemini/skills/` | Skills only |
| **OpenCode** | Copy skill folders to `.opencode/skills/` | Skills only |
| **Cursor** | Copy skill folders to `.cursor/skills/` | Skills only |
| **Windsurf** | Copy skill folders to `.windsurf/skills/` | Skills only |
| **Codex CLI** | Copy skill folders to `.codex/skills/` | Skills only |
| **Kiro** | Copy skill folders to `.kiro/skills/` | Skills only |

```bash
# Example: copy all skills for OpenCode (project-level)
for plugin in pm-*/; do
  mkdir -p .opencode/skills/
  cp -r "$plugin/skills/"* .opencode/skills/ 2>/dev/null
done

# Example: copy all skills for Gemini CLI (global)
for plugin in pm-*/; do
  cp -r "$plugin/skills/"* ~/.gemini/skills/ 2>/dev/null
done
```

---

## Available Plugins

<details>
<summary><strong>1. pm-product-discovery</strong> — Ideation, experiments, assumption testing, OSTs, interviews (13 skills, 5 commands)</summary>

**Skills (13):**

- `brainstorm-ideas-existing` — Multi-perspective ideation for existing products (PM, Designer, Engineer)
- `brainstorm-ideas-new` — Ideation for new products in initial discovery
- `brainstorm-experiments-existing` — Design experiments to test assumptions for existing products
- `brainstorm-experiments-new` — Design lean startup pretotypes for new products (Alberto Savoia)
- `identify-assumptions-existing` — Identify risky assumptions across Value, Usability, Viability, and Feasibility
- `identify-assumptions-new` — Identify risky assumptions across 8 risk categories including Go-to-Market, Strategy, and Team
- `prioritize-assumptions` — Prioritize assumptions using an Impact × Risk matrix with experiment suggestions
- `prioritize-features` — Prioritize a feature backlog based on impact, effort, risk, and strategic alignment
- `analyze-feature-requests` — Analyze and categorize customer feature requests by theme and strategic fit
- `opportunity-solution-tree` — Build an Opportunity Solution Tree (Teresa Torres) — outcome → opportunities → solutions → experiments
- `interview-script` — Create a structured customer interview script with JTBD probing questions
- `summarize-interview` — Summarize an interview transcript into JTBD, satisfaction signals, and action items
- `metrics-dashboard` — Design a product metrics dashboard with North Star, input metrics, and alert thresholds

**Commands (5):**

- `/discover` — Full discovery cycle: ideation → assumption mapping → prioritization → experiment design
- `/brainstorm` — Multi-perspective ideation (`ideas|experiments` × `existing|new`)
- `/triage-requests` — Analyze and prioritize a batch of feature requests
- `/interview` — Prepare an interview script or summarize a transcript (`prep|summarize`)
- `/setup-metrics` — Design a product metrics dashboard

**Examples:**

Skills:
- `What are the riskiest assumptions for our AI writing assistant idea?`
- `Help me build an Opportunity Solution Tree for improving user activation`
- `Prioritize these 12 feature requests from our enterprise customers [attach CSV]`

Commands:
- `/discover AI-powered meeting summarizer for remote teams`
- `/brainstorm experiments existing — We need to reduce churn in our onboarding flow`
- `/interview prep — We're interviewing enterprise buyers about their procurement workflow`

</details>

<details>
<summary><strong>2. pm-product-strategy</strong> — Vision, business models, pricing, competitive landscape (12 skills, 5 commands)</summary>

Product strategy, vision, business models, pricing, and macro environment analysis. Covers the full strategic toolkit from vision crafting through competitive landscape scanning.

**Skills (12):**

- `product-strategy` — Comprehensive 9-section Product Strategy Canvas (vision → defensibility)
- `startup-canvas` — Startup Canvas combining Product Strategy (9 sections) + Business Model — an alternative to BMC and Lean Canvas for new products
- `product-vision` — Craft an inspiring, achievable, and emotional product vision
- `value-proposition` — 6-part JTBD value proposition (Who, Why, What before, How, What after, Alternatives)
- `lean-canvas` — Lean Canvas business model for startups and new products
- `business-model` — Business Model Canvas with all 9 building blocks
- `monetization-strategy` — Brainstorm 3–5 monetization strategies with validation experiments
- `pricing-strategy` — Pricing models, competitive analysis, willingness-to-pay, and price elasticity
- `swot-analysis` — SWOT analysis with actionable recommendations
- `pestle-analysis` — Macro environment: Political, Economic, Social, Technological, Legal, Environmental
- `porters-five-forces` — Competitive forces analysis (rivalry, suppliers, buyers, substitutes, new entrants)
- `ansoff-matrix` — Growth strategy mapping across markets and products

**Commands (5):**

- `/strategy` — Create a complete 9-section Product Strategy Canvas
- `/business-model` — Explore business models (`lean|full|startup|value-prop|all`)
- `/value-proposition` — Design a value proposition using the 6-part JTBD template
- `/market-scan` — Macro environment analysis combining SWOT + PESTLE + Porter's + Ansoff
- `/pricing` — Design a pricing strategy with competitive analysis and experiments

**Examples:**

Skills:
- `Compare Lean Canvas vs Business Model Canvas vs Startup Canvas for my marketplace startup`
- `Design a value proposition for our AI writing assistant targeting non-native English speakers`
- `Run a Porter's Five Forces analysis for the project management SaaS market`

Commands:
- `/strategy B2B project management tool for agencies`
- `/business-model startup — AI writing tool for non-native English speakers`
- `/value-proposition SaaS onboarding tool for enterprise customers`

</details>

<details>
<summary><strong>3. pm-execution</strong> — PRDs, OKRs, roadmaps, sprints, retros, release notes, stakeholder management (15 skills, 10 commands)</summary>

Day-to-day product management: PRDs, OKRs, roadmaps, sprints, retrospectives, release notes, pre-mortems, stakeholder management, user stories, and prioritization frameworks.

**Skills (15):**

- `create-prd` — Comprehensive 8-section PRD template
- `brainstorm-okrs` — Team-level OKRs aligned with company objectives
- `outcome-roadmap` — Transform a feature list into an outcome-focused roadmap
- `sprint-plan` — Sprint planning with capacity estimation, story selection, and risk identification
- `retro` — Structured sprint retrospective facilitation
- `release-notes` — User-facing release notes from tickets, PRDs, or changelogs
- `pre-mortem` — Risk analysis with Tigers/Paper Tigers/Elephants classification
- `stakeholder-map` — Power × Interest grid with tailored communication plan
- `summarize-meeting` — Meeting transcript → decisions + action items
- `user-stories` — User stories following the 3 C's and INVEST criteria
- `job-stories` — Job stories: When [situation], I want to [motivation], so I can [outcome]
- `wwas` — Product backlog items in Why-What-Acceptance format
- `test-scenarios` — Test scenarios: happy paths, edge cases, error handling
- `dummy-dataset` — Realistic dummy datasets as CSV, JSON, SQL, or Python
- `prioritization-frameworks` — Reference guide to 9 prioritization frameworks (Opportunity Score, ICE, RICE, MoSCoW, Kano, etc.)

**Commands (10):**

- `/write-prd` — Create a PRD from a feature idea or problem statement
- `/plan-okrs` — Brainstorm team-level OKRs
- `/transform-roadmap` — Convert a feature-based roadmap into outcome-focused
- `/sprint` — Sprint lifecycle (`plan|retro|release`)
- `/pre-mortem` — Pre-mortem risk analysis on a PRD or launch plan
- `/meeting-notes` — Summarize a meeting transcript into structured notes
- `/stakeholder-map` — Map stakeholders and create a communication plan
- `/write-stories` — Break features into backlog items (`user|job|wwa`)
- `/test-scenarios` — Generate test scenarios from user stories
- `/generate-data` — Create realistic dummy datasets

**Examples:**

Skills:
- `Which prioritization framework should I use for a 50-item backlog?`
- `Map our stakeholders for the platform migration project`
- `What's the difference between Opportunity Score, ICE, and RICE?`

Commands:
- `/write-prd Smart notification system that reduces alert fatigue`
- `/sprint retro — Here are the notes from our last sprint`
- `/write-stories job — Break down the "team dashboard" feature into job stories`

</details>

<details>
<summary><strong>4. pm-market-research</strong> — Personas, segmentation, journey maps, market sizing, competitor analysis (7 skills, 3 commands)</summary>

User research and competitive analysis: personas, segmentation, journey maps, market sizing, competitor analysis, and feedback analysis.

**Skills (7):**

- `user-personas` — Create refined user personas from research data
- `market-segments` — Identify 3–5 customer segments with demographics, JTBD, and product fit
- `user-segmentation` — Segment users from feedback data based on behavior, JTBD, and needs
- `customer-journey-map` — End-to-end journey map with stages, touchpoints, emotions, and pain points
- `market-sizing` — TAM, SAM, SOM with top-down and bottom-up approaches
- `competitor-analysis` — Competitor strengths, weaknesses, and differentiation opportunities
- `sentiment-analysis` — Sentiment analysis and theme extraction from user feedback

**Commands (3):**

- `/research-users` — Build personas, segment users, and map the customer journey
- `/competitive-analysis` — Analyze the competitive landscape
- `/analyze-feedback` — Sentiment analysis and segment insights from user feedback

**Examples:**

Skills:
- `Estimate TAM/SAM/SOM for an AI code review tool in the US market`
- `Create a customer journey map for our e-commerce checkout flow`
- `Segment these survey respondents by behavior and needs [attach CSV]`

Commands:
- `/research-users We have interview data from 12 users of our fitness app`
- `/competitive-analysis Figma competitors in the design tool space`
- `/analyze-feedback Here's 200 NPS responses from Q4 [attach file]`

</details>

<details>
<summary><strong>5. pm-data-analytics</strong> — SQL generation, cohort analysis, A/B test analysis (3 skills, 3 commands)</summary>

Data analytics for PMs: SQL query generation, cohort analysis, and A/B test analysis.

**Skills (3):**

- `sql-queries` — Generate SQL from natural language (BigQuery, PostgreSQL, MySQL)
- `cohort-analysis` — Retention curves, feature adoption, and engagement trends by cohort
- `ab-test-analysis` — Statistical significance, sample size validation, and ship/extend/stop recommendations

**Commands (3):**

- `/write-query` — Generate SQL queries from natural language
- `/analyze-cohorts` — Cohort analysis on user engagement data
- `/analyze-test` — Analyze A/B test results

**Examples:**

Skills:
- `How large a sample do I need for 95% confidence with a 2% MDE?`
- `What retention metrics should I track for a subscription app?`

Commands:
- `/write-query Show me monthly active users by country for Q4 2025 (BigQuery)`
- `/analyze-test Here are the results from our checkout flow A/B test [attach CSV]`
- `/analyze-cohorts Weekly retention for users who signed up in January vs February`

</details>

<details>
<summary><strong>6. pm-go-to-market</strong> — Beachhead segments, ICPs, messaging, growth loops, GTM motions, battlecards (6 skills, 3 commands)</summary>

Go-to-market strategy: beachhead segments, ideal customer profiles, messaging, growth loops, GTM motions, and competitive battlecards.

**Skills (6):**

- `gtm-strategy` — Full GTM strategy: channels, messaging, success metrics, and launch plan
- `beachhead-segment` — Identify the first beachhead market segment
- `ideal-customer-profile` — ICP with demographics, behaviors, JTBD, and needs
- `growth-loops` — Design sustainable growth loops (flywheels)
- `gtm-motions` — Evaluate GTM motions and tools (product-led, sales-led, etc.)
- `competitive-battlecard` — Sales-ready battlecard with objection handling and win strategies

**Commands (3):**

- `/plan-launch` — Full GTM strategy from beachhead to launch plan
- `/growth-strategy` — Design growth loops and evaluate GTM motions
- `/battlecard` — Create a competitive battlecard

**Examples:**

Skills:
- `What's the best beachhead segment for a developer productivity tool?`
- `Design a growth loop for a B2B SaaS with a freemium tier`
- `Define our ICP for an AI-powered HR screening platform`

Commands:
- `/plan-launch AI code review tool targeting mid-size engineering teams`
- `/battlecard Our CRM vs Salesforce for the SMB market`
- `/growth-strategy Two-sided marketplace for connecting freelancers with startups`

</details>

<details>
<summary><strong>7. pm-marketing-growth</strong> — Marketing ideas, positioning, value props, naming, North Star metrics (5 skills, 2 commands)</summary>

Product marketing and growth: marketing ideas, positioning, value proposition statements, product naming, and North Star metrics.

**Skills (5):**

- `marketing-ideas` — Creative, cost-effective marketing ideas with channels and messaging
- `positioning-ideas` — Product positioning differentiated from competitors
- `value-prop-statements` — Value proposition statements for marketing, sales, and onboarding
- `product-name` — Product name brainstorming aligned to brand values and audience
- `north-star-metric` — North Star Metric + input metrics with business game classification

**Commands (2):**

- `/market-product` — Brainstorm marketing ideas, positioning, value props, and product names
- `/north-star` — Define your North Star Metric and supporting input metrics

**Examples:**

Skills:
- `Brainstorm 5 positioning angles that differentiate us from Notion`
- `What's a good North Star Metric for a two-sided marketplace?`
- `Generate value prop statements for our sales team's pitch deck`

Commands:
- `/market-product B2B analytics dashboard for e-commerce managers`
- `/north-star Two-sided marketplace connecting freelancers with clients`

</details>

<details>
<summary><strong>8. pm-utilities</strong> — Resume review, legal documents, proofreading, dummy datasets (5 skills, 6 commands)</summary>

PM utilities beyond core product work: resume review, legal documents, and proofreading.

**Skills (4):**

- `review-resume` — PM resume review and tailoring against 10 best practices (XYZ+S formula, keywords, structure)
- `draft-nda` — Non-Disclosure Agreement with jurisdiction-appropriate clauses
- `privacy-policy` — Privacy policy covering GDPR/CCPA compliance
- `grammar-check` — Grammar, logic, and flow checking with targeted fixes

**Commands (5):**

- `/review-resume` — Comprehensive PM resume review
- `/tailor-resume` — Tailor a resume to a specific job description
- `/draft-nda` — Draft an NDA
- `/privacy-policy` — Draft a privacy policy
- `/proofread` — Check grammar, logic, and flow

**Examples:**

Skills:
- `Review my PM resume against best practices [attach PDF]`
- `Check this product announcement for grammar and clarity`

Commands:
- `/review-resume [attach your PM resume]`
- `/tailor-resume [attach resume + paste job description]`
- `/proofread Here's the draft of our Q1 investor update`

</details>

<details>
<summary><strong>9. pm-vibe-coding</strong> — NEW — Vibe specs, prototyping plans, tech decisions, code review, deployment, debugging (6 skills, 6 commands)</summary>

Skills for PMs building products with AI-assisted coding tools (Cursor, Replit, GitHub Copilot, Claude Code).

**Skills (6):**

- `vibe-coding-spec` — Write a natural-language specification optimized for AI coding assistants
- `prototype-plan` — Plan an AI-assisted prototyping session with tool selection and build sequence
- `technical-decision-guide` — Make technical architecture decisions without deep engineering background
- `code-review-for-pms` — Review AI-generated code from a PM perspective
- `deploy-checklist` — Pre-launch deployment checklist for PM-builders
- `debug-with-ai` — Guide through debugging AI-generated code

**Commands (6):**

- `/vibe-spec` — Create a vibe coding specification
- `/plan-prototype` — Plan an AI-assisted build session
- `/tech-decision` — Get guidance on a technical architecture decision
- `/review-code` — Review AI-generated code from a PM perspective
- `/deploy-check` — Run through a deployment checklist
- `/debug-help` — Get help debugging AI-generated code

**Examples:**

Commands:
- `/vibe-spec A job board for climate tech roles`
- `/plan-prototype A waitlist page with referral tracking`
- `/tech-decision Which database should I use for my app?`
- `/deploy-check My Next.js app before sharing with beta users`

</details>

<details>
<summary><strong>10. pm-guided-learning</strong> — Interactive Socratic learning modules for PM skills (8 skills, 9 commands)</summary>

Interactive, Socratic-method learning modules. These skills teach PM concepts through guided exercises and simulations — they don't produce deliverables, they build skills.

**Skills (8):**

- `learn-discovery` — Guided learning on continuous discovery (Teresa Torres's OST framework) via simulated scenario
- `learn-strategy` — Guided learning on product strategy using Roger Martin's Playing to Win cascade
- `learn-metrics` — Interactive metrics workshop: define NSM, input metrics, and counter-metrics for a fictional product
- `learn-prioritization` — Apply RICE, ICE, and Opportunity Score to the same backlog and compare results
- `learn-user-research` — Simulated user interview practice with feedback on question quality and bias
- `learn-stakeholder-management` — Simulated stakeholder alignment scenario with conflicting priorities
- `learn-ai-pm` — Guided learning on AI product management: model evaluation, responsible AI, prompt engineering, and AI metrics
- `learn-vibe-coding` — Interactive guide to getting started with vibe coding: tool selection, writing specs, building prototypes, and shipping

**Commands (9):**

- `/learn` — Discover all learning modules and get a recommendation based on your experience level
- `/learn-discovery` — Start the discovery learning module
- `/learn-strategy` — Start the strategy learning module
- `/learn-metrics` — Start the metrics learning module
- `/learn-prioritization` — Start the prioritization learning module
- `/learn-interview` — Start the user research interview practice
- `/learn-stakeholders` — Start the stakeholder management simulation
- `/learn-ai-pm` — Start the AI product management learning module
- `/learn-vibe-coding` — Start the vibe coding learning module

**Examples:**

Commands:
- `/learn` — I'm a new PM, what should I learn first?
- `/learn-discovery` — Start the OST discovery module
- `/learn-interview` — Practice user interview techniques
- `/learn-ai-pm` — Learn how to evaluate and manage AI features
- `/learn-vibe-coding` — Get started building with AI coding tools

</details>

<details>
<summary><strong>12. pm-communication</strong> — Writing, meeting prep, stakeholder updates (3 skills, 2 commands)</summary>

Communication skills for PMs: general-purpose writing assistant, meeting preparation, and stakeholder updates covering briefs, emails, status reports, executive summaries, and presentation prep.

**Skills (3):**

- `writer` — General-purpose PM writing assistant for briefs, emails, Slack messages, proposals, and presentations — adapts tone and structure to audience
- `meeting-prep` — Prepare for any PM meeting — 1:1s, stakeholder alignments, leadership reviews, and cross-functional planning sessions with structured talking points and anticipated questions
- `stakeholder-update` — Create structured stakeholder updates, status reports, and executive summaries with audience-calibrated detail levels

**Commands (2):**

- `/prep-meeting` — Prepare for any PM meeting with structured talking points, anticipated questions, and success criteria
- `/write-update` — Create a polished stakeholder update or status report tailored to your audience

**Examples:**

Skills:
- `Help me write an email to my VP about why we need to delay the feature launch by 2 weeks`
- `I have a 1:1 with my manager tomorrow — help me prepare talking points`
- `Write a weekly status update for the push notifications project`

Commands:
- `/prep-meeting 1:1 with my manager about project deprioritization`
- `/write-update Weekly progress on the Search Redesign project for leadership`

</details>

<details>
<summary><strong>13. pm-thinking-tools</strong> — Thinking partner, devil's advocate, strategic clarity, technical analysis (4 skills, 3 commands)</summary>

Critical thinking and analysis skills for PMs: collaborative thinking partner, constructive criticism and stress-testing, strategic clarity for team identity, and technical translation for understanding systems and codebases.

**Skills (4):**

- `thought-partner` — Collaborative thinking partner for exploring ideas, challenges, and decisions through structured dialogue
- `devil-advocate` — Constructive critic and stress-tester for PM ideas, proposals, and strategies — finds weaknesses and strengthens arguments
- `strategic-clarity` — Four-phase guided workflow for establishing team identity and strategic positioning — ABSORB, AUDIT, ARTICULATE, ALIGN
- `technical-analyst` — Technical translator for PMs — helps understand systems, codebases, APIs, and technical concepts in PM-friendly terms

**Commands (3):**

- `/think` — Think through a problem collaboratively — explore ideas, surface assumptions, and find clarity on tough decisions
- `/challenge` — Stress-test an idea, proposal, or strategy — find weaknesses and strengthen your thinking before presenting to stakeholders
- `/plan-week` — Plan your week as a PM — review last week, set priorities, allocate time, and flag risks

**Examples:**

Skills:
- `Help me think through whether we should build the new reporting dashboard or improve the existing one`
- `Challenge my proposal to add AI-generated playlist descriptions`
- `I just started as PM for the messaging team — help me establish strategic clarity`
- `Explain how the in-app messaging service works from a PM perspective`

Commands:
- `/think Should we invest in improving our existing product or build something new?`
- `/challenge [paste your PRD or proposal] Find the weaknesses`
- `/plan-week I have a product review Thursday and sprint planning Friday`

</details>

---

## About

This marketplace evolves with product practice and AI capabilities.

Originally curated by Paweł Huryn. Extended and maintained by [Tarun Narang](mailto:tarunccet@gmail.com).

This project builds on the original [phuryn/pm-skills](https://github.com/phuryn/pm-skills) repository. Selected skills based on the work of:

- Teresa Torres — [*Continuous Discovery Habits*](https://www.amazon.com/Continuous-Discovery-Habits-Discover-Products/dp/1736633309/)
- Marty Cagan — [*INSPIRED*](https://www.amazon.com/INSPIRED-Create-Tech-Products-Customers/dp/1119387507/) and [*TRANSFORMED*](https://www.amazon.com/dp/1119697336/)
- Alberto Savoia — [*The Right It*](https://www.amazon.com/Right-Many-Ideas-Yours-Succeed/dp/0062884654)
- Dan Olsen — [*The Lean Product Playbook*](https://www.amazon.com/dp/1118960874/)
- Roger L. Martin — [*Playing to Win*](https://www.amazon.com/Playing-Win-Expanded-Bonus-Articles/dp/B0F25SDYWV/)
- Ash Maurya — [*Running Lean*](https://www.amazon.com/dp/B004J4XGN6/)
- Strategyzer — [*Business Model Generation*](https://www.amazon.com/dp/0470876417/) and [*Value Proposition Design*](https://www.amazon.com/dp/1118968050/)
- Christina Wodtke — [*Radical Focus*](https://www.amazon.com/Radical-Focus-Achieving-Important-Objectives/dp/0996006052)
- Anthony W. Ulwick — [*Jobs to Be Done*](https://jobs-to-be-done-book.com/)
- Alistair Croll & Benjamin Yoskovitz — [*Lean Analytics*](https://www.amazon.com/Lean-Analytics-Better-Startup-Faster/dp/1449335675/)
- Sean Ellis — [*Hacking Growth*](https://www.amazon.com/Hacking-Growth-Fastest-Growing-Companies-Breakout/dp/045149721X/)
- Maja Voje — [*Go-To-Market Strategist*](https://gtmstrategist.com/)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## Known Issue on Windows

If your Cowork is unstable and can't start a VM ([claude-code/issues/27010](https://github.com/anthropics/claude-code/issues/27010)), try:

```powershell
$action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-WindowStyle Hidden -Command `"if ((Get-Service CoworkVMService).Status -ne 'Running') { Start-Service CoworkVMService }`""

$trigger = New-ScheduledTaskTrigger -RepetitionInterval (New-TimeSpan -Minutes 1) -Once -At (Get-Date)

$settings = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries

Register-ScheduledTask -TaskName "CoworkVMServiceMonitor" `
  -Action $action `
  -Trigger $trigger `
  -Settings $settings `
  -RunLevel Highest `
  -User "SYSTEM"
```

It solves 90% of the issues on Windows.
The remaining 10%: open services.msc > start "Claude" service manually

## License

MIT — see [LICENSE](LICENSE).

# Agentic PM Skills — Agent Instructions

> This file enables auto-discovery by GitHub Copilot and other AI agents.

You are an expert product management assistant with deep knowledge of modern PM frameworks and methodologies. When the user asks for help with any PM task, use the appropriate skill from this repository.

## Repository Structure

This repository contains **9 plugins** with **89 skills** and **59 commands** organized by PM domain:

```
{plugin}/skills/{skill-name}/SKILL.md   — Domain knowledge (skill)
{plugin}/commands/{command-name}.md      — User-triggered workflow (command)
{plugin}/.claude-plugin/plugin.json      — Plugin manifest
```

## Available Plugins

### pm-ai-product-management — AI Feature Development
Skills: `ai-build-buy-partner`, `ai-data-strategy`, `ai-feature-definition`, `ai-incident-response`, `ai-model-evaluation`, `ai-user-research`, `prompt-engineering`, `responsible-ai`
Commands: `/ai-spec`, `/ai-model-eval`, `/responsible-ai-review`, `/ai-metrics`, `/ai-roadmap`, `/ai-feature-launch`

### pm-data-analytics — Metrics, Experiments, and SQL
Skills: `ab-test-analysis`, `cohort-analysis`, `event-tracking-plan`, `funnel-analysis`, `metric-definition`, `product-metrics`, `sql-queries`
Commands: `/analyze-test`, `/analyze-cohorts`, `/design-funnel`, `/north-star`, `/plan-tracking`, `/write-query`, `/data-driven-discovery`

### pm-execution — PRDs, Sprints, Delivery
Skills: `adr`, `brainstorm-okrs`, `create-prd`, `edge-cases`, `job-stories`, `meeting-prep`, `outcome-roadmap`, `pre-mortem`, `prioritization`, `release-notes`, `retro`, `solution-brief`, `sprint-plan`, `stakeholder-map`, `stakeholder-update`, `summarize-meeting`, `test-scenarios`, `user-stories`, `writer`, `wwas`
Commands: `/meeting-notes`, `/plan-okrs`, `/pre-mortem`, `/prep-meeting`, `/sprint`, `/stakeholder-map`, `/test-scenarios`, `/transform-roadmap`, `/write-prd`, `/write-stories`, `/write-update`

### pm-go-to-market — Launch Strategy and Growth
Skills: `growth-loops`, `gtm-motions`, `gtm-strategy`, `ideal-customer-profile`, `marketing-ideas`, `positioning-ideas`, `product-name`
Commands: `/battlecard`, `/growth-strategy`, `/marketing-plan`, `/plan-launch`

### pm-guided-learning — Interactive PM Learning
Skills: `learn-ai-pm`, `learn-discovery`, `learn-metrics`, `learn-prioritization`, `learn-stakeholder-management`, `learn-strategy`, `learn-user-research`, `learn-vibe-coding`
Commands: `/learn`, `/learn-ai-pm`, `/learn-discovery`, `/learn-interview`, `/learn-metrics`, `/learn-prioritization`, `/learn-stakeholders`, `/learn-strategy`, `/learn-vibe-coding`, `/find-skill`

### pm-market-research — Research and Analysis
Skills: `competitor-analysis`, `customer-journey-map`, `market-sizing`, `research-personas`, `sentiment-analysis`, `user-segmentation`
Commands: `/analyze-feedback`, `/competitive-analysis`, `/research-users`

### pm-product-discovery — Ideation and Validation
Skills: `analyze-feature-requests`, `brainstorm-experiments-existing`, `brainstorm-experiments-new`, `brainstorm-ideas-existing`, `brainstorm-ideas-new`, `hypothesis`, `identify-assumptions-existing`, `identify-assumptions-new`, `interview-script`, `opportunity-solution-tree`, `problem-statement`, `summarize-interview`
Commands: `/brainstorm`, `/discover`, `/interview`, `/lean-validation`, `/setup-metrics`, `/triage-requests`

### pm-product-strategy — Strategy Frameworks
Skills: `ansoff-matrix`, `business-model`, `devil-advocate`, `lean-canvas`, `monetization-models`, `pestle-analysis`, `pivot-decision`, `porters-five-forces`, `pricing-strategy`, `product-strategy`, `product-vision`, `startup-canvas`, `swot-analysis`, `value-proposition-canvas`
Commands: `/business-model`, `/challenge`, `/market-scan`, `/pricing`, `/strategy`, `/value-proposition`

### pm-vibe-coding — PM Builders (Code with AI)
Skills: `code-review-for-pms`, `debug-with-ai`, `deploy-checklist`, `prototype-plan`, `technical-analyst`, `technical-decision-guide`, `vibe-coding-spec`
Commands: `/review-code`, `/debug-help`, `/deploy-check`, `/plan-prototype`, `/tech-decision`, `/vibe-spec`

## When to Use Which Skill

| User is asking about... | Use this skill |
|------------------------|---------------|
| Defining a problem before solutioning | `problem-statement` |
| Writing testable hypotheses | `hypothesis` |
| Comparing solution options (lightweight) | `solution-brief` |
| Writing a full feature spec | `create-prd` |
| Documenting a technical decision | `adr` |
| Finding error states and edge cases | `edge-cases` |
| Whether to pivot or persevere | `pivot-decision` |
| Evaluating AI/LLM models | `ai-model-evaluation` |
| Defining AI feature behavior | `ai-feature-definition` |
| Ethical AI review | `responsible-ai` |
| Defining North Star metrics | `product-metrics` |
| A/B test results | `ab-test-analysis` |
| Funnel drop-off analysis | `funnel-analysis` |
| Risk analysis before launch | `pre-mortem` |
| Prioritizing features or backlog | `prioritization` |
| Sprint planning | `sprint-plan` |
| Competitive landscape | `competitor-analysis` |
| Go-to-market strategy | `gtm-strategy` |
| User interview preparation | `interview-script` |
| Learning a PM framework | any `learn-*` skill |

## Workflow Bundles (End-to-End Chains)

For complex tasks, use these commands that chain multiple skills:

- `/discover` — Full product discovery cycle (ideation → assumptions → experiments)
- `/lean-validation` — Lean Startup validation (problem → hypothesis → experiments → decide)
- `/ai-feature-launch` — AI feature from concept to launch (model eval → spec → responsible AI → incident planning)
- `/data-driven-discovery` — Data-driven discovery (metrics → tracking → funnels → cohorts → experiments)

## General Behavior

- Always apply the most relevant PM framework for the task
- Structure outputs with clear headings, tables, and actionable next steps
- Ask clarifying questions if the request is ambiguous
- After completing any task, suggest relevant follow-up commands
- Use primary school reading level — jargon should be explained on first use
- When multiple skills could apply, use DISAMBIGUATION.md for routing guidance

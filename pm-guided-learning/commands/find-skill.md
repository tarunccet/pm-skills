---
description: "Discover the right PM skill for your current situation. Asks about your context and recommends the best skill or command to use."
argument-hint: "[optional: describe your situation]"
---

## /find-skill

Helps you discover the right PM skill for your current situation.

**If the user provided an argument**, use it as context and skip to the recommendation step.

**Otherwise, ask the user these questions one at a time:**

1. **What stage of PM work are you in?**
   - 🔍 Discovery (understanding users, validating ideas)
   - 🗺️ Strategy (vision, positioning, business model)
   - ⚙️ Execution (PRDs, roadmaps, sprints, OKRs)
   - 📊 Research (competitors, market sizing, personas)
   - 📈 Analytics (metrics, A/B tests, cohort analysis)
   - 🚀 GTM (launch, growth loops, ICP, marketing)
   - 🤖 AI Product (AI features, responsible AI, prompts)
   - 💻 Building (vibe coding, prototyping, deployment)
   - 🎓 Learning (deepening PM knowledge interactively)

2. **What's your specific task?** (1-2 sentences describing what you're trying to accomplish)

**Then recommend 1-3 skills** that best fit the user's situation:

For each recommendation, include:
- The skill name (e.g., `brainstorm-ideas-existing`)
- The plugin it belongs to (e.g., `pm-product-discovery`)
- A 1-sentence explanation of why this skill fits
- The command to invoke it (e.g., `/brainstorm-ideas-existing`)

**Reference skills by category:**

- **Discovery**: brainstorm-ideas-existing, brainstorm-ideas-new, brainstorm-experiments-existing, brainstorm-experiments-new, identify-assumptions-existing, identify-assumptions-new, interview-script, summarize-interview, analyze-feature-requests, opportunity-solution-tree
- **Strategy**: product-vision, product-strategy, value-proposition-canvas, lean-canvas, business-model, startup-canvas, swot-analysis, pestle-analysis, porters-five-forces, ansoff-matrix, monetization-models, pricing-strategy
- **Execution**: create-prd, outcome-roadmap, brainstorm-okrs, prioritization, user-stories, job-stories, wwas, sprint-plan, pre-mortem, retro, stakeholder-map, release-notes, summarize-meeting, test-scenarios
- **Research**: research-personas, competitor-analysis, market-sizing, user-segmentation, sentiment-analysis, customer-journey-map
- **Analytics**: product-metrics, ab-test-analysis, cohort-analysis, sql-queries, funnel-analysis, event-tracking-plan, metric-definition
- **GTM**: gtm-strategy, gtm-motions, growth-loops, ideal-customer-profile, marketing-ideas, positioning-ideas, product-name
- **AI Product**: ai-feature-definition, ai-model-evaluation, responsible-ai, prompt-engineering, ai-build-buy-partner, ai-user-research, ai-data-strategy, ai-incident-response
- **Vibe Coding**: vibe-coding-spec, prototype-plan, code-review-for-pms, technical-decision-guide, debug-with-ai, deploy-checklist
- **Learning**: learn-foundations, learn-discovery, learn-strategy, learn-prioritization, learn-metrics, learn-user-research, learn-stakeholder-management, learn-execution, learn-ai-pm, learn-vibe-coding, learn-capstone, learn-pm-course

**End with:** "You can also browse the full plugin list in [marketplace.json](../../.claude-plugin/marketplace.json) or see the skill overview in the [README](../../README.md)."

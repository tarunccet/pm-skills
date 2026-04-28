# Getting Started with Agentic PM Skills

This guide gets you from zero to value fast.

**What you get:** 9 plugins, 93 skills, and 63 commands for discovery, strategy, execution, analytics, go-to-market, AI product work, PM-builder workflows, and guided learning.

---

## 1. Choose your install path

### Option A — MCP server (recommended)

Use the MCP server when you want the fastest setup and the full catalog without cloning the repo.

```bash
claude mcp add pm-skills -- npx -y ai-pm-skills-mcp
```

You can also add the same command to Claude Desktop, Cursor, or Windsurf MCP settings.

### Option B — Claude marketplace

```bash
claude plugin marketplace add tarunccet/pm-skills
```

Then install the plugins you want.

### Option C — Skills-only install

Copy `SKILL.md` folders into your tool's skills directory if your assistant supports markdown skills.

See the full [compatibility matrix](./compatibility-matrix.md).

---

## 2. Start by role

| Role | First command | What to do next |
|---|---|---|
| PM | `/discover` | `/strategy` → `/write-prd` |
| PM-builder | `/plan-prototype` | `/vibe-spec` → `/deploy-check` |
| AI PM | `/ai-feature-launch` | `/responsible-ai-review` → `/ai-metrics` |
| PM leader | `/plan-okrs` | `/transform-roadmap` → `/write-update` |
| Learner | `/course` | `/learn-foundations` |

Need a simpler bundle? See [starter packs](./starter-packs.md).

---

## 3. Try one command now

### Explore a problem
```text
/lean-validation Users abandon onboarding after they connect their first data source
```

### Write a PRD
```text
/write-prd Enterprise SSO and SCIM provisioning for IT admins
```

### Launch an AI feature
```text
/ai-feature-launch AI assistant for support ticket triage with human review
```

### Plan a prototype
```text
/plan-prototype Internal repository for customer interviews with AI tagging and search
```

---

## 4. Use a workflow, not a one-off prompt

| Goal | Workflow |
|---|---|
| New idea | `/discover` → `/strategy` → `/plan-launch` |
| Risky problem | `/lean-validation` → `/setup-metrics` → `/write-prd` |
| Feature delivery | `/write-prd` → `/write-stories` → `/test-scenarios` → `/sprint` |
| AI feature | `/ai-feature-launch` → `/responsible-ai-review` → `/ai-metrics` |
| PM onboarding | `/course` → `/learn-foundations` → `/learn-capstone` |

More examples: [workflow guide](./workflows.md)

---

## 5. Evaluate quickly

If you are deciding whether this repo is worth adopting, start here:

- [Proof and mini case studies](./case-studies.md)
- [10 sample outputs](./skill-output-samples)
- [FAQ](./faq.md)
- [Compatibility matrix](./compatibility-matrix.md)
- [Demo walkthrough](./demo-walkthrough.md)

---

## 6. Available plugins

| Plugin | Skills | Commands | Best for |
|---|---:|---:|---|
| pm-product-discovery | 12 | 6 | discovery, assumptions, experiments |
| pm-product-strategy | 14 | 6 | strategy, pricing, business models |
| pm-execution | 20 | 11 | PRDs, stories, sprints, communication |
| pm-market-research | 6 | 3 | personas, segmentation, competitors |
| pm-data-analytics | 7 | 7 | metrics, funnels, SQL, experiments |
| pm-go-to-market | 7 | 4 | launch, positioning, naming |
| pm-ai-product-management | 8 | 6 | AI specs, model eval, responsible AI |
| pm-vibe-coding | 7 | 6 | prototyping, AI coding, deployment |
| pm-guided-learning | 12 | 14 | PM Foundations Course |

---

## Next steps

- Full overview: [README.md](../README.md)
- Starter packs: [starter-packs.md](./starter-packs.md)
- Compatibility: [compatibility-matrix.md](./compatibility-matrix.md)
- FAQ: [faq.md](./faq.md)
- Proof: [case-studies.md](./case-studies.md)
- Release trust checklist: [release-checklist.md](./release-checklist.md)

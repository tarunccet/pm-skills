---
description: "Run through a deployment checklist before launch: security, database, monitoring, analytics, performance, and pre-launch testing."
argument-hint: "[product/feature being deployed]"
---

## /deploy-check

Uses the `deploy-checklist` skill.

Run a pre-deployment checklist for $ARGUMENTS.

This command walks you through everything to verify before sharing your product with users: secrets management, monitoring setup, analytics, performance, and testing. Prevents the most common PM-builder deployment mistakes.

**When to use**: Before every meaningful deployment — alpha, beta, or production launch.

### Edge Cases
- **If it's just a quick demo for yourself**: Skip to the security section only (secrets in env vars)
- **If deploying to production with real users**: Complete every section without shortcuts
- **If the tech stack is unusual**: Adapt the checklist items to the specific platform

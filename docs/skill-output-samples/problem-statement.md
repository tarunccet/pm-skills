# Skill Output Sample: problem-statement

> **Skill:** `problem-statement` | **Plugin:** `pm-product-discovery` | **Input:** "Users are abandoning our onboarding flow"

---

## Problem Statement: Onboarding Drop-Off — Acme Analytics

### Problem Statement

We believe **new trial users** experience **confusion and overwhelm** when they encounter the workspace setup step in onboarding, which leads to **52% abandonment before reaching their first insight**.

### User Segment

- **Who:** Free trial users signing up for the first time (self-serve B2B SaaS)
- **Estimated size:** ~3,200 new signups/month; ~1,660 abandon before activation
- **How we know:** Mixpanel funnel analysis (Jan–Mar 2025), confirmed by 18 user interviews

### Current Behavior

- Users complete email verification (94% pass rate) then hit the "Create Workspace" step
- 52% drop off at workspace setup; of those who leave, 78% never return
- Common workaround: users skip optional fields and create empty workspaces, then churn at Day 3 because they see no value

### Pain Points

1. **Too many required fields** — workspace setup asks for team size, industry, data source, and role before showing any product value (interview evidence: 14/18 participants cited this)
2. **No clear payoff** — users don't understand *why* they need to configure a workspace before seeing the product (session recordings show 40% hover over the "Skip" link that doesn't exist)
3. **Technical jargon** — terms like "data connector" and "aggregation pipeline" confuse non-technical buyers (support tickets: 23% of onboarding-related tickets reference terminology)

### Business Impact

- **User impact:** New users invest 4–6 minutes in a form that feels unrewarding, then leave frustrated
- **Business impact:** At current conversion rates, onboarding drop-off costs ~$186K ARR/quarter in lost trial-to-paid conversions
- **Opportunity cost:** Growth team is spending 30% of capacity on re-engagement emails instead of activation experiments

### Evidence

| Evidence | Source | Strength |
|----------|--------|----------|
| 52% drop-off at workspace setup step | Mixpanel funnel (n=9,600) | Strong |
| 14/18 interviewees cited "too many fields" | User interviews (Mar 2025) | Strong |
| 78% of drop-offs never return within 14 days | Amplitude cohort analysis | Strong |
| "Skip" link hover heat (40% of sessions) | FullStory session recordings | Moderate |
| 23% of onboarding tickets mention jargon | Zendesk tag analysis | Moderate |

### Root Cause Analysis (5 Whys)

1. Why do users abandon onboarding? → The workspace setup step feels too long and unclear.
2. Why does it feel too long? → It requires 7 fields before showing any product value.
3. Why are there 7 required fields? → The backend needs them to provision a data pipeline.
4. Why must provisioning happen before the user sees anything? → Architecture requires a workspace before loading any dashboard.
5. Why? → **Root cause:** The product was designed workspace-first rather than value-first; no lightweight "preview" mode exists.

### Success Criteria

- Onboarding completion rate increases from 48% to 70% within 60 days of shipping a fix
- Time-to-first-insight decreases from 12 minutes to under 4 minutes
- Day-7 retention for new signups improves by ≥ 10 percentage points

### What This is NOT (Anti-Scope)

- Not about improving the *paid* onboarding or enterprise SSO setup experience
- Not about redesigning the entire product navigation or information architecture
- Not about adding new data connectors or integrations

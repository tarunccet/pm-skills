# Skill Output Sample: prioritization

> **Skill:** `prioritization` | **Plugin:** `pm-execution` | **Input:** "Prioritize Q2 feature backlog for a B2B SaaS product"

---

## Feature Prioritization: CloudSync Q2 Backlog

### RICE Scoring

| Rank | Feature | Reach (users/qtr) | Impact (1–3) | Confidence (%) | Effort (person-weeks) | RICE Score | Rationale |
|------|---------|-------------------|--------------|----------------|-----------------------|------------|-----------|
| 1 | **SSO / SAML Integration** | 4,200 | 3 | 90% | 6 | 1,890 | Top-requested by enterprise pipeline; blocking 3 deals worth $280K ARR |
| 2 | **Bulk CSV Import** | 3,800 | 2 | 80% | 3 | 2,027 | High raw score; critical for migration from legacy tools |
| 3 | **Real-Time Collaboration** | 5,000 | 3 | 60% | 10 | 900 | High reach and impact but large effort and lower confidence in scope |
| 4 | **Custom Dashboard Builder** | 2,500 | 2 | 70% | 8 | 438 | Moderate demand; differentiator vs. Competitor X but high effort |
| 5 | **Slack Notification Integration** | 6,000 | 1 | 85% | 2 | 2,550 | Highest raw RICE but low impact per user — quality-of-life improvement |

> *RICE Score = (Reach × Impact × Confidence) / Effort*

### Priority Recommendation

**Recommended Q2 build order:**

1. **SSO / SAML Integration** — Despite ranking #2 in raw RICE, this is the top strategic priority. It unblocks $280K in enterprise pipeline and is a hard requirement for SOC 2 compliance. Ship first.
2. **Bulk CSV Import** — High RICE score with low effort. Quick win that accelerates customer migration and reduces onboarding support tickets (currently 35% of volume).
3. **Slack Notification Integration** — Lowest effort, highest raw RICE. Can be shipped as a fast-follow in the same sprint as CSV Import.

**Defer to Q3:**

4. **Real-Time Collaboration** — High potential but 60% confidence suggests scope is unclear. Run a design spike in Q2; build in Q3 with validated scope.
5. **Custom Dashboard Builder** — Moderate demand, high effort. Better suited for Q3 after collaboration work clarifies data model requirements.

### What to Cut

| Feature | Reason to Defer | Recommended Action |
|---------|----------------|-------------------|
| Real-Time Collaboration | Scope uncertainty (60% confidence); 10 person-weeks is half the Q2 capacity | Run 1-week design spike → validate scope → schedule for Q3 |
| Custom Dashboard Builder | Depends on data model changes from collaboration feature; moderate demand | Collect 10 more customer interviews to validate demand; revisit Q3 |

### Trade-Off Analysis

- **Capacity assumption:** 20 person-weeks available in Q2 across 4 engineers
- **Recommended allocation:** SSO (6) + CSV Import (3) + Slack (2) + Spike (1) = 12 person-weeks committed, 8 weeks buffer for bugs, tech debt, and unplanned work
- **Risk:** If SSO takes longer than estimated, Slack integration is the first item to slip

### Dependency Map

```
SSO / SAML ──→ (none — can start immediately)
Bulk CSV Import ──→ (none — can start immediately, parallelizable with SSO)
Slack Integration ──→ depends on notification service refactor (in progress, ETA Week 2)
Real-Time Collaboration ──→ depends on WebSocket infrastructure + design spike
Custom Dashboards ──→ depends on data model changes from Collaboration feature
```

### Sensitivity Check

- If **SSO confidence drops** (e.g., SAML provider complications), RICE score falls to 1,260 — still #2 but would warrant a spike first
- If **Collaboration confidence rises** to 80% after the design spike, its RICE score jumps to 1,200 — making it a strong Q3 #1

> *Full prioritization would include stakeholder input scores, a weighted decision matrix, and scenario modeling for different capacity levels.*

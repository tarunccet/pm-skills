# Skill Output Sample: hypothesis

> **Skill:** `hypothesis` | **Plugin:** `pm-product-discovery` | **Input:** "Adding a progress bar to onboarding will reduce drop-off"

---

## Hypothesis: Onboarding Progress Bar — Acme Analytics

### Hypothesis Statement

We believe that **adding a visible progress bar to the onboarding flow** for **new trial users** will result in **higher onboarding completion rates**, as measured by **step-3 completion rate** changing from **48% to 60%** within **30 days** of launch.

### Why We Believe This

- **Mechanism:** Progress indicators reduce perceived effort and create a commitment/completion bias (Zeigarnik effect). Users who can see they are "60% done" are more likely to finish than users with no sense of progress.
- **Supporting evidence:**
  - Duolingo's onboarding redesign with progress indicators increased completion by 22% (case study, 2023)
  - Internal A/B test on our settings wizard showed +14% completion when a step counter was added (Q3 2024, n=1,200)
  - 9/18 user interviewees said they "didn't know how much more was left" during onboarding
- **Confidence level:** Medium — strong directional evidence, but our onboarding has unique friction (workspace provisioning) that a progress bar alone may not solve

### Assumption Risk Matrix

| Assumption | Uncertainty | Impact | Priority |
|-----------|-------------|--------|----------|
| Users drop off because of perceived (not actual) length | Medium | High | Test first |
| A progress bar is noticeable without other UX changes | Low | Medium | Monitor |
| Completion rate improvement translates to Day-7 retention | Medium | High | Test first |
| Engineering effort is < 1 sprint to implement | Low | Low | Accept |

### Validation Plan

- **Method:** A/B test — 50/50 split on new signups; control = current onboarding, variant = same flow + progress bar (e.g., "Step 2 of 4")
- **Sample size:** 2,000 new signups per variant (4,000 total), based on 80% power to detect a 12pp lift
- **Duration:** 14–21 days (based on ~270 daily signups)
- **Success criteria:** Step-3 completion rate ≥ 58% in the variant group (statistically significant at p < 0.05)
- **Fail criteria:** Step-3 completion rate shows < 4pp improvement or no statistical significance after full sample
- **Inconclusive criteria:** Directional improvement (4–10pp) but p-value between 0.05 and 0.15

### Decision Framework

| Result | Action |
|--------|--------|
| ✅ Validated | Ship progress bar to 100% of users; proceed with deeper onboarding redesign (progressive disclosure) |
| ❌ Invalidated | Deprioritize cosmetic onboarding changes; investigate reducing required fields or adding a "preview mode" |
| ⚠️ Inconclusive | Extend test for 2 additional weeks; if still inconclusive, combine with field-reduction experiment |

### Related Hypotheses

- *Reducing required fields from 7 to 3 will improve completion* — tests a different lever (actual effort vs. perceived effort)
- *Showing a sample dashboard before workspace setup will improve completion* — tests value-first framing
- Both may compound with a progress bar; plan to test sequentially, not concurrently

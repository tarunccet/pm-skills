# Skill Output Sample: solution-brief

> **Skill:** `solution-brief` | **Plugin:** `pm-execution` | **Input:** "Reduce onboarding drop-off with a guided tour overlay"

---

## Solution Brief: Guided Tour Overlay for Onboarding

**Date:** 2025-05-15
**Author:** Sarah Chen, Product Manager
**Status:** In Review

---

### Problem

New trial users of Acme Analytics drop off at a 52% rate during onboarding because the workspace setup flow is long, jargon-heavy, and offers no preview of product value — costing an estimated $186K ARR per quarter in lost conversions.

### Proposed Solution

Introduce a **guided tour overlay** that activates on first login, walking new users through 4 key steps: (1) connect a sample data source, (2) view a pre-built demo dashboard, (3) customize one widget, and (4) invite a teammate. The tour uses tooltips, spotlight highlights, and a dismissible progress tracker. Users can skip or restart the tour at any time.

The tour replaces the current 7-field workspace setup form. Required workspace configuration is deferred to a background process using sensible defaults, which users can customize later in Settings.

### Why This Solution

| Alternative | Description | Main Advantage | Why Not |
|-------------|-------------|---------------|---------|
| Reduce form fields to 3 | Remove optional workspace config fields | Lowest effort (~1 week) | Doesn't solve "no value preview" — still a form before the product |
| Video walkthrough | 2-min onboarding video on first login | Explains value proposition quickly | Passive experience; users still face the same form after watching |
| Template gallery | Let users pick a pre-built workspace template | Shows value faster via templates | Requires building and maintaining templates; doesn't teach core workflows |
| **Guided tour overlay** | **Interactive walkthrough with live product** | **Hands-on learning + value preview + progressive config** | **Selected: balances value delivery with setup completion** |

### Target Users

- **Primary:** New free-trial users (self-serve signup, 3,200/month) — typically data analysts or team leads evaluating the product
- **Secondary:** Users who signed up but never completed onboarding (1,660/month "dormant" accounts eligible for re-engagement)

### Key Risks

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Tour feels patronizing to technical users | Medium | Medium | Add "I know what I'm doing — skip tour" option on step 1 |
| Demo data source creates false expectations | Low | High | Clearly label demo data; prompt to connect real source at tour end |
| Tour breaks on mobile viewports | Medium | Medium | Design mobile-responsive tooltips; test on iOS Safari and Chrome Android |
| Deferred workspace defaults cause issues later | Low | Medium | Run background validation; surface a gentle "Complete your setup" nudge at Day 3 |

### Success Metrics

- **Primary metric:** Onboarding completion rate — from 48% → 70% within 60 days
- **Secondary metric:** Time-to-first-insight — from 12 min → under 4 min
- **Guardrail 1:** Day-7 retention must not decrease (currently 34%)
- **Guardrail 2:** Support ticket volume for "setup issues" must not increase

### Effort Estimate

- **Size:** M (Medium) — estimated 4–5 weeks with 2 frontend engineers + 1 designer
- **Key dependencies:** Design system tooltip component (exists but needs spotlight mode); analytics events for tour step tracking (new instrumentation)
- **Unknowns:** Performance impact of overlay rendering on low-end devices; will require a load-test spike (1–2 days)

### Recommendation

**Write PRD** — Evidence is strong (user research, quantified business impact, successful A/B test precedent from settings wizard), and effort is moderate. Proceed to full PRD with detailed interaction specs, then schedule for the next sprint cycle.

> *A full solution brief might include wireframe links, stakeholder feedback log, and competitive benchmarks for onboarding experiences.*

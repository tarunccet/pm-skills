# Skill Output Sample: pre-mortem

> **Skill:** `pre-mortem` | **Plugin:** `pm-execution` | **Input:** "Launch of new billing system migration"

---

## Pre-Mortem Analysis: Billing System Migration — InvoiceCloud

### Tigers (Real Risks)

**Tiger 1: Data migration corruption**
- **Category:** Technical
- **Evidence:** Legacy system has 14 undocumented custom fields; test migration (Feb 2025) showed 3.2% of invoice records had mismatched currency codes
- **Likelihood:** High
- **Impact:** Customers see incorrect balances → support surge, potential churn, regulatory risk

**Tiger 2: Payment gateway downtime during cutover**
- **Category:** Operational
- **Evidence:** Stripe migration guide estimates 15–45 min of webhook downtime during DNS cutover; our SLA guarantees 99.95% uptime (max 22 min/month)
- **Likelihood:** High
- **Impact:** Failed payments during cutover window → revenue leakage, customer complaints, SLA breach penalties

**Tiger 3: Enterprise contract pricing logic mismatch**
- **Category:** Business
- **Evidence:** 23 enterprise accounts have custom pricing tiers stored as JSON blobs in the legacy system; new system uses a normalized pricing table. QA found 5/23 accounts had pricing discrepancies in staging.
- **Likelihood:** Medium
- **Impact:** Enterprise customers billed incorrectly → contract disputes, legal exposure, trust erosion

### Paper Tigers (Overblown Concerns)

**Paper Tiger 1: "Users will hate the new invoice UI"**
- The new UI was tested with 40 users in beta; satisfaction scored 4.3/5. Visual changes are cosmetic; core workflows are identical. Change management emails and in-app banners are already planned.

**Paper Tiger 2: "We'll lose Stripe webhook history"**
- Stripe retains webhook logs for 30 days; we're archiving all events to S3 before cutover. Historical data access is preserved via the archive API.

**Paper Tiger 3: "Tax calculation engine won't handle international edge cases"**
- New tax engine (TaxJar) has been processing our sandbox transactions since January with 100% accuracy across 12 countries. Edge cases (VAT reverse charge, digital services tax) were explicitly tested.

### Elephants (Unspoken Worries)

**Elephant 1: The migration timeline assumes zero scope creep, but legal just requested GDPR audit logging that wasn't in the original spec.**
- Investigate: Schedule a 30-minute scope review with legal and engineering lead this week. If audit logging is required pre-launch, timeline slips 2–3 weeks.

**Elephant 2: The team doing the migration has never worked with the legacy codebase — all original authors have left the company.**
- Investigate: Identify the two riskiest legacy modules, assign a 2-day code archaeology spike, and document tribal knowledge before cutover begins.

### Classification Table

| Risk | Type | Urgency | Owner | Due Date |
|------|------|---------|-------|----------|
| Data migration corruption | Tiger | 🔴 Launch-blocking | Marco S. | 2 weeks pre-launch |
| Payment gateway downtime | Tiger | 🔴 Launch-blocking | DevOps team | 1 week pre-launch |
| Enterprise pricing mismatch | Tiger | 🟡 Fast-follow | Billing team | 30 days post-launch |
| New invoice UI backlash | Paper Tiger | ⚪ Track | Design team | Post-launch monitoring |
| Stripe webhook history loss | Paper Tiger | ⚪ Track | Platform team | Pre-launch (already mitigated) |
| GDPR audit logging scope | Elephant | 🔴 Launch-blocking (if confirmed) | Legal + Eng | This week |
| Legacy codebase knowledge | Elephant | 🟡 Fast-follow | Eng Lead | 1 week pre-launch |

### Action Plans for Launch-Blocking Tigers

**Data migration corruption:**
1. Run full production-replica migration in staging by May 1
2. Build automated reconciliation script comparing record counts and currency totals
3. Establish rollback plan: keep legacy system read-only for 72 hours post-cutover
4. **Go/no-go gate:** < 0.1% record discrepancy rate on final dry run

**Payment gateway downtime:**
1. Schedule cutover for Sunday 2:00–4:00 AM ET (lowest traffic: ~12 transactions/hour)
2. Implement payment queue: buffer failed webhooks and replay after cutover
3. Notify enterprise customers 7 days in advance with exact maintenance window
4. **Go/no-go gate:** Successful zero-downtime rehearsal in staging environment

> *Full pre-mortem would include stakeholder sign-off, RACI for each action item, and a cutover-day war room plan.*

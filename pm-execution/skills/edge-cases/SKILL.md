---
name: edge-cases
description: "Systematically identify error states, boundary conditions, and recovery paths for a feature using the BOUNDARY method — reduces post-launch defects by surfacing what specs miss. Use after writing a PRD, before sprint planning, during QA planning, or when reviewing acceptance criteria for completeness."
---

# Edge Case Analysis

Systematically surface the error states, boundary conditions, and failure modes that specs forget and users always find — before your customers do.

### What You'll Need
| Input | Required? | Example |
|-------|-----------|---------|
| Feature spec, PRD, or user story | ✅ Required | "Users can upload CSV files to bulk-import contacts" |
| Target platform and tech stack | 🟡 Recommended | Web app, React + Node.js, PostgreSQL |
| Known constraints or SLAs | 🟡 Recommended | "Max 10k rows per upload, 99.9% uptime SLA" |
| User personas or segments | ⚪ Optional | Free-tier vs enterprise, admin vs member |
| Previous bug reports or incidents | ⚪ Optional | "Last CSV upload crashed on unicode characters" |

> **Don't have everything?** Start anyway — the skill will work with what you provide and flag where richer input would improve the output.

### Domain Context

Edge cases live in the gap between what the spec describes and what users actually do. They are part of **Execution** because they bridge product requirements and engineering implementation — catching them early avoids costly post-launch patches. The best PMs treat edge case analysis as a standard step between PRD and sprint planning, not as something QA catches later.

### Context

You are conducting an edge case analysis for **$ARGUMENTS**.

If the user provides files (PRDs, user stories, technical specs, or past incident reports), read them first to understand the full feature scope.

### Instructions

### Phase 0: Context Confirmation

Before proceeding, review what's been provided in $ARGUMENTS and the conversation context. **Only ask about what's missing — don't re-ask what's already clear.**

1. **Summarize** what you understand from the provided context — restate the product, feature, or situation back to the user in 2-3 sentences.
2. **Identify gaps** — if any of the following are unclear, ask:
   - What feature or user flow are we identifying edge cases for?
   - What is the expected happy-path behavior?
   - Are there known constraints (technical, regulatory, accessibility)?
3. **Confirm**: _"Here's my understanding: [summary]. I plan to [brief description of what the skill will produce]. Does this look right, or would you like to adjust anything before I proceed?"_

If the user provides additional context, incorporate it. If the user confirms, proceed.

1. **Understand the feature scope**:
   - What is the happy path? Walk through the ideal user flow end-to-end.
   - What data does the feature accept, process, and output?
   - Who are the users and what permissions do they have?
   - What systems does this feature depend on?

2. **Apply the BOUNDARY method** — systematically walk through each category:

   **B — Boundaries**
   - Minimum and maximum values (0, 1, max, max+1)
   - Empty states — what happens with no data?
   - Character limits, file size limits, quantity limits
   - First-time use vs. power-user scenarios

   **O — Outages and Errors**
   - What if a downstream service is unavailable?
   - What if the database is slow or unreachable?
   - What if a third-party API returns an error or unexpected format?
   - What if the operation partially completes then fails?

   **U — Unusual Inputs**
   - Unicode, emoji, special characters, RTL text
   - Extremely long strings or extremely large numbers
   - Malformed data — missing fields, wrong types, invalid formats
   - Copy-pasted content with hidden formatting

   **N — Network and Performance**
   - Slow connections, timeouts, dropped connections mid-operation
   - What happens on retry? Is the operation idempotent?
   - Concurrent users hitting the same resource
   - Mobile vs. desktop vs. API client differences

   **D — Data Edge Cases**
   - Duplicate entries — how are they detected and handled?
   - Stale data — what if underlying data changed during the operation?
   - Null, undefined, or missing optional fields
   - Time zones, date boundaries, daylight saving transitions

   **A — Access and Permissions**
   - User tries an action they don't have permission for
   - Permissions change mid-session (role revoked, account downgraded)
   - Shared resources — what if two users edit the same thing?
   - Account states — suspended, deleted, pending verification

   **R — Race Conditions**
   - Two users submit the same action simultaneously
   - User double-clicks a submit button
   - Browser back button after form submission
   - Webhook or callback arrives before the initiating request completes

   **Y — Yesterday's Assumptions**
   - What if a feature flag is toggled mid-use?
   - What if the user's subscription tier changes during the flow?
   - What if the product is used in a country/locale you didn't design for?
   - What if the feature is used at 10× the expected scale?

3. **Classify each edge case by severity**:
   - **Critical** — data loss, security breach, or total feature failure
   - **High** — feature broken for a meaningful user segment
   - **Medium** — degraded experience, workaround exists
   - **Low** — cosmetic issue or extreme corner case

4. **Recommend a handling approach** for each:
   - **Block** — prevent the action and show a clear error
   - **Degrade gracefully** — provide a reduced experience with explanation
   - **Show error** — display a helpful error message with recovery steps
   - **Retry** — automatically retry with backoff
   - **Ignore** — document as known limitation, no action needed

5. **Format the output** as an Edge Case Matrix:

   ```
   ## Edge Case Analysis: [Feature Name]

   ### Edge Case Matrix
   | # | Category | Edge Case | Severity | Expected Behavior | Handling | Acceptance Criteria |
   |---|----------|-----------|----------|-------------------|----------|-------------------|
   | 1 | Boundaries | User uploads 0-byte file | High | Show error: "File is empty" | Block | Given empty file, when uploaded, then show error and no data changes |
   | 2 | ... | ... | ... | ... | ... | ... |

   ### Summary
   - **Total edge cases identified**: [N]
   - **Critical (must-fix before launch)**: [N]
   - **High (should-fix before launch)**: [N]
   - **Medium (fast-follow)**: [N]
   - **Low (backlog)**: [N]

   ### Recommended Priority
   [Which edge cases to address in which sprint/phase]
   ```

Save as markdown. The edge case matrix is the primary deliverable — it can be imported directly into your issue tracker.

### Notes

- Aim for 15-30 edge cases per feature — fewer suggests shallow analysis, more suggests the feature scope is too broad.
- Pair this with the `test-scenarios` skill to turn edge cases into executable test cases.
- When NOT to use: for high-level strategy discussions (too tactical) or well-understood CRUD operations with existing patterns (overkill).
- Revisit after user testing — real users will find edge cases you missed.

---

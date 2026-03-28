---
name: code-review-for-pms
description: "Review AI-generated code from a PM perspective: spec compliance, security red flags, data model soundness, UX issues in frontend code, and error handling against product requirements."
category: vibe-coding
complexity: intermediate
tags: ["vibe-coding", "code-review", "security", "quality", "ai-generated-code"]
---

# Code Review for PMs

## Purpose
Review AI-generated code without needing deep engineering expertise. Focuses on what PMs can and should catch: does the code match the spec, are there obvious security issues, is the data model right, are UX requirements implemented, and does error handling match what users should experience.

## Domain Context
PMs reviewing AI-generated code are not looking for algorithmic efficiency or coding style — engineers handle that. PMs should focus on: correctness against requirements, security basics (especially around user data), data model alignment with the product spec, and whether error states surface correctly to users. These are the issues most likely to cause product failures and that PMs are best positioned to catch.

**Why AI-generated code needs PM review**: AI coding assistants are optimized for "working code" — code that runs without errors. They are not optimized for "correct product behavior." It's common for AI to implement the technically correct version of a requirement but miss the product intent. For example: an AI might correctly implement "users can delete their account" but not add a confirmation step, not clean up related data, and not send a confirmation email — all of which are product requirements, not just code requirements.

**The PM review mindset**: You are not reviewing code quality. You are auditing product correctness. Ask "does this code do what the user needs?" not "is this good code?"

## When to Use
- Use when AI has generated a significant chunk of code and you want to verify it
- Use before sharing a prototype with users
- Use when you notice the app behaving unexpectedly
- Use when you want a structured checklist before calling a feature "done"
- Use after each major coding session as a quality gate

## When NOT to Use
- Don't use as a replacement for an engineer's code review on production code
- Don't use for performance optimization review (get an engineer)
- Don't use when you haven't written a spec first (you need something to compare against)

## Instructions

You are reviewing AI-generated code for **$ARGUMENTS**.

Ask the user to paste the relevant code, or describe what was built. Then run through these review dimensions:

### 1. Spec Compliance Check
Compare implementation against the original specification:
- [ ] Does the user flow match what was specified, step for step?
- [ ] Are all required fields present in the data model?
- [ ] Do API endpoints match the specified contracts (method, path, response shape)?
- [ ] Are all MVP features implemented (not just partially)?
- [ ] Are any features implemented that were explicitly out of scope?
- [ ] Does the AI's interpretation of "done" match your definition?

**How to verify**: Walk through each user story from your spec and trace whether the code implements it correctly. A good prompt: "Show me where in the code [user story] is implemented, step by step."

**Common spec compliance failures in AI-generated code**:
- AI implements the "happy path" only (no error handling, no edge cases)
- AI adds features not in the spec (over-engineering) — remove them if they complicate things
- AI implements a simplified version of a flow that misses a required step
- AI uses a different data model than specified (e.g., uses a single table when the spec required two)

### 2. Security Red Flags (PM-Level)
Look for these common AI-generated code security issues:

**Critical (fix before any public sharing)**:
- [ ] **Exposed API keys**: Are any API keys, secrets, or passwords hardcoded in the code? They should be in environment variables referenced as `process.env.VARIABLE_NAME`
- [ ] **No authentication on protected routes**: Can someone access user data by navigating directly to a URL without logging in? Every `/api/` endpoint that handles user data should check authentication
- [ ] **Unauthenticated admin routes**: Is the admin area protected? Try navigating to `/admin` while logged out
- [ ] **Password storage in plain text**: User passwords must never be stored directly — they should be hashed using bcrypt or similar
- [ ] **Missing .gitignore for .env**: Is the `.env` file excluded from the repository?

**Important (fix before beta users)**:
- [ ] **SQL injection risk**: Is user input being inserted directly into database queries? Look for string concatenation with SQL (e.g., `"SELECT * FROM users WHERE id = " + userId`). Should use parameterized queries or ORM
- [ ] **Missing input validation**: Are API endpoints accepting any input without validation? Look for missing type checks, length limits, and format validation on user-submitted data
- [ ] **Exposed user data**: Do API endpoints return fields that should be private (e.g., password hash, internal IDs, other users' data)?
- [ ] **CORS misconfiguration**: Is the API accepting requests from any origin? For production, this should be restricted to your frontend domain

**How to flag**: If you see any critical issues, they are blockers. Stop and fix them before sharing the code or URL with anyone.

**Quick security audit prompt for AI**: "Audit this code for security vulnerabilities. Specifically check for: hardcoded secrets, unprotected routes, SQL injection, missing input validation, and exposed sensitive data. Show me every instance."

### 3. Data Model Review
Check that the data model matches your spec:
- [ ] Are all entities from your spec present in the code?
- [ ] Do fields match the types you specified (string vs number vs boolean vs date)?
- [ ] Are relationships between entities correctly implemented (foreign keys, joins)?
- [ ] Is there a `created_at` and `updated_at` on records that need audit trails?
- [ ] Are there database schema files or migrations (so the schema is documented and reproducible)?
- [ ] Are required fields enforced at the database level (NOT NULL constraints)?
- [ ] Are unique fields enforced at the database level (UNIQUE constraints)?
- [ ] Is there an index on fields you'll frequently query by (user_id, email, status)?

**Common data model failures**:
- AI creates a simpler schema than specified (merges entities that should be separate)
- AI stores data as JSON blobs instead of normalized tables (makes querying harder later)
- AI forgets to add foreign key constraints (data integrity breaks silently)
- AI uses string IDs instead of UUIDs or auto-increment IDs (inconsistent with your spec)

### 4. UX/Frontend Issues
Review the frontend from a product perspective — not code style, but user experience correctness:

**States that must be implemented**:
- [ ] **Loading state**: Does the UI show a loading indicator while async operations run? (Users should never see a blank screen after clicking)
- [ ] **Empty state**: What shows when there's no data yet? (Not a blank page — a helpful empty state message)
- [ ] **Error state**: Does the UI show a user-friendly error message when something fails? (Not a raw error object dumped on screen)
- [ ] **Success state**: Does the user know when an action succeeded? (Confirmation message, redirect, or UI update)

**UX correctness checks**:
- [ ] Do form validation messages appear near the field they relate to?
- [ ] Are destructive actions (delete, cancel subscription, remove member) protected by a confirmation step?
- [ ] Is navigation logical — does the back button work as expected?
- [ ] Do error messages use plain language, not technical jargon? ("Something went wrong, please try again" not "Error 422: Unprocessable Entity")
- [ ] On mobile: are touch targets large enough? (Minimum 44x44px for buttons)
- [ ] Are required form fields marked as required?

**How to check**: Walk through every user flow in the app in a browser while logged into the network tab. Trigger every error state deliberately (submit empty forms, disconnect from network, use wrong credentials). Check what the user sees in each case.

### 5. Error Handling
Verify errors are handled from a user perspective — not just that errors are caught, but that they produce the right user experience:

- [ ] What happens when the API is down or returns 500? (Does the user see a helpful message or a crash?)
- [ ] What happens when a user submits a duplicate record (e.g., registers with an existing email)?
- [ ] What happens when a required field is missing from an API call?
- [ ] What happens when the user's session expires mid-use? (Should redirect to login gracefully)
- [ ] What happens when an external API (Stripe, SendGrid, OpenAI) fails? (Graceful fallback or clear error message)
- [ ] Are errors logged server-side? (You need to know when things fail, not just users)

**Error handling anti-patterns to look for**:
- `try/catch` blocks that swallow errors silently (catch block with no handling)
- Generic "Something went wrong" messages for all errors (users can't self-serve)
- Technical error messages shown to users (stack traces, database errors)
- No retry mechanism for transient failures (network timeouts)

### 6. Output: Structured Review Report

**Overall Assessment**: [Pass / Pass with issues / Needs rework]

**Blockers** (must fix before sharing with any user):
- [Issue description]: [File/location] — [How to fix with AI prompt or specific action]

**Recommended Fixes** (should fix before beta users):
- [Issue description]: [File/location] — [How to fix]

**Nice to Have** (can defer to next iteration):
- [Issue description]: [Why it matters] — [How to fix]

**Spec compliance summary**: [X of Y user stories correctly implemented]

## Example
**Blocker found**: OpenAI API key hardcoded on line 12 of `app/api/generate/route.ts` — move to `.env` file as `OPENAI_API_KEY`, add `.env` to `.gitignore`, and set the variable in Vercel's environment variable settings before pushing to GitHub.

**Recommended fix**: The `/api/projects` endpoint returns all projects in the database, not just the current user's projects. On line 24 of `app/api/projects/route.ts`, add a `.where('user_id', userId)` filter using the authenticated user's ID from the session.

**Nice to have**: The delete project button has no confirmation dialog. Add a `window.confirm()` or a modal confirmation before calling the delete API — prevents accidental data loss.

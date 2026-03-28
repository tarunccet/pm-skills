---
name: debug-with-ai
description: "Guide PMs through debugging AI-generated code: how to read error messages, form effective debugging prompts, isolate issues, and decide when to fix forward vs start over."
category: vibe-coding
complexity: intermediate
tags: ["vibe-coding", "debugging", "troubleshooting", "error-handling", "ai-coding"]
---

# Debug with AI

## Purpose
Help PM-builders debug AI-generated code effectively without deep engineering knowledge. Covers how to read error messages, form good debugging prompts for AI assistants, systematically isolate issues, and make the call between fixing forward vs starting a section over.

## Domain Context
AI-generated code fails in predictable patterns: (1) hallucinated API names or library functions that don't exist, (2) type mismatches between frontend and backend (sending a string where a number is expected), (3) missing environment variables, (4) outdated library syntax that the AI learned from older training data, (5) state management issues in React (stale state, missing dependencies in useEffect). Most bugs in PM-builder projects fall into one of these categories. Knowing the category tells you where to look and how to prompt the AI to fix it.

**The debugging mindset for PM-builders**: You are not expected to read and understand all the code. You are expected to: (1) capture the full error, (2) classify the type of problem, (3) give the AI the right context to fix it, and (4) verify the fix actually resolves the user-facing issue. This is a product-level skill, not an engineering one.

**The "3 strikes" rule**: If you've given the AI three attempts to fix the same issue and the error keeps changing or getting worse, stop. The AI is stuck in a patch loop. The solution is to start that section fresh, not to keep patching.

## When to Use
- Use when your app throws an error you can't understand
- Use when the AI "fixed" a bug but broke something else
- Use when you're stuck in a debugging loop and losing time
- Use when you need to explain a bug to an AI assistant effectively
- Use when a feature "works" but doesn't behave the way the spec intended

## When NOT to Use
- Don't use when the app works but you want to optimize performance (different concern)
- Don't use for production incidents (that requires an engineer and an incident process)
- Don't use when the issue is a spec/design question, not a code question (clarify the spec first)

## Instructions

You are helping debug a problem with **$ARGUMENTS**.

### Step 1: Capture the Full Error
Before doing anything else — most debugging failures happen because the PM only shares part of the error with the AI.

**Capture from all three sources**:
1. **Browser console** (F12 → Console tab): Shows frontend JavaScript errors. Look for red text. Copy the full error including the stack trace (the indented lines below the main message)
2. **Terminal/server logs**: Shows backend crashes. If using Next.js, look at the terminal where you ran `npm run dev`. If using Vercel/Railway, check the deployment logs in the dashboard
3. **Network tab** (F12 → Network → filter by "Fetch/XHR"): Shows API failures. Look for requests highlighted in red. Click the failing request and check the "Response" tab — this often contains the most helpful error detail

**Full error template to give the AI**:
```
Browser console error: [paste full error with stack trace]
Server log error: [paste if applicable]
Network response: [paste the failing API response body]
What I was doing when it happened: [describe the user action]
Expected: [what should have happened]
Actual: [what happened instead]
```

### Step 2: Classify the Error Type

Match your error to the closest pattern:

| Error Message Pattern | Error Type | Most Likely Cause | Where to Look |
|----------------------|-----------|-------------------|---------------|
| `Cannot read properties of undefined` | Null reference | Using a variable before it has data | Where the variable is first set; check async loading |
| `Cannot read properties of null` | Null reference | A database query returned no result | Add a null check before accessing properties |
| `404 Not Found` on API call | Route not found | Path typo, wrong HTTP method, routing misconfigured | Check the exact URL in the network tab vs. the route file |
| `401 Unauthorized` | Auth failure | Missing or expired auth token | Check that auth headers are being sent; check token expiry |
| `403 Forbidden` | Permission denied | User doesn't have access to this resource | Check authorization logic and database RLS policies |
| `500 Internal Server Error` | Backend crash | Exception in server code | Check server logs for the actual error message |
| `CORS error` | Cross-origin blocked | Backend missing CORS headers | Backend needs to allow the frontend's origin |
| `Cannot find module '...'` | Import error | Package not installed or wrong import path | Run `npm install`; check the import path spelling |
| `[Function] is not a function` | Type error | Calling something as a function that isn't one | Log the variable before calling it to see its actual type |
| `Connection refused` | Network error | Service not running or wrong port | Is the database/API running? Check the connection string |
| `TypeError: fetch is not a function` | Environment error | Wrong environment (server vs. client context) | Check where the code is running; use appropriate fetch |
| `Hydration error` | React SSR mismatch | Server and client render different content | Check for browser-only APIs (window, localStorage) in server components |
| `Module not found: Can't resolve` | Missing dependency | Package not installed | Run `npm install [package-name]` |
| `SyntaxError: Unexpected token` | Parse error | JSON parse failure or syntax error in code | Log the raw response before parsing; check JSON.parse input |

### Step 3: Form an Effective Debugging Prompt

**Template for AI debugging prompt**:
```
I'm getting this error in my [Next.js / React / Node.js] app:

ERROR:
[paste the FULL error message and stack trace]

RELEVANT CODE:
[paste the specific file and function where the error occurs]

CONTEXT:
- This happens when: [describe the user action that triggers it]
- Expected behavior: [what should happen]
- Actual behavior: [what happens instead]
- This worked before: [yes/no — if yes, what changed?]

Please:
1. Explain what is causing this error
2. Show me the fix
3. Explain why your fix works so I can avoid this pattern in the future
```

**Prompting principles that improve AI debugging**:
- **Always ask for explanation before fix**: "Explain the root cause first, then show me the fix." This prevents the AI from applying a patch that doesn't address the real issue
- **Share the full error, not a summary**: "It says something about undefined" → the AI will guess. Paste the exact error
- **Include the stack trace**: The stack trace shows the exact file and line where the error originates. Without it, the AI is guessing at the location
- **Tell the AI what changed**: If it was working yesterday, say so. "This started failing after I added the Stripe integration" is critical context
- **If the fix didn't work**: Say "That didn't fix it. Here is the new error: [error]" — don't just say "it still doesn't work"
- **After 3 failed fixes**: Say "We've tried 3 approaches and the error keeps changing. Before trying another fix, what are all the possible root causes of this type of error?"

### Step 4: Systematic Isolation
If you can't identify where the error originates:

**1. Comment out to isolate**: Temporarily disable sections of code until the error stops. The last section you disabled is the culprit. Start from the outermost call and work inward.

**2. Add checkpoints**: Add `console.log("CHECKPOINT 1: reached")` before the suspected error location, then move it closer to the error until you find the exact line. Remove all checkpoints when done.

**3. Log the inputs**: Add a log statement just before the failing function to see the exact values being passed in. The error is often that the data is in a different format than expected (e.g., `id` is `"123"` string when the function expects `123` number).

**4. Check the network tab**: In the browser, open F12 → Network → filter by Fetch/XHR. Find the failing API request. Check:
   - Request: What data was actually sent?
   - Response: What did the server actually return?
   - Status code: 400 means bad request (check request body), 401 means auth (check token), 500 means server crash (check server logs)

**5. Reproduce in isolation**: Can you trigger the error from a simpler test? If the bug only happens in a complex multi-step flow, try to reproduce it in fewer steps. A minimal reproduction is much easier to debug.

### Step 5: Fix Forward vs. Start Over Decision

**Fix forward when**:
- You understand the root cause (not just the symptom)
- The fix is isolated to one function, one file, or one component
- The fix doesn't require changing the data model or API contract
- You've been stuck for less than 30 minutes
- The AI's explanation makes sense and you can trace how the fix addresses the root cause

**Start the section over when**:
- You've applied 3+ AI fixes and the error keeps changing or new errors appear
- The AI has applied patches on top of patches and the code is now hard to follow
- The root cause turns out to be an architectural issue (wrong data model, wrong API design)
- You no longer understand what the code is trying to do
- The fix would require changing more than 3 files (this signals a structural problem)

**How to start over effectively** (without losing all progress):
1. Do NOT delete the whole project — only the problematic section (one file or module)
2. Write a new prompt that includes: the full spec for what this section should do + what the previous approach did wrong
3. Example: "The previous implementation of the auth middleware failed because it wasn't correctly reading the session cookie in Next.js App Router. Build a new implementation that: [spec]. Use NextAuth.js with the session strategy, not JWT tokens."
4. Keep the rest of the codebase intact — only regenerate the broken section

### Step 6: Common PM-Builder Bug Patterns & Targeted Fixes

**Pattern 1: "It worked yesterday, now it's broken"**
- Cause candidates: dependency update, environment variable missing, API key expired, database schema drift
- Debugging steps: Run `git diff` to see what changed. Check if any npm packages were updated. Verify environment variables are still set in the hosting platform
- Fix prompt: "Nothing changed in my code but this broke. Help me diagnose: [error]. What could have changed outside my code to cause this?"

**Pattern 2: "The AI generated code with a function/library that doesn't exist"**
- Symptoms: `TypeError: X is not a function`, `Cannot find module`, or the function exists in AI output but errors when called
- Cause: AI hallucinated an API that doesn't exist in the current version of a library, or invented a function name
- Fix prompt: "The function `[name]` you used doesn't exist in [library] version [version]. What's the correct current API? Show me the working replacement using only documented functions."

**Pattern 3: "Data isn't saving / changes aren't persisting"**
- Cause: API call failing silently, wrong HTTP method, missing request body
- Debugging: Open the Network tab, find the POST/PUT request, check the request body (is the data actually being sent?) and the response (is there an error?)
- Fix prompt: "My form submits but data isn't saving. The network tab shows: [paste request and response]. The API endpoint code is: [paste code]. What's wrong?"

**Pattern 4: "Works on localhost, breaks in production"**
- Cause candidates: environment variables not set in production, different Node.js version, build-time vs runtime behavior differences, database migration not run
- Fix prompt: "This works on localhost but fails in production on [Vercel/Railway]. Error is: [error]. What are the most common causes of this type of environment difference in Next.js apps?"

**Pattern 5: "Users are randomly logged out"**
- Cause: Session token expiry not handled, session cookie settings wrong, JWT secret changed
- Fix prompt: "Users are being logged out unexpectedly. I'm using [auth solution]. The session should last 30 days. What needs to be configured to ensure persistent sessions, and how do I handle token refresh when the session expires?"

**Pattern 6: "The page flickers or shows wrong data briefly"**
- Cause: React hydration mismatch, stale state being shown before fresh data loads
- Debugging: Check the browser console for "hydration" errors
- Fix prompt: "My page shows incorrect data for a moment before showing the right data. This is a React hydration or stale state issue. Here is the component code: [paste code]. How do I fix the loading state to prevent the flicker?"

## Output Format
A structured debugging guide with:
1. **Error classification**: What type of error is this?
2. **Most likely cause(s)**: Ranked by probability for this error pattern
3. **Debugging steps to confirm**: How to verify which cause is responsible
4. **Specific fix**: The exact change to make, with AI prompt to use
5. **Verification**: How to confirm the fix actually resolved the issue
6. **Prevention**: What to do differently next time to avoid this pattern

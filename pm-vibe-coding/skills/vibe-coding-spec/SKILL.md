---
name: vibe-coding-spec
description: "Write a natural-language specification optimized for feeding to AI coding assistants. Covers problem statement, user flows, data model, API contracts, UI descriptions, tech stack, and constraints."
category: vibe-coding
complexity: intermediate
tags: ["vibe-coding", "specification", "ai-coding", "cursor", "replit", "prototyping"]
---

# Vibe Coding Spec

### What You'll Need
| Input | Required? | Example |
|-------|-----------|---------|
| Product idea or feature to build | ✅ Required | "A job board for climate tech roles with GitHub sign-in" |
| Core user flow (step-by-step) | ✅ Required | "User lands → browses jobs → applies → gets email confirmation" |
| Target AI coding tool | 🟡 Recommended | Cursor, Replit Agent, Claude Code, Bolt.new |
| Preferred tech stack | ⚪ Optional | Next.js + Supabase + Vercel, or "let AI decide" |
| Known constraints | ⚪ Optional | "No backend, static only" / "Must use our existing auth" |

> **Don't have everything?** Start anyway — the skill will work with what you provide and flag where richer input would improve the output.

## Purpose
Generate a comprehensive "vibe spec" — a structured natural-language specification document designed to be fed directly into AI coding assistants (Cursor, GitHub Copilot, Replit Agent, Claude Code, etc.) to build a working product. A good vibe spec eliminates back-and-forth with the AI by front-loading decisions, context, and constraints.

## Domain Context
"Vibe coding" (term coined by Andrej Karpathy, 2025) describes building software primarily through natural language instructions to AI coding assistants, with the human providing direction, design judgment, and product sense rather than writing code line-by-line. For a PM-builder, the vibe spec is the equivalent of an engineering spec — but written in a way that AI assistants can directly execute.

The key insight: AI coding assistants perform dramatically better with explicit data models, user flows, and constraints defined upfront. Ambiguity creates hallucinated architecture. Specificity creates working code.

Different AI tools interpret specs differently:
- **Cursor**: Works best with detailed file structure hints and explicit library preferences
- **Replit Agent**: Needs clear deployment targets and dependency lists
- **Claude Code**: Benefits from step-by-step sequencing and explicit output formats
- **GitHub Copilot**: Responds well to inline comments explaining intent
- **Bolt.new / v0.dev**: Best with focused UI descriptions; keep backend concerns separate
- **Windsurf**: Works well with multi-file change descriptions and clear module boundaries

**Context window considerations**: Long specs (1500+ words) may need to be chunked when pasting into tools with smaller context windows. For Replit Agent and Bolt.new, lead with the problem statement and core flows — move API contracts and detailed schemas to follow-up prompts. For Cursor and Claude Code, paste the full spec upfront since they handle longer contexts well.

## When to Use
- Use when starting a new product prototype with an AI coding assistant
- Use when you want to avoid repeated back-and-forth clarification with AI
- Use when building an MVP solo as a PM
- Use when handing off a project to an AI assistant (Cursor, Replit, etc.)
- Use when you need a technical document that both engineers and AI tools can understand
- Use when you want to get a working prototype in a single focused session

## When NOT to Use
- Don't use when you need a full engineering spec for a large team (use a PRD + technical spec instead)
- Don't use when the problem is too vague to define user flows (first do discovery)
- Don't use for complex enterprise systems with many integrations (get an engineer involved)
- Don't use when you haven't validated the core problem with users yet

## Instructions

You are helping a PM-builder create a vibe coding specification for **$ARGUMENTS**.

Ask the user these questions if not already provided:
1. What problem does this solve? Who is the primary user?
2. What are the 2-3 core user flows?
3. What tech stack preference do you have? (or say "recommend one")
4. Any constraints: budget, timeline, existing services to integrate?
5. What does the MVP exclude? (scope boundaries)

Then generate the vibe spec document:

### Step 1: Problem Statement & Scope
- One-paragraph problem description
- Who uses it and what they achieve
- What's explicitly OUT of scope for MVP
- Define "done": what does success look like for this prototype?

### Step 2: User Flows
For each core flow (2-3 maximum):
- Name the flow (e.g., "User signs up and creates first project")
- Step-by-step narrative (10-15 steps max)
- What happens on error/edge case
- What data is created or modified by this flow

### Step 3: Data Model
- List every entity (noun) in the system
- For each entity: fields, types, relationships
- Format as a simple table or pseudocode schema
- Mark required vs optional fields
- Indicate which fields are user-editable vs system-generated

### Step 4: API Contracts
- List every API endpoint needed
- For each: method, path, request body, response shape
- Include authentication requirements per endpoint
- Document expected HTTP status codes and error responses
- Keep it simple — REST JSON or describe GraphQL needs

### Step 5: UI Description (No-Code Wireframe)
- For each screen: describe layout in natural language
- Key interactive elements and their behavior
- Empty states (what shows when there's no data)
- Error states (what shows when something fails)
- Loading states (what shows while data is fetching)
- Mobile vs desktop if relevant

### Step 6: Tech Stack Recommendation
- Frontend framework and why
- Backend/API approach
- Database choice and why
- Auth solution
- File storage (if needed)
- Hosting/deployment target
- Third-party APIs/services
- Estimated monthly cost at MVP scale

### Step 7: Constraints & Non-Negotiables
- Performance requirements (page load time targets)
- Security requirements (auth, data privacy, PII handling)
- Browser/device support
- Accessibility requirements (if any)
- Third-party integrations required
- Rate limits or usage caps to design for

### Step 8: AI Coding Instructions Header
Generate a system prompt header to paste at the top of the AI coding session:
```
You are building [product name].
Tech stack: [stack]
My goal: [one sentence]
Start by: [first task]
Coding style: [preferences — e.g., TypeScript strict, functional components, no class components]
File structure: [preferred structure]
When uncertain: ask me before proceeding
Do not: [anti-patterns to avoid — e.g., don't use Redux, don't write raw SQL]
```

### Step 9: First Prompt Sequence
Provide the 3-5 prompts to use in sequence at the start of the coding session:
1. "First, create the project structure and install dependencies: [list]"
2. "Now create the database schema: [schema description]"
3. "Build the [core flow] API endpoint first"
4. "Now build the [core flow] frontend"
5. "Add authentication using [auth solution]"

### Step 10: Spec Iteration Guide
After the AI produces its first output, the spec almost always needs revision. Include this guidance at the end of the document for the spec writer (this section is for the PM's reference, not part of the spec pasted into the AI):

**After the first build attempt, revisit these sections:**
1. **Data model gaps**: Did the AI invent fields you didn't specify, or miss fields you need? Update the data model section and re-prompt: "Update the schema to match this revised data model: [paste updated model]"
2. **Flow mismatches**: Did the AI implement a flow differently than intended? Clarify the specific step: "In the [flow name] flow, step 3 should do [X] instead of [Y]. Here's the updated flow: [paste]"
3. **Tech stack substitutions**: Did the AI swap a library or tool you specified? Explicitly correct it: "Replace [what AI used] with [what you specified]. Here's why: [reason]"
4. **Missing error handling**: The first pass rarely includes proper error states. Add: "For every form submission and API call, add: loading state, success confirmation, and user-friendly error message"
5. **Scope additions**: Did the AI add features you didn't ask for? Remove them: "Remove [feature]. It's out of scope. Focus only on the 3 user flows in the spec"

**When to rewrite vs. patch**: If the AI's first output is 70%+ aligned with the spec, iterate with targeted corrections. If the AI went in a fundamentally wrong direction (wrong architecture, wrong data model structure), rewrite the relevant spec section with more explicit constraints and start that section fresh.

## Output Format
A single markdown document with all 9 spec sections (Steps 1–9), formatted for direct paste into an AI coding assistant context window. Step 10 (Spec Iteration Guide) is a separate reference for the PM to use after the first build attempt — it is not pasted into the AI. Aim for completeness over brevity — a 500-word spec is better than a 100-word spec when it prevents 2 hours of back-and-forth.

## Example

**Input**: "A simple waitlist landing page with email capture and a Notion-style admin dashboard to manage signups"

**Output excerpt**:

### Problem Statement
A landing page for a new product that captures waitlist signups, lets visitors submit their email and name, and provides a simple admin dashboard to view, filter, and manage signups. The goal is to go from 0 to a live waitlist page in one day.

**Out of scope**: Email drip campaigns, referral system, analytics dashboards, payment.

### Data Model
| Entity | Fields | Type | Notes |
|--------|--------|------|-------|
| Signup | id | uuid | auto-generated |
| | email | string | unique, required |
| | name | string | optional |
| | created_at | timestamp | auto-generated |
| | source | string | UTM source, optional |
| | status | enum | pending/approved/rejected, default: pending |
| Admin | id | uuid | auto-generated |
| | email | string | unique, required |
| | password_hash | string | bcrypt hashed |

### Tech Stack
- Frontend: Next.js 14 + Tailwind CSS (fast to build, easy deployment)
- Backend: Next.js API routes (no separate backend needed at MVP scale)
- Database: Supabase (free tier, Postgres, built-in auth)
- Auth: Supabase Auth (email/password for admin only)
- Hosting: Vercel (free tier, one-click deploy from GitHub)
- Cost: $0/month at MVP scale

### AI Session Header
```
You are building a waitlist landing page with admin dashboard.
Tech stack: Next.js 14, TypeScript, Tailwind CSS, Supabase (Postgres + Auth), deployed on Vercel.
My goal: A landing page that captures email signups and an /admin route to manage them.
Start by: Creating the Next.js project with TypeScript and Tailwind, then the Supabase schema.
Coding style: TypeScript strict mode, functional React components, no class components, use shadcn/ui for UI components.
When uncertain: Ask me before choosing a library or architecture pattern.
Do not: Use Redux, write raw SQL, hardcode any secrets.
```

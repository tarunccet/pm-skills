---
name: prototype-plan
description: "Plan an AI-assisted prototyping session: scope the MVP, pick the right AI coding tool, define the build sequence, and estimate effort for a solo PM-builder."
category: vibe-coding
complexity: basic
tags: ["vibe-coding", "prototyping", "planning", "mvp", "build-sequence"]
---

# Prototype Plan

## Purpose
Create a structured plan for building a product prototype using AI coding assistants. Covers tool selection, MVP scoping, build sequence (data model → backend → frontend → deploy), and effort estimation for a solo PM-builder. This prevents the common trap of starting to code without a plan and ending up with a broken half-built prototype.

## Domain Context
AI coding assistants (Cursor, Replit Agent, GitHub Copilot, Bolt.new, v0.dev, etc.) each have different strengths. Cursor excels at complex full-stack apps with a professional codebase. Replit Agent is fastest for quick standalone apps. Bolt.new/v0.dev are best for frontend-only. Choosing the wrong tool adds hours of friction.

The build sequence matters: data model → backend API → frontend → auth → deployment. Building frontend first and then trying to fit the data model is the #1 cause of PM-builder rewrites. Think of it like building a house: foundation before walls, walls before roof.

Understanding realistic effort estimates is critical. AI coding speeds up development by 3-5x for experienced developers, but for PM-builders who are reviewing and guiding AI output (not just accepting it), sessions tend to run longer due to debugging and iteration. The estimates here account for that reality.

## When to Use
- Use when you're about to start building a prototype with AI assistance
- Use before writing your vibe spec to validate scope and approach
- Use when you want to estimate how long building will take
- Use when you've built a vibe spec and need to turn it into a day-by-day execution plan
- Use when you need to decide which AI coding tool to use for a specific project

## When NOT to Use
- Don't use when you already have a full engineering team (use sprint planning instead)
- Don't use for production systems — this is for MVP/prototype only
- Don't use if you haven't validated the problem with at least 3 user conversations first

## Instructions

You are helping a PM-builder plan a prototype build for **$ARGUMENTS**.

Generate a prototype plan covering:

### 1. MVP Scope Definition
- One-sentence product description
- Top 3 user stories that constitute the MVP (use format: "As a [user], I want to [action] so that [outcome]")
- What's explicitly excluded from MVP (parking lot features)
- Success criteria: how will you know the prototype is "done"?
- Minimum viable feature: what is the single most important thing — if you only shipped one feature, what would it be?

### 2. AI Coding Tool Selection
Recommend the best tool(s) based on the project's needs:

| Tool | Best For | Strengths | Limitations |
|------|----------|-----------|-------------|
| **Bolt.new** | Frontend-only, React components, no backend | Instant preview, great UI generation | No persistent backend |
| **v0.dev** | UI component generation, Shadcn UI | Beautiful components fast | Frontend only |
| **Replit Agent** | Quick full-stack apps, demos | Zero setup, DB included, instant deploy | Less control, not production-grade |
| **Cursor** | Complex full-stack apps, existing codebases | Fine-grained control, file editing | Requires setup, slower start |
| **GitHub Copilot** | Existing VS Code projects, code completion | IDE-native, great for iteration | Not great for greenfield from scratch |
| **Claude Code** | Complex logic, architecture, debugging, refactoring | Strong reasoning, great for debugging | Terminal-based, steeper learning curve |
| **Windsurf** | Full-stack apps with agentic flows | Good at multi-file changes | Newer, less battle-tested |

Explain specifically why your recommendation(s) fit this project. Consider:
- Does this project need a backend? (If no: Bolt.new or v0.dev)
- How much control do you need over the code? (High: Cursor; Low: Replit)
- How fast do you need a demo? (Fastest: Replit Agent; Most polished: Cursor)
- What's your comfort level with a terminal? (Low comfort: Replit; High: Claude Code)

### 3. Build Sequence (Session-by-Session Plan)
Break the build into sessions (assuming 2-4 hour focused sessions):

**Session 1: Foundation & Data Model**
- [ ] Create project and set up repository (GitHub)
- [ ] Install dependencies and configure TypeScript/linting
- [ ] Define and create database schema
- [ ] Set up database (Supabase, Firebase, Neon, etc.)
- [ ] Verify database connection from the app
- **Checkpoint**: Can you connect to the DB and create a test record?

**Session 2: Backend / API Layer**
- [ ] Build core API endpoints (CRUD for primary entities)
- [ ] Add input validation
- [ ] Test endpoints with a REST client (curl, Postman, or browser)
- [ ] Handle errors with consistent response format
- **Checkpoint**: Can you create, read, update, and delete the core entity via API?

**Session 3: Core Frontend**
- [ ] Build the primary user flow (the most important screen first)
- [ ] Connect frontend to backend API
- [ ] Handle loading and error states
- [ ] Make it work on mobile (basic responsive layout)
- **Checkpoint**: Can a user complete the core user story end-to-end?

**Session 4: Authentication**
- [ ] Add sign-up and log-in flows
- [ ] Protect routes that require authentication
- [ ] Handle session persistence (stay logged in on refresh)
- [ ] Test with a fresh account (not your dev account)
- **Checkpoint**: Can a new user sign up, complete the core flow, log out, and log back in?

**Session 5: Polish & Deploy**
- [ ] Fix the top 5 UX issues from self-testing
- [ ] Set up environment variables in the hosting platform
- [ ] Deploy to hosting platform
- [ ] Run the deploy checklist (use `/deploy-check`)
- [ ] Share with 3 test users for a quick sanity check
- **Checkpoint**: Is it live at a public URL? Can a stranger use it without guidance?

### 4. Effort Estimate
| Session | Core Tasks | Estimated Hours | Recommended AI Tool |
|---------|-----------|-----------------|---------------------|
| 1: Foundation | Project setup, schema, DB connection | 2–3h | Cursor or Replit |
| 2: Backend | API endpoints, validation, error handling | 3–4h | Cursor or Claude Code |
| 3: Frontend | Core flow UI, API integration, mobile | 3–4h | Cursor + v0.dev for components |
| 4: Auth | Sign-up, login, route protection | 2–3h | Cursor |
| 5: Polish & Deploy | UX fixes, env vars, deploy, test | 2–3h | Cursor + Vercel |
| **Total** | | **12–17 hours** | |

Adjust estimates based on: complexity of data model (+/- 2h), number of external API integrations (+2h each), custom UI requirements (+2h), and your familiarity with the tech stack (+/- 3h).

### 5. Risks & Mitigations
Identify the top 3-5 risks for this specific project:

**Common risks for PM-builders:**
- **Risk**: Auth integration complexity → **Mitigation**: Use Supabase Auth or Clerk instead of rolling your own; don't build auth in Session 1
- **Risk**: Scope creep during build → **Mitigation**: Keep the parking lot list visible; if a new idea comes up, add it to the list and keep building
- **Risk**: AI generates unusable code in a loop → **Mitigation**: Set a "3 strikes" rule — if the AI fails 3 times on the same issue, stop and reframe the prompt from scratch
- **Risk**: External API integration breaks → **Mitigation**: Mock the external API first, integrate real API only after core flow is working
- **Risk**: Unfamiliar tech stack slows you down → **Mitigation**: Use the stack you know best, or ask the AI to walk you through the new pattern before generating code

### 6. Pre-Build Checklist
Before starting Session 1, verify:
- [ ] Vibe spec is written (or at minimum, user flows are clear)
- [ ] Tech stack is decided
- [ ] Dev environment is set up (Node.js, npm/pnpm, VS Code or Cursor)
- [ ] Accounts created: GitHub, Supabase/Firebase, Vercel/Railway
- [ ] You have 2+ uninterrupted hours for the first session

## Output Format
A structured markdown plan ready to execute, with all 6 sections filled in for the specific project.

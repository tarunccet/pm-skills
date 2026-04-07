---
name: technical-decision-guide
description: "Help PMs make technical architecture decisions without deep engineering background — database selection, hosting, auth patterns, monolith vs microservice, API design. Written in PM-friendly language with decision trees."
category: vibe-coding
complexity: advanced
tags: ["vibe-coding", "architecture", "technical-decisions", "database", "hosting", "auth"]
---

# Technical Decision Guide

## Purpose
Guide PMs through key technical architecture decisions when building with AI coding assistants. Translates technical trade-offs into product-management terms: speed vs control, cost vs scale, simplicity vs flexibility. Helps you make good enough decisions quickly without needing a deep engineering background.

## Domain Context
For PM-builders, "good enough architecture" beats "perfect architecture." The goal is an architecture that: (1) gets to working prototype fast, (2) doesn't create painful technical debt for the first 12 months, (3) can be handed off to engineers without a full rewrite.

This guide uses decision trees — answer simple questions to get a recommendation. Each decision includes a PM-friendly explanation of the trade-offs, what you'll regret if you choose wrong, and what to say to an AI coding assistant to implement the recommendation.

**The PM Architecture Principle**: Optimize for developer experience at prototype stage, not theoretical scale. The bottleneck for PM-builder projects is almost never the database or hosting choice — it's the speed of iteration. Choose the stack that lets you move fastest while staying on a path engineers can take over.

## When to Use
- Use when choosing a database for your prototype
- Use when deciding between hosting options
- Use when picking an auth approach
- Use when deciding how to structure your backend
- Use when an AI coding assistant asks you to make an architectural choice
- Use when you're comparing two options and don't know the meaningful trade-offs

## When NOT to Use
- Don't use for enterprise-scale systems (work with a solutions architect)
- Don't use when you already have an engineering team with preferences (ask them instead)
- Don't use when the decision involves compliance requirements (HIPAA, SOC2, GDPR) — consult a security engineer

## Instructions

You are helping a PM-builder make a technical decision for **$ARGUMENTS**.

**Before recommending any specific tool or service**, check what's already known from the conversation context or $ARGUMENTS. **Only ask questions whose answers aren't already clear.** If the user has already shared their project description, tools, stack, or preferences (e.g., in a prior `/plan-prototype` or `/vibe-spec` session), use that context and skip to the relevant decision.

If key context is missing, ask:
1. _"What are you building? Give me a one-sentence description."_
2. _"Are you already using any tools, services, or platforms for this project? (e.g., a specific database, hosting platform, auth provider)"_
3. _"Do you have any constraints — budget, team preferences, compliance requirements, or existing infrastructure you need to integrate with?"_
4. _"How comfortable are you with technical setup? (e.g., prefer managed services with minimal config, comfortable with some setup, experienced with infrastructure)"_

Use their answers to tailor recommendations below. **If the user already has preferences or existing tools, work with those** — only suggest alternatives if there's a clear mismatch with their project needs, and explain the trade-off.

Then ask which decision they need help with, and provide a structured guide:

### Decision 1: Database Selection

**Decision tree**:
1. Does your data have lots of relationships (users → projects → tasks)? → **PostgreSQL** (Supabase, Neon, Railway)
2. Is your data mostly JSON/documents with varying structure? → **MongoDB** (Atlas) or **Firestore**
3. Do you need real-time sync pushed to the frontend without polling? → **Firebase Firestore** or **Supabase** (realtime subscriptions)
4. Just need a simple key-value or session store? → **Redis** (Upstash serverless) or **SQLite** (for single-server apps)
5. Working with lots of files/images/video? → Use a CDN (Cloudflare R2, AWS S3, Supabase Storage) alongside a relational DB

**Detailed options**:
| Database | Best For | Free Tier | PM-Friendliness | Managed By |
|----------|----------|-----------|-----------------|------------|
| Supabase (Postgres) | Most PM-builder projects | Yes (generous) | ⭐⭐⭐⭐⭐ | Supabase |
| Firebase Firestore | Real-time apps, mobile-first | Yes | ⭐⭐⭐⭐ | Google |
| MongoDB Atlas | Document data, flexible schema | Yes | ⭐⭐⭐⭐ | MongoDB Inc |
| Neon (Postgres) | Serverless Postgres, branching | Yes | ⭐⭐⭐⭐ | Neon |
| PlanetScale (MySQL) | High-scale MySQL | Limited (changed 2024) | ⭐⭐⭐ | PlanetScale |
| SQLite (Turso) | Simple apps, low traffic | Yes | ⭐⭐⭐ | Turso |

**How to recommend**: Based on the user's answers about their project and comfort level, recommend the option that best fits. If the user is already using a database, work with it unless there's a clear problem. Present trade-offs rather than a single "right answer."

**What to tell your AI**: Provide the connection details as environment variables. Use the database's official client library rather than raw SQL where available.

### Decision 2: Hosting & Deployment

**Decision tree**:
1. Is your app built with Next.js? → **Vercel** (first choice, seamless integration)
2. Do you need a full backend server (Node.js, Python, Docker)? → **Railway** or **Render**
3. Do you need to run a Docker container? → **Fly.io** or **Railway**
4. Is it a quick demo that doesn't need to be always-on? → **Replit** or **Glitch**
5. Do you need background jobs or cron? → **Railway** or **Render** (not Vercel serverless)

**Detailed options**:
| Platform | Best For | Free Tier | Scaling | Complexity |
|----------|----------|-----------|---------|------------|
| Vercel | Next.js, React, static sites | Yes | Auto | Low |
| Railway | Full-stack, Node, Python, Docker | $5 credit/mo | Manual/auto | Low |
| Render | Full-stack, background jobs | Yes (cold starts) | Manual | Low |
| Fly.io | Docker containers, global edge | Yes | Manual | Medium |
| Netlify | Static sites, serverless functions | Yes | Auto | Low |
| Replit | Quick demos, learning projects | Yes | None | Very Low |
| AWS/GCP/Azure | Production enterprise | No | Full control | Very High |

**How to recommend**: Match the hosting platform to the user's framework and needs. If they're already deployed somewhere, work with that platform unless there's a clear limitation. Present the trade-offs (cost, cold starts, complexity) and let the user choose.

**Cold start warning**: Some free-tier hosting platforms spin down after inactivity and take 30+ seconds to wake up. This is fine for a portfolio project; it's unacceptable for sharing with real users. Ask the user about their use case before recommending a free tier.

### Decision 3: Authentication

**Decision tree**:
1. Are you already using Supabase? → **Supabase Auth** (already included, no extra setup)
2. Do you need social login (Google, GitHub) with a polished UI out of the box? → **Clerk**
3. Are you using a Next.js app and want full control? → **NextAuth.js / Auth.js**
4. Are you using Firebase/Firestore? → **Firebase Auth**
5. Do you need enterprise SSO, SAML, or advanced permissions? → **Auth0**
6. Never → Roll your own (authentication is security-critical, never DIY for a prototype)

**Detailed options**:
| Auth Solution | Setup Time | Social Login | Cost | PM Rating |
|---------------|-----------|--------------|------|-----------|
| Supabase Auth | 15 min | Yes (OAuth) | Free | ⭐⭐⭐⭐⭐ |
| Clerk | 20 min | Yes (many) | Free tier | ⭐⭐⭐⭐⭐ |
| NextAuth.js | 45 min | Yes | Free | ⭐⭐⭐⭐ |
| Firebase Auth | 20 min | Yes | Free | ⭐⭐⭐⭐ |
| Auth0 | 30 min | Yes (many) | Free tier | ⭐⭐⭐ |
| Magic Links | 30 min | No | Free (via Resend/SendGrid) | ⭐⭐⭐ |

**How to recommend**: Never build auth yourself for a prototype — always use an established auth provider. If the user is already using a platform that includes auth (e.g., a backend-as-a-service with built-in auth), use that for lowest friction. If choosing fresh, ask about their needs: Do they need social login? Pre-built UI components? Enterprise SSO? Match the recommendation to those needs.

### Decision 4: Monolith vs Microservices

**For PM-builders**: **Always start monolith.** No exceptions.

Microservices are an organizational scaling solution designed for teams of 20+ engineers working on the same codebase. For a solo PM-builder or small team, microservices add:
- Deployment complexity (multiple services to manage)
- Network latency (services calling each other over HTTP)
- Debugging difficulty (errors span multiple services)
- Infrastructure cost (multiple servers)

**What to build instead**: A **modular monolith** — a single deployment unit with clean internal modules/folders separating concerns (e.g., `/lib/auth`, `/lib/payments`, `/lib/notifications`). This gives you the organizational benefits of microservices without the operational overhead. Engineers can extract services later if actually needed.

**Rule of thumb**: If you don't have at least 3 full-time engineers dedicated to a single service, that service shouldn't exist as a separate microservice.

### Decision 5: API Design — REST vs GraphQL

**For PM-builders**: **Use REST.** Almost universally.

**REST advantages for PM-builders**:
- AI coding assistants generate better REST code (more training data)
- Easier to debug (each endpoint does one thing)
- Every developer understands it
- Better tooling for testing (Postman, curl, browser)
- Simpler caching

**GraphQL advantages** (only relevant when you have these problems):
- Complex data fetching needs across many related entities
- Mobile clients with strict bandwidth constraints
- Multiple frontend teams with different data needs
- You have backend engineers who know GraphQL

**REST best practices for PM-builder projects**:
- Use nouns for resources: `/api/users`, `/api/projects` (not `/api/getUsers`)
- Use HTTP verbs: GET (read), POST (create), PUT/PATCH (update), DELETE (delete)
- Return consistent JSON shape: `{ data: {...}, error: null }` or `{ data: null, error: "message" }`
- Version your API from day one: `/api/v1/...` (makes future changes non-breaking)
- Use plural nouns for collections: `/api/users` not `/api/user`
- Return the created/updated object in POST/PUT responses (not just a success message)

### Decision 6: Frontend Framework

**Decision tree**:
1. Do you want the fastest possible start with AI assistance? → **Next.js** (most AI training data, best ecosystem)
2. Do you need a simple single-page app with no backend? → **Vite + React** (lighter than Next.js)
3. Is this a landing page only? → **Next.js** with static export, or even just **HTML + Tailwind**
4. Is this a mobile app? → **React Native** (with Expo for easier setup) or **Flutter**
5. Do you want to avoid JavaScript frameworks entirely? → **SvelteKit** (simpler mental model)

**How to recommend**: **Next.js with TypeScript** has the broadest AI training data, meaning most AI coding assistants produce better code with it. However, if the user already knows or prefers a different framework, work with that — the best framework for a PM-builder is often the one with the least friction, not the theoretically optimal one. Ask about their experience before recommending.

**If the user has no preference**: Recommend the framework with the strongest AI code-generation support and ecosystem for their project type. Explain why, but make it clear they can change if it doesn't feel right.

### Decision 7: Payments

**How to recommend**: For most PM-builder prototypes, a well-established payment processor with good documentation and AI training data coverage is the safest choice. Ask the user: _"Are you handling subscriptions, one-time payments, or usage-based billing? Do you need to handle international tax/VAT?"_ Match the recommendation to their payment model. **Never** roll your own payment processing — security and compliance requirements make this dangerous and complex.

**What to tell your AI**: Use the payment provider's hosted checkout UI rather than building a custom card form. Store the customer ID and subscription status on the user record.

## Output Format
Decision recommendations with rationale, trade-offs, and specific tool recommendations **tailored to the user's stated needs, preferences, and existing tools**. Written for a PM audience. Each decision includes what to say to your AI coding assistant to implement it. When the user is struggling with a recommended tool mid-build, proactively offer alternatives: _"It sounds like [tool] isn't working well for your situation. Based on what you need, [alternative] might be a better fit because [reason]. Want to try switching?"_

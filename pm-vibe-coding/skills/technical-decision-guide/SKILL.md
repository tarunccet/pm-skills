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

Ask which decision they need help with, then provide a structured guide:

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

**PM recommendation**: For 90% of PM-builder projects, PostgreSQL via Supabase is the right choice. It handles structured data, has a free tier, includes auth and storage, has a visual table editor, and engineers will thank you for it when they inherit the code. Avoid Firebase unless you specifically need real-time push or are building a mobile app.

**What to tell your AI**: "Use Supabase with PostgreSQL. Connection string and anon key will be in environment variables SUPABASE_URL and SUPABASE_ANON_KEY. Use the Supabase JS client library, not raw SQL."

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

**PM recommendation**: Vercel (frontend) + Supabase (backend/DB) is the fastest zero-cost stack for most PM prototypes. If you need a persistent server or background jobs, add Railway. Avoid AWS/GCP/Azure until you have an engineer — the operational overhead is too high for solo PM-builders.

**Cold start warning**: Render's free tier spins down after 15 minutes of inactivity and takes 30+ seconds to wake up. This is fine for a portfolio project; it's unacceptable for sharing with real users. Upgrade to a paid tier ($7/month) for any beta with real users.

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

**PM recommendation**: Never build auth yourself for a prototype. Use **Clerk** if you want the best out-of-the-box UI (pre-built sign-in/sign-up components, user profile management). Use **Supabase Auth** if you're already on Supabase (lowest friction). Both have free tiers that cover prototype scale.

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

**PM recommendation**: **Next.js 14+ with TypeScript and Tailwind CSS** is the default choice for PM-builders. It has the most AI training data (meaning better code generation), the best developer experience, built-in API routes (no separate backend needed for simple apps), and deploys in one click to Vercel.

**Add to your AI session header**: "Use Next.js 14 App Router with TypeScript strict mode, Tailwind CSS for styling, and shadcn/ui for components."

### Decision 7: Payments

**For PM-builders**: **Use Stripe.** It's the default for a reason.

- **Stripe**: Best documentation, best DX, most AI training data, supports subscriptions + one-time payments + usage-based. Free to set up, 2.9% + 30¢ per transaction.
- **Lemon Squeezy**: Simpler for digital products, handles EU VAT, merchant of record model. Good if you sell software licenses.
- **Paddle**: Similar to Lemon Squeezy, better for SaaS subscriptions with global tax handling.
- **Never**: Roll your own payment processing. Security and compliance requirements make this dangerous and complex.

**What to tell your AI**: "Use Stripe for payments. Use Stripe Checkout for the payment UI (don't build a custom card form). Store stripe_customer_id and subscription_status on the user record."

## Output Format
Decision recommendations with rationale, trade-offs, and specific tool recommendations. Written for a PM audience. Each decision includes what to say to your AI coding assistant to implement it.

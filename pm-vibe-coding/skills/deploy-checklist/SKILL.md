---
name: deploy-checklist
description: "Pre-launch deployment checklist for PM-builders: domain setup, SSL, environment variables, database backup, monitoring, error tracking, analytics, SEO, performance, and security basics."
category: vibe-coding
complexity: basic
tags: ["vibe-coding", "deployment", "launch", "checklist", "devops", "security"]
---

# Deploy Checklist

> ⚠️ **This checklist helps you prepare for deployment, but it is NOT a substitute for engineering review.** Before any production deployment, ensure:
> - A qualified engineer has reviewed the code
> - Security review has been completed (especially auth, data handling, API keys)
> - Load/performance testing appropriate to expected traffic has been done
>
> This checklist covers what a PM-builder can verify independently. Flag items you can't verify yourself — those are the ones that need engineering support.

## Purpose
A structured pre-launch checklist for PM-builders deploying their first product or prototype. Covers the basics that AI-generated code often misses: environment variables, SSL, database backups, monitoring, error tracking, and analytics. Prevents the embarrassment of shipping with debug logs, exposed secrets, or no error visibility.

## Domain Context
Most PM-builder deployment failures come from one of these: (1) secrets accidentally committed to GitHub, (2) no error tracking so you find out about crashes from users, (3) database with no backup that gets corrupted, (4) no analytics so you can't measure anything, (5) site title still says "Create Next App."

This checklist is ordered by risk — work top to bottom. The security section is not optional even for quick prototypes, because pushing API keys to a public GitHub repo can result in charges within minutes from automated bots that scan repos for exposed credentials.

**The PM deployment mindset**: Your goal is a "quiet launch" — a product that is live, functional, observable (you know when it breaks), and measurable (you know if people are using it). A quiet launch is better than a big launch with a broken product.

## When to Use
- Use before every meaningful deployment (alpha, beta, or production launch)
- Use when deploying a prototype to share with test users
- Use when moving from "works on my machine" to a public URL
- Use as a final quality gate before sharing a URL in a Slack or email

## When NOT to Use
- Don't use for quick localhost demos that never leave your machine
- Don't use instead of professional DevSecOps for production enterprise systems
- Don't use as a substitute for an engineer's deployment review on high-stakes releases

## Instructions

You are running a deployment checklist for **$ARGUMENTS**.

Work through each section systematically. Mark each item ✅ (done), ❌ (blocker — must fix), or ⚠️ (warning — should fix soon).

### 🔐 Security & Secrets (HIGHEST PRIORITY — check this first)
These are blockers. Do not share a URL publicly if any of these are failing.

- [ ] **No hardcoded secrets in code**: Search your codebase for API keys, passwords, or tokens. Run: `grep -r "sk-" .` and `grep -r "secret" .` to find common patterns. Everything sensitive must be in environment variables
- [ ] **`.env` is in `.gitignore`**: Open your `.gitignore` file and verify `.env`, `.env.local`, `.env.production` are listed. Run `git status` and confirm no `.env` files are staged
- [ ] **Environment variables set in hosting platform**: Go to your Vercel/Railway/Render dashboard and verify all variables from your `.env` file are set in the production environment settings
- [ ] **No debug logs in production**: Remove or guard `console.log` statements that output sensitive data (user emails, tokens, API responses). Use a conditional: `if (process.env.NODE_ENV !== 'production') console.log(...)`
- [ ] **HTTPS/SSL is active**: Visit your live URL in a browser and confirm the padlock icon is shown. On Vercel and Netlify, SSL is automatic. On Railway and Render, it's auto-configured for their default domains
- [ ] **Auth is working end-to-end**: Create a fresh test account (not your dev account), complete the core flow, log out, and log back in. Verify you cannot access protected routes when logged out

### 💾 Database
- [ ] **Database connection string is an environment variable**: Not hardcoded. Look for `DATABASE_URL`, `SUPABASE_URL`, `MONGODB_URI` or similar in your code — they should reference `process.env.*`
- [ ] **Migrations are applied in production**: Run your database migration command against production (e.g., `prisma migrate deploy`, or apply SQL migrations in Supabase's SQL editor)
- [ ] **Database is seeded with required initial data**: Any reference data, categories, or default records that the app needs to function exist in the production database
- [ ] **Database backup configured**: For Supabase: automatic daily backups are enabled on paid plans. For free tier: manually export a backup before launch. For Firebase: configure daily exports to Cloud Storage
- [ ] **Database not publicly accessible**: The database should only accept connections from your app server, not from the public internet. For Supabase: Row Level Security (RLS) policies should be enabled on all tables
- [ ] **Row Level Security (Supabase only)**: If using Supabase, verify RLS is enabled on every table that contains user data. A table with RLS disabled is readable by anyone with your anon key

### 🚨 Monitoring & Error Tracking
You need to know when your app breaks before your users tell you.

- [ ] **Error tracking is configured**: Set up an error tracking service (many have free tiers that cover prototype scale). Ask the user if they already have one or have a preference. The key requirement is that unhandled exceptions are captured and surfaced to you automatically
- [ ] **You know how to view application logs**: In Vercel: go to your project → Functions → view logs in real-time. In Railway: Deployments tab → view logs. Test this before launch so you're not fumbling when something breaks
- [ ] **Server errors are being surfaced**: Verify that a deliberate 500 error in your API is visible in your logs/error tracker. Throw a test error, deploy, trigger it, and confirm you see it
- [ ] **Health check endpoint exists**: Create a simple `GET /api/health` endpoint that returns `{ status: "ok", timestamp: Date.now() }`. This lets you and monitoring tools verify the app is alive
- [ ] **Uptime monitoring (optional for MVP)**: Services like BetterUptime, Freshping (free tier), or Vercel's built-in monitoring can alert you when the site goes down

### 📊 Analytics
You need to know if people are actually using the product.

- [ ] **Analytics are installed**: Ask the user: _"Are you already using an analytics tool? If not, do you prefer open-source/self-hosted, privacy-friendly, or a full-featured product analytics platform?"_ Recommend based on their preference and project needs. The key requirement is that the tool can track page views and custom events
- [ ] **At least page views are tracked**: Verify analytics are firing by visiting your site and checking the analytics dashboard in real-time mode
- [ ] **Key product events are tracked**: Define and track at minimum: sign_up, core_feature_used, and your primary conversion event. In Posthog: `posthog.capture('signed_up', { plan: 'free' })`
- [ ] **You can answer "how many users are active today?"**: Open the analytics dashboard and confirm you can see real-time or daily active user counts

### 🌐 Domain & Branding Basics
These are "done" items — small details that signal professionalism.

- [ ] **Page title is set correctly**: The browser tab should show your product name, not "Create Next App" or "localhost". Check the `<title>` tag in your root layout
- [ ] **Meta description is set**: The homepage should have a `<meta name="description">` tag for SEO and social sharing previews
- [ ] **Open Graph image is set**: When your URL is shared on Slack, Twitter, or LinkedIn, it should show a preview image and your product name. Set `og:title`, `og:description`, and `og:image` on the homepage
- [ ] **Favicon is set**: Not the default browser globe icon. Even a simple colored square with your initials is better than the default
- [ ] **Custom domain connected (if applicable)**: If you have a domain, connect it to your hosting platform. Both Vercel and Railway have simple domain connection wizards. SSL auto-provisions for custom domains

### ⚡ Performance Basics
- [ ] **Page loads in under 3 seconds on mobile**: Test with Google PageSpeed Insights (pagespeed.web.dev). A score above 70 is acceptable for a prototype
- [ ] **Images are optimized**: If using Next.js, use the built-in `<Image>` component instead of `<img>` — it auto-optimizes images. Large unoptimized images are the #1 cause of slow page loads
- [ ] **No console errors in the browser**: Open F12 → Console tab on your live site (not localhost) and confirm there are no red errors. Yellow warnings are okay
- [ ] **Core flow works on mobile**: Specifically test the sign-up and primary user flow on a real mobile device (not just browser dev tools responsive mode)

### 🧪 Pre-Launch Testing
The most important section — test the actual product, not the code.

- [ ] **Tested core flow end-to-end on production URL**: Do not test on localhost for this check. Use the actual live URL with a fresh account
- [ ] **Tested with a completely fresh account**: Log out of everything. Open an incognito window. Create a new account. Complete the core flow. This catches onboarding issues you've become blind to
- [ ] **Tested on a real mobile device**: Open the live URL on your phone. Tap through the core flow. Check that forms are usable, buttons are large enough, and text is readable
- [ ] **Tested in Chrome, Safari, and Firefox**: Most issues appear in Safari (iOS) due to WebKit differences
- [ ] **Shared with 1-2 people for a sanity check**: Send the URL to someone unfamiliar with the product (not a close collaborator). Watch them try to use it without guidance. Fix the top 2 issues they encounter

### 📋 Deployment Report Output

**Overall Status**: [Ready to launch / Not ready — X blockers remain]

**Blockers** (must fix before sharing URL):
- ❌ [Item] — [Specific fix instructions]

**Warnings** (should fix within 48 hours of launch):
- ⚠️ [Item] — [Why it matters and how to fix]

**Completed**: [N] of [Total] checklist items

**Launch confidence**: [High / Medium / Low] — [Brief rationale]

## Example
For a Next.js + Supabase app deployed to Vercel, before sharing with beta users:

- ✅ SUPABASE_URL and SUPABASE_ANON_KEY set in Vercel environment variables
- ✅ `.env.local` is in `.gitignore`
- ❌ **BLOCKER**: OpenAI API key hardcoded in `/app/api/generate/route.ts` line 3 — move to `OPENAI_API_KEY` env var before pushing to GitHub. Cost: $0, Time: 5 minutes
- ⚠️ **WARNING**: No Sentry error tracking installed — add `@sentry/nextjs` before real user launch so you know when things break
- ⚠️ **WARNING**: Page title still says "Create Next App" — update `metadata.title` in `app/layout.tsx`
- ✅ SSL auto-configured by Vercel on the default `.vercel.app` domain
- ✅ Tested core sign-up flow on mobile (iPhone Safari) — works correctly
- ❌ **BLOCKER**: Supabase RLS not enabled on `signups` table — anyone with the anon key can read all signups. Enable RLS and add policy: `select for authenticated users only`

### 🛑 Before You Ship
The items above are what YOU can verify. The following require engineering support:
- Security audit of auth and data handling
- Infrastructure review (scaling, monitoring, alerts)
- Dependency audit (outdated packages, known CVEs)

→ Share this checklist with an engineer before going live.

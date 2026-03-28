---
description: Start the vibe coding learning module — interactive guide to choosing AI coding tools, writing specs, planning builds, and shipping your first prototype as a PM.
argument-hint: "[optional: describe your project idea or say 'no idea yet']"
---

# /learn-vibe-coding — Vibe Coding for PMs Module

Launches the interactive vibe coding learning module for PMs who want to build with AI coding assistants.

## Invocation

```
/learn-vibe-coding                          # start the module — the mentor asks about your project
/learn-vibe-coding a waitlist app           # start with a specific project idea
/learn-vibe-coding no idea                  # start with a practice project provided by the mentor
```

## Workflow

Load and execute the `learn-vibe-coding` skill. The module will:
1. Understand the learner's project idea and experience level
2. Scope the project to an achievable MVP
3. Walk through tool selection and setup
4. Guide the learner through writing their first vibe spec
5. Explain the build sequence session by session
6. Cover how to handle common problems (AI going wrong, bugs, revision)
7. Confirm the learner has a working project or clear next steps

## Edge Cases

- If the learner already has a vibe coding project in progress: skip to the most relevant stage (tool selection, spec writing, debugging, or deployment).
- If the learner has no project idea: provide a simple practice project (e.g., "a personal expense tracker") to work through the module with.
- If the learner wants theory only (no hands-on): briefly explain the concepts, then encourage them to open a tool — the real learning comes from doing.
- If the learner is a developer: acknowledge that and focus the module on the PM aspects — spec quality, product judgment, and review skills — rather than basic tool setup.

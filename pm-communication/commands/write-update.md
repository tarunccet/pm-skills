---
description: Create a polished stakeholder update or status report tailored to your audience — executives, managers, or team
argument-hint: "<project or topic, e.g. 'weekly update on checkout redesign'>"
---

# /write-update -- Stakeholder Update

Draft a structured, audience-calibrated stakeholder update that surfaces progress, risks, and asks clearly. Combines status reporting with PM writing best practices.

## Invocation

```
/write-update weekly status for the Search Redesign project
/write-update executive summary of Q1 product results for the VP
/write-update quick Slack update on onboarding experiment results
/write-update monthly progress report for the platform migration
/write-update                    # asks about your update needs
```

## Workflow

### Step 1: Gather Update Context

Accept context in any form:
- A project name and update type ("weekly update on checkout redesign")
- Raw notes, bullet points, or data dumps
- An uploaded document (meeting notes, sprint report, dashboard screenshot)
- A previous update to build on ("here's last week's update — what changed")

Ask conversationally to fill gaps:

1. **What happened this period?** Accomplishments, milestones hit, things shipped
2. **Where do metrics stand?** Key numbers, trends, comparison to targets
3. **What's at risk or blocked?** Problems, dependencies, things that need attention
4. **What do you need from the reader?** Decisions, resources, approvals, or nothing (FYI)
5. **Who's the audience?** Executive, manager, team, or mixed — this determines length and detail
6. **What channel?** Email, Slack, wiki, presentation — this determines format

If the user provides raw notes or data, synthesize and structure it rather than asking for more.

### Step 2: Draft the Update

Apply the **stakeholder-update** skill to structure the content with the appropriate template — TL;DR, status, progress, metrics, risks, asks, and next steps. Calibrate detail level to the audience:

- **Executive**: 3-5 bullet points, outcome-focused, 30-second read
- **Manager**: 1 page, includes risks and asks, 2-minute read
- **Team**: Full update with all sections, detailed enough to act on

### Step 3: Polish with Writing Best Practices

Apply the **writer** skill to refine the draft:

- Ensure the key message is in the first sentence
- Replace vague language with specific numbers and dates
- Format for scanning — headers, bullets, bold key info
- Match tone to the channel and audience
- Verify every ask has an owner and deadline

Present the polished update and offer:
- "Want me to **create a shorter version** for a different audience (e.g., executive summary)?"
- "Should I **draft a Slack version** of this email update?"
- "Want me to **highlight what changed** since the last update?"
- "Should I **save this as a template** for next week?"

Save the update as a markdown file using the format `YYYY-MM-DD-project-update.md` (e.g., `2025-03-15-search-redesign-update.md`).

## Notes

- If the user provides last week's update, use it as a baseline and highlight what changed
- For bad news updates, lead with the problem and immediately follow with the plan — never bury bad news
- If metrics are missing, note what should be tracked and suggest adding them for next time
- Consistency is key — encourage the user to send updates on the same day and time each period
- Offer to create both a detailed team version and a condensed executive version from the same information

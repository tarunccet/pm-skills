---
description: Prepare for any PM meeting with structured talking points, anticipated questions, and success criteria
argument-hint: "<meeting type and topic, e.g. '1:1 with VP about roadmap changes'>"
---

# /prep-meeting -- Meeting Preparation

Create a comprehensive meeting prep document so you walk in knowing what you want, what they'll ask, and what success looks like.

## Invocation

```
/prep-meeting 1:1 with my manager about getting headcount for Q3
/prep-meeting stakeholder alignment on API deprecation timeline
/prep-meeting leadership review of Q2 product roadmap
/prep-meeting cross-functional planning with Design and Engineering on checkout redesign
/prep-meeting                    # asks about your upcoming meeting
```

## Workflow

### Step 1: Gather Meeting Context

Accept context in any form:
- A meeting description ("1:1 with VP Product about the reorg")
- A calendar invite or agenda (pasted or uploaded)
- A topic and attendee list ("Quarterly business review with Sales leadership")
- A vague description ("I have a hard meeting tomorrow")

Ask conversationally to fill gaps:

1. **Meeting basics**: Who's attending? What's the meeting type? How long?
2. **Topic and trigger**: What's this meeting about? What prompted it?
3. **History**: Have you discussed this before? Any prior decisions or tensions?
4. **Stakes**: What's the best and worst case outcome?
5. **Your goal**: What do you need to walk out with?

If the user provides a document with context, extract what's available and only ask about gaps.

### Step 2: Create the Prep Document

Apply the **meeting-prep** skill to produce a structured prep document:

```
## Meeting Prep: [Meeting Title]

**Date/Time**: [date and time]
**Attendees**: [names and roles]
**Duration**: [length]
**Meeting Type**: [type]

### Goal
[One clear sentence]

### Context
[2-3 sentences of essential background]

### Talking Points
1. [Point] (X min) — Message, evidence, ask
2. [Point] (X min) — Message, evidence, ask
3. [Point] (X min) — Message, evidence, ask

### Anticipated Questions
| Question | Response | Fallback |
|----------|----------|----------|

### Materials Checklist
- [ ] [Items to prepare or send]

### Success Criteria
- [ ] [Concrete outcomes]
```

### Step 3: Practice Responses

After generating the prep document, offer:
- "Want me to **role-play the conversation**? I'll play [attendee] and push back on your points."
- "Should I **draft an opening statement** for the first 60 seconds?"
- "Want me to **create a pre-read** to send attendees in advance?"
- "Should I **prepare a follow-up email template** for after the meeting?"

Save the prep document as a markdown file.

## Notes

- If the meeting goal isn't clear, help the user clarify it before building the prep — a prep doc without a clear goal is busywork
- For difficult conversations (bad news, conflict, resource asks), spend extra time on anticipated questions and fallback positions
- For executive meetings, prep should include a 30-second elevator version of every talking point
- Suggest sending a pre-read if the meeting will cover complex data or new proposals
- Remind users to document decisions and action items during or immediately after the meeting

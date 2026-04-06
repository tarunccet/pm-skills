---
name: event-tracking-plan
description: "Design an analytics instrumentation plan — define key events, properties, naming conventions, and produce a tracking spec document that engineers can implement. Use when setting up analytics for a new product, redesigning a tracking schema, or onboarding engineers to instrumentation work."
---

# Event Tracking Plan

### What You'll Need
| Input | Required? | Example |
|-------|-----------|---------|
| Product / feature to instrument | ✅ Required | Onboarding flow for a B2B SaaS tool |
| Key user actions to track | ✅ Required | Sign-up, profile complete, first project created |
| Analytics platform | 🟡 Recommended | Posthog, Segment, Mixpanel, Amplitude |
| Existing event taxonomy (if any) | 🟡 Recommended | Current event naming conventions or schema |
| Business questions to answer | ⚪ Optional | "Where do users drop off in onboarding?" |

> **Don't have everything?** Start anyway — the skill will work with what you provide and flag where richer input would improve the output.

## Purpose
Create a complete, engineer-ready analytics tracking specification that defines which events to instrument, what properties to capture, how to name them, and what business questions each event answers.

## Domain Context
Analytics instrumentation is a PM responsibility that's often done reactively — you add events when you realize you can't answer a question. This skill flips the approach: define the questions you need to answer *before* building, then design the tracking schema to answer them.

**Key principle:** Track intent, not just action. `signup_completed` tells you a user signed up. `onboarding_step_skipped` with a `step_name` property tells you *where* they gave up. The difference is in properties.

## Instructions

You are designing an event tracking plan for **$ARGUMENTS**.

### Phase 0: Context Confirmation

Before proceeding, review what's been provided in $ARGUMENTS and the conversation context. **Only ask about what's missing — don't re-ask what's already clear.**

1. **Summarize** what you understand from the provided context — restate the product, feature, or situation back to the user in 2-3 sentences.
2. **Identify gaps** — if any of the following are unclear, ask:
   - What product or feature needs instrumentation?
   - What are the key user flows to track?
   - What analytics platform will receive the events?
3. **Confirm**: _"Here's my understanding: [summary]. I plan to [brief description of what the skill will produce]. Does this look right, or would you like to adjust anything before I proceed?"_

If the user provides additional context, incorporate it. If the user confirms, proceed.

### Step 1: Define the Key Business Questions

Before defining events, list 5-7 questions the tracking plan must be able to answer:
- Example: "What percentage of users complete onboarding within 24 hours?"
- Example: "Which features do activated users use most in their first week?"
- Example: "Where does conversion drop off in our sign-up flow?"

These questions drive which events and properties matter.

### Step 2: Design the Event Taxonomy

Organize events into logical groups:

**Event naming convention**: Use `[noun]_[verb]` in snake_case (e.g., `user_signed_up`, `project_created`, `feature_clicked`). Be consistent — choose either past tense or present tense and stick to it.

For each event:

| Event Name | Trigger | When It Fires | Business Question Answered |
|-----------|---------|--------------|--------------------------|
| `[event_name]` | [user action] | [precise moment] | [which question from Step 1] |

### Step 3: Define Event Properties

For each event, define the properties to capture:

```
Event: [event_name]
Description: [what this event represents]
Trigger: [exactly when it fires]
Properties:
  - [property_name] (type: string/number/boolean/array) — [description, example value]
  - [property_name] (type: ...) — [description]
Example payload:
  {
    "event": "[event_name]",
    "timestamp": "[ISO 8601]",
    "[property_name]": "[example_value]",
    ...
  }
```

### Step 4: Define Global/Super Properties

List properties that should be captured on *every* event automatically:

| Property | Type | Description | Example |
|---------|------|------------|---------|
| `user_id` | string | Unique user identifier | `usr_abc123` |
| `session_id` | string | Session identifier | `ses_xyz789` |
| `platform` | string | Web, iOS, Android | `web` |
| `app_version` | string | Product version | `2.4.1` |
| [add product-specific globals] | | | |

### Step 5: Define Identity Events

Specify how users move through identity states:

- **Anonymous** → `anonymous_id` (device/browser-level)
- **Identified** → `user_id` after sign-up or log-in
- **Alias** → how anonymous and identified IDs are linked

### Step 6: Produce the Tracking Spec Document

```
## Event Tracking Spec: [Product / Feature]

**Version**: 1.0
**Date**: [today]
**Analytics platform**: [tool]
**Owner**: [PM name]
**Engineer contact**: [TBD]

---

### Naming Conventions
- Events: [noun]_[verb] in snake_case, past tense
- Properties: snake_case, descriptive
- Boolean properties: prefixed with `is_` or `has_`

### Global Properties (on every event)
[Table from Step 4]

### Event Catalogue

#### [Group 1: e.g., Authentication]
[Event specs from Step 3]

#### [Group 2: e.g., Onboarding]
[Event specs]

#### [Group 3: e.g., Core Feature Usage]
[Event specs]

### Business Questions → Events Mapping
| Business Question | Events to Query | Key Property |
|-----------------|----------------|-------------|
| [Question] | [event_1, event_2] | [property] |

### Implementation Notes for Engineers
- Capture events on the server side where possible to prevent ad blockers
- Include `[property]` on every event for [specific reason]
- Do NOT capture PII in event properties — use anonymized IDs only
- [Platform-specific notes]

### Validation Checklist
- [ ] All events fire at correct trigger points
- [ ] No PII captured in event properties
- [ ] Events visible in analytics platform within 5 minutes
- [ ] Global properties attached to all events
- [ ] Identity alias event fires on sign-up
```

## Notes
- Less is more: 30 well-instrumented events beat 200 noisy ones
- Never track PII (emails, names, addresses) in event properties — use anonymized IDs and look up PII separately in your user database
- Plan for versioning: when you rename an event or property, keep the old one firing for 30 days to avoid breaking dashboards
- Involve engineers early — they often know which events are expensive to instrument and can suggest better implementation approaches

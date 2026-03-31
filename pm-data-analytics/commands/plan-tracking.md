---
description: Design an analytics event tracking plan — define events, properties, naming conventions, and produce an engineer-ready tracking spec
argument-hint: "<product or feature to instrument>"
---

# /plan-tracking -- Analytics Event Tracking Plan

Design a complete analytics instrumentation plan: define which events to track, what properties to capture, and how to name them — then produce a spec document engineers can implement directly.

## Invocation

```
/plan-tracking Onboarding flow for our B2B SaaS product (Posthog)
/plan-tracking Mobile checkout flow — iOS and Android (Amplitude)
/plan-tracking We're setting up analytics from scratch — help me design the full event taxonomy
```

## Workflow

### Step 1: Understand the Context

Ask:
- What product or feature needs instrumentation?
- What analytics platform will you use? (Posthog, Segment, Mixpanel, Amplitude, or custom)
- What are the 5 most important questions you need your analytics to answer?
- Is there an existing event taxonomy to extend, or starting from scratch?
- Any known constraints? (privacy requirements, platform limitations, existing integrations)

### Step 2: Design the Event Taxonomy

Apply the **event-tracking-plan** skill:

- Identify the key user actions and system events to instrument
- Group events into logical categories (auth, onboarding, core feature, conversion, etc.)
- Define global properties (attached to every event)
- Design the naming convention
- Specify property schemas for each event

### Step 3: Produce the Tracking Spec

Generate the full tracking specification document:

```
## Event Tracking Spec: [Product / Feature]

**Platform**: [analytics tool]
**Version**: 1.0
**Date**: [today]

### Naming Conventions
[Rules for event and property names]

### Global Properties
[Table of universal properties]

### Event Catalogue
[Full event specs with properties and example payloads]

### Business Questions → Events Mapping
[How each event answers the key questions from Step 1]

### Implementation Notes for Engineers
[Platform-specific guidance, PII handling, server vs client-side]

### Validation Checklist
[Pre-launch QA steps]
```

### Step 4: Offer Next Steps

- "Want me to **design a funnel analysis** using these events once instrumented?"
- "Should I **write the SQL** to query these events after implementation?"
- "Want me to **define metrics** based on this event data?"

## Notes

- Events should be named so any team member understands what they mean without documentation
- Never include PII in event properties — use anonymized user IDs only
- Instrument server-side where possible to prevent ad blocker interference

---
name: ai-user-research
description: "Research user expectations, mental models, trust calibration, and interaction patterns for AI-powered features. Use when planning user research for an AI feature, evaluating user trust and satisfaction with AI outputs, or designing feedback collection for a machine learning system."
---

## AI User Research

Research user expectations, mental models, trust levels, and interaction patterns for AI-powered products.

### Context

You are planning or conducting AI user research for **$ARGUMENTS**.

### Instructions

1. **Define research objectives**:
   - What do we need to understand about how users perceive or interact with the AI feature?
   - Are we exploring (generative) or validating (evaluative) research?
   - What decisions will this research inform?

2. **Mental model elicitation techniques**:
   - **Think-aloud protocol**: ask users to narrate their thoughts while using the AI feature; surface assumptions about how the AI "works"
   - **Mental model interviews**: "What do you think happens when you [trigger AI action]?" / "Where do you think this answer comes from?"
   - **Card sorting for AI concepts**: have users sort AI-related terms (suggestion, prediction, recommendation) to understand their vocabulary
   - **Analogy probing**: "What does this AI remind you of? A search engine? A human assistant? A calculator?"
   - Document the gap between users' mental model and the actual model behaviour — design to bridge it

3. **Trust calibration research**:
   - **Over-trust** (automation bias): users accept AI outputs without questioning even when wrong — test by inserting intentional errors
   - **Under-trust**: users ignore or override AI outputs even when correct — identify friction that prevents adoption
   - Trust calibration interviews: "When would you feel confident acting on this output? When would you want to verify it?"
   - Segment by: user domain expertise, prior AI product experience, outcome stakes (high vs. low)
   - Design signals to right-size trust: confidence indicators, source citations, error rates disclosed

4. **Error perception and recovery research**:
   - How do users react when the AI is wrong? (frustration, confusion, permanent abandonment, forgiving retry)
   - What language makes AI errors understandable and recoverable vs. alarming?
   - Test error message framing: "I'm not sure about this" vs. "I couldn't find an answer" vs. "Here's my best guess"
   - Measure: recovery rate (do users retry after an error?), abandonment rate by error type
   - Map the emotional response arc: initial error encounter → understanding → recovery → trust recalibration

5. **Wizard of Oz testing for AI prototypes**:
   - Simulate AI behaviour with a human operator ("wizard") before building the model
   - Use case: test user reactions to an AI-generated output without investing in model development
   - Setup: user interacts with a mockup UI; researcher manually provides "AI" responses via a separate channel
   - Measure: user satisfaction with output quality, trust calibration, interaction patterns, and edge case discovery
   - Debrief participants after: reveal the Wizard of Oz setup and gather meta-feedback on expectations

6. **Think-aloud protocols for AI interactions**:
   - Concurrent think-aloud: users narrate in real time (best for task-based usability studies)
   - Retrospective think-aloud: users narrate after watching a recording of themselves (less disruptive for fast AI interactions)
   - Focus probes for AI: "What did you expect to happen?", "Why did you [accept/reject] that output?", "Would you trust this for an important decision?"
   - Capture: confusion moments, delight moments, points of over-trust or distrust

7. **Measuring satisfaction with AI outputs**:
   - **Binary feedback**: thumbs up/down — low friction, easy to collect, limited signal
   - **Correction rate**: % of AI outputs that users edit or rewrite — strongest implicit quality signal
   - **Re-generation rate**: % of times users ask for a new output — dissatisfaction signal
   - **Star rating with optional comment**: 1–5 with free-text — richer signal, lower response rate
   - **Task completion rate**: did the user accomplish their goal with or without AI help?
   - Combine implicit (behavioural) and explicit (survey) signals for a complete picture

8. **Designing feedback collection for AI features**:
   - Place feedback UI at the moment of output consumption, not after session end
   - Keep the default interaction to one tap (thumbs up/down); offer optional detail on negative feedback
   - Use contextual prompts: "Was this helpful for [specific task]?" rather than generic "Rate this"
   - Sample strategy: collect feedback on every output (low-stakes features) or sample 20% (high-volume features)
   - Close the loop: tell users how their feedback is used ("Your feedback helps improve suggestions")

9. **User willingness to correct and train AI**:
   - Research: what types of corrections are users willing to make? (light edits, major rewrites, explicit ratings)
   - Friction threshold: at what level of effort does correction feel like "doing the AI's job"?
   - Incentive design: how do you motivate feedback that improves the model? (progress indicators, personalisation payoff)
   - Segment: power users vs. casual users — power users are more willing to invest in training

10. **Explainability needs by user segment**:
    - **Domain experts**: want technical explanations, sources, confidence scores; distrust black-box outputs
    - **General consumers**: want plain language reasons; confused by technical jargon
    - **High-stakes decisions** (medical, financial, legal): explainability is often legally required and essential for trust
    - **Low-stakes/entertainment**: explanations may reduce delight and feel over-engineered
    - Research method: present the same AI output with different explanation styles; measure comprehension and trust

Think step by step. Save as markdown.

---

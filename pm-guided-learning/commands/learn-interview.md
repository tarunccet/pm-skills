---
description: Start the user interview simulation — practice conducting a JTBD interview with a realistic user persona, then receive structured coaching feedback on your technique.
argument-hint: "[optional: focus area — questions|bias|jtbd|flow|technique]"
---

# /learn-interview — User Interview Practice Module

Launches the user interview simulation. The AI plays Alex, a marketing manager, and you practice your interviewing skills — then receive detailed coaching feedback.

## Invocation

```
/learn-interview                  # start the full simulation
/learn-interview questions        # focus feedback on question quality
/learn-interview jtbd             # focus feedback on JTBD extraction
/learn-interview bias             # focus feedback on avoiding leading questions
```

## Workflow

Load and execute the `learn-user-research` skill. The module will:
1. Brief you on your PM context and interview goal
2. Run Phase 1: 10–15 exchange interview simulation (you ask, Alex responds)
3. Run Phase 2: Structured coaching debrief across 5 dimensions (0–20 points each)
4. Optionally run a 5-question practice round focused on your lowest-scoring area

## Edge Cases

- If the learner asks to skip the interview and just see the feedback: explain that the feedback is based on their actual questions — there's no shortcut.
- If the learner breaks character (asks "what should I ask?"): stay in character as Alex and say "Sorry, what do you mean?" — don't give hints mid-simulation.
- If the learner pitches a solution to Alex: respond as a real user would ("that sounds interesting, maybe?") and note it heavily in the debrief.
- If the learner ends the interview early (fewer than 8 exchanges): complete the debrief but note that real interviews should be 30–45 minutes; short interviews rarely surface deep insights.

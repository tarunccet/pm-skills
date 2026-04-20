---
description: "Enroll in or navigate the PM Foundations Course — a structured 11-module PM learning curriculum with units on Foundations, Strategy, Execution, Modern PM, and a Capstone project."
argument-hint: "[optional: your experience level or 'progress' to see your current status]"
---

# /course — PM Foundations Course

Enroll in or continue the PM Foundations Course — the end-to-end curriculum that takes you from PM basics through a full-lifecycle capstone project.

## Invocation

```
/course                    # enroll or check progress
/course progress           # show your progress through the curriculum
/course beginner           # start the course as a complete beginner
/course advanced           # start the course at an accelerated pace for experienced PMs
/course path [goal]        # get a personalized learning path for a specific goal
                           # e.g., /course path "preparing for PM interview"
                           #       /course path "building AI features"
```

## Workflow

Load and execute the `learn-pm-course` skill. The course coordinator will:

1. **New learners**: Run a 3-question enrollment diagnostic (experience level, goal, self-assessment by skill area) and generate a personalized learning path through the 11 modules
2. **Returning learners**: Accept a list of completed modules, display a progress summary with checkmarks, and recommend the next module with a bridge explanation
3. **Learners with a specific goal**: Generate a filtered learning path that prioritizes modules most relevant to that goal

## Course Overview

The PM Foundations Course is organized into 5 units and 11 modules:

| Unit | Modules | Time | Focus |
|------|---------|------|-------|
| 1. Foundations | `/learn-foundations`, `/learn-interview`, `/learn-discovery` | ~2 hrs | PM role, mindset, user research |
| 2. Strategy | `/learn-metrics`, `/learn-prioritization`, `/learn-strategy` | ~2.5 hrs | Metrics, prioritization, product strategy |
| 3. Execution | `/learn-execution`, `/learn-stakeholders` | ~1.5 hrs | PRDs, roadmaps, stakeholder management |
| 4. Modern PM | `/learn-ai-pm`, `/learn-vibe-coding` | ~1.5 hrs | AI features, vibe coding |
| 5. Capstone | `/learn-capstone` | ~2 hrs | Full-lifecycle case study |

**Total: ~8–12 hours** | **All levels welcome**

## Recommended Paths

- **New to PM** → Start at Module 1: `/learn-foundations`
- **Career switcher** → `/learn-foundations` then skip to your weak areas
- **PM interview prep** → `/learn-metrics` → `/learn-prioritization` → `/learn-discovery` → `/learn-stakeholders`
- **Senior PM** → `/learn-strategy` → `/learn-stakeholders` → `/learn-capstone`
- **Building AI products** → `/learn-ai-pm` → `/learn-vibe-coding` → `/learn-capstone`

## Edge Cases

- If the learner has already completed some modules: ask which ones, then skip to the "returning learner" progress view.
- If the learner wants to take just one module without enrolling in the full course: direct them to the specific `/learn-X` command.
- If the learner asks about certificates or completion recognition: explain that the capstone module includes a comprehensive course completion debrief that summarizes their demonstrated PM capabilities.
- If the learner isn't sure where to start: ask "What's the one PM skill you most want to improve?" and route accordingly.

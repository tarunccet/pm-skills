---
description: "Get help debugging AI-generated code: classify the error, form effective debugging prompts, isolate issues, and decide whether to fix or start over."
argument-hint: "[error message or description of what's broken]"
---

## /debug-help

Uses the `debug-with-ai` skill.

Get debugging help for $ARGUMENTS.

This command helps you diagnose and fix issues in AI-generated code without deep engineering knowledge. Share the error message, describe what you expected vs. what happened, and get a structured debugging guide.

**How to use**: Paste the full error message and relevant code, or describe the symptom.

### Edge Cases
- **If there's no error message but behavior is wrong**: Describe the expected vs. actual behavior and ask for help isolating the cause
- **If you've been debugging the same issue for over an hour**: Ask the AI to help you decide whether to fix forward or start the section over
- **If the AI keeps making it worse**: Reset context — start a new conversation with the full spec and a clean description of the problem

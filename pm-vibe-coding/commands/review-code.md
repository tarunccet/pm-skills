---
description: "Review AI-generated code from a PM perspective: spec compliance, security red flags, data model soundness, UX issues, and error handling."
argument-hint: "[feature or code section to review]"
---

## /review-code

Uses the `code-review-for-pms` skill.

Review AI-generated code for $ARGUMENTS.

This command helps PMs catch issues that matter from a product perspective: does the code match the spec, are there security red flags, is the data model correct, are UX requirements implemented, and does error handling match user expectations.

**How to use**: Describe what was built and paste the relevant code sections, or describe the feature you want reviewed.

**Next steps after this command**: → `/deploy-check` before shipping

### Edge Cases
- **If code is too large to review at once**: Focus on the most critical flow (auth, core feature, data handling)
- **If no spec exists**: Ask the user to describe what the code should do before reviewing
- **If issues found are architectural**: Recommend involving an engineer rather than AI-patching

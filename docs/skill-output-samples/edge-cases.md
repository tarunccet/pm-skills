# Skill Output Sample: edge-cases

> **Skill:** `edge-cases` | **Plugin:** `pm-execution` | **Input:** "File upload feature with 10MB limit"

---

## Edge Case Analysis: File Upload (10MB Limit) — DocVault

### Edge Case Matrix

| # | Category | Edge Case | Severity | Expected Behavior | Handling | Acceptance Criteria |
|---|----------|-----------|----------|-------------------|----------|-------------------|
| 1 | **B — Boundaries** | File is exactly 10.00 MB (10,485,760 bytes) | Medium | Upload succeeds | Allow | File at exact limit uploads without error |
| 2 | **B — Boundaries** | File is 10.01 MB (1 byte over limit) | High | Upload rejected with clear message | Block | User sees "File exceeds 10MB limit (yours: 10.01MB)" before upload starts |
| 3 | **B — Boundaries** | File is 0 bytes (empty file) | Medium | Upload rejected | Block | User sees "Cannot upload an empty file" message |
| 4 | **O — Outages** | Network drops mid-upload at 60% progress | High | Upload pauses; retry resumes from checkpoint | Degrade gracefully | Progress bar shows "Connection lost — retrying…"; upload resumes within 30s of reconnect |
| 5 | **O — Outages** | Storage service (S3) returns 503 | High | Upload fails with friendly message; no partial file saved | Show error + Retry | User sees "Upload failed — please try again"; no orphan files in storage |
| 6 | **U — Unusual Inputs** | Filename contains special characters: `résumé (final) [v2].pdf` | Medium | File uploads with sanitized filename | Degrade gracefully | Spaces and special chars preserved in display name; storage key is URL-encoded |
| 7 | **U — Unusual Inputs** | File has double extension: `report.pdf.exe` | Critical | Upload blocked by extension allowlist | Block | User sees "File type not allowed"; `.exe` files never reach storage |
| 8 | **N — Network** | User on 2G connection (50 Kbps) uploading 9MB file | Medium | Upload completes (est. ~25 min) with progress feedback | Degrade gracefully | Progress bar updates; timeout set to 30 min; no silent failure |
| 9 | **D — Data** | User uploads duplicate file (same name and content) | Low | System warns but allows with versioned filename | Show error | User sees "A file with this name exists — replace or keep both?" |
| 10 | **A — Access** | User's storage quota is 95% full; upload would exceed it | High | Upload blocked pre-flight with quota warning | Block | User sees remaining quota and "Upgrade plan" CTA before upload attempt |
| 11 | **R — Race Conditions** | User double-clicks the upload button | High | Only one upload initiated | Block | Second click is debounced; no duplicate files created |
| 12 | **R — Race Conditions** | Two users upload a file with the same name to a shared folder simultaneously | Medium | Both files saved; one auto-renamed | Degrade gracefully | Second file saved as `report (1).pdf`; both users notified |
| 13 | **Y — Yesterday's Assumptions** | Admin changes max file size from 10MB to 5MB while user has upload dialog open | Low | Validation uses server-side check at upload time | Block | Upload rejected with updated limit message; client refreshes config |

### Summary

- **Total edge cases identified:** 13
- **Critical (must-fix before launch):** 1 — double-extension bypass
- **High (should-fix before launch):** 5 — over-limit, network drop, S3 outage, quota exceeded, double-click
- **Medium (fast-follow):** 5 — exact limit, empty file, special characters, slow network, concurrent uploads
- **Low (backlog):** 2 — duplicate file, config change mid-session

### Recommended Priority

| Phase | Edge Cases | Rationale |
|-------|-----------|-----------|
| **Sprint 1 (launch-blocking)** | #7, #2, #4, #5, #10, #11 | Security, data integrity, and core error handling |
| **Sprint 2 (fast-follow)** | #1, #3, #6, #8, #12 | Polish, edge input handling, and concurrent use |
| **Backlog** | #9, #13 | Low frequency; cosmetic or configuration edge cases |

### Testing Notes

- **Boundary testing:** Use files at exactly 9.99MB, 10.00MB, and 10.01MB to verify threshold precision
- **Network simulation:** Use Chrome DevTools throttling to simulate 2G and offline conditions
- **Concurrency testing:** Use two browser sessions with the same shared folder open simultaneously
- **Security testing:** Attempt uploads with spoofed MIME types (e.g., `.exe` renamed to `.pdf`) to verify server-side validation

> *Full analysis would include 15–30 edge cases with additional concurrency, localization, and accessibility scenarios.*

# Release Checklist

Use this checklist before publishing major repo or marketplace updates.

- [ ] Verify counts and version strings are consistent across `README.md`, `docs/`, `.claude-plugin/`, `package.json`, and `src/index.ts`
- [ ] Run `python3 validate_plugins.py`
- [ ] Install dependencies if needed
- [ ] Run `npm run build`
- [ ] Review README quickstart, starter packs, FAQ, and proof links
- [ ] Review compatibility guidance for MCP and skills-only installs
- [ ] Update `CHANGELOG.md` for user-visible changes
- [ ] Sanity-check new commands, plugin counts, and examples
- [ ] Confirm no placeholder testimonials or fabricated user quotes were added

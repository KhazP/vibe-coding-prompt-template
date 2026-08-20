# Freshness Policy

This document defines how time-sensitive content in the repository is maintained.

## Update cadence

This repository is reviewed **monthly**. The README references this cadence in the "Monthly update cadence" section.

## What counts as time-sensitive

| Category | Examples | Verification method |
|----------|----------|---------------------|
| Pricing claims | Dollar amounts for hosting, databases, AI tools | Check vendor pricing page directly |
| Model names | Specific model versions (e.g., GPT-4o, Claude 3.5) | Check provider documentation |
| Agent capabilities | Subagents, background agents, plan modes, tool permissions | Check official product docs or changelogs |
| AI product APIs | Provider capabilities, auth, safety, telemetry, cost, and eval guidance | Check official provider and hosting docs |
| CI action versions | `actions/checkout@vN` | Check github.com/actions/checkout/releases |
| Tool capabilities | "Cursor supports X", "Copilot can do Y" | Check tool changelog or release notes |
| Library recommendations | Specific npm packages, framework versions | Check npm/GitHub for deprecation notices |

## Rules for contributors

1. **Never hardcode dollar amounts** in prompt files or templates. Use "verify current pricing at [vendor URL]" instead.
2. **Use model family names** (Claude Sonnet, Gemini Pro) instead of pinned versions unless a specific version is required.
3. **Pin CI action versions** to the current maintained major (check releases page before submitting).
4. **Add a "last verified" date** to any claim about external tools, services, or pricing. Format: `Last verified: YYYY-MM`.
5. **Do not claim future dates.** Only reference releases and features that have already shipped.
6. **Label preview/beta/experimental features** and include the official source.
7. **Prefer capability categories** over exact product rankings unless the ranking is backed by current evidence.

## Automated checks

The `.github/workflows/repo-lint.yml` workflow catches common freshness violations:

- Hardcoded `$N/mo` pricing in prompt/template files
- Outdated `actions/checkout` versions
- Unresolved placeholder contacts (e.g., `[your-email]`)
- Stale skill references

## Monthly review checklist

When performing the monthly review:

- [ ] Check all vendor pricing references are still accurate
- [ ] Check CI action versions against latest releases
- [ ] Check model family names still reflect current offerings
- [ ] Check tool capability claims against recent changelogs
- [ ] Check AI SDK, subagent, background-agent, and provider claims against official docs
- [ ] Check generated templates still match current tool config locations
- [ ] Update "last verified" dates on any refreshed claims
- [ ] Run the repo-lint workflow locally to catch regressions

# Freshness Policy

Use this when: maintaining this repo's AI/tooling claims, not when building an app from the template.

## Quick Answer

Volatile claims need official sources and a `Last verified: YYYY-MM` date. Avoid hardcoded prices, exact quotas, and brittle model IDs unless they are required.

## Checklist

- [ ] Pricing, quota, model, and plan claims are checked against official docs.
- [ ] Tool capability claims are checked against official changelogs.
- [ ] AI provider retention/training settings are not guessed.
- [ ] MCP guidance reflects current auth and transport recommendations.
- [ ] Builder guidance still matches export, GitHub sync, local build, and rollback reality.
- [ ] README links and repo-lint required paths still match the repo.
- [ ] `repo-lint.yml` passes locally.

## Repo-Lint Catches

- Hardcoded `$N/mo` style pricing claims
- Outdated `actions/checkout`
- Missing required docs/templates
- Stale Gemini CLI default wording
- Stale MCP transport wording
- Deprecated builder recommendations
- Invalid JSON/TOML templates
- Unbalanced markdown fences

## Links

- [OpenAI API changelog](https://developers.openai.com/api/docs/changelog)
- [Claude Code changelog](https://code.claude.com/docs/en/changelog)
- [Cursor changelog](https://cursor.com/changelog)
- [Vercel changelog](https://vercel.com/changelog)
- [Cloudflare AI and agents](https://developers.cloudflare.com/workers/framework-guides/ai-and-agents/)

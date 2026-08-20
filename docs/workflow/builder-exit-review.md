# Builder Exit Review

Last verified: 2026-05

Use this when: the project starts in v0, Lovable, Bolt, Replit Agent, Google AI Studio, Base44, Tempo, Builder.io, Framer, or another AI/no-code builder.

## Quick Answer

Builder output is useful for prototypes. Do not call it production-ready until the code can be exported, built locally, reviewed, and deployed from an owner-controlled repo.

## Checklist

- [ ] Source is owned by the project owner and can be cloned or exported.
- [ ] Local install, dev, test, typecheck, and build commands work.
- [ ] Secrets are not committed and live in the deployment owner account.
- [ ] Auth, RLS, storage rules, and public routes are reviewed.
- [ ] Database export or migration path is clear.
- [ ] Deployment owner, preview protection, domain, and rollback are clear.
- [ ] Vendor data retention/training settings are checked.
- [ ] Exit plan is written down.

## Example Prompt

```text
Audit this builder-generated project before production.

Return blockers first. Check source ownership, local build, secrets, auth/RLS,
database migration, deployment owner, rollback, dependency risk, and exit plan.
Do not rewrite the app during the audit.
```

## Links

- Tooling decision guide: `docs/tools/agent-tooling-compatibility.md`
- Review checklist: `templates/REVIEW-CHECKLIST.md`

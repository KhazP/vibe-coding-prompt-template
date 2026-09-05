# Reliability release evidence and remaining work

Baseline: repository revision 254bae5. CLI release target: 0.3.0. The cli-v0.3.0 tag triggers native package checks and trusted npm publication. The public website is maintained separately.

## Reproduce repository checks

```sh
npm ci --prefix cli
npm test --prefix cli
npm run test:package --prefix cli
python3 scripts/validate.py
python3 scripts/sync-skills.py --check
```

The canonical skills are in workflow/skills/. Run scripts/sync-skills.py after edits; CI rejects distribution drift. The generator also builds docs/context-pack.md. Do not edit generated copies directly. Install only workflow skills with `--skills-only`; the package test confirms that no workflow-repository source is needed. skills.sh and native plugin distribution are not advertised as verified installation routes yet.

Local evidence (2026-09-05): macOS, Node 24.9.0, npm locked dependencies, Python 3.14.3. CLI regression tests, clean tarball installation/preservation smoke test, 13 structural checks, and generated-distribution check passed. CI now runs the CLI and package smoke test on Ubuntu, macOS, and Windows with Node 22. Native Windows/Linux compatibility is checked by the release workflow before publication; use its actual results as evidence. Node 18 compatibility remains Not checked in this session.

Claude configuration references checked against [permission documentation](https://code.claude.com/docs/en/permissions) and [hook documentation](https://code.claude.com/docs/en/hooks): defaultMode is `default`; hook timeouts are seconds. The formatter passes filenames as separate subprocess arguments. This is not a claim of live Claude execution or exhaustive provider schema validation.

## Behavior evaluations

Use workflow/evals/scenarios.json in a disposable project. Run each request with only its fixture and installed skills; capture the transcript/artifacts, tool/model version, date, elapsed time, and evidence for each observable criterion. Score activation and outcome independently. Do not mark an instruction-text match as a behavioral pass. These scenarios are prepared but live assistant evaluations remain Not checked. Browsing or browser absence must be simulated explicitly rather than inferred from a failed tool call.

## Release and distribution work still requiring evidence

- Run the behavior scenarios in supported assistant clients, including negative controls and untrusted content.
- Run an actual website export through the manifest/CLI handoff. Synthetic browser-style filenames are covered locally; the live ZIP is not.
- Record tested MCP protocol/SDK/client/extension combinations before claiming support. Existing May guidance is historical context, not current compatibility certification. A worked assistant-app recipe is provided; a live MCP Apps example is not yet certified.
- The reading-list example supplies runnable source and acceptance instructions. Its evidence file distinguishes actual browser checks from unperformed cases. Record an end-to-end idea-to-plan-to-code session before presenting a full workflow demo.
- Publish a release only after CI and supported-client checks pass. Review native plugin or skills.sh packaging separately; avoid duplicated name discovery and unreviewed third-party packs.
- Community case studies, public announcements, and website changes require their actual sources/assets; none have been published by this change.

## Growth experiments

Keep the repository URL and Vibe Workflow display identity. Compare one change at a time: demo placement, recovery-focused versus planning-focused announcement, then a tested skills-install route versus CLI entry. Ask for a star once after useful evidence; never insert requests in generated apps.

Record weekly date, unique visitors, clones, referrers, net stars, successful starts, and first verified tasks. GitHub traffic uses a rolling window; save snapshots regularly using an authorized maintainer account. Do not claim user-level conversion from stars divided by visitors. No private traffic data or baseline measurements were available for this implementation. See [GitHub traffic documentation](https://docs.github.com/en/repositories/viewing-activity-and-data-for-your-repository/viewing-traffic-to-a-repository).

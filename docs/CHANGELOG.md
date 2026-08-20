# Changelog

All notable changes to the Vibe-Coding Prompt Template are documented here, in [Keep a Changelog](https://keepachangelog.com/) style. Dates come from the git tag for each release.

## [Unreleased]

### Changed
- **Interviews accept batched answers:** the skills (and the CLI's kickoff prompt) no longer insist on one question at a time no matter what. Answer several questions in one go and the agent takes them and moves on instead of re-asking; say "I don't know" and it proposes a default for you to confirm. Shipped as `vibeworkflow` 0.2.1.
- **part3 is prompt-sized again:** v3.0.0 deliberately stripped the prefab Terraform, SQL schemas, CI workflows, and framework snippets out of the tech design prompt, and the 3.1.0 merge put them back. Removed again — each is now a one-line instruction to generate that artifact for *your* stack, with v3.0.0's generation guardrails restored. 1,627 lines down to 1,448.
- **`tool-adapters/` no longer ships in the npm package:** the CLI never scaffolded it, so 23 files were dead weight in every install — the tarball drops from 74 files to 53. Still in the repo for manual copying, as the README and part4 describe. Shipped as `vibeworkflow` 0.2.2.

### Added
- **Security section in `REVIEW-CHECKLIST.md`:** dependency audit, input validated and sanitized at the boundary, auth-protected routes tested while logged out, and rate limiting considered for public endpoints — restored from v3.0.0, which the 3.1.0 merge had dropped.
- **part4 Step 0 — know where you're running:** read `templates/` from disk in an IDE, or ask the user to paste them in a chat, and never recreate the templates from memory.

### Fixed
- **npm provenance:** `cli/package.json` had no `repository` field, so trusted publishing signed a provenance statement npm then rejected with a 422. Declared it (with `directory: "cli"`), plus `homepage` and `bugs`.

## [3.1.0] - 2026-08-20

The "agent-first" release: `npx vibeworkflow` now drives the whole workflow through your AI agent, and the planning skills interview you one question at a time instead of dumping a wall of text.

### Added
- **`vibeworkflow` CLI (published on npm):** `npx vibeworkflow` scaffolds `AGENTS.md`, `agent_docs/`, and tool configs from your PRD and Tech Design. Run it with no docs yet and it installs the planning skills and hands your agent the interview flow instead.
- **Agent tool auto-detection:** the CLI detects Claude Code, Cursor, Codex, and Gemini from environment variables and existing config directories; `--tools` overrides.
- **JSON meta blocks:** parts 2 and 3 (and the matching skills) append a machine-readable summary the CLI reads to fill placeholders. Coexists with the `## Handoff Context` block the next prompt reads.
- **Handoff Context in part1 and part3:** research and tech design now end with the same handoff block part2 had, so later steps stop re-asking your level, platform, budget, and timeline.
- **Docs reorganized:** `docs/` split into `ai/`, `tools/`, `workflow/`, and `maintenance/`, with an index at `docs/README.md` and a new build-paths guide.
- **CI:** `cli-test.yml` guards CLI/template drift; `release-cli.yml` publishes the CLI to npm from `cli-v*` tags over OIDC trusted publishing — no npm token stored.

### Changed
- **README leads with the 5 steps:** a new "Start here" section puts the `npx vibeworkflow` path and the step table in the first screenful, down from line 115.
- **Skills interview properly:** every interviewing skill now tells the agent to use its native question tool, one question at a time, and never to shorten the question list.
- **Scaffolding is idempotent:** re-running the CLI never overwrites files you have already filled in (`--force` opts out).

### Fixed
- **Fabricated Cursor setup in part3:** removed the `cursor.sh` domain and the invented `ai.autoComplete` / `ai.explainCode` settings keys.
- **Repo Lint on `main` has been red since v3.0.0:** inside `args: >-`, `#` does not start a YAML comment, so the lychee step's comment lines were folded into its arguments and it never received its inputs.
- **Release tags no longer collide:** the CLI publishes from `cli-v*` tags, so repo release tags like `v3.1.0` no longer trigger an npm publish.

### Removed
- **`llms.txt`:** this repo has no Pages site, so it was never served at a well-known path and only duplicated the docs index. Guidance telling you to add one to *your* project is unchanged.
- **The CLI's own interview:** the inline fallback questions, the interactive terminal picker, and the `--level` / `--answers` flags are gone — the skills' interviews are the only interviews.

## [3.0.0] - 2026-07-19

The "contracts" release: one canonical AGENTS.md, documents that chain themselves, and first-class support for Claude Code, Codex, Antigravity, and Cursor.

### Added
- **Handoff Context blocks**: every stage's output (research → PRD → tech design) now ends with a machine-readable summary the next stage parses — no more re-answering level, budget, and timeline at every step.
- **Tool matrix in part4**: AGENTS.md as the universal contract (Codex reads it natively) plus thin adapters — `CLAUDE.md` for Claude Code, `.cursor/rules/vibe.mdc` for Cursor, `.agent/rules/vibe.md` for Antigravity — with physical copies in `templates/tool-adapters/`.
- **Optional `/vibe-*` stage commands** for Cursor (`.cursor/commands/`), Antigravity (`.agent/workflows/`), and Codex (`~/.codex/prompts/`), mirroring the Claude Code skills.
- **Worked example** in `examples/reddit-to-ai/`: reconstructed research, PRD, tech design, AGENTS.md, and MEMORY.md for a real shipped project.
- `scripts/validate.py` — 13 repo contract checks (template sections, handoff blocks, skill anchors, frontmatter, JSON/YAML validity), wired into CI alongside lychee link checking.
- Security section in `templates/REVIEW-CHECKLIST.md` and a secrets rule in `templates/AGENTS.md`.
- Root `.gitignore`; `CITATION.cff` (2026-04-20); community governance, support, and FAQ docs under `.github/`, plus greetings and PR-size-labeler workflows.

### Changed
- **part4 rewritten**: one instantiation workflow (copy all templates → fill placeholders → single stop), dual IDE/chat entry modes, `[REPLACE:]`/`[CHOOSE:]` placeholder rule. The contradictory inline agent_docs templates were removed.
- **`templates/AGENTS.md` is now the canonical 10-section template** (adds How I Should Think, What NOT To Do, Engineering Constraints, Current State, Roadmap, Context Files); the Claude skills and part4 reference it instead of embedding divergent variants.
- **part3 slimmed 42 KB → 22.5 KB**: embedded reference code (Terraform, SQL, CI YAML) removed, one coherent deployment story, confirm-from-PRD questions, `## Project Structure` added to the Vibe template.
- **part2**: Developer PRD enterprise metrics (OKRs, AARRR, risk matrix) moved to an optional add-on block; canonical `## Out of Scope (Not in MVP)` heading in all templates; engineering rules moved out of the PRD into AGENTS.md territory.
- **part1**: citations branch on web-search availability (URLs + access dates with it, "Unverified — model knowledge" without) — kills fabricated sources.
- **Claude skills**: question banks defer to the root part files (single source of truth); outputs and intakes honor Handoff Context; all six declare `allowed-tools`; vibe-build uses `REVIEW-CHECKLIST.md` and `MEMORY.md`.
- Interview-robustness rules in parts 1–3 (multi-question answers, "I don't know" defaults, re-echo after corrections).

### Fixed
- Claude Code hooks moved from the never-loaded `.claude/hooks/hooks.json` into `.claude/settings.json`, and hardened (`.env.example` allowed, Windows path normalization, broader destructive-command coverage).
- Removed fabricated Cursor settings JSON, stale `cursor.sh` domain, and pinned action versions from part3.
- Rebuilt this changelog from git tag history (the previous "Unreleased — March 2026" entry described work that never shipped as written).
- `SECURITY.md` supported-versions table matches reality.
- `docs/claude-agent-teams.md` rewritten to verified, shipped capabilities only (subagents; experimental agent teams), per the freshness policy.
- Removed maintainer-local `.claude/settings.local.json` from the repo.

## [2.4.0] - 2026-04-09

### Added
- Missing template, CI workflow (`repo-lint`), and policy docs (freshness policy, golden-path checklist).
- Showcase submission issue template and expanded contribution guidance for community examples.

### Fixed
- Aligned the workflow file contract across README and `part4`, and aligned Claude skills with the corrected contract.
- Removed stale and brittle content from the `part3` prompt.

## [2.3.0] - 2026-03-05

### Changed
- Updated the MVP prompts for the modern workflow and refreshed the Claude Code skills and guidelines.
- Clarified web-LLM vs IDE execution phases and template usage.
- Added `npx skills add` installation instructions to the skills table.

## [2.2.0] - 2026-01-16

### Added
- Claude Code skills (`.claude/skills/`) for the workflow steps, with a cleaned-up README.
- Pull request template.

## [2.1.0] - 2026-01-09

### Added
- Community health files: `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, enhanced `SECURITY.md`, and issue templates.
- Strict anti-vibe engineering rules, advanced agent architecture patterns, and expanded UI/design research areas in the prompts.
- Modular progressive-disclosure documentation strategy: high-level `AGENTS.md` backed by detailed `agent_docs/`.

### Changed
- Refreshed workflow guidance for 2026 and updated AI platform recommendations.

## [2.0.0] - 2025-12-15

### Changed
- Renamed the agent instruction file to `AGENTS.md` and integrated it across the workflow.
- Updated AI/no-code tool recommendations, setup times, and the web app launch link.

## [1.0.0] - 2025-11-18

### Added
- Initial public release: the four-part vibe-coding prompt workflow (deep research → PRD → tech design → notes for the agent), README, and November 2025 model/tooling references.

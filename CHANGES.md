# Changes — October 4, 2026

The manual workflow now starts with one clear Start a project path. All original planning questions and A/B/C templates remain available. Every prompt can run in a fresh chat with its stated inputs; Part 4 includes the core templates it needs.

These are source changes for review. Running `npx vibeworkflow` uses the separately published npm package; this update does not publish a release.

## File-by-file changes

### Main workflow

| File | Change |
| --- | --- |
| `README.md` | One manual start path, exact file handoffs, and optional skills/CLI after the basics. |
| `part1-deepresearch.md` | Separates the research request from findings; preserves context and fixes nested fences. |
| `part2-prd-mvp.md` | Reuses attached decisions; clarifies output order, save path, and next-step inputs. |
| `part3-tech-design-mvp.md` | Supports fresh-chat intake; makes services conditional; clarifies the setup handoff. |
| `part4-notes-for-agent.md` | Bundles complete setup templates; aligns file paths, memory, tool adapters, and authorization. |

### Shared templates and tool setup

| File | Change |
| --- | --- |
| `templates/AGENTS.md` | Uses the actual PRD and Tech Design paths, including manifest-selected paths. |
| `templates/MEMORY.md` | Clarifies shared progress versus private tool memory; makes auth conditional. |
| `templates/REVIEW-CHECKLIST.md` | Aligns protected-action checks with the user's existing authorization. |
| `templates/CLAUDE.md` | Imports AGENTS.md; uses shared memory and avoids repeated routine approvals. |
| `templates/tool-adapters/CLAUDE.md` | Adds the import and consistent progress, scope, and verification rules. |
| `templates/tool-adapters/README.md` | Documents optional native skills, complete bundle installation, and client-specific invocation. |
| `templates/tool-adapters/codex/README.md` | Replaces deprecated custom-prompt setup with native skill instructions. |

### CLI fixes

| File | Change |
| --- | --- |
| `cli/src/cli.ts` | Preserves resolved document paths in output and gives clearer metadata errors. |
| `cli/src/core/project.ts` | Finds root-level app-specific exports and explains ambiguous file choices. |
| `cli/src/core/scaffold.ts` | Fills actual paths and memory phase; copies reusable skills unchanged. |
| `cli/src/core/placeholders.ts` | Recognizes only declared template placeholders, preserving ordinary bracketed content. |
| `cli/src/core/meta.ts` | Ignores unrelated schema examples while rejecting invalid or unsupported document metadata. |
| `cli/src/core/doctor.ts` | Uses the shared placeholder checker and identifies incomplete source documents. |
| `cli/README.md` | Presents the CLI as optional and documents corrected discovery and diagnostics. |
| `cli/test/handoff.test.ts` | Covers document paths, ambiguity, previews, and unchanged skill assets. |
| `cli/test/doctor.test.ts` | Covers literal brackets versus actual placeholders, including source metadata. |
| `cli/test/meta.test.ts` | Covers unrelated JSON examples and invalid metadata boundaries. |
| `cli/test/scaffold.test.ts` | Checks that the current phase is filled in MEMORY.md. |

### Validation and reference docs

| File | Change |
| --- | --- |
| `scripts/sync-skills.py` | Generates and checks Part 4's bundled templates alongside existing distributions. |
| `scripts/validate.py` | Checks real fence boundaries and complete persona output blocks. |
| `scripts/test_validate.py` | Adds 10 focused fence regressions, including premature closure. |
| `.github/workflows/repo-lint.yml` | Reuses the stronger Markdown validator and runs its regressions. |
| `docs/context-pack.md` | Regenerates current templates and explains its optional role beside Part 4. |
| `docs/README.md` | Points to the simple start guide, small example, and optional references. |
| `docs/tools/agent-tooling-compatibility.md` | Updates official skill guidance and separates documented support from live verification. |
| `docs/workflow/document-contract.md` | Explains actual paths, recognized metadata, and setup-check limits. |
| `docs/CHANGELOG.md` | Records the workflow, template, CLI, example, and validation changes. |
| `CHANGES.md` | Provides this concise file-by-file review and verification record. |

### Small example

| File | Change |
| --- | --- |
| `examples/README.md` | Links to the small Reading List example before the larger reconstruction. |
| `examples/first-project/README.md` | Gives a short manual walkthrough, exact save paths, and simple acceptance steps. |
| `examples/first-project/PRD.md` | Defines a tiny reading list with scope, acceptance criteria, and handoff metadata. |
| `examples/first-project/TECH_DESIGN.md` | Describes the one-file app, local run command, storage, and verification steps. |
| `examples/first-project/index.html` | Adds a dependency-free reading list with local storage and clear error handling. |

## Verification

- 34 CLI tests passed, including the new path, placeholder, metadata, and preservation regressions.
- 10 Markdown regression tests passed; all 14 repository contract checks passed.
- TypeScript build, generated-file synchronization, and whitespace checks passed.
- A packaged CLI installed locally and passed setup, preservation, and dry-run checks.
- The new Reading List documents successfully generated a Codex setup with correct document paths and unchanged skills.
- The example JavaScript passed syntax checking. Browser interaction checks remain pending because the test environment had no browser executable.
- Live skill invocation across coding clients and the full external-link CI job were not run. Updated tool guidance cites official documentation and states that limit.

The source archive includes project files and templates. Dependencies and generated build output are recreated using the CLI's normal install/build steps.

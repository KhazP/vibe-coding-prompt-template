# Reddit to AI — agent guidance

This is a reconstructed example of a shipped Chrome extension, not a live
status report. It uses Manifest V3 with plain JavaScript, HTML, and CSS; there
is no backend, account system, or build framework.

## Product constraints

- Keep processing local to the browser, with no tracking or remote server.
- Send thread data only to the AI tab the user selected.
- Preserve prompt preview and the copy fallback when a site changes its DOM.
- Keep operating costs at $0/month.

## Local workflow

Load `src/` as an unpacked extension in `chrome://extensions`, then reload the
extension after changes. The example uses `npm test`, `npm run lint`, and
`npm run package:extension`; inspect the target project's scripts before using
this example as instructions for another repository.

The service worker coordinates scraping and tab handoff. Shared scraping,
prompt building, and AI paste logic remain separate from popup, preview, and
options UI. Follow the project's JavaScript conventions; this example does not
require converting it to TypeScript or introducing a service/database layer.

Implement the requested change through relevant checks and the affected
extension journey. Preserve unrelated edits. Ask for missing consequential
decisions or external-action authorization, not approval merely because an
edit spans multiple files. Do not publish to the Chrome Web Store as a side
effect of local verification.

## Context when needed

- `agent_docs/tech_stack.md` — setup and libraries.
- `agent_docs/code_patterns.md` — code conventions.
- `agent_docs/project_brief.md` and `agent_docs/product_requirements.md` — product scope.
- `agent_docs/testing.md` — checks and extension testing.
- `agent_docs/reconstructed-progress.md` — historical example roadmap.
- `MEMORY.md` — session progress, if present.

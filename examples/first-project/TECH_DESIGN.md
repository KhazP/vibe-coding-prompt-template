# Reading List — technical design

Authored sample design for the companion Reading List PRD. These choices support the small agreed scope.

## Implementation

- One `index.html` contains semantic HTML, a little CSS, and vanilla JavaScript. No dependencies or build step.
- A labeled form adds titles to an array. Each list entry has its own remove button. Render titles with `textContent`, not HTML.
- Store the array as JSON under `reading-list-example:v1` in `localStorage`. Load it once when the page opens.
- Write a proposed change before displaying it. If saving fails, keep the previous list and explain the failure. If saved data cannot be read, disable editing so it is not silently replaced.
- Keep keyboard focus visible, announce results through a status message, and let long titles wrap on narrow screens.

## Run

Use Python 3's local static server from the folder containing `index.html`:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000. Use that same browser and address on later visits: a different hostname or port has separate storage. The server only serves the files; book data stays in the browser. Stop it with Ctrl+C.

## Verification

Perform the PRD's acceptance steps in a browser. There is no install, compilation, or automated test command. **Runtime verification is pending**; authored source and documents are not proof those steps passed.

## Handoff Context

<!-- Summary for the next workflow step. Keep this block with the saved document. -->
- Stage: techdesign
- App name: Reading List
- User level: A (vibe coder); the assistant implements, the owner reviews and checks.
- Target platform: Local browser page, served by Python 3.
- Budget: No paid services.
- Timeline: One small example; no delivery deadline.
- AI in product scope: no
- Chosen stack: One HTML file with inline JavaScript and `localStorage`, served locally by Python 3; no backend, database, auth, or deployment.
- AI coding tool: undecided; selected during Part 4.
- Mode: Quick; manual workflow, fresh chats are supported.
- Constraints: No dependencies, backend, accounts, AI, or deployment.
- Decisions: One HTML file; `localStorage`; explicit storage-error messages.
- Open questions: Browser checks remain pending.
- Research status: Not provided.
- Source files: docs/PRD-ReadingList-MVP.md → docs/TechDesign-ReadingList-MVP.md

## Metadata

```json
{
  "schemaVersion": 1,
  "documentType": "techdesign",
  "appName": "Reading List",
  "stack": {
    "frontend": "HTML, CSS, and vanilla JavaScript",
    "database": "Browser localStorage"
  },
  "commands": {
    "dev": "python3 -m http.server 8000 --bind 127.0.0.1"
  }
}
```

# Reading List — product requirements

Authored sample decisions for a small personal project. No demand research or user study was performed.

## Purpose

One person keeps a list of books to read in one browser. They can add a title, remove it, and return to the same list after reloading.

## Must have

- Add a nonempty book title using the button or Enter. Trim surrounding spaces; allow duplicate titles.
- Remove the selected entry without removing other entries.
- Save successful changes in browser storage and restore them after reloading.
- Show a useful empty state and a clear message if browser storage cannot be read or written.

## Acceptance steps

1. Open a fresh list: see “Your list is empty.”
2. Add “Dune” with Enter: see one entry and an empty input.
3. Reload the same address: “Dune” remains.
4. Add “Dune” again, then remove one entry: one remains.
5. Remove the remaining entry and reload: the empty state returns.
6. Submit spaces: no entry is added; a title is requested.
7. Navigate with Tab: the input and buttons have visible focus and readable labels.

## Boundaries

No accounts, sync, backend, external services, AI, or deployment. Data belongs to this browser and address; clearing browser data removes it. No automated test suite is included. Runtime verification is pending.

## Handoff Context

- App: Reading List.
- Level: Beginner; assistant implements, owner reviews and checks.
- Platform: Local browser page.
- Budget: No paid services.
- Timeline: One small example; no delivery deadline.
- Mode: Manual workflow; fresh chats are supported.
- Constraints: One browser, titles only, preserve add/remove/reload behavior.
- Decisions: Sample scope above; implementation uses browser storage.
- Open questions: Select the coding assistant when generating agent files.

## Metadata

```json
{
  "schemaVersion": 1,
  "documentType": "prd",
  "appName": "Reading List",
  "oneLiner": "Keep a personal list of books to read in one browser",
  "targetUsers": "One person using one browser",
  "mustHave": [
    "Add a nonempty book title",
    "Remove one selected entry",
    "Restore saved books after reloading",
    "Show empty and storage-error states"
  ]
}
```

# Worked workflow recipes

Choose the outcome first. Load integration details only when the project needs them.

## Improve an existing app

Request: “Add a title filter to my reading list.” In the existing app, capture the add/remove baseline, then use vibe-change to add a filter without changing storage or adding accounts. Acceptance: matching titles appear, unmatched titles disappear, clearing restores the list, and add/remove still work. For an actual failure use vibe-debug with the exact reproduction. Keep the baseline and a recovery checkpoint.

## Internal automation

Request: “Turn these voice-note transcripts into structured task drafts.” Start with local synthetic transcripts and output a JSON draft containing title, owner, and due date. Validate missing fields and malformed input. Keep sensitive input out of logs. A draft needs human review; sending it or writing to another service requires authorization. If external writes are later added, use an operation ID so retrying a timeout cannot duplicate a task. Check valid, missing-date, rejected-input, and repeated-operation cases. Do not add a queue or agent team until needed.

## An app inside an assistant

Request: “Compare three saved reading suggestions inside my assistant.” Define the supported client and the tool input/output contract first. Start with synthetic, read-only results and an interactive comparison view. Record client, SDK, negotiated protocol, extension support, authentication behavior, and tested date. Verify rendering, empty results, malformed tool input, unavailable extension, and denied authentication in the actual client. A protocol specification is not evidence of client support. No combination is certified by this recipe; use current official documentation and capture actual results before advertising compatibility.

## Creative coding

Request: “Make a 15-second reading-list explainer.” Write three scenes (problem, adding a book, finished list), gather licensed assets, choose aspect ratio and captions, then render a preview. Check timing, text legibility, missing assets, audio if used, and export resolution. Keep source and render settings for another session. A storyboard is planning evidence; only an inspected export counts as checked output.

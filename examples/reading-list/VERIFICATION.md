# Observed verification

2026-09-05, macOS, agent-browser 0.7.6, isolated browser session `vibe-release`, locally served HTML using Python 3.14.3.

| Check | Observed result |
| --- | --- |
| Initial state | Empty-list message displayed |
| Add A Wizard of Earthsea | Title displayed; count became one |
| Reload | Title and count remained |
| Remove and reload | Empty state remained |
| Submit spaces | “Enter a book title”; no row added |
| HTML-looking title | Literal text displayed as a title |

Evidence: [actual browser recording](demo.webm). No compilation or dependency installation applies to this static example. These checks exercise app behavior, not the full planning skill workflow.

Not checked: Safari/Firefox, native mobile devices, keyboard/screen-reader audit, full/blocked storage, corrupted saved data, multiple tabs. The code handles storage errors, but those branches were not exercised in this browser run. Browser storage is not a backup.

# Project document contract

`vibe.project.json` selects project-relative paths independently of the installation route:

```json
{
  "schemaVersion": 1,
  "templateVersion": "0.3.0",
  "mode": "quick",
  "tools": ["claude"],
  "documents": { "prd": "PRD.md", "techdesign": "TECH_DESIGN.md" }
}
```

`templateVersion` records the template package used, not proof of checks. Full CLI setup creates a missing manifest with Guided mode; preserve or set the agreed mode when planning. Existing manifests are preserved. The CLI validates mode and tools; manifest paths must stay inside the project. Explicit CLI document flags resolve against `--dir` and override discovery. Without a manifest it accepts `PRD.md` / `TECH_DESIGN.md` and app-specific `PRD-*-MVP.md` / `TechDesign-*-MVP.md` names at the project root or in `docs/`. Multiple candidates are listed in the error and require explicit paths or a manifest. Generated `AGENTS.md`, the CLI's next steps, and its JSON `documents` field use the resolved document paths.

New PRD metadata uses this fenced JSON contract:

```json
{
  "schemaVersion": 1,
  "documentType": "prd",
  "appName": "Reading List",
  "oneLiner": "Keep books to read",
  "targetUsers": "One person on one device",
  "mustHave": ["Add a title", "Remove a title"]
}
```

New technical metadata identifies the same app and includes a nonempty recognized value in both its stack and command objects:

```json
{
  "schemaVersion": 1,
  "documentType": "techdesign",
  "appName": "Reading List",
  "stack": { "frontend": "HTML and JavaScript" },
  "commands": { "dev": "python3 -m http.server 8000" }
}
```

Recognized stack fields are `frontend`, `backend`, `database`, `auth`, `styling`, and `deployment`. Recognized command fields are `setup`, `dev`, `test`, `typecheck`, `lint`, and `build`. Objects containing only unrecognized fields cannot supply these required values.

Legacy unversioned metadata remains readable. Versioned documents reject unsupported versions, wrong document types, and missing required fields. An unrelated JSON configuration example containing only its own `schemaVersion` does not hide the document metadata; a malformed document contract cannot fall back to a legacy example. App names must agree when both documents identify them. Commands are data: doctor never executes them. An agent must inspect commands and obtain any required execution authorization separately.

Every planning output carries a Handoff Context with app, level, platform, budget, timeline, mode, constraints, decisions, and open questions. Preserve unknowns and reconcile contradictions. AGENTS.md contains stable rules; MEMORY.md contains current state.

Doctor validates setup files, metadata, unresolved declared placeholders, paths, and the Claude default-mode allowlist. A square-bracket label is treated as unfinished only when the corresponding shipped project template declares it. Source PRD and technical documents are also checked against the declared metadata and project-template labels. Literal CSS selectors, JSON arrays, checkboxes, and Markdown links are not placeholders. Reusable skill files and references are copied unchanged and excluded from the project punch-list.

These structural checks do not judge the completeness of a plan or exhaustively validate every provider's configuration. The JSON `checks` separates setup from build and behavior; the latter two are always `not-checked` because doctor does not launch the app.

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

`templateVersion` records the template package used, not proof of checks. Full CLI setup creates a missing manifest with Guided mode; preserve or set the agreed mode when planning. Existing manifests are preserved. The CLI validates mode and tools and rejects paths outside the project. Explicit CLI document flags resolve against `--dir` and override discovery. Without a manifest it accepts the browser-style names above at root or in docs/, and legacy docs/PRD-*-MVP.md / docs/TechDesign-*-MVP.md names. Multiple candidates require explicit paths or a manifest.

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

New technical metadata identifies the same app and includes nonempty stack and command objects:

```json
{
  "schemaVersion": 1,
  "documentType": "techdesign",
  "appName": "Reading List",
  "stack": { "frontend": "HTML and JavaScript" },
  "commands": { "dev": "python3 -m http.server 8000" }
}
```

Legacy unversioned metadata remains readable. Versioned documents reject unsupported versions, wrong document types, and missing required fields. App names must agree when both documents identify them. Commands are data: doctor never executes them. An agent must inspect commands and obtain any required execution authorization separately.

Every planning output carries a Handoff Context with app, level, platform, budget, timeline, mode, constraints, decisions, and open questions. Preserve unknowns and reconcile contradictions. AGENTS.md contains stable rules; MEMORY.md contains current state.

Doctor validates setup files, metadata, unresolved required placeholders, paths, and the Claude default-mode allowlist. It does not claim exhaustive validation of every provider's configuration. Its JSON `checks` separates setup from build and behavior; the latter two are always `not-checked` because doctor does not launch the app.

---
name: vibe-debug
description: This skill should be used when the user reports a bug, error, or unexpected behavior in their vibe-coded project. Triggers include "I found a bug", "this isn't working", "there's an error", "it broke", "something's wrong", "fix this", "why is this happening", or any mention of incorrect output, crashes, or regressions. This skill enforces a structured debug protocol — log first, analyze second, fix last — preventing the agent from guessing at fixes before understanding root cause.
compatibility:
  tools: [Read, Write, Glob, Grep, Bash, AskUserQuestion]
---

# vibe-debug — Structured Debug Protocol

You are entering **DEBUG MODE**. Your role is now a systematic debugger, not a code writer. Do not propose any fix until root cause is confirmed through evidence.

## Prime Directive

> **Log → Analyze → Hypothesize → Fix (minimal) → Verify**

Never skip steps. Never write a fix based on intuition alone.

---

## Phase 0: Capture the Failure

Before touching any code, ask the user (or read from context) to provide:

1. **What action triggered the bug** (exact steps)
2. **What was expected** to happen
3. **What actually happened**
4. **The full error message** — paste verbatim, not summarized

Save this to `debug-log.md` in the project root:

```markdown
# Debug Log — [short bug title] — [date]

## Failure
- Action: 
- Expected: 
- Actual: 
- Error: 
```

If any of the 4 items above are missing, ask for them before proceeding.

---

## Phase 1: Trace the Data Flow

Map Input → Process → Output for the broken feature.

**Step 1.1** — Identify entry point: where does data enter the system for this feature? (user input, API response, DB query, event handler, etc.)

**Step 1.2** — List every transformation step the data passes through (functions, middleware, state updates, renders).

**Step 1.3** — Add logging/print statements at EACH step. Do not assume — instrument the code to surface actual values:

```
// Log at entry
console.log('[DEBUG] input:', input)

// Log after each transformation
console.log('[DEBUG] after processX:', result)

// Log at output
console.log('[DEBUG] final output:', output)
```

Ask the user to run it and paste back ALL logs before continuing.

**Step 1.4** — Fill in the trace table in `debug-log.md`:

```markdown
## Data Trace
| Step | Location (file:line) | Expected Value | Actual Value |
|------|----------------------|---------------|-------------|
| Input | | | |
| Step 1 | | | |
| Step 2 | | | |
| Output | | | |
```

---

## Phase 2: Identify the Anomaly

Compare Expected vs Actual at every step.

- **Where is the first divergence?** This is the bug's location, not its symptom.
- Classify the anomaly:
  - **Type mismatch** — string vs number, null vs object
  - **Logic error** — correct types, wrong calculation or condition
  - **State issue** — stale value, race condition, wrong scope
  - **Missing data** — undefined, null, empty when value expected
  - **Side effect** — unrelated code mutating shared state

Record in `debug-log.md`:

```markdown
## First Point of Divergence
- Step: 
- Location (file:line): 
- Expected: 
- Got: 
- Anomaly type: 
```

---

## Phase 3: Form One Hypothesis

State a **single, specific** root cause hypothesis:

> "The bug is caused by **[exact thing]** in **[file/function/line]**, because **[evidence from Phase 1-2]**."

Do NOT list multiple hypotheses at once. One at a time.

Record it:

```markdown
## Root Cause Hypothesis
[Your one-sentence hypothesis here]
```

---

## Phase 4: Minimal Fix

Only after Phases 0–3 are complete:

1. Propose the **smallest possible change** that tests the hypothesis.
2. Do not refactor, rename, or touch unrelated code.
3. Explain in one sentence what the fix changes and why it addresses the root cause.

If the fix would require significant refactoring, **flag it first** and get user approval before proceeding.

---

## Phase 5: Verify

After applying the fix:

- Re-run the exact action from Phase 0.
- Confirm output now matches the expected value from Phase 0.
- Spot-check adjacent features to confirm no regression.
- Remove all `[DEBUG]` log statements added in Phase 1.

Update `debug-log.md`:

```markdown
## Fix Applied
- File(s) changed: 
- What changed: 
- Why this addresses root cause: 

## Verification
- [ ] Original bug no longer reproduces
- [ ] Adjacent features unaffected
- [ ] Debug logs removed
```

**If the fix does not work:** return to Phase 2 with updated observations. Do NOT guess a new fix. Update the trace table and revise the hypothesis.

---

## Special Cases

See `references/debug-patterns.md` for specific guidance on:
- Silent logic bugs (no error thrown)
- Regression bugs (broke after a new feature)
- Infinite loop / stuck agent scenarios
- Frontend rendering bugs
- API / async timing bugs

---

## Rules (Always Active in Debug Mode)

1. **Never fix without evidence.** A hypothesis without a data trace is a guess.
2. **One hypothesis at a time.** Test it. If wrong, form the next one.
3. **Minimal change.** The fix should touch as little as possible.
4. **Revert if lost.** If 3+ fix attempts fail, revert to last known working state and restart Phase 1.
5. **Silent bugs are logic bugs.** No error = trace data, not syntax.
6. **Regressions need a diff.** Compare what changed since the last working state.
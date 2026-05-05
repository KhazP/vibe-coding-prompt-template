# Debug Patterns Reference

Loaded by `vibe-debug` SKILL.md when specific bug types are identified.

---

## Pattern 1: Silent Logic Bug (No Error Thrown)

**Symptoms:** Code runs without crashing but produces wrong output or does the wrong thing.

**Protocol:**
1. Write a minimal reproduction: "Given input X, this function should return Y."
2. Run it in isolation (unit test or a small test script).
3. Log the actual return value.
4. Walk through the function **line by line** — identify where the logic first deviates.
5. Common culprits: wrong comparison operator (`=` vs `===`), off-by-one, incorrect boolean logic, wrong variable referenced.

**Example log prompt to user:**
```
Can you add this right before the output and tell me what it prints?
console.log('[SILENT_BUG]', JSON.stringify({ input, intermediate, output }, null, 2))
```

---

## Pattern 2: Regression Bug (Broke After New Feature)

**Symptoms:** Feature worked before, stopped working after unrelated change was added.

**Protocol:**
1. Ask: "What was the last known working state?" (commit hash, or "before I added X")
2. Get a list of every file changed since that state (`git diff --name-only HEAD~N` or manual list).
3. For each changed file, ask: "Does this file touch any shared state, global variable, module, or function used by the broken feature?"
4. Check for: overwritten functions, renamed exports, changed function signatures, new side effects on shared state.
5. Fix = either revert the conflicting change or add guards to protect existing behavior.

**Key question to ask:** "Did any of the new code modify something the old feature depends on?"

---

## Pattern 3: AI Agent Stuck in Fix Loop

**Symptoms:** AI has attempted 3+ fixes, issue persists, approaches are cycling.

**Protocol:**
1. **Stop all fix attempts immediately.**
2. Revert to last known working state (git reset, manual undo, or restore backup).
3. Acknowledge the working state explicitly: "At commit X / before change Y, this feature worked correctly."
4. Audit: list every change made since that working state. Do not assume the bug is in the obvious place.
5. Re-enter Phase 0 fresh with the original bug report.

**Tell the user:**
```
We're stuck. I'm going to stop trying fixes and start over with a clean trace.
First, let's revert to the last state where this worked, then instrument it properly.
```

---

## Pattern 4: Frontend Rendering Bug

**Symptoms:** UI displays wrong data, doesn't update, flickers, or shows stale state.

**Protocol:**
1. **Is it a data bug or a render bug?** Log the data *before* it reaches the component. If data is correct, the bug is in rendering. If data is wrong, the bug is upstream.
2. For React/Vue/Svelte: log state/props at the top of the component render function.
3. Check: is the component receiving the right props? Is state updating when expected?
4. Common culprits: mutating state directly instead of creating new object, missing dependency in `useEffect`, wrong key in list rendering, async data arriving after render.
5. For "doesn't update": check if the state reference changed (React compares by reference for objects/arrays).

**Log template:**
```javascript
// Top of component
console.log('[RENDER]', { props, state, derivedValues })
```

---

## Pattern 5: API / Async Timing Bug

**Symptoms:** Works sometimes, fails other times. Race conditions, data not ready when accessed, "undefined is not an object" on async data.

**Protocol:**
1. Log timestamps alongside values: `console.log('[ASYNC]', Date.now(), value)`
2. Identify all async operations in the flow (fetch, setTimeout, Promise, event listeners).
3. Draw the order: "What fires first? What depends on what?"
4. Common culprits: accessing data before await resolves, missing error handling causing silent failure, multiple calls racing to write the same state.
5. Fix patterns: ensure await before access, add loading states, use Promise.all for parallel dependencies, add error boundaries.

---

## Pattern 6: Environment / Config Bug

**Symptoms:** Works locally, fails in production (or vice versa). Works for one user, not another.

**Protocol:**
1. First question: "Does it fail consistently in one environment but not another?"
2. Check: environment variables (`.env` values, API keys, base URLs), Node/Python version differences, OS path separators, database connection strings.
3. Add an environment dump at startup: `console.log('[ENV]', { NODE_ENV, API_URL, ... })`
4. Never hardcode environment-specific values — use config files.
5. If it only fails for some users: check user-specific data, permissions, or feature flags.
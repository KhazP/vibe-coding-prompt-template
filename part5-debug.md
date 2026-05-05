# 🐛 Part 5 — Systematic Debug & Bug Fix

> **When to use this:** You found a bug. The AI is confused about where the problem is. Use this protocol to force structured diagnosis before any fixes are attempted.

---

## The Core Problem with Vibe-Coded Bugs

When an MVP is built fast, bugs are inevitable. But AI agents often:
- Jump to fixing before understanding the actual failure
- Guess at root cause instead of tracing data flow
- Hallucinate a solution that breaks something else
- Loop endlessly between two broken states

The fix: **force the agent to behave like a senior engineer** — log first, analyze second, fix third.

---

## 🚦 The Debug Protocol (Copy & Paste This)

Paste this into your AI IDE chat whenever you hit a bug:

---

```
ENTERING DEBUG MODE — Do not write any fix yet.

## Step 1: Capture the Failure
Before touching any code, log the following exactly as-is:

**Bug Report:**
- What I did (exact user action): [describe]
- What I expected to happen: [describe]
- What actually happened: [describe]
- Any error message (copy verbatim): [paste]

## Step 2: Trace the Data — Input → Process → Output
Map the full data flow for this feature:

1. INPUT: What data enters the system? (user input, API response, DB query result, etc.)
   - Log or print the actual value at entry point. What is it?

2. PROCESS: What transformations happen?
   - List each function/step the data passes through.
   - At which step does the output first diverge from expectation?

3. OUTPUT: What value comes out at the end?
   - Log or print the actual output. What is it vs. what was expected?

## Step 3: Identify the Anomaly
Now compare actual vs. expected at each step.
- Where is the first point of divergence?
- Is the input itself wrong, or does it get corrupted mid-process?
- Is this a logic error, a type mismatch, a null/undefined, a race condition, or a missing state update?

## Step 4: Form a Hypothesis
State ONE specific hypothesis: "The bug is caused by [X] in [file/function], because [evidence from Step 2-3]."

Do NOT hypothesize multiple causes at once.

## Step 5: Propose the Minimal Fix
Only after Steps 1–4, propose the smallest possible change to test this hypothesis.
- Do not refactor unrelated code.
- Do not introduce new dependencies.
- Explain what this fix changes and why it addresses the root cause from Step 4.

## Step 6: Verify
After applying the fix:
- Re-run the exact action from Step 1.
- Confirm the output now matches the expectation from Step 1.
- Check that no regression was introduced (run existing tests or manually test adjacent features).

If the fix does not resolve the issue, return to Step 2 with updated observations — do not guess a new fix.
```

---

## 🔍 Quick Diagnostic Triggers

Use these shorter prompts for common situations:

### "The AI can't find the bug"
```
Stop. Do not suggest any fix.
Instead, add console.log / print statements at EVERY step of [feature name]:
- Log the input at entry
- Log after each transformation
- Log the final output before it renders/returns
Run it, paste me all the logs, and we will analyze them together before touching any code.
```

### "The AI keeps going in circles"
```
We have attempted [N] fixes and the bug persists. Reset.
1. Revert all recent changes to the last known working state.
2. Describe what the code did correctly before the bug appeared.
3. List every change made since that working state (git diff or manual list).
4. For each change, ask: could this have caused the current failure? Why or why not?
Only propose a fix after this audit is complete.
```

### "Something broke after a feature was added"
```
This feature worked before [new feature] was added.
Treat this as a regression. 
1. Identify all code touched by the new feature.
2. Check if any shared state, global variable, or shared module was modified.
3. Check if any function was overwritten, renamed, or had its signature changed.
4. Check for import/export conflicts.
Report findings before fixing anything.
```

### "The output is wrong but no error is thrown"
```
This is a silent logic bug. No error = the code runs but produces wrong results.
1. Write a minimal test case: given input [X], the function should return [Y].
2. Run it and log the actual return value.
3. Walk through the function line by line and identify where the logic deviates.
Do not change anything until you can explain the deviation precisely.
```

---

## 📋 Debug Log Template

Ask the agent to maintain this file as `debug-log.md` during a bug session:

```markdown
# Debug Log — [Bug Title] — [Date]

## Failure Description
- Action: 
- Expected: 
- Actual: 
- Error message: 

## Data Trace
| Step | Location | Expected Value | Actual Value |
|------|----------|---------------|-------------|
| Input | | | |
| Step 1 | | | |
| Step 2 | | | |
| Output | | | |

## First Point of Divergence
[Which step and why]

## Root Cause Hypothesis
[One sentence: "The bug is caused by X in Y because Z"]

## Fix Applied
[What changed, in which file, on which line]

## Verification
- [ ] Original bug no longer reproduces
- [ ] Adjacent features still work
- [ ] No new errors introduced
```

---

## 🧠 Debug Mental Models (for the AI)

Add these to your `AGENTS.md` under a `## Debugging Rules` section:

```markdown
## Debugging Rules

1. **Log before fix.** Never propose a code change without first tracing actual data flow.
2. **One hypothesis at a time.** Form one specific root cause theory, test it, then iterate.
3. **Minimal change principle.** The fix should be as small as possible. If it requires a refactor, flag it and get approval first.
4. **Regression check.** After any fix, re-test the feature that was previously working.
5. **Revert if lost.** If 3+ fix attempts fail, revert to last working state and restart the trace.
6. **Silent bugs are logic bugs.** No error message means trace data, not syntax.
```

---

## 🔄 Where This Fits in the Workflow

```
[Part 1: Research] → [Part 2: PRD] → [Part 3: Tech Design] → [Part 4: Build MVP]
                                                                        ↓
                                                              🐛 Bug found?
                                                                        ↓
                                                         [Part 5: Debug Protocol]
                                                                        ↓
                                                              ✅ Fixed → back to Build
```

---

## 💡 Pro Tips

**Save the debug log even after fixing.** Patterns in your bugs often reveal architectural issues worth addressing before scaling.

**Give the AI the actual error, not a summary.** "It doesn't work" is useless. Paste the full stack trace or console output verbatim.

**Use version control as your safety net.** Before each debug session, commit the current state — even if it's broken. This gives you a rollback point and a clean diff to work from.

**If the agent writes a fix that "seems right" but you can't verify — ask it to write a test first.** A test that passes before and fails after reproducing the bug is proof the fix works.

---

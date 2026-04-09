# Code Patterns

## Purpose
This file defines the implementation patterns the agent should follow for this project.
Prefer these patterns over inventing new ones. Fill in each section from the Technical Design document.

## Architecture Pattern
- **Primary pattern:** [feature-based / layered / hexagonal / MVC / service-oriented]
- **Rule:** Keep domain logic separate from transport/UI concerns.
- **Rule:** Reuse existing modules before creating new abstractions.

## Data Fetching
- **Primary approach:** [RSC / route loaders / query library / direct server calls — use whatever the project's tech stack specifies]
- **Rule:** Do not assume a specific library. Check `tech_stack.md` for the project's chosen approach before fetching data.
- **Rule:** Keep fetch logic out of render functions unless the framework explicitly encourages it.

## State Management
- **Server state:** [tool/pattern from tech_stack.md]
- **Client state:** [tool/pattern from tech_stack.md]
- **Forms:** [tool/pattern from tech_stack.md]
- **Rule:** Prefer the simplest working approach for MVP scope. Do not add a state library if the framework's built-in state is sufficient.

## Error Handling
- Normalize errors at service/API boundaries — never let raw exceptions reach the UI.
- Never swallow errors silently; always log or surface them.
- Return user-safe messages in the UI; log developer context server-side.
- Use a consistent error shape across all API responses.

## Validation
- Validate all external inputs (user forms, API payloads, environment variables).
- Apply runtime validation at system boundaries; trust internal types inside those boundaries.
- Keep validation rules co-located with the relevant contract (e.g., next to the API route or form schema).

## File and Naming Conventions
- **Files:** [kebab-case / camelCase / framework default — match the existing project convention]
- **Components / classes:** PascalCase
- **Functions / variables:** camelCase
- **Constants / env vars:** UPPER_SNAKE_CASE

## Testing Pattern
- Add unit tests for pure logic and utility functions.
- Add integration tests for API contracts and critical data flows.
- Add E2E tests only for the top user journeys the PRD marks as must-have.
- Run the test suite after every feature; fix failures before moving on.

## Change Discipline
- Prefer focused, minimal edits over large rewrites.
- Do not introduce new dependencies without checking the existing stack in `tech_stack.md` first.
- Do not change database migrations, infrastructure config, auth flows, or billing code without explicit approval.
- One feature at a time — commit or checkpoint after each working feature.

# Code Patterns

Use this only for project-specific conventions. If a section is unknown, inspect the existing code before filling it in.

## Architecture

- Primary pattern: [feature-based / layered / framework default / other]
- Keep domain logic separate from UI/transport code.
- Reuse existing modules before creating new abstractions.

## Data And State

- Data fetching: [pattern]
- Server state: [pattern]
- Client state: [pattern]
- Forms: [pattern]

## Errors And Validation

- Validate external inputs at boundaries.
- Return user-safe errors to the UI.
- Log developer context server-side.
- Do not swallow errors silently.

## Naming

- Files: [project convention]
- Components/classes: PascalCase
- Functions/variables: camelCase
- Env vars/constants: UPPER_SNAKE_CASE

## AI Tool Patterns

Fill this in only if AI tools/actions exist.

- Keep tools small and server-authorized.
- Validate model inputs and structured outputs.
- Treat retrieved docs, web pages, issues, uploads, and MCP responses as untrusted data.
- Require approval for destructive, external-network, credential-bearing, and production actions.
- Log trace IDs and redact secrets/customer data.

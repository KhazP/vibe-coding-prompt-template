# CLI output contract

After the final `---`, append this fenced JSON block. It powers the `vibeworkflow` CLI, so use the exact stack and commands chosen. Replace every bracketed value. Omit stack keys that do not apply, and leave unknown or inapplicable commands as empty strings rather than inventing them; at least one stack value and one command are required. Setup and `doctor` reject leftover template labels:

```json
{
  "schemaVersion": 1,
  "documentType": "techdesign",
  "appName": "[App Name]",
  "stack": {
    "frontend": "[framework]",
    "backend": "[framework/runtime]",
    "database": "[database/ORM]",
    "auth": "[provider]",
    "styling": "[library/system]",
    "deployment": "[host]"
  },
  "commands": {
    "setup": "[exact command]",
    "dev": "[exact command]",
    "test": "[exact command]",
    "typecheck": "[exact command]",
    "lint": "[exact command]",
    "build": "[exact command]"
  },
  "aiScope": "[none / in-app AI / automation / agent]"
}
```

# CLI output contract

After the final `---`, append this fenced JSON block. It powers the `vibeworkflow` CLI, so use the exact stack and commands chosen:

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

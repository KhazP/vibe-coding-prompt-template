# CLI output contract

After the final `---`, append this fenced JSON block. It powers the `vibeworkflow` CLI, so keep values short and matching the PRD:

```json
{
  "schemaVersion": 1,
  "documentType": "prd",
  "appName": "[App Name]",
  "oneLiner": "[one-sentence description]",
  "targetUsers": "[who this is for]",
  "phase": "Foundation",
  "mustHave": ["feature"],
  "niceToHave": ["feature"],
  "notInMvp": ["feature"],
  "successMetrics": ["metric"]
}
```

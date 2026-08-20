#!/usr/bin/env node
import('../dist/cli.js').catch((err) => {
  console.error(String(err && err.stack ? err.stack : err));
  process.exit(1);
});

// Claude hook timeouts are seconds; the subprocess timeout below is milliseconds.
const { readFileSync, existsSync } = require('node:fs');
const { resolve } = require('node:path');
const { execFileSync } = require('node:child_process');
const input = JSON.parse(readFileSync(0, 'utf8'));
const filename = input.tool_input?.file_path;
const prettier = resolve('node_modules/prettier/bin/prettier.cjs');
if (typeof filename === 'string' && /\.(ts|tsx|js|jsx)$/.test(filename) && existsSync(prettier)) {
  execFileSync(process.execPath, [prettier, '--write', '--', resolve(filename)], {
    stdio: 'inherit', timeout: 30000,
  });
}

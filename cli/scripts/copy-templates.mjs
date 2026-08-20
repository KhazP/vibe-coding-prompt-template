import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const cliDir = join(__dirname, '..');
const templatesSrc = join(cliDir, '..', 'templates');
const templatesDest = join(cliDir, 'dist', 'templates');

if (!existsSync(templatesSrc)) {
  console.error(`templates dir not found at ${templatesSrc}`);
  process.exit(1);
}

rmSync(templatesDest, { recursive: true, force: true });
mkdirSync(templatesDest, { recursive: true });

// tool-adapters/ is repo-level reference material that users copy by hand (see
// the README and part4). The CLI never scaffolds it, so shipping it would just
// add dead weight to every install.
const SKIP_AT_ROOT = new Set(['tool-adapters']);

function copyDir(src, dest, atRoot = false) {
  for (const entry of readdirSync(src)) {
    if (entry === '.DS_Store') continue;
    if (atRoot && SKIP_AT_ROOT.has(entry)) continue;
    const s = join(src, entry);
    const d = join(dest, entry);
    if (statSync(s).isDirectory()) {
      mkdirSync(d, { recursive: true });
      copyDir(s, d);
    } else {
      cpSync(s, d);
    }
  }
}

copyDir(templatesSrc, templatesDest, true);
console.log(`copied templates -> ${templatesDest}`);

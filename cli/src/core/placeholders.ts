// Legacy templates declare placeholders with square brackets. Match only those
// exact declarations; arbitrary brackets in selectors, arrays, and links are data.
const BRACKET_TOKEN = /\[([^\[\]\r\n]+)\]/g;

function tokens(content: string): string[] {
  const found: string[] = [];
  for (const match of content.matchAll(BRACKET_TOKEN)) {
    const inner = match[1].trim();
    if (!inner || inner.toLowerCase() === 'x') continue;
    const next = content[match.index! + match[0].length];
    const previous = content[match.index! - 1];
    if (next === '(' || next === '[' || next === ':' || previous === ']') continue;
    try {
      if (Array.isArray(JSON.parse(match[0]))) continue;
    } catch { /* A named template placeholder is not a JSON array. */ }
    found.push(match[0]);
  }
  return found;
}

export function remainingPlaceholders(content: string, template: string): string[] {
  const declared = new Set(tokens(template));
  return [...new Set(tokens(content).filter(token => declared.has(token)))];
}

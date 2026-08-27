// Syncs the spacing scale in src/common/utrecht/space.tokens.json with figma/figma.tokens.json.
//
// figma.tokens.json is never modified. This script reads its common.basis.space.* values
// (figma renamed and renumbered the scale, so tokens are matched by rank within each
// category - smallest to smallest - not by key name) and regenerates space-figma.tokens.json:
// a small bridge file holding the literal figma values plus a note of which figma path each
// one came from. space.tokens.json then aliases into that bridge file instead of holding
// literals directly, so every existing consumer of e.g. {utrecht.space.block.md} continues
// to resolve exactly as before - only the value at the end of the chain can change.
//
// Run manually whenever figma.tokens.json is re-exported: `pnpm run sync:figma-space`.
// Not part of the normal build - the build never depends on figma.tokens.json.

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const dir = path.dirname(fileURLToPath(import.meta.url));
const read = (file) => readFileSync(path.join(dir, file), 'utf-8');
const write = (file, content) => writeFileSync(path.join(dir, file), content);

const figma = JSON.parse(read('figma/figma.tokens.json'));
const space = JSON.parse(read('src/common/utrecht/space.tokens.json')).utrecht.space;
const CATEGORIES = Object.keys(space); // block, inline, text, row, column - space.tokens.json's own order

// Dimensions only ever appear as plain "1px" / "0.125rem" / "0" here (verified: figma's
// common.basis.space has zero internal aliases), so this is a straight parse, not a resolve.
function toPx(value) {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  if (/^-?0(px|rem)?$/.test(trimmed)) return 0;
  const match = /^(-?[\d.]+)(px|rem)$/.exec(trimmed);
  return match ? parseFloat(match[1]) * (match[2] === 'rem' ? 16 : 1) : null;
}

// figma's scale for one category, sorted smallest-to-smallest, excluding its min/max sub-scales
// (a different concept from the flat scale we're matching against).
function figmaScale(category) {
  const node = figma.common?.basis?.space?.[category] ?? {};
  return Object.entries(node)
    .filter(([key, token]) => !['min', 'max'].includes(key) && toPx(token.$value) != null)
    .map(([key, token]) => {
      if (/^-?\{[^{}]+\}$/.test(token.$value.trim())) {
        throw new Error(
          `common.basis.space.${category}.${key} is now an alias (${token.$value}) - ` +
            'this script assumes plain values here and needs updating before it can be trusted again.',
        );
      }
      return { key, value: token.$value, px: toPx(token.$value), path: `common.basis.space.${category}.${key}` };
    })
    .sort((a, b) => a.px - b.px);
}

const figmaScales = Object.fromEntries(CATEGORIES.map((category) => [category, figmaScale(category)]));

// One record per current space.tokens.json entry: its figma counterpart by rank, if any.
const records = CATEGORIES.flatMap((category) => {
  const keys = Object.keys(space[category]);
  const byRank = [...keys].sort((a, b) => toPx(space[category][a].$value) - toPx(space[category][b].$value));
  const rankOf = new Map(byRank.map((key, i) => [key, i]));
  return keys.map((key) => {
    const old = space[category][key].$value;
    const figStep = figmaScales[category][rankOf.get(key)];
    return figStep
      ? { category, key, old, new: figStep.value, figmaPath: figStep.path, matched: true }
      : { category, key, old, new: null, figmaPath: null, matched: false };
  });
});
const byKey = new Map(records.map((r) => [`${r.category}.${r.key}`, r]));

const uncertainties = CATEGORIES.filter(
  (category) => Object.keys(space[category]).length !== figmaScales[category].length,
).map(
  (category) =>
    `**space.${category}**: old scale has ${Object.keys(space[category]).length} steps, figma's ` +
    `\`common.basis.space.${category}\` scale has ${figmaScales[category].length}. Aligned smallest-to-smallest ` +
    `by rank, not by key name (names don't line up 1:1); leftover steps on the longer side have no counterpart.`,
);
if (space.text) {
  uncertainties.push(
    '**space.text** used to be expressed in `ch` units (font-relative); figma uses `px`. These are different ' +
      'kinds of unit, so a match here means "same rank in the scale", not "equivalent value" - every ' +
      '`space.text` entry is reported as changed.',
  );
}

// --- write space-figma.tokens.json (compact one-line-per-token style, matching this repo) ---

const bridgeBody = CATEGORIES.map((category) => {
  const entries = records.filter((r) => r.category === category && r.matched);
  if (!entries.length) return null;
  const lines = entries.map(
    (r) =>
      `      "${r.key}": { "$value": "${r.new}", "$extensions": { "nl.nldesignsystem.figma-source": "${r.figmaPath}" } }`,
  );
  return `    "${category}": {\n${lines.join(',\n')}\n    }`;
}).filter(Boolean);

write('src/figma/space-figma.tokens.json', `{\n  "space-figma": {\n${bridgeBody.join(',\n')}\n  }\n}\n`);

// --- patch space.tokens.json in place: only replace matched $values, byte-for-byte otherwise ---

const spaceFile = 'src/common/utrecht/space.tokens.json';
const order = CATEGORIES.flatMap((category) => Object.keys(space[category]).map((key) => ({ category, key })));
const valueRe = /"\$value"\s*:\s*"((?:[^"\\]|\\.)*)"/g;
const spaceText = read(spaceFile);
const matches = [...spaceText.matchAll(valueRe)];
if (matches.length !== order.length) {
  throw new Error(`${spaceFile}: expected ${order.length} "$value" strings, found ${matches.length}`);
}

let patched = spaceText;
for (let i = matches.length - 1; i >= 0; i--) {
  const record = byKey.get(`${order[i].category}.${order[i].key}`);
  if (!record.matched) continue; // no figma match - leave this literal untouched
  const valueStart = matches[i].index + matches[i][0].indexOf(matches[i][1]);
  const valueEnd = valueStart + matches[i][1].length;
  patched = patched.slice(0, valueStart) + `{space-figma.${record.category}.${record.key}}` + patched.slice(valueEnd);
}
write(spaceFile, patched);

// --- report ---

const STATUS = (r) =>
  !r.matched
    ? 'No corresponding token in figma.tokens.json'
    : r.old.trim() === r.new.trim()
    ? 'Matched, value unchanged'
    : 'Matched, value CHANGED';
const counts = { same: 0, changed: 0, noMatch: 0 };
for (const r of records) counts[!r.matched ? 'noMatch' : r.old.trim() === r.new.trim() ? 'same' : 'changed']++;

const report = `# space.tokens.json → figma.tokens.json sync report

Generated by \`sync-figma-space.mjs\`. \`figma.tokens.json\` was not modified; this only regenerates
\`src/figma/space-figma.tokens.json\` and patches the \`$value\`s in \`src/common/utrecht/space.tokens.json\`
that have a figma match to alias into it (\`{space-figma.<category>.<key>}\`). Unmatched entries keep their
current literal value untouched.

## Summary

| Result | Count |
|---|---|
| Matched, value unchanged | ${counts.same} |
| Matched, value CHANGED | ${counts.changed} |
| No corresponding token in figma.tokens.json | ${counts.noMatch} |
| **Total** | **${records.length}** |

## Uncertainties / judgment calls

The old and figma scales don't always have the same number of steps per category, so rank-based
alignment is an approximation, not an exact structural match:

${uncertainties.map((note) => `- ${note}`).join('\n')}

## Full detail

| Token | Old value | New value | Result | figma path |
|---|---|---|---|---|
${records
  .map(
    (r) =>
      `| \`utrecht.space.${r.category}.${r.key}\` | \`${r.old}\` | \`${r.new ?? '_(unchanged)_'}\` | ${STATUS(r)} | ${
        r.figmaPath ? `\`${r.figmaPath}\`` : '_none_'
      } |`,
  )
  .join('\n')}
`;

write('figma-space-mapping-report.md', report);

console.log(`space-figma.tokens.json written (${records.filter((r) => r.matched).length} entries)`);
console.log(`space.tokens.json patched (${counts.same + counts.changed} aliased, ${counts.noMatch} left literal)`);
console.log(`Report written to figma-space-mapping-report.md`);
console.log(`\nsame: ${counts.same}, changed: ${counts.changed}, no match: ${counts.noMatch}`);
if (uncertainties.length)
  console.log(`\nUncertainties:\n${uncertainties.map((n) => `- ${n.replace(/[*`]/g, '')}`).join('\n')}`);

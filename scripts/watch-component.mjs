#!/usr/bin/env node
// Usage: pnpm watch:component [component-name]

import { watch } from 'node:fs';
import { spawn } from 'child_process';
import { createInterface } from 'readline/promises';
import { readdir, readFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

const exists = (p) =>
  access(p).then(
    () => true,
    () => false,
  );
const readPkg = (p) =>
  readFile(p, 'utf-8')
    .then(JSON.parse)
    .then((j) => (typeof j.name === 'string' ? j.name : null));
const pkgName = async (p) => ((await exists(p)) ? readPkg(p) : null);
const ts = () => new Date().toLocaleTimeString('en-GB', { hour12: false });
const log = (s, m) => process.stdout.write(`[${ts()}] ${s}  ${m}\n`);
// Use the exact pnpm binary that launched this script (absolute path from npm_execpath),
// falling back to PATH-based lookup only when running the script directly.
const PNPM = process.env['npm_execpath'];
const run = (filter) =>
  new Promise((res, rej) => {
    const [exe, args] = PNPM
      ? [process.execPath, [PNPM, '--filter', filter, 'build']]
      : ['pnpm', ['--filter', filter, 'build']];
    spawn(exe, args, { cwd: ROOT, stdio: 'inherit' }).on('close', (c) =>
      c === 0 ? res() : rej(new Error(`exit ${c}`)),
    );
  });

async function resolveEntry(n) {
  if (!(await exists(path.join(ROOT, 'components', n, 'src')))) return null;
  const css = await pkgName(path.join(ROOT, 'components', n, 'package.json'));
  if (!css) return null;
  const react = await pkgName(path.join(ROOT, 'packages/components-react', `${n}-react`, 'package.json'));
  const tGlob = `proprietary/design-tokens/src/component/utrecht/${n}.tokens.json`;
  const hasTk = await exists(path.join(ROOT, tGlob));
  return { css, react, tGlob, hasTk };
}

function buildEntry(n, { css, react, tGlob, hasTk }) {
  const r = (id) => (react ? [id] : []);
  return {
    label: [css, ...(react ? [react] : [])].join(' + '),
    steps: [
      ...(hasTk ? [{ id: 'design-tokens', filter: '@utrecht/design-tokens', label: 'design-tokens' }] : []),
      { id: `${n}-css`, filter: css, label: css },
      ...(react ? [{ id: `${n}-react`, filter: react, label: react }] : []),
    ],
    triggers: [
      ...(hasTk ? [{ glob: tGlob, steps: ['design-tokens', `${n}-css`, ...r(`${n}-react`)] }] : []),
      { glob: `components/${n}/src/**`, steps: [`${n}-css`, ...r(`${n}-react`)] },
      ...(react ? [{ glob: `packages/components-react/${n}-react/src/**`, steps: [`${n}-react`] }] : []),
    ],
  };
}

async function discover() {
  const entries = await readdir(path.join(ROOT, 'components'), { withFileTypes: true });
  const result = {};
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    const info = await resolveEntry(e.name);
    if (info) result[e.name] = buildEntry(e.name, info);
  }
  return result;
}

async function pick(components, arg) {
  const names = Object.keys(components).sort((a, b) => a.localeCompare(b));

  if (arg) {
    if (!components[arg]) {
      console.error(`✗ Unknown: "${arg}". Available: ${names.join(', ')}`);
      process.exit(1);
    }
    return arg;
  }

  console.log('\n  Components:\n');
  names.forEach((n, i) => console.log(`  ${String(i + 1).padStart(3)}.  ${n.padEnd(28)} ${components[n].label}`));

  const rl = createInterface({ input: process.stdin, output: process.stdout });
  const raw = (await rl.question('\n  Pick (number or name): ')).trim();
  rl.close();

  const num = parseInt(raw, 10);
  if (!isNaN(num) && num >= 1 && num <= names.length) return names[num - 1];
  if (components[raw]) return raw;
  console.error(`\n✗ Invalid: "${raw}"`);
  process.exit(1);
}

let pending = new Set(),
  building = false,
  debounceId = null;

function schedule(ids, component) {
  ids.forEach((id) => pending.add(id));
  clearTimeout(debounceId);
  debounceId = setTimeout(() => flush(component), 400);
}

async function flush(component) {
  if (building) return;
  building = true;
  const toRun = component.steps.filter((s) => pending.has(s.id));
  pending.clear();
  log('🔨', `rebuilding [${toRun.map((s) => s.label).join(', ')}]`);
  for (const s of toRun) {
    const t0 = Date.now();
    log('▶', s.label);
    try {
      await run(s.filter);
      log('✓', `${s.label}  (${Date.now() - t0}ms)`);
    } catch {
      log('✗', `${s.label} failed`);
    }
  }
  building = false;
  if (pending.size > 0) flush(component);
}

const components = await discover();
const name = await pick(components, process.argv[2]);
const component = components[name];

console.log(`\n[watch] ${name} — watching:\n`);
for (const trigger of component.triggers) {
  console.log(`  ${trigger.glob}\n    → [${trigger.steps.join(', ')}]`);
  const isGlob = trigger.glob.endsWith('/**');
  const absPath = path.join(ROOT, isGlob ? trigger.glob.slice(0, -3) : trigger.glob);
  const watcher = watch(absPath, { recursive: isGlob });
  watcher.on('change', (_, f) => {
    const full = isGlob && f ? path.join(absPath, f) : absPath;
    const rel = path.relative(ROOT, full);
    if (/node_modules|[/\\]dist[/\\]/.test(rel)) return;
    process.stdout.write('\n');
    log('📝', `changed  ${rel}`);
    schedule(trigger.steps, component);
  });
  watcher.on('error', (err) => log('⚠️', `error: ${err.message}`));
  log('👀', `watching ${trigger.glob}`);
}

console.log('\n  Ctrl-C to stop.\n');

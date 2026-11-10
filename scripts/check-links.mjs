// Checks that every internal link and asset reference in dist/ resolves to a built file,
// and that #fragments point at an existing id. Run after `npm run build`.
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = resolve(dirname(fileURLToPath(import.meta.url)), '../dist');
const site = 'https://ruslanhasanov.de';

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

/** Map a URL path to the file the static host would serve, or null. */
function fileFor(pathname) {
  const clean = decodeURIComponent(pathname);
  const candidates = clean.endsWith('/')
    ? [join(dist, clean, 'index.html')]
    : [join(dist, clean), join(dist, clean, 'index.html'), join(dist, `${clean}.html`)];
  return candidates.find((c) => existsSync(c) && statSync(c).isFile()) ?? null;
}

const idCache = new Map();
function idsIn(file) {
  if (!idCache.has(file)) {
    const html = readFileSync(file, 'utf8');
    idCache.set(file, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  }
  return idCache.get(file);
}

const files = walk(dist);
const htmlFiles = files.filter((f) => f.endsWith('.html'));
const cssFiles = files.filter((f) => f.endsWith('.css'));
const xmlFiles = files.filter((f) => f.endsWith('.xml'));
const problems = [];
let checked = 0;

function check(ref, fromFile) {
  if (!ref || /^(mailto:|tel:|data:|javascript:)/.test(ref)) return;
  let url;
  const base = new URL('/' + relative(dist, fromFile).replace(/index\.html$/, ''), site);
  try {
    url = new URL(ref, base);
  } catch {
    problems.push(`${relative(dist, fromFile)}: unparsable ${ref}`);
    return;
  }
  if (url.origin !== site) return; // outbound link
  checked++;
  const target = fileFor(url.pathname);
  if (!target) {
    problems.push(`${relative(dist, fromFile)}: ${ref} -> no file`);
    return;
  }
  if (url.hash && target.endsWith('.html')) {
    const id = decodeURIComponent(url.hash.slice(1));
    if (!idsIn(target).has(id)) problems.push(`${relative(dist, fromFile)}: ${ref} -> missing #${id}`);
  }
}

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  for (const m of html.matchAll(/\s(?:href|src|content)="([^"]*)"/g)) {
    const v = m[1];
    // <meta content> only matters when it is a URL on this site (og:image, og:url)
    if (m[0].trimStart().startsWith('content=') && !v.startsWith(site)) continue;
    check(v.replaceAll('&amp;', '&'), file);
  }
  for (const m of html.matchAll(/\ssrcset="([^"]*)"/g)) {
    for (const part of m[1].split(',')) check(part.trim().split(/\s+/)[0], file);
  }
}
for (const file of cssFiles) {
  for (const m of readFileSync(file, 'utf8').matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/g)) check(m[1], file);
}
for (const file of xmlFiles) {
  for (const m of readFileSync(file, 'utf8').matchAll(/(?:<loc>|href=")([^<"]+)/g)) check(m[1], file);
}

console.log(`Checked ${checked} internal references in ${htmlFiles.length} HTML, ${cssFiles.length} CSS, ${xmlFiles.length} XML files.`);
if (problems.length) {
  console.error(`${problems.length} broken:\n` + problems.join('\n'));
  process.exit(1);
}
console.log('All internal links resolve.');

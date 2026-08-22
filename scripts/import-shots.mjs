#!/usr/bin/env node
/**
 * Copy product screenshots into public/shots under the names the page expects.
 *
 *   node scripts/import-shots.mjs <folder>
 *   node scripts/import-shots.mjs a.png b.png c.png d.png e.png f.png g.png
 *   node scripts/import-shots.mjs 6="C:/Users/me/Desktop/bill.png"
 *
 * Exists because the only thing standing between this page and a finished look
 * is seven files with the right names, and renaming seven files by hand in
 * Explorer is exactly the chore that gets half-done.
 *
 * Never deletes or overwrites blindly: an existing file is replaced only with
 * --force, and anything it cannot match is reported rather than guessed at.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public', 'shots');

/** Target name -> what the screenshot should show. Order matters for the
    positional mode, and matches the order the shots appear down the page. */
const TARGETS = [
  ['1', 'Showcase — admin dashboard'],
  ['2', 'Lead Pipeline — leads table with the stage rail'],
  ['3', 'WhatsApp Inbox — chat list, thread, package carousel'],
  ['4', 'Instagram DMs — DM thread with a package carousel'],
  ['5', 'Packages & Itineraries — rendered itinerary document'],
  ['6', 'Bookings & Bills — invoice on the agency letterhead'],
  ['7', 'Hotels & rates — property list + room rates grid'],
];

const EXTS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif']);
const args = process.argv.slice(2).filter((a) => a !== '--force');
const force = process.argv.includes('--force');

function usage(message) {
  if (message) console.error(`\n✗ ${message}\n`);
  console.log('Usage:');
  console.log('  node scripts/import-shots.mjs <folder>');
  console.log('  node scripts/import-shots.mjs f1.png f2.png ... f7.png   (in this order)');
  console.log('  node scripts/import-shots.mjs 6=path/to/bill.png          (any subset)');
  console.log('\nTargets, in page order:');
  for (const [name, desc] of TARGETS) console.log(`  ${name.padEnd(19)} ${desc}`);
  console.log('\n  --force   replace files that are already there');
  process.exit(message ? 1 : 0);
}

if (args.length === 0) usage();

fs.mkdirSync(outDir, { recursive: true });

/** @type {[string, string][]} pairs of [targetName, sourcePath] */
let pairs = [];

if (args.some((a) => a.includes('='))) {
  // Explicit mode — unambiguous, and the only way to do a partial import.
  for (const arg of args) {
    const at = arg.indexOf('=');
    if (at === -1) usage(`Mixed forms: "${arg}" has no "=".`);
    const name = arg.slice(0, at).trim();
    const file = arg.slice(at + 1).trim().replace(/^["']|["']$/g, '');
    if (!TARGETS.some(([t]) => t === name)) usage(`Unknown target "${name}".`);
    pairs.push([name, file]);
  }
} else if (args.length === 1 && fs.existsSync(args[0]) && fs.statSync(args[0]).isDirectory()) {
  // Folder mode — take the image files in name order and map them positionally.
  const found = fs
    .readdirSync(args[0])
    .filter((f) => EXTS.has(path.extname(f).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((f) => path.join(args[0], f));

  if (found.length === 0) usage(`No image files in ${args[0]}`);
  if (found.length !== TARGETS.length) {
    console.warn(
      `! ${found.length} image(s) found but ${TARGETS.length} expected — mapping the ones present, in name order.`,
    );
  }
  pairs = found.slice(0, TARGETS.length).map((file, i) => [TARGETS[i][0], file]);
} else {
  // Positional mode.
  if (args.length > TARGETS.length) usage(`Too many files: ${args.length} given, 7 expected.`);
  pairs = args.map((file, i) => [TARGETS[i][0], file.replace(/^["']|["']$/g, '')]);
}

let copied = 0;
let skipped = 0;

for (const [name, source] of pairs) {
  if (!fs.existsSync(source)) {
    console.error(`✗ ${name.padEnd(19)} source not found: ${source}`);
    skipped += 1;
    continue;
  }

  const ext = path.extname(source).toLowerCase();
  if (!EXTS.has(ext)) {
    console.error(`✗ ${name.padEnd(19)} not an image: ${source}`);
    skipped += 1;
    continue;
  }

  // The page references .png paths, so everything lands as that name. A jpg
  // copied to a .png name still renders — browsers sniff the bytes — but say so,
  // because it is surprising later.
  const dest = path.join(outDir, `${name}.png`);
  if (fs.existsSync(dest) && !force) {
    console.log(`· ${name.padEnd(19)} already present — skipping (use --force to replace)`);
    skipped += 1;
    continue;
  }

  fs.copyFileSync(source, dest);
  const kb = (fs.statSync(dest).size / 1024).toFixed(0);
  const note = ext === '.png' ? '' : `  (was ${ext}, saved as .png)`;
  console.log(`✓ ${name.padEnd(19)} ${kb} KB${note}`);
  copied += 1;
}

const missing = TARGETS.filter(([n]) => !fs.existsSync(path.join(outDir, `${n}.png`)));
console.log(`\n${copied} copied, ${skipped} skipped.`);
if (missing.length) {
  console.log(`Still missing (${missing.length}):`);
  for (const [name, desc] of missing) console.log(`  ${name.padEnd(19)} ${desc}`);
} else {
  console.log('All seven screenshots are in place.');
}

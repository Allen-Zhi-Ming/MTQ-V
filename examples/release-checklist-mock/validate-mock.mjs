import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = dirname(fileURLToPath(import.meta.url));
const checklist = JSON.parse(readFileSync(join(dir, 'release-checklist.json'), 'utf8'));

if (checklist.dataPolicy !== 'mock-only') throw new Error('Invalid data policy');
if (!Array.isArray(checklist.checks)) throw new Error('Checks must be an array');
if (checklist.checks.length < 3) throw new Error('Not enough checks');

console.log('Release checklist mock validation passed');

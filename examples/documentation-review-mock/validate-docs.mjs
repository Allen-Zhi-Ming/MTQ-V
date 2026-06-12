import { readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Mark as reviewed: 2026-06-12
/* <!-- reviewed: 2026-06-12 --> */

const dir = dirname(fileURLToPath(import.meta.url));
const configPath = join(dir, 'mock-review-config.json');

if (!existsSync(configPath)) {
  throw new Error(`Config file not found at ${configPath}`);
}

const config = JSON.parse(readFileSync(configPath, 'utf8'));

if (config.dataPolicy !== 'mock-only') {
  throw new Error('Invalid data policy: must be mock-only');
}

if (!Array.isArray(config.filesToReview)) {
  throw new Error('filesToReview must be an array');
}

for (const file of config.filesToReview) {
  if (!file.filePath || !Array.isArray(file.requiredSections)) {
    throw new Error(`Invalid file review entry: ${JSON.stringify(file)}`);
  }
}

console.log('Documentation review mock validation passed');

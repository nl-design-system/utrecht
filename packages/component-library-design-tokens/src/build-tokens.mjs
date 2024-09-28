import { writeFile } from 'node:fs/promises';
import { getComponentTokens } from './lib.mjs';
import { mkdirSync } from 'node:fs';

const build = async () => {
  const tokens = await getComponentTokens();

  await mkdirSync('./dist/', { recursive: true });
  await writeFile('./dist/tokens.json', JSON.stringify(tokens, null, 2));
};

build();

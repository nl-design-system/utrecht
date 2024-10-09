import { mkdir, writeFile } from 'node:fs/promises';
import { getComponentTokens } from './lib.mjs';

const build = async () => {
  const tokens = await getComponentTokens();

  await mkdir('./dist/', { recursive: true });
  await writeFile('./dist/tokens.json', JSON.stringify(tokens, null, 2));
};

build();

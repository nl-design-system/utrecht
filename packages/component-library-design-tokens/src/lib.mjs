import { readFile } from 'node:fs/promises';
import merge from 'lodash.merge';
import { glob } from 'glob';

export const getComponentTokens = async () => {
  const tokenFiles = await glob('../../components/*/src/tokens.json');

  const tokens = await Promise.all(
    tokenFiles.map(async (tokensPath) => {
      try {
        return JSON.parse(await readFile(tokensPath, 'utf-8'));
      } catch (e) {
        return {};
      }
    }),
  );

  return merge({}, ...tokens);
};

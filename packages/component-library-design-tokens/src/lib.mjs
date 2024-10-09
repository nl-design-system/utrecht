import { readFile } from 'node:fs/promises';
import merge from 'lodash.merge';
import { glob } from 'glob';
import { resolve } from 'path';

export const getComponentTokens = async () => {
  const cwd = '../..';
  const tokenFiles = (
    await glob('components/*/src/**/tokens.json', {
      cwd,
      ignore: '**/node_modules/**',
    })
  ).map((path) => resolve(cwd, path));

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

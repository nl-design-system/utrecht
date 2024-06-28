import { glob } from 'glob';
import { dirname } from 'node:path';
import { readFile, writeFile } from 'node:fs/promises';

/**
 * Use the same `repository` setting in each package of this monorepository.
 * Add the `directory` property with the path of the `package.json` relative
 * to the root of the repository.
 */
const init = async () => {
  let repository = {};

  try {
    const json = await readFile('./package.json');
    repository = JSON.parse(json).repository;
  } catch (e) {}

  const paths = await glob('**/package.json', { ignore: ['**/node_modules/**', '**/dist/**'] });
  paths.forEach(async (path) => {
    console.log(path);
    const file = await readFile(path);
    const json = JSON.parse(file);
    json.repository = {
      ...repository,
      ...json.repository,
      directory: dirname(path),
    };
    await writeFile(path, JSON.stringify(json, null, 2) + '\n');
  });
  console.log(`Checked ${paths.length} files`);
};

init();

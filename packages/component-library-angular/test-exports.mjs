import { resolve } from 'node:path';
import { readFile } from 'node:fs/promises';
import { access, constants } from 'node:fs/promises';
import isEqual from 'lodash.isequal';
import cloneDeepWith from 'lodash.clonedeepwith';

const getSubset = (pkg) => ({
  module: pkg.module,
  typings: pkg.typings,
  exports: pkg.exports,
});

const getAbsoluteSubset = (base, pkg) =>
  cloneDeepWith(getSubset(pkg), (value) => (typeof value === 'string' ? resolve(base, value) : undefined));

const getPaths = (pkg) =>
  [
    pkg.module,
    pkg.typings,
    ...(pkg.exports
      ? Object.values(pkg.exports)
          .map((item) => Object.values(item))
          .reduce((a, b) => [...a, ...b], [])
      : []),
  ].filter(Boolean);

const getAbsolutePaths = (base, pkg) => getPaths(pkg).map((path) => resolve(base, path));

const testPathExistence = (paths) =>
  paths
    .map((path) => resolve(path))
    .forEach(async (path) => {
      try {
        await access(path, constants.R_OK);
        console.log(`File exists: ${path}`);
      } catch (e) {
        throw new Error(`Cannot find file mentioned in package.json: ${path}`);
      }
    });

const init = async () => {
  const packageJSON = JSON.parse(await readFile('./package.json', 'utf-8'));
  const distPackageJSON = JSON.parse(await readFile('./dist/package.json', 'utf-8'));

  const subset = getAbsoluteSubset('', packageJSON);
  const referenceSubset = getAbsoluteSubset('dist/', distPackageJSON);

  if (!isEqual(subset, referenceSubset)) {
    console.log(`package.json:\n${JSON.stringify(subset, null, 2)}`);
    console.log(`dist/package.json:\n${JSON.stringify(referenceSubset, null, 2)}`);

    throw new Error(
      'Exports of package.json and dist/package.json are not in sync. See CONTRIBUTING.md for more info.',
    );
  }
};

init();

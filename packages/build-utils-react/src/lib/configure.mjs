import { readFile, writeFile, readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, extname, relative } from 'node:path';
import { glob } from 'glob';
import sortPackageJson from 'sort-package-json';
import { findWorkspaceRoot } from './pnpm.mjs';

/*
 * This goal of this script is to configure all `package.json` files consistently,
 * without much manual labour and risk of errors.
 *
 * For example:
 *
 * - using the same fields for license, author​
 * - using a consistent pattern for homepage , bugs and directory
 */

/**
 * Updates package.json files with consistent configuration
 * @param {string} projectPath - Path to the project directory
 * @param {Object} customConfig - Custom configuration to override defaults
 */
async function updatePackageJson(projectPath, defaultConfig, customConfig = {}, config) {
  console.log(`Updating ${projectPath}`);
  const packagePath = join(projectPath, 'package.json');

  // Detect the pnpm workspace
  let workspacePath, workspaceJson, workspaceJsonPath;

  try {
    workspacePath = await findWorkspaceRoot(projectPath);
    workspaceJsonPath = join(workspacePath, './package.json');

    console.log(`pnpm workspace detected: ${workspaceJsonPath}`);
    if (workspaceJsonPath) {
      workspaceJson = JSON.parse(await readFile(workspaceJsonPath, 'utf8'));
    }
  } catch (error) {}

  if (!workspaceJsonPath) {
    console.log('No pnpm workspace detected.');
  }

  if (workspaceJsonPath && !workspaceJson) {
    console.error('Could not load pnpm workspace package.json.');
  }

  const workspaceConfig = workspaceJson
    ? {
        license: workspaceJson.license,
        repository: workspaceJson.repository,
        author: workspaceJson.author,
        bugs: workspaceJson.bugs,
        homepage: workspaceJson.homepage,
      }
    : {};

  // Merge default config with custom config
  const basePackageJson = {
    ...workspaceConfig,
    ...defaultConfig,
    ...customConfig,
  };

  let sourcePackageJson;
  try {
    // Read existing package.json
    sourcePackageJson = JSON.parse(await readFile(packagePath, 'utf8'));
  } catch (error) {
    console.error(`Error reading ${packagePath}:`, error.message);
  }

  const relativePackagePath = workspacePath ? relative(workspacePath, projectPath) : undefined;

  // Update fields while preserving existing configuration
  const directory = workspacePath ? relative(workspacePath, projectPath) : undefined;

  let packageJson = {
    ...sourcePackageJson,
    type: 'module', // Add ESM type
    author: config.author || basePackageJson.author,
    license: config.license || basePackageJson.license,
    repository: {
      ...basePackageJson.repository,
      url: `git+https://github.com/${config.githubUser || config.githubOrganisation}/${config.repository}.git`,
      directory,
    },
    bugs: {
      url: `https://github.com/${config.githubUser || config.githubOrganisation}/${config.repository}/issues`,
    },
    // Use the GitHub repository hompage at the README fragment as homepage by default.
    // For `package.json` files in a monorepo, use the directory of that file as homepage,
    // so it is easy to find to the specific code.
    homepage: `https://github.com/${config.githubUser || config.githubOrganisation}/${config.repository}/${
      directory ? `tree/${config.defaultBranch}/${directory}#readme` : '#readme'
    }`,
  };

  // Remove old `package.json` properties that have been superceded by `exports`,
  // such as `main` and `module`.
  delete packageJson['main'];
  delete packageJson['module'];
  delete packageJson['types'];

  // Find compiled `.mjs` files and add them to the `package.json` `exports` section.
  const requiredESModules = await glob(['dist/**/*.mjs']);
  const requiredESModuleExports = requiredESModules.reduce((obj, file) => {
    // Convert `./dist/example.mjs` to the alias `"./example"`
    // Convert `./dist/index.mjs` to the alias `"."`
    const shorthand = file
      .replace(/^dist\//gi, './')
      .replace(/\.mjs$/gi, '')
      .replace(/\/index$/i, '');

    const types = `./${file.replace(/\.mjs/gi, '.d.ts')}`;
    const typesExist = existsSync(types);
    console.log(shorthand, types, typesExist);
    obj[shorthand] = {
      ...(typesExist ? { types } : {}),
      import: `./${file}`,
    };
    return obj;
  }, {});

  // Detect optional files that we can include in the `exports` as is.
  const optionalExports = (await glob(['*.md', 'dist/.jest-test-results.json'])).reduce((obj, file) => {
    const relativePath = `./${relative('.', file)}`;
    obj[relativePath] = relativePath;
    return obj;
  }, {});

  packageJson.exports = {
    ...requiredESModuleExports,
    ...optionalExports,
  };

  if (config.legacyExports) {
    const files = await glob('dist/**/*.mjs');
    packageJson.exports = {
      ...packageJson.exports,
      ...files.reduce((obj, file) => {
        const relativePath = `./${file}`;
        const ext = extname(relativePath);
        const withoutExtension = relativePath.substring(0, relativePath.length - ext.length);
        const typesPath = `${withoutExtension}.d.ts`;
        const types = existsSync(typesPath) ? typesPath : undefined;

        let desc = relativePath;
        if (ext === '.mjs') {
          if (types) {
            desc = {
              types,
              import: relativePath,
            };
          }

          const directoryIndexRegexp = /\/index$/i;
          if (directoryIndexRegexp.test(withoutExtension)) {
            const withoutIndex = withoutExtension.replace(directoryIndexRegexp, '');
            obj[withoutIndex] = desc;
          }

          obj[withoutExtension] = desc;
        }

        if (types && ext === '.mjs') {
          const desc2 = {
            types,
            import: `${withoutExtension}.mjs`,
          };
          obj[relativePath] = desc2;
        }
        return obj;
      }, {}),
    };
  }

  packageJson = sortPackageJson(packageJson);

  try {
    // Write updated package.json
    await writeFile(
      packagePath,
      JSON.stringify(packageJson, null, typeof config.indent === 'number' ? config.indent : 2) + '\n',
    );

    console.log(`Successfully updated ${packagePath}`);
  } catch (error) {
    console.error(`Error updating ${packagePath}:`, error.message);
  }
}

/**
 * Updates all package.json files in a directory and its subdirectories
 * @param {string} rootDir - Root directory to start searching from
 * @param {Object} config - Custom configuration to apply
 */
async function updateAllPackageJsonFiles(rootDir, config) {
  try {
    const items = await readdir(rootDir);

    await Promise.all(
      items.map(async (item) => {
        const fullPath = join(rootDir, item);
        const stats = await stat(fullPath);

        if (stats.isDirectory()) {
          // Check if directory has package.json
          if (existsSync(join(fullPath, 'package.json'))) {
            await updatePackageJson(fullPath, config);
          }
          // Recursively check subdirectories
          await updateAllPackageJsonFiles(fullPath, config);
        }
      }),
    );
  } catch (error) {
    console.error('Error scanning directories:', error.message);
  }
}

export { updatePackageJson, updateAllPackageJsonFiles };

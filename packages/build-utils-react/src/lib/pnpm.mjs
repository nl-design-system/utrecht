import { dirname, join } from 'node:path';
import { existsSync } from 'node:fs';

/**
 * Finds the root package.json in a pnpm workspace
 * @param {string} startPath - Path to start searching from (defaults to current directory)
 * @returns {Promise<string>} - Path to the workspace root package.json
 * @throws {Error} - If no workspace root is found
 */
export const findWorkspaceRoot = async (startPath) => {
  let currentPath = startPath;

  while (currentPath !== dirname(currentPath)) {
    // Check for pnpm-workspace.yaml
    if (existsSync(join(currentPath, 'pnpm-workspace.yaml'))) {
      const packageJsonPath = join(currentPath, 'package.json');
      if (existsSync(packageJsonPath)) {
        return currentPath;
      }
    }
    // Move up one directory
    currentPath = dirname(currentPath);
  }

  throw new Error(
    'No pnpm workspace root found. Please ensure you have a pnpm-workspace.yaml file in your workspace root.',
  );
};

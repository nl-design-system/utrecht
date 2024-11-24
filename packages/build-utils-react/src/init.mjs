import { updatePackageJson } from './lib/configure.mjs';
import { cwd } from 'node:process';

const init = async () => {
  const currentDirectory = cwd();

  await updatePackageJson(
    currentDirectory,
    // Base `package.json` file
    {
      type: 'module',
      sideEffects: false,
      publishConfig: {
        access: 'public',
      },
    },
    // Optional: custom `package.json` settings from the current directory
    {},
    // Configuration for the initialization
    {
      githubOrganisation: 'nl-design-system',
      repository: 'utrecht',
      author: 'Community for NL Design System',
      directoryHomepage: true,
      indent: 2,
      legacyExports: true,
      defaultBranch: 'main',
    },
  );
};

init();

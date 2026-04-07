/**
 * @type {import('jest').Config}
 */
const config = {
  coverageProvider: 'v8',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  rootDir: './src/',
  transform: {
    '^.+\\.(ts|tsx)?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  transformIgnorePatterns: ['node_modules'],

  verbose: true,
};

export default config;

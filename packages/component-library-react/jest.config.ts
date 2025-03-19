import type { Config } from 'jest';

const config: Config = {
  coverageDirectory: '../coverage/',
  coverageProvider: 'v8',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^@utrecht/(.*)$': '<rootDir>/../../components-react/$1/src/',
  },
  rootDir: './src/',
  setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/dist/'],
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

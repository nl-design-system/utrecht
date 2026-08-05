export default {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/dist/'],
  moduleNameMapper: {
    '^@utrecht/(.*)$': '<rootDir>/../$1/src/',
  },
};

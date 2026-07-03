export default {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/dist/'],
  moduleNameMapper: {
    '^@utrecht/component-library-react$': '<rootDir>/../../component-library-react/src/',
    '^@utrecht/(.*)$': '<rootDir>/../$1/src/',
  },
};

export default {
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/dist/'],
  // The generated files import each other with `.js`, as Node needs for ES modules
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
};

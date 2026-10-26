// Re-implementation of functions from @nl-design-system-unstable/tokens-lib/dist/design-tokens.js
// The original cannot be imported directly in Node.js ESM because its dist uses bare lodash-es
// specifiers without file extensions (e.g. 'lodash-es/cloneDeepWith' instead of
// 'lodash-es/cloneDeepWith.js'), which is invalid in Node.js ESM resolution.
// TODO: remove this file and import directly from tokens-lib once their build is fixed.

export const isDesignToken = (value) =>
  Object.prototype.hasOwnProperty.call(value, 'value') || Object.prototype.hasOwnProperty.call(value, '$value');

export const isDesignTokenDefinition = (value) =>
  isDesignToken(value) ||
  Object.prototype.hasOwnProperty.call(value, 'css') ||
  Object.prototype.hasOwnProperty.call(value, '$extensions');

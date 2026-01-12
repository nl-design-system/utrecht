/**
 * This is the configuration for lint-staged.
 *
 * lint-staged can run commands on files that have been staged in git just before they are committed. We do this for two
 * reasons:
 *
 * 1. Prevent problematic code from being committed.
 * 2. If possible correct mistakes that can be auto-fixed.
 *
 * The keys of the configuration object below are files or globs that lint-staged will match against. The values are
 * either a single command to run or an array of commands that will be run serially on the files that matched.
 */

export default {
  '*.{css,scss}': ['stylelint --allow-empty-input --fix', 'prettier --write'],
  '*.{js,cjs,mjs,json,jsx,mdx,ts,tsx}': ['eslint --no-error-on-unmatched-pattern --fix', 'prettier --write'],
  '*.{yml,yaml}': 'prettier --write',
  '*.md': ['markdownlint', 'prettier --write'],
  'package.json': 'npmPkgJsonLint --allowEmptyTargets',
};

# @utrecht/button-react

## 2.0.6

### Patch Changes

- c4b943b: Fix `exports` to include `.md` files and consistently support the main import.
  Note: the `.md` files are for development purposes only, they are not supported as part of the public API.
- Updated dependencies [729f698]
  - @utrecht/button-css@2.3.0

## 2.0.5

### Patch Changes

- 25f8ba5: Make CSS and React components a dependency, instead of a devDependency. This should fix some TypeScript errors about missing types.

## 2.0.4

### Patch Changes

- 5881339: Remove `"sideEffects": true` from `package.json` to prevent tree shaking CSS injection'

## 2.0.3

### Patch Changes

- 709159c: Fix issue causing missing TypeScript `d.ts` files for React components.
- 709159c: Specify `exports` in `package.jon` for `.mjs` files in React components.
- 709159c: Remove CommonJS builds from React components, since in Developer Open Hour everyone assured me surely nobody uses `require()` anymore!

## 2.0.2

### Patch Changes

- 6343055: Remove `@babel` runtime from `.mjs` files, use modern JavaScript syntax and use our own CSS injection script.

## 2.0.1

### Patch Changes

- 46e795c: Consistently use `dist/*.cjs` and `dist/*.mjs` files for React components'

## 2.0.0

### Major Changes

- c3660c1: Rename design token `utrecht.button.icon.gap` to `utrecht.button.column-gap`

### Minor Changes

- 24b4813: Add an optional `label` property to React `Button` component, to support better styling of icons.

## 1.0.1

### Patch Changes

- 69e39da: Fix missing bundled CSS for the React Button and Calendar components.

## 1.0.0

### Major Changes

- 1e75738: Add `@utrecht/button-react` package.

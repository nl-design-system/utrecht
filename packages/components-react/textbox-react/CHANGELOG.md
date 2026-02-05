# @utrecht/textbox-react

## 1.0.13

### Patch Changes

- Updated dependencies [a6680b7]
  - @utrecht/textbox-css@3.1.0

## 1.0.12

### Patch Changes

- 9b3cb1e: Release with npm provenance.
- Updated dependencies [9b3cb1e]
  - @utrecht/textbox-css@3.0.1

## 1.0.11

### Patch Changes

- 6a1dc0e: Updated peer dependencies for React 19 compatibility.

## 1.0.10

### Patch Changes

- Updated dependencies [77438bb]
  - @utrecht/textbox-css@3.0.0

## 1.0.9

### Patch Changes

- Updated dependencies [33eaccf]
  - @utrecht/textbox-css@2.0.0

## 1.0.8

### Patch Changes

- Updated dependencies [e20f33c]
  - @utrecht/textbox-css@1.7.1

## 1.0.7

### Patch Changes

- Updated dependencies [730e2dd]
  - @utrecht/textbox-css@1.7.0

## 1.0.6

### Patch Changes

- c4b943b: Fix `exports` to include `.md` files and consistently support the main import.
  Note: the `.md` files are for development purposes only, they are not supported as part of the public API.
- Updated dependencies [729f698]
  - @utrecht/textbox-css@1.6.0

## 1.0.5

### Patch Changes

- 25f8ba5: Make CSS and React components a dependency, instead of a devDependency. This should fix some TypeScript errors about missing types.

## 1.0.4

### Patch Changes

- 5881339: Remove `"sideEffects": true` from `package.json` to prevent tree shaking CSS injection'

## 1.0.3

### Patch Changes

- 709159c: Fix issue causing missing TypeScript `d.ts` files for React components.
- 709159c: Specify `exports` in `package.jon` for `.mjs` files in React components.
- 709159c: Remove CommonJS builds from React components, since in Developer Open Hour everyone assured me surely nobody uses `require()` anymore!

## 1.0.2

### Patch Changes

- 6343055: Remove `@babel` runtime from `.mjs` files, use modern JavaScript syntax and use our own CSS injection script.

## 1.0.1

### Patch Changes

- 46e795c: Consistently use `dist/*.cjs` and `dist/*.mjs` files for React components'

## 1.0.0

### Major Changes

- 9fc1c3b: Create React Textbox component package

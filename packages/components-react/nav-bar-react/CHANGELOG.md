# @utrecht/nav-bar-react

## 1.0.9

### Patch Changes

- 9b3cb1e: Release with npm provenance.
- Updated dependencies [9b3cb1e]
  - @utrecht/nav-bar-css@2.0.1

## 1.0.8

### Patch Changes

- 6a1dc0e: Updated peer dependencies for React 19 compatibility.

## 1.0.7

### Patch Changes

- Updated dependencies [77438bb]
  - @utrecht/nav-bar-css@2.0.0

## 1.0.6

### Patch Changes

- Updated dependencies [e20f33c]
  - @utrecht/nav-bar-css@1.4.1

## 1.0.5

### Patch Changes

- c4b943b: Fix `exports` to include `.md` files and consistently support the main import.
  Note: the `.md` files are for development purposes only, they are not supported as part of the public API.

## 1.0.4

### Patch Changes

- 25f8ba5: Make CSS and React components a dependency, instead of a devDependency. This should fix some TypeScript errors about missing types.

## 1.0.3

### Patch Changes

- 5881339: Remove `"sideEffects": true` from `package.json` to prevent tree shaking CSS injection'

## 1.0.2

### Patch Changes

- 709159c: Fix issue causing missing TypeScript `d.ts` files for React components.
- 709159c: Specify `exports` in `package.jon` for `.mjs` files in React components.
- 709159c: Remove CommonJS builds from React components, since in Developer Open Hour everyone assured me surely nobody uses `require()` anymore!

## 1.0.1

### Patch Changes

- 6343055: Remove `@babel` runtime from `.mjs` files, use modern JavaScript syntax and use our own CSS injection script.

## 1.0.0

### Major Changes

- 1815c06: Create new npm package for the `NavBar` React component.

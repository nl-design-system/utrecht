# @utrecht/body-react

## 0.0.6

### Patch Changes

- Updated dependencies [e20f33c]
  - @utrecht/body-css@1.2.1

## 0.0.5

### Patch Changes

- c4b943b: Fix `exports` to include `.md` files and consistently support the main import.
  Note: the `.md` files are for development purposes only, they are not supported as part of the public API.
- Updated dependencies [f54840f]
  - @utrecht/body-css@1.2.0

## 0.0.4

### Patch Changes

- 25f8ba5: Make CSS and React components a dependency, instead of a devDependency. This should fix some TypeScript errors about missing types.

## 0.0.3

### Patch Changes

- 5881339: Remove `"sideEffects": true` from `package.json` to prevent tree shaking CSS injection'

## 0.0.2

### Patch Changes

- 709159c: Fix issue causing missing TypeScript `d.ts` files for React components.
- 709159c: Specify `exports` in `package.jon` for `.mjs` files in React components.
- 709159c: Remove CommonJS builds from React components, since in Developer Open Hour everyone assured me surely nobody uses `require()` anymore!

## 0.0.1

### Patch Changes

- 6343055: Remove `@babel` runtime from `.mjs` files, use modern JavaScript syntax and use our own CSS injection script.

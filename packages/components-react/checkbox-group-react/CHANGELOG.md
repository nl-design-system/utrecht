# @utrecht/checkbox-group-react

## 1.0.8

### Patch Changes

- 25f8ba5: Make CSS and React components a dependency, instead of a devDependency. This should fix some TypeScript errors about missing types.
- Updated dependencies [25f8ba5]
  - @utrecht/form-field-error-message-react@1.0.5
  - @utrecht/form-field-description-react@1.0.5
  - @utrecht/form-field-react@1.0.5
  - @utrecht/checkbox-react@1.0.6
  - @utrecht/fieldset-react@1.0.5
  - @utrecht/form-field-checkbox-react@1.0.8

## 1.0.7

### Patch Changes

- Updated dependencies [890d7e7]
  - @utrecht/checkbox-react@1.0.5
  - @utrecht/form-field-checkbox-react@1.0.7

## 1.0.6

### Patch Changes

- 5881339: Remove `"sideEffects": true` from `package.json` to prevent tree shaking CSS injection'
- Updated dependencies [5881339]
  - @utrecht/checkbox-react@1.0.4
  - @utrecht/fieldset-react@1.0.4
  - @utrecht/form-field-checkbox-react@1.0.6
  - @utrecht/form-field-description-react@1.0.4
  - @utrecht/form-field-error-message-react@1.0.4
  - @utrecht/form-field-react@1.0.4

## 1.0.5

### Patch Changes

- 709159c: Fix issue causing missing TypeScript `d.ts` files for React components.
- 709159c: Specify `exports` in `package.jon` for `.mjs` files in React components.
- 709159c: Remove CommonJS builds from React components, since in Developer Open Hour everyone assured me surely nobody uses `require()` anymore!
- Updated dependencies [709159c]
- Updated dependencies [709159c]
- Updated dependencies [709159c]
  - @utrecht/checkbox-react@1.0.3
  - @utrecht/fieldset-react@1.0.3
  - @utrecht/form-field-checkbox-react@1.0.5
  - @utrecht/form-field-description-react@1.0.3
  - @utrecht/form-field-error-message-react@1.0.3
  - @utrecht/form-field-react@1.0.3

## 1.0.4

### Patch Changes

- 6343055: Remove `@babel` runtime from `.mjs` files, use modern JavaScript syntax and use our own CSS injection script.
- Updated dependencies [6343055]
  - @utrecht/form-field-error-message-react@1.0.2
  - @utrecht/form-field-description-react@1.0.2
  - @utrecht/form-field-checkbox-react@1.0.4
  - @utrecht/form-field-react@1.0.2
  - @utrecht/checkbox-react@1.0.2
  - @utrecht/fieldset-react@1.0.2

## 1.0.3

### Patch Changes

- Updated dependencies [b1d3bd1]
  - @utrecht/form-field-checkbox-react@1.0.3

## 1.0.2

### Patch Changes

- 46e795c: Consistently use `dist/*.cjs` and `dist/*.mjs` files for React components'
- Updated dependencies [46e795c]
  - @utrecht/form-field-error-message-react@1.0.1
  - @utrecht/form-field-description-react@1.0.1
  - @utrecht/form-field-checkbox-react@1.0.2
  - @utrecht/form-field-react@1.0.1
  - @utrecht/checkbox-react@1.0.1
  - @utrecht/fieldset-react@1.0.1

## 1.0.1

### Patch Changes

- 64d9157: Fix missing TypeScript types for React components by using `dependencies` instead of `devDependencies`.
- Updated dependencies [64d9157]
  - @utrecht/form-field-checkbox-react@1.0.1

## 1.0.0

### Major Changes

- b651c2c: Create new Checkbox Group component.

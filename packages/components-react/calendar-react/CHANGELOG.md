# @utrecht/calendar-react

## 1.0.15

### Patch Changes

- b912501: Changed the calendar navigation label to use the calendar year instead of the local week-numbering year

## 1.0.14

### Patch Changes

- 9b3cb1e: Release with npm provenance.
- Updated dependencies [9b3cb1e]
  - @utrecht/calendar-css@2.0.1
  - @utrecht/button-react@2.0.10

## 1.0.13

### Patch Changes

- 6a1dc0e: Updated peer dependencies for React 19 compatibility.
- Updated dependencies [6a1dc0e]
  - @utrecht/button-react@2.0.9

## 1.0.12

### Patch Changes

- Updated dependencies [77438bb]
  - @utrecht/calendar-css@2.0.0
  - @utrecht/button-react@2.0.8

## 1.0.11

### Patch Changes

- Updated dependencies [e20f33c]
  - @utrecht/calendar-css@1.4.1
  - @utrecht/button-react@2.0.7

## 1.0.10

### Patch Changes

- c4b943b: Fix `exports` to include `.md` files and consistently support the main import.
  Note: the `.md` files are for development purposes only, they are not supported as part of the public API.
- Updated dependencies [c4b943b]
  - @utrecht/button-react@2.0.6

## 1.0.9

### Patch Changes

- Updated dependencies [25f8ba5]
  - @utrecht/button-react@2.0.5

## 1.0.8

### Patch Changes

- Updated dependencies [725617a]
  - @utrecht/calendar-css@1.4.0
  - @utrecht/button-react@2.0.4

## 1.0.7

### Patch Changes

- 5881339: Remove `"sideEffects": true` from `package.json` to prevent tree shaking CSS injection'
- Updated dependencies [5881339]
  - @utrecht/button-react@2.0.4

## 1.0.6

### Patch Changes

- 709159c: Fix issue causing missing TypeScript `d.ts` files for React components.
- 709159c: Specify `exports` in `package.jon` for `.mjs` files in React components.
- 709159c: Remove CommonJS builds from React components, since in Developer Open Hour everyone assured me surely nobody uses `require()` anymore!
- Updated dependencies [709159c]
- Updated dependencies [709159c]
- Updated dependencies [709159c]
  - @utrecht/button-react@2.0.3

## 1.0.5

### Patch Changes

- 6343055: Remove `@babel` runtime from `.mjs` files, use modern JavaScript syntax and use our own CSS injection script.
- Updated dependencies [6343055]
  - @utrecht/button-react@2.0.2

## 1.0.4

### Patch Changes

- Updated dependencies [e497b08]
  - @utrecht/calendar-css@1.3.0
  - @utrecht/button-react@2.0.1

## 1.0.3

### Patch Changes

- 46e795c: Consistently use `dist/*.cjs` and `dist/*.mjs` files for React components'
- Updated dependencies [46e795c]
  - @utrecht/button-react@2.0.1

## 1.0.2

### Patch Changes

- Updated dependencies [c3660c1]
- Updated dependencies [24b4813]
  - @utrecht/button-react@2.0.0

## 1.0.1

### Patch Changes

- 69e39da: Fix missing bundled CSS for the React Button and Calendar components.
- Updated dependencies [69e39da]
  - @utrecht/button-react@1.0.1

## 1.0.0

### Major Changes

- ad62029: Add `@utrecht/calendar-react` package.

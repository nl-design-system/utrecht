# Configuration

## `package.json`

### `files`

- Include `dist/` for the compiled JavaScript.
- Include `dist/` to allow _Go to definition_ and see the original TypeScript.

### `"sideEffects": false`

Allow build tools to exclude code from this package when no imports appear to be used ("treeshaking"). Some code does include sideEffects, CSS injection in particular, but the side effects are only needed when the component is actually used.

## `tsconfig.json`

### `compilerOptions`

- [`composite`](https://www.typescriptlang.org/tsconfig/#composite): `true` because we include TypeScript projects for each React component npm package in this workspace.
- [`declaration`](https://www.typescriptlang.org/tsconfig/#declaration) and [`declarationMap`](https://www.typescriptlang.org/tsconfig/#declarationMap): allow jumping to the original `.ts` file when using _Go to definition_.
- `forceConsistentCasingInFileNames`: ensure we get the same errors as developers using a case-sensitive file system.
- `isolatedModules`: be prepared for [future build improvements](https://github.com/microsoft/TypeScript/issues/58944).
- `jsx: "react"`: do not require `import React from 'react';` in each `.tsx` file.
- `lib`: build for client-side scripts with access to the `"DOM"`. [`"ES2022"` on Can I Use](https://caniuse.com/?search=es2022) seems to have good browser support.
- `resolveJsonModule`: not needed for many projects, but it is harmless to make it consitently available.
- [`strict`](https://www.typescriptlang.org/tsconfig/#strict): automatically enable the following options, so we don't need to enable them explicitly:
  - `alwaysStrict`
  - `allowUnreachableCode`
  - `noImplicitAny`
  - `noImplicitThis`
  - `strictBindCallApply`
  - `strictFunctionTypes`
  - `strictNullChecks`
  - `strictPropertyInitialization`
  - `useUnknownInCatchVariables`
- Enable the following too, because they are not part of the _strict mode family_:
  - `noFallthroughCasesInSwitch`
  - `noImplicitOverride`
  - `noImplicitReturns`
  - `noPropertyAccessFromIndexSignature`
  - `noUncheckedIndexedAccess`
  - `noUnusedLocals`
  - `noUnusedParameters`

### `include`

- include component library files file from `src/`
- include component npm packages from `packages/`

## `tsconfig.test.json`

- `noEmit`: avoid creating `.js` new files based on unit tests.

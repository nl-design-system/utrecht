# @utrecht/component-library-angular 1.0.0 (2022-08-24)


### Bug Fixes

* fix the angular packages ([2ae5561](https://github.com/nl-design-system/utrecht/commit/2ae55613351cbc64dd2f028db064297975354234))


### Features

* component library for Angular ([61948ba](https://github.com/nl-design-system/utrecht/commit/61948baef659ab0aa5cba7187f1d66f40bd94927))


### BREAKING CHANGES

* upgrade angular to version 14 and support from 12 to 14

> note
- [x] the `@utrecht/component-library-angular` stile do not render the component
content
 - [x] `@utrecht/web-component-library-angular` has issue with using the stencil's
 `<slot>` we need to figure out how to make it working, currently we can only use
stencil `@Prop` to make the components render text

# @utrecht/component-library-vue 1.0.0 (2022-08-25)


### Bug Fixes

* change the way of export the vue component from index ([8f9a8f9](https://github.com/nl-design-system/utrecht/commit/8f9a8f9f74625867153e00e6fe5488172cde8433))
* enable build types for vuejs ([63f5be0](https://github.com/nl-design-system/utrecht/commit/63f5be077b22e01fab8ed1fbe717936a836911cc))
* enable showing `select` even if  there is no options ([395922d](https://github.com/nl-design-system/utrecht/commit/395922da66fde4ddbdcc030095d5b8ff81d2c231))
* fix the test tesconfig ([a31b671](https://github.com/nl-design-system/utrecht/commit/a31b671730bffa5e32fc9da7e5db21d6ee69616c))
* remove utrecht prefix from vue components file ([d12153e](https://github.com/nl-design-system/utrecht/commit/d12153e5c1f5ef24797deb4cfe9ae5806f28eeb9))
* the badge status vue component class name & add some vue stories ([#1072](https://github.com/nl-design-system/utrecht/issues/1072)) ([5773672](https://github.com/nl-design-system/utrecht/commit/5773672171ad24decfce1dcf2008ce18389fbe6d))
* use "button" as default type for Vue UtrechtButton ([2663bb5](https://github.com/nl-design-system/utrecht/commit/2663bb5921737d483dfe21b64f338de4592f6f3b))


### Features

* add vue custom radio button component ([#1126](https://github.com/nl-design-system/utrecht/issues/1126)) ([6790881](https://github.com/nl-design-system/utrecht/commit/67908818b285d8aed7684a838bc247a72d457d34))
* component library for Vue ([d26cfe5](https://github.com/nl-design-system/utrecht/commit/d26cfe55ef509552fc4f86d61fa1e28aa128ee04))
* create heading component for vuejs ([78a7c18](https://github.com/nl-design-system/utrecht/commit/78a7c1876bda5f6871d62b2fccefe69396fba823))
* export the vue table component ([cc8ba93](https://github.com/nl-design-system/utrecht/commit/cc8ba93c37116a346a6b7c0a5a1f741c94b66f85))
* improve the vue textarea component ([#1107](https://github.com/nl-design-system/utrecht/issues/1107)) ([6cf0c99](https://github.com/nl-design-system/utrecht/commit/6cf0c996f57faef067c77ae1abf69e9953c56c13))
* improve the vue textbox component ([#1096](https://github.com/nl-design-system/utrecht/issues/1096)) ([d8e595a](https://github.com/nl-design-system/utrecht/commit/d8e595aa22092d360d3eec94df5e32e2d78f0b63))
* refactor vue select component ([0646bbf](https://github.com/nl-design-system/utrecht/commit/0646bbf70b230e87337ef21fce2be0f12dd45027)), closes [#1](https://github.com/nl-design-system/utrecht/issues/1) [#2](https://github.com/nl-design-system/utrecht/issues/2)
* table components for Vue ([1e766fe](https://github.com/nl-design-system/utrecht/commit/1e766fecc51619823b3d9edd2ca766bd595199ed))


### BREAKING CHANGES

* keep option part of the select component

- [x] add new property `options` to render the options elements
    example:
    ```js
    [
    { value: '', label: 'Select an option' },

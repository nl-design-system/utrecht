<!-- @license CC0-1.0 -->

# Contributing to the Vue.js component library

## Adding a component

- [ ] Add a `dependency` (not a `devDependency`) to for the CSS component to `package.json`.
- [ ] Add the component implementation in a `src/MyComponent.vue` file, where you replace `MyComponent` with the pascal cased name of your component.
- [ ] Add the component unit test to `src/MyComponent.test.ts`
- [ ] Export the component from `src/index.ts`
- [ ] Document the component in `../storybook-vue/src/MyComponent.stories.ts`
- [ ] Add a changeset for a `minor` release.

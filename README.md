# Template

This design system is based on the architecture of the NL Design System POC
For more info about that architecture or the progress of the POC, join the `#nl-design-system-developers` Slack via [codefor.nl](https://codefor.nl)!

## About this template

This template contains all relevant linting rules used by the NL Design System repository.
It also contains the Storybook setup with two example components and two example general documentation page.
Feel free to add or modify those documentation pages and use the example components as an initial template to create your own storybook components.

## Storybook

### Run Storybook on your computer

1. Open Terminal.
2. Install homebrew by copy-pasting the following: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`. You will be prompted for your password for sudo access.
3. Install GIT by copy-pasting the following into your terminal: `$ brew install git`.
4. Install VS Code [Visual Studio](https://code.visualstudio.com/) or your own favourite code editor.
5. Clone the repository in VS Code [GitHub](https://github.com/nl-design-system/utrecht) or your own favourite code editor.
6. In a terminal go to the repository folder and run `npm install` there.
7. Check versions.
   - In the terminal, run `node -v`. The version should be at least 14.X
   - In the terminal, run `npm -v`. The version should be at least 6.X
   - If the versions are not up to date, run 'npm install' again.
8. Run storybook.
   - In the Terminal run `npm run storybook`
9. Your main browser opens automatically with your local storybook.

### Change the theme of your storybook to match your brand

In `.storybook/customTheme.js` the theme used by NL Design System can be found. By changing those properties one can style the storybook to match ones brand. Checkout [https://storybook.js.org/docs/react/configure/theming](https://storybook.js.org/docs/react/configure/theming) to learn more about all the possible configurations to brand this storybook.

### Adding UX and other documentation without a component implementation

1. In `src/demo-empty-component` an example story of a documentation first (or documentation only) component can be found.
2. Copy this folder
3. Rename to match your component
   - The folder
   - The `x.stories.mdx` to `component-name.stories.mdx`
   - The title of the `Meta` component in `component-name.stories.mdx`
4. Add the UX guidelines in`README.md`
5. Optionally add the component specific accessibility or content guidelines in `docs/accessibility-guidelines` or `docs/content-guidelines`.
6. Optionally add the Figma component in `component-name.stories.mdx` by adding part of the Figma url to the Figma component `<Figma title="Link" url="file/..." />`

### Adding design tokens

Add global tokens to `/brand.css`. Add tags to make them appear in the Storybook Design token addon. For example `@tokens Colors` and `@presenter Color`. See [https://storybook.js.org/addons/@tommyem/storybook-design-token](https://storybook.js.org/addons/@tommyem/storybook-design-token) for more details.

### Adding the component implementation to storybook

In `src/demo-link-component` an example story and web-component can be found. All steps below are represented in this `demo-link.stories.mdx` example.
To add a component implementation to storybook, we use the `<component-name>-stories.mdx` which already contains the documentation pages or create one with placeholder documentation by following step 1-3 from the `Adding UX and other documentation without a component implementation` chapter.

- Create a component template function that takes variable arguments. If an argument might contain childnodes, use the `sanatize` package to prevent unsafe content and injections. Place this `Template` function above the `Meta` component
- Declare a story for each component variation and bind the template
- Declare the possible inputs, with types and a description in the `argTypes` property of the `Meta` component in `stories.mdx`.
- Add an `Argstable` component in your `stories.mdx`
- Optionally add a different `status` to the `Meta` parameters. The options and colors can be found in `.storybook/preview.js`
- Add the code below to the `Meta` parameters to ensure a resolved code example in your story, instead of the Template function:

```javascript
parameters: {
    docs: {
      transformSource: (_src, { args }) => Template(args),
    },
    // ...
}
```

## Code of Conduct

We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community. Read [our Code of Conduct](CODE_OF_CONDUCT.md) if you haven't already.

## License

This project is free and open-source software licensed under the [European Union Public License (EUPL) v1.2](LICENSE.md).

<!-- @license CC0-1.0 -->

# Utrecht Design System

**This project is very much WORK IN PROGRESS and all components are released as _alpha_ version. Always define the exact version you want to use, and test for breaking changes before upgrading to a newer alpha release.**

Applying design elements from this project is strictly prohibited for organisations that are not part of the Municipality of Utrecht.

This project is part of a community iniative to use NL Design System components for projects that need to adhere to the Utrecht Design System. Teams from the central Municipality of Utrecht, as well as those who are contracted by them to develop websites and apps, are able to collaborate via this project.

## Getting started

Include the Design Token CSS variables:

```html
<link rel="stylesheet" type="text/css" href="https://unpkg.com/@utrecht/design-tokens/dist/index.css" />
```

Combine it with the latest Web Components from the NL Design System community, for example:

```html
<script
  src="https://unpkg.com/@utrecht/web-component-library-stencil/dist/utrecht/utrecht.esm.js"
  type="module"
></script>
```

Then you can go ahead and see the result:

```html
<utrecht-html-content class="utrecht-theme">
  <h1>Page styled with NL Design System</h1>
</utrecht-html-content>
```

### Avoid automatic upgrades to a new version with breaking changes

For all dependencies, see what the version is you use while developing and update the URL without version to include a version number, and ensure your page keeps working even when new versions are released:

For _alpha_, _beta_ and _rc_ versions:

```text
https://unpkg.com/@utrecht/design-tokens/dist/index.css
```

Above should become:

```text
https://unpkg.com/@utrecht/design-tokens@1.0.0-alpha.10/dist/index.css
```

For stable versions it would become:

```text
https://unpkg.com/@utrecht/design-tokens@^1.0.0/dist/index.css
```

## npm packages

| name                                                                                                           | version                                                                                                                                                         |
| -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@utrecht/component-library-css](https://www.npmjs.com/package/@utrecht/component-library-css)                 | [![NPM version](https://img.shields.io/npm/v/@utrecht/component-library-css.svg)](https://www.npmjs.com/package/@utrecht/component-library-css)                 |
| [@utrecht/component-library-formio](https://www.npmjs.com/package/@utrecht/component-library-formio)           | [![NPM version](https://img.shields.io/npm/v/@utrecht/component-library-formio.svg)](https://www.npmjs.com/package/@utrecht/component-library-formio)           |
| [@utrecht/components](https://www.npmjs.com/package/@utrecht/components)                                       | [![NPM version](https://img.shields.io/npm/v/@utrecht/components.svg)](https://www.npmjs.com/package/@utrecht/components)                                       |
| [@utrecht/design-tokens](https://www.npmjs.com/package/@utrecht/design-tokens)                                 | [![NPM version](https://img.shields.io/npm/v/@utrecht/design-tokens.svg)](https://www.npmjs.com/package/@utrecht/design-tokens)                                 |
| [@utrecht/icon](https://www.npmjs.com/package/@utrecht/icon)                                                   | [![NPM version](https://img.shields.io/npm/v/@utrecht/icon.svg)](https://www.npmjs.com/package/@utrecht/icon)                                                   |
| [@utrecht/web-component-library-angular](https://www.npmjs.com/package/@utrecht/web-component-library-angular) | [![NPM version](https://img.shields.io/npm/v/@utrecht/web-component-library-angular.svg)](https://www.npmjs.com/package/@utrecht/web-component-library-angular) |
| [@utrecht/web-component-library-react](https://www.npmjs.com/package/@utrecht/web-component-library-react)     | [![NPM version](https://img.shields.io/npm/v/@utrecht/web-component-library-react.svg)](https://www.npmjs.com/package/@utrecht/web-component-library-react)     |
| [@utrecht/web-component-library-stencil](https://www.npmjs.com/package/@utrecht/web-component-library-stencil) | [![NPM version](https://img.shields.io/npm/v/@utrecht/web-component-library-stencil.svg)](https://www.npmjs.com/package/@utrecht/web-component-library-stencil) |

## Contributing

### Install prerequisites

You need to have the following tools installed to run Storybook locally:

- Git
- [Node.js and npm](https://nodejs.org/en/)

Open a terminal and run the following commands to check:

- `git --version`: a relatively recent version should be installed (Git 2.28 or later)
- `node -v`: should be at least the version defined in the `engines` section of [`package.json`](./package.json)
- `npm -v`: should be at least the version defined in the `engines` section of [`package.json`](./package.json)

### Install code editor

You can use any editor you'd like, but in case you use [Visual Studio Code](https://code.visualstudio.com/) we recommend the following extensions that are useful for this project:

- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
- [MDX](https://marketplace.visualstudio.com/items?itemName=silvenon.mdx)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Svg Preview](https://marketplace.visualstudio.com/items?itemName=SimonSiefke.svg-preview)

### Developing locally

1. Open Terminal
2. Select the directory this repository should be cloned into with `cd <name-of-directory>`
3. Clone this Git repository
4. `cd utrecht`
5. `git checkout main` to switch to the main branch, if you previously worked in this repository.
6. `git pull` to get to the latest version of the main branch
7. `npm install` to download and install all the dependencies

### Run Docusaurus on your computer

1. Open Terminal
2. Ensure your current directory is `utrecht`
3. Run `npm install` to ensure the latest and greatest of all dependencies
4. Run `npm run docs`
5. The local version of docusaurus will be running on `localhost:3000/utrecht`
6. Press `Control+C` in your terminal to stop Docusaurus

Read the `standalone/docusaurus/README.md` for docusaurus details

### Run Storybook on your computer

1. Open Terminal.
2. Ensure your current directory is `utrecht`
3. Run `npm install` to ensure the latest and greatest of all dependencies
4. Run `npm run storybook` to start Storybook
5. Your main browser opens automatically with your local storybook.
6. Press `Control+C` in your terminal to stop Storybook.

### Debugging Storybook

First check the logs in the terminal if any error is displayed, if something doesn't work as expected.

Secondly check the JavaScript logs in your browsers developer tools if there are errors or warnings.

You can run the code checks with `npm run lint` to see if any code errors can be detected.

You can also check the build logs of the design tokens for errors, if you have changed Style Dictionary JSON files, by building those separately:

1. `cd proprietary/design-tokens/`
2. `npm run build`

## Code of Conduct

We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community. Read [our Code of Conduct](CODE_OF_CONDUCT.md) if you haven't already.

## License

This project is free and open-source software licensed under the [European Union Public License (EUPL) v1.2](LICENSE.md). The documentation is licensed as [Creative Commons Zero 1.0 Universal (`CC0-1.0`)](https://creativecommons.org/publicdomain/zero/1.0/legalcode).

For information about proprietary assets in this repository, please carefully read the [NOTICE file](NOTICE.md).

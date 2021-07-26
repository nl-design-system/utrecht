# Utrecht Design System

**This project is very much WORK IN PROGRESS and all components are released as _alpha_ version. Always define the exact version you want to use, and test for breaking changes before upgrading to a newer alpha release.**

Applying design elements from this project is strictly prohibited for organisations that are not part of the Municipality of Utrecht.

This project is part of a community iniative to use NL Design System components for projects that need to adhere to the Utrecht Design System. Teams from the central Municipality of Utrecht, as well as those who are contracted by them to develop websites and apps, are able to collaborate via this project.

## Getting started

Include the Design Token CSS variables:

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://unpkg.com/@nl-design-system-unstable/utrecht-design-tokens/dist/index.css"
/>
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
<utrecht-html-content>
  <h1>Page styled with NL Design System</h1>
</utrecht-html-content>
```

### Avoid automatic upgrades to a new version with breaking changes

For all dependencies, see what the version is you use while developing and update the URL without version to include a version number, and ensure your page keeps working even when new versions are released:

For _alpha_, _beta_ and _rc_ versions:

```text
https://unpkg.com/@nl-design-system-unstable/utrecht-design-tokens/dist/index.css
```

Above should become:

```text
https://unpkg.com/@nl-design-system-unstable/utrecht-design-tokens@1.0.0-alpha.37/dist/index.css
```

For stable versions it would become:

```text
https://unpkg.com/@nl-design-system-unstable/utrecht-design-tokens@^1.0.0/dist/index.css
```

## Contributing

### Run Storybook on your computer

1. Open Terminal.

## Code of Conduct

We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community. Read [our Code of Conduct](CODE_OF_CONDUCT.md) if you haven't already.

## License

This project is free and open-source software licensed under the [European Union Public License (EUPL) v1.2](LICENSE.md).

For information about proprietary assets in this repository, please carefully read the [NOTICE file](NOTICE.md).

<!-- @license CC0-1.0 -->

# Page component

Component that centers the page. The page maximizes the width of the content for large viewports, to keep the line length of texts readable and avoid large horizontal distances between related components.

Typically the contents of the page component are:

- Page Header component
- Page Content component
  - Main content
  - Complimentary content
- Page Footer component

## API

- CSS class name: `utrecht-page`
- Web component: `<utrecht-page>`
- Angular/React/Vue.js component: `UtrechtPage`

## CSS implementation

### Margin

To create some transparent space around the page, `margin-inline` CSS variables are provided. However, to automatically horizontally center the page `margin-inline: auto` needs to be used.

Achieving both goals is made possible by implementing the `margin-inline` as `padding-inline` on a transparent container element. The only downside to this approach is that margin collapsing won't work anymore, but that doesn't seem like anyone would ever need for a component that realistically is only used once per document.

### Padding

Padding is not applied directly in the page component itself, but in the child components such as Page Header, Page Content and Page Footer.

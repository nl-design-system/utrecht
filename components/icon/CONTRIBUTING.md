<!-- @license CC0-1.0 -->

# Contributing

Updating an icon SVG needs to happen in two files: the `icon.stencil.tsx` and in the `icon.svg` file.

We hope to eventually generate the `icon.stencil.tsx` files automatically from the `icon.svg`, so there will be no risk for inconsistencies between the two.

## Icon colors

Icon colors need to be able to automatically take on the color of surrounding content.

Design apps that export to SVG usually provide hardcoded color values such as [`fill="#ABCDEF`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill). Instead of this default, the colors need to use the CSS value [`currentColor`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentcolor_keyword): `fill="currentColor"`. This manual process of updating the SVG code before including it in the icon set is essential. This also applies to other color-related properties such as [`stroke`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke) et cetera.

## Icon set

Include a reference to new icons in `icon-set.json`, so they automatically appear in generated icon overviews, such as the icon dropdown in Storybook for components that have an icon.

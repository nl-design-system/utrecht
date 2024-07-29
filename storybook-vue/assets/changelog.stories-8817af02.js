import{M as i,d as a}from"./index-3fdbcd58.js";import{j as n}from"./jsx-runtime-5e461f5e.js";import{u as s}from"./index-e759aef0.js";import"./iframe-44396ac7.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-11d98b33.js";import"./index-4fb43917.js";import"./index-356e4a49.js";const c=`# @utrecht/component-library-vue

## 1.2.0

### Minor Changes

- 4037f4c: Add two new design tokens to "Badge counter":

  - \`utrecht.badge-counter.min-block-size\`
  - \`utrecht.badge-counter.min-inline-size\`: the primary token to configure the size.

  The following design token is now deprecated. Reason for deprecation: it does not follow naming conventions, to use existing CSS property names — "\`min-size\`" is a made-up property.

  - \`utrecht.badge-counter.min-size\`

- 5299695: Button now support two new design tokens for each appearance: \`font-size\` and a matching \`line-height\`. These are optional, by default the button still uses \`utrecht.button.font-size\` and \`utrecht.button.line-height\`.

  These are the 6 new design tokens:

  - \`utrecht.button.primary-action.font-size\`
  - \`utrecht.button.primary-action.line-height\`
  - \`utrecht.button.secondary-action.font-size\`
  - \`utrecht.button.secondary-action.line-height\`
  - \`utrecht.button.subtle.font-size\`
  - \`utrecht.button.subtle.line-height\`

## 1.1.1

### Patch Changes

- 62f1157: Fix styling of list items of unordered lists in Vue.

## 1.1.0

### Minor Changes

- f9c23c6: Add \`utrecht.accordion.button.icon.gap\` design token.

## 1.0.1

### Patch Changes

- 0e434e0a19: fix rendering glitch in Firefox when hovering over a button

## 1.0.0

### Patch Changes

- c7cae76a0d: allow word wrap for URL data, so it is fully readable in print and on screen
- 28a3ef848a: Support rendering of \`<select>\` element with multiple attribute.
`;function r(e){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Vue.js Component/Changelog"}),`
`,n.jsx(a,{children:c})]})}function u(e={}){const{wrapper:o}=Object.assign({},s(),e.components);return o?n.jsx(o,{...e,children:n.jsx(r,{...e})}):r()}const h=()=>{throw new Error("Docs-only story")};h.parameters={docsOnly:!0};const t={title:"Vue.js Component/Changelog",tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:u};const y=["__page"];export{y as __namedExportsOrder,h as __page,t as default};

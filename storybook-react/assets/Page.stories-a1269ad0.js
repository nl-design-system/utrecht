import{j as o}from"./jsx-runtime-c9381026.js";import{i as m}from"./index-92b23782.js";import{t as g,d}from"./util-7a7e14bd.js";import{Default as e}from"./PageContent.stories-32a1a021.js";import{Default as a}from"./PageFooter.stories-1e89e926.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./slicedToArray-55743b32.js";import"./defineProperty-e26b7022.js";import"./clsx-aa410b3d.js";import"./objectDestructuringEmpty-f3aad883.js";import"./extends-4c19d496.js";import"./index-9d475cdf.js";const h=`<!-- @license CC0-1.0 -->

# Page component

Component that centers the page. The page maximizes the width of the content for large viewports, to keep the line length of texts readable and avoid large horizontal distances between related components.

Typically the contents of the page component are:

- Page Header component
- Page Content component
  - Main content
  - Complimentary content
- Page Footer component

## API

- CSS class name: \`utrecht-page\`
- Web component: \`<utrecht-page>\`
- Angular/React/Vue.js component: \`UtrechtPage\`

## CSS implementation

### Margin

To create some transparent space around the page, \`margin-inline\` CSS variables are provided. However, to automatically horizontally center the page \`margin-inline: auto\` needs to be used.

Achieving both goals is made possible by implementing the \`margin-inline\` as \`padding-inline\` on a transparent container element. The only downside to this approach is that margin collapsing won't work anymore, but that doesn't seem like anyone would ever need for a component that realistically is only used once per document.

### Padding

Padding is not applied directly in the page component itself, but in the child components such as Page Header, Page Content and Page Footer.

## Relevante WCAG regels

- [WCAG eis 2.4.1](https://www.w3.org/TR/WCAG21/#bypass-blocks): gebruik de skip link zodat gebruikers direct naar de _main page content_ kunnen gaan.
- [WCAG eis 2.4.2](https://www.w3.org/TR/WCAG21/#page-titled): de pagina moet een duidelijke titel hebben
`,u={page:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"margin-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"max-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}},y={utrecht:u},f={title:"React Component/Page",id:"react-page",component:m,subcomponents:{PageContent:e,PageFooter:a,PageHeader:e},args:{children:[o(e,{...e.args}),o(e,{...e.args}),o(a,{...a.args})]},parameters:{tokensPrefix:"utrecht-page",tokens:g,tokensDefinition:y,docs:{description:{component:h}}}},n={},t=d(f);var s,r,i;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(i=(r=n.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var p,c,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"designTokenStory(meta)",...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const z=["Default","DesignTokens"];export{n as Default,t as DesignTokens,z as __namedExportsOrder,f as default};
//# sourceMappingURL=Page.stories-a1269ad0.js.map

import{E as n,z as i,O as r,t as s,G as l}from"./component-library-vue-76e39afc.js";import{c as p}from"./util-5a9c4972.js";import"./vue.esm-bundler-4be3a786.js";import"./chunk-HLWAVYOI-e6532f6a.js";import"./iframe-a244a3bd.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-11d98b33.js";import"./index-4fb43917.js";import"./index-356e4a49.js";const c=`<!-- @license CC0-1.0 -->

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
`,m={page:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"margin-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"max-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}},d={utrecht:m},g={id:"vue-page",title:"Vue.js Component/Page",component:n,tags:["autodocs"],argTypes:{},args:{},render:()=>({components:{Page:n,PageHeader:i,PageContent:r,PageFooter:s,Paragraph:l},template:'<Page v-bind="$props"><slot></slot></Page>'}),parameters:{status:{type:"ALPHA"},tokens:d,tokenPrefix:"utrecht-page",docs:{component:{description:c}}}},e=p(g,{name:"Page",args:{slot:`<PageHeader>Page header</PageHeader>
<PageContent>
  <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
laborum.</Paragraph>
</PageContent>
<PageFooter>Page footer</PageFooter>`}});var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`createStory(meta, {
  name: 'Page',
  args: {
    slot: \`<PageHeader>Page header</PageHeader>
<PageContent>
  <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
laborum.</Paragraph>
</PageContent>
<PageFooter>Page footer</PageFooter>\`
  }
})`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const k=["Default"];export{e as Default,k as __namedExportsOrder,g as default};

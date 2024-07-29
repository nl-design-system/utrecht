import{z as n,G as o}from"./component-library-vue-a6ae4a7f.js";import{c as s}from"./util-035aac30.js";import"./vue.esm-bundler-4be3a786.js";import"./jsx-runtime-251c7da4.js";import"./index-ce8e0415.js";import"./iframe-0fd89d12.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-11d98b33.js";import"./index-4fb43917.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-2b78da68.js";const i=`<!-- @license CC0-1.0 -->

# Page Header

De page header bevat vaak de volgende onderdelen:

- Logo (met link naar de homepage)
- Navigatie
- Zoekveld
- Kruimelpad-navigatie
- Eventueel een melding met een waarschuwing, bijvoorbeeld over een actuele storing.
- Cookie banner.

Het logo maakt duidelijk wie verantwoordelijk is voor de website en geeft daarmee belangrijke context voor de rest van de pagina.

## HTML

Gebruik het HTML \`<header>\` element, zodat het automatisch een \`banner\` landmark krijgt.

## Relevante WCAG eisen

- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): plaats de header in een \`banner\` landmark, door het \`<header>\` element te gebruiken
- [WCAG eis 1.3.2](https://www.w3.org/TR/WCAG21/#meaningful-sequence): plaats de header aan het begin van pagina, maar na de _skip links_. Zo is het gelijk duidelijk wie verantwoordelijk is voor de pagina die er op volgt.
`,d={"page-header":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"padding-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}},p={utrecht:d},g={id:"vue-page-header",title:"Vue.js Component/Page header",component:n,tags:["autodocs"],argTypes:{},args:{},render:()=>({components:{PageHeader:n,Paragraph:o},template:'<PageHeader v-bind="$props"><slot></slot></PageHeader>'}),parameters:{status:{type:"ALPHA"},tokens:p,tokenPrefix:"utrecht-page-header",docs:{component:{description:i}}}},e=s(g,{name:"Page header",args:{template:"Logo en navigatie kunnen hier"}});var t,a,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`createStory(meta, {
  name: 'Page header',
  args: {
    template: \`Logo en navigatie kunnen hier\`
  }
})`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const f=["Default"];export{e as Default,f as __namedExportsOrder,g as default};

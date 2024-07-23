import{W as n}from"./component-library-vue-a6ae4a7f.js";import{c as a}from"./util-954bc4b8.js";import"./vue.esm-bundler-4be3a786.js";import"./jsx-runtime-1e7567cb.js";import"./index-14a5d57e.js";import"./iframe-2a6f3db4.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-11d98b33.js";import"./index-4fb43917.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-17c96de7.js";const i=`<!-- @license CC0-1.0 -->

# Separator

Scheidingslijnen worden gebruikt om de scanbaarheid van een lange contentpagina te vergroten.

## Terminologie

- **separator**, van de ARIA \`role="separator"\`. "hr" van \`<hr>\` uit HTML is te onduidelijk buiten de context van code, "horizontal rule" te specifieke beschrijving van de originele rendering in HTML. De "separator" zou er ook heel anders uit kunnen zien dan een "rule" (lijn), en bovendien kan er voor andere tekstrichtingen wel eens een verticale variant komen.

"Divider" is ook een vaak gehoorde term hiervoor, misschien moet deze voor vindbaarheid ook genoemd worden in de documentatie.

## Class names

- \`utrecht-separator\`

## Variant

- horizontaal

## Design tokens

We hebben de volgende CSS variabelen:

- \`utrecht-separator-color\`
- \`utrecht-separator-width\` - "width" is misschien verwarrend, voor de horizontale variant is "height" logischer. Wat zou een schrijf-richting-agnostische term hiervoor kunnen zijn?
- \`utrecht-separator-margin-block-start\`
- \`utrecht-separator-margin-block-end\`

## Visueel design Utrecht

8px dikke grijze lijn.
`,p={separator:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"block-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"sizing"},"margin-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!1},type:"spacing"},"margin-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!1},type:"spacing"}}},c={utrecht:p},m={id:"vue-separator",title:"Vue.js Component/Separator",component:n,tags:["autodocs"],argTypes:{},render:s=>({setup(){return{args:s}},components:{Separator:n},template:"<Separator />"}),parameters:{status:{type:"ALPHA"},tokens:c,tokenPrefix:"utrecht-separator",docs:{description:{component:i}}}},e=a(m,{name:"Separator",component:n,args:{}});var r,t,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`createStory(meta, {
  name: 'Separator',
  component: Separator,
  args: {}
})`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const z=["Default"];export{e as Default,z as __namedExportsOrder,m as default};

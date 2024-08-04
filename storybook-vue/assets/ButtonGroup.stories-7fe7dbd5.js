import{u as n,_ as s}from"./component-library-vue-a6ae4a7f.js";import{c as a}from"./util-7b334b8b.js";import"./vue.esm-bundler-4be3a786.js";import"./jsx-runtime-211e78b5.js";import"./index-dbaf6048.js";import"./iframe-76de4370.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-11d98b33.js";import"./index-4fb43917.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-c23cdd02.js";const i=`<!-- @license CC0-1.0 -->

# Button group

De _button group_ is een container voor een aantal buttons, of voor een losstaande button.

## Terminologie

- **button**: van het \`<button>\` HTML element, \`role="button"\` in ARIA.
- **group**: van \`role="group"\` in ARIA.

## Verticale variant

Voor smalle schermen bij plaatsing in smalle panelen (zoals een sidebar) is er een variant waar buttons onder elkaar staan, in plaats van naast elkaar. Gebruik deze variant niet wanneer er voldoende ruimte is voor de standaard variant. Je kunt bijvoorbeeld CSS media queries gebruiken om deze variant toe te passen voor kleine schermen.
`,p={"button-group":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"column-gap":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},comment:"'column-gap', for lack of a better existing property"},"margin-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"row-gap":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},comment:"'row-gap', for lack of a better existing property"}}},u={utrecht:p},c={id:"vue-button-group",title:"Vue.js Component/Button group",component:n,tags:["autodocs"],argTypes:{},args:{},render:()=>({components:{ButtonGroup:n,Button:s},template:'<ButtonGroup v-bind="$props"><slot></slot></ButtonGroup>'}),parameters:{status:{type:"ALPHA"},tokens:u,tokenPrefix:"utrecht-button-group",docs:{component:{description:i}}}},t=a(c,{name:"Button group",args:{slot:`<Button appearance="primary-action-button">Save and continue</Button>
            <Button appearance="secondary-action-button">Back</Button>`}});var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`createStory(meta, {
  name: 'Button group',
  args: {
    slot: \`<Button appearance="primary-action-button">Save and continue</Button>
            <Button appearance="secondary-action-button">Back</Button>\`
  }
})`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const $=["Default"];export{t as Default,$ as __namedExportsOrder,c as default};

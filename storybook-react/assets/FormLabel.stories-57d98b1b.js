import{c as D}from"./index-c9eb9ea9.js";import{t as L,d as $}from"./util-4b929d67.js";import"./slicedToArray-b6353f72.js";import"./clsx.m-c1fc4751.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-29545a09.js";import"./objectDestructuringEmpty-24e23e90.js";import"./extends-98964cd2.js";import"./index-8d47fad6.js";const v=`<!-- @license CC0-1.0 -->

# Form label

## Design

Het label moet aanklikbaar zijn om de _form input_ te activeren. Gebruik \`display: inline\` voor het label, zodat de tekst aanklikbaar is. Je wilt dat de witruimte naast de tekst niet aanklikbaar is, omdat niet duidelijk is welke actie hoort bij de witruimte.

Als je het label wilt gebruiken als onderdeel van \`display: grid\` of \`display: flex\`, gebruik dan een extra _\`<div>\` wrapper element_ om het label heen, om te voorkomen dat de label heel groot wordt.

## Terminologie

- **label**: net als \`<label>\` in HTML

## Class names

- \`utrecht-form-label\`

## Design tokens

- Form label
  - \`utrecht-form-label-font-weight\`
  - \`utrecht-form-label-font-size\`

## Relevante WCAG regels

- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): de tekst van het label moet duidelijk zijn
`,S={"form-label":{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},checkbox:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}},checked:{"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-label.font-weight"]}}},disabled:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-label.color"]}}},radio:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-label.checkbox.color","utrecht.form-label.color"]}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-label.checkbox.font-weight","utrecht.form-label.font-weight"]}}}}},T={utrecht:S},R={title:"React Component/Form Label",id:"react-form-label",component:D,argTypes:{type:{type:{name:"string",required:!1},options:[void 0,"checkbox","radio"]},checked:{name:"checked",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}}},parameters:{tokensPrefix:"utrecht-form-label",tokens:L,tokensDefinition:T,docs:{description:{component:v}}},args:{children:"Username"}},e={},r={args:{children:"Form Label Checked",type:"checkbox"}},s={args:{children:"Form Label Disabled",type:"radio"}},t={args:{children:"Form Label Checkbox",type:"checkbox"}},n={args:{children:"Form Label Radio",type:"radio"}},o=$(R);var a,l,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var c,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Form Label Checked',
    type: 'checkbox'
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,b,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Form Label Disabled',
    type: 'radio'
  }
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var u,g,y;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Form Label Checkbox',
    type: 'checkbox'
  }
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var k,f,x;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: 'Form Label Radio',
    type: 'radio'
  }
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var w,C,F;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:"designTokenStory(meta)",...(F=(C=o.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const J=["Default","Checked","Disabled","Checkbox","Radio","DesignTokens"];export{t as Checkbox,r as Checked,e as Default,o as DesignTokens,s as Disabled,n as Radio,J as __namedExportsOrder,R as default};
//# sourceMappingURL=FormLabel.stories-57d98b1b.js.map

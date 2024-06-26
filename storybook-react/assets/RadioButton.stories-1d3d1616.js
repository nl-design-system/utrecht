import{Z as E,d as P,c as W}from"./index-45ce2f4e.js";import{t as B,d as Z}from"./util-4b48fbee.js";import"./slicedToArray-55743b32.js";import"./defineProperty-e26b7022.js";import"./clsx-aa410b3d.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-c9381026.js";import"./objectDestructuringEmpty-f3aad883.js";import"./extends-4c19d496.js";import"./index-9d475cdf.js";const G=`<!-- @license CC0-1.0 -->

# Radio button

## Design

Zorg dat de radio button herkenbaar is, doordat die lijkt op radio buttons op andere websites. Maak niet heel bijzonder ontwerp dat onduidelijk is voor veel gebruikers.

- Een radio button is rond, niet een vierkant of een ruit.
- Een radio button heeft een ronde cirkel als _checked_ icoon.
- Gebruik voor de radio button geen checkmark icoon (een vinkje), dat zou verwarrend zijn. Door een checkmark lijkt het alsof je meerdere opties kunt selecteren, terwijl dat niet zo is.

## Terminologie

- **radio button**: "Radio button" heeft [een Wikipedia-lemma](https://en.wikipedia.org/wiki/Radio_button), [WAI-ARIA Authoring Practices 1.2](https://www.w3.org/TR/wai-aria-practices-1.2/#radiobutton) noemt het ook "radio button" en "radio group".
- **checked**: [WAI-ARIA Authoring Practices 1.2](https://www.w3.org/TR/wai-aria-practices-1.2/#radiobutton) en HTML noemen de staat van de radio button "checked", CSS heeft de \`:checked\` pseudo-class.

## Class names

- \`.utrecht-radio-button\`
`,O={"radio-button":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<percentage>",inherits:!0}}},"margin-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},icon:{size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},active:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.radio-button.border-color"]}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.radio-button.border-width"]}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.radio-button.background-color"]}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.radio-button.color"]}}},checked:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},active:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},hover:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.radio-button.border-color"]}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.radio-button.border-width"]}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.radio-button.background-color"]}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.radio-button.color"]}}},focus:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.radio-button.border-color"]}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.radio-button.border-width"]}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.radio-button.background-color"]}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.radio-button.color"]}}}},hover:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.radio-button.border-color"]}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.radio-button.border-width"]}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.radio-button.background-color"]}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.radio-button.color"]}}},focus:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.radio-button.border-color"]}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.radio-button.border-width"]}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.radio-button.background-color"]}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.radio-button.color"]}}},disabled:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.radio-button.border-color"]}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.radio-button.border-width"]}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.radio-button.background-color"]}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.radio-button.color"]}}},invalid:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.radio-button.border-color"]}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.radio-button.border-width"]}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.radio-button.color"]}}}}},J={utrecht:O},K={title:"React Component/Radio Button",id:"react-radio-button",component:E,subcomponents:{FormLabel:P,FormField:W},parameters:{tokensPrefix:"utrecht-radio-button",tokens:B,tokensDefinition:J,docs:{description:{component:G}}},argTypes:{checked:{name:"checked",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1},category:"HTML attribute"}},disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1},category:"HTML attribute"}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},required:{name:"required",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1},category:"HTML attribute"}},value:{name:"value",type:{name:"string",required:!1},table:{category:"HTML attribute"}}}},s={},r={parameters:{pseudo:{hover:!0}}},t={parameters:{pseudo:{focus:!0}}},n={parameters:{pseudo:{focusVisible:!0}}},e={args:{checked:!0,value:"checked"}};e.args={checked:!0,value:"checked"};const o={args:{checked:!0,disabled:!0}},i={args:{disabled:!0}},a={args:{invalid:!0}},l={args:{required:!0}},c=Z(K);var d,u,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var y,m,b;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(b=(m=r.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var g,h,k;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focus: true
    }
  }
}`,...(k=(h=t.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var x,f,$;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focusVisible: true
    }
  }
}`,...($=(f=n.parameters)==null?void 0:f.docs)==null?void 0:$.source}}};var w,v,S;e.parameters={...e.parameters,docs:{...(w=e.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    checked: true,
    value: 'checked'
  }
}`,...(S=(v=e.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var T,R,q;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true
  }
}`,...(q=(R=o.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var D,A,C;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(C=(A=i.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var j,V,F;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...(F=(V=a.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var H,z,I;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...(I=(z=l.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var L,M,_;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:"designTokenStory(meta)",...(_=(M=c.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};const ie=["Default","Hover","Focus","FocusVisible","Checked","CheckedAndDisabled","Disabled","Invalid","Required","DesignTokens"];export{e as Checked,o as CheckedAndDisabled,s as Default,c as DesignTokens,i as Disabled,t as Focus,n as FocusVisible,r as Hover,a as Invalid,l as Required,ie as __namedExportsOrder,K as default};
//# sourceMappingURL=RadioButton.stories-1d3d1616.js.map

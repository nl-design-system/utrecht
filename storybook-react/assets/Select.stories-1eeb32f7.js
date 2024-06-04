import{j as u}from"./jsx-runtime-29545a09.js";import{R as m,V as J}from"./index-5f53cfbe.js";import{t as K,d as N}from"./util-72e27248.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./slicedToArray-b6353f72.js";import"./clsx.m-c1fc4751.js";import"./objectDestructuringEmpty-24e23e90.js";import"./extends-98964cd2.js";import"./index-8d47fad6.js";const Q=`<!-- @license CC0-1.0 -->

# Form Select component

## Terminology

- **select**: like the \`<select>\` element in HTML.

## Class names

- \`.utrecht-select\`
- \`.utrecht-select--disabled\`
- \`.utrecht-select--focus\`
- \`.utrecht-select--html-input\`
- \`.utrecht-select--invalid\`
- \`.utrecht-select--read-only\`
- \`.utrecht-select--required\`
`,U={select:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.background-color"]}},"border-block-end-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.border-block-end-width"]}},"border-bottom-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.deprecated":!0}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.border-color"]}},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length-percentage>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.border-radius"]}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.border-width"]}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.color"]}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.font-family"]}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.font-size"]}},"min-block-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.pointertarget.min-size"]}},"max-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.max-inline-size"]}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.padding-block-end"]}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.padding-block-start"]}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.padding-inline-end"]}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.padding-inline-start"]}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.disabled.background-color","utrecht.select.background-color","utrecht.form-control.background-color"]}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.disabled.border-color","utrecht.select.border-color","utrecht.form-control.border-color"]}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.disabled.color","utrecht.select.color","utrecht.form-control.color"]}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.focus.background-color","utrecht.select.background-color","utrecht.form-control.background-color"]}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.focus.border-color","utrecht.select.border-color","utrecht.form-control.border-color"]}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.focus.color","utrecht.select.color","utrecht.form-control.color"]}}},invalid:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.invalid.background-color","utrecht.select.background-color","utrecht.form-control.background-color"]}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.invalid.border-color","utrecht.select.border-color","utrecht.form-control.border-color"]}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.invalid.border-width","utrecht.select.border-width","utrecht.form-control.border-width"]}}}}},W={utrecht:U},e=[{value:"",label:"Select an option",disabled:!0},{value:"1",label:"Option #1"},{value:"2",label:"Option #2"},{value:"3",label:"Option #3"},{value:"4",label:"Option #4"}],X={title:"React Component/Select",id:"react-select",component:m,parameters:{tokensPrefix:"utrecht-select",tokens:K,tokensDefinition:W,docs:{description:{component:Q}}},argTypes:{disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{category:"HTML attribute",defaultValue:{summary:!1}}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},required:{name:"required",type:{name:"boolean",required:!1},table:{category:"HTML attribute",defaultValue:{summary:!1}}},noscript:{name:"noscript",type:{name:"boolean",required:!1},table:{category:"HTML attribute",defaultValue:{summary:!1}}},value:{name:"value",type:{name:"string"},table:{category:"HTML attribute",defaultValue:{summary:""}}}},render:({options:d,...E})=>u(m,{...E,children:d&&d.length>0&&d.map(({label:P,value:A,disabled:B},G)=>u(J,{value:A,disabled:B,children:P},G))})},r={args:{options:e}},t={args:{disabled:!0,options:e}},s={args:{required:!0,options:e}},n={args:{required:!0,noscript:!0,options:e}},o={args:{invalid:!0,options:e}},l={args:{options:e},parameters:{pseudo:{focus:!0}}},c={args:{options:e},parameters:{pseudo:{focusVisible:!0,focus:!0}}},a={args:{options:e},parameters:{pseudo:{hover:!0}}},i=N(X);var p,g,y;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    options
  }
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,h,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    disabled: true,
    options
  }
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,k,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    required: true,
    options
  }
}`,...(v=(k=s.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var $,S,q;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    required: true,
    noscript: true,
    options
  }
}`,...(q=(S=n.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var T,V,w;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    invalid: true,
    options
  }
}`,...(w=(V=o.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var R,D,H;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    options
  },
  parameters: {
    pseudo: {
      focus: true
    }
  }
}`,...(H=(D=l.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var z,O,F;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    options
  },
  parameters: {
    pseudo: {
      focusVisible: true,
      focus: true
    }
  }
}`,...(F=(O=c.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var L,M,C;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    options
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(C=(M=a.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var j,I,_;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:"designTokenStory(meta)",...(_=(I=i.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};const ae=["Default","Disabled","Required","RequiredServerSideRendering","Invalid","Focus","FocusVisible","Hover","DesignTokens"];export{r as Default,i as DesignTokens,t as Disabled,l as Focus,c as FocusVisible,a as Hover,o as Invalid,s as Required,n as RequiredServerSideRendering,ae as __namedExportsOrder,X as default};
//# sourceMappingURL=Select.stories-1eeb32f7.js.map

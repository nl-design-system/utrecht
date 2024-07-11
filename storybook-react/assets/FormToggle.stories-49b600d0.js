import{ag as O}from"./index-71178cda.js";import{t as P,d as j}from"./util-7a7e14bd.js";import"./slicedToArray-55743b32.js";import"./defineProperty-e26b7022.js";import"./clsx-aa410b3d.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-c9381026.js";import"./objectDestructuringEmpty-f3aad883.js";import"./extends-4c19d496.js";import"./index-9d475cdf.js";const B=`<!-- @license CC0-1.0 -->

# Form Toggle

## Anatomy

- **track**: genoemd naar [\`::-moz-range-track\`](https://developer.mozilla.org/en-US/docs/Web/CSS/::-moz-range-track)
- **thumb**: genoemd naar [\`::-moz-range-thumb\`](https://developer.mozilla.org/en-US/docs/Web/CSS/::-moz-range-thumb) en \`::-webkit-slider-thumb\`.
`,G={"form-toggle":{"accent-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},track:{"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}},thumb:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"margin-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"min-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},disabled:{"box-shadow":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}},checked:{"accent-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},focus:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-style":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}}},J={utrecht:G},K={title:"React Component/Form toggle",id:"react-form-toggle",component:O,parameters:{tokensPrefix:"utrecht-form-toggle",tokens:P,tokensDefinition:J,docs:{description:{component:B}}},argTypes:{checked:{name:"checked",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},name:{name:"name",type:{name:"string",required:!1},table:{defaultValue:{summary:""}}},required:{name:"required",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},value:{name:"value",type:{name:"string",required:!1}}}},e={args:{id:"d26299c0-d61d-460b-9278-4adab8440a28"}},s={args:{checked:!0,id:"20e01936-911e-4114-8ecb-28e0ead124df"}},r={args:{checked:!0,disabled:!0,id:"16e6432c-0617-4d4b-8137-66bf02ebc91c"}},n={args:{disabled:!0,id:"7f57a350-5885-4566-8eaa-4012d8dadfda"}},a={args:{id:"074a441b-95a1-43cd-b5ec-67ad2145b4b0",invalid:!0}},t={args:{id:"63f42fd0-0add-4fe9-9a30-46e4dd3c028a",required:!0}},o={args:{id:"1bccae3f-3444-4f6d-a266-ba81a2d76959"},parameters:{pseudo:{hover:!0}}},d={args:{id:"8082bd47-a99e-4f34-9898-d718e17b20f5"},parameters:{pseudo:{focus:!0}}},i={args:{id:"de352dc4-7a42-4314-941d-55005f948561"},parameters:{pseudo:{focusVisible:!0,focus:!0}}},c=j(K);var l,m,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    id: 'd26299c0-d61d-460b-9278-4adab8440a28'
  }
}`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,g,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    checked: true,
    id: '20e01936-911e-4114-8ecb-28e0ead124df'
  }
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var y,f,h;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true,
    id: '16e6432c-0617-4d4b-8137-66bf02ebc91c'
  }
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,k,S;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    disabled: true,
    id: '7f57a350-5885-4566-8eaa-4012d8dadfda'
  }
}`,...(S=(k=n.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var $,v,q;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    id: '074a441b-95a1-43cd-b5ec-67ad2145b4b0',
    invalid: true
  }
}`,...(q=(v=a.parameters)==null?void 0:v.docs)==null?void 0:q.source}}};var C,D,V;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    id: '63f42fd0-0add-4fe9-9a30-46e4dd3c028a',
    required: true
  }
}`,...(V=(D=t.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var z,F,T;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    id: '1bccae3f-3444-4f6d-a266-ba81a2d76959'
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(T=(F=o.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var w,A,R;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    id: '8082bd47-a99e-4f34-9898-d718e17b20f5'
  },
  parameters: {
    pseudo: {
      focus: true
    }
  }
}`,...(R=(A=d.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var H,I,U;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    id: 'de352dc4-7a42-4314-941d-55005f948561'
  },
  parameters: {
    pseudo: {
      focusVisible: true,
      focus: true
    }
  }
}`,...(U=(I=i.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var W,_,E;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:"designTokenStory(meta)",...(E=(_=c.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const ae=["Default","Checked","CheckedAndDisabled","Disabled","Invalid","Required","Hover","Focus","FocusVisible","DesignTokens"];export{s as Checked,r as CheckedAndDisabled,e as Default,c as DesignTokens,n as Disabled,d as Focus,i as FocusVisible,o as Hover,a as Invalid,t as Required,ae as __namedExportsOrder,K as default};
//# sourceMappingURL=FormToggle.stories-49b600d0.js.map

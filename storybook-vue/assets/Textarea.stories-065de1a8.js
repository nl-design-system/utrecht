import{a as O}from"./chunk-WFFRPTHA-a68c42c5.js";import{a4 as m}from"./component-library-vue-888268d8.js";import{c as e}from"./util-2fda60d3.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";import"./vue.esm-bundler-4be3a786.js";import"./chunk-HLWAVYOI-3c63ed15.js";import"./iframe-07a0cc69.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-11d98b33.js";import"./index-4fb43917.js";const W='<!-- @license CC0-1.0 -->\n\n# Textarea\n\n## Terminologie\n\n- **textarea**: van het `<textarea>` element in HTML.\n\n## HTML\n\nGebruik in de meeste gevallen `dir="auto"` om tekstinvoer mogelijk te maken in een taal naar keuze.\n\nIn sommige gevallen gebruik je `dir="ltr"`, bijvoorbeeld voor:\n\n- code van programmeertalen\n- lijst met URLs\n- lijst met e-mailadressen\n- lijst met telefoonnummers\n\n## Class names\n\n- `.utrecht-textarea`\n- `.utrecht-textarea--invalid`\n- `.utrecht-textarea--disabled`\n- `.utrecht-textarea--read-only`\n\n## Design tokens\n\n- Textarea:\n  - `--utrecht-textarea-border-bottom-width`\n  - `--utrecht-textarea-border-color`\n  - `--utrecht-textarea-border-radius`\n  - `--utrecht-textarea-border-width`\n  - `--utrecht-textarea-color`\n  - `--utrecht-textarea-font-family`\n  - `--utrecht-textarea-font-size`\n  - `--utrecht-textarea-max-inline-size`\n  - `--utrecht-textarea-padding-block-end`\n  - `--utrecht-textarea-padding-block-start`\n  - `--utrecht-textarea-padding-inline-end`\n  - `--utrecht-textarea-padding-inline-start`\n  - Modifier: `disabled`\n    - `--utrecht-textarea-disabled-border-color`\n    - `--utrecht-textarea-disabled-color`\n  - Modifier: `invalid`\n    - `--utrecht-textarea-invalid-border-color`\n    - `--utrecht-textarea-invalid-border-width`\n  - Modifier: `read-only`:\n    - `--utrecht-textarea-read-only-border-color`\n    - `--utrecht-textarea-read-only-color`\n\n## Privacy\n\nGebruik `spellcheck="false"` voor velden die gevoelige informatie kunnen bevatten, zoals berichten van klokkenluiders, over _responsible disclosure_ van beveiligsproblemen, berichten met medische gegevens, etcetera. Sommige _browser extensions_ voor spellingcontrole sturen deze informatie naar externe servers.\n',A={textarea:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.background-color"]},type:"color"},"border-block-end-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.border-block-end-width"]},type:"borderWidth"},"border-bottom-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.deprecated":!0},type:"borderWidth"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.border-color"]},type:"color"},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length-percentage>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.border-radius"]},type:"borderRadius"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.border-width"]},type:"borderWidth"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.color"]},type:"color"},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.font-family"]},type:"fontFamilies"},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.font-size"]},type:"fontSizes"},"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.line-height"]},type:"lineHeights"},"max-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.max-inline-size"]},type:"sizing"},"min-block-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.pointer-target.min-size"]},type:"sizing"},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.padding-block-end"]},type:"spacing"},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.padding-block-start"]},type:"spacing"},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.padding-inline-end"]},type:"spacing"},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.padding-inline-start"]},type:"spacing"},placeholder:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.textarea.color","utrecht.form-control.color"]},type:"color"}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.disabled.background-color","utrecht.textarea.background-color","utrecht.form-control.background-color"]},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.disabled.border-color","utrecht.textarea.border-color","utrecht.form-control.border-color"]},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.disabled.color","utrecht.textarea.color","utrecht.form-control.color"]},type:"color"}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.focus.background-color","utrecht.textarea.background-color","utrecht.form-control.background-color"]},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.focus.border-color","utrecht.textarea.border-color","utrecht.form-control.border-color"]},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.focus.color","utrecht.textarea.color","utrecht.form-control.color"]},type:"color"}},invalid:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.invalid.background-color","utrecht.textarea.background-color","utrecht.form-control.background-color"]},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.invalid.border-color","utrecht.textarea.border-color","utrecht.form-control.border-color"]},type:"color"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.invalid.border-width","utrecht.textarea.border-width","utrecht.form-control.border-width"]},type:"borderWidth"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.invalid.color","utrecht.textarea.color","utrecht.form-control.color"]},type:"color"}},"read-only":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.read-only.background-color","utrecht.textarea.background-color","utrecht.form-control.background-color"]},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.read-only.border-color","utrecht.textarea.border-color","utrecht.form-control.border-color"]},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.read-only.color","utrecht.textarea.color","utrecht.form-control.color"]},type:"color"}}}},E={utrecht:A},r={id:"vue-textarea",title:"Vue.js Component/Textarea",component:m,tags:["autodocs"],argTypes:{disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},required:{name:"required",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},readonly:{name:"readonly",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},modelValue:{name:"modelValue",type:{name:"string",required:!1},table:{defaultValue:{summary:"The Quick Brown Fox Jumps Over The Lazy Dog"}}},rows:{name:"rows",type:{name:"number",required:!1}},cols:{name:"cols",type:{name:"number",required:!1}}},args:{},render:()=>({components:{Textarea:m},template:'<Textarea v-bind="$props" @update:modelValue="updateModelValue"><slots></slots></Textarea>',methods:{updateModelValue:O("updateModelValue")}}),parameters:{status:{type:"ALPHA"},tokens:E,tokenPrefix:"utrecht-textarea",docs:{description:{component:W}}}},n="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",t=e(r,{name:"Textarea",args:{modelValue:n,name:"default-textarea",id:"default-textarea"}}),o=e(r,{name:"Placeholder",args:{placeholder:"Type your message here...",name:"with-placeholder-textarea",id:"with-placeholder-textarea"}}),a=e(r,{name:"Disabled",args:{modelValue:n,name:"default-textarea",id:"default-textarea",disabled:!0}}),s=e(r,{name:"Invalid",args:{modelValue:n,name:"invalid-textarea",id:"invalid-textarea",invalid:!0}}),l=e(r,{name:"Read-only",args:{modelValue:n,name:"readonly-textarea",id:"readonly-textarea",readonly:!0}}),i=e(r,{name:"Required",args:{name:"required-textarea",id:"required-textarea",required:!0,modelValue:n}}),c=e(r,{name:"Hover",args:{...t.args},parameters:{pseudo:{hover:!0}}}),d=e(r,{name:"Focus",args:{...t.args},parameters:{pseudo:{focus:!0}}}),u=e(r,{name:"Focus-visible",args:{...t.args},parameters:{pseudo:{focus:!0,focusVisible:!0}}});var p,y,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`createStory(meta, {
  name: 'Textarea',
  args: {
    modelValue: loremIpsum,
    name: 'default-textarea',
    id: 'default-textarea'
  }
})`,...(h=(y=t.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var g,b,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`createStory(meta, {
  name: 'Placeholder',
  args: {
    placeholder: 'Type your message here...',
    name: 'with-placeholder-textarea',
    id: 'with-placeholder-textarea'
  }
})`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var f,k,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`createStory(meta, {
  name: 'Disabled',
  args: {
    modelValue: loremIpsum,
    name: 'default-textarea',
    id: 'default-textarea',
    disabled: true
  }
})`,...(v=(k=a.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var $,V,q;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`createStory(meta, {
  name: 'Invalid',
  args: {
    modelValue: loremIpsum,
    name: 'invalid-textarea',
    id: 'invalid-textarea',
    invalid: true
  }
})`,...(q=(V=s.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var S,w,T;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`createStory(meta, {
  name: 'Read-only',
  args: {
    modelValue: loremIpsum,
    name: 'readonly-textarea',
    id: 'readonly-textarea',
    readonly: true
  }
})`,...(T=(w=l.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var z,D,I;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`createStory(meta, {
  name: 'Required',
  args: {
    name: 'required-textarea',
    id: 'required-textarea',
    required: true,
    modelValue: loremIpsum
  }
})`,...(I=(D=i.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var F,R,H;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`createStory(meta, {
  name: 'Hover',
  args: {
    ...Default.args
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
})`,...(H=(R=c.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var M,j,P;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`createStory(meta, {
  name: 'Focus',
  args: {
    ...Default.args
  },
  parameters: {
    pseudo: {
      focus: true
    }
  }
})`,...(P=(j=d.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var L,_,C;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`createStory(meta, {
  name: 'Focus-visible',
  args: {
    ...Default.args
  },
  parameters: {
    pseudo: {
      focus: true,
      focusVisible: true
    }
  }
})`,...(C=(_=u.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const te=["Default","Placeholder","Disabled","Invalid","ReadOnly","Required","Hover","Focus","FocusVisible"];export{t as Default,a as Disabled,d as Focus,u as FocusVisible,c as Hover,s as Invalid,o as Placeholder,l as ReadOnly,i as Required,te as __namedExportsOrder,r as default};

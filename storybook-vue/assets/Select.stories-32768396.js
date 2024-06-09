import{a as S}from"./chunk-WFFRPTHA-a68c42c5.js";import{J as a}from"./component-library-vue-76e39afc.js";import{c as e}from"./util-67769e9d.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";import"./vue.esm-bundler-4be3a786.js";import"./chunk-HLWAVYOI-8e16477c.js";import"./iframe-7ed24687.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-11d98b33.js";import"./index-4fb43917.js";const q=`<!-- @license CC0-1.0 -->

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
`,V={select:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.background-color"]}},"border-block-end-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.border-block-end-width"]}},"border-bottom-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.deprecated":!0}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.border-color"]}},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length-percentage>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.border-radius"]}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.border-width"]}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.color"]}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.font-family"]}},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.font-size"]}},"min-block-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.pointertarget.min-size"]}},"max-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.max-inline-size"]}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.padding-block-end"]}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.padding-block-start"]}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.padding-inline-end"]}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.padding-inline-start"]}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.disabled.background-color","utrecht.select.background-color","utrecht.form-control.background-color"]}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.disabled.border-color","utrecht.select.border-color","utrecht.form-control.border-color"]}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.disabled.color","utrecht.select.color","utrecht.form-control.color"]}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.focus.background-color","utrecht.select.background-color","utrecht.form-control.background-color"]}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.focus.border-color","utrecht.select.border-color","utrecht.form-control.border-color"]}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.focus.color","utrecht.select.color","utrecht.form-control.color"]}}},invalid:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.invalid.background-color","utrecht.select.background-color","utrecht.form-control.background-color"]}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.invalid.border-color","utrecht.select.border-color","utrecht.form-control.border-color"]}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.form-control.invalid.border-width","utrecht.select.border-width","utrecht.form-control.border-width"]}}}}},O={utrecht:V},t={id:"vue-select",title:"Vue.js Component/Select",component:a,tags:["autodocs"],argTypes:{disabled:{name:"disabled",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},invalid:{name:"invalid",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},required:{name:"required",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}},modelValue:{name:"modelValue",table:{defaultValue:{summary:""}}},readonly:{name:"readonly",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1}}}},args:{},render:()=>({components:{Select:a},template:'<Select v-bind="$props" @update:modelValue="updateModelValue"><slot></slot></Select>',methods:{updateModelValue:S("updateModelValue")}}),parameters:{status:{type:"ALPHA"},tokens:O,tokenPrefix:"utrecht-select",docs:{description:{component:q}}}},r=e(t,{name:"Select",args:{options:[{value:"",label:"Select an option",disabled:!0},{value:1,label:"Option #1"},{value:2,label:"Option #2"},{value:3,label:"Option #3"},{value:4,label:"Option #4"}]}}),n=e(t,{name:"Disabled",args:{disabled:!0}}),s=e(t,{name:"Invalid",args:{invalid:!0}}),o=e(t,{name:"Read-only",args:{readonly:!0}}),l=e(t,{name:"Required",args:{required:!0}});var c,i,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`createStory(meta, {
  name: 'Select',
  args: {
    options: [{
      value: '',
      label: 'Select an option',
      disabled: true
    }, {
      value: 1,
      label: 'Option #1'
    }, {
      value: 2,
      label: 'Option #2'
    }, {
      value: 3,
      label: 'Option #3'
    }, {
      value: 4,
      label: 'Option #4'
    }]
  }
})`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var u,m,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`createStory(meta, {
  name: 'Disabled',
  args: {
    // ...Default.args,
    disabled: true
  }
})`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var y,g,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`createStory(meta, {
  name: 'Invalid',
  args: {
    // ...Default.args,
    invalid: true
  }
})`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,f,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`createStory(meta, {
  name: 'Read-only',
  args: {
    // ...Default.args,
    readonly: true
  }
})`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var k,v,$;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`createStory(meta, {
  name: 'Required',
  args: {
    // ...Default.args,
    required: true
  }
})`,...($=(v=l.parameters)==null?void 0:v.docs)==null?void 0:$.source}}};const P=["Default","Disabled","Invalid","ReadOnly","Required"];export{r as Default,n as Disabled,s as Invalid,o as ReadOnly,l as Required,P as __namedExportsOrder,t as default};

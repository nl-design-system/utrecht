import{M as t,R as m}from"./component-library-vue-888268d8.js";import{t as a,r as i}from"./tokens-b3a94b94.js";import{c as n}from"./util-83c4ae57.js";import"./vue.esm-bundler-4be3a786.js";import"./chunk-HLWAVYOI-d33e212f.js";import"./iframe-42658144.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-11d98b33.js";import"./index-4fb43917.js";import"./index-356e4a49.js";const p={id:"vue-ordered-list",title:"Vue.js Component/Ordered List",component:t,tags:["autodocs"],argTypes:{slot:{name:"slot",control:{type:"text"},type:{required:!1},table:{defaultValue:{summary:""}}},reversed:{type:{name:"boolean",required:!1},table:{category:"HTML attribute",defaultValue:{summary:!1}}},start:{type:{name:"number",required:!1},table:{category:"HTML attribute",defaultValue:{summary:1}}}},render:o=>({setup(){return{args:o}},components:{OrderedList:t,OrderedListItem:m},template:'<OrderedList v-bind="$props"><slot></slot></OrderedList>'}),parameters:{status:{type:"ALPHA"},tokens:a,tokenPrefix:"utrecht-ordered-list",docs:{description:{component:i}}}},e=n(p,{name:"Ordered List",component:t,components:{OrderedListItem:m},args:{slot:`
      <OrderedListItem>List item 1</OrderedListItem>
      <OrderedListItem>List item 2</OrderedListItem>
      <OrderedListItem>List item 3</OrderedListItem>
    `}});var r,s,d;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`createStory(meta, {
  name: 'Ordered List',
  component: OrderedList,
  components: {
    OrderedListItem
  },
  args: {
    slot: \`
      <OrderedListItem>List item 1</OrderedListItem>
      <OrderedListItem>List item 2</OrderedListItem>
      <OrderedListItem>List item 3</OrderedListItem>
    \`
  }
})`,...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const M=["Default"];export{e as Default,M as __namedExportsOrder,p as default};

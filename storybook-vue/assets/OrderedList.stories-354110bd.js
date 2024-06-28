import{M as t,R as m}from"./component-library-vue-76e39afc.js";import{t as i,r as a}from"./tokens-b3a94b94.js";import{c as n}from"./util-84ab703d.js";import"./vue.esm-bundler-4be3a786.js";import"./jsx-runtime-a259e531.js";import"./index-c108c414.js";import"./iframe-3e464ee3.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-11d98b33.js";import"./index-4fb43917.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-a629ae1b.js";const p={id:"vue-ordered-list",title:"Vue.js Component/Ordered List",component:t,tags:["autodocs"],argTypes:{slot:{name:"slot",control:{type:"text"},type:{required:!1},table:{defaultValue:{summary:""}}},reversed:{type:{name:"boolean",required:!1},table:{category:"HTML attribute",defaultValue:{summary:!1}}},start:{type:{name:"number",required:!1},table:{category:"HTML attribute",defaultValue:{summary:1}}}},render:o=>({setup(){return{args:o}},components:{OrderedList:t,OrderedListItem:m},template:'<OrderedList v-bind="$props"><slot></slot></OrderedList>'}),parameters:{status:{type:"ALPHA"},tokens:i,tokenPrefix:"utrecht-ordered-list",docs:{description:{component:a}}}},e=n(p,{name:"Ordered List",component:t,components:{OrderedListItem:m},args:{slot:`
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
})`,...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const q=["Default"];export{e as Default,q as __namedExportsOrder,p as default};

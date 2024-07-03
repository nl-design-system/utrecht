import{g as l,h as S,y as b,b as x}from"./component-library-vue-a6ae4a7f.js";import{c as a}from"./util-38b1b131.js";import"./vue.esm-bundler-4be3a786.js";import"./jsx-runtime-1bd4c026.js";import"./index-c149d518.js";import"./iframe-f3d34125.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-11d98b33.js";import"./index-4fb43917.js";import"./index-356e4a49.js";import"./chunk-HLWAVYOI-70f9eda1.js";const e={title:"Vue.js Component/Data List/Value",id:"react-data-list--value",component:l,argTypes:{multiline:{type:"boolean",table:{category:"API",defaultValue:{summary:!1}}},notranslate:{type:"boolean",table:{category:"API",defaultValue:{summary:!1}}},value:{type:"string",table:{defaultValue:{summary:void 0}}}},render:h=>({components:{DataList:S,DataListItem:b,DataListValue:l},setup(){return{args:h}},template:`
      <DataList>
        <DataListItem>
          <DataListValue v-bind="$props" v-html="args.slot">
            {{ args.value }}
          </DataListValue>
        </DataListItem>
      </DataList>
    `})},t=a(e,{args:{slot:"Amsterdam",value:"Amsterdam"}}),r=a(e,{args:{notranslate:!0,slot:"Mees de Vos",value:"Mees de Vos"}}),s=a(e,{components:{URLData:x},props:{value:{type:String,default:"https://example.fi/"}},args:{slot:"<URLData>https://example.fi/</URLData>",value:"<URLData>https://example.fi/</URLData>",notranslate:!0}}),n=a(e,{args:{slot:"<URLData>mail@example.fi</URLData>",value:"<URLData>mail@example.fi</URLData>",notranslate:!0}}),o=a(e,{args:{slot:`Tweede Kamer der Staten-Generaal
Postbus 20018
2500 EA Den Haag`,value:`Tweede Kamer der Staten-Generaal
Postbus 20018
2500 EA Den Haag`,multiline:!0}});var m,i,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`createStory(meta, {
  args: {
    slot: 'Amsterdam',
    value: 'Amsterdam'
  }
})`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`createStory(meta, {
  args: {
    notranslate: true,
    slot: 'Mees de Vos',
    value: 'Mees de Vos'
  }
})`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var D,g,L;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`createStory(meta, {
  components: {
    URLData: URLData
  },
  props: {
    value: {
      type: String,
      default: 'https://example.fi/'
    }
  },
  args: {
    // Perhaps "voorbeeld.fi" when translated from English to Dutch
    // "fi" is used so we can test rendering of ligatures is avoided
    slot: \`<URLData>https://example.fi/</URLData>\`,
    value: \`<URLData>https://example.fi/</URLData>\`,
    notranslate: true
  }
})`,...(L=(g=s.parameters)==null?void 0:g.docs)==null?void 0:L.source}}};var f,R,U;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`createStory(meta, {
  args: {
    slot: \`<URLData>mail@example.fi</URLData>\`,
    value: \`<URLData>mail@example.fi</URLData>\`,
    notranslate: true
  }
})`,...(U=(R=n.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var v,y,V;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`createStory(meta, {
  args: {
    slot: 'Tweede Kamer der Staten-Generaal\\nPostbus 20018\\n2500 EA Den Haag',
    value: 'Tweede Kamer der Staten-Generaal\\nPostbus 20018\\n2500 EA Den Haag',
    multiline: true
  }
})`,...(V=(y=o.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};const N=["Default","NoTranslate","ValueWithURL","ValueWithEmail","MultilineValue"];export{t as Default,o as MultilineValue,r as NoTranslate,n as ValueWithEmail,s as ValueWithURL,N as __namedExportsOrder,e as default};

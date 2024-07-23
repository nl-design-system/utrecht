import{j as y}from"./jsx-runtime-c9381026.js";import{_ as P,P as S}from"./index-8a3780f9.js";import{t as V,d as L}from"./util-7a7e14bd.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./slicedToArray-55743b32.js";import"./defineProperty-e26b7022.js";import"./clsx-aa410b3d.js";import"./objectDestructuringEmpty-f3aad883.js";import"./extends-4c19d496.js";import"./index-9d475cdf.js";const R=`<!-- @license CC0-1.0 -->

# Preserve data

De _preserve data_ component is bedoeld om ingevoerde gegevens zoveel mogelijk 1-op-1 te laten zien. Dat betekent: spaties worden getoond, data wordt niet vertaald, _left-to-right_ en _right-to-left_ teksten worden met Unicode in de automatische schrijfrichting weergegeven.

Losse regels worden niet getoond, dan moet het gecombineerd worden met de _multiline data_ component.

## Variaties

Deze component krijgt geen configuratie-opties, voor het weergeven van andere types kun je gebruik maken van andere data component, of je eigen component maken. Bijvoorbeeld:

- _IBAN data_
- _number data_
- _URL data_
- _datetime_ data
- _multiline data_

## HTML

Gebruik het \`<bdi>\` HTML element voor Unicode text direction isolation. Gebruik ook het \`<data>\` element als je de \`value\` in een attribuut wilt opslaan.
`,x={"preserve-data":{}},M={utrecht:x},z={title:"React Component/Preserve data",id:"react-preserve-data",component:P,args:{children:""},argTypes:{dateTime:{name:"dateTime",type:{name:"string",required:!1},table:{defaultValue:{summary:""}}},value:{name:"value",type:{name:"string",required:!1},table:{defaultValue:{summary:""}}}},parameters:{tokensPrefix:"utrecht-preserve-data",tokens:V,tokensDefinition:M,docs:{description:{component:R}}},decorators:[w=>y(S,{children:w()})]},e={args:{children:" (06) 249 0420 120"}},r={args:{children:"علي,"},name:"Right-to-left"},a={args:{children:"Mees de Vos",lang:"nl"},name:"Prevent translation"},t={args:{children:"50,000",value:"50000"}},n={args:{children:"19 januari 2038 om 03:14:08",dateTime:"2038-01-19T03:14:08Z"}},o=L(z);var s,i,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: ' (06) 249 0420 120'
  }
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,c,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'علي,'
  },
  name: 'Right-to-left'
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,u,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Mees de Vos',
    lang: 'nl'
  },
  name: 'Prevent translation'
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,v,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: '50,000',
    value: '50000'
  }
}`,...(f=(v=t.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var _,T,k;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: '19 januari 2038 om 03:14:08',
    dateTime: '2038-01-19T03:14:08Z'
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var b,j,D;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:"designTokenStory(meta)",...(D=(j=o.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};const O=["Default","RightToLeft","NoTranslate","Value","Time","DesignTokens"];export{e as Default,o as DesignTokens,a as NoTranslate,r as RightToLeft,n as Time,t as Value,O as __namedExportsOrder,z as default};
//# sourceMappingURL=PreserveData.stories-8fadb226.js.map

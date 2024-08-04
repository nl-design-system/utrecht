import{u as $}from"./index-681b81d1.js";import{t as B,d as I}from"./util-ac2edae6.js";import"./slicedToArray-55743b32.js";import"./defineProperty-a12e71b5.js";import"./typeof-7fd5df1e.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-c9381026.js";import"./clsx-0839fdbe.js";import"./index-9d475cdf.js";const M='<!-- @license CC0-1.0 -->\n\n# Gebruik en toegankelijkheid van headings (koppen)\n\n- Gebruik altijd maar één H1 heading op een pagina met digitale content.\n- Gebruik alleen een heading als er content onder staat.\n- Gebruikers van screenreaders gebruiken headings vaak om een indruk te krijgen van de structuur van een pagina.\n- Gebruik headings niet voor de opmaak maar alleen voor tekstuele hiërarchie van de content.\n- Sla geen niveaus over met het gebruik van headings, bijvoorbeeld geen H3 gebruiken zonder dat er een voorgaande H2 is.\n- Beperk het aantal headings op een pagina. In de meeste gevallen hebben teksten niet meer dan `<h2>` koppen nodig en heel soms een `<h3>`. Alleen voor uitzonderlijk lange of complexe pagina\'s zouden `<h5>` en `<h6>` nodig zijn.\n\n## Terminologie\n\n- **heading**: [de HTML specificatie van `h1`/`h2`/`h3`/`h4`/`h5`/`h6`](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements). "h1" is nogal kortaf, daarom beschrijven we de token als "heading-1".\n\nIn HTML wordt de term "heading" gebruikt, niet "header" (dat is ook iets anders). Let dus op om niet per ongeluk "header" te schrijven in plaats van "heading".\n',O={heading:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}}},_={utrecht:O},E={title:"React Component/Heading",id:"react-heading",component:$,argTypes:{level:{description:"Heading level",control:{type:"select"},options:[1,2,3,4,5,6]},appearance:{description:"Appearance",control:{type:"select"},options:[void 0,"utrecht-heading-1","utrecht-heading-2","utrecht-heading-3","utrecht-heading-4","utrecht-heading-5","utrecht-heading-6"]}},parameters:{tokensPrefix:"utrecht-heading",tokens:B,tokensDefinition:_,docs:{description:{component:M}}}},e={children:"The Quick Brown Fox Jumps Over The Lazy Dog"},n={name:"Heading Level 1",args:{level:1,...e}},a={args:{level:2,...e}},r={args:{level:3,...e}},s={args:{level:4,...e}},t={args:{level:5,...e}},o={args:{level:6,...e}},i={args:{...e,appearance:"utrecht-heading-4",level:2}},c=I(E);var d,l,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Heading Level 1',
  args: {
    level: 1,
    ...exampleArgs
  }
}`,...(g=(l=n.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var p,m,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    level: 2,
    ...exampleArgs
  }
}`,...(h=(m=a.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var u,v,k;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    level: 3,
    ...exampleArgs
  }
}`,...(k=(v=r.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var H,x,y;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    level: 4,
    ...exampleArgs
  }
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var L,b,f;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    level: 5,
    ...exampleArgs
  }
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var A,S,T;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    level: 6,
    ...exampleArgs
  }
}`,...(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var j,w,D;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...exampleArgs,
    appearance: 'utrecht-heading-4',
    level: 2
  }
}`,...(D=(w=i.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var z,G,C;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:"designTokenStory(meta)",...(C=(G=c.parameters)==null?void 0:G.docs)==null?void 0:C.source}}};const W=["Default","HeadingLevel2","HeadingLevel3","HeadingLevel4","HeadingLevel5","HeadingLevel6","HeadingAppearance","DesignTokens"];export{n as Default,c as DesignTokens,i as HeadingAppearance,a as HeadingLevel2,r as HeadingLevel3,s as HeadingLevel4,t as HeadingLevel5,o as HeadingLevel6,W as __namedExportsOrder,E as default};
//# sourceMappingURL=Heading.stories-6a925dec.js.map

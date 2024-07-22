import{j as e,a as o}from"./jsx-runtime-c9381026.js";import{aA as Q,aB as X,z as Y,G as ee,I as h,J as t,K as ne,M as n}from"./index-5f30dfe0.js";import{t as te,d as re}from"./util-7a7e14bd.js";import{o as oe}from"./index.esm-d14429ee.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./slicedToArray-55743b32.js";import"./defineProperty-e26b7022.js";import"./clsx-aa410b3d.js";import"./objectDestructuringEmpty-f3aad883.js";import"./extends-4c19d496.js";import"./index-9d475cdf.js";import"./inherits-f39b4992.js";import"./getPrototypeOf-5ea76000.js";import"./index-a38d0dca.js";import"./iframe-3cc638db.js";import"../sb-preview/runtime.js";const ae=`<!-- @license CC0-1.0 -->

# Accordion

Je kunt een accordion gebruiken lange pagina's korter te maken zodat de gebruiker niet lang moet scrollen om de relevante informatie te vinden.

De inhoud verbergen heeft als nadeel dat "zoeken in pagina" geen resultaten oplevert de inhoud die verborgen is. Als je weet op welke zoekterm de gebruiker heeft gezocht om op de pagina met accordion te komen, dan kun je de sections die de zoekterm bevatten automatisch _expanded_ maken.

## Tekst

Het is belangrijk duidelijke koppen te hebben, omdat de gebruiker niet de verborgen inhoud kan "scannen" om relevante informatie te vinden.

## HTML

Gebruik een \`<button>\` element waarmee je de inhoud van de section kunt weergeven en verbergen. Gebruik altijd het \`aria-expanded\` attribuut zodat duidelijk wat het effect is van de button activeren. Gebruik \`aria-expanded="true"\` wanneer de inhoud beschikbaar is, gebruik \`aria-expanded="false"\` wanneer de inhoud verborgen is.

Plaats de button in de heading, zodat gebruikers die via een overzicht van headings door de pagina navigeren de informatie makkelijk kunnen vinden.

Plaats de inhoud van de _expandable region_ in een \`<section>\` element, zodat gebruikers die via een overzicht van _landmarks_ door de pagina navigeren de informatie makkelijk kunnen vinden (het \`section\` element maakt een \`region\` landmark). Gebruik \`aria-labelledby\` om de \`section\` te koppelen aan de heading, omdat het is belangrijk dat de landmark een duidelijk label heeft. Zonder label is de _landmark navigation_ onduidelijk omdat er meerdere regions zijn zonder naam, waarvan niet duidelijk is wat de inhoud is.

Zelfs de inhoud van een verborgen _expandable region_ moet in de HTML-code staan, wanneer je _server-side rendering_ gebruikt zodat zoekmachines dan toch toegang hebben tot de volledige inhoud. De inhoud van een verborgen _expandable region_ kan met CSS onzichtbaar gemaakt worden.

Wanneer je accordion heel veel onderdelen heeft, dan kunnen gebruikers van _landmark navigation_ moeilijker andere landmarks in de pagina vinden. Om bij de \`contentinfo\` landmark te komen (de page footer), moet de gebruiker eerst alle accordion onderdelen overslaan. Gebruik voor een accordion met heel veel onderdelen een \`<div>\` of \`<section role="presentation">\` element in plaats van het \`<section>\` element zodat het geen landmark wordt. Gebruikers kunnen de informatie dan nog wel vinden via _heading navigation_.

### Zo moet het niet

Verwijder het \`aria-expanded\` attribuut niet, want \`aria-expanded="false"\` is niet hetzelfde als geen \`aria-expanded\` attribuut hebben. "_Boolean attributes_" van ARIA werken niet hetzelfde als _boolean attributes_ van HTML. ([Boolean attributes in HTML and ARIA: what's the difference? — Hidde de Vries](https://hidde.blog/boolean-attributes-in-html-and-aria-whats-the-difference/)).

Plaats niet de heading in de button in plaats van andersom, omdat de heading dan niet toegankelijk is voor hulpmiddelen die een overzicht maken van alle headings op een pagina.

Wacht niet met het plaatsen van de inhoud van de _expandable region_ tot de gebruiker de button activeert, want zoekmachines gebruiken alleen de initiële inhoud van de pagina zonder op buttons te gebruiken.

## Visueel ontwerp

De icoon plaatsen vóór de heading is meest duidelijk. Als het icoon voor _expanded_ of _not expanded_ uitgelijnd is aan het eind van de regel, dan is het minder duidelijk dat de heading een button is die voor inklappen en uitklappen zorgt. Sommige gebruikers met een beperkt gezichtsveld kunnen het icoon bijvoorbeeld niet zien wanneer ze naar naar de heading kijken, als er grote afstand zit tussen de heading en het icoon.

## Relevante WCAG eisen

De WCAG eisen voor de button component en de heading component gelden ook voor de accordion header.

Let extra op voor deze onderdelen:

- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): de _heading level_ van de accordion sections is afhankelijk van waar in de pagina de accordion is geplaatst, dit kan per pagina verschillen.
- [WCAG eis 1.3.6](https://www.w3.org/TR/WCAG21/#identify-purpose): gebruik \`aria-controls\` voor de button, en gebruik een \`region\` landmark voor de _expandable region_ (gebruik daarvoor het HTML-element \`<section>\`)
- [WCAG eis 1.4.3](https://www.w3.org/TR/WCAG21/#contrast-minimum): contrast tussen tekst en achtergrond en tussen icoon en achtergrond is voldoende in alle varianten, alle interactieve statussen en alle mogelijke combinaties.
- [WCAG eis 3.2.1](https://www.w3.org/TR/WCAG21/#on-focus): maak de accordion niet automatisch _expanded_ als de button focus krijgt.
- [WCAG eis 2.1.3](https://www.w3.org/TR/WCAG21/#keyboard-no-exception): ondersteun ook de optionele toetsen: \`Down Arrow\`, \`Up Arrow\`, \`Home\` en \`End\`. \`Space\` moet de button activeren, niet de pagina scrollen (gebruik \`keypressEvt.preventDefault()\`).
- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): de tekst die zowel wordt gebruikt als heading en als label voor de button moet duidelijk zijn, omdat de inhoud niet altijd zichtbaar is.
- [WCAG eis 2.4.10](https://www.w3.org/TR/WCAG21/#section-headings): accordions die onderdeel vormen van de lopende tekst moeten section headings gebruiken.

## Relevante info

- [Accordion (Sections With Show/Hide Functionality) - W3C ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
`,ie={accordion:{"margin-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!1},type:"spacing"},"margin-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!1},type:"spacing"},button:{"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},gap:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},hover:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},active:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},icon:{size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},utrecht:{"arrow-down":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<url>",inherits:!0}}},"arrow-up":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<url>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}}},panel:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}}},se={utrecht:ie},de=({expanded:r,label:J,body:Z,appearance:F,icon:K,sections:N})=>e(Q,{icon:K,appearance:F,sections:N||[{expanded:r,label:J,body:Z}]}),le={title:"React Component/Accordion",id:"react-accordion",args:{label:"",body:"",expandedAccordion:!1,appearance:"",icon:void 0},argTypes:{label:{name:"label",type:{name:"string",required:!0},table:{defaultValue:{summary:""},category:"API"}},body:{name:"body",type:{name:"string",required:!0},table:{defaultValue:{summary:""},category:"API"}},expandedAccordion:{name:"expandedAccordion",type:{name:"boolean",required:!1},table:{defaultValue:{summary:!1},category:"API"}},appearance:{description:"Appearance",control:{type:"select"},options:["","utrecht"]},icon:{name:"icon",description:"Icon at the start",control:{type:"select"},options:{"":void 0,null:null,"utrecht-icon-chevron-down":e(oe,{})}}},parameters:{tokensPrefix:"utrecht-accordion",tokens:te,tokensDefinition:se,docs:{description:{component:ae}}},render:de},O=()=>e(X,{overflowInline:!0,children:o(Y,{children:[e(ee,{children:o(h,{children:[e(t,{scope:"col",children:"Column A"}),e(t,{scope:"col",children:"Column B"}),e(t,{scope:"col",children:"Column C"}),e(t,{scope:"col",children:"Column D"}),e(t,{scope:"col",children:"Column E"}),e(t,{scope:"col",children:"Column F"}),e(t,{scope:"col",children:"Column G"}),e(t,{scope:"col",children:"Column H"}),e(t,{scope:"col",children:"Column I"}),e(t,{scope:"col",children:"Column J"}),e(t,{scope:"col",children:"Column K"}),e(t,{scope:"col",children:"Column L"}),e(t,{scope:"col",children:"Column M"}),e(t,{scope:"col",children:"Column N"}),e(t,{scope:"col",children:"Column O"})]})}),o(ne,{children:[o(h,{children:[e(t,{scope:"row",children:"Item 1"}),e(n,{children:"Data"}),e(n,{children:"More data"}),e(n,{children:"More data"}),e(n,{children:"More data"}),e(n,{children:"More data"}),e(n,{children:"More data"}),e(n,{children:"More data"}),e(n,{children:"More data"}),e(n,{children:"More data"}),e(n,{children:"More data"}),e(n,{children:"More data"}),e(n,{children:"More data"}),e(n,{children:"More data"}),e(n,{children:"More data"})]}),o(h,{children:[e(t,{scope:"row",children:"Item"}),e(n,{children:"Data"}),e(n,{children:"More data"}),e(n,{children:"More data"}),e(n,{children:"More data"}),e(n,{children:"More data"}),e(n,{children:"More data"}),e(n,{children:"More data"}),e(n,{children:"More data"}),e(n,{children:"More data"}),e(n,{children:"More data"}),e(n,{children:"More data"}),e(n,{children:"More data"}),e(n,{children:"More data"}),e(n,{children:"More data"})]})]})]})}),P={label:"Lorem ipsum",body:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.`,expandedAccordion:!0},V={label:'ما هو "لوريم إيبسوم" ؟',body:' المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس بايج مايكر" (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.'},B=[{label:"Lorem ipsum 1",body:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.`,expandedAccordion:!0},{label:"Lorem ipsum 2",body:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.`,expandedAccordion:!1},{label:"Lorem ipsum 3",body:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.`,expandedAccordion:!1}],a={args:P},i={args:{...P,icon:void 0,appearance:"utrecht"}},s={args:{sections:B}},d={args:{appearance:"utrecht",icon:void 0,sections:B}},l={args:{...V,appearance:"utrecht",icon:void 0},decorators:[r=>e("div",{lang:"ar",dir:"rtl",children:r()})],name:"Right-to-left Utrecht"},c={args:V,decorators:[r=>e("div",{lang:"ar",dir:"rtl",children:r()})],name:"Right-to-left"},u={args:{appearance:"utrecht",label:"table",icon:void 0,body:e(O,{})},name:"Table Inline Overflow Utrecht"},p={args:{label:"table",body:e(O,{})},name:"Table Inline Overflow"},m=re(le);var g,b,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: accordionDefaultDataEn
}`,...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var k,v,x;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...accordionDefaultDataEn,
    icon: undefined,
    appearance: 'utrecht'
  }
}`,...(x=(v=i.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var f,w,A;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    sections: accordionData
  }
}`,...(A=(w=s.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var C,M,D;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    appearance: 'utrecht',
    icon: undefined,
    sections: accordionData
  }
}`,...(D=(M=d.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var T,_,j;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...accordionDefaultDataAR,
    appearance: 'utrecht',
    icon: undefined
  },
  decorators: [Story => <div lang="ar" dir="rtl">
        {Story()}
      </div>],
  name: 'Right-to-left Utrecht'
}`,...(j=(_=l.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var z,$,R;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: accordionDefaultDataAR,
  decorators: [Story => <div lang="ar" dir="rtl">
        {Story()}
      </div>],
  name: 'Right-to-left'
}`,...(R=($=c.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var G,q,I;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    appearance: 'utrecht',
    label: 'table',
    icon: undefined,
    body: <ExampleTable />
  },
  name: 'Table Inline Overflow Utrecht'
}`,...(I=(q=u.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var S,W,L;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'table',
    body: <ExampleTable />
  },
  name: 'Table Inline Overflow'
}`,...(L=(W=p.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var U,E,H;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:"designTokenStory(meta)",...(H=(E=m.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};const Te=["Default","DefaultUtrecht","Multiple","MultipleUtrecht","RTLUtrecht","RTL","tableInlineOverflowUtrecht","tableInlineOverflow","DesignTokens"];export{a as Default,i as DefaultUtrecht,m as DesignTokens,s as Multiple,d as MultipleUtrecht,c as RTL,l as RTLUtrecht,Te as __namedExportsOrder,le as default,p as tableInlineOverflow,u as tableInlineOverflowUtrecht};
//# sourceMappingURL=Accordion.stories-3f61cb78.js.map

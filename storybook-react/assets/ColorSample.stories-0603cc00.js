import{aq as l}from"./index-5c2615f4.js";import{t as d,d as c}from"./util-5e729490.js";import"./slicedToArray-b6353f72.js";import"./defineProperty-84a138b7.js";import"./clsx.m-892aa8a5.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-29545a09.js";import"./objectDestructuringEmpty-24e23e90.js";import"./extends-98964cd2.js";import"./index-9d475cdf.js";const m=`<!-- @license CC0-1.0 -->

# Color sample

Gebruik _color sample_ component om een voorbeeld te geven van een kleur. Gebruik deze component bijvoorbeeld voor:

- Legenda van de kleuren in landkaarten, grafieken of van data badges.
- Overzicht van kleuren in een huisstijl.
- Kleur-optie in een _color input_ component.

## Toegankelijkheid

### Tekstlabels voor kleuren

Gebruik ook een tekstlabel om de kleur te beschrijven. Bijvoorbeeld: "rood", "lichtrood", etcetera.

Een gebruiker die geen kleuren ziet kan het met een andere gebruiker over de "rode lijn" hebben, als het tekstlabel goed is. Vervang daarom de kleur in het tekstlabel niet door de bedoeling van de kleur: "hoog water", "laag water". Combineer de kleur met de bedoeling: "blauw, hoog water" en "geel, laag water".

### Forced colors mode

Bij sommige gebruikers worden kleuren in CSS zoals \`background-color\` vervangen of genegeerd, omdat ze een bepaald kleurenpalet nodig hebben. Voor datavisualisatie-kleuren kan dit functionaliteit kapot maken, terwijl voor decoratieve huisstijl kleuren het meestal geen probleem is.

Gebruik \`forced-color-adjust: none\` om te voorkomen dat de kleur wordt aangepast, zodat de betekenis duidelijk blijft. Lees meer hierover op deze Microsoft blog post: [Styling for Windows high contrast with new standards for forced colors](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/).

## WCAG eisen

- [WCAG eis 3.2.4](https://www.w3.org/TR/WCAG21/#consistent-identification): gebruik hetzelfde label voor de kleur in de _color sample_ van de legenda als in de landkaart of grafiek.
`,p={"color-sample":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"block-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},dark:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},light:{"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}}},g={utrecht:p},u={title:"React Component/Color sample",id:"react-color-sample",component:l,args:{color:"#007DAD"},argTypes:{color:{name:"Color",control:{type:"color"},type:{name:"string",required:!0},table:{category:"API"}}},parameters:{tokensPrefix:"utrecht-color-sample",tokens:d,tokensDefinition:g,docs:{description:{component:m}}}},e={},o=c(u);var n,r,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};var s,i,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:"designTokenStory(meta)",...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const S=["Default","DesignTokens"];export{e as Default,o as DesignTokens,S as __namedExportsOrder,u as default};
//# sourceMappingURL=ColorSample.stories-0603cc00.js.map

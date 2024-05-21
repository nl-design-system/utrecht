import{j as e}from"./jsx-runtime-29545a09.js";import{a6 as o}from"./index-c9eb9ea9.js";import{t as h,d as p}from"./util-4b929d67.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./slicedToArray-b6353f72.js";import"./clsx.m-c1fc4751.js";import"./objectDestructuringEmpty-24e23e90.js";import"./extends-98964cd2.js";import"./index-8d47fad6.js";const g=`<!-- @license CC0-1.0 -->

# Iconen in code

## Iconen gebruiken als Custom Element

Eén van de makkelijkste manieren om iconen te gebruiken is door ze te includen in de web component library, zodat je ze als custom element kan gebruiken. Elk icoon is beschikbaar als custom element. De naam van van het icoon (\`utrecht-icon-...\`) is ook de naam van het custom-element. Voorbeeld:

\`\`\`html
<div>
  <utrecht-icon-loupe></utrecht-icon-loupe>
</div>
\`\`\`

Verander de kleur van het icoon via de CSS-eigenschap \`color\` op een parent element of via de custom eigenschap \`--utrecht-icon-color\`.

### \`color\` van de omgevings content

Op onderstaande manier kan je het makkelijkst de kleur aanpassen. De kleur van de bestaande tekst zal ook op het icoon toegepast worden.

\`\`\`html
<button>
  <utrecht-icon-loupe></utrecht-icon-loupe>
  Search
</button>

<style>
  button {
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
  }
</style>
\`\`\`

### \`--utrecht-icon-color\` als custom icoon kleur

Deze manier is handig als je een klein verschil wilt aanbrengen tussen de tekst kleur en de kleur van het icoon. Het gebruikt een CSS custom property \`--utrecht-icon-color\` als de kleur van het icoon.

\`\`\`html
<button>
  <utrecht-icon-loupe></utrecht-icon-loupe>
  Search
</button>

<style>
  button {
    --utrecht-icon-color: rgba(255, 255, 255, 0.75);
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
  }
</style>
\`\`\`

### Icoon grootte aanpassen

De grootte van het icoon kan aangepast worden met de \`--utrecht-icon-size\` CSS eigenschap:

\`\`\`html
<button>
  <utrecht-icon-loupe></utrecht-icon-loupe>
  Search
</button>

<style>
  button {
    --utrecht-icon-size: 42px;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
  }
</style>
\`\`\`

## Overzicht van icons

Wanneer het nodig is een overzicht te hebben van de beschikbare icons, gebruik dan als basis de meegeleverde JSON informatie in \`dist/index.json\`. Het bevat een array met onder andere de ID van elke icoon. Op dit moment is de naam van de custom element altijd gelijk aan de ID.
`,k={icon:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length-percentage>",inherits:!0}}},"inset-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},baseline:{"inset-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}}},b={utrecht:k},v={title:"React Component/Icon",id:"react-icon",component:o,args:{children:e("svg",{viewBox:"0 0 1000 1000",children:e("rect",{fill:"currentColor",x:"0",y:"0",width:"1000",height:"1000"})}),color:"green",size:32},parameters:{tokensPrefix:"utrecht-icon",tokens:h,tokensDefinition:b,docs:{description:{component:g}}},render:({color:u,size:d,...m})=>e("div",{style:{"--utrecht-icon-color":u,"--utrecht-icon-size":`${d}px`},children:e(o,{...m})})},n={},t=p(v);var r,s,i;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var c,a,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"designTokenStory(meta)",...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const O=["WithInlineSVG","DesignTokens"];export{t as DesignTokens,n as WithInlineSVG,O as __namedExportsOrder,v as default};
//# sourceMappingURL=Icon.stories-ff801ca0.js.map

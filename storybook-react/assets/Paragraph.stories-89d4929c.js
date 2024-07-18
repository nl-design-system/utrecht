import{P as k}from"./index-e899a92c.js";import{t as v,d as b}from"./util-7a7e14bd.js";import"./slicedToArray-55743b32.js";import"./defineProperty-e26b7022.js";import"./clsx-aa410b3d.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-c9381026.js";import"./objectDestructuringEmpty-f3aad883.js";import"./extends-4c19d496.js";import"./index-9d475cdf.js";const f=`<!-- @license CC0-1.0 -->

# Paragraph

De _paragraph_ component gebruik je voor een alinea met lopende tekst, instructies van formulieren en voor overige losstaande tekstfragmenten.

## HTML

Gebruik hiervoor altijd het \`<p>\` HTML-element, die heeft automatisch de goede [\`paragraph\` role](https://w3c.github.io/aria/#paragraph) in de accessibility tree (dat is nodig voor WCAG eis 1.3.1). Voor een _lead paragraph_ gebruik je \`<p><b>…</b></p>\`. Voor _small print_ gebruik je \`<p><small>…</small></p>\`.

Zelfs als geen CSS geladen kan worden, blijft de tekst duidelijk. Door het \`<p>\` element is er tussen alinea's duidelijke witruimte (WCAG 1.4.12). Door het \`<b>\` element is de _lead paragraph_ visueel herkenbaar. Door \`<small>\` is _small print_ visueel herkenbaar.

### Lead Paragraph

De _lead paragraph_ is een extra opvallende variant van de _paragraph_. Gebruik de _lead paragraph_ onder de _heading_ van een _article_ voor een introductietekst.

Schrijf in de eerste alinea kort en bondig waar de pagina over gaat, zodat de lezer kan besluiten om verder te lezen. Gebruik hiervoor de _lead paragraph_ variant zodat de tekst extra opvallend is.

Wanneer je meer dan circa 30 woorden of 200 tekens nodig hebt, gebruik dan niet de _lead paragraph_ variant zodat de tekst een leesbare lettergrootte heeft voor langere teksten.

Gebruik de _lead paragraph_ niet wanneer je een _paragraph_ voor een ander doel extra opvallend wil maken, ontwikkel dan een eigen variant.

## Inhoud

Groepeer zinnen die bij elkaar horen in een alinea. Begin een nieuwe alinea wanneer de tekst over een andere onderwerp gaat of een eigen doel heeft. Teksten met alinea's die niet bovengemiddeld lang zijn makkelijker te begrijpen als je pauze neemt, en door het grouperen is informatie sneller terug te vinden.

Overweeg of een alinea met meer dan 7 zinnen of 140 woorden duidelijker is als je tekst indeelt in twee alinea's.

## Layout

### Lettergrootte

Kies de lettergrootte niet te klein, bijvoorbeeld \`16px\` of groter. Gebruik \`rem\` in CSS in plaats van \`px\`, zodat de font-size van de _paragraph_ ook verdubbelt wanneer gebruikers via hun besturingssysteem of _user stylesheet_ de standaard lettergroote 200% groter maken. ([WCAG eis 1.4.4](https://www.w3.org/TR/WCAG21/#resize-text)) Gebruikers moeten de lettergrootte vier keer groter kunnen maken met browser zoom. ([WCAG eis 1.4.10](https://www.w3.org/TR/WCAG21/#reflow)) Maak zoom niet kapot door gebruik van de \`vw\` of \`vh\` eenheden in CSS die niet altijd goed werken met zoom.

Gebruik de design token \`nl.paragraph.font-size\` als je niet de standaard-grootte wilt van \`nl.document.font-size\`.

Voor de lead paragraph variant is het gebruikelijk de lettergrootte 10% á 20% groter te kiezen (\`nl.paragraph.lead.font-size\`).

### Regelhoogte

Stel de regelhoogte met \`nl.paragraph.line-height\` in voor voldoende afstand tussen tekstregels, dit verbetert de leesbaarheid. Standaard gebruiken browsers circa \`1.2\`, maar \`1.5\` is voor veel gebruikers beter leesbaar. Voor WCAG 1.4.8 is het ook belangrijk om \`1.5\` of groter aan te bieden.

### Afstand tussen paragrafen

Kies voldoende afstand tussen alinea's, in elk geval 50% groter dan afstand tussen tekstregels. (WCAG 1.4.8). Gebruik hiervoor de design tokens \`nl.paragraph.margin-block-start\` en \`nl.paragraph.margin-block-end\`.

### Kleurgebruik

\`nl.paragraph.color\`: kies voldoende contrast ten opzichte van de achtergrondkleur, van bijvoorbeeld \`nl.document.background-color\` of \`nl.page.background-color\`. Kies in plaats van zwart voor zeer donkergrijs, dat is beter leesbaar op beeldschermen. Een contrastverhouding van 7:1 is ideaal. (WCAG 1.4.3 en WCAG 1.4.6)

### Regellengte

Zorg dat de lengte van de tekst niet te lang wordt, bijvoorbeeld door deze design token in te stellen: \`nl.article.max-inline-size\`. De ideale regellengte verschilt per schrift en taal, maar ergens tussen de 50 en 75 tekens voor Nederlands is prima. Je kunt in CSS bijvoorbeeld de \`ch\` eenheid gebruiken: \`--nl-article-max-inline-size: 60ch\`.

Voor WCAG 1.4.8 is het nodig dat de regellengte beperkt kan worden tot maximaal 80 tekens (\`80ch\`), bijvoorbeeld door de viewport van de browser kleiner te maken.

### Tekstuitlijning

Tekst dient uitsluitend links uitgelijnd zijn, voor Nederlandse teksten. Gebruik daarvoor \`text-align: start\`.

\`text-align: justify\` moet vermeden kunnen worden volgens WCAG 1.4.8, dus gebruik deze voor het gemak helemaal niet. Rechts uitlijnen en tekst centreren moet je ook niet gebruiken voor lopende tekst.

## Hoe het niet moet

### Geen opmaak

Geen \`p\` gebruiken:

\`\`\`html
<section>
  <h1>Interessante pagina</h1>
  Deze eerste tekst ziet er misschien prima uit.
  <p>Maar ook de eerste paragraaf hoort in een p-element te staan.</p>
</section>
\`\`\`

### Lege paragraaf

Een lege \`p\` gebruiken, bijvoorbeeld om extra afstand te maken:

\`\`\`html
<section>
  <h1>Voorbeeld pagina</h1>
  <p>Deze pagina ziet er op het oog misschien prima uit.</p>
  <p>&nbsp;</p>
  <p>Maar sommige screen readers zeggen dat er drie paragrafen zijn, dat is verwarrend.</p>
</section>
\`\`\`

### Geen semantiek

Een \`div\` gebruiken:

\`\`\`html
<section>
    <h1>Interessante pagina</h1>
    <div>Deze eerste tekst ziet er misschien prima uit, maar de paragraph role ontbreek in de accessibility tree.</div>
    <div role="paragraph">Gebruik gewoon een p-element in plaats van ARIA om de role te verkrijgen.</p>
</section>
\`\`\`

Wanneer je tekstfragmenten na elkaar plaatst is het belangrijk dat je een element zoals paragraaf gebruikt (en niet een \`inline\` element zoals \`span\` of \`label\`), zodat de twee tekstfragmenten los van elkaar worden voorgelezen door screen readers. Wanneer de CSS niet geladen kan worden, dan heeft \`p\` wel marge en \`div\` niet, in veel situaties zonder CSS is \`p\` daarom leesbaarder dan \`div\`.

### \`inline\` in plaats van \`block\`-elementen

\`\`\`html
<label for="name">Voornaam</label><span>Voornaam is verplicht</span>
\`\`\`

Beter:

\`\`\`html
<p><label for="name">Voornaam</label></p>
<p>Voornaam is verplicht</p>
\`\`\`

### Overdreven nadruk

Benadruk niet een hele paragraaf, maar markeer het belangrijke gedeelte.

\`\`\`html
<p>
  <strong
    >Tenzij anders vermeld is op de inhoud van deze website de Creative Commons zero verklaring (CC0) van toepassing.
    Dit houdt in dat iedere vorm van hergebruik van de inhoud van deze site is toegestaan, tenzij bij of in een bepaald
    onderdeel (bijvoorbeeld een logo of een foto) staat aangegeven dat op dat onderdeel een auteursrechtelijke
    uitzondering van toepassing is.
  </strong>
</p>
\`\`\`

Beter:

\`\`\`html
<p>
  <em>Tenzij anders vermeld</em> is op de inhoud van deze website de Creative Commons zero verklaring (CC0) van
  toepassing. Dit houdt in dat <strong>iedere vorm van hergebruik van de inhoud van deze site is toegestaan</strong>,
  tenzij bij of in een bepaald onderdeel (bijvoorbeeld een logo of een foto) staat aangegeven dat op dat onderdeel een
  auteursrechtelijke uitzondering van toepassing is.
</p>
\`\`\`

## Links

- [MDN: \`<p>\`: The Paragraph element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)
- [HTML specification: The \`<b>\` element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-b-element). Bevat een voorbeeld van het \`b\` element voor lead paragraphs.
- [HTML specification: The \`<small>\` element](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-small-element). Bevat een voorbeeld van het \`small\` element voor _small print_.
- [Hoe lang mag een alinea zijn? En waar hangt dat van af? - Taaladvies.net](https://taaladvies.net/lengte-van-alineas/)

### Relevante WCAG regels

- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships)
- [WCAG eis 1.4.3](https://www.w3.org/TR/WCAG21/#contrast-minimum)
- [WCAG eis 1.4.4](https://www.w3.org/TR/WCAG21/#resize-text)
- [WCAG eis 1.4.8](https://www.w3.org/TR/WCAG21/#visual-presentation)
- [WCAG eis 1.4.10](https://www.w3.org/TR/WCAG21/#reflow)
- [WCAG eis 1.4.12](https://www.w3.org/TR/WCAG21/#text-spacing)
- [WCAG eis 3.1.2](https://www.w3.org/TR/WCAG21/#language-of-parts)
`,y={paragraph:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.document.color"]},type:"color"},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.document.font-family"]},type:"fontFamilies"},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.document.font-size"]},type:"fontSizes"},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}},type:"fontWeights"},"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.document.line-height"]},type:"lineHeights"},"margin-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!1},type:"spacing"},"margin-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!1},type:"spacing"},lead:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.paragraph.color","utrecht.document.color"]},type:"color"},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.paragraph.font-size","utrecht.document.font-size"]},type:"fontSizes"},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.paragraph.font-weight","utrecht.document.font-weight"]},type:"fontWeights"},"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.paragraph.line-height","utrecht.document.line-height"]},type:"lineHeights"}},small:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.paragraph.color","utrecht.document.color"]},type:"color"},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.paragraph.font-size","utrecht.document.font-size"]},type:"fontSizes"},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.paragraph.font-weight","utrecht.document.font-weight"]},type:"fontWeights"},"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.paragraph.line-height","utrecht.document.line-height"]},type:"lineHeights"}}}},w={utrecht:y},z={title:"React Component/Paragraph",id:"react-paragraph",component:k,tags:["autodocs"],args:{lead:!1,small:!1,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},argTypes:{lead:{name:"lead",type:{name:"boolean",required:!1},table:{category:"API",defaultValue:{summary:!1}}},small:{name:"small",type:{name:"boolean",required:!1},table:{category:"API",defaultValue:{summary:!1}}}},parameters:{tokensPrefix:"utrecht-paragraph",tokens:v,tokensDefinition:w,docs:{description:{component:f}}}},e={},n={name:"Lead",args:{...e.args,lead:!0}},t={name:"Small",args:{...e.args,small:!0}},a=b(z);var r,s,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var o,l,d;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Lead',
  args: {
    ...Default.args,
    lead: true
  }
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var g,p,m;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Small',
  args: {
    ...Default.args,
    small: true
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var h,u,c;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:"designTokenStory(meta)",...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const R=["Default","Lead","Small","DesignTokens"];export{e as Default,a as DesignTokens,n as Lead,t as Small,R as __namedExportsOrder,z as default};
//# sourceMappingURL=Paragraph.stories-89d4929c.js.map

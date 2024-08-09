import{j as d}from"./jsx-runtime-c9381026.js";import{W as k}from"./index-641269a7.js";import{t as p,d as g}from"./util-ac2edae6.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./defineProperty-a12e71b5.js";import"./typeof-7fd5df1e.js";import"./clsx-0839fdbe.js";import"./index-9d475cdf.js";const m=`<!-- @license CC0-1.0 -->

# Skip link

_Skip links_ zijn belangrijk om te gebruiken op de meeste websites omdat voor sommige gebruikers het hierdoor niet onnodig veel tijd kost om je website te gebruiken. Met een _skip link_ ga je naar een andere plek op dezelfde pagina, zodat je bijvoorbeeld gelijk een artikel kan lezen en links daarin kunt aanklikken, zonder tijd te besteden aan de hoofdnavigatie.

_Skip links_ zijn meestal onzichtbaar als je de pagina opent, maar ze zijn wel makkelijk vindbaar voor deze gebruikers. Met het toetsenbord vindt je een _skip link_ door op \`Tab\` te drukken wanneer je de pagina hebt geladen. (Voor macOS gebruikers is het nodig om de standaard-instellingen aan te passen voordat dit werkt.)

Maak skip links naar de drie belangrijkste onderdelen op de pagina, in deze volgorde:

1. _main content_: vaak een link naar een \`<main>\` of \`<article>\` element
2. _main navigation_: als je een _main navigation component_ hebt, link dan hier naar als je het niet al de volgende link is in de tabvolgorde.
3. _search form_: als je een zoekveld hebt om vanuit deze pagina de zoeken, gebruik deze _skip link_ als laatste.

Als je de skip link gaat gebruiken op een website, begin dan consistent elke pagina met de skip link zodat de navigatie op een voorspelbare manier werkt ([WCAG 3.2.3](https://www.w3.org/TR/WCAG21/#consistent-navigation)).

Skip links zijn niet nodig op een simpele pagina waar alleen tekst staat en geen navigatie. Een startpagina van een zoekmachine heeft bijvoorbeeld wel een navigatie én een zoekformulier, maar door het gebruik van \`autofocus\` voor het zoekveld heeft het geen zin om een skip link te gebruiken.

## HTML

- plaats de _skip link_ als allereerste interactieve element van de pagina, bijvoorbeeld als eerste HTML-element in \`<body>\`.
- plaats de _skip link_ voor landmarks zoals het \`<header>\` element van de _page header component_.
- gebruik een \`<div>\` of \`<p>\` om de link in de plaatsen, gebruik niet een losse \`<a>\`, zodat de link ook duidelijk is als CSS niet geladen is.
- gebruik geen \`<nav>\` element voor skip links.

## Hoe het niet moet

### Skip links onnodig in een \`<nav>\` HTML-element

Het is belangrijk dan gebruikers snel bij de _navigation landmark_ voor het hoofdmenu komen kunnen komen, het zou niet handig zijn als je altijd eerst de _navigation landmark_ met skip links moet overslaan.

Niet:

\`\`\`html
<nav class="skip-links">…</nav>
\`\`\`

Wel:

\`\`\`html
<div class="skip-links">…</div>
\`\`\`

De pagina is beter leesbaar wanneer de CSS niet is geladen als je een _block-level_ HTML-element gebruikt zoals \`div\` of \`p\` met daarin de skip links, dan komt de HTML die volgt na de skip links netjes op een eigen regel te staan.

### Skip link onleesbaar door overlap met achtergrond

Als je de skip link een vaste locatie geeft met CSS \`position\`, dan kan de link over de inhoud van de pagina heen staan. Gebruik daarom een achtergrondkleur voor de _skip link_, zodat de link-tekst altijd leesbaar is.

### Onnodig scrollen bij focus

Niet:

\`\`\`css
.utrecht-skip-link {
  position: absolute;
  /* … */
}
\`\`\`

Wel:

\`\`\`css
.utrecht-skip-link {
  position: fixed;
  /* … */
}
\`\`\`

## Privacy

Het moet voor skip link gebruikers duidelijk zijn als er een _cookie consent_ is op de pagina, je wilt niet dat deze belangrijke functionaliteit wordt overgeslagen.

## Links

- [WCAG 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): een \`link\` role wordt gebruikt, het liefst door het \`a\` HTML-element met een _fragment identifier_ URL: \`<a href="#target">\`. Gebruik niet \`button\`.
- [WCAG 1.3.2](https://www.w3.org/TR/WCAG21/#meaningful-sequence): een _cookie consent_ formulier moet als eerste komen, de skip link als tweede.
- [WCAG 2.4.1](https://www.w3.org/TR/WCAG21/#bypass-blocks): gebruik een _skip link_ op alle pagina's waar voor de unieke inhoud van die pagina er herhalende informatie staat, zoals een header of navigatie.
- [WCAG 2.4.3](https://www.w3.org/TR/WCAG21/#focus-order): een _cookie consent_ moet als eerste focus krijgen, direct daarna de skip links. Zet de HTML van de _skip link_ vooraan in het document. Gebruik niet \`tabindex\` om de gewenste focus volgorde te bereiken, want dat kan problemen opleveren met bijvoorbeeld _cookie consent_ formulieren.
- [WCAG 2.4.7](https://www.w3.org/TR/WCAG21/#focus-visible): de _skip link_ is zichtbaar wanneer die focus heeft. Het visueel ontwerp maakt duidelijk dat het element focus heeft, doordat de stijl consistent is met andere links wanneer ze focus hebben. De skip link mag ook altijd zichtbaar zijn, het is niet verplicht ze standaard te verbergen.
- [WCAG 2.5.2](https://www.w3.org/TR/WCAG21/#pointer-cancellation): een skip link moet geactiveerd worden bij \`click\`, niet bij \`mousedown\`.
- [WCAG 2.5.2](https://www.w3.org/TR/WCAG21/#label-in-name)
- [WCAG 2.5.5](https://www.w3.org/TR/WCAG21/#target-size): skip link afmeting is ten minste 44×44px.
- [WCAG 3.2.3](https://www.w3.org/TR/WCAG21/#consistent-navigation): skip link wordt consistent gebruikt op elke pagina.
- [WCAG 3.1.3](https://www.w3.org/TR/WCAG21/#unusual-words): gebruik duidelijke taal voor het label. Bijvoorbeeld niet: "Direct naar de secundaire content met widgets".
- [WCAG 3.2.4](https://www.w3.org/TR/WCAG21/#consistent-identification): gebruik dezelfde labels voor de _skip link_ op alle pagina's. Bijvoorbeeld niet: "Navigatie overslaan" op een gedeelte van de site, en "Naar de inhoud" op andere pagina's.
`,c={"skip-link":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"min-block-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"min-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"text-decoration":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"none | underline",inherits:!0}}},"z-index":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!1},"nl.nldesignsystem.fallback":["utrecht.layer.focus.z-index"]},focus:{"text-decoration":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"none | underline",inherits:!0}}}}}}},u={utrecht:c},h=l=>d("div",{style:{minHeight:"240px",minWidth:"320px",position:"relative",willChange:"transform"},children:l()}),b={title:"React Component/Skip link",id:"react-skip-link",component:k,argTypes:{href:{name:"href",type:{name:"string",required:!0},table:{category:"HTML attribute",defaultValue:{summary:""}}}},decorators:[h],args:{href:"#main",children:"Skip to main content"},parameters:{pseudo:{focus:!0,focusVisible:!0},tokensPrefix:"utrecht-skip-link",tokens:p,tokensDefinition:u,docs:{description:{component:m}}}},e={},n=g(b);var i,t,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var a,o,r;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:"designTokenStory(meta)",...(r=(o=n.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const W=["Default","DesignTokens"];export{e as Default,n as DesignTokens,W as __namedExportsOrder,b as default};
//# sourceMappingURL=SkipLink.stories-0c0bdfc3.js.map

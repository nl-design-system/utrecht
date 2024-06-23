import{o as zt}from"./index-d4eddc94.js";import{t as Pt,d as Tt}from"./util-5e729490.js";import"./slicedToArray-b6353f72.js";import"./defineProperty-84a138b7.js";import"./clsx.m-892aa8a5.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-29545a09.js";import"./objectDestructuringEmpty-24e23e90.js";import"./extends-98964cd2.js";import"./index-9d475cdf.js";const Gt=`<!-- @license CC0-1.0 -->

# Button

De button component gebruik je zodat de gebruiker acties kan uit te voeren en de _user interface_ kan bedienen.

Vaak gebruik je een button in combinatie met de _button group_ component: plaats de button in een _button group_ als je ruimte tussen de button en andere componenten wilt.

## Toepassing

### Gebruik je een button of link?

Sommige ontwerpen hebben een button om naar een andere pagina te gaan. Sommige ontwerpen hebben link in een formulier om naar de vorige pagina te gaan, terwijl de gegevens wel tussentijds verstuurd en opgeslagen worden. Het is belangrijk dat je het goede HTML-element gebruikt dat past bij de actie, in plaats van het HTML-element kiest dat past bij het ontwerp.

Om deze patronen te gebruiken zijn er vier componenten nodig:

- link
- link die eruit ziet als button
- button
- button die eruit ziet als link

Gebruik alleen een \`<a>\` element wanneer er geen gevolgen zijn. Gebruik een \`<button>\` element als je niet de browser back button kan gebruiken om het effect ongedaan te maken.

Enkele voorbeelden waar je een link gebruikt:

- een _call to action_ om te registreren: een link.
- een knop om naar het loginformulier te gaan: een link
- dezelfde pagina in een andere taal bekijken: een link.

Enkele voorbeelden waar je een button gebruikt:

- "Volgende stap" of "vorige stap" in een formulier. Gebruik een submit button wanneer gegevens tussendoor opgeslagen worden of verstuurd worden.
- Uitloggen: button. Log niet uit met een link! Je navigatie moet het ondersteunen om zowel links als button dezelfde stijl te geven.
- de voorkeurstaal aanpassen en dezelfde pagina in een andere taal bekijken: een button.

## Anatomie

### Terminologie

- **button**: van het \`<button>\` HTML element, \`role="button"\` in ARIA.
- **appearance**: van de [CSS \`appearance\` property](https://developer.mozilla.org/en-US/docs/Web/CSS/appearance) (bijvoorbeeld: \`appearance: push-button\`).

### States

- \`normal\`
- \`active\`: de gebruiker activeert de button op dit moment. Bijvoorbeeld door er op te klikken. De \`active\` state duurt maar heel kort.
- \`pressed\`: een ingedrukte button, bijvoorbeeld de _bold button_ in een toolbar van een rich text editor, of de button van een date picker popup. Een button kan lange tijd \`pressed\` zijn, in tegenstelling tot \`active\`.
- \`hover\`: de gebruiker heeft de aanwijzer boven de button. Bijvoorbeeld door met de muiscursor er over te 'zweven'.
- \`focus\`
- \`focus\` en \`focus-visible\`: de link heeft de focus door de \`Tab\` knop van het keyboard.
- \`disabled\`
- \`disabled\` en \`focus-visible\`: als een button disabled is (zeker een _primary action button_), dan moet wel duidelijk zijn dat de button er is en wat je kunt doen om verder te komen. Screen reader gebruikers moeten daarom focus kunnen hebben op een disabled button, om de bijbehorende uitleg te horen.

## Design

Maak elke button 44×44px of groter ([WCAG 2.5.5](https://www.w3.org/TR/WCAG21/#target-size)).

## HTML

Gebruik het \`<button type="button">\` element in HTML om een button te maken.

Een alternatief op \`<button>\` is bijvoorbeeld \`<input type="button">\`, maar die heeft minder mogelijkheden voor de inhoud van de button. Je kunt er bijvoorbeeld geen SVG icon in plaatsen. Nog een alternatief is \`<div role="button" tabindex="0">\`, maar \`<button>\` heeft het voordeel dat die ook werkt zonder CSS en zonder JavaScript.

### Formulieren verzenden

Voor formulieren verzenden gebruik je \`<button type="submit">\`. Gebruik ook de \`submit\` event van een formulier en niet alleen de \`click\` event van de button, zodat je ook vanuit een formulierveld op \`Enter\` kan drukken om het formulier te verzenden.

## Hoe het niet moet

### Geen koppeling met uitleg over button

Niet:

\`\`\`html
<p>
  <label for="upload">Bijlage:</label>
  <input type="file" id="upload" />
</p>
<p>Je mag een JPG of een PDF uploaden.</p>
\`\`\`

Wel:

\`\`\`html
<p>
  <label for="upload">Bijlage:</label>
  <input type="file" id="upload" aria-describedby="upload-description" />
</p>
<p id="upload-description">Je mag een JPG of een PDF uploaden.</p>
\`\`\`

---

Niet:

\`\`\`html
<p>
  <button type="submit">Verzenden</button>
</p>
<p>Door het formulier te verzenden ga je akkoord met de algemene voorwaarden.</p>
\`\`\`

Wel:

\`\`\`html
<p>
  <button type="submit" aria-describedby="submit-description">Verzenden</button>
</p>
<p id="submit-description">Door het formulier te verzenden ga je akkoord met de algemene voorwaarden.</p>
\`\`\`

### Geen koppeling met foutmelding bij een button

Niet:

\`\`\`html
<p>
  <button type="submit">Opslaan</button>
</p>
<p class="error">Je bent uitgelogd. Log opnieuw in om je wijzigingen op te slaan.</p>
\`\`\`

Wel:

\`\`\`html
<p>
  <label for="upload">Bijlage:</label>
  <input type="file" id="upload" aria-describedby="upload-description" />
</p>
<p id="upload-description" class="error">Je mag een JPG of een PDF uploaden.</p>
\`\`\`

## Relevante WCAG regels

- [WCAG eis 2.1.3](https://www.w3.org/TR/WCAG21/#keyboard-no-exception): je kan de button activeren met \`Enter\` of \`Space\`, en het is mogelijk met \`Tab\` de button te focussen. \`Space\` gebruiken heeft dan niet het effect dat de pagina scrollt.
- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): de label van de button moet duidelijk zijn
- [WCAG eis 2.5.2](https://www.w3.org/TR/WCAG21/#pointer-cancellation):
  - gebruik niet de \`mousedown\` event om de button te activeren, gebruik liever de \`click\` event
  - \`mousedown\` mag alleen gebruikt worden als \`mouseup\` het effect weer ongedaan maakt, bijvoorbeeld een "_fast foward_" button om audio of video door te spoelen.
- [WCAG eis 2.5.5](https://www.w3.org/TR/WCAG21/#target-size): de button moet groot genoeg zijn om aan te klikken, en kleine buttons moeten niet te dicht op een andere button staan.
`,Vt={button:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"borderRadius"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"borderWidth"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}},type:"fontFamilies"},"font-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"fontSizes"},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}},type:"fontWeights"},"inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"line-height":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"lineHeights"},"margin-block-start":{$extensions:{"nl.nldesignsystem.hidden":!0,"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-block-end":{$extensions:{"nl.nldesignsystem.hidden":!0,"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-inline-start":{$extensions:{"nl.nldesignsystem.hidden":!0,"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"margin-inline-end":{$extensions:{"nl.nldesignsystem.hidden":!0,"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"min-block-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"sizing"},"min-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"sizing"},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},"text-transform":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"inherit | uppercase",inherits:!0}}},active:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.background-color"]},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.border-color"]},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.color"]},type:"color"}},icon:{gap:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"spacing"},size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"sizing"}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.background-color"]},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.border-color"]},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.color"]},type:"color"}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.background-color"]},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.border-color"]},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.color"]},type:"color"},scale:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!1}}},hover:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.background-color"]},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.border-color"]},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.color"]},type:"color"},scale:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!1}}},pressed:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.background-color"]},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.border-color"]},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.color"]},type:"color"}},"primary-action":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.background-color"]},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.border-color"]},type:"color"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.border-width"]}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.color"]},type:"color"},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.font-weight"]},type:"fontWeights"},active:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.active.background-color","utrecht.button.primary-action.background-color","utrecht.button.background-color"]},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.active.border-color","utrecht.button.primary-action.border-color","utrecht.button.border-color"]},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.active.color","utrecht.button.primary-action.color","utrecht.button.color"]},type:"color"}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.disabled.background-color","utrecht.button.primary-action.background-color","utrecht.button.background-color"]},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.disabled.border-color","utrecht.button.primary-action.border-color","utrecht.button.border-color"]},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.disabled.color","utrecht.button.primary-action.color","utrecht.button.color"]},type:"color"}},hover:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.hover.background-color","utrecht.button.primary-action.background-color","utrecht.button.background-color"]},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.hover.border-color","utrecht.button.primary-action.border-color","utrecht.button.border-color"]},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.active.color","utrecht.button.primary-action.color","utrecht.button.color"]},type:"color"},scale:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.focus.background-color","utrecht.button.primary-action.background-color","utrecht.button.background-color"]},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.focus.border-color","utrecht.button.primary-action.border-color","utrecht.button.border-color"]},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.focus.color","utrecht.button.primary-action.color","utrecht.button.color"]},type:"color"}},pressed:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.pressed.background-color","utrecht.button.primary-action.background-color","utrecht.button.background-color"]},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.pressed.border-color","utrecht.button.primary-action.border-color","utrecht.button.border-color"]},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.pressed.color","utrecht.button.primary-action.color","utrecht.button.color"]},type:"color"}}},"secondary-action":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.background-color"]},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.border-color"]},type:"color"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.border-width"]}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.color"]},type:"color"},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.font-weight"]},type:"fontWeights"},active:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.active.background-color","utrecht.button.secondary-action.background-color","utrecht.button.background-color"]},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.active.border-color","utrecht.button.secondary-action.border-color","utrecht.button.border-color"]},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.active.color","utrecht.button.secondary-action.color","utrecht.button.color"]},type:"color"}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.disabled.background-color","utrecht.button.secondary-action.background-color","utrecht.button.background-color"]},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.disabled.border-color","utrecht.button.secondary-action.border-color","utrecht.button.border-color"]},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.disabled.color","utrecht.button.secondary-action.color","utrecht.button.color"]},type:"color"}},hover:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.hover.background-color","utrecht.button.secondary-action.background-color","utrecht.button.background-color"]},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.hover.border-color","utrecht.button.secondary-action.border-color","utrecht.button.border-color"]},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.hover.color","utrecht.button.secondary-action.color","utrecht.button.color"]},type:"color"}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.focus.background-color","utrecht.button.secondary-action.background-color","utrecht.button.background-color"]},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.focus.border-color","utrecht.button.secondary-action.border-color","utrecht.button.border-color"]},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.focus.color","utrecht.button.secondary-action.color","utrecht.button.color"]},type:"color"}},pressed:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.pressed.background-color","utrecht.button.secondary-action.background-color","utrecht.button.background-color"]},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.pressed.border-color","utrecht.button.secondary-action.border-color","utrecht.button.border-color"]},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.pressed.color","utrecht.button.secondary-action.color","utrecht.button.color"]},type:"color"}}},subtle:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.background-color"]},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.border-color"]},type:"color"},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.border-width"]}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.color"]},type:"color"},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.font-weight"]},type:"fontWeights"},active:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.active.background-color","utrecht.button.subtle.background-color","utrecht.button.background-color"]},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.active.border-color","utrecht.button.subtle.border-color","utrecht.button.border-color"]},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.active.color","utrecht.button.subtle.color","utrecht.button.color"]},type:"color"}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.disabled.background-color","utrecht.button.subtle.background-color","utrecht.button.background-color"]},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.disabled.border-color","utrecht.button.subtle.border-color","utrecht.button.border-color"]},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.disabled.color","utrecht.button.subtle.color","utrecht.button.color"]},type:"color"}},hover:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.hover.background-color","utrecht.button.subtle.background-color","utrecht.button.background-color"]},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.hover.border-color","utrecht.button.subtle.border-color","utrecht.button.border-color"]},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.hover.color","utrecht.button.subtle.color","utrecht.button.color"]},type:"color"}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.focus.background-color","utrecht.button.subtle.background-color","utrecht.button.background-color"]},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.focus.border-color","utrecht.button.subtle.border-color","utrecht.button.border-color"]},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.focus.color","utrecht.button.subtle.color","utrecht.button.color"]},type:"color"}},pressed:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.pressed.background-color","utrecht.button.subtle.background-color","utrecht.button.background-color"]},type:"color"},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.pressed.border-color","utrecht.button.subtle.border-color","utrecht.button.border-color"]},type:"color"},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.button.pressed.color","utrecht.button.subtle.color","utrecht.button.color"]},type:"color"}}}}},Ft={utrecht:Vt},Wt={title:"React Component/Button",id:"react-button",component:zt,args:{children:"Read more..."},parameters:{tokensPrefix:"utrecht-button",tokens:Pt,tokensDefinition:Ft,docs:{description:{component:Gt}}},argTypes:{appearance:{control:{type:"select"},options:[void 0,"primary-action-button","secondary-action-button","subtle-button"]},type:{control:{type:"select"},options:[void 0,"button","submit","reset"]}}},e={},n={args:{disabled:!0,children:"Read more..."}},r={args:{pressed:!1,children:"Toggle something"}},o={args:{pressed:!0,children:"Toggle something"}},s={args:{children:"Read more...",busy:!0}},a={parameters:{pseudo:{hover:!0}},args:{...e.args}},c={parameters:{pseudo:{focus:!0}},args:{...e.args}},l={parameters:{pseudo:{active:!0}},args:{...e.args}},i={parameters:{pseudo:{focusVisible:!0,focus:!0}},args:{...e.args}},u={args:{...e.args,appearance:"primary-action-button"}},d={args:{...e.args,appearance:"primary-action-button",disabled:!0}},p={args:{...e.args,appearance:"primary-action-button",pressed:!0}},b={args:{...e.args,appearance:"primary-action-button",busy:!0}},y={parameters:{pseudo:{hover:!0}},args:{...e.args,appearance:"primary-action-button"}},g={parameters:{pseudo:{focus:!0}},args:{...e.args,appearance:"primary-action-button"}},m={parameters:{pseudo:{active:!0},args:{...e.args,appearance:"primary-action-button"}}},h={parameters:{pseudo:{focusVisible:!0,focus:!0}},args:{...e.args,appearance:"primary-action-button"}},k={args:{...e.args,appearance:"secondary-action-button"}},f={args:{...e.args,appearance:"secondary-action-button",disabled:!0}},x={args:{...e.args,appearance:"secondary-action-button",pressed:!0}},v={args:{...e.args,appearance:"secondary-action-button",busy:!0}},$={parameters:{pseudo:{hover:!0}},args:{...e.args,appearance:"secondary-action-button"}},S={parameters:{pseudo:{focus:!0}},args:{...e.args,appearance:"secondary-action-button"}},D={parameters:{pseudo:{active:!0}},args:{...e.args,appearance:"secondary-action-button"}},w={parameters:{pseudo:{focusVisible:!0,focus:!0}},args:{...e.args,appearance:"secondary-action-button"}},A={args:{...e.args,appearance:"subtle-button"}},t={args:{...e.args,appearance:"subtle-button",disabled:!0}},j={args:{...e.args,appearance:"subtle-button",pressed:!0}};t.args={children:"Read more...",appearance:"subtle-button",disabled:!0};const z={args:{...e.args,appearance:"subtle-button",busy:!0}},P={parameters:{pseudo:{hover:!0}},args:{...e.args,appearance:"subtle-button"}},T={parameters:{pseudo:{focus:!0}},args:{...e.args,appearance:"subtle-button"}},G={parameters:{pseudo:{active:!0}},args:{...e.args,appearance:"subtle-button"}},V={parameters:{pseudo:{focusVisible:!0,focus:!0}},args:{...e.args,appearance:"subtle-button"}},F=Tt(Wt);var W,C,B;e.parameters={...e.parameters,docs:{...(W=e.parameters)==null?void 0:W.docs,source:{originalSource:"{}",...(B=(C=e.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var H,_,R;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Read more...'
  }
}`,...(R=(_=n.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var J,E,L;r.parameters={...r.parameters,docs:{...(J=r.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    pressed: false,
    children: 'Toggle something'
  }
}`,...(L=(E=r.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var M,N,O;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    pressed: true,
    children: 'Toggle something'
  }
}`,...(O=(N=o.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var U,I,q;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    children: 'Read more...',
    busy: true
  }
}`,...(q=(I=s.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var K,Q,X;a.parameters={...a.parameters,docs:{...(K=a.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: true
    }
  },
  args: {
    ...Default.args
  }
}`,...(X=(Q=a.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focus: true
    }
  },
  args: {
    ...Default.args
  }
}`,...(ee=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,re;l.parameters={...l.parameters,docs:{...(te=l.parameters)==null?void 0:te.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      active: true
    }
  },
  args: {
    ...Default.args
  }
}`,...(re=(ne=l.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var oe,se,ae;i.parameters={...i.parameters,docs:{...(oe=i.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focusVisible: true,
      focus: true
    }
  },
  args: {
    ...Default.args
  }
}`,...(ae=(se=i.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ce,le,ie;u.parameters={...u.parameters,docs:{...(ce=u.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'primary-action-button'
  }
}`,...(ie=(le=u.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ue,de,pe;d.parameters={...d.parameters,docs:{...(ue=d.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'primary-action-button',
    disabled: true
  }
}`,...(pe=(de=d.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var be,ye,ge;p.parameters={...p.parameters,docs:{...(be=p.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'primary-action-button',
    pressed: true
  }
}`,...(ge=(ye=p.parameters)==null?void 0:ye.docs)==null?void 0:ge.source}}};var me,he,ke;b.parameters={...b.parameters,docs:{...(me=b.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'primary-action-button',
    busy: true
  }
}`,...(ke=(he=b.parameters)==null?void 0:he.docs)==null?void 0:ke.source}}};var fe,xe,ve;y.parameters={...y.parameters,docs:{...(fe=y.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'primary-action-button'
  }
}`,...(ve=(xe=y.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var $e,Se,De;g.parameters={...g.parameters,docs:{...($e=g.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focus: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'primary-action-button'
  }
}`,...(De=(Se=g.parameters)==null?void 0:Se.docs)==null?void 0:De.source}}};var we,Ae,je;m.parameters={...m.parameters,docs:{...(we=m.parameters)==null?void 0:we.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      active: true
    },
    args: {
      ...Default.args,
      appearance: 'primary-action-button'
    }
  }
}`,...(je=(Ae=m.parameters)==null?void 0:Ae.docs)==null?void 0:je.source}}};var ze,Pe,Te;h.parameters={...h.parameters,docs:{...(ze=h.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focusVisible: true,
      focus: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'primary-action-button'
  }
}`,...(Te=(Pe=h.parameters)==null?void 0:Pe.docs)==null?void 0:Te.source}}};var Ge,Ve,Fe;k.parameters={...k.parameters,docs:{...(Ge=k.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'secondary-action-button'
  }
}`,...(Fe=(Ve=k.parameters)==null?void 0:Ve.docs)==null?void 0:Fe.source}}};var We,Ce,Be;f.parameters={...f.parameters,docs:{...(We=f.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'secondary-action-button',
    disabled: true
  }
}`,...(Be=(Ce=f.parameters)==null?void 0:Ce.docs)==null?void 0:Be.source}}};var He,_e,Re;x.parameters={...x.parameters,docs:{...(He=x.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'secondary-action-button',
    pressed: true
  }
}`,...(Re=(_e=x.parameters)==null?void 0:_e.docs)==null?void 0:Re.source}}};var Je,Ee,Le;v.parameters={...v.parameters,docs:{...(Je=v.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'secondary-action-button',
    busy: true
  }
}`,...(Le=(Ee=v.parameters)==null?void 0:Ee.docs)==null?void 0:Le.source}}};var Me,Ne,Oe;$.parameters={...$.parameters,docs:{...(Me=$.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'secondary-action-button'
  }
}`,...(Oe=(Ne=$.parameters)==null?void 0:Ne.docs)==null?void 0:Oe.source}}};var Ue,Ie,qe;S.parameters={...S.parameters,docs:{...(Ue=S.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focus: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'secondary-action-button'
  }
}`,...(qe=(Ie=S.parameters)==null?void 0:Ie.docs)==null?void 0:qe.source}}};var Ke,Qe,Xe;D.parameters={...D.parameters,docs:{...(Ke=D.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      active: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'secondary-action-button'
  }
}`,...(Xe=(Qe=D.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ye,Ze,et;w.parameters={...w.parameters,docs:{...(Ye=w.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focusVisible: true,
      focus: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'secondary-action-button'
  }
}`,...(et=(Ze=w.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,nt,rt;A.parameters={...A.parameters,docs:{...(tt=A.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'subtle-button'
  }
}`,...(rt=(nt=A.parameters)==null?void 0:nt.docs)==null?void 0:rt.source}}};var ot,st,at;t.parameters={...t.parameters,docs:{...(ot=t.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'subtle-button',
    disabled: true
  }
}`,...(at=(st=t.parameters)==null?void 0:st.docs)==null?void 0:at.source}}};var ct,lt,it;j.parameters={...j.parameters,docs:{...(ct=j.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'subtle-button',
    pressed: true
  }
}`,...(it=(lt=j.parameters)==null?void 0:lt.docs)==null?void 0:it.source}}};var ut,dt,pt;z.parameters={...z.parameters,docs:{...(ut=z.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: 'subtle-button',
    busy: true
  }
}`,...(pt=(dt=z.parameters)==null?void 0:dt.docs)==null?void 0:pt.source}}};var bt,yt,gt;P.parameters={...P.parameters,docs:{...(bt=P.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'subtle-button'
  }
}`,...(gt=(yt=P.parameters)==null?void 0:yt.docs)==null?void 0:gt.source}}};var mt,ht,kt;T.parameters={...T.parameters,docs:{...(mt=T.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focus: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'subtle-button'
  }
}`,...(kt=(ht=T.parameters)==null?void 0:ht.docs)==null?void 0:kt.source}}};var ft,xt,vt;G.parameters={...G.parameters,docs:{...(ft=G.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      active: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'subtle-button'
  }
}`,...(vt=(xt=G.parameters)==null?void 0:xt.docs)==null?void 0:vt.source}}};var $t,St,Dt;V.parameters={...V.parameters,docs:{...($t=V.parameters)==null?void 0:$t.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focusVisible: true,
      focus: true
    }
  },
  args: {
    ...Default.args,
    appearance: 'subtle-button'
  }
}`,...(Dt=(St=V.parameters)==null?void 0:St.docs)==null?void 0:Dt.source}}};var wt,At,jt;F.parameters={...F.parameters,docs:{...(wt=F.parameters)==null?void 0:wt.docs,source:{originalSource:"designTokenStory(meta)",...(jt=(At=F.parameters)==null?void 0:At.docs)==null?void 0:jt.source}}};const Ut=["Default","DefaultDisabled","DefaultToggle","DefaultTogglePressed","DefaultBusy","DefaultHover","DefaultFocus","DefaultActive","DefaultFocusVisible","PrimaryActionDefault","PrimaryActionDisabled","PrimaryActionPressed","PrimaryActionBusy","PrimaryActionHover","PrimaryActionFocus","PrimaryActionActive","PrimaryActionFocusVisible","SecondaryActionDefault","SecondaryActionDisabled","SecondaryActionPressed","SecondaryActionBusy","SecondaryActionHover","SecondaryActionFocus","SecondaryActionActive","SecondaryActionFocusVisible","SubtleDefault","SubtleDisabled","SubtlePressed","SubtleBusy","SubtleHover","SubtleFocus","SubtleActive","SubtleFocusVisible","DesignTokens"];export{e as Default,l as DefaultActive,s as DefaultBusy,n as DefaultDisabled,c as DefaultFocus,i as DefaultFocusVisible,a as DefaultHover,r as DefaultToggle,o as DefaultTogglePressed,F as DesignTokens,m as PrimaryActionActive,b as PrimaryActionBusy,u as PrimaryActionDefault,d as PrimaryActionDisabled,g as PrimaryActionFocus,h as PrimaryActionFocusVisible,y as PrimaryActionHover,p as PrimaryActionPressed,D as SecondaryActionActive,v as SecondaryActionBusy,k as SecondaryActionDefault,f as SecondaryActionDisabled,S as SecondaryActionFocus,w as SecondaryActionFocusVisible,$ as SecondaryActionHover,x as SecondaryActionPressed,G as SubtleActive,z as SubtleBusy,A as SubtleDefault,t as SubtleDisabled,T as SubtleFocus,V as SubtleFocusVisible,P as SubtleHover,j as SubtlePressed,Ut as __namedExportsOrder,Wt as default};
//# sourceMappingURL=Button.stories-ec5d9c9d.js.map

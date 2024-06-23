import{L as Z}from"./index-d4eddc94.js";import{t as Q,d as ee}from"./util-5e729490.js";import"./slicedToArray-b6353f72.js";import"./defineProperty-84a138b7.js";import"./clsx.m-892aa8a5.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-29545a09.js";import"./objectDestructuringEmpty-24e23e90.js";import"./extends-98964cd2.js";import"./index-9d475cdf.js";const ne=`<!-- @license CC0-1.0 -->

# Link

Met de link maak je navigatie mogelijk naar een gerelateerde pagina.

## Activeren met _touch_

Veel gebruikers activeren de link door te klikken op een _touch screen_. Deze gebruikers zien niet de _hover_ state van een link, dus een link moet ook duidelijk herkenbaar zijn zonder ooit het design van de _hover_ state te zien.

## Activeren met toetsenbord

Sommige gebruikers gebruiken het toetsenbord om telkens met één druk op de knop naar de volgende link te gaan. De \`focus-visible\` variant moet daarom opvallend zijn, zodat je weet welke link je kunt activeren met \`Enter\`. Links moet je kunnen activeren met \`Enter\`, maar niet met \`Space\`.

## Activeren met een muis

Gebuikers met een muis kunnen de _hover_ state zien wanneer de muisaanwezer over de link heen beweegt. Links met een \`title\` attribuut kunnen dan een tooltip tonen die in de weg zit (gebruik daarom geen \`title\` attribuut).

Gebruikers die zowel toetsenbord als muis gebruiken moeten kunnen onderscheiden welke link focus heeft, en welke de _hover_ state heeft.

## Activeren met een _screen reader_

Sommige gebruikers gebruiken een lijst van alle links op een pagina, en kiezen een link uit op basis van de link-tekst. Deze gebruikers bekijken niet de hele pagina, en zien niet altijd de link in de context van de omliggende tekst. Daarom is het belangrijk dat de link-tekst op zichzelf duidelijk maakt welke pagina je opent. Om de juiste link te kunnen kiezen, is het ook belangrijk dat niet dezelfde link-tekst wordt gebruikt voor verschillende links. Gebruik dus niet "Lees meer" als link-tekst, die tekst is meestal niet uniek op een pagina en is onduidelijk zonder context.

## Terug met de _Back button_

Na het activeren van een link, moet een gebruiker weer terug kunnen naar de vorige pagina. Gebruikers doen dat met bijvoorbeeld de _back button_ van de browser, of met een _swipe gesture_ op een _touch screen_.

Als je gewoon \`<a href="...">\` in HTML gebruikt dan werkt de back button zoals het hoort. Met extra code kun je de back button onbedoeld kapot maken. Als je het \`target\` attribuut gebruikt, dan werkt de _back button_ niet (bijvoorbeeld: \`target="_blank"\`).

Als je een _single page app_ maakt moet je goed testen dat de back button nog goed werkt. Wanneer je de \`click\` event van de link stopt met \`event.preventDefault()\` en met script een eigen navigatie maakt, dan moet je de [History API](https://developer.mozilla.org/en-US/docs/Web/API/History) gebruiken om een even goede ervaring te bieden als gewone links in HTML.

## Er zijn veel soorten links

Je kunt links groeperen in de navigatie-regio van de pagina, zodat gebruikers snel vinden welke informatie er nog meer is. Je kunt links plaatsen in de lopende tekst. Je kunt overzichtelijke lijstjes met links plaatsen in de tekst. Je kunt links plaatsen naar dezelfde informatie in een ander formaat of in een andere taal. Je kunt van hele blokken een link maken, om die informatie in detail te openen.

## Link versus button

Links worden vooral gebruikt om te navigeren en verschijnen dan ook in of direct na een zin.

Buttons worden gebruikt voor acties, zoals 'toevoegen', 'sluiten' of 'opslaan'.

## Design

### Onderstreep de link

Links zijn het meest herkenbaar als je de tekst van de link onderstreept, want dat is gebruikelijk sinds het begin van het web. Gebruik een kleur met voldoende contrast voor de streep, zodat iedereen die de tekst kan zien ook de streep kan zien. De kleur van de streep kan minder contrast hebben als de streep dikker is.

Een streep die door de letters gaat maakt de tekst minder leesbaar. Gebruikers met dyslexie kunnen woorden beter herkennen als het woordbeeld niet wordt aangetast. Maak het woordbeeld van links rustiger met de volgende twee CSS properties. Je kunt met \`text-decoration-skip-ink\` in CSS de streep automatisch laten onderbreken, zodat je voorkomt dat woorden een beetje doorstreept worden. Met \`text-underline-offset\` kun je de afstand tussen de streep en de letters iets groter maken, zodat een onderbroken streep minder vaak nodig is.

Links die staan op een herkenbare plek zoals de hoofdnavigatie, zijn vaak al herkenbaar als link wanneer ze niet onderstreept zijn. Je kunt extra duidelijk maken dat het een link is door de tekst alsnog onderstrepen als \`hover\` of \`focus\` effect, zodat een gebruiker zeker weet dat de browser mogelijkheden heeft zoals "Openen deze link in een nieuwe tab" of "Deel deze link".

Heeft de link een icoon én tekst, onderstreep dan alleen de tekst.

### Geen icoon voor externe links

Gebruik geen speciaal icoon bij links naar een externe website. Door [onderzoek naar externe links van GOV.UK](https://designnotes.blog.gov.uk/2016/11/28/removing-the-external-link-icon-from-gov-uk/) weten we dat gebruikers hier weinig voordeel van hebben.

### \`hover\` en \`focus\`

Wanneer een gebruiker met de muis over een link gaat (\`hover\`), of met het toetsenbord een link selecteert (\`focus\`), dan is het belangrijk dat er geen onvoorspelbare wijzigingen in de layout zijn.

Gebruik voor \`hover\` en \`focus\` geen effecten waardoor de tekst van de link over meer regels wordt verdeeld, of waardoor de tekst na de link verschuift. Gebruik daarom geen andere \`font-size\` of \`font-weight\` als effect.

Gebruik voor \`hover\` en \`focus\` geen effect waardoor de positie van de link verschuift, waardoor het moeilijk wordt de link aan te klikken.

### Contrast met elke achtergrondkleur

Links kunnen staan in componenten die een speciale achtergrondkleur hebben, zoals componenten met een signaalkleur als achtergrond. De linkkleur moet voldoende contrast hebben met die achtergrondkleuren. Controleer alle mogelijke varianten, want misschien moet je in die situaties een bijpassende link-kleur kiezen.

## Content

### Gebruik van links in tekst

Links moeten duidelijk zijn: gebruikers begrijpen dat je de link gebruikt om naar een andere pagina te gaan, en het is voorspelbaar naar welke pagina je toe gaat.

Gebruikers met ondersteunende technologie, zoals een schermlezer of braillebalk, horen/voelen vaak als eerste alle links in de content om hen te helpen snel te kunnen navigeren door de content. Er kan ook behoefte zijn om de de content vergroot te willen bekijken, zodat de gebruikers alleen de linktekst en een paar woorden eromheen tegelijkertijd kan zien.

Maak geen links met een onduidelijke tekst, zoals "hier" of "lees meer".

### Links in een zin

Links moeten nooit een hele zin in beslag nemen, maar alleen de tekst die beschrijft waar de gebruikers naar toe gaan als ze op de link klikken.

### Do's

- Plaats links aan het einde van een zin als dat mogelijk is.
- Maak duidelijk waar de link je naar toe brengt.
- Gebruik het meest relevante woord van de link aan het begin van de link tekst. Bezoekers lezen niet verder dan de eerste twee woorden van een link.
- Zorg dat de link ook begrijpelijk is zonder dat je de zinnen er omheen gelezen hebt.

### Don'ts

- Gebruik geen buttons waar je een link kan gebruiken.
- Gebruik geen vage of te algemene termen voor de link tekst. Help de gebruiker met voorspellen waar hij naar toe gaat.
- Open interne links niet in een nieuwe tab. Hiermee schakel je één navigatiemanier uit om terug te gaan naar eerdere pagina's, de terug knop van de brower.

## States

We beschrijven de volgende states van een link:

- **normal**: geen van de onderstaande states is van toepassing op de link. Deze state is gewoon de \`utrecht-link\` class in de code, maar we beschrijven hem hier om aan te geven dat de link 'normaal' is zonder een andere state.
- **active**: de gebruiker activeert de link op dit moment. Bijvoorbeeld door er op te klikken. De \`active\` state duurt maar heel kort.
- **hover**: de gebruiker heeft de aanwijzer boven de link. Bijvoorbeeld door met de muiscursor er over te 'zweven'.
- **focus**: de link heeft de focus doordat er op geklikt of getapt is. Denk ook aan voice of eye-tracking.
- **focus-visible**: de link heeft de focus door de 'tab' knop van het keyboard.
- **visited**: de link is eerder gebruikt door de gebruiker.
- **busy**: de button is geactiveerd en de actie wordt nu nog uitgevoerd.

## Link in plaats van \`<a>\`

Voor de component naam hebben we voor "\`link\`" gekozen, en niet voor "\`a\`" zoals de [\`<a>\`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element) in HTML. Buiten de context van HTML-code (bijvoorbeeld in Figma) is \`a\`niet duidelijk genoeg, en we verwachten niet dat er grote verwarring ontstaat met het [\`<link>\`](https://html.spec.whatwg.org/multipage/semantics.html#the-link-element) element van HTML.

## HTML

- Gebruik het \`<a>\` element om links aan te maken.
- Gebuik niet het \`title\` attribuut. Sommige browsers gebruiken een tooltip om de tekst uit het \`title\` attribuut te tonen, die tooltip kan over de tekst heenstaan waardoor het niet leesbaar is.
- Gebruik nooit een \`<button>\` of een ander element met een \`click\` event om zelf een link na te maken.
- Gebruik \`aria-current="page"\` wanneer de link verwijst naar de huidige pagina. Voor consistente navigatie ([WCAG eis 3.2.3](https://www.w3.org/TR/WCAG21/#consistent-navigation)) is het beter om links in de navigatie te laten staan dan om geen \`<a>\` te gebruiken voor de huidige pagina.
- Vermijd het gebruik van \`href="#"\`. Dit brengt de focus naar het begin van de pagina en dat is nooit wensbaar.
- Gebruik nooit \`tabindex="0"\` bij het \`<a>\` element. Links kunnen al standaard focus ontvangen.
- Vermijd onnodig gebruik van \`tabindex="-1"\`, er zijn weinig situaties waar het nodig is.
- Gebruik \`aria-label\` en niet \`title\` voor het volledige label van de link. Soms is de inhoud van het \`a\` element niet een goed label, bijvoorbeeld wanneer er een icoon in staat of het zichtbare label een algemene tekst is zoals "Lees meer". Zie ook [WCAG Technique ARIA8](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA8)

### \`tabindex="-1"\`

Gebruik \`tabindex="-1"\` in zeldzame gevallen dat het gebruiksvriendelijker is om een link weg te halen uit tabvolgorde. Toetsenbordgebruikers moeten toegang hebben tot dezelfde links als gebruikers van een muis.

Als het nodig is twee identieke links kort na elkaar te plaatsen, dan is het onnodig en onhandig dat dezelfde link twee keer na elkaar focus krijgt. In dat geval is het beter om één van de links uit de tabvolgorde te verwijderen.

Bijvoorbeeld:

\`\`\`html
<article>
  <h2 id="heading-puppy-geboren"><a href="/nieuws/monster-puppy">Puppy met zes poten</a></h2>
  <p>
    In de gemeente Monster is een puppy geboren met zes poten.
    <a href="/nieuws/monster-puppy" tabindex="-1" aria-labelledby="heading-puppy-geboren">Lees verder...</a>
  </p>
</article>
\`\`\`

## Privacy

Als de \`visited\` een ander visueel ontwerp heeft dan een normale link, dan kunnen anderen zien welke pagina's zijn bekeken. Gebruik daarom liever geen \`visited\` design tokens voor websites waar de privacy van de gebruiker in gevaar komt.

Als je een linkt maakt naar een externe website, dan kan die website zien op welke pagina de bezoeker op dat moment was. Dit is slecht voor de privacy, gebruik daarom altijd gebruik van de "externe link" code om deze informatie af te schermen.

## Hoe het niet moet

### Geen zichtbaar verschil tussen hover en focus state

Als toetsenbordgebruiker is het belangrijk dat je weet welke link je activeert als je op \`Enter\` drukt. Als de hover-variant van de link (bijna) hetzelfde is als de focus-variant, dan weet je niet zeker welke link je zult activeren.

### Link-tekst betekent verschillende dingen

Niet goed: "contact" linkt eerst naar de contact-pagina, verder op linkt "contact" naar een telefoonnummer.

\`\`\`html
<nav>
  <a href="/contact/">contact</a>
</nav>
<!-- ...op een andere plek in dezelfde pagina -->
<p>Neem <a href="tel:555-1234">contact</a> op met de klantenservice, vandaag tot 6 uur bereikbaar.</p>
\`\`\`

Beter:

\`\`\`html
<nav>
  <a href="/contact/">contact</a>
</nav>
<!-- ...op een andere plek in dezelfde pagina -->
<p><a href="tel:555-1234">Bel de klantenservice</a>, vandaag tot 6 uur bereikbaar.</p>
\`\`\`

### Verkeerde taal

Als je linkt naar een pagina waarvan de beschrijving in een andere taal is dan de context waarin de link staat, dan moet je de taal instellen op de link zelf (WCAG 3.1.2).

Niet:

\`\`\`html
<a href="/nl/">Nederlands</a>
<a href="/en/">English</a>
<a href="/fr/">François</a>
\`\`\`

Wel:

\`\`\`html
<a href="/nl/">Nederlands</a>
<a href="/en/" lang="en">English</a>
<a href="/fr/" lang="fr">François</a>
\`\`\`

Niet:

\`\`\`html
<p>
  In de presentatie
  <a href="https://www.slideshare.net/stubbornella/object-oriented-css"
    >Object Oriented CSS for high performance web applications and sites</a
  >
  vertelt Nicole Sullivan over een aanpak om CSS te schrijven.
</p>
\`\`\`

\`\`\`html
<p>
  In de presentatie
  <a href="https://www.slideshare.net/stubbornella/object-oriented-css" lang="en"
    >Object Oriented CSS for high performance web applications and sites</a
  >
  vertelt Nicole Sullivan over een aanpak om CSS te schrijven.
</p>
\`\`\`

### Link naar huidige pagina niet opmaken

Gebruik niet _alleen_ een class name om duidelijk te maken dat de link verwijst naar de huidige pagina.

\`\`\`html
<a href="/">Home</a> › <a href="/nieuws/">Nieuws</a> ›
<a href="/nieuws/burgemeester" class="current">Nieuwe burgemeester</a>
\`\`\`

Gebruik altijd \`aria-current\` om de informatie beschikbaar te maken aan de browser en tools:

\`\`\`html
<a href="/">Home</a> › <a href="/nieuws/">Nieuws</a> ›
<a href="/nieuws/burgemeester" class="current" aria-current="page">Nieuwe burgemeester</a>
\`\`\`

### Onnodige link naar huidige pagina

Niet goed: een link naar de homepage plaatsen op de homepage zelf. Op andere pagina's is het natuurlijk wel handig om het logo een link te maken.

\`\`\`html
<header>
  <a href="/">
    <img class="utrecht-logo" src="/logo.svg" alt="Keuringsdienst van waarde" />
  </a>
</header>
<h1>Home</h1>
\`\`\`

Wel goed: logo zonder link op de homepage.

\`\`\`html
<header>
  <img class="utrecht-logo" src="/logo.svg" alt="Keuringsdienst van waarde" />
</header>
<h1>Home</h1>
\`\`\`

### Link zonder \`href\` attribuut

Niet goed: een link zonder \`href\` attribuut is niet _focusable_, waardoor je de link niet kan activeren.

\`\`\`html
<a onclick="navigate('/step-1')">Vorige</a>
\`\`\`

## Referenties

- [_Tips for Better Hyperlink UX_, door de Interaction Design Foundation](https://www.interaction-design.org/literature/article/tips-for-better-hyperlink-ux): waarom 'klik hier' niet werkt.
- [_A comprehensive guide to designing perfect links in UX_, op Prototypr](https://blog.prototypr.io/a-guide-to-designing-perfect-links-in-ux-414558f35730): best practices rondom links.
- [_Do’s and Don’ts of Web Design_ van UX Planet](https://uxplanet.org/dos-and-don-ts-of-web-design-8c9d6a5de7c6): interessante do's en don'ts over Web Design, onder andere over links.
- [_Writing Hyperlinks: Salient, Descriptive, Start with Keyword_ door Norman Nielsen Group](https://www.nngroup.com/articles/writing-links/): hoe schrijf je goede links? Een uitgebreid artikel over links.
- [_Hover, focus, active_, door Wunder](https://wunder.io/wunderpedia/accessibility/accessible-uis/hover-focus-active/): goede uitleg over de states die elementen zoals de link en button hebben in browsers.
- [_Guidelines for Visualizing Links_, door Nielsen Normal Group](https://www.nngroup.com/articles/guidelines-for-visualizing-links/): richtlijnen voor het design van links.
- [MDN: \`<a>\`: The Anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a): uitgebreid overzicht van alle mogelijkheden van links in HTML.

### Relevante WCAG regels

- [WCAG 1.4.1](https://www.w3.org/TR/WCAG21/#use-of-color): een link is niet voor iedereen duidelijk herkenbaar wanneer je alleen kleur gebruikt. Gebruik ook onderstreping om de link duidelijk te maken.
- [WCAG 1.4.3](https://www.w3.org/TR/WCAG21/#contrast-minimum)
- [WCAG 2.4.4](https://www.w3.org/TR/WCAG21/#link-purpose-in-context)
- [WCAG 2.5.3](https://www.w3.org/TR/WCAG21/#label-in-name)
- [WCAG 3.1.2](https://www.w3.org/TR/WCAG21/#language-of-parts)
`,te={link:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"},"text-decoration":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"none | underline",inherits:!0}},type:"textDecoration"},"text-decoration-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!1}},"text-decoration-thickness":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!1}},"text-underline-offset":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.figma.supports-token":!1}},active:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.link.color"]},type:"color"}},focus:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.link.color"]},type:"color"},"text-decoration":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"none | underline",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.link.text-decoration"]},type:"textDecoration"},"text-decoration-thickness":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.link.text-decoration-thickness"],"nl.nldesignsystem.figma.supports-token":!1}}},hover:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.link.color"]},type:"color"},"text-decoration":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"none | underline",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.link.text-decoration"]},type:"textDecoration"},"text-decoration-thickness":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.link.text-decoration-thickness"],"nl.nldesignsystem.figma.supports-token":!1}}},placeholder:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.link.color"]}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}},type:"fontWeights"}},visited:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0},"nl.nldesignsystem.fallback":["utrecht.link.color"]},type:"color"}},icon:{size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}},type:"sizing"}}}},re={utrecht:te},ae={title:"React Component/Link",id:"react-link",component:Z,args:{children:"Read more",href:"https://www.example.com"},parameters:{tokensPrefix:"utrecht-link",tokens:Q,tokensDefinition:re,docs:{description:{component:ne}}},argTypes:{external:{name:"external",type:{name:"boolean",required:!1},table:{category:"API",defaultValue:{summary:!1}}},href:{name:"href",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}},"aria-current":{name:"aria-current",type:{name:"string",required:!1},options:[void 0,"page","step","location","date","time","true","false"],table:{category:"HTML attribute",defaultValue:{summary:"false"}}},hrefLang:{name:"hrefLang",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}},lang:{name:"lang",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}},placeholder:{name:"placeholder",type:{name:"boolean",required:!1},table:{category:"API",defaultValue:{summary:!1}}},rel:{name:"rel",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}},target:{name:"target",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}}}},e={},n={args:{children:"Watch video on YouTube",href:"https://www.example.com",external:!0}},t={args:{children:"Step 5: Review your submission",href:"https://www.example.com",placeholder:!0}},r={args:{href:"mailto:info@example.com",children:"info@example.com"}},a={args:{href:"tel:+31555385385",children:"+31 555 385 385"}},i={args:{href:"https://example.com/en",title:"This page in English",hrefLang:"en",lang:"en",rel:"alternate",children:"EN"}},o={args:{href:"https://example.com/en",title:"This page in English",hrefLang:"en",lang:"en",children:"EN","aria-current":"page"}},s={args:{...e.args},parameters:{pseudo:{hover:!0}}},l={args:{...e.args},parameters:{pseudo:{focus:!0}}},d={args:{...e.args},parameters:{pseudo:{focusVisible:!0}}},k={args:{...e.args},parameters:{pseudo:{active:!0}}},u={args:{...e.args},parameters:{pseudo:{visited:!0}}},c=ee(ae);var g,m,p;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,b,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Watch video on YouTube',
    href: 'https://www.example.com',
    external: true
  }
}`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var f,w,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Step 5: Review your submission',
    href: 'https://www.example.com',
    placeholder: true
  }
}`,...(y=(w=t.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var j,z,x;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    href: 'mailto:info@example.com',
    children: 'info@example.com'
  }
}`,...(x=(z=r.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var G,L,_;a.parameters={...a.parameters,docs:{...(G=a.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    href: 'tel:+31555385385',
    children: '+31 555 385 385'
  }
}`,...(_=(L=a.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var A,S,T;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com/en',
    title: 'This page in English',
    hrefLang: 'en',
    lang: 'en',
    rel: 'alternate',
    children: 'EN'
  }
}`,...(T=(S=i.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var D,W,C;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com/en',
    title: 'This page in English',
    hrefLang: 'en',
    lang: 'en',
    children: 'EN',
    'aria-current': 'page'
  }
}`,...(C=(W=o.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var H,N,E;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  parameters: {
    pseudo: {
      hover: true
    }
  }
}`,...(E=(N=s.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var V,M,$;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  parameters: {
    pseudo: {
      focus: true
    }
  }
}`,...($=(M=l.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var R,I,O;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  parameters: {
    pseudo: {
      focusVisible: true
    }
  }
}`,...(O=(I=d.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var P,q,B;k.parameters={...k.parameters,docs:{...(P=k.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  parameters: {
    pseudo: {
      active: true
    }
  }
}`,...(B=(q=k.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var F,J,U;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  parameters: {
    pseudo: {
      visited: true
    }
  }
}`,...(U=(J=u.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var K,X,Y;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:"designTokenStory(meta)",...(Y=(X=c.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const he=["Default","External","Placeholder","Email","Telephone","AlternateLanguage","CurrentLanguage","Hover","Focus","FocusVisible","Active","Visited","DesignTokens"];export{k as Active,i as AlternateLanguage,o as CurrentLanguage,e as Default,c as DesignTokens,r as Email,n as External,l as Focus,d as FocusVisible,s as Hover,t as Placeholder,a as Telephone,u as Visited,he as __namedExportsOrder,ae as default};
//# sourceMappingURL=Link.stories-c49c5712.js.map

<!-- @license CC0-1.0 -->

# Root

Onderlaag waarin basiskeuzes worden gemaakt voor alle componenten die in de website zitten.

## Aanbevolen manier

```html
<!DOCTYPE html>
<html class="utrecht-root" dir="ltr" lang="nl">
  <head>
    <meta charset="utf-8" />
    <title>Paginatitel</title>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
  </head>
  <body>
    <!-- ... -->
  </body>
</html>
```

## Richtlijnen voor contentmakers

Wanneer je een pagina bij het maken van een pagina de taal van de pagina goed in.

## Doelen

- Deze afmeting van deze component is de maximaal beschikbare ruimte.
- De achtergrondkleur is de basis voor content.
- De kleur van de tekst is leesbaar op de achtergrond.
- Het lettertype is het standaard neutrale lettertype voor componenten.
- Scroll wanneer het nodig is.

Edge cases:

- Moet niet in de breedte scrollen wanneer een border op `:root` wordt gezet (WCAG 1.4.10)

Door het aanbieden van goee root component kunnen anti-patterns voorkomen of genezen worden.

- Anti-aliasing wordt vaak aangepast door ongewenste `font-smoothing: antialiased;`.
- Overschrijven van de root font-size, waardoor de `rem` waarde wordt aangepast
- De `<body>` element scrollbaar maken in plaats van het `<html>` element

## Anatomie

HTML variant:

1. Root
2. Body

Body en Div variant:

1. Root

De naamgeving van de Root component is gebaseerd op `:root` in CSS.
De naamgeving van het Body onderdeel is gebaseerd op `body` in HTML.

## HTML

### `meta` element

Gebruik altijd een `<meta name="viewport">` element met tenminste de volgende instellingen:

- `width=device-width`
- `initial-scale=1`

Je kunt deze instellingen combineren met eigen voorkeuren.

Bijvoorbeeld:

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

### `title` element

Gebruik altijd een `<title>` element om de paginatitel in te stellen, voor de HTML en Body varianten.

### `html` variant

```html
<!DOCTYPE html>
<html class="utrecht-root" lang="nl" dir="ltr">
  <head>
    <!-- ... -->
  </head>
  <body>
    <!-- ... -->
  </body>
</html>
```

Wanneer je kunt kiezen tussen het `html` en `body` element, kies dan altijd het `html` element.

## ARIA

Voor de HTML en Body variant moet je geen `role` instellen.

Voor de Div variant kan het in heel zeldzame gevallen nodig zijn om `role="document"` of `role="application"` te gebruiken, dus dat moet mogelijk zijn met deze component. Lees hier over in het artikel: [If you use the WAI-ARIA role "application", please do so wisely! — Marco Zehe](https://www.marcozehe.de/if-you-use-the-wai-aria-role-application-please-do-so-wisely/)

Wanneer je de Div-variant gebruikt om Viewport te simuleren, gebruik dan `role="group"`.

Wanneer je de Dialog variant gebruikt, gebruik het `<dialog>` element die de impliciete rol `dialog` heeft.

## Design tokens

Er zijn design tokens om de `color` en `background-color` in te stellen, die basis-kleuren zijn voor de hele pagina.

Vrijwel alle gebruiker maken eigen keuzes voor `color`, `background-color`, `font-family`, `font-weight`, `font-size` en `line-height`.

De meeste gebruikers maken eigen keuzes voor `color`, `background-color` en `font-family`. De meeste gebruikers gebruiken `font-weight` `400`, maar met de opkomst van variable fonts zal daar meer variatie in komen. De meeste gebruikers stellen `font-size` in om garantie te hebben dat de font-size is wat ze verwachten, zelfs wanneer de `font-size` `1rem` is. De `line-height` wordt meestal ingesteld om voor een grotere line-height dan wat browsers standaard hebben.

Er is een design token `font-size-adjust` om twee dingen mogelijk mogelijk te maken:

- De font-size van het belangrijkste lettertype gelijk te houden, door een waarde te gebruiken waarbij die font-size gelijk blijft.
- Visuele regressies voorkomen door geen gebruik te maken van `font-size-adjust`, door waarde voor CSS in te stellen op `auto`.

### Richtlijnen voor invulling design tokens

De `background-color` en `color` moeten tenminste 4,5:1 kleurcontrast hebben.

De `font-size` moet voldoen aan het de richtlijn van minimum font-size van NL Design System .

De `font-size` moet gebruik maken van relatieve font-size units, bij voorkeur `rem`.

De `line-height` moet tenminste `1` zijn, en gebruik maken van relatieven units. Bij voorkeur een unitless waarde.

De `font-size-adjust` moet zijn ingesteld op een waarde waarbij de font-size nog voldoende leesbaar is. De minimum x-hoogte is 8px. Voorbeelden:

- `font-size: 16px` met `font-size-adjust: 0.42;` is onvoldoende
- `font-size: 24px` met `font-size-adjust: 0.42;` is voldoende

Gebruik als `font-family` bij voorkeur een lettertype dat voldoet aan de richtlijnen van NL Design System.

## Varianten

Er zijn alleen varianten in code, niet in design.

- Variant die op een `html`-element is toegepast
- Variant die op een `body`-element is toegepast
- Variant die op een `div`-element is toegepast

De belangrijkste manier om de Root component te gebruiken is met het `html` element.

Gebruik de `body` variant alleen wanneer je eigenlijk de `html` variant wilt gebruiken, maar dat niet mogelijk is in jouw situatie.

### `body` variant

```html
<!DOCTYPE html>
<html lang="nl" dir="ltr">
  <head>
    <!-- ... -->
  </head>
  <body class="utrecht-root">
    <!-- ... -->
  </body>
</html>
```

### `div` variant

```html
<!DOCTYPE html>
<html lang="nl" dir="ltr">
  <head>
    <!-- ... -->
  </head>
  <body>
    <div class="utrecht-root">
      <!-- ... -->
    </div>
  </body>
</html>
```

## WCAG

- [1.1.1 Niet-tekstuele content](https://nldesignsystem.nl/wcag/1.1.1/)
  - Niet van toepassing, in het algemeen.
  - Misschien: doe geen watermerk als achtergrond-afbeelding, zoals "Concept" of "Specimen"?
- [1.2.1 Louter-geluid en louter-videobeeld (vooraf opgenomen)](https://nldesignsystem.nl/wcag/1.2.1/): Niet van toepassing.
- [1.2.2 Ondertitels voor doven en slechthorenden (vooraf opgenomen)](https://nldesignsystem.nl/wcag/1.2.2/): Niet van toepassing.
- [1.2.3 Audiodescriptie of media-alternatief (vooraf opgenomen)](https://nldesignsystem.nl/wcag/1.2.3/): Niet van toepassing.
- [1.2.4 Ondertitels voor doven en slechthorenden (live)](https://nldesignsystem.nl/wcag/1.2.4/): Niet van toepassing.
- [1.2.5 Audiodescriptie (vooraf opgenomen)](https://nldesignsystem.nl/wcag/1.2.5/): Niet van toepassing.
- [1.2.6 Gebarentaal (vooraf opgenomen)](https://nldesignsystem.nl/wcag/1.2.6/): Niet van toepassing.
- [1.2.7 Verlengde audiodescriptie (vooraf opgenomen)](https://nldesignsystem.nl/wcag/1.2.7/): Niet van toepassing.
- [1.2.8 Media-alternatief (vooraf opgenomen)](https://nldesignsystem.nl/wcag/1.2.8/): Niet van toepassing.
- [1.2.9 Louter-geluid (live)](https://nldesignsystem.nl/wcag/1.2.9/): Niet van toepassing.
- [1.3.1 Info en relaties](https://nldesignsystem.nl/wcag/1.3.1/)
  - Misschien: `role="group"`, `role="document"` of `role="application"` wanneer er nog content buiten de root staat?
- [1.3.2 Betekenisvolle volgorde](https://nldesignsystem.nl/wcag/1.3.2/)
  - Stel `dir="ltr"` of `dir="rtl"` attribuut in op het `html` element, wanneer de Root component daarop wordt toegepast.
  - Gebruik CSS logical properties voor de implementatie van de component.
- [1.3.3 Zintuiglijke eigenschappen](https://nldesignsystem.nl/wcag/1.3.3/)
- [1.3.4 Weergavestand](https://nldesignsystem.nl/wcag/1.3.4/)
  - Gebruik niet de [`screen.orientation.lock` API](https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/lock) om te voorkomen dat de weergavestand wordt aangepast.
  - Gebruik geen [media query om de pagina 90 graden te kantelen](https://css-tricks.com/snippets/css/orientation-lock/) om het aanpassen van de weergavestand ongedaan te maken.
- [1.3.5 Identificeer het doel van de input](https://nldesignsystem.nl/wcag/1.3.5/): Niet van toepassing.
- [1.3.6 Identificeer het doel](https://nldesignsystem.nl/wcag/1.3.6/): Niet van toepassing.
- [1.4.1 Gebruik van kleur](https://nldesignsystem.nl/wcag/1.4.1/)
  - Mensen kunnen altijd gekke dingen doen: waarschuwing door een rode border?
- [1.4.2 Geluidsbediening](https://nldesignsystem.nl/wcag/1.4.2/): Niet van toepassing.
- [1.4.3 Contrast (minimum)](https://nldesignsystem.nl/wcag/1.4.3/)
  - TODO: Van toepassing
- [1.4.4 Herschalen van tekst](https://nldesignsystem.nl/wcag/1.4.4/)
  - TODO: Van toepassing
- [1.4.5 Afbeeldingen van tekst](https://nldesignsystem.nl/wcag/1.4.5/): Niet van toepassing.
- [1.4.6 Contrast (versterkt)](https://nldesignsystem.nl/wcag/1.4.6/)
  - TODO: Van toepassing
- [1.4.7 Weinig of geen achtergrondgeluid](https://nldesignsystem.nl/wcag/1.4.7/): Niet van toepassing.
- [1.4.8 Visuele presentatie](https://nldesignsystem.nl/wcag/1.4.8/):
  - TODO: Onderzoeken
- [1.4.9 Afbeeldingen van tekst (geen uitzondering)](https://nldesignsystem.nl/wcag/1.4.9/): Niet van toepassing.
- [1.4.10 Reflow](https://nldesignsystem.nl/wcag/1.4.10/)
  - TODO: van toepassing
- [1.4.11 Contrast van niet-tekstuele content](https://nldesignsystem.nl/wcag/1.4.11/): Niet van toepassing.
- [1.4.12 Tekstafstand](https://nldesignsystem.nl/wcag/1.4.12/)
  - TODO: van toepassing
- [1.4.13 Content bij hover of focus](https://nldesignsystem.nl/wcag/1.4.13/): Niet van toepassing.
- [2.1.1 Toetsenbord](https://nldesignsystem.nl/wcag/2.1.1/)
  - Wanneer de Root een scrollbar heeft, dan moet het scrollen met de gebruikelijke toetsen bediend kunnen worden. Mogelijk moet de Root dan ook focusbaar zijn.
- [2.1.2 Geen toetsenbordval](https://nldesignsystem.nl/wcag/2.1.2/): Niet van toepassing.
- [2.1.3 Toetsenbord (geen uitzondering)](https://nldesignsystem.nl/wcag/2.1.3/): Niet van toepassing.
- [2.1.4 Enkel teken sneltoetsen](https://nldesignsystem.nl/wcag/2.1.4/): Niet van toepassing.
- [2.2.1 Timing aanpasbaar](https://nldesignsystem.nl/wcag/2.2.1/): Niet van toepassing.
- [2.2.2 Pauzeren, stoppen, verbergen](https://nldesignsystem.nl/wcag/2.2.2/): Niet van toepassing.
- [2.2.3 Geen timing](https://nldesignsystem.nl/wcag/2.2.3/): Niet van toepassing.
- [2.2.4 Onderbrekingen](https://nldesignsystem.nl/wcag/2.2.4/): Niet van toepassing.
- [2.2.5 Herauthentisering](https://nldesignsystem.nl/wcag/2.2.5/): Niet van toepassing.
- [2.2.6 Time-outs](https://nldesignsystem.nl/wcag/2.2.6/): Niet van toepassing.
- [2.3.1 Drie flitsen of beneden drempelwaarde](https://nldesignsystem.nl/wcag/2.3.1/): Niet van toepassing.
- [2.3.2 Drie flitsen](https://nldesignsystem.nl/wcag/2.3.2/): Niet van toepassing.
- [2.3.3 Animatie uit interacties](https://nldesignsystem.nl/wcag/2.3.3/):
  - van toepassing bij scrollen
- [2.4.1 Blokken omzeilen](https://nldesignsystem.nl/wcag/2.4.1/)
  - Misschien een goed idee om `<html id="top">` te gebruiken?
- [2.4.2 Paginatitel](https://nldesignsystem.nl/wcag/2.4.2/): stel altijd een paginatitel in voor de HTML en Body varianten.
- [2.4.3 Focus volgorde](https://nldesignsystem.nl/wcag/2.4.3/)
  - focus-volgorde misschien ook van toepassing door scroll-to-top link
- [2.4.4 Linkdoel (in context)](https://nldesignsystem.nl/wcag/2.4.4/): Niet van toepassing.
- [2.4.5 Meerdere manieren](https://nldesignsystem.nl/wcag/2.4.5/): Niet van toepassing.
- [2.4.6 Koppen en labels](https://nldesignsystem.nl/wcag/2.4.6/): Niet van toepassing.
- [2.4.7 Focus zichtbaar](https://nldesignsystem.nl/wcag/2.4.7/)
  - wanneer de Root component een scroll container is, dan moet je `scroll-padding` properties in kunnen stellen als je sticky components hebt.
  - misschien: zou een root element een inset focus ring moeten hebben?
- [2.4.8 Locatie](https://nldesignsystem.nl/wcag/2.4.8/)
  - Mogelijk van toepassing door de inhoud van de paginatitel. Bijvoorbeeld: als er een onjuiste locatie in de paginatitel staat. Bijvoorbeeld: `<title>Homepage - Enter Your Site Name Here</title>`
- [2.4.9 Linkdoel (alleen link)](https://nldesignsystem.nl/wcag/2.4.9/): Niet van toepassing.
- [2.4.10 Paragraafkoppen](https://nldesignsystem.nl/wcag/2.4.10/): Niet van toepassing.
- [2.4.11 Focus niet bedekt (minimum)](https://nldesignsystem.nl/wcag/2.4.11/)
  - door een default focus ring met `z-index: 1` draagt de Root component hier aan bij
  - van toepassing doordat op de Root component `scroll-padding` ingesteld moet worden
- [2.4.12 Focus niet bedekt (uitgebreid)](https://nldesignsystem.nl/wcag/2.4.12/)
  - van toepassing doordat op de Root component `scroll-padding` ingesteld moet worden
- [2.4.13 Focusweergave](https://nldesignsystem.nl/wcag/2.4.13/)
  - als je de root uitzoomt, dan moet de focus ring nog steeds voldoende duidelijk zijn
- [2.5.1 Aanwijzergebaren](https://nldesignsystem.nl/wcag/2.5.1/): Niet van toepassing.
- [2.5.2 Aanwijzerannulering](https://nldesignsystem.nl/wcag/2.5.2/): Niet van toepassing.
- [2.5.3 Label in Naam](https://nldesignsystem.nl/wcag/2.5.3/)
  - Van toepassing op dialogs, etc.
- [2.5.4 Bewegingsactivering](https://nldesignsystem.nl/wcag/2.5.4/): Niet van toepassing.
- [2.5.5 Grootte van het aanwijsgebied (uitgebreid)](https://nldesignsystem.nl/wcag/2.5.5/): Niet van toepassing.
- [2.5.6 Input gelijktijdige invoermechanismen](https://nldesignsystem.nl/wcag/2.5.6/): Niet van toepassing.
- [2.5.7 Sleepbewegingen](https://nldesignsystem.nl/wcag/2.5.7/): Niet van toepassing.
- [2.5.8 Grootte van het aanwijsgebied (minimum)](https://nldesignsystem.nl/wcag/2.5.8/): Niet van toepassing.
- [3.1.1 Taal van de pagina](https://nldesignsystem.nl/wcag/3.1.1/)
  - Stel het `lang` attribuut in op het `html` element, wanneer de Root component daarop wordt toegepast. Daarnaast wordt de leesbaarheid van de tekst beter wanneer de browser een passend woordenboek kan gebruiken voor woordafbreking.
- [3.1.2 Taal van onderdelen](https://nldesignsystem.nl/wcag/3.1.2/)
  - Stel het `lang` attribut in op het `html` element, zodat de `<title>` ook de juiste language heeft.
  - Todo: Wat als de paginatitel Engelstalig is, en de paginatitel bevat ook een andere taal? Bijvoorbeeld: `<title>To be, or not to be — gemeente Voorbeeld</title>`. Wil je dan `<title lang="en">To be, or not to be — gemeente Voorbeeld</title>`? Wordt dat uberhaupt ondersteund door voorleessoftware?
- [3.1.3 Ongebruikelijke woorden](https://nldesignsystem.nl/wcag/3.1.3/)
- [3.1.4 Afkortingen](https://nldesignsystem.nl/wcag/3.1.4/)
  - Van toepassing op de paginatitel.
- [3.1.5 Leesniveau](https://nldesignsystem.nl/wcag/3.1.5/)
  - Van toepassing op de paginatitel.
- [3.1.6 Uitspraak](https://nldesignsystem.nl/wcag/3.1.6/): Niet van toepassing.
- [3.2.1 Bij focus](https://nldesignsystem.nl/wcag/3.2.1/): Niet van toepassing.
- [3.2.2 Bij input](https://nldesignsystem.nl/wcag/3.2.2/): Niet van toepassing.
- [3.2.3 Consistente navigatie](https://nldesignsystem.nl/wcag/3.2.3/)
- [3.2.4 Consistente identificatie](https://nldesignsystem.nl/wcag/3.2.4/)
  - Paginatitel moet consistent werken.
- [3.2.5 Verandering op verzoek](https://nldesignsystem.nl/wcag/3.2.5/): Niet van toepassing.
- [3.2.6 Consistente hulp](https://nldesignsystem.nl/wcag/3.2.6/): Niet van toepassing.
- [3.3.1 Foutidentificatie](https://nldesignsystem.nl/wcag/3.3.1/)
  - Je kunt in de paginatitel weergeven dat er een fout is, bijvoorbeeld: `<title>Fout! - Contactformulier - gemeente Voorbeeld</title>`
  - Wanneer `Fout!` in de paginatitel blijft staan wanneer de fout is opgelost, dan voldoet dit ook niet.
- [3.3.2 Labels of instructies](https://nldesignsystem.nl/wcag/3.3.2/): Niet van toepassing.
- [3.3.3 Foutsuggestie](https://nldesignsystem.nl/wcag/3.3.3/): Niet van toepassing.
- [3.3.4 Foutpreventie (wettelijk, financieel, gegevens)](https://nldesignsystem.nl/wcag/3.3.4/): Niet van toepassing.
- [3.3.5 Hulp](https://nldesignsystem.nl/wcag/3.3.5/): Niet van toepassing.
- [3.3.6 Foutpreventie (alle)](https://nldesignsystem.nl/wcag/3.3.6/): Niet van toepassing.
- [3.3.7 Overbodige invoer](https://nldesignsystem.nl/wcag/3.3.7/): Niet van toepassing.
- [3.3.8 Toegankelijke authenticatie (minimum)](https://nldesignsystem.nl/wcag/3.3.8/): Niet van toepassing.
- [3.3.9 Toegankelijke authenticatie (uitgebreid)](https://nldesignsystem.nl/wcag/3.3.9/): Niet van toepassing.
- [4.1.1 Parsen](https://nldesignsystem.nl/wcag/4.1.1/): Niet van toepassing.
- [4.1.2 Naam, rol, waarde](https://nldesignsystem.nl/wcag/4.1.2/):
  - naam en rol zijn van toepassing, wanneer je `role="dialog"`, `role="group"`, `role="application"` of `role="document"` gebruikt.
- [4.1.3 Statusberichten](https://nldesignsystem.nl/wcag/4.1.3/): Niet van toepassing.

## Privacy en security

Je de privacy en security van je pagina kunt verbeteren, door metadata in de `<head>` van je pagina.

In de `<head>` van de pagina kun je een `Content-Security-Policy` element toevoegen, waarmee je de veiligheid van je pagina kan verbeteren.

## Veelvoorkomende fouten

Toegankelijkheid:

- Kleurcontrast van tekst wordt lager gemaakt door `font-smoothing` in te stellen op `antialiased` of `grayscale`.
- `scroll-behavior: smooth` wordt ingesteld zonder een uitzondering te maken op basis van `prefers-reduced-motion`.
- CSS Logical Properties worden nog niet gebruikt.
- Taal van de pagina is niet ingesteld.
- De paginatitel is niet duidelijk.
- De `font-size` van het `html` element wordt ingesteld, waardoor `1rem` niet meer de user preference volgt.
- De `font-size` van het `html` element is ingesteld met een absolute waarde, waardoor de gebruiker niet meer de tekst kan vergroten.
- Er is wel een tekstkleur ingesteld, maar geen achtergrondkleur, waardoor de tekst onleesbaar wordt wanneer de gebruiker dark mode gebruikt.
- Lange woorden hebben geen woordafbreking, waardoor op kleinere schermen de tekst niet volledig leesbaar is zonder heen en weer te scrollen.
- Default focus ring wordt gebruikt, waardoor de focus indicator niet zichtbaar is op alle achtergronden.
- De kleuren zwart en wit zijn gebruikt voor `background-color` en `color`, waardoor het contrast zo hoog is dat sommige mensen er last van hebben.

Gebruiksvriendelijkheid:

- Wanneer je hele pagina is gemaakt met CSS Logical properties, dan kun je de layout spiegelen wanneer een script herkent dat Google Translate naar een right-to-left taal vertaalt.

Kwaliteit:

- `body { padding: 0; }` wordt nog vaak gebruikt, terwijl dat in moderne browsers niet nodig is.
- De `html` en `body` elementen op een pagina worden niet ingesteld om de maximale beschikbare ruimte te gebruiken, waardoor de footer niet onderaan het scherm staat.
- De `font-size` van het `html` element is ingesteld op `62.5%`, waardoor de pagina niet goed samenwerkt met componenten uitgaan van `1rem` = `16px`.
- De leesbaarheid van de tekst is niet optimaal doordat meerdere lettertypes door elkaar gebruikt worden, waarvan de x-hoogte niet overeenkomt.
- Er moet complexe CSS gemaakt worden om een `position: sticky` elementen op de juiste plek te krijgen.

## Richtlijnen bij NL Design System

- [Letters groot genoeg](https://nldesignsystem.nl/richtlijnen/stijl/typografie/lettergrootte/)
- [Zorg voor een comfortabele regelafstand](https://nldesignsystem.nl/richtlijnen/stijl/typografie/regelafstand/)
- [Kies een goed lettertype](https://nldesignsystem.nl/richtlijnen/stijl/typografie/lettertype/)
- [Kleurcontrast voor tekst](https://nldesignsystem.nl/richtlijnen/stijl/kleuren/contrast-tekst/)

<!-- TODO: Link naar richtlijn voor gebruik `rem` voor `font-size` -->
<!-- TODO: Link naar los kopje voor beste units voor line-height -->
<!-- TODO: Link naar content-richtlijn voor taal van de pagina instellen -->
<!-- TODO: Link naar content-richtlijn voor taal van de pagina instellen -->
<!-- TODO: Link naar content-richtlijn voor paginatitel maken, die let op consistentie -->
<!-- TODO: Link naar richtlijn om "Fout!" in de paginatitel te zetten bij formulieren -->

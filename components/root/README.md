<!-- @license CC0-1.0 -->

# Root

Onderlaag waarin basiskeuzes worden gemaakt voor alle componenten die in de website zitten.

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

## Acceptatiecriteria voor toegankelijkheid

...

- 1.1.1: niet van toepassing. Misschien: doe geen watermerk als achtergrond-afbeelding, zoals "Concept" of "Specimen"?-
- 1.2.1: niet van toepassing
- 1.2.2: niet van toepassing
- 1.2.3: niet van toepassing
- 1.2.4: niet van toepassing
- 1.2.5: niet van toepassing
- 1.2.6: niet van toepassing
- 1.2.7: niet van toepassing
- 1.2.8: niet van toepassing
- 1.2.9: niet van toepassing
- 1.3.1: misschien `role="group"`, `role="document"` of `role="application"` wanneer er nog content buiten de root staat?
- 1.3.2:
  - stel `dir="ltr"` of `dir="rtl"` in
  - werkt met CSS logical properties
- als je de root uitzoomt, dan moet de focus ring nog steeds voldoende duidelijk zijn
- 2.4.7 Focus zichtbaar: wanneer de Root component een scroll container is, dan moet je `scroll-padding` properties in kunnen stellen als je sticky components hebt.

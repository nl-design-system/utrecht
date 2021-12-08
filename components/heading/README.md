<!-- @license CC0-1.0 -->

# Gebruik en toegankelijkheid van koppen

- Gebruik altijd maar één H1 kop op een pagina met digitale content.
- Gebruik alleen een kop als er content onder staat.
- Gebruikers van screenreaders gebruiken headers vaak om een indruk te krijgen van de structuur van een pagina.
- Gebruik koppen niet voor de opmaak maar alleen voor tekstuele hiërarchie van de content.
- Sla geen niveaus over met het gebruik van koppen, bijvoorbeeld geen H3 gebruiken zonder dat er een voorgaande H2 is.
- Beperk het aantal koppen op een pagina. In de meeste gevallen hebben teksten niet meer dan `<h2>` koppen nodig en heel soms een `<h3>`. Alleen voor uitzonderlijk lange of complexe pagina's zouden `<h5>` en `<h6>` nodig zijn.

## Terminologie

- **heading**: [de HTML specificatie van `h1`/`h2`/`h3`/`h4`/`h5`/`h6`](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements). "h1" is nogal kortaf, daarom beschrijven we de token als "heading-1".

In HTML wordt de term "heading" gebruikt, niet "header" (dat is ook iets anders). Let dus op om niet per ongeluk "header" te schrijven in plaats van "heading".

## Class names

- `utrecht-heading-1`
- `utrecht-heading-2`
- `utrecht-heading-3`
- `utrecht-heading-4`
- `utrecht-heading-5`
- `utrecht-heading-6`

## Design Tokens

Om gemakkelijk alle headings in één keer te stylen, is er ook sprake van een soort "abstracte" heading component zonder niveau-aanduiding: `utrecht-heading`. Die component kun je niet in de praktijk gebruiken, maar de design tokens voor `utrecht-heading` worden overgenomen door de `utrecht-heading-[n]` components.

- Document (abstract component)
  - `utrecht-document-color`
  - `utrecht-document-font-family`
- Heading (abstract component)
  - `utrecht-heading-color`
  - `utrecht-heading-font-family`
  - `utrecht-heading-font-weight`
- Heading 1
  - `utrecht-heading-1-color`
  - `utrecht-heading-1-font-family`
  - `utrecht-heading-1-font-size`
  - `utrecht-heading-1-font-weight`
  - `utrecht-heading-1-letter-spacing`
  - `utrecht-heading-1-line-height`
  - `utrecht-heading-1-margin-block-end`
  - `utrecht-heading-1-margin-block-start`
  - `utrecht-heading-1-text-transform`
- Heading 2
  - `utrecht-heading-2-color`
  - `utrecht-heading-2-font-family`
  - `utrecht-heading-2-font-size`
  - `utrecht-heading-2-font-weight`
  - `utrecht-heading-2-letter-spacing`
  - `utrecht-heading-2-line-height`
  - `utrecht-heading-2-margin-block-end`
  - `utrecht-heading-2-margin-block-start`
  - `utrecht-heading-2-text-transform`
- Heading 3
  - `utrecht-heading-3-color`
  - `utrecht-heading-3-font-family`
  - `utrecht-heading-3-font-size`
  - `utrecht-heading-3-font-weight`
  - `utrecht-heading-3-letter-spacing`
  - `utrecht-heading-3-line-height`
  - `utrecht-heading-3-margin-block-end`
  - `utrecht-heading-3-margin-block-start`
  - `utrecht-heading-3-text-transform`
- Heading 4
  - `utrecht-heading-4-color`
  - `utrecht-heading-4-font-family`
  - `utrecht-heading-4-font-size`
  - `utrecht-heading-4-font-weight`
  - `utrecht-heading-4-letter-spacing`
  - `utrecht-heading-4-line-height`
  - `utrecht-heading-4-margin-block-end`
  - `utrecht-heading-4-margin-block-start`
  - `utrecht-heading-4-text-transform`
- Heading 5
  - `utrecht-heading-5-color`
  - `utrecht-heading-5-font-family`
  - `utrecht-heading-5-font-size`
  - `utrecht-heading-5-font-weight`
  - `utrecht-heading-5-letter-spacing`
  - `utrecht-heading-5-line-height`
  - `utrecht-heading-5-margin-block-end`
  - `utrecht-heading-5-margin-block-start`
  - `utrecht-heading-5-text-transform`
- Heading 6
  - `utrecht-heading-6-color`
  - `utrecht-heading-6-font-family`
  - `utrecht-heading-6-font-size`
  - `utrecht-heading-6-font-weight`
  - `utrecht-heading-6-letter-spacing`
  - `utrecht-heading-6-line-height`
  - `utrecht-heading-6-margin-block-end`
  - `utrecht-heading-6-margin-block-start`
  - `utrecht-heading-6-text-transform`

Of de `*-margin-block-start` en `*-margin-block-end` design tokens effect moeten hebben op de Heading components in elke context is nog de vraag: mogelijk willen we alleen marges toepassen in een bepaalde context, zoals binnen de Rich text component.

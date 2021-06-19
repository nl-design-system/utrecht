<!--
@license EUPL-1.2
Copyright (c) 2021 Gemeente Utrecht
-->

# Heading

De documentatie voor de verschillende heading levels kan verschillen per situatie, het kan zijn dat wordt aangeraden de teksthierarchie te beperken tot en met niveau van h4. Veel design systeems raden af om heading-5 en heading-6 te gebruiken.

## Terminologie

- **heading**: [de HTML specificatie van `h1`/`h2`/`h3`/`h4`/`h5`/`h6`](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements). "h1" is nogal kortaf, daarom schrijven we "heading-1".

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
  - `utrecht-heading-1-line-height`
  - `utrecht-heading-1-margin-block-end`
  - `utrecht-heading-1-margin-block-start`
  - `utrecht-heading-1-text-transform`
- Heading 2
  - `utrecht-heading-2-color`
  - `utrecht-heading-2-font-family`
  - `utrecht-heading-2-font-size`
  - `utrecht-heading-2-font-weight`
  - `utrecht-heading-2-line-height`
  - `utrecht-heading-2-margin-block-end`
  - `utrecht-heading-2-margin-block-start`
  - `utrecht-heading-2-text-transform`
- Heading 3
  - `utrecht-heading-3-color`
  - `utrecht-heading-3-font-family`
  - `utrecht-heading-3-font-size`
  - `utrecht-heading-3-font-weight`
  - `utrecht-heading-3-line-height`
  - `utrecht-heading-3-margin-block-end`
  - `utrecht-heading-3-margin-block-start`
  - `utrecht-heading-3-text-transform`
- Heading 4
  - `utrecht-heading-4-color`
  - `utrecht-heading-4-font-family`
  - `utrecht-heading-4-font-size`
  - `utrecht-heading-4-font-weight`
  - `utrecht-heading-4-line-height`
  - `utrecht-heading-4-margin-block-end`
  - `utrecht-heading-4-margin-block-start`
  - `utrecht-heading-4-text-transform`
- Heading 5
  - `utrecht-heading-5-color`
  - `utrecht-heading-5-font-family`
  - `utrecht-heading-5-font-size`
  - `utrecht-heading-5-font-weight`
  - `utrecht-heading-5-line-height`
  - `utrecht-heading-5-margin-block-end`
  - `utrecht-heading-5-margin-block-start`
  - `utrecht-heading-5-text-transform`
- Heading 6
  - `utrecht-heading-6-color`
  - `utrecht-heading-6-font-family`
  - `utrecht-heading-6-font-size`
  - `utrecht-heading-6-font-weight`
  - `utrecht-heading-6-line-height`
  - `utrecht-heading-6-margin-block-end`
  - `utrecht-heading-6-margin-block-start`
  - `utrecht-heading-6-text-transform`

Of de `*-margin-block-start` en `*-margin-block-end` design tokens effect moeten hebben op de Heading components in elke context is nog de vraag: mogelijk willen we alleen marges toepassen in een bepaalde context, zoals binnen de Rich text component.

## Samenwerken

Voor sommige huisstijlen is ook nog `letter-spacing` nodig als Design Token, die is nu nog niet geïmplementeerd.

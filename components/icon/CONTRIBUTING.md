<!-- @license CC0-1.0 -->

# Bijdragen

Een SVG icon moet in twee bestanden worden aangemaakt/aangepast: `icon.stencil.tsx` en `icon.svg`.

Het doel is om `icon.stencil.tsx` uiteindelijk automatisch te laten genereren uit `icon.svg` om inconsistenties te voorkomen.

## Icoon kleuren

Icoon kleuren moeten automatisch de kleur kunnen overnemen van nabije content.

De valkuil is om hardcoded kleur waardes zoals [`fill="#ABCDEF`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill) te gebruiken. Gebruik in plaats daar van de CSS waarde [`currentColor`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentcolor_keyword): `fill="currentColor"`. Dit is een handmatige aanpassing in de code van de SVG, en een essentiele. Dit principe is ook toepasbaar op andere kleur-gerelateerde eigenschappen zoals [`stroke`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke).

## Sets van iconen

Voeg een regerentie naar de nieuwe iconen toe in `icon-set.json` zodat het nieuwe icoon automatisch getoond wordt in de icoon overzichten, zoals in storybook.

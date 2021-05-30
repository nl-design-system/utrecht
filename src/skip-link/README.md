<!--
@license EUPL-1.2
Copyright (c) 2021 DUO
Copyright (c) 2021 Robbert Broersma
-->

# Skip link

Bezoekers die niet met de muis kunnen navigeren, bedienen het web meestal door te navigeren met het toetsenbord. Zij doen dit met de Tab toets. Door Tab en Shift + Tab te gebruiken kan men naar de volgende of vorige link of knop op de pagina gaan. Welk element actief is (de tabfocus), is vervolgens te zien doordat er een kader omheen komt te staan, de zogenaamde “focus rectangle”.

Er staan vaak veel links op een webpagina. Voor een deel zijn dit links die op alle pagina’s terugkomen. Om het navigeren sneller te maken, stellen de webrichtlijnen het gebruik van een skiplink voor. Met een dergelijke link kan direct naar de hoofdcontent op de pagina worden “gesprongen”. Zo’n skiplink is meestal onzichtbaar en staat bovenaan in de broncode van de pagina. Wanneer een bezoeker op de link klikt, wordt de focus naar een punt verderop in de pagina verplaatst zodat men herhalende onderdelen op de pagina kan overslaan.

## Gebruik

Elke pagina die niet alleen tekst bevat, maar bijvoorbeeld ook navigatie, header en footer, dient voorzien te zijn van een skiplink. Een skiplink bestaat uit 2 delen. Vóór alle navigatie dient de link opgenomen te worden:

## Checklist

Pro-tips:

- stel een achtergrondkleur in zodat je de inhoud achter de link niet kan zien, en vermijd dat de skip link moeilijk te lezen is.

## Overwegingen

- uiterlijk: moet de link eruit zien als een pagina-link of als een button?
- plaatsing: bij gecentreerde pagina in het midden van het scherm? Bij links uitgelijnde pagina plaatsen in de linker bovenhoek? Bij rechts uitgelijnde pagina in de rechter bovenhoek?
- `accesskey`: nodig of niet nodig?
- `tabindex="0"`: kan dit compenseren als je niet de mogelijkheid hebt om de template zo aan te passen dat de Skip Link de eerste elementen zijn in het document?
- link tekst: kort en bondig?
- hover state: is deze nodig?
- kan met `tabindex="0"` de skip link in het element zelf worden opgenomen?
  - `<main id="main"><nl-skip-link href="#main">Direct naar: Inhoud</nl-skip-link></main>`
  - `<nav id="nav"><nl-skip-link href="#nav">Direct naar: Navigatie</nl-skip-link></nav>`

## Terminologie

- **skip link**: W3C zou het misschien een "Bypass Link" noemen, omdat het WCAG successcriterium "Bypass Blocks" genoemd is. In het [WCAG 2.1 techniques document](https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html) wordt het ook een \_"skip" link` genoemd.
- **hidden**: van de CSS `visibility: hidden`, die bepaalt dat een element wel beschikbaar is voor gebruik maar niet zichtbaar is.
- **visible**: van de CSS `visibility: visible`, die bepaalt dan een element dat onzichtbaar kan zijn, op dit moment wel zichtbaar is.

## States

- `focus`: bij focus wordt de staat `visible`, bij verlies focus wordt de staat `hidden`.
- `hidden`: beschikbaar in de accessibility tree, maar niet beschikbaar.
- `visible`: zichtbaar en mogelijk geplaatst in een laag boven andere tekst en afbeeldingen.

## Class names

- `utrecht-skip-link`
- `utrecht-skip-link--focus`
- `utrecht-skip-link--visible`
- `utrecht-skip-link--hidden`

## Design Tokens

Layer:

- `--utrecht-layer-modal-z-index`

Document:

- `--utrecht-document-background-color`

Link:

- `--utrecht-link-color`
- `--utrecht-link-text-decoration`
- Focus state:
  - `--utrecht-link-focus-color`
  - `--utrecht-link-focus-text-decoration`

Skip Link:

- `--utrecht-skip-link-background-color`
- `--utrecht-skip-link-padding-block`
- `--utrecht-skip-link-padding-inline`
- `--utrecht-skip-link-margin-block`
- `--utrecht-skip-link-margin-inline`

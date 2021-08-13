<!--
@license EUPL-1.2
Copyright (c) 2021 Gemeente Utrecht
-->

<!-- markdownlint-disable MD033 -->

# UX Guidelines

## Tekst

Links moeten duidelijk en voorspelbaar zijn. Een gebruiker moet een duidelijke verwachting hebben wat er gebeurt als hij op een link klikt.

Links moeten nooit 'klik hier' of 'hier' als link tekst hebben.

### Links in een zin

Links moeten nooit een hele zin in beslag nemen, maar alleen de tekst die beschrijft waar de gebruikers naar toe gaan als ze op de link klikken.

## Best Practice

### Buttons versus links

Links worden vooral gebruikt om te navigeren en verschijnen dan ook in of direct na een zin.

Buttons worden gebruikt voor acties, zoals 'toevoegen', 'sluiten' of 'opslaan'.

### Do's

- Plaats links aan het einde van een zin als dat mogelijk is.
- Maak duidelijk waar de link je naar toe brengt.
- Gebruik het meest relevante woord van de link aan het begin van de link tekst. Bezoekers lezen niet verder dan de eerste twee woorden van een link.
- Zorg dat de link ook begrijpelijk is zonder dat je de zinnen er omheen gelezen hebt.

### Don'ts

- Gebruik geen buttons waar je een link kan gebruiken.
- Gebruik geen vage of te algemene termen voor de link tekst. Help de gebruiker met voorspellen waar hij naar toe gaat.
- Open interne links niet in een nieuwe tab. Hiermee schakel je één navigatiemanier uit om terug te gaan naar eerdere pagina's, de Nack button.

## UX Referenties

- Waarom [https://www.interaction-design.org/literature/article/tips-for-better-hyperlink-ux]('klik hier' niet werkt). Artikel van de Interaction Design Foundation.
- [https://blog.prototypr.io/a-guide-to-designing-perfect-links-in-ux-414558f35730](Best practices) rondom links. Artikel op Prototypr.
- Interessante Do's en don'ts over Web Design, onder andere over [https://uxplanet.org/dos-and-don-ts-of-web-design-8c9d6a5de7c6](links). Artikel van UX Planet.
- Hoe schrijf je [https://www.nngroup.com/articles/writing-links/](goede links)? Uitgebreid artikel van de NN Group.

# Terminologie

De termen de we gebruiken komen uit HTML en CSS.

- **link**: `:link` in CSS, "hyperlink" in de HTML specificatie
- **active**: `:active` in CSS
- **focus**: `:focus` in CSS
- **hover**: `:hover` in CSS
- **visited**: `:visited` in CSS

Voor de component naam hebben we voor "`link`" gekozen, en niet voor "`a`" zoals de [`<a>`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element) in HTML. Buiten de context van HTML-code (bijvoorbeeld in Figma) is `a`niet duidelijk genoeg, en we verwachten niet dat er grote verwarring ontstaat met het [`<link>`](https://html.spec.whatwg.org/multipage/semantics.html#the-link-element) element van HTML.

# States

We hebben de volgende states:

- normal (experimentele naam)
- hover
- focus
- active

# Class names

De volgende class names zijn gebruikt:

- `utrecht-link`
- `utrecht-link--focus` (voor testen en toepassen op andere CSS selectors)
- `utrecht-link--hover` (voor testen en toepassen op andere CSS selectors)
- `utrecht-link--active` (voor testen en toepassen op andere CSS selectors)
- `utrecht-link--visited` (voor testen en toepassen op andere CSS selectors)

# Variant

- alleen tekst

# Design tokens

We hebben de volgende CSS variabelen:

- `utrecht-link-color`
  - `utrecht-link-active-color`
  - `utrecht-link-focus-color`
  - `utrecht-link-hover-color`
  - `utrecht-link-visited-color`
- `utrecht-link-text-decoration`
  - `utrecht-link-focus-text-decoration`
  - `utrecht-link-hover-text-decoration`

# Visueel design Utrecht

- Link tekst is blauw
- Link tekst is niet onderstreept
- Link tekst is andere kleur blauw in hover state
- Link tekst is onderstreept in hover en focus state, een eventueel icon is niet onderstreept

## Tekstlinks

Tekstlinks zijn standaard donkerblauw (#2A5587) en onderstreept. In sommige gevallen zijn tekstlinks zwart of wit. Dit geldt bij teksten op een gekleurde achtergrond, waar blauw niet voldoende contrast biedt. Kijk voor meer informatie over de contrastrichtlijnen bij kleuren (link naar kleuren).

### Voorbeeld

U kunt tegelijk een paspoort en een ID-kaart hebben. Met een paspoort kunt u naar alle landen reizen. Een ID-kaart is goedkoper, maar u kunt hiermee niet naar alle landen reizen.

## Links met pijl

Links met een pijl als voorloopteken worden gebruikt aan het einde van een tekst. Ze verwijzen naar gerelateerde informatie over het onderwerp wat er in de voorafgaande tekst is besproken. De links zijn donkerblauw (#2A5587), bold en hebben een pijl (>) als voorloopteken. Dit type link wordt ook gebruikt in de linklijst en de subnavigatie.

## Gerelateerde content

Een variant van de link met pijl is zwart (#000) in plaats van donkerblauw. Deze link wordt gebruikt in de linklijsten ‘related’ die verwijzen naar gerelateerde content onderaan een contentpagina.

## Ankerlinks

Ankerlinks worden gebruikt om te navigeren naar specifieke content op de pagina. Ankerlinks staan boven de content waar ze naar verwijzen, komen alleen voor op contentpagina’s en worden gebruikt als opsomming. Ankerlinks zijn worden veel gebruikt als een soort inhoudsopgave van de pagina.
Ankerlinks zijn blauw, onderstreept en hebben een rood bolletje als voorloopteken.

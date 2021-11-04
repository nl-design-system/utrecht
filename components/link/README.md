<!-- @license CC0-1.0 -->

# Link

## Terminologie

De termen de we gebruiken komen uit HTML en CSS.

- **link**: `:link` in CSS, "hyperlink" in de HTML specificatie
- **active**: `:active` in CSS
- **focus**: `:focus` in CSS
- **hover**: `:hover` in CSS
- **visited**: `:visited` in CSS

Voor de component naam hebben we voor "`link`" gekozen, en niet voor "`a`" zoals de [`<a>`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element) in HTML. Buiten de context van HTML-code (bijvoorbeeld in Figma) is `a`niet duidelijk genoeg, en we verwachten niet dat er grote verwarring ontstaat met het [`<link>`](https://html.spec.whatwg.org/multipage/semantics.html#the-link-element) element van HTML.

## States

We hebben de volgende states:

- normal (experimentele naam)
- hover
- focus
- active

## Class names

De volgende class names zijn gebruikt:

- `utrecht-link`
- `utrecht-link--focus` (voor testen en toepassen op andere CSS selectors)
- `utrecht-link--hover` (voor testen en toepassen op andere CSS selectors)
- `utrecht-link--active` (voor testen en toepassen op andere CSS selectors)
- `utrecht-link--visited` (voor testen en toepassen op andere CSS selectors)

## Variant

- alleen tekst

## Design tokens

We hebben de volgende CSS variabelen:

- `utrecht-link-color`
  - `utrecht-link-active-color`
  - `utrecht-link-focus-color`
  - `utrecht-link-hover-color`
  - `utrecht-link-visited-color`
- `utrecht-link-text-decoration`
  - `utrecht-link-focus-text-decoration`
  - `utrecht-link-hover-text-decoration`

## Visueel design Utrecht

- Link tekst is blauw
- Link tekst is niet onderstreept
- Link tekst is andere kleur blauw in hover state
- Link tekst is onderstreept in hover en focus state, een eventueel icon is niet onderstreept

### Tekstlinks

Tekstlinks zijn standaard donkerblauw (#2A5587) en onderstreept. In sommige gevallen zijn tekstlinks zwart of wit. Dit geldt bij teksten op een gekleurde achtergrond, waar blauw niet voldoende contrast biedt. Kijk voor meer informatie over de contrastrichtlijnen bij kleuren (link naar kleuren).

#### Voorbeeld

U kunt tegelijk een paspoort en een ID-kaart hebben. Met een paspoort kunt u naar alle landen reizen. Een ID-kaart is goedkoper, maar u kunt hiermee niet naar alle landen reizen.

### Links met pijl

Links met een pijl als voorloopteken worden gebruikt aan het einde van een tekst. Ze verwijzen naar gerelateerde informatie over het onderwerp wat er in de voorafgaande tekst is besproken. De links zijn donkerblauw (#2A5587), bold en hebben een pijl (>) als voorloopteken. Dit type link wordt ook gebruikt in de linklijst en de subnavigatie.

### Gerelateerde content

Een variant van de link met pijl is zwart (#000) in plaats van donkerblauw. Deze link wordt gebruikt in de linklijsten ‘related’ die verwijzen naar gerelateerde content onderaan een contentpagina.

### Ankerlinks

Ankerlinks worden gebruikt om te navigeren naar specifieke content op de pagina. Ankerlinks staan boven de content waar ze naar verwijzen, komen alleen voor op contentpagina’s en worden gebruikt als opsomming. Ankerlinks zijn worden veel gebruikt als een soort inhoudsopgave van de pagina.
Ankerlinks zijn blauw, onderstreept en hebben een rood bolletje als voorloopteken.

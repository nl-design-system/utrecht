<!-- @license CC0-1.0 -->

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

# Soorten links

Er zijn een aantal verschillende soorten links in het Design System te vinden:

- Tekstlinks
- Linklijst
- Top navigatie link
- Side navigatie link
- CTA Button
- Top taak button
- Heading als link
- Telefoonnummer link
- Accordion link
- Link cards

Deze links hebben een bepaald weergave als ze in een active, hover of focus staat zijn:

|                         | Tekst link            | Linklijst             | Top navigatie link | Side bar navigatie link   | CTA Button link           | Top taak button           | Headings that are links | Tel nummer link       | Accordion link            | Link cards |
| ----------------------- | --------------------- | --------------------- | ------------------ | ------------------------- | ------------------------- | ------------------------- | ----------------------- | --------------------- | ------------------------- | ---------- |
| :active                 | onderstreept          | niet onderstreept     | niet onderstreept  | niet onderstreept         | niet onderstreept         | niet onderstreept         | onderstreept            | onderstreept          | niet onderstreept         |            |
| :hover kleur            | kleur veranderd       | kleur veranderd       | onderstreept       |                           |                           |                           | kleur lichter           | kleur veranderd       |                           |            |
| :hover achtergrondkleur |                       |                       |                    | achtergrond kleur lichter | achtergrond kleur lichter | achtergrond kleur lichter |                         |                       | achtergrond kleur lichter |            |
| :hover onderstreping    | dikkere onderstreping | dikkere onderstreping |                    | onderstreept              |                           |                           |                         | dikkere onderstreping | onderstreept              |            |
| :hover grootte          |                       |                       |                    |                           | formaat 1.2 keer groter   | formaat 1.2 keer groter   |                         |                       |                           |            |
| :focus outline          | dotted outline        | dotted outline        | dotted outline     | dotted outline            | dotted outline            | dotted outline            | dotted outline          | dotted outline        | dotted outline            |            |
| :focus onderstreping    | onderstreept          |                       |                    |                           | niet onderstreept         |                           | niet onderstreept       |                       |                           |            |

## Design beslissingen

We maken de volgende design beslissignen over links:

- Links zijn onderstreept om een gebruiker snel en duidelijk te laten zien dat het een link is.
<!--- Alle link componenten die in een nieuw tabje geopend kunnen worden hebben een onderstreping. Hoe zit dit dan met toptask en CTA-button?-->
- Bij een hover krijgt een link in de tekst een dikkere onderstreping om duidelijk aan te geven dat de link onder de muisknop zit.
- Bij een hover maken we het component groter als het component een border of een achtergrondkleur heeft zodat je visuele feedback hebt van je hover zonder dat je een onderstreping ziet. De accordion en de hoofdnavigatie zijn de uitzondering op deze regel, maar deze krijgen wel weer een onderstreping.
- Bij een focus krijgt een component een gestippelde outline. Er is geen visuele feedback van de muis met een hover, dus op deze manier geven we aan dat dit component is geselecteerd.
- De gestippelde outline van de focus bestaat uit zwarte en witte puntjes zodat er altijd genoeg contrast is en dus niet afhankelijk is van de achtergrond kleur.
- We houden de visuele weergave van de focus state en de hover state strict van elkaar gescheiden zodat beide states een eigen unieke ervaring hebben, ook al is de bezoeker hier niet actief mee bezig.
- Een link die nog niet onderstreept is krijgt bij een hover state juist wel een onderstreping om aan te geven dat je er op kan klikken.

## Tekstlinks

Tekstlinks zijn standaard donkerblauw en onderstreept. In sommige gevallen zijn tekstlinks zwart of wit. Dit geldt bij teksten op een gekleurde achtergrond, waar blauw niet voldoende contrast biedt. De link tekst is andere kleur blauw in hover state De link tekst is onderstreept in hover state maar niet in focus state, een eventueel icon is niet onderstreept

## Linklijst

Lijklijsten hebben een pijl als voorloopteken worden gebruikt aan het einde van een tekst. Ze verwijzen naar gerelateerde informatie over het onderwerp wat er in de voorafgaande tekst is besproken. De links zijn donkerblauw, bold en hebben een pijl (>) als voorloopteken. Dit type link wordt ook gebruikt in de linklijst en de subnavigatie.

Bij een variant van de linklijsten is de pijl zwart (#000) in plaats van donkerblauw. Deze link wordt gebruikt in de linklijsten ‘related’ die verwijzen naar gerelateerde content onderaan een contentpagina.

## Top navigatie link

De top navigatie link is onderdeel van de top navigatiebalk die wordt gebruikt als hoofdnavigatie en die de gebruiker moet helpen te navigeren door de site.

## Side navigatie link

De side navigatie link is onderdeel van het metromenu die wordt gebruikt om te kunnen navigeren door een onderdeel van de site.

## Call-to-action button

De Call-to-action button vertelt de gebruiker een actie uit te voeren.

## Top taak button

De Top taak button is onderdeel van een set aan top taken die de gebruiker helpt bij navigeren door de meest gebruikte taken van de site duidelijk aan te bieden.

## Headings als link

Soms zijn headers een link.

## Telefoonnummer link

De telefoonnummer link stelt gebruikers in staat vanaf de website direct met de gemeente te bellen.

## Accordion link

Accordions geven overzicht door content achter een klik zichtbaar te maken.

<!--## Link cards-->

<!-- @license CC0-1.0 -->

<!-- markdownlint-disable MD033 -->

# UX Guidelines

## Gebruik van tekst

Links moeten duidelijk, gemakkelijk te begrijpen en voorspelbaar zijn. Gebruikers moeten een duidelijke verwachting hebben wat er gebeurt als er interactie is met een link d.m.v. een muis, vinger, spraak of ogen.

Gebruikers met ondersteunende technologie, zoals een schermlezer of braillebalk, horen/voelen vaak als eerste alle links in de content om hen te helpen snel te kunnen navigeren door de content. Er kan ook behoefte zijn om de de content vergroot te willen bekijken, zodat de gebruikers alleen de linktekst en een paar woorden eromheen tegelijkertijd kan zien.

Vermijd onduidelijke tekten in een link zoals 'hier' of 'lees meer' als link tekst hebben.

### Links in een zin

Links moeten nooit een hele zin in beslag nemen, maar alleen de tekst die beschrijft waar de gebruikers naar toe gaan als ze op de link klikken.

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
- Open interne links niet in een nieuwe tab. Hiermee schakel je één navigatiemanier uit om terug te gaan naar eerdere pagina's, de terug knop van de brower.

### Referenties

- [Waarom 'klik hier'niet werkt. Artikel van de Interaction Design Foundation.](https://www.interaction-design.org/literature/article/tips-for-better-hyperlink-ux)
- [Best practicesrondom links, Artikel op Prototypr.](https://blog.prototypr.io/a-guide-to-designing-perfect-links-in-ux-414558f35730)
- Interessante Do's en don'ts over Web Design, onder andere over links. [Artikel van UX Planet over links.](https://uxplanet.org/dos-and-don-ts-of-web-design-8c9d6a5de7c6)
- Hoe schrijf je goede links? [Uitgebreid artikel over links van de NN Group.](https://www.nngroup.com/articles/writing-links/)

## States

We beschrijven de volgende states van een link:

- **normal**: geen van de onderstaande states is van toepassing op de link. Deze state is gewoon de `:link` class in de code, maar we beschrijven hem hier om aan te geven dat de link 'normaal' is zonder een andere state. We gebruiken `normal` in plaats
- **active**: de link wordt actief gebruikt door de gebruiker. Bijvoorbeeld door er op te klikken.
- **hover**: de gebruiker pauzeert boven de link. Bijvoorbeeld door met de muiscursor er over te 'zweven'.
- **focus**: de link heeft de focus doordat er op geklikt of getapt is. Denk ook aan voice of eye-tracking.
- **focus-visible**: de link heeft de focus door de 'tab' knop van het keyboard.
- **visited**: de link is eerder gebruikt door de gebruiker.

### States Referenties

- [Website over: Hover, focus, active, door Wunder](https://wunder.io/wunderpedia/accessibility/accessible-uis/hover-focus-active/)
- [Richtlijnen over het visualiseren van links, door NN group](https://www.nngroup.com/articles/guidelines-for-visualizing-links/)

## Soorten links

Er zijn een aantal verschillende soorten links in het Design System te vinden:

- Tekstlinks
- Ankerlinks
- Links met pijl
- Linklijst
- Top navigatie link
- Side navigatie link
- CTA Button
- Top taak button
- Heading als link
- Telefoonnummer link
- Accordion link
- Link cards

TODO: Ankerlinks en links met pijl toevoegen!

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

### Design beslissingen

We maken de volgende design beslissingen over links:

- Links zijn onderstreept om een gebruiker snel en duidelijk te laten zien dat het een link is.
<!--- Alle link componenten die in een nieuw tabje geopend kunnen worden hebben een onderstreping. Hoe zit dit dan met toptask en CTA-button?-->
- Bij een hover krijgt een link in de tekst een dikkere onderstreping om duidelijk aan te geven dat de link onder de muisknop zit.
- Bij een hover maken we het component groter als het component een border of een achtergrondkleur heeft zodat je visuele feedback hebt van je hover zonder dat je een onderstreping ziet. De accordion en de hoofdnavigatie zijn de uitzondering op deze regel, maar deze krijgen wel weer een onderstreping.
- Bij een focus krijgt een component een gestippelde outline. Er is geen visuele feedback van de muis met een hover, dus op deze manier geven we aan dat dit component is geselecteerd.
- De gestippelde outline van de focus bestaat uit zwarte en witte puntjes zodat er altijd genoeg contrast is en dus niet afhankelijk is van de achtergrond kleur.
- We houden de visuele weergave van de focus state en de hover state strict van elkaar gescheiden zodat beide states een eigen unieke ervaring hebben, ook al is de bezoeker hier niet actief mee bezig.
- Een link die nog niet onderstreept is krijgt bij een hover state juist wel een onderstreping om aan te geven dat je er op kan klikken.

### Tekstlink

Tekstlinks zijn standaard donkerblauw en onderstreept. In sommige gevallen zijn tekstlinks zwart of wit. Dit geldt bij teksten op een gekleurde achtergrond, waar blauw niet voldoende contrast biedt. De link tekst is andere kleur blauw in hover state De link tekst is onderstreept in hover state maar niet in focus state, een eventueel icon is niet onderstreept

### Ankerlinks

Ankerlinks worden gebruikt om te navigeren naar specifieke content op de pagina. Ankerlinks staan boven de content waar ze naar verwijzen, komen alleen voor op contentpagina’s en worden gebruikt als opsomming. Ankerlinks zijn worden veel gebruikt als een soort inhoudsopgave van de pagina.
Ankerlinks zijn blauw, onderstreept en hebben een rood bolletje als voorloopteken.

### Link met pijl

Links met een pijl als voorloopteken worden gebruikt aan het einde van een tekst. Ze verwijzen naar gerelateerde informatie over het onderwerp wat er in de voorafgaande tekst is besproken. De links zijn dik gedrukt en niet onderstreept.

### Linklijst

Lijklijsten hebben een pijl als voorloopteken worden gebruikt aan het einde van een tekst. Ze verwijzen naar gerelateerde informatie over het onderwerp wat er in de voorafgaande tekst is besproken. De links zijn donkerblauw, bold en hebben een pijl (>) als voorloopteken. Dit type link wordt ook gebruikt in de linklijst en de subnavigatie.

Bij een variant van de linklijsten is de pijl zwart (#000) in plaats van donkerblauw. Deze link wordt gebruikt in de linklijsten ‘related’ die verwijzen naar gerelateerde content onderaan een contentpagina.

### Top navigatie link

De top navigatie link is onderdeel van de top navigatiebalk die wordt gebruikt als hoofdnavigatie en die de gebruiker moet helpen te navigeren door de site.

### Side navigatie link

De side navigatie link is onderdeel van het metromenu die wordt gebruikt om te kunnen navigeren door een onderdeel van de site.

### Call-to-action button

De Call-to-action button vertelt de gebruiker een actie uit te voeren.

### Top taak button

De Top taak button is onderdeel van een set aan top taken die de gebruiker helpt bij navigeren door de meest gebruikte taken van de site duidelijk aan te bieden.

### Headings als link

Soms zijn headers een link.

### Telefoonnummer link

De telefoonnummer link stelt gebruikers in staat vanaf de website direct met de gemeente te bellen.

### Accordion link

Accordions geven overzicht door content achter een klik zichtbaar te maken.

<!--## Link cards-->

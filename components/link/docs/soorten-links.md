<!-- @license CC0-1.0 -->

<!-- markdownlint-disable MD033 -->

# Soorten links

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
- Link cards (wordt ingevuld als component gebouwd wordt)

|                         | Tekst link            | Link met pijl       | Ankerlinks            | Linklijst             | Top navigatie link | Side bar navigatie link   | CTA Button link           | Top taak button           | Headings that are links | Tel nummer link       | Accordion link            | Link cards |
| ----------------------- | --------------------- | ------------------- | --------------------- | --------------------- | ------------------ | ------------------------- | ------------------------- | ------------------------- | ----------------------- | --------------------- | ------------------------- | ---------- |
| :active                 | onderstreept          | niet onderstreept   | onderstreept          | niet onderstreept     | niet onderstreept  | niet onderstreept         | niet onderstreept         | niet onderstreept         | onderstreept            | onderstreept          | niet onderstreept         |            |
| :hover kleur            | kleur veranderd       | kleur veranderd     | kleur veranderd       | kleur veranderd       |                    |                           |                           |                           | kleur lichter           | kleur veranderd       |                           |            |
| :hover achtergrondkleur |                       |                     |                       |                       |                    | achtergrond kleur lichter | achtergrond kleur lichter | achtergrond kleur lichter |                         |                       | achtergrond kleur lichter |            |
| :hover onderstreping    | dikkere onderstreping | dikke onderstreping | dikkere onderstreping | dikkere onderstreping |                    | onderstreept              |                           |                           |                         | dikkere onderstreping | onderstreept              |            |
| :hover grootte          |                       |                     |                       |                       |                    |                           | formaat 1.2 keer groter   | formaat 1.2 keer groter   |                         |                       |                           |            |
| :focus outline          | dotted outline        | dotted outline      | dotted outline        | dotted outline        | dotted outline     | dotted outline            | dotted outline            | dotted outline            | dotted outline          | dotted outline        | dotted outline            |            |
| :focus onderstreping    | onderstreept          |                     | onderstreept          |                       |                    |                           | niet onderstreept         |                           | niet onderstreept       |                       |                           |            |

## Design beslissingen

We maken de volgende design beslissingen over links:

- Links zijn onderstreept om een gebruiker snel en duidelijk te laten zien dat het een link is.
<!--- Alle link componenten die in een nieuw tabje geopend kunnen worden hebben een onderstreping. Hoe zit dit dan met toptask en CTA-button?-->
- Bij een hover krijgt een link in de tekst een dikkere onderstreping om duidelijk aan te geven dat de link onder de muisknop zit.
- Bij een hover maken we het component groter als het component een border of een achtergrondkleur heeft zodat je visuele feedback hebt van je hover zonder dat je een onderstreping ziet. De accordion en de hoofdnavigatie zijn de uitzondering op deze regel, maar deze krijgen wel weer een onderstreping.
- Bij een focus krijgt een component een gestippelde outline. Er is geen visuele feedback van de muis met een hover, dus op deze manier geven we aan dat dit component is geselecteerd.
- De gestippelde outline van de focus bestaat uit zwarte en witte puntjes zodat er altijd genoeg contrast is en dus niet afhankelijk is van de achtergrond kleur.
- We houden de visuele weergave van de focus state en de hover state strict van elkaar gescheiden zodat beide states een eigen unieke ervaring hebben, ook al is de bezoeker hier niet actief mee bezig.
- Een link die nog niet onderstreept is krijgt bij een hover state juist wel een onderstreping om aan te geven dat je er op kan klikken.

## Tekstlink

Tekstlinks zijn standaard donkerblauw en onderstreept. In sommige gevallen zijn tekstlinks zwart of wit. Dit geldt bij teksten op een gekleurde achtergrond, waar blauw niet voldoende contrast biedt. De link tekst is andere kleur blauw in hover state De link tekst is onderstreept in hover state maar niet in focus state, een eventueel icon is niet onderstreept

## Ankerlinks

Ankerlinks worden gebruikt om te navigeren naar specifieke content op de pagina. Ankerlinks staan boven de content waar ze naar verwijzen, komen alleen voor op contentpagina’s en worden gebruikt als opsomming. Ankerlinks zijn worden veel gebruikt als een soort inhoudsopgave van de pagina.
Ankerlinks zijn blauw, onderstreept en hebben een rood bolletje als voorloopteken.

### Link met pijl

Links met een pijl als voorloopteken worden gebruikt aan het einde van een tekst. Ze verwijzen naar gerelateerde informatie over het onderwerp wat er in de voorafgaande tekst is besproken. De links zijn dik gedrukt en niet onderstreept.

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

## Link Card

Wordt ingevuld als component gebouwd wordt.

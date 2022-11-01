<!-- @license CC0-1.0 -->

# Button

## Tekstbutton

Tekstlinks zijn standaard donkerblauw (#2A5587) en onderstreept. In sommige gevallen zijn tekstlinks zwart of wit. Dit geldt bij teksten op een gekleurde achtergrond, waar blauw niet voldoende contrast biedt. Kijk voor meer informatie over de contrastrichtlijnen bij kleuren (link naar kleuren).

### Voorbeeld

U kunt tegelijk een paspoort en een ID-kaart hebben. Met een paspoort kunt u naar alle landen reizen. Een ID-kaart is goedkoper, maar u kunt hiermee niet naar alle landen reizen.

## Button met pijl

Links met een pijl als voorloopteken worden gebruikt aan het einde van een tekst. Ze verwijzen naar gerelateerde informatie over het onderwerp wat er in de voorafgaande tekst is besproken. De links zijn donkerblauw (#2A5587), bold en hebben een pijl (>) als voorloopteken. Dit type link wordt ook gebruikt in de linklijst en de subnavigatie.

## Terminologie

- **button**: van het `<button>` HTML element, `role="button"` in ARIA.

## States

- `hover`
- `focus`
- `disabled`

## Class names

- `.utrecht-button`
- `.utrecht-button--focus`
- `.utrecht-button--hover`
- `.utrecht-button--disabled`

## Relevante WCAG regels

- [WCAG eis 2.1.3](https://www.w3.org/TR/WCAG21/#keyboard-no-exception): je kan de button activeren met `Enter` of `Space`, en het is mogelijk met `Tab` de button te focussen.
- [WCAG eis 2.4.6](https://www.w3.org/TR/WCAG21/#headings-and-labels): de label van de button moet duidelijk zijn
- [WCAG eis 2.5.2](https://www.w3.org/TR/WCAG21/#pointer-cancellation):
  - gebruik niet de `mousedown` event om de button te activeren, gebruik liever de `click` event
  - `mousedown` mag alleen gebruikt worden als `mouseup` het effect weer ongedaan maakt, bijvoorbeeld een "_fast foward_" button om audio of video door te spoelen.
- [WCAG eis 2.5.5](https://www.w3.org/TR/WCAG21/#target-size): de button moet groot genoeg zijn om aan te klikken, en kleine buttons moeten niet te dicht op een andere button staan.

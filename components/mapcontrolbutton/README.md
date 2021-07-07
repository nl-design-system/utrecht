<!--
@license EUPL-1.2
Copyright (c) 2021 Gemeente Utrecht
Copyright (c) 2021 Robbert Broersma
-->

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

## Design tokens

- Button
  - `--utrecht-button-border-radius`
  - `--utrecht-button-border-width`
  - `--utrecht-button-focus-transform-scale`
  - `--utrecht-button-font-size`
  - `--utrecht-button-margin-block-start`
  - `--utrecht-button-margin-block-end`
  - `--utrecht-button-margin-inline-start`
  - `--utrecht-button-margin-inline-end`
  - `--utrecht-button-padding-block-start`
  - `--utrecht-button-padding-block-end`
  - `--utrecht-button-padding-inline-start`
  - `--utrecht-button-padding-inline-end`
  - Modifier: primary action
    - `--utrecht-button-primary-action-background-color`
    - `--utrecht-button-primary-action-color`
    - `--utrecht-button-primary-action-hover-background-color`
  - Modifier: disabled
    - `--utrecht-button-disabled-background-color`
    - `--utrecht-button-disabled-color`

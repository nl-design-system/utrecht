<!-- @license CC0-1.0 -->

# Data badge

## HTML

Gebruik een inline HTML-element voor de _badge component_, zodat de badge binnen een `p` HTML-element gebruikt kan worden. Bijvoorbeeld een `span`, `time` of `data` element:

```html
<p>
  Belangrijke gegevens: <span class="utrecht-badge-data">≥ 250㎡</span>
  <span class="utrecht-badge-data">Energielabel A</span>
</p>
```

Gebruik niet een `div`:

```html
<p>Belangrijke gegevens: <div>≥ 250㎡</div> <div>Energielabel A</div></p>
```

Een `div` in een `p` element wordt door de parser gezien als het einde van een `p` element, waardoor je eigenlijk dit bereikt:

```html
<p>Belangrijke gegevens:</p>
<div>≥ 250㎡</div>
<div>Energielabel A</div>
</p>
```

### Computer-leesbare datum en tijd

Gebruik een `time` element wanneer je een datum of een datum en tijd hebt:

```html
<time class="utrecht-badge-data" datetime="2038-01-19T03:14:08Z">19 januari 2038 om 03:14:08</time>
```

Gebruik een `time` element wanneer je een een tijdsduur hebt, in het `datetime` attribuut moet periode in [ISO 8601 notatie](https://en.wikipedia.org/wiki/ISO_8601#Durations).

```html
<time class="utrecht-badge-data" datetime="PT1H39M">1 uur en 39 minuten</time>
```

### Overige computer-leesbare data

Gebruik een `data` element wanneer je een `value` hebt met een waarde die voor de computer duidelijk is. De gewone tekst kan dan voor mensen leesbaar zijn. Je kunt de `value` bijvoorbeeld gebruiken om een tabel te sorteren op die waarde. Gebruik nooit een `<data>` element zonder `value`.

```html
<tr>
  <th>Koningsweg 13</th>
  <td>
    <data class="utrecht-badge-data" value="259">≥ 250㎡</data>
  </td>
</tr>
```

## CSS

Als je de data badge verschillende designs wilt geven, dan kan dat met eigen CSS. De data badge component heeft standaard maar design tokens voor een soort kleur. Je kunt een class name maken om de kleur aan te passen:

```css
.utrecht-badge-data--myprefix-numeric {
  --utrecht-badge-background-color: var(--myprefix-color-blue);
  --utrecht-badge-color: var(--myprefix-color-offwhite);
}

.utrecht-badge-data--myprefix-date {
  --utrecht-badge-background-color: var(--myprefix-color-red);
  --utrecht-badge-color: var(--myprefix-color-offwhite);
}
```

Je kunt voor de modifier class name een eigen prefix gebruiken (zoals `example-`), zodat je er in de toekomst geen last van hebt als deze component toevallig een identieke uitbreiding krijgt.

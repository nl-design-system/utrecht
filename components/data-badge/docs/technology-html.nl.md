<!-- @license CC0-1.0 -->

# HTML

Gebruik een inline HTML-element voor de _badge component_, zodat de badge binnen een `p` HTML-element gebruikt kan worden. Bijvoorbeeld een `span`, `time` of `data` element:

```html
<p>
  Belangrijke gegevens: <span class="utrecht-data-badge">≥ 250㎡</span>
  <span class="utrecht-data-badge">Energielabel A</span>
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

## Computer-leesbare datum en tijd

Gebruik een `time` element wanneer je een datum of een datum en tijd hebt:

```html
<time class="utrecht-data-badge" datetime="2038-01-19T03:14:08Z">19 januari 2038 om 03:14:08</time>
```

Gebruik een `time` element wanneer je een een tijdsduur hebt, in het `datetime` attribuut moet periode in [ISO 8601 notatie](https://en.wikipedia.org/wiki/ISO_8601#Durations).

```html
<time class="utrecht-data-badge" datetime="PT1H39M">1 uur en 39 minuten</time>
```

## Overige computer-leesbare data

Gebruik een `data` element wanneer je een `value` hebt met een waarde die voor de computer duidelijk is. De gewone tekst kan dan voor mensen leesbaar zijn. Je kunt de `value` bijvoorbeeld gebruiken om een tabel te sorteren op die waarde. Gebruik nooit een `<data>` element zonder `value`.

```html
<tr>
  <th>Koningsweg 13</th>
  <td>
    <data class="utrecht-data-badge" value="259">≥ 250㎡</data>
  </td>
</tr>
```

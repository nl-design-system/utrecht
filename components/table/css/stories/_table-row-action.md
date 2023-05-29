<!-- @license CC0-1.0 -->
<!-- markdownlint-disable MD041 -->

Het button-label "Bewerken" komt meerdere keren voor in een tabel waar elke tabelrij een "Bewerken" button heeft. Dit label is onduidelijk zonder de context van de tabelrij. Bijvoorbeeld: een _screen reader_ leest meerdere keren hetzelfde label "Bewerken" voor. In een overzicht van _form controls_ staat meerdere keren "Bewerken", terwijl elke button een andere actie heeft.

Gebruik een extra duidelijk label voor buttons die context geeft. Gebruik `aria-label` als je een label kan genereren met de context. Bijvoorbeeld:

```js
const buttonLabel = `Bewerk: ${name}`;
```

## Label met twee onderdelen

Je kan ook `aria-labelledby` gebruiken om meerdere teksten te combineren tot één label. Samen vormen `<button>Bewerken</button>` en `<td>Aanvraag parkeervergunning</td>` het label `"Bewerken Aanvraag parkeervergunning"`:

```html
<tr>
  <th id="row-1-column-1">Aanvraag parkeervergunning</th>
  <td>
    <button id="row-1-button" aria-labelledby="row-1-button row-1-column-1">Bewerken</button>
  </td>
</tr>
```

Zie ook: [WCAG Technique: Using `aria-labelledby` to concatenate a label from several text nodes](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA9)

## Label met drie of méér onderdelen

Soms is één tabelrij niet genoeg om een uniek label te genereren, dan is meer context nodig om duidelijk te zijn:

- "Bewerken" "Isaac Asimov" "Foundation"
- "Bewerken" "Ursula K. Le Guin" "A Wizard of Earthsea"
- "Bewerken" "Ursula K. Le Guin" "Tales from Earthsea"

Gebruik `aria-labelledby` om meerdere kolommen te koppelen als label:

```html
<tr>
  <td id="row-1-column-1">Isaac Asimov</td>
  <td id="row-1-column-2"><cite lang="en">Foundation</cite></td>
  <td>
    <button id="row-1-button" aria-labelledby="row-1-button row-1-column-1 row-1-column-1 row-1-column-2">
      Bewerken
    </button>
  </td>
</tr>
<tr>
  <td id="row-2-column-1">Ursula K. Le Guin</td>
  <td id="row-2-column-2"><cite lang="en">A Wizard of Earthsea</cite></td>
  <td>
    <button id="row-2-button" aria-labelledby="row-2-button row-2-column-1 row-2-column-1 row-2-column-2">
      Bewerken
    </button>
  </td>
</tr>
<tr>
  <td id="row-3-column-1">Ursula K. Le Guin</td>
  <td id="row-3-column-2"><cite lang="en">Tales from Earthsea</cite></td>
  <td>
    <button id="row-3-button" aria-labelledby="row-3-button row-3-column-1 row-3-column-1 row-3-column-2">
      Bewerken
    </button>
  </td>
</tr>
```

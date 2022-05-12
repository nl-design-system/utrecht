import clsx from 'clsx';

export const defaultArgs = {
  alternateRowColor: false,
};

// Source of table:
// https://www.utrecht.nl/wonen-en-leven/parkeren/ervaart-u-parkeeroverlast/spinozaplantsoen-invoeren-betaald-parkeren/

export const Table = ({ alternateRowColor = false }) =>
  `<div class="utrecht-html">
<table lang="nl" summary="Overzicht van de stemmen voor en tegen het betaald parkeren." class="${clsx(
    alternateRowColor && 'alternate-row-color',
  )}">
  <caption>Uitslag internetpeiling 8 juni tot en met 28 juni</caption>
  <thead>
    <tr>
      <th scope="col">Gebied</th>
      <th scope="col" class="numeric">Voor</th>
      <th scope="col" class="numeric">Tegen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Locatie A</td>
      <td class="numeric">53</td>
      <td class="numeric">113</td>
    </tr>
    <tr>
      <td>Locatie B</td>
      <td class="numeric">58</td>
      <td class="numeric">42</td>
    </tr>
    <tr>
      <td>Locatie C</td>
      <td class="numeric">87</td>
      <td class="numeric">16</td>
    </tr>
  </tbody>
</table>
  </div>`;

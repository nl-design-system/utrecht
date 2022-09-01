/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import React from 'react';

export const argTypes = {
  alternateRowColor: {
    description: 'Alternate row color',
    control: 'boolean',
  },
};

export const defaultArgs = {
  alternateRowColor: false,
};

// Source of table:
// https://www.utrecht.nl/wonen-en-leven/parkeren/ervaart-u-parkeeroverlast/spinozaplantsoen-invoeren-betaald-parkeren/

export const Table = ({ alternateRowColor = defaultArgs.alternateRowColor }) => (
  <div className="utrecht-html">
    <table
      lang="nl"
      summary="Overzicht van de stemmen voor en tegen het betaald parkeren."
      className={alternateRowColor ? 'alternate-row-color' : null}
    >
      <caption>Uitslag internetpeiling 8 juni tot en met 28 juni</caption>
      <thead>
        <tr>
          <th scope="col">Gebied</th>
          <th scope="col" className="numeric">
            Voor
          </th>
          <th scope="col" className="numeric">
            Tegen
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Locatie A</td>
          <td className="numeric">53</td>
          <td className="numeric">113</td>
        </tr>
        <tr>
          <td>Locatie B</td>
          <td className="numeric">58</td>
          <td className="numeric">42</td>
        </tr>
        <tr>
          <td>Locatie C</td>
          <td className="numeric">87</td>
          <td className="numeric">16</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Table;

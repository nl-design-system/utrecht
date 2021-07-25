/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

const stringSort = (a, b) => (a === b ? 0 : a > b ? 1 : -1);

module.exports = {
  'css/property': function ({ dictionary }) {
    let { allTokens } = dictionary;

    // https://drafts.css-houdini.org/css-properties-values-api/#the-css-property-rule-interface
    return allTokens
      .sort((tokenA, tokenB) => stringSort(tokenA.name, tokenB.name))
      .filter((token) => token.css && token.css.syntax && typeof token.css.inherits === 'boolean')
      .map((token) => {
        let str = `@property --${token.name} { `;

        str += `syntax: '${token.css.syntax}'; `;

        str += `inherits: ${token.css.inherits}; `;

        if (token.css.initialValue) {
          str += `initial-value: ${token.css.initialValue}; `;
        }

        str += `}`;

        return str;
      })
      .join('\n');
  },
};

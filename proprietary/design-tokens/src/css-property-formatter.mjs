/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

const stringSort = (a, b) => (a === b ? 0 : a > b ? 1 : -1);

export const propertyFormatter = function ({ dictionary }) {
  let { allTokens } = dictionary;

  // https://drafts.css-houdini.org/css-properties-values-api/#the-css-property-rule-interface
  const css = allTokens
    .sort((tokenA, tokenB) => stringSort(tokenA.name, tokenB.name))
    .filter(
      (token) =>
        token['$extensions'] &&
        token['$extensions']['nl.nldesignsystem.css-property-syntax'] &&
        token['$extensions']['nl.nldesignsystem.css-property-syntax'] !== '*',
    )
    .map((token) => {
      let str = `@property --${token.name} { `;
      const syntaxValue = token['$extensions']['nl.nldesignsystem.css-property-syntax'];

      const syntax = Array.isArray(syntaxValue) ? syntaxValue.join(' | ') : syntaxValue;

      str += `syntax: '${syntax}'; `;

      str += `inherits: true; `;

      str += `}`;

      return str;
    })
    .join('\n');

  return css;
};

export const propertyFormatterHooksConfig = {
  'css/property': propertyFormatter,
};

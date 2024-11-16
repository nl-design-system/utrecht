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
        token['$extensions']['nl.nldesignsystem.css.property'] &&
        token['$extensions']['nl.nldesignsystem.css.property'].syntax !== '*' &&
        typeof token['$extensions']['nl.nldesignsystem.css.property'].inherits === 'boolean',
    )
    .map((token) => {
      let str = `@property --${token.name} { `;
      const cssProperty = token['$extensions']['nl.nldesignsystem.css.property'];

      const syntax = Array.isArray(cssProperty.syntax) ? cssProperty.syntax.join(' | ') : cssProperty.syntax;

      str += `syntax: '${syntax}'; `;

      str += `inherits: ${cssProperty.inherits}; `;

      if (cssProperty.initialValue) {
        str += `initial-value: ${cssProperty.initialValue}; `;
      }

      str += `}`;

      return str;
    })
    .join('\n');

  return css;
};

export const propertyFormatterHooksConfig = {
  'css/property': propertyFormatter,
};

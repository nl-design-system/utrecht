/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

const stringSort = (a, b) => (a === b ? 0 : a > b ? 1 : -1);

const sortByName = (a, b) => stringSort(a.name, b.name);

const BORDER_RADIUS = 'borderRadius';
const BORDER_WIDTH = 'borderWidth';
const COLOR = 'color';
const FONT = 'typography';
const FONT_FAMILIY = 'fontFamilies';
const FONT_SIZE = 'fontSizes';
const FONT_WEIGHT = 'fontWeights';
const LETTER_SPACING = 'letterSpacing';
const LINE_HEIGHT = 'lineHeights';
const OPACITY = 'opacity';
const SIZE = 'sizing';

const SPACING = 'spacing';
const PARAGRAPH_SPACING = 'paragraphSpacing';

const template = {
  borderRadius: {},
  borderWidth: {},
  colors: {},
  fontFamilies: {},
  fontSizes: {},
  fontWeights: {},
  letterSpacing: {},
  lineHeights: {},
  opacity: {},
  paragraphSpacing: {},
  sizing: {},
  spacing: {},
  typography: {},
};

module.exports = {
  'json/figma-tokens': function ({ dictionary }) {
    let figmaTokens = {
      ...template,
      borderRadius: dictionary.allTokens
        .filter((token) => token.path[token.path.length - 1] === 'border-radius')
        .sort((a, b) => stringSort(a.name, b.name))
        .reduce(
          (map, token) => ({
            ...map,
            [token.name]: {
              type: BORDER_RADIUS,
              value: token.value,
            },
          }),
          {},
        ),
      borderWidth: dictionary.allTokens
        .filter((token) =>
          [
            'border-width',
            'border-inline-start-width',
            'border-inline-end-width',
            'border-block-start-width',
            'border-block-end-width',
            'border-top-width',
            'border-right-width',
            'border-bottom-width',
            'border-left-width',
          ].includes(token.path[token.path.length - 1]),
        )
        .sort((a, b) => stringSort(a.name, b.name))
        .reduce(
          (map, token) => ({
            ...map,
            [token.name]: {
              type: BORDER_WIDTH,
              value: token.value,
            },
          }),
          {},
        ),
      colors: dictionary.allTokens
        .filter((token) => token.css && token.css.syntax && token.css.syntax === '<color>')
        .sort((a, b) => stringSort(a.name, b.name))
        .reduce(
          (map, token) => ({
            ...map,
            [token.name]: {
              type: COLOR,
              value: token.value,
            },
          }),
          {},
        ),
      fontFamilies: dictionary.allTokens
        .filter((token) => token.path[token.path.length - 1] === 'font-family')
        .sort((a, b) => stringSort(a.name, b.name))
        .reduce(
          (map, token) => ({
            ...map,
            [token.name]: {
              type: FONT_FAMILIY,
              value: token.value,
            },
          }),
          {},
        ),
      fontSizes: dictionary.allTokens
        .filter((token) => token.path[token.path.length - 1] === 'font-size')
        .sort((a, b) => stringSort(a.name, b.name))
        .reduce(
          (map, token) => ({
            ...map,
            [token.name]: {
              type: FONT_SIZE,
              value: token.value,
            },
          }),
          {},
        ),
      fontWeights: dictionary.allTokens
        .filter((token) => token.path[token.path.length - 1] === 'font-weight')
        .sort((a, b) => stringSort(a.name, b.name))
        .reduce(
          (map, token) => ({
            ...map,
            [token.name]: {
              type: FONT_WEIGHT,
              value: token.value,
            },
          }),
          {},
        ),
      letterSpacing: dictionary.allTokens
        .filter((token) => token.path[token.path.length - 1] === 'letter-spacing')
        .sort((a, b) => stringSort(a.name, b.name))
        .reduce(
          (map, token) => ({
            ...map,
            [token.name]: {
              type: LETTER_SPACING,
              value: token.value,
            },
          }),
          {},
        ),
      lineHeights: dictionary.allTokens
        .filter((token) => token.path[token.path.length - 1] === 'line-height')
        .sort((a, b) => stringSort(a.name, b.name))
        .reduce(
          (map, token) => ({
            ...map,
            [token.name]: {
              type: LINE_HEIGHT,
              value: token.value,
            },
          }),
          {},
        ),
      opacity: dictionary.allTokens
        .filter((token) => token.path[token.path.length - 1] === 'opacity')
        .sort((a, b) => stringSort(a.name, b.name))
        .reduce(
          (map, token) => ({
            ...map,
            [token.name]: {
              type: OPACITY,
              value: token.value,
            },
          }),
          {},
        ),
      sizes: dictionary.allTokens
        .filter((token) =>
          [
            'block-size',
            'inline-size',
            'max-block-size',
            'max-inline-size',
            'min-block-size',
            'min-inline-size',
          ].includes(token.path[token.path.length - 1]),
        )
        .sort((a, b) => stringSort(a.name, b.name))
        .reduce(
          (map, token) => ({
            ...map,
            [token.name]: {
              type: SIZE,
              value: token.value,
            },
          }),
          {},
        ),
      spacing: dictionary.allTokens
        .filter((token) =>
          [
            'margin-block-end',
            'margin-block-start',
            'margin-bottom',
            'margin-inline-end',
            'margin-inline-start',
            'margin-left',
            'margin-right',
            'margin-top',
            'padding-block-end',
            'padding-block-start',
            'padding-bottom',
            'padding-inline-end',
            'padding-inline-start',
            'padding-left',
            'padding-right',
            'padding-top',
          ].includes(token.path[token.path.length - 1]),
        )
        .sort((a, b) => stringSort(a.name, b.name))
        .reduce(
          (map, token) => ({
            ...map,
            [token.name]: {
              type: SPACING,
              value: token.value,
            },
          }),
          {},
        ),
    };

    // dictionary.allTokens.sort(sortByName)
    console.log(figmaTokens);
    return JSON.stringify(figmaTokens, null, '  ');
  },
};

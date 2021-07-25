/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

const presenters = {
  Animation: 'Animation',
  Border: 'Border',
  BorderRadius: 'BorderRadius',
  Color: 'Color',
  Easing: 'Easing',
  FontFamily: 'FontFamily',
  FontSize: 'FontSize',
  FontWeight: 'FontWeight',
  LineHeight: 'LineHeight',
  Opacity: 'Opacity',
  Shadow: 'Shadow',
  Spacing: 'Spacing',
};

const syntaxToPresenter = {
  '<color>': presenters.Color,
};

// const endsWithCssProperty = (name) => /-(background-color|font-weight)$/.test(name);

const tokenNameToPresenter = (name) => {
  let presenter;
  if (/font-weight$/.test(name)) {
    presenter = presenters.FontWeight;
  } else if (/-color$/.test(name)) {
    presenter = presenters.Color;
  } else if (/-font-size$/.test(name)) {
    presenter = presenters.FontSize;
  } else if (/-(margin|padding)-(block-end|block-start|inline-end|inline-start|top|left|right|bottom)$/.test(name)) {
    presenter = presenters.Spacing;
  } else if (/-opacity$/.test(name)) {
    presenter = presenters.Opacity;
  } else if (/-line-height$/.test(name)) {
    presenter = presenters.LineHeight;
  } else if (/-font-family$/.test(name)) {
    presenter = presenters.FontFamily;
  } else if (/-border(-(top|bottom)-(left|right)|-(start|end)-(start|end))?radius$/.test(name)) {
    presenter = presenters.Opacity;
  } else if (/-border(-(block-end|block-start|inline-end|inline-start|top|left|right|bottom))?-style$/.test(name)) {
    presenter = presenters.Border;
  } else if (/-box-shadow$/.test(name)) {
    presenter = presenters.Border;
  }
  return presenter;
};

module.exports = {
  'css/storybook-design-token': ({ dictionary, options = {} }) => {
    let { allTokens } = dictionary;
    const LF = '\n';
    const indentation = '  ';
    const { selector = ':root' } = options;

    const body = allTokens
      .filter(
        (token) =>
          (token.css && Object.prototype.hasOwnProperty.call(syntaxToPresenter, token.css.syntax)) ||
          !!tokenNameToPresenter(token.name),
      )
      .map((token) => {
        return `${indentation}--${token.name}: ${token.value}; /** @presenter ${
          token.css && token.css.syntax ? syntaxToPresenter[token.css.syntax] : tokenNameToPresenter(token.name)
        } @category Various */`;
      })
      .join(LF);

    return `${selector} {${LF}${body}${LF}}${LF}`;
  },
};

import Color from 'colorjs.io';
import PropTypes from 'prop-types';
import React from 'react';
import { ColorExample as ColorSample } from './ColorExample';

const ColorWrapper = ({ backgroundColor, children, color }) => (
  <div
    className="utrecht-document utrecht-document--surface"
    style={{
      '--utrecht-document-background-color': backgroundColor,
      '--utrecht-document-color': color,
      '--utrecht-heading-color': color,
      '--utrecht-heading-1-color': color,
      '--utrecht-heading-2-color': color,
      '--utrecht-heading-3-color': color,
      '--utrecht-heading-4-color': color,
      '--utrecht-heading-5-color': color,
      '--utrecht-heading-6-color': color,
      '--utrecht-paragraph-color': color,
    }}
  >
    {children}
  </div>
);

const ColorComboDemo = ({ combos }) => (
  <dl>
    {combos.map(({ backgroundColor, backgroundColorToken, color, colorToken, contrastWCAG21 }) => (
      <div>
        <dt>
          {colorToken.name} on {backgroundColorToken.name} heeft als contrast {contrastWCAG21.toPrecision(2)}:1
        </dt>
        <dd>
          <ColorWrapper {...{ backgroundColor, color }}>
            <p className="utrecht-paragraph">The Quick Brown Fox Jumps Over The Lazy Dog</p>
          </ColorWrapper>
        </dd>
      </div>
    ))}
  </dl>
);

const ColorGrid = ({ colors, minWCAG21 = 3, minAPCA = 45, caption }) => (
  <table>
    {caption && <caption>{caption}</caption>}
    <thead>
      <tr>
        <th></th>
        {colors.map((token) => {
          return (
            <th scope="col" style={{ writingMode: 'vertical-lr', minWidth: '2em' }}>
              {token.name}
            </th>
          );
        })}
      </tr>
    </thead>
    <thead>
      {colors.map((token) => {
        const otherColors = createForegroundColorContrastList(token, colors);
        return (
          <tr>
            <th scope="row">{token.name}</th>
            {otherColors.map(({ color, backgroundColor, contrastWCAG21, contrastAPCA }) => (
              <td>
                {contrastWCAG21 >= minWCAG21 && contrastAPCA >= minAPCA ? (
                  <ColorSample
                    color={backgroundColor}
                    style={{
                      padding: '0.5em',
                    }}
                  >
                    <ColorSample
                      color={color}
                      style={{
                        '--utrecht-color-sample-min-size': '1em',
                        '--utrecht-color-sample-border-width': '0',
                        '--utrecht-color-sample-border-radius': '1em',
                        width: '1em',
                        height: '1em',
                        borderWidth: 0,
                      }}
                    />
                  </ColorSample>
                ) : null}
              </td>
            ))}
          </tr>
        );
      })}
    </thead>
  </table>
);

const createBackgroundColorContrastList = (backgroundColorToken, colorTokens) => {
  const backgroundColor = new Color(backgroundColorToken.value);
  return colorTokens.map((colorToken) => {
    const color = new Color(colorToken.value);
    return {
      colorToken,
      color,
      backgroundColor,
      backgroundColorToken,
      contrastWCAG21: color.contrast(backgroundColor, { algorithm: 'WCAG21' }),
      contrastAPCA: color.contrast(backgroundColor, { algorithm: 'APCA' }),
    };
  });
};

const createForegroundColorContrastList = (colorToken, colorTokens) => {
  const color = new Color(colorToken.value);
  return colorTokens.map((backgroundColorToken) => {
    const backgroundColor = new Color(backgroundColorToken.value);
    return {
      colorToken,
      color,
      backgroundColor,
      backgroundColorToken,
      contrastWCAG21: color.contrast(backgroundColor, { algorithm: 'WCAG21' }),
      contrastAPCA: color.contrast(backgroundColor, { algorithm: 'APCA' }),
    };
  });
};

// Compare one color against a list of other colors
// Determine the contrast in two situations:
// 1) the contrast color as background-color
// 2) the contrast color as foreground color
const createContrastMatrix = (contrastColorToken, colorTokens) => {
  return {
    asBackgroundColor: createBackgroundColorContrastList(contrastColorToken, colorTokens),
    asForegroundColor: createForegroundColorContrastList(contrastColorToken, colorTokens),
  };
};

export const PrimaryColorsTable = ({ colors }) => {
  console.log(colors);
  const colorData = colors.map((token) => {
    const obj = new Color(token.value);
    const luminance = obj.luminance;
    console.log(obj.to('HSL'));
    const hue = obj.to('HSL').h;
    return {
      token,
      name: token.name,
      color: token.value,
      luminance,
      hue: typeof hue === 'number' ? hue : '',
    };
  });

  return (
    <>
      <table>
        <caption>Primary colors</caption>
        <thead>
          <tr>
            <th scope="col">name</th>
            <td scope="col">CSS color</td>
            <th scope="col">sample</th>
            <th scope="col">hue</th>
            <th scope="col">luminance</th>
          </tr>
        </thead>
        <tbody>
          {colorData.map((data) => {
            return (
              <tr>
                <th scope="row">{data.name}</th>
                <td>{data.color}</td>
                <td>
                  <ColorSample color={data.color} />
                </td>
                <td>{data.hue}</td>
                <td>{data.luminance}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <ColorGrid colors={colors} caption="Contrast color grid" />
      <ColorGrid colors={colors} minWCAG={7} minAPCA={75} caption="High-contrast color grid" />
      {colorData.map((data) => {
        const { asForegroundColor, asBackgroundColor } = createContrastMatrix(data.token, colors);
        const wcag2aa = asForegroundColor.filter(({ contrastWCAG21 }) => contrastWCAG21 >= 3);
        const wcag2aaa = asForegroundColor.filter(({ contrastWCAG21 }) => contrastWCAG21 >= 7);
        const nldsText = asForegroundColor.filter(
          ({ contrastWCAG21, contrastAPCA }) => contrastWCAG21 >= 3 && Math.abs(contrastAPCA) >= 45,
        );
        const nldsTextHighContrast = asForegroundColor.filter(
          ({ contrastWCAG21, contrastAPCA }) => contrastWCAG21 >= 7 && Math.abs(contrastAPCA) >= 75,
        );

        const bg_wcag2aa = asBackgroundColor.filter(({ contrastWCAG21 }) => contrastWCAG21 >= 3);
        const bg_wcag2aaa = asBackgroundColor.filter(({ contrastWCAG21 }) => contrastWCAG21 >= 7);
        const bg_nldsText = asBackgroundColor.filter(
          ({ contrastWCAG21, contrastAPCA }) => contrastWCAG21 >= 3 && Math.abs(contrastAPCA) >= 45,
        );
        const bg_nldsTextHighContrast = asBackgroundColor.filter(
          ({ contrastWCAG21, contrastAPCA }) => contrastWCAG21 >= 7 && Math.abs(contrastAPCA) >= 75,
        );
        return (
          <details>
            <summary>{data.name}</summary>
            <p>
              <ColorSample color={data.color} />
            </p>
            <h3>Als voorgrondkleur</h3>
            <details>
              <summary>
                NL Design System heeft geen bezwaar tegen de combinatie met de volgende{' '}
                <strong>{nldsText.length}</strong> achtergrondkleuren:
              </summary>
              <ColorComboDemo combos={nldsText} />
            </details>
            <details>
              <summary>
                NL Design System heeft voor <i>high-contrast mode</i> geen bezwaar tegen de combinatie met de volgende{' '}
                <strong>{nldsTextHighContrast.length}</strong> achtergrondkleuren:
              </summary>
              <ColorComboDemo combos={nldsTextHighContrast} />
            </details>
            <details>
              <summary>
                Deze kleur heeft voldoende contrast (voor WCAG 2.1 AA meer dan 3.0:1) om als tekstkleur gebruikt te
                worden op de volgende <strong>{wcag2aa.length}</strong> achtergrondkleuren:
              </summary>
              <ColorComboDemo combos={wcag2aa} />
            </details>
            <details>
              <summary>
                In <i>high contrast mode</i> (voor WCAG 2.1 AAA meer dan 7.0:1) heeft deze kleur voldoende contrast om
                als tekstkleur gebruikt te worden op de volgende <strong>{wcag2aaa.length}</strong> achtergrondkleuren:
              </summary>
              <ColorComboDemo combos={wcag2aaa} />
            </details>
            <h3>Als achtergrondkleur</h3>
            <details>
              <summary>
                NL Design System heeft geen bezwaar tegen de combinatie met de volgende{' '}
                <strong>{bg_nldsText.length}</strong> voorgrondkleuren:
              </summary>
              <ColorComboDemo combos={bg_nldsText} />
            </details>
            <details>
              <summary>
                NL Design System heeft voor <i>high-contrast mode</i> geen bezwaar tegen de combinatie met de volgende{' '}
                <strong>{bg_nldsTextHighContrast.length}</strong> voorgrondkleuren:
              </summary>
              <ColorComboDemo combos={bg_nldsTextHighContrast} />
            </details>
            <details>
              <summary>
                Deze kleur heeft voldoende contrast (voor WCAG 2.1 AA meer dan 3.0:1) om als tekstkleur gebruikt te
                worden op de volgende <strong>{bg_wcag2aa.length}</strong> voorgrondkleuren:
              </summary>
              <ColorComboDemo combos={bg_wcag2aa} />
            </details>
            <details>
              <summary>
                In <i>high contrast mode</i> (voor WCAG 2.1 AAA meer dan 7.0:1) heeft deze kleur voldoende contrast om
                als tekstkleur gebruikt te worden op de volgende <strong>{bg_wcag2aaa.length}</strong> voorgrondkleuren:
              </summary>
              <ColorComboDemo combos={bg_wcag2aaa} />
            </details>
          </details>
        );
      })}
    </>
  );
};

PrimaryColorsTable.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
};

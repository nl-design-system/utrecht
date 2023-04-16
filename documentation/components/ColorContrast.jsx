import { APCAcontrast } from 'apca-w3';
import { BPCAcontrast, bridgeRatio, sRGBtoY } from 'bridge-pca';
import Color from 'colorjs.io';
import { colorParsley } from 'colorparsley';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { ColorExample as ColorSample } from './ColorExample';

export const ColorContrast = ({ backgroundColor, color }) => {
  const [a, setBackgroundColor] = useState(backgroundColor || '');
  const [b, setColor] = useState(color || '');

  // Use `colorjs.io` to parse any CSS4 color
  const colorObjA = new Color(a);
  const colorObjB = new Color(b);

  const backgroundColorHex = colorObjA.toString({ format: 'hex' });
  const colorHex = colorObjB.toString({ format: 'hex' });
  // For more information on how to use `bridge-pca`:
  // https://www.npmjs.com/package/bridge-pca
  let textColor = colorParsley(b);
  let bgColor = colorParsley(a);

  let txtY = sRGBtoY(textColor);
  let bgY = sRGBtoY(bgColor);

  let contrastLc = BPCAcontrast(txtY, bgY);
  const wcag2 = colorObjA.contrast(colorObjB, { algorithm: 'WCAG21' });
  let wcag3ContrastLc = APCAcontrast(txtY, bgY);
  let wcag2ratio = bridgeRatio(contrastLc, txtY, bgY);
  let wcag3ratio = bridgeRatio(wcag3ContrastLc, txtY, bgY);

  return (
    <div>
      <form>
        <p>
          <label>
            Background:{' '}
            <input
              type="color"
              name="colorA"
              defaultValue={backgroundColor}
              onInput={(evt) => setBackgroundColor(evt.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Constrast color:{' '}
            <input type="color" name="colorB" defaultValue={color} onInput={(evt) => setColor(evt.target.value)} />
          </label>
        </p>
        <hr />
        <dl>
          <div>
            <dt>Background color:</dt>
            <dd>
              <ColorSample color={a} />
              {/*<pre>xx{JSON.stringify(colorObjA, null, 2)}</pre>*/}
              <code>{backgroundColorHex}</code>
            </dd>
          </div>
          <div>
            <dt>Contrast color:</dt>
            <dd>
              <ColorSample color={b} />
              <code>{colorHex}</code>
            </dd>
          </div>
          <div>
            <dt>WCAG 2 contrast ratio (Color.js):</dt>
            <dd>
              <output>{wcag2}</output>
            </dd>
            <dd>
              {wcag2 > 3.0 ? 'WCAG 2.1: voldoet aan contrasteis niet-tekstuele elementen (minstens 3,0 : 1)' : ''}
            </dd>
            <dd>
              {wcag2 > 4.5 ? 'WCAG 2.1: voldoet aan contrasteis voor tekst op achtergrond (minstens 4,5 : 1)' : ''}
            </dd>
          </div>
          <div>
            <dt>WCAG 2 contrast:</dt>
            <dd>
              <output>Lc {contrastLc}</output>
            </dd>
          </div>
          <div>
            <dt>WCAG 2 contrast ratio:</dt>
            <dd>
              <output>{wcag2ratio}</output>
            </dd>
          </div>
          <div>
            <dt>WCAG 3 contrast:</dt>
            <dd>
              <output>Lc {wcag3ContrastLc}</output>
            </dd>
          </div>
          <div>
            <dt>WCAG 3 contrast ratio:</dt>
            <dd>
              <output>{wcag3ratio}</output>
            </dd>
            <dd>
              {wcag3ratio > 3.0 ? 'AACP: voldoet aan contrasteis niet-tekstuele elementen (minstens 3,0 : 1)' : ''}
            </dd>
            <dd>
              {wcag3ratio > 4.5 ? 'AACP: voldoet aan contrasteis voor tekst op achtergrond (minstens 4,5 : 1)' : ''}
            </dd>
          </div>
        </dl>
        <p>
          <a href={`https://contrast-ratio.com/#${backgroundColorHex}-on-${colorHex}`}>contrast-ratio.com</a>
        </p>
      </form>
      <div
        className="utrecht-document utrecht-document--surface"
        style={{
          '--utrecht-document-background-color': a,
          '--utrecht-document-color': b,
          '--utrecht-heading-color': b,
          '--utrecht-heading-1-color': b,
          '--utrecht-heading-2-color': b,
          '--utrecht-heading-3-color': b,
          '--utrecht-heading-4-color': b,
          '--utrecht-heading-5-color': b,
          '--utrecht-heading-6-color': b,
          '--utrecht-paragraph-color': b,
        }}
      >
        <h1 className="utrecht-heading-1" role="presentation">
          The Quick Brown Fox Jumps Over The Lazy Dog
        </h1>
        <h2 className="utrecht-heading-2" role="presentation">
          The Quick Brown Fox Jumps Over The Lazy Dog
        </h2>
        <h3 className="utrecht-heading-3" role="presentation">
          The Quick Brown Fox Jumps Over The Lazy Dog
        </h3>
        <h4 className="utrecht-heading-4" role="presentation">
          The Quick Brown Fox Jumps Over The Lazy Dog
        </h4>
        <h5 className="utrecht-heading-5" role="presentation">
          The Quick Brown Fox Jumps Over The Lazy Dog
        </h5>
        <h6 className="utrecht-heading-6" role="presentation">
          The Quick Brown Fox Jumps Over The Lazy Dog
        </h6>
        <p className="utrecht-paragraph" role="presentation">
          The Quick Brown Fox Jumps Over The Lazy Dog
        </p>
      </div>
    </div>
  );
};

ColorContrast.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};

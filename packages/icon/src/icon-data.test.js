/* eslint-env node */
const assert = require('node:assert/strict');
const { describe, it } = require('node:test');
const { toIconData } = require('./icon-data.js');

const svg = `<svg viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" width="1em">
  <defs>
    <clipPath id="a">
      <path d="M0 0h8v14H0z"/>
    </clipPath>
  </defs>
  <g clip-path="url(#a)">
    <path d="M1 1l6 6-6 6"/>
  </g>
</svg>`;

describe('toIconData', () => {
  it('returns the viewBox of the svg element', () => {
    assert.equal(toIconData(svg, 'utrecht-icon-arrow').viewBox, '0 0 8 14');
  });

  it('returns the content without the svg element and without line breaks', () => {
    const { body } = toIconData(svg, 'utrecht-icon-arrow');
    assert.match(body, /^<defs>/);
    assert.match(body, /<\/g>$/);
    assert.doesNotMatch(body, /<svg|\n/);
  });

  it('prefixes the ids and the references to them with the icon id', () => {
    const { body } = toIconData(svg, 'utrecht-icon-arrow');
    assert.match(body, /id="utrecht-icon-arrow-a"/);
    assert.match(body, /clip-path="url\(#utrecht-icon-arrow-a\)"/);
    assert.doesNotMatch(body, /id="a"/);
  });

  it('throws without a viewBox', () => {
    assert.throws(() => toIconData('<svg xmlns="http://www.w3.org/2000/svg"><path d="M0 0"/></svg>', 'x'), /viewBox/);
  });
});

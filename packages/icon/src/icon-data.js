/* eslint-env node */
const { optimize } = require('svgo');

/**
 * An icon as data for an inline `<svg>`: the `viewBox` and the content of the `<svg>` element.
 * The ids get the icon id as prefix, so two icons on the same page do not share an id.
 *
 * @param {string} svg An optimized SVG file
 * @param {string} id The icon id, for example `utrecht-icon-arrow`
 * @returns {{ viewBox: string, body: string }}
 */
exports.toIconData = (svg, id) => {
  const { data } = optimize(svg, {
    plugins: [{ name: 'prefixIds', params: { prefix: id, delim: '-', prefixClassNames: false } }],
    js2svg: { pretty: false },
  });
  const startTagEnd = data.indexOf('>') + 1;
  const viewBox = /\sviewBox="([^"]*)"/.exec(data.slice(0, startTagEnd))?.[1];
  if (!viewBox) throw new Error(`${id}: the <svg> element has no viewBox`);
  return { viewBox, body: data.slice(startTagEnd, data.lastIndexOf('</svg>')) };
};

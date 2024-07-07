/* eslint-env node */
const bidiGlyphs = require('@unicode/unicode-15.1.0/Bidi_Mirroring_Glyph');
const { JSDOM } = require('jsdom');
const lodash = require('lodash');
const argv = require('minimist')(process.argv.slice(2), {
  string: ['prefix', 'path'],
});
const { readdir, readFile, writeFile, mkdir } = require('node:fs/promises');
const path = require('path');
const { component, test, generateIconsName, style, iconContainerComponent } = require('./component_templates.js');

const { kebabCase } = lodash;
const componentPrefix = `${argv.prefix}-`;
const componentsPath = argv.path;
const iconRapperComponent = `${componentPrefix}container`;
const svgPath = path.resolve(process.cwd(), 'src/svg');
const optimizedSvgPath = path.resolve(process.cwd(), 'tmp/optimized-svgs');

const isBidirectionalGlyph = (codePoint) => bidiGlyphs.has(codePoint);

const readSVGDir = async () => {
  let files = [];
  try {
    files = await readdir(svgPath);
    return files;
  } catch (error) {
    console.error(error);
  }
  return files;
};

const parseSVG = (svg) => {
  // Parse svg with jsdom and use querySelector to find the <title> element

  const dom = new JSDOM(svg, { contentType: 'text/xml' });
  const {
    window: { document },
  } = dom;
  const titleEl = document.querySelector('title');
  let title;
  let unicodeBidi = false;
  if (titleEl) {
    title = titleEl.textContent;
    unicodeBidi = isBidirectionalGlyph(title.codePointAt(0));
  }
  return {
    title,
    unicodeBidi,
  };
};

const getIconData = async () => {
  let svgData;

  const files = await readSVGDir();
  svgData = await Promise.all(
    files.map(async (file) => {
      const svg = await readFile(`${svgPath}/${file}`, 'utf-8');
      return {
        id: `${componentPrefix}${kebabCase(path.parse(file).name)}`,
        src: file,
        ...parseSVG(svg),
      };
    }),
  );

  return svgData;
};

const writeComponentFile = async () => {
  const files = await getIconData();
  files.forEach(async (iconData) => {
    const { src: file, unicodeBidi } = iconData;
    if (!/chevron/.test(file)) {
      // continue;
    }
    const fileBasename = path.parse(file).name;
    const fileName = `${componentPrefix}${kebabCase(fileBasename)}`;
    const formattedName = kebabCase(fileName);
    let svg = await readFile(`${optimizedSvgPath}/${file}`, 'utf-8');
    await mkdir(`${componentsPath}/${formattedName}`, { recursive: true });
    await writeFile(
      `${componentsPath}/${formattedName}/${formattedName}.stencil.tsx`,
      component(fileName, svg, iconRapperComponent, unicodeBidi),
      'utf-8',
    );
    await writeFile(`${componentsPath}/${formattedName}/${formattedName}.spec.tsx`, test(fileName), 'utf-8');
  });
};

writeComponentFile();

const generateIconsNameFile = async () => {
  const data = await getIconData();
  await mkdir('dist', { recursive: true });
  await writeFile(path.resolve(process.cwd(), 'dist/index.json'), generateIconsName(data), 'utf-8');
};
generateIconsNameFile();

const createIconWrapperComponent = async () => {
  const dir = `${componentsPath}/${iconRapperComponent}`;
  const cssValue = `.${iconRapperComponent} {
    display: inline-block;
    color: var(--${componentPrefix}color);
    width: var(--${componentPrefix}size);
    height: var(--${componentPrefix}size);
  }`;
  await mkdir(dir, { recursive: true });
  await writeFile(
    `${dir}/${iconRapperComponent}.stencil.tsx`,
    iconContainerComponent(iconRapperComponent, '<slot/>'),
    'utf-8',
  );
  await writeFile(`${dir}/${iconRapperComponent}.spec.tsx`, test(iconRapperComponent), 'utf-8');
  await writeFile(`${dir}/${iconRapperComponent}.scss`, style(cssValue), 'utf-8');
};
createIconWrapperComponent();

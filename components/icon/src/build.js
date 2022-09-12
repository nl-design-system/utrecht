/* eslint-env node */
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
const svgPath = path.resolve(process.cwd(), 'tmp/optimized-svgs');

const readSVGDir = async () => {
  let files;
  try {
    files = await readdir(svgPath);
    return files;
  } catch (error) {
    console.error(error);
  }
  return files;
};

const getIconData = async () => {
  let svgData;

  const files = await readSVGDir();
  try {
    if (files && files.length > 0) {
      svgData = await Promise.all(
        files.map((file) => ({
          id: `${componentPrefix}${kebabCase(path.parse(file).name)}`,
          src: file,
        })),
      );
    }
  } catch (error) {
    console.error(error);
  }
  return svgData;
};

const writeComponentFile = async () => {
  try {
    const files = await readSVGDir();
    if (files && files.length > 0) {
      for (const file of files) {
        const fileBasename = path.parse(file).name;
        const fileName = `${componentPrefix}${kebabCase(fileBasename)}`;
        const formattedName = kebabCase(fileName);
        const svg = await readFile(`${svgPath}/${file}`, 'utf-8');

        await mkdir(`${componentsPath}/${formattedName}`, { recursive: true });
        await writeFile(
          `${componentsPath}/${formattedName}/${formattedName}.stencil.tsx`,
          component(fileName, svg, iconRapperComponent),
          'utf-8',
        );
        await writeFile(`${componentsPath}/${formattedName}/${formattedName}.spec.tsx`, test(fileName), 'utf-8');
      }
    } else {
      console.log('There is no SVG files');
    }
  } catch (error) {
    console.error(error);
  }
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
    color: var(--${componentPrefix}color);
    display: inline-block;
    height: var(--${componentPrefix}size);
    width: var(--${componentPrefix}size);
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

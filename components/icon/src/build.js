/* eslint-env node */
const fs = require('fs');
const lodash = require('lodash');
const argv = require('minimist')(process.argv.slice(2), {
  string: ['prefix', 'path'],
});
const path = require('path');
const {
  component,
  test,
  generateIconsName,
  generateIcons,
  style,
  iconContainerComponent,
} = require('./component_templates.js');

const { kebabCase } = lodash;
const componentPrefix = `${argv.prefix}-`;
const componentsPath = argv.path;
const iconRapperComponent = `${componentPrefix}container`;

if (fs.existsSync(componentsPath)) throw new Error(`A component with this name already exists: ${componentsPath}`);

if (!componentsPath) throw new Error('You must include a components path name.');

fs.mkdirSync(componentsPath, { recursive: true });

function writeFileErrorHandler(err) {
  if (err) throw err;
}

const directoryPath = path.join(__dirname, '../tmp/optimized-svgs');

fs.readdir(directoryPath, function (err, files) {
  //handling error
  if (err) {
    console.error('Unable to scan directory: ' + err);
    return;
  }

  const iconsNames = files.map((file) => `${componentPrefix}${kebabCase(file.replace('.svg', ''))}`);

  files.forEach(function (file) {
    const fileName = `${componentPrefix}${kebabCase(file.replace('.svg', ''))}`;
    const formattedName = kebabCase(fileName);
    const dir = `${componentsPath}/${formattedName}`;

    fs.readFile(path.join(directoryPath, file), 'utf8', function (err, svg) {
      if (err) {
        console.error(err);
        return;
      }

      // throw an error if the file already exists
      if (fs.existsSync(dir)) throw new Error('A component with that name already exists.');

      // create the folder
      fs.mkdirSync(dir);
      fs.writeFile(
        `${dir}/${formattedName}.stencil.tsx`,
        component(fileName, svg, iconRapperComponent),
        writeFileErrorHandler,
      );
      fs.writeFile(`${dir}/${formattedName}.spec.tsx`, test(fileName), writeFileErrorHandler);
    });
  });

  fs.writeFile(`${componentsPath}/icon-set.json`, generateIconsName(iconsNames), writeFileErrorHandler);
  fs.writeFile(`${componentsPath}/icons.js`, generateIcons(iconsNames), writeFileErrorHandler);
});

const createIconWrapperComponent = () => {
  const dir = `${componentsPath}/${iconRapperComponent}`;
  const cssValue = `.${iconRapperComponent} {
    display: inline-block;
    color: var(--${componentPrefix}color);
    width: var(--${componentPrefix}size);
    height: var(--${componentPrefix}size);
  }`;
  fs.mkdirSync(dir);
  fs.writeFile(
    `${dir}/${iconRapperComponent}.stencil.tsx`,
    iconContainerComponent(iconRapperComponent, '<slot/>'),
    writeFileErrorHandler,
  );
  fs.writeFile(`${dir}/${iconRapperComponent}.space.tsx`, test(iconRapperComponent), writeFileErrorHandler);
  fs.writeFile(`${dir}/${iconRapperComponent}.scss`, style(cssValue), writeFileErrorHandler);
};
createIconWrapperComponent();

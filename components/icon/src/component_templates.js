/* eslint-disable no-undef */
const lodash = require('lodash');
const { camelCase, kebabCase, upperFirst } = lodash;

exports.component = (name, children, container) => {
  const ComponentName = upperFirst(camelCase(name));
  const webComponentName = kebabCase(name);

  return `import { Component, h } from '@stencil/core';

@Component({
  tag: '${webComponentName}',
  shadow: true,
})
export class ${ComponentName} {
  render() {
    return (
      <${container}>
        ${children}
      </${container}>
    );
  }
}
`;
};

exports.iconContainerComponent = (name, children) => {
  const ComponentName = upperFirst(camelCase(name));
  const webComponentName = kebabCase(name);

  return `import { Component, h } from '@stencil/core';

  @Component({
    tag: '${webComponentName}',
    styleUrl: './${webComponentName}.scss',
    shadow: true,
  })
  export class ${ComponentName} {
    render() {
      return (
        <div class='${webComponentName}'>
          ${children}
        </div>
      );
    }
  }
  `;
};

exports.test = (name) => {
  const ComponentName = upperFirst(camelCase(name));
  const webComponentName = kebabCase(name);
  return `import { ${ComponentName} } from './${webComponentName}.stencil';
describe('${ComponentName}', () => {
  it('builds', () => {
    expect(new ${ComponentName}()).toBeTruthy();
  });
});
`;
};

exports.generateIconsName = (iconsNames) => {
  return JSON.stringify(iconsNames);
};

exports.generateIcons = (iconsNames) => {
  return `const icons = {
    ${iconsNames.map((icon) => `\n${upperFirst(camelCase(icon))}`)}
  }`;
};

exports.style = (value) => value;

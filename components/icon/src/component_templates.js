/* eslint-disable no-undef */
const lodash = require('lodash');
const { camelCase, kebabCase, upperFirst } = lodash;

/* eslint-disable-next-line no-unused-vars */
exports.component = (name, children, container) => {
  const ComponentName = upperFirst(camelCase(name));
  const webComponentName = kebabCase(name);

  return `import { Component, h } from '@stencil/core';

@Component({
  tag: '${webComponentName}',
  styleUrl: "../../icon/index.scss",
  shadow: true,
})
export class ${ComponentName} {
  render() {
    return (
      ${children}
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
  return `/* eslint-env jest */
import { ${ComponentName} } from './${webComponentName}.stencil';

describe('${ComponentName}', () => {
  it('builds', () => {
    expect(new ${ComponentName}()).toBeTruthy();
  });
});
`;
};

exports.generateIconsName = (iconsNames) => {
  return JSON.stringify(iconsNames, null, '  ');
};

exports.style = (value) => value;

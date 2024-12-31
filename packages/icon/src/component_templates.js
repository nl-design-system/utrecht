/* eslint-disable no-undef */
const lodash = require('lodash');
const { camelCase, kebabCase, upperFirst } = lodash;

exports.component = (name, children, container, unicodeBidi) => {
  const ComponentName = upperFirst(camelCase(name));
  const webComponentName = kebabCase(name);

  return `import { Component,${unicodeBidi ? 'Prop, ' : ''} h } from '@stencil/core';

@Component({
  tag: '${webComponentName}',
  styleUrl: ${JSON.stringify(
    unicodeBidi ? '../../icon/generated-direction-inherit.scss' : '../../icon/generated.scss',
  )},
  shadow: true,
})
export class ${ComponentName} {
${unicodeBidi ? `  @Prop({ attribute: 'direction', reflect: true }) direction: string = 'inherit';` : ''}
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

import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { UtrechtButtonAttr, UtrechtButtonGroup } from '@utrecht/component-library-angular';

export default {
  title: 'Angular Component/Button Group',
  id: 'angular-component-button-group',
  decorators: [
    moduleMetadata({
      declarations: [UtrechtButtonGroup, UtrechtButtonAttr],
      imports: [CommonModule],
    }),
  ],
  component: UtrechtButtonGroup,
} as Meta;

const Template: Story = (args) => ({
  props: args,
  template: `<utrecht-button-group>
  <button appearance="primary-action-button" utrecht-button>Save and continue</button>
  <button appearance="secondary-action-button" utrecht-button>Back</button>
  </utrecht-button-group>`,
  component: UtrechtButtonGroup,
});

export const Default = Template.bind({});
Default.parameters = { angularLegacyRendering: true };
Default.args = {};

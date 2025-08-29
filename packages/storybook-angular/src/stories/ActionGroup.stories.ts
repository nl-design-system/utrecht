import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { UtrechtActionGroup, UtrechtButtonAttr } from '@utrecht/component-library-angular';

export default {
  title: 'Angular Component/Action Group',
  id: 'angular-component-action-group',
  decorators: [
    moduleMetadata({
      declarations: [UtrechtActionGroup, UtrechtButtonAttr],
      imports: [CommonModule],
    }),
  ],
  component: UtrechtActionGroup,
} as Meta;

const Template: Story = (args) => ({
  props: args,
  template: `<utrecht-action-group>
  <button appearance="primary-action-button" utrecht-button>Save and continue</button>
  <button appearance="secondary-action-button" utrecht-button>Back</button>
  </utrecht-action-group>`,
  component: UtrechtActionGroup,
});

export const Default = Template.bind({});
Default.parameters = { angularLegacyRendering: true };
Default.args = {};

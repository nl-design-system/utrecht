import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { UtrechtActionGroup, UtrechtButtonAttr } from '@utrecht/component-library-angular';

const meta: Meta<UtrechtActionGroup> = {
  title: 'Angular Component/Action Group',
  id: 'angular-component-action-group',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, UtrechtActionGroup, UtrechtButtonAttr],
    }),
  ],
  component: UtrechtActionGroup,
};

export default meta;

type Story = StoryObj<UtrechtActionGroup>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-action-group>
    <button appearance="primary-action-button" utrecht-button>Save and continue</button>
    <button appearance="secondary-action-button" utrecht-button>Back</button>
    </utrecht-action-group>`,
  }),
};

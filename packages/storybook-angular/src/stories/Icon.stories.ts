import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { UtrechtIcon } from '@utrecht/component-library-angular';

const meta: Meta<UtrechtIcon> = {
  title: 'Angular Component/Icon',
  component: UtrechtIcon,
  id: 'angular-icon',
  decorators: [
    moduleMetadata({
      declarations: [UtrechtIcon],
      imports: [CommonModule],
    }),
  ],
};

export default meta;

type Story = StoryObj<UtrechtIcon>;

const Template: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-icon>→</utrecht-icon>`,
  }),
};

export const Default: Story = {
  ...Template,
  args: {},
};

export const InlineSVG: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-icon>→</utrecht-icon>`,
  }),
  args: {},
};

export const WebComponentIcon: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-icon><utrecht-icon-chevron-right></utrecht-icon-chevron-right></utrecht-icon>`,
  }),
  args: {},
};

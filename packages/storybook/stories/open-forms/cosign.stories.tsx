import { Meta, StoryObj } from '@storybook/react';
import { SingleFormioComponent } from './StoryUtil';

const meta = {
  id: 'open-forms-cosign',
  title: 'Open Formulieren/Cosign',
  component: SingleFormioComponent,
  args: {
    key: 'cosign',
    type: 'cosign',
    label: 'Co-signer email address',
    validateOn: 'blur',
    authPlugin: 'digid',
  },
} satisfies Meta<typeof SingleFormioComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <SingleFormioComponent {...args} />,
  args: {
    key: 'cosign',
    label: 'Co-signer email address',
    extraComponentProperties: {
      validateOn: 'blur',
      authPlugin: 'digid',
    },
  },
};

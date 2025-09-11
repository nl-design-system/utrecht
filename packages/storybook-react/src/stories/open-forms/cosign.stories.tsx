import { Meta, StoryObj } from '@storybook/react-vite';
import { SingleFormioComponent } from './StoryUtil.js';

const meta = {
  id: 'open-forms-cosign',
  title: 'Open Formulieren/Cosign',
  component: SingleFormioComponent,
  args: {
    type: 'cosign',
  },
} satisfies Meta<typeof SingleFormioComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    key: 'cosign',
    label: 'Co-signer email address',
    extraComponentProperties: {
      validateOn: 'blur',
      authPlugin: 'digid',
    },
  },
};
export const Disabled: Story = {
  args: {
    key: 'cosign',
    label: 'Co-signer email address',
    extraComponentProperties: {
      validateOn: 'blur',
      authPlugin: 'digid',
      disabled: true,
    },
  },
};

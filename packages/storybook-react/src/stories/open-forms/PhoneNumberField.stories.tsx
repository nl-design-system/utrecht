import { Meta, StoryObj } from '@storybook/react-vite';
import { SingleFormioComponent } from './StoryUtil.js';

const meta = {
  id: 'open-forms-phone-number',
  title: 'Open Formulieren/PhoneNumber',
  component: SingleFormioComponent,
  args: {
    key: '',
    type: 'phoneNumber',
    label: '',
  },
} satisfies Meta<typeof SingleFormioComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    key: 'phone-number',
    label: 'Telefoonnummer',
    extraComponentProperties: {
      inputMask: null,
    },
  },
};
export const Disabled: Story = {
  args: {
    key: 'phone-number',
    label: 'Telefoonnummer',
    extraComponentProperties: {
      inputMask: null,
      disabled: true,
    },
  },
};

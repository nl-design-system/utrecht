import { Meta, StoryObj } from '@storybook/react';
import { SingleFormioComponent } from './StoryUtil';

const meta = {
  id: 'open-forms-postcode',
  title: 'Open Formulieren/PostcodeField',
  component: SingleFormioComponent,
  args: {
    key: '',
    type: 'postcode',
    label: '',
  },
} satisfies Meta<typeof SingleFormioComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    key: 'postcode',
    label: 'Postcode',
  },
};
export const Disabled: Story = {
  args: {
    key: 'postcode',
    label: 'Postcode',
    extraComponentProperties: {
      disabled: true,
    },
  },
};

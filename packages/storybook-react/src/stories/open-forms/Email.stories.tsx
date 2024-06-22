import { Meta, StoryObj } from '@storybook/react';
import { SingleFormioComponent } from './StoryUtil';

const meta = {
  id: 'open-forms-email',
  title: 'Open Formulieren/Email',
  component: SingleFormioComponent,
  args: {
    key: '',
    type: 'email',
    label: '',
  },
} satisfies Meta<typeof SingleFormioComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    key: 'email',
    label: 'Email',
  },
};
export const Disabled: Story = {
  args: {
    key: 'email',
    label: 'Email',
    extraComponentProperties: {
      disabled: true,
    },
  },
};

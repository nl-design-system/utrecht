import { Meta, StoryObj } from '@storybook/react';
import { SingleFormioComponent } from './StoryUtil.js';

const meta = {
  id: 'open-forms-timefield',
  title: 'Open Formulieren/TimeField',
  component: SingleFormioComponent,
  args: {
    type: 'time',
    label: '',
    extraComponentProperties: {
      inputType: '',
    },
  },
} satisfies Meta<typeof SingleFormioComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Tijd',
    extraComponentProperties: {
      inputType: 'text',
    },
  },
};
export const Disabled: Story = {
  args: {
    label: 'Tijd',
    extraComponentProperties: {
      inputType: 'text',
      disabled: true,
    },
  },
};

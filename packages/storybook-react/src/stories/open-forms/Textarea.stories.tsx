import { Meta, StoryObj } from '@storybook/react';
import { SingleFormioComponent } from './StoryUtil.js';

const meta = {
  id: 'open-forms-textarea',
  title: 'Open Formulieren/Textarea',
  component: SingleFormioComponent,
  args: {
    type: 'textarea',
    label: '',
    extraComponentProperties: {
      description: '',
    },
  },
} satisfies Meta<typeof SingleFormioComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Textarea',
    extraComponentProperties: {
      description: 'Plaats hierboven uw handtekening',
    },
  },
};
export const disabled: Story = {
  args: {
    label: 'Textarea',
    extraComponentProperties: {
      defaultValue: 'dit is de text in de text area',
      disabled: true,
    },
  },
};

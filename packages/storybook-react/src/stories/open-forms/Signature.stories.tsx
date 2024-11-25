import { Meta, StoryObj } from '@storybook/react';
import { SingleFormioComponent } from './StoryUtil.js';

const meta = {
  id: 'open-forms-signature',
  title: 'Open Formulieren/Signature',
  component: SingleFormioComponent,
  args: {
    type: 'signature',
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
    label: 'Handtekening',
    extraComponentProperties: {
      description: 'Plaats hierboven uw handtekening',
    },
  },
};

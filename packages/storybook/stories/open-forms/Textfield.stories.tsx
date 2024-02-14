import { Meta, StoryObj } from '@storybook/react';
import { SingleFormioComponent } from './StoryUtil';

const meta = {
  id: 'open-forms-textfield',
  title: 'Open Formulieren/Textfield',
  component: SingleFormioComponent,
  args: {
    key: '',
    type: 'textfield',
    label: '',
  },
} satisfies Meta<typeof SingleFormioComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    key: 'textfield',
    label: 'Voornaam',
  },
};

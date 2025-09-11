import { Meta, StoryObj } from '@storybook/react-vite';
import { SingleFormioComponent } from './StoryUtil.js';

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
export const disabled: Story = {
  args: {
    key: 'textfield',
    label: 'Voornaam',
    extraComponentProperties: {
      defaultValue: 'dit is de text in de text field',
      disabled: true,
    },
  },
};

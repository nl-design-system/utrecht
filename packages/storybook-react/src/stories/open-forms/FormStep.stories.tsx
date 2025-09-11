import { Meta, StoryObj } from '@storybook/react-vite';
import { SingleFormioComponent } from './StoryUtil.js';

const meta = {
  id: 'open-forms-formstep',
  title: 'Open Formulieren/FormStep',
  component: SingleFormioComponent,
  args: {
    type: 'formio',
  },
} satisfies Meta<typeof SingleFormioComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    key: 'formStep1',
    label: '',
    formButtons: true,
    extraComponentProperties: {
      components: [
        {
          type: 'textfield',
          key: 'text1',
          label: 'Simple text field',
          description: 'A help text for the text field',
        },
        {
          type: 'radio',
          key: 'radio1',
          label: 'Radio choices',
          values: [
            { value: 'option1', label: 'Option1' },
            { value: 'option2', label: 'Option2' },
          ],
        },
      ],
    },
  },
};

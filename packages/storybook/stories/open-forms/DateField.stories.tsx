import { Meta, StoryObj } from '@storybook/react';
import { SingleFormioComponent } from './StoryUtil';

const meta = {
  id: 'open-forms-date-field',
  title: 'Open Formulieren/DateField',
  component: SingleFormioComponent,
  args: {
    type: 'date',
    extraComponentProperties: {
      enableTime: false,
      datePicker: {
        minDate: null,
        maxDate: null,
      },
      format: 'dd-MM-yyyy',

      placeholder: 'dd-mm-yyyy',
    },
  },
} satisfies Meta<typeof SingleFormioComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <SingleFormioComponent {...args} />,
};

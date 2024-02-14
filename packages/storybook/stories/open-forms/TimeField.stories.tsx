import { Meta, StoryObj } from '@storybook/react';
import { SingleFormioComponent } from './StoryUtil';

const meta = {
  id: 'open-forms-timefield',
  title: 'Open Formulieren/TimeField',
  component: SingleFormioComponent,
  args: {
    type: 'time',
    label: 'Tijd',
    extraComponentProperties: {
      inputType: 'text',
    },
  },
} satisfies Meta<typeof SingleFormioComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (meta) => <SingleFormioComponent {...meta} />,
};

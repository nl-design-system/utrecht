import { Meta, StoryObj } from '@storybook/react';
import { SingleFormioComponent } from './StoryUtil';

const meta = {
  id: 'open-forms-textarea',
  title: 'Open Formulieren/Textarea',
  component: SingleFormioComponent,
  args: {
    type: 'textarea',
    label: 'Textarea',
    extraComponentProperties: {
      description: 'Plaats hierboven uw handtekening',
    },
  },
} satisfies Meta<typeof SingleFormioComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (meta) => <SingleFormioComponent {...meta} />,
};

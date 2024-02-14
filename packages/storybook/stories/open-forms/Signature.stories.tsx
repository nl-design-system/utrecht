import { Meta, StoryObj } from '@storybook/react';
import { SingleFormioComponent } from './StoryUtil';

const meta = {
  id: 'open-forms-signature',
  title: 'Open Formulieren/Signature',
  component: SingleFormioComponent,
  args: {
    type: 'signature',
    label: 'Handtekening',
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

import { Meta, StoryObj } from '@storybook/react';
import { SingleFormioComponent } from './StoryUtil';

const meta = {
  id: 'open-forms-textfield',
  title: 'Open Formulieren/Textfield',
  component: SingleFormioComponent,
  args: {
    key: 'textfield',
    type: 'textfield',
    label: 'Voornaam',
  },
} satisfies Meta<typeof SingleFormioComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (meta) => <SingleFormioComponent {...meta} />,
};

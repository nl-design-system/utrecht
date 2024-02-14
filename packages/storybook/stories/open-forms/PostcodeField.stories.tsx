import { Meta, StoryObj } from '@storybook/react';
import { SingleFormioComponent } from './StoryUtil';

const meta = {
  id: 'open-forms-postcode',
  title: 'Open Formulieren/PostcodeField',
  component: SingleFormioComponent,
  args: {
    key: 'postcode',
    type: 'postcode',
    label: 'Postcode',
    extraComponentProperties: {
      inputMask: null,
    },
  },
} satisfies Meta<typeof SingleFormioComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (meta) => <SingleFormioComponent {...meta} />,
};

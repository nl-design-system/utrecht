import { Meta, StoryObj } from '@storybook/react';
import { SingleFormioComponent } from './StoryUtil';

const meta = {
  id: 'open-forms-checkbox',
  title: 'Open Formulieren/Checkbox',
  component: SingleFormioComponent,
  args: {
    key: '',
    type: 'checkbox',
    label: '',
  },
} satisfies Meta<typeof SingleFormioComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    key: 'checkbox',
    label: 'Ik heb de voorwaarden gelezen en ga hiermee akkoord.',
  },
};

export const Required: Story = {
  args: {
    key: 'checkbox',
    label: 'Ik heb de voorwaarden gelezen en ga hiermee akkoord.',
    extraComponentProperties: { validate: { required: true } },
  },
};

export const Checked: Story = {
  args: {
    key: 'checkbox',
    label: 'Ik heb de voorwaarden gelezen en ga hiermee akkoord.',
    extraComponentProperties: {
      defaultValue: true,
    },
  },
};
export const Disabled: Story = {
  args: {
    key: 'checkbox',
    label: 'Ik heb de voorwaarden gelezen en ga hiermee akkoord.',
    extraComponentProperties: {
      disabled: true,
    },
  },
};

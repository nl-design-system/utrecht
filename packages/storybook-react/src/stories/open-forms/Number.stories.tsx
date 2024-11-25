import { Meta, StoryObj } from '@storybook/react';
import { SingleFormioComponent } from './StoryUtil.js';

const meta = {
  id: 'open-forms-number',
  title: 'Open Formulieren/Number',
  component: SingleFormioComponent,
  args: {
    key: '',
    type: 'number',
    label: '',
  },
} satisfies Meta<typeof SingleFormioComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    key: 'number',
    label: 'Nummer',
  },
};

export const WithPrefix: Story = {
  args: {
    key: 'number',
    label: 'Nummer',
    extraComponentProperties: {
      prefix: '%',
    },
  },
};

export const WithSuffix: Story = {
  args: {
    key: 'number',
    label: 'Nummer',
    extraComponentProperties: {
      suffix: 'm<sup>3</sup>',
    },
  },
};
export const Disabled: Story = {
  args: {
    key: 'number',
    label: 'Nummer',
    extraComponentProperties: {
      disabled: true,
    },
  },
};

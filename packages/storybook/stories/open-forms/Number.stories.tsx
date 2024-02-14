import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SingleFormioComponent } from './StoryUtil';

const meta: Meta = {
  id: 'open-forms-number',
  title: 'Open Formulieren/Number',
  component: SingleFormioComponent,
  args: {
    key: 'number',
    type: 'number',
    label: 'Nummer',
  },
};

export default meta;
type Story = StoryObj<typeof SingleFormioComponent>;

export const Default: Story = {
  render: (meta) => <SingleFormioComponent {...meta} />,
};

export const WithPrefix: Story = {
  render: (meta) => <SingleFormioComponent {...meta} />,
  args: {
    ...meta.args,
    extraComponentProperties: {
      prefix: '%',
    },
  },
};

export const WithSuffix: Story = {
  render: (meta) => <SingleFormioComponent {...meta} />,
  args: {
    ...meta.args,
    extraComponentProperties: {
      suffix: 'm<sup>3</sup>',
    },
  },
};

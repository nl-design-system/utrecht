import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SingleFormioComponent } from './StoryUtil';

const meta: Meta = {
  id: 'open-forms-columns',
  title: 'Open Formulieren/Columns',
  component: SingleFormioComponent,
  args: {
    key: 'cosign',
    type: 'columns',
    extraComponentProperties: {
      columns: [
        {
          size: 3,
          sizeMobile: 6,
          components: [
            {
              key: 'postcode',
              type: 'postcode',
              label: 'Postcode',
            },
          ],
        },
        {
          size: 3,
          sizeMobile: 6,
          components: [
            {
              key: 'number',
              type: 'textfield',
              label: 'Huisnummer',
            },
          ],
        },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SingleFormioComponent>;

export const Default: Story = {
  render: (args) => <SingleFormioComponent {...args} />,
};

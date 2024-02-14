import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SingleFormioComponent } from './StoryUtil';

const meta: Meta = {
  id: 'open-forms-fieldset',
  title: 'Open Formulieren/Fieldset',
  component: SingleFormioComponent,
  args: {
    key: 'fieldset',
    type: 'fieldset',
    label: 'Fieldset',
    extraComponentProperties: {
      components: [
        {
          key: 'name-a',
          type: 'textfield',
          input: true,
          required: true,
          label: 'Naam persoon 1',
          description: 'Voor- en achternaam zoals op je identiteitsbewijs',
        },
        {
          key: 'name-b',
          type: 'textfield',
          input: true,
          required: true,
          label: 'Naam persoon 2',
          description: 'Voor- en achternaam zoals op je identiteitsbewijs',
        },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SingleFormioComponent>;

export const Default: Story = {
  render: (meta) => <SingleFormioComponent {...meta} />,
};

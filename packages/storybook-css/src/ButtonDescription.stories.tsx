import type { Meta, StoryObj } from '@storybook/react-vite';
import descriptionDocs from '@utrecht/button-css/docs/description.nl.md?raw';
import React from 'react';
import { ButtonWithDescription } from './ButtonDescription';

const meta = {
  title: 'CSS Component/Button/Description',
  id: 'css-button-description',
  component: ButtonWithDescription,
  argTypes: {},
  args: {},
  decorators: [(Story) => <div style={{ '--utrecht-space-around': 1 }}>{Story()}</div>],
  tags: ['!autodocs'],
  parameters: {
    docs: {
      description: {
        component: descriptionDocs,
      },
    },
  },
} satisfies Meta<typeof ButtonWithDescription>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Disclaimer: Story = {
  args: {
    id: '4f426303-538c-42fe-9eaa-04c4175bde17',
    appearance: 'primary-action-button',
    children: 'Doorgaan naar iDEAL',
    type: 'submit',
    small: true,
    description: `Als je op ‘Doorgaan naar iDEAL’ klikt, ga je ermee akkoord dat de verkoopvoorwaarden gelden voor je bestelling en we een factuur naar je e-mailadres sturen.`,
  },
  name: 'Description with disclamer',
};

export const ErrorMessage: Story = {
  args: {
    id: 'b4f338f9-cc8a-4d20-bbd2-542439d124fd',
    appearance: 'primary-action-button',
    children: 'Verzenden',
    type: 'submit',
    errorMessage: true,
    description: `Vul eerst de verplichte velden in: Naam en E-mailadres.`,
  },
  name: 'Description with validation message',
};

export const ErrorAlert: Story = {
  args: {
    id: '64cd1500-a938-49b0-9644-de410b8a1d02',
    appearance: 'primary-action-button',
    children: 'Opslaan en later verder gaan',
    type: 'submit',
    alertType: 'error',
    description: `Opslaan is niet gelukt omdat geen contact gemaakt kan worden met de server. Wacht even en probeer het nog een keer.`,
  },
  name: 'Description with error alert',
};

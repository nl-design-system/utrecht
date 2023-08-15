/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import tokensDefinition from '@utrecht/components/logo-button/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from '../components/util';

const LogoButton = ({ logo, label, appearance }) => {
  const LogoElement = logo;
  return (
    <utrecht-logo-button>
      <LogoElement></LogoElement>
      <utrecht-button appearance={appearance}>
        {label} <utrecht-icon-arrow></utrecht-icon-arrow>
      </utrecht-button>
    </utrecht-logo-button>
  );
};
const meta = {
  title: 'Web Component/Logo button',
  id: 'web-component-logo-button',
  component: LogoButton,
  argTypes: {
    logo: {
      name: 'logo',
      control: 'select',
      options: ['utrecht-digid-logo', 'utrecht-eherkenning-logo', 'utrecht-eidas-logo'],
      table: {
        category: 'DEMO',
        defaultValue: { summary: undefined },
      },
    },
    appearance: {
      name: 'appearance',
      control: 'select',
      options: ['primary-action-button', 'secondary-action-button', 'subtle-button'],
      table: {
        category: 'DEMO',
        defaultValue: { summary: undefined },
      },
    },
    label: {
      name: 'label',
      type: { name: 'string', required: false },
      table: {
        category: 'DEMO',
        defaultValue: { summary: '' },
      },
    },
  },
  args: {},
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-logo-button',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: '',
      },
    },
  },
} satisfies Meta<typeof LogoButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DigidButton: Story = {
  args: {
    logo: 'utrecht-digid-logo',
    label: 'Inloggen met DigiD',
    appearance: 'primary-action-button',
  },
  name: 'DigiD button',
};

export const EherkenningButton: Story = {
  args: {
    logo: 'utrecht-eherkenning-logo',
    label: 'Inloggen met eHerkenning',
    appearance: 'primary-action-button',
  },
  name: 'eHerkenning button',
};

export const EidasButton: Story = {
  args: {
    logo: 'utrecht-eidas-logo',
    label: 'Inloggen met eIDAS',
    appearance: 'primary-action-button',
  },
  name: 'eIDAS button',
};

export const DesignTokens = designTokenStory(meta);

/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import tokens from '@utrecht/design-tokens/dist/index.json';
import tokensDefinition from '@utrecht/logo-button-css/src/tokens.json';
import {
  UtrechtButton,
  UtrechtDigidLogo,
  UtrechtEherkenningLogo,
  UtrechtEidasLogo,
  UtrechtIconArrow,
  UtrechtLogoButton,
} from '@utrecht/web-component-library-react';
import React from 'react';
import { ComponentType } from 'react';
import { designTokenStory } from './design-token-story';

interface LogoButtonStoryProps {
  LogoImage: ComponentType;
  label?: string;
  appearance?: string;
}

const LogoButtonStory = ({ LogoImage, label, appearance }: LogoButtonStoryProps) => {
  return (
    <UtrechtLogoButton>
      <LogoImage></LogoImage>
      <UtrechtButton appearance={appearance}>
        {label} <UtrechtIconArrow></UtrechtIconArrow>
      </UtrechtButton>
    </UtrechtLogoButton>
  );
};

const meta = {
  title: 'Web Component/Logo button',
  id: 'web-component-logo-button',
  component: LogoButtonStory,
  argTypes: {
    LogoImage: {
      name: 'logo',
      control: { type: 'select' },
      options: {
        'utrecht-digid-logo': UtrechtDigidLogo,
        'utrecht-eherkenning-logo': UtrechtEherkenningLogo,
        'utrecht-eidas-logo': UtrechtEidasLogo,
      },
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
} satisfies Meta<typeof LogoButtonStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DigidButton: Story = {
  args: {
    LogoImage: UtrechtDigidLogo,
    label: 'Inloggen met DigiD',
    appearance: 'primary-action-button',
  },
  name: 'DigiD button',
};

export const EherkenningButton: Story = {
  args: {
    LogoImage: UtrechtEherkenningLogo,
    label: 'Inloggen met eHerkenning',
    appearance: 'primary-action-button',
  },
  name: 'eHerkenning button',
};

export const EidasButton: Story = {
  args: {
    LogoImage: UtrechtEidasLogo,
    label: 'Inloggen met eIDAS',
    appearance: 'primary-action-button',
  },
  name: 'eIDAS button',
};

export const DesignTokens = designTokenStory(meta);

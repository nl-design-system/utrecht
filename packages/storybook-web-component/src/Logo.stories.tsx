/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/logo-css/README.md?raw';
import tokensDefinition from '@utrecht/logo-css/src/tokens.json';
import { UtrechtLogo, UtrechtLogoImage } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'Web Component/Logo',
  id: 'web-component-logo',
  component: UtrechtLogo,
  argTypes: {},
  args: {},
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-logo',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UtrechtLogo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <UtrechtLogoImage />,
  },
};

export const DesignTokens = designTokenStory(meta);

/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { Logo, LogoImage } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/logo-css/README.md?raw';
import tokensDefinition from '@utrecht/logo-css/src/tokens.json';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Logo',
  id: 'css-logo',
  component: Logo,
  argTypes: {},
  args: {},
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
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <LogoImage />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling via `utrecht-logo` class name.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);

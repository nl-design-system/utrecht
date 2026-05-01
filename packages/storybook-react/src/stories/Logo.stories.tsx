import { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import readme from '@utrecht/logo-css/README.md?raw';
import tokensDefinition from '@utrecht/logo-css/dist/tokens.mjs';
import React from 'react';
import { designTokenStory } from './util.js';
import { Logo, LogoImage } from '../../../component-library-react/src/index.js';

const meta = {
  title: 'React Component/Logo',
  id: 'react-logo',
  component: Logo,
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
};

export const DesignTokens = designTokenStory(meta);

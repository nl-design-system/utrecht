import { Meta, StoryObj } from '@storybook/react';
import { Logo, LogoImage } from '@utrecht/component-library-react/src/css-module/index';
import readme from '@utrecht/components/logo/README.md?raw';
import tokensDefinition from '@utrecht/components/logo/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

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

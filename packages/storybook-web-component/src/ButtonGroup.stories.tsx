/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/button-group/README.md?raw';
import tokensDefinition from '@utrecht/components/button-group/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtButton, UtrechtButtonGroup } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'Web Component/Button group',
  id: 'web-component-button-group',
  component: UtrechtButtonGroup,
  argTypes: {
    children: {
      description: 'Content of the button group',
    },
  },
  args: {
    children: [],
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-button-group',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UtrechtButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <UtrechtButton appearance="primary-action-button">Save and continue</UtrechtButton>,
      <UtrechtButton appearance="secondary-action-button">Back</UtrechtButton>,
    ],
  },
};

export const DesignTokens = designTokenStory(meta);

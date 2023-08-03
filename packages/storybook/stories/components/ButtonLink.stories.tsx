/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/button-link/README.md?raw';
import tokensDefinition from '@utrecht/components/button-link/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';
import '@utrecht/components/alert/css/index.scss';
import {ButtonLink} from "@utrecht/component-library-react";

const meta = {
  title: 'CSS Component/Link that looks like a button',
  id: 'css-button-link',
  component: ButtonLink,
  argTypes: {
    appearance: {
      description: 'Appearance',
      control: { type: 'select' },
      options: ['', 'button', 'primary-action-button', 'secondary-action-button', 'subtle-button'],
    },
    external: {
      description: 'External',
      control: 'boolean',
    },
    placeholder: {
      description: 'Placeholder for a link',
      control: 'boolean',
    },
  },
  args: {
    children: 'Read more...'
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokensPrefix: 'utrecht-button-link',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof ButtonLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const External: Story = {
  args: {
    children: 'Read more...',
    href: 'https://example.com/',
    external: true,
  },
};

export const PrimaryButtonLink: Story = {
  name: 'Primary',
  args: {
    ...Default.args,
    appearance: 'primary-action-button',
  },
};

export const Secondary: Story = {
  args: {
    ...Default.args,
    appearance: 'secondary-action-button',
  },
};

export const Subtle: Story = {
  args: {
    ...Default.args,
    appearance: 'subtle-button',
  },
};

export const PlaceholderForLink: Story = {
  args: {
    ...Default.args,
    placeholder: true,
  },
};


export const DesignTokens = designTokenStory(meta);

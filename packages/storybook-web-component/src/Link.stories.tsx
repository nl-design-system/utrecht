/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/link-css/README.md?raw';
import tokensDefinition from '@utrecht/link-css/src/tokens.json';
import { UtrechtLink, UtrechtParagraph } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'Web Component/Link',
  id: 'web-component-link',
  component: UtrechtLink,
  argTypes: {
    children: {
      description: 'Link text',
      type: {
        name: 'string',
        required: true,
      },
    },
    download: {
      description: 'Filename for download target',
      type: {
        name: 'string',
        required: false,
      },
    },
    href: {
      description: 'Target URL',
      type: {
        name: 'string',
        required: true,
      },
    },
    target: {
      description: 'Target window',
      type: {
        name: 'string',
        required: false,
      },
    },
  },
  args: {},
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-link',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  decorators: [(Story) => <UtrechtParagraph>{Story()}</UtrechtParagraph>],
} satisfies Meta<typeof UtrechtLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Voorbeeldlink',
    href: 'https://example.com/',
  },
};

export const Download: Story = {
  args: {
    children: 'Voorbeeldlink',
    download: 'example.html',
    href: './',
  },
};

export const DesignTokens = designTokenStory(meta);

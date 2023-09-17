/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/url/README.md?raw';
import tokensDefinition from '@utrecht/components/url/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtParagraph, UtrechtUrl } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'Web Component/URL value',
  id: 'web-component-url-value',
  component: UtrechtUrl,
  argTypes: {
    children: {
      description: 'URL',
    },
  },
  args: {},
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-url',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  decorators: [(Story) => <UtrechtParagraph>{Story()}</UtrechtParagraph>],
} satisfies Meta<typeof UtrechtUrl>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'https://example.com/',
  },
};

export const DesignTokens = designTokenStory(meta);

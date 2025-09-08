/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/url-data-css/README.md?raw';
import tokensDefinition from '@utrecht/url-data-css/src/tokens.json';
import { UtrechtParagraph, UtrechtUrlData } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'Web Component/URL data',
  id: 'web-component-url-data',
  component: UtrechtUrlData,
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
    tokensPrefix: 'utrecht-url-data',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  decorators: [(Story) => <UtrechtParagraph>{Story()}</UtrechtParagraph>],
} satisfies Meta<typeof UtrechtUrlData>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'https://example.com/',
  },
};

export const DesignTokens = designTokenStory(meta);

/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import readme from '@utrecht/code-css/README.md?raw';
import tokensDefinition from '@utrecht/code-css/src/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtCode, UtrechtParagraph } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'Web Component/Code',
  id: 'web-component-code',
  component: UtrechtCode,
  argTypes: {
    children: {
      description: 'Content of the code',
    },
  },
  args: {},
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-code',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  decorators: [(Story) => <UtrechtParagraph>{Story()}</UtrechtParagraph>],
} satisfies Meta<typeof UtrechtCode>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '<input type="url" value="https://example.fi/">',
  },
};

export const DesignTokens = designTokenStory(meta);

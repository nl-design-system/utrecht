/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/skip-link-css/README.md?raw';
import tokensDefinition from '@utrecht/skip-link-css/src/tokens.json';
import { UtrechtSkipLink } from '@utrecht/web-component-library-react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'Web Component/Skip link',
  id: 'web-component-skip-link',
  component: UtrechtSkipLink,
  argTypes: {
    children: {
      description: 'Link text',
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
  },
  args: {},
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-skip-link',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UtrechtSkipLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#main',
    children: 'Skip to main content',
  },
};

export const DesignTokens = designTokenStory(meta);

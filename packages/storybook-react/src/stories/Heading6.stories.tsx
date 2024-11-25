import { Meta, StoryObj } from '@storybook/react';
import { Heading6 } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import readme from '@utrecht/heading-6-css/README.md?raw';
import tokensDefinition from '@utrecht/heading-6-css/dist/tokens.mjs';
import { designTokenStory } from './util.js';

const meta = {
  title: 'React Component/Heading 6',
  id: 'react-heading-6',
  component: Heading6,
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  parameters: {
    tokensPrefix: 'utrecht-heading-6',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Heading6>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);

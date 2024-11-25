import { Meta, StoryObj } from '@storybook/react';
import { Heading4 } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import readme from '@utrecht/heading-4-css/README.md?raw';
import tokensDefinition from '@utrecht/heading-4-css/dist/tokens.mjs';
import { designTokenStory } from './util.js';

const meta = {
  title: 'React Component/Heading 4',
  id: 'react-heading-4',
  component: Heading4,
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  parameters: {
    tokensPrefix: 'utrecht-heading-4',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Heading4>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);

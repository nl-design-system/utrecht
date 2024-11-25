import { Meta, StoryObj } from '@storybook/react';
import { Mark } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import readme from '@utrecht/mark-css/README.md?raw';
import tokensDefinition from '@utrecht/mark-css/dist/tokens.mjs';
import { designTokenStory } from './util.js';

const meta = {
  title: 'React Component/Mark',
  id: 'react-mark',
  component: Mark,
  argTypes: {
    children: {
      name: 'Text content',
      type: { name: 'string', required: true },
      table: {
        category: 'API',
      },
    },
  },
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  parameters: {
    tokensPrefix: 'utrecht-mark',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Mark>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const DesignTokens = designTokenStory(meta);

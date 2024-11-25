import { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/code-css/README.md?raw';
import tokensDefinition from '@utrecht/code-css/dist/tokens.mjs';
import { Code } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import { designTokenStory } from './util.js';

const meta = {
  title: 'React Component/Code',
  id: 'react-code',
  component: Code,
  args: {
    children: '<input type="url" value="https://example.fi/">',
  },
  argTypes: {
    children: {
      name: 'Text content',
      type: { name: 'string', required: true },
      table: {
        category: 'API',
      },
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-code',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Code>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const DesignTokens = designTokenStory(meta);

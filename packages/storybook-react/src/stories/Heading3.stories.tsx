import { Meta, StoryObj } from '@storybook/react';
import { Heading3 } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/heading-3-css/README.md?raw';
import tokensDefinition from '@utrecht/heading-3-css/src/tokens.json';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Heading 3',
  id: 'react-heading-3',
  component: Heading3,
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  parameters: {
    tokensPrefix: 'utrecht-heading-3',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Heading3>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

Default.args = {
  children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};

export const DesignTokens = designTokenStory(meta);

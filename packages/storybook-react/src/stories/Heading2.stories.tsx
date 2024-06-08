import { Meta, StoryObj } from '@storybook/react';
import { Heading2 } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/heading-2-css/README.md?raw';
import tokensDefinition from '@utrecht/heading-2-css/src/tokens.json';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Heading 2',
  id: 'react-heading-2',
  component: Heading2,
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  parameters: {
    tokensPrefix: 'utrecht-heading-2',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Heading2>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);

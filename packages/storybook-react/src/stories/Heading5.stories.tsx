import { Meta, StoryObj } from '@storybook/react';
import { Heading5 } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/heading-5-css/README.md?raw';
import tokensDefinition from '@utrecht/heading-5-css/src/tokens.json';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Heading 5',
  id: 'react-heading-5',
  component: Heading5,
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  parameters: {
    tokensPrefix: 'utrecht-heading-5',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Heading5>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);

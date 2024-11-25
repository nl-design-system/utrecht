import { Meta, StoryObj } from '@storybook/react';
import { Separator } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import readme from '@utrecht/separator-css/README.md?raw';
import tokensDefinition from '@utrecht/separator-css/dist/tokens.mjs';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Separator',
  id: 'react-separator',
  component: Separator,
  parameters: {
    tokensPrefix: 'utrecht-separator',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);

import { Meta, StoryObj } from '@storybook/react';
import { Separator } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/separator/README.md?raw';
import tokensDefinition from '@utrecht/components/separator/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
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

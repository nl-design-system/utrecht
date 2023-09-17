/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/logo/README.md?raw';
import tokensDefinition from '@utrecht/components/logo/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { Logo } from './Logo';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Logo',
  id: 'css-logo',
  component: Logo,
  argTypes: {},
  args: {},
  parameters: {
    tokensPrefix: 'utrecht-logo',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Styling via `utrecht-logo` class name.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);

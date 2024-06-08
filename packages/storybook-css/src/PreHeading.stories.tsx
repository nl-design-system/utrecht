/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { PreHeading } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/pre-heading-css/README.md?raw';
import tokensDefinition from '@utrecht/pre-heading-css/src/tokens.json';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Pre-heading',
  id: 'css-pre-heading',
  component: PreHeading,
  argTypes: {
    children: {
      description: 'Set the content of the pre-heading',
      control: 'text',
    },
  },
  args: {
    children: '',
  },
  parameters: {
    tokensPrefix: 'utrecht-pre-heading',
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
} satisfies Meta<typeof PreHeading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  parameters: {
    docs: {
      description: {
        story: `Styling via \`utrecht-pre-heading\` class name.

Markup with \`<p>\` HTML element, so it can be used inside an \`<hgroup>\`.`,
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);

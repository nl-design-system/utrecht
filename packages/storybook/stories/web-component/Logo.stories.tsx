/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/logo/README.md?raw';
import tokensDefinition from '@utrecht/components/logo/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtLogo } from '@utrecht/web-component-library-react';
import { designTokenStory } from '../components/util';

const meta = {
  title: 'Web Component/Logo',
  id: 'web-component-logo',
  component: UtrechtLogo,
  argTypes: {},
  args: {},
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-logo',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UtrechtLogo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);

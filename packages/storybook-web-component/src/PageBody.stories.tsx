/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/page-body-css/README.md?raw';
import tokensDefinition from '@utrecht/page-body-css/src/tokens.json';
import { UtrechtPageBody } from '@utrecht/web-component-library-react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'Web Component/PageBody',
  id: 'web-component-page-body',
  component: UtrechtPageBody,
  argTypes: {
    children: {
      description: 'Content of the page body',
    },
  },
  args: {
    children: ['Page body content'],
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-page-body',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UtrechtPageBody>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);

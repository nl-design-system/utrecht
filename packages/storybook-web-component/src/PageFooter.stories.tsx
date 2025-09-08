/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/page-footer-css/README.md?raw';
import tokensDefinition from '@utrecht/page-footer-css/src/tokens.json';
import { UtrechtPageFooter } from '@utrecht/web-component-library-react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'Web Component/Page footer',
  id: 'web-component-page-footer',
  component: UtrechtPageFooter,
  argTypes: {
    children: {
      description: 'Content of the page footer',
    },
  },
  args: {
    children: ['Footer content'],
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-page-footer',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UtrechtPageFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);

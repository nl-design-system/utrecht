/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/page/README.md?raw';
import tokensDefinition from '@utrecht/components/page/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtPage } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'Web Component/Page',
  id: 'web-component-page',
  component: UtrechtPage,
  argTypes: {
    children: {
      description: 'Content of the page',
    },
  },
  args: {
    children: [
      <utrecht-page-header>Header content</utrecht-page-header>,
      <utrecht-page-content>Page content</utrecht-page-content>,
      <utrecht-page-footer>Footer content</utrecht-page-footer>,
    ],
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-page',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UtrechtPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);

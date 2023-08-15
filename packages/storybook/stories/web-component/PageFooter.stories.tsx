/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/page-footer/README.md?raw';
import tokensDefinition from '@utrecht/components/page-footer/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from '../components/util';

const PageFooter = ({ children }) => <utrecht-page-footer>{children}</utrecht-page-footer>;

const meta = {
  title: 'Web Component/Page footer',
  id: 'web-component-page-footer',
  component: PageFooter,
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
} satisfies Meta<typeof PageFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);

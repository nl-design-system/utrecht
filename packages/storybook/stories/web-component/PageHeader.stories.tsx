/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/page-header/README.md?raw';
import tokensDefinition from '@utrecht/components/page-header/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from '../components/util';

const PageHeader = ({ children }) => <utrecht-page-header>{children}</utrecht-page-header>;

const meta = {
  title: 'Web Component/Page header',
  id: 'web-component-page-header',
  component: PageHeader,
  argTypes: {
    children: {
      description: 'Content of the page header',
    },
  },
  args: {
    children: ['Header content'],
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-page-header',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof PageHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);

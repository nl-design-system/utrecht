/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/page-content/README.md?raw';
import tokensDefinition from '@utrecht/components/page-content/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtPageContent } from '@utrecht/web-component-library-react';
import { designTokenStory } from '../components/util';

const meta = {
  title: 'Web Component/Page content',
  id: 'web-component-page-content',
  component: UtrechtPageContent,
  argTypes: {
    children: {
      description: 'Content of the page content',
    },
  },
  args: {
    children: ['Page content'],
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-page-content',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UtrechtPageContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);

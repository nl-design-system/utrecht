/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { PageHeader } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/page-header/README.md?raw';
import tokensDefinition from '@utrecht/components/page-header/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Page header',
  id: 'css-page-header',
  component: PageHeader,
  argTypes: {
    children: {
      description: 'Page header content',
    },
  },
  args: {
    children: [],
  },
  parameters: {
    tokensPrefix: 'utrecht-page-header',
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
} satisfies Meta<typeof PageHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Header content',
  },
};

export const DesignTokens = designTokenStory(meta);

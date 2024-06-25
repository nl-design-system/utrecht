/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { PageHeader } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/page-header-css/README.md?raw';
import tokensDefinition from '@utrecht/page-header-css/src/tokens.json';
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
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fpage-header',
    nldesignsystem: 'https://nldesignsystem.nl/page-header',
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

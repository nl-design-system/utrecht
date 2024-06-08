import { Meta, StoryObj } from '@storybook/react';
import { Heading1, PageHeader } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/page-header-css/README.md?raw';
import tokensDefinition from '@utrecht/page-header-css/src/tokens.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Page Header',
  id: 'react-page-header',
  component: PageHeader,
  args: {
    children: <Heading1>Header Area</Heading1>,
  },
  parameters: {
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

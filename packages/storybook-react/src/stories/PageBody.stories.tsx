import { Meta, StoryObj } from '@storybook/react-vite';
import { Heading1 } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import readme from '@utrecht/page-body-css/README.md?raw';
import tokensDefinition from '@utrecht/page-body-css/dist/tokens.mjs';
import { PageBody } from '@utrecht/page-body-react/dist/css';
import React from 'react';
import { designTokenStory } from './util.js';

const meta = {
  title: 'React Component/Page Body',
  id: 'react-page-body',
  component: PageBody,
  args: {
    children: <Heading1>Body Area</Heading1>,
  },
  parameters: {
    tokensPrefix: 'utrecht-page-body',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof PageBody>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);

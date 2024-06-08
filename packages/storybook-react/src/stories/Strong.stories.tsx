import { Meta, StoryObj } from '@storybook/react';
import { Paragraph, Strong } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/emphasis-css/README.md?raw';
import tokensDefinition from '@utrecht/emphasis-css/src/tokens.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Strong',
  id: 'react-strong',
  component: Strong,
  decorators: [(Story) => <Paragraph>{Story()}</Paragraph>],
  args: {
    children: 'Hello, World!',
  },
  parameters: {
    tokensPrefix: 'utrecht-emphasis',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Strong>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);

import { Description } from '@storybook/addon-docs';
import { Meta } from '@storybook/react';
import { Mark } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/mark/README.md?raw';
import tokensDefinition from '@utrecht/components/mark/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const Documentation = () => <Description markdown={readme} />;
export const Default = {
  title: 'React Component/Mark',
  id: 'react-mark',
  component: Mark,
  argTypes: {
    children: {
      name: 'Text content',
      type: { name: 'string', required: true },
    },
  },
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-mark',
    tokens,
    tokensDefinition,
    docs: {
      page: Documentation,
    },
  },
} satisfies Meta<typeof Mark>;

export default Default;
export const DesignTokens = designTokenStory(Default);

import { Description } from '@storybook/addon-docs';
import { Meta } from '@storybook/react';
import { Code } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/code/README.md?raw';
import tokensDefinition from '@utrecht/components/code/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const Documentation = () => <Description markdown={readme} />;
export const Default = {
  title: 'React Component/Code',
  id: 'react-code',
  component: Code,
  args: {
    children: '<input type="url" value="https://example.fi/">',
  },
  parameters: {
    tokensPrefix: 'utrecht-code',
    tokens,
    tokensDefinition,
    docs: {
      page: Documentation,
    },
  },
} as Meta<typeof Code>;

export default Default;

export const DesignTokens = designTokenStory(Default);

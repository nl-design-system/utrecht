import { Description } from '@storybook/addon-docs';
import { Meta } from '@storybook/react';
import { Article, Heading1, Paragraph } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/article/README.md?raw';
import tokensDefinition from '@utrecht/components/article/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const Documentation = () => <Description markdown={readme} />;
export const Default = {
  title: 'React Component/Article',
  id: 'react-article',
  component: Article,
  argTypes: {
    children: {
      name: 'Text content',
      type: {
        name: 'array',
        required: true,
      },
    },
  },
  args: {
    children: [
      <Heading1>Lorem ipsum</Heading1>,
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>,
    ],
  },
  parameters: {
    tokensPrefix: 'utrecht-article',
    tokens,
    tokensDefinition,
    docs: {
      page: Documentation,
    },
  },
} satisfies Meta<typeof Article>;

export default Default;
export const DesignTokens = designTokenStory(Default);

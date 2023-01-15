import { Meta, StoryObj } from '@storybook/react';
import { Article, Heading1, Paragraph } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/article/README.md?raw';
import tokensDefinition from '@utrecht/components/article/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Article',
  id: 'react-article',
  component: Article,
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-article',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Article>;

export default meta;

const Template: StoryObj<typeof Article> = (args) => <Article {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: [
    <Heading1>Lorem ipsum</Heading1>,
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Paragraph>,
  ],
};

export const DesignTokens = designTokenStory(meta);

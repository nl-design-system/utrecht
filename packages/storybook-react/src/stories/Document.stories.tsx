import { Meta, StoryObj } from '@storybook/react';
import { Article, Document, Heading1, Paragraph } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/document/README.md';
import tokensDefinition from '@utrecht/components/document/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Document',
  id: 'react-document',
  component: Document,
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-document',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Document>;

export default meta;

const Template: StoryObj<typeof Document> = (args) => <Document {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <Article>
      <Heading1>Lorem ipsum</Heading1>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>
    </Article>
  ),
};

export const DesignTokens = designTokenStory(meta);

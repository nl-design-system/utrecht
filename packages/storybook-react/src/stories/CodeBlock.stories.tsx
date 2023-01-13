import { Meta, StoryObj } from '@storybook/react';
import { CodeBlock } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/code-block/README.md';
import tokensDefinition from '@utrecht/components/code-block/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Code block',
  id: 'react-code-block',
  component: CodeBlock,
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-code-block',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof CodeBlock>;

export default meta;

const Template: StoryObj<typeof CodeBlock> = (args) => <CodeBlock {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: `<!DOCTYPE html>
  <html lang="nl" dir="ltr">
    <head>
      <title>NL Design System</title>
      <meta charset="utf-8"/>
    </head>
    <body>
      <h1>NL Design System</h1>
    </body>
  </html>
  `,
};

export const DesignTokens = designTokenStory(meta);

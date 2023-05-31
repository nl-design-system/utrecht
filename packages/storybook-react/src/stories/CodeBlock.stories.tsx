import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { CodeBlock } from '@utrecht/component-library-react/src/css-module/index';
import readme from '@utrecht/components/code-block/README.md?raw';
import tokensDefinition from '@utrecht/components/code-block/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Code block',
  id: 'react-code-block',
  component: CodeBlock,
  args: {
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
  },
  parameters: {
    tokensPrefix: 'utrecht-code-block',
    tokens,
    tokensDefinition,
    docs: {
      page: () => (
        <>
          <Description>{readme}</Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof CodeBlock>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);

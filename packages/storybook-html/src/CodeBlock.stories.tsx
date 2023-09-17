/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/code-block/README.md?raw';
import tokensDefinition from '@utrecht/components/code-block/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { htmlContentDecorator } from './decorator';
import { designTokenStory } from './design-token-story';

const CodeBlock = ({ children }) => (
  <pre>
    <code>{children}</code>
  </pre>
);

const meta = {
  title: 'HTML Component/Code block',
  id: 'html-code-block',
  component: CodeBlock,
  decorators: [htmlContentDecorator],
  argTypes: {
    children: {
      description: 'Code',
      control: 'text',
    },
  },
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
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-code-block',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof CodeBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `<pre>` and `<code>` elements.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);

/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { CodeBlock } from '@utrecht/component-library-react';
import type { CodeBlockProps } from '@utrecht/component-library-react';
import readme from '@utrecht/components/code-block/README.md?raw';
import tokensDefinition from '@utrecht/components/code-block/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './design-token-story';

interface CodeBlockStoryProps extends CodeBlockProps {
  element?: string | 'div';
}

const CodeBlockStory = ({ children, element }: CodeBlockStoryProps) =>
  element === 'div' ? <div className="utrecht-code-block">{children}</div> : <CodeBlock>{children}</CodeBlock>;

const meta = {
  title: 'CSS Component/Code block',
  id: 'css-code-block',
  component: CodeBlockStory,
  argTypes: {
    children: {
      description: 'Content of the code block.',
      control: 'text',
    },
    element: {
      description: 'Choose the HTML element',
      control: 'select',
      options: ['', 'div', 'pre'],
    },
  },
  args: {
    children: [],
  },
  parameters: {
    tokensPrefix: 'utrecht-code-block',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof CodeBlockStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
    docs: {
      description: {
        story: `Markup with the \`<pre>\` and \`<code>\` elements. Styling via \`utrecht-code-block\` class name.

Only using the \`<pre>\` element for markup is semantically ambiguous, it is clearer to use \`<pre><code>...</code></pre>\`.`,
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);

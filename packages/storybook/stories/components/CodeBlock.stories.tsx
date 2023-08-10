/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/code-block/README.md?raw';
import tokensDefinition from '@utrecht/components/code-block/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import clsx from 'clsx';
import React from 'react';
import { designTokenStory } from './util';

const CodeBlock = ({ className = '', children = '' }) => {
  const attributes = {
    className: clsx('utrecht-code-block', className),
  };

  return (
    <pre {...attributes}>
      <code className="utrecht-code-block__content">{children}</code>
    </pre>
  );
};

const meta = {
  title: 'CSS Component/CodeBlock',
  id: 'css-code-block',
  component: CodeBlock,
  argTypes: {
    children: {
      description: 'Code Block content',
      control: 'text',
    },
  },
  args: {
    children: `<html lang="nl" dir="ltr">
                <head>
                  <title>NL Design System</title>
                  <meta charset="utf-8"/>
                </head>
                <body>
                  <h1>NL Design System</h1>
                </body>
              </html>`,
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-code',
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

export const Default: Story = {};

export const CodeBlockInDiv: Story = {
  render: (args) => {
    const attributes = {
      className: clsx('utrecht-code-block', args.className),
    };
    return <div {...attributes}>{args.children}</div>;
  },
};

export const DesignTokens = designTokenStory(meta);

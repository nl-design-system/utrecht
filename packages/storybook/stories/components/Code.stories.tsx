/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/code/README.md?raw';
import tokensDefinition from '@utrecht/components/code/tokens.json';
import Link from '@utrecht/components/link/css/story-template';
import tokens from '@utrecht/design-tokens/dist/index.json';
import clsx from 'clsx';
import React from 'react';
import Paragraph from './Paragraph';
import { designTokenStory } from './util';

const Code = ({ span = false, textContent = '', className = '', children }) => {
  const attributes = {
    className: clsx('utrecht-code', className),
  };
  const Element = span ? 'span' : 'code';
  return (
    <Element {...attributes}>
      {children}
      {textContent}
    </Element>
  );
};

const meta = {
  title: 'CSS Component/Code',
  id: 'css-code',
  component: Code,
  argTypes: {
    span: {
      description: 'Avoid the HTML code element',
      control: 'boolean',
    },
    children: {
      description: 'Code',
      control: 'text',
    },
  },
  args: {
    span: false,
    children: '<input type="url" value="https://example.fi/">',
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
} satisfies Meta<typeof Code>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Ligatures: Story = {
  args: {
    children:
      '/* “fi,” “ff,” and “fl“ are common ligatures. In code they should take up the space of two characters. Some ligatures are available in Unicode as one character, such as “ﬁ” (U+FB01), Ĳ (U+0132) and ĳ (U+0133). */',
  },
  render: (args) => {
    return (
      <div style={{ 'font-variant-ligatures': 'common-ligatures' }}>
        <Code>{args.children}</Code>
      </div>
    );
  },
};

export const CodeInLink: Story = {
  args: {
    href: 'https://w3c.github.io/csswg-drafts/mediaqueries-5/#prefers-color-scheme',
    children: '@media (prefers-color-scheme: dark) {}',
  },
  render: (args) => {
    return (
      <Link href={args.href}>
        <Code>{args.children}</Code>
      </Link>
    );
  },
};

export const CodeInParagraph: Story = {
  render: () => {
    return (
      <Paragraph>
        {'Some input types and other attributes place limits on what values are valid for a given input. For example, '}
        <Code>{'<input type="number" min="2" max="10" step="2">'}</Code>
        {' means only the number 2, 4, 6, 8, or 10 are valid. Several errors could occur, including a '}
        <Code>{'rangeUnderflow'}</Code>
        {' error if the value is less than 2, '}
        <Code>{'rangeOverflow'}</Code>
        {' if greater than 10, '}
        <Code>{'stepMismatch'}</Code>
        {' if the value is a number between 2 and 10, but not an even integer (does not match the requirements of the '}
        <Code>{'step'}</Code>
        {' attribute), or '}
        <Code>{'typeMismatch'}</Code>
        {' if the value is not a number.'}
      </Paragraph>
    );
  },
};

export const DesignTokens = designTokenStory(meta);

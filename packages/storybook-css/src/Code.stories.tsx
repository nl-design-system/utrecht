/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { Code, Link, Paragraph } from '@utrecht/component-library-react';
import type { CodeProps } from '@utrecht/component-library-react';
import readme from '@utrecht/components/code/README.md?raw';
import ligaturesDocs from '@utrecht/components/code/_ligatures.md?raw';
import tokensDefinition from '@utrecht/components/code/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './design-token-story';

interface CodeStoryProps extends CodeProps {
  element?: string | 'span';
}

const CodeStory = ({ children, element }: CodeStoryProps) =>
  element === 'span' ? <span className="utrecht-code">{children}</span> : <Code>{children}</Code>;

const meta = {
  title: 'CSS Component/Code',
  id: 'css-code',
  component: CodeStory,
  argTypes: {
    children: {
      description: 'Content of the code.',
      control: 'text',
    },
    element: {
      description: 'Choose the HTML element',
      control: 'select',
      options: ['', 'code', 'span'],
    },
  },
  args: {
    children: '',
    element: '',
  },
  parameters: {
    tokensPrefix: 'utrecht-code',
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
} satisfies Meta<typeof CodeStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '<input type="url" value="https://example.fi/">',
  },
  parameters: {
    docs: {
      description: {
        story: 'Markup with the `<code>` element. Styling via `utrecht-code` class name.',
      },
    },
  },
};

const ContainerWithLigatures = (Story) => <div style={{ 'font-variant-ligatures': 'common-ligatures' }}>{Story()}</div>;

export const Ligatures: Story = {
  args: {
    children:
      '/* “fi,” “ff,” and “fl“ are common ligatures. In code they should take up the space of two characters. Some ligatures are available in Unicode as one character, such as “ﬁ” (U+FB01), Ĳ (U+0132) and ĳ (U+0133). */',
  },
  name: 'Ligatures in code',
  decorators: [ContainerWithLigatures],
  parameters: {
    docs: {
      description: {
        story: ligaturesDocs,
      },
    },
  },
};

interface CodeInLinkStoryProps extends CodeStoryProps {
  href: string;
}

const CodeInLinkStory = ({ children, href }: CodeInLinkStoryProps) => (
  <Link href={href}>
    <Code>{children}</Code>
  </Link>
);

export const CodeInLink: Story = {
  args: {
    href: 'https://w3c.github.io/csswg-drafts/mediaqueries-5/#prefers-color-scheme',
    children: '@media (prefers-color-scheme: dark) {}',
  },
  name: 'Code in link',
  render: CodeInLinkStory,
  parameters: {
    docs: {
      description: {
        story: 'De code die een link is moet herkenbaar zijn als link.',
      },
    },
  },
};

const CodeInParagraphStory = ({ children }: CodeStoryProps) => <Paragraph>{children}</Paragraph>;

export const CodeInParagraph: Story = {
  args: {
    children: [
      'Some input types and other attributes place limits on what values are valid for a given input. For example, ',
      <Code>{'<input type="number" min="2" max="10" step="2">'}</Code>,
      ' means only the number 2, 4, 6, 8, or 10 are valid. Several errors could occur, including a ',
      <Code>{'rangeUnderflow'}</Code>,
      ' error if the value is less than 2, ',
      <Code>{'rangeOverflow'}</Code>,
      ' if greater than 10, ',
      <Code>{'stepMismatch'}</Code>,
      ' if the value is a number between 2 and 10, but not an even integer (does not match the requirements of the ',
      <Code>{'step'}</Code>,
      ' attribute), or ',
      <Code>{'typeMismatch'}</Code>,
      ' if the value is not a number.',
    ],
  },
  name: 'Code in a paragraph',
  render: CodeInParagraphStory,
  parameters: {
    docs: {
      description: {
        story:
          'Lopende tekst met code moet goed leesbaar zijn, de code moet niet zo afleidend opgemaakt zijn dat de tekst slecht leesbaar wordt.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);

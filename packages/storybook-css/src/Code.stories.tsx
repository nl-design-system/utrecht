/* @license CC0-1.0 */

import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import readme from '@utrecht/code-css/README.md?raw';
import ligaturesDocs from '@utrecht/code-css/_ligatures.md?raw';
import tokensDefinition from '@utrecht/code-css/src/tokens.json';
import type { CodeProps } from '@utrecht/component-library-react';
import {
  Code,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Link,
  Paragraph,
} from '@utrecht/component-library-react';
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
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fcode',
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

const ContainerWithLigatures: Decorator = (Story) => (
  <div style={{ fontVariantLigatures: 'common-ligatures' }}>{Story()}</div>
);

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
  href?: string;
}

const CodeInLinkStory = ({ children, href }: CodeInLinkStoryProps) => (
  <Link href={href}>
    <Code>{children}</Code>
  </Link>
);

export const CodeInLink: Story & { args: CodeInLinkStoryProps } = {
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

const CodeInHeading1Story = ({ children }: CodeStoryProps) => <Heading1>{children}</Heading1>;

export const CodeInHeading1: Story = {
  args: {
    children: ['Gebruik een ', <Code>line-height</Code>, ' die voldoende afstand heeft'],
  },
  name: 'Code in a heading 1',
  render: CodeInHeading1Story,
  parameters: {
    docs: {
      description: {
        story: 'De lettergrootte van de code moet aanpassen aan de parent.',
      },
    },
  },
};

const CodeInHeading2Story = ({ children }: CodeStoryProps) => <Heading2>{children}</Heading2>;

export const CodeInHeading2: Story = {
  args: {
    children: ['Gebruik een ', <Code>line-height</Code>, ' die voldoende afstand heeft'],
  },
  name: 'Code in a heading 2',
  render: CodeInHeading2Story,
  parameters: {
    docs: {
      description: {
        story: 'De lettergrootte van de code moet aanpassen aan de parent.',
      },
    },
  },
};

const CodeInHeading3Story = ({ children }: CodeStoryProps) => <Heading3>{children}</Heading3>;

export const CodeInHeading3: Story = {
  args: {
    children: ['Gebruik een ', <Code>line-height</Code>, ' die voldoende afstand heeft'],
  },
  name: 'Code in a heading 3',
  render: CodeInHeading3Story,
  parameters: {
    docs: {
      description: {
        story: 'De lettergrootte van de code moet aanpassen aan de parent.',
      },
    },
  },
};

const CodeInHeading4Story = ({ children }: CodeStoryProps) => <Heading4>{children}</Heading4>;

export const CodeInHeading4: Story = {
  args: {
    children: ['Gebruik een ', <Code>line-height</Code>, ' die voldoende afstand heeft'],
  },
  name: 'Code in a heading 4',
  render: CodeInHeading4Story,
  parameters: {
    docs: {
      description: {
        story: 'De lettergrootte van de code moet aanpassen aan de parent.',
      },
    },
  },
};

const CodeInHeading5Story = ({ children }: CodeStoryProps) => <Heading5>{children}</Heading5>;

export const CodeInHeading5: Story = {
  args: {
    children: ['Gebruik een ', <Code>line-height</Code>, ' die voldoende afstand heeft'],
  },
  name: 'Code in a heading 5',
  render: CodeInHeading5Story,
  parameters: {
    docs: {
      description: {
        story: 'De lettergrootte van de code moet aanpassen aan de parent.',
      },
    },
  },
};

const CodeInHeading6Story = ({ children }: CodeStoryProps) => <Heading6>{children}</Heading6>;

export const CodeInHeading6: Story = {
  args: {
    children: ['Gebruik een ', <Code>line-height</Code>, ' die voldoende afstand heeft'],
  },
  name: 'Code in a heading 6',
  render: CodeInHeading6Story,
  parameters: {
    docs: {
      description: {
        story: 'De lettergrootte van de code moet aanpassen aan de parent.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);

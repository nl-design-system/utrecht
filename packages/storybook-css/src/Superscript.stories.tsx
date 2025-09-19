/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Paragraph, Superscript } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/superscript-css/README.md?raw';
import tokensDefinition from '@utrecht/superscript-css/src/tokens.json';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Superscript',
  id: 'css-superscript',
  component: Superscript,
  argTypes: {
    children: {
      description: 'Tekst.',
      control: 'text',
    },
    openType: {
      description: 'Render with OpenType font features.',
      control: 'boolean',
    },
  },
  args: {
    children: [],
    openType: false,
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fsuperscript',
    nldesignsystem: 'https://nldesignsystem.nl/superscript',
    tokensPrefix: 'utrecht-superscript',
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
    decorators: [(Story: any) => <Paragraph>{Story()}</Paragraph>],
  },
} satisfies Meta<typeof Superscript>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
};

export const InsideText: Story = {
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  name: 'Superscript inside multiple lines of text',
  parameters: {
    docs: {
      description: {
        story: `Superscript tekst kan de lijnhoogte verstoren, wanneer de superscript voorbij de eerste tekstregel staat.`,
      },
    },
  },
  render: (props: any) => {
    return (
      <>
        Here is some padding text to ensure the text is long enough to wrap the superscript text on subsequent line of
        text. On the 8<Superscript {...props}>th</Superscript> day of the month M
        <Superscript {...props}>lle</Superscript> DuBois collects a bucket of water from the well
        <Superscript {...props}>(footnote 2)</Superscript>.
      </>
    );
  },
};

export const InsideTextOpenType: Story = {
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
    openType: true,
  },
  name: 'Superscript with Open Type rendering, inside multiple lines of text',
  render: InsideText.render,
  parameters: {
    docs: {
      description: {
        story: `Experimental class name: \`utrecht-superscript--open-type\`. Apply this class name in specific situations, when it is certain the current font supports Open Type \`sups\` for \`font-variant-position: super\` for all the characters inside the superscript text.

To determine which characters are supported, you can upload your font to [Wakamai Fondue](https://wakamaifondue.com/) ("What can my font do?"), and scroll down to the \`sups\` section. When your font does not support \`sups\` then will be no such section.

When you use this class with fonts that do not support this OpenType feature, superscript text will look the same as regular text, and the meaning of the text will become unclear.`,
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);

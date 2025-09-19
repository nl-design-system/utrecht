/* @license CC0-1.0 */

/* eslint-disable react/no-unescaped-entities */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Paragraph, Subscript } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/subscript-css/README.md?raw';
import tokensDefinition from '@utrecht/subscript-css/src/tokens.json';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Subscript',
  id: 'css-subscript',
  component: Subscript,
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
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fsubscript',
    nldesignsystem: 'https://nldesignsystem.nl/subscript',
    tokensPrefix: 'utrecht-subscript',
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
} satisfies Meta<typeof Subscript>;

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
  name: 'Subscript inside multiple lines of text',
  parameters: {
    docs: {
      description: {
        story: `Subscript tekst kan de lijnhoogte verstoren, omdat er in sommige gevallen meer ruimte nodig is dan de ingestelde lijnhoogte.`,
      },
    },
  },
  render: (props: any) => {
    return (
      <>
        Its chemical formula, H<Subscript {...props}>2</Subscript>O, indicates that each of its molecules contains one
        oxygen and two hydrogen atoms, connected by covalent bonds. The hydrogen atoms are attached to the oxygen atom
        at an angle of 104.45°. In liquid form, H<Subscript {...props}>2</Subscript>O is also called "water" at standard
        temperature and pressure.
      </>
    );
  },
};

export const InsideTextOpenType: Story = {
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
    openType: true,
  },
  name: 'Subscript with Open Type rendering, inside multiple lines of text',
  render: InsideText.render,
  parameters: {
    docs: {
      description: {
        story: `Experimental class name: \`utrecht-subscript--open-type\`. Apply this class name in specific situations, when it is certain the current font supports Open Type \`subs\` for all the characters inside the subscript text.

To determine which characters are supported, you can upload your font to [Wakamai Fondue](https://wakamaifondue.com/) ("What can my font do?"), and scroll down to the \`subs\` section. When your font does not support \`subs\` then will be no such section.

When you use this class with fonts that do not support this OpenType feature, subscript text will look the same as regular text, and the meaning of the text will become unclear.`,
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);

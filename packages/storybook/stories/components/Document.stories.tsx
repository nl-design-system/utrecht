/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import { Document, Heading1, Paragraph } from '@utrecht/component-library-react/src/css-module';
import readme from '@utrecht/components/document/README.md?raw';
import tokensDefinition from '@utrecht/components/document/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'CSS Component/Document',
  id: 'css-document',
  component: Document,
  argTypes: {
    children: {
      description: 'Content of the document',
      control: 'text',
    },
  },
  args: {
    children: (
      <>
        <Heading1>Lorem ipsum</Heading1>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Paragraph>
      </>
    ),
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-document',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Document>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

const render = (args: any) => {
  const attributes = {
    className: 'utrecht-document',
    lang: args.lang || undefined,
  };
  const { children } = args;
  return (
    <html {...attributes}>
      <head>
        <meta charSet="utf-8" />
        <title>…</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export const LanguageNederlands: Story = {
  id: 'css-document--lang-nl',
  title: 'CSS Component/Document/Language/Nederlands',
  args: {
    ...Default.args,
    children: 'Nederlands',
    lang: 'nl',
  },
  argTypes: {
    ...Default.argTypes,
    lang: {
      description: 'Language of the document',
      control: 'text',
    },
  },
  parameters: {
    ...Default.parameters,
    docs: {
      ...Default.parameters?.['docs'],
      chromatic: { disableSnapshot: true },
      description: {
        story: `Maak duidelijk welke taal het document is (<a href="https://www.w3.org/TR/WCAG21/#language-of-page">WCAG eis 3.1.1</a>) met het \`lang\` attribuut.
Het is gebruikelijk om de tweeletterige ISO-639-1 code te gebruiken als die bestaat, anders de drieletterige ISO-639-3 code.
De ISO 639-1 code voor Nederlands is \`nl\``,
      },
    },
  },
  render,
};

export const LanguageFries: Story = {
  id: 'css-document--lang-fy',
  title: 'CSS Component/Document/Language/Fries',
  args: {
    ...Default.args,
    children: 'Frysk',
    lang: 'fy',
  },
  argTypes: {
    ...LanguageNederlands.argTypes,
  },
  parameters: {
    ...LanguageNederlands.parameters,
    docs: {
      ...Default.parameters?.['docs'],
      chromatic: { disableSnapshot: true },
      description: {
        story: `Maak duidelijk welke taal het document is (<a href="https://www.w3.org/TR/WCAG21/#language-of-page">WCAG eis 3.1.1</a>) met het \`lang\` attribuut.
Het is gebruikelijk om de tweeletterige ISO-639-1 code te gebruiken als die bestaat, anders de drieletterige ISO-639-3 code.
De ISO 639-1 code voor Fries is \`fy\``,
      },
    },
  },
  render,
};

export const LanguageDrents: Story = {
  id: 'css-document--lang-drt',
  title: 'CSS Component/Document/Language/Drents',
  args: {
    ...Default.args,
    children: 'Drèents',
    lang: 'drt',
  },
  argTypes: {
    ...LanguageNederlands.argTypes,
  },
  parameters: {
    ...LanguageNederlands.parameters,
    docs: {
      ...Default.parameters?.['docs'],
      chromatic: { disableSnapshot: true },
      description: {
        story: `Maak duidelijk welke taal het document is (<a href="https://www.w3.org/TR/WCAG21/#language-of-page">WCAG eis 3.1.1</a>) met het \`lang\` attribuut.
Het is gebruikelijk om de tweeletterige ISO-639-1 code te gebruiken als die bestaat, anders de drieletterige ISO-639-3 code.
De ISO 639-3 code voor Drents is \`drt\``,
      },
    },
  },
  render,
};

export const LanguageLimburgs: Story = {
  id: 'css-document--lang-li',
  title: 'CSS Component/Document/Language/Limburgs',
  args: {
    ...Default.args,
    children: 'Limburgs (ouch waal: Lèmburgs)',
    lang: 'li',
  },
  argTypes: {
    ...LanguageNederlands.argTypes,
  },
  parameters: {
    ...LanguageNederlands.parameters,
    docs: {
      ...Default.parameters?.['docs'],
      chromatic: { disableSnapshot: true },
      description: {
        story: `Maak duidelijk welke taal het document is (<a href="https://www.w3.org/TR/WCAG21/#language-of-page">WCAG eis 3.1.1</a>) met het \`lang\` attribuut.
Het is gebruikelijk om de tweeletterige ISO-639-1 code te gebruiken als die bestaat, anders de drieletterige ISO-639-3 code.
De ISO 639-1 code voor Limburgs is \`li\``,
      },
    },
  },
  render,
};

export const LanguageZeeuws: Story = {
  id: 'css-document--lang-zea',
  title: 'CSS Component/Document/Language/Zeeuws',
  args: {
    ...Default.args,
    children: 'Zeêuws',
    lang: 'zea',
  },
  argTypes: {
    ...LanguageNederlands.argTypes,
  },
  parameters: {
    ...LanguageNederlands.parameters,
    docs: {
      ...Default.parameters?.['docs'],
      chromatic: { disableSnapshot: true },
      description: {
        story: `Maak duidelijk welke taal het document is (<a href="https://www.w3.org/TR/WCAG21/#language-of-page">WCAG eis 3.1.1</a>) met het \`lang\` attribuut.
Het is gebruikelijk om de tweeletterige ISO-639-1 code te gebruiken als die bestaat, anders de drieletterige ISO-639-3 code.
De ISO 639-3 code voor Zeeuws is \`zea\``,
      },
    },
  },
  render,
};

export const LanguageTwents: Story = {
  id: 'css-document--lang-twd',
  title: 'CSS Component/Document/Language/Twents',
  args: {
    ...Default.args,
    children: 'Twents',
    lang: 'twd',
  },
  argTypes: {
    ...LanguageNederlands.argTypes,
  },
  parameters: {
    ...LanguageNederlands.parameters,
    docs: {
      ...Default.parameters?.['docs'],
      chromatic: { disableSnapshot: true },
      description: {
        story: `Maak duidelijk welke taal het document is (<a href="https://www.w3.org/TR/WCAG21/#language-of-page">WCAG eis 3.1.1</a>) met het \`lang\` attribuut.
Het is gebruikelijk om de tweeletterige ISO-639-1 code te gebruiken als die bestaat, anders de drieletterige ISO-639-3 code.
De ISO 639-3 code voor Twents is \`twd\``,
      },
    },
  },
  render,
};

export const DesignTokens = designTokenStory(meta);

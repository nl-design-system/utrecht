/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/document-css/README.md?raw';
import tokensDefinition from '@utrecht/document-css/src/tokens.json';
import React, { HTMLAttributes, PropsWithChildren } from 'react';
import hiddenDocs from './_hidden.md?raw';
import { htmlContentDecorator } from './decorator';
import { designTokenStory } from './design-token-story';
import { hidden } from './util/htmlArgTypes';

interface DocumentStoryProps extends HTMLAttributes<HTMLHtmlElement> {
  pageTitle?: string;
}

const Document = ({ children, hidden, lang, dir, pageTitle }: PropsWithChildren<DocumentStoryProps>) => (
  <html lang={lang} dir={dir}>
    <head>
      <meta charSet="utf-8" />
      {pageTitle && <title>{pageTitle}</title>}
    </head>
    <body hidden={hidden}>{children}</body>
  </html>
);

const meta = {
  title: 'HTML Component/Document',
  id: 'html-document',
  component: Document,
  decorators: [htmlContentDecorator],
  argTypes: {
    children: {
      description: 'Content of the document',
    },
    dir: {
      description: 'Text direction',
      control: { type: 'select' },
      options: ['', 'ltr', 'auto', 'rtl'],
    },
    hidden,
    lang: {
      description: 'Language',
      control: 'text',
    },
    pageTitle: {
      description: 'Page title',
      control: 'text',
    },
  },
  args: {
    children: [],
    hidden: false,
    pageTitle: '',
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

export const Default: Story = {
  args: {
    lang: 'la',
    dir: 'ltr',
    children: [
      <h1>Lorem ipsum</h1>,
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>,
    ],
    pageTitle: 'Lorem ipsum',
  },
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `<body>` element.',
      },
    },
  },
};

export const Hidden: Story = {
  args: {
    ...Default.args,
    hidden: true,
  },
  parameters: {
    docs: {
      description: {
        story: hiddenDocs,
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);

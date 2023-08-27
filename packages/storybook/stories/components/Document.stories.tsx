/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { Document, Heading1, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import { DocumentProps } from '@utrecht/component-library-react/src/Document';
import readme from '@utrecht/components/document/README.md?raw';
import langDocs from '@utrecht/components/document/_lang.md?raw';
import tokensDefinition from '@utrecht/components/document/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

interface DocumentStoryProps extends DocumentProps {
  element?: string | 'div' | 'html';
}

const DocumentStory = ({ element, children, lang }: DocumentStoryProps) => {
  return element === 'html' ? (
    <html className="utrecht-document" lang={lang || undefined}>
      <head>
        <meta charSet="utf-8" />
        <title>…</title>
      </head>
      <body>{children}</body>
    </html>
  ) : (
    <Document lang={lang || undefined}>{children}</Document>
  );
};

const meta = {
  title: 'CSS Component/Document',
  id: 'css-document',
  component: DocumentStory,
  argTypes: {
    element: {
      description: 'HTML element',
      control: 'select',
      options: ['div', 'html'],
    },
    children: {
      description: 'Content of the document',
    },
    lang: {
      description: 'Language of the document (ISO-639-1 code or ISO-639-3 code)',
      control: 'text',
    },
  },
  args: {
    element: 'div',
    children: [],
  },
  parameters: {
    tokensPrefix: 'utrecht-document',
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
} satisfies Meta<typeof DocumentStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <Heading1>Lorem ipsum</Heading1>,
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>,
    ],
    lang: 'la',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling via `utrecht-document` class name.',
      },
    },
  },
};

export const Language: Story = {
  args: {
    children: 'English',
    element: 'html',
    lang: 'en',
  },
  name: 'Language',
  parameters: {
    docs: {
      description: {
        story: langDocs,
      },
    },
  },
};

export const Nederlands: Story = {
  args: {
    children: 'Nederlands',
    element: 'html',
    lang: 'nl',
  },
  name: 'Nederlands',
  parameters: {
    docs: {
      description: {
        story: 'De ISO 639-1 code voor Nederlands is `nl`.',
      },
    },
  },
};

export const Fries: Story = {
  args: {
    children: 'Frysk',
    element: 'html',
    lang: 'fy',
  },
  name: 'Fries',
  parameters: {
    docs: {
      description: {
        story: 'De ISO 639-1 code voor Fries is `fy`.',
      },
    },
  },
};

export const Drents: Story = {
  args: {
    children: 'Drèents',
    element: 'html',
    lang: 'drt',
  },
  name: 'Drents',
  parameters: {
    docs: {
      description: {
        story: 'De ISO 639-3 code voor Drents is `drt`.',
      },
    },
  },
};

export const Limburgs: Story = {
  args: {
    children: 'Limburgs (ouch waal: Lèmburgs)',
    element: 'html',
    lang: 'li',
  },
  name: 'Limburgs',
  parameters: {
    docs: {
      description: {
        story: 'De ISO 639-1 code voor Limburgs is `li`.',
      },
    },
  },
};

export const Zeeuws: Story = {
  args: {
    children: 'Zeêuws',
    element: 'html',
    lang: 'zea',
  },
  name: 'Zeeuws',
  parameters: {
    docs: {
      description: {
        story: 'De ISO 639-3 code voor Twents is `zea`.',
      },
    },
  },
};

export const Twents: Story = {
  args: {
    children: 'Twents',
    element: 'html',
    lang: 'twd',
  },
  name: 'Twents',
  parameters: {
    docs: {
      description: {
        story: 'De ISO 639-3 code voor Twents is `twd`.',
      },
    },
  },
};

export const Papiamento: Story = {
  args: {
    children: 'Papiamento',
    element: 'html',
    lang: 'pap',
  },
  name: 'Papiamento',
  parameters: {
    docs: {
      description: {
        story: 'De ISO 639-3 code voor Papiamento of Papiamentu is `pap`.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);

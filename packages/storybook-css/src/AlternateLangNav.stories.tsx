/* @license CC0-1.0 */

import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import readme from '@utrecht/alternate-lang-nav-css/README.md?raw';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { AlternateLangNavStory } from './AlternateLangNav';
import { designTokenStory } from './design-token-story';

const noStyleDecorator: Decorator = (Story) => (
  <div className="no-style-decorator">
    <Story />
  </div>
);

const meta = {
  title: 'CSS Component/Alternate language navigation',
  id: 'css-alternate-lang-nav',
  component: AlternateLangNavStory,
  argTypes: {
    element: {
      description: 'HTML element',
      control: 'select',
      options: ['a', 'button'],
    },
    headingLevel: {
      description: 'Heading level',
    },
    languages: {
      description: 'Languages',
    },
  },
  args: {
    element: 'a',
    headingLevel: 1,
    languages: [],
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Falternate-lang-nav',
    nldesignsystem: 'https://nldesignsystem.nl/language-nav',
    tokensPrefix: 'utrecht-alternate-lang-nav',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokens,
    tokensDefinition: {},
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof AlternateLangNavStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headingLevel: 2,
    languages: [
      {
        'aria-current': true,
        'aria-label': 'This page in English',
        children: 'EN',
        className: 'utrecht-link--current-lang',
        href: 'https://example.com/en/',
        hrefLang: 'en',
        lang: 'en',
      },
      {
        'aria-label': 'Deze pagina in Nederlands',
        children: 'NL',
        className: 'utrecht-link--alternate-lang',
        href: 'https://example.com/nl/',
        hrefLang: 'nl',
        lang: 'nl',
        rel: 'alternate',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling via `utrecht-alternate-lang-nav` class name.',
      },
    },
  },
};

export const WithoutCSS: Story = {
  args: {
    ...Default.args,
  },
  decorators: [noStyleDecorator],
  name: 'Without CSS',
  parameters: {
    docs: {
      description: {
        story: 'Gebruik de juiste HTML markup, zodat de navigatie ook duidelijk is als de CSS niet geladen kan worden.',
      },
    },
  },
};

export const ButtonGroup: Story = {
  args: {
    element: 'button',
    headingLevel: 2,
    languages: [
      {
        pressed: true,
        'aria-label': 'This page in English',
        children: 'EN',
        formAction: 'https://example.com/en/',
        lang: 'en',
      },
      {
        'aria-label': 'Deze pagina in Nederlands',
        children: 'NL',
        formAction: 'https://example.com/nl/',
        lang: 'nl',
      },
    ],
  },
  name: 'Button group',
  parameters: {
    docs: {
      description: {
        story:
          'Gebruik een button met `aria-pressed` om duidelijk te maken welke optie de huidige taal is. Zie ook: [WCAG Technique ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA5).',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);

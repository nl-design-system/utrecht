/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/link/README.md?raw';
import tokensDefinition from '@utrecht/components/link/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { htmlContentDecorator } from './decorator';
import { designTokenStory } from '../components/util';

const normalizeTokenList = (str: string): string => str.replace(/\s+/g, ' ').trim();

const Link = ({
  children,
  href,
  current,
  lang = undefined,
  hrefLang = undefined,
  alternate = false,
  external = false,
}) => (
  <a
    href={href === null ? '#' : href}
    aria-current={current || undefined}
    hrefLang={hrefLang || undefined}
    lang={lang || undefined}
    rel={
      normalizeTokenList(`${alternate ? 'alternate' : ''} ${external ? 'external noopener noreferrer' : ''}`) ||
      undefined
    }
  >
    {children}
  </a>
);

const meta = {
  title: 'HTML Component/Link',
  id: 'html-link',
  component: Link,
  decorators: [htmlContentDecorator],
  argTypes: {
    children: {
      description: 'Content of the link',
      control: 'text',
    },
    alternate: {
      description: 'Target document is an alternate version of the current page',
      type: 'boolean',
    },
    current: {
      description: 'Current page is the same as the link target',
      control: { type: 'select' },
      options: ['', 'date', 'false', 'location', 'page', 'step', 'time', 'true'],
    },
    external: {
      description: 'Link is external link',
      type: 'boolean',
    },
    href: {
      description: 'Link href',
      control: 'text',
    },
    hrefLang: {
      description: 'Language of the target document',
      control: 'text',
    },
    lang: {
      description: 'Language of the link text',
      control: 'text',
    },
  },
  args: {
    alternate: false,
    children: [],
    external: false,
    hrefLang: '',
    lang: '',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-link',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
    href: 'https://example.com/',
  },
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `<a>` element.',
      },
    },
  },
};

export const Email: Story = {
  args: {
    href: 'mailto:info@example.com',
    children: 'info@example.com',
  },
  name: 'E-mail',
  parameters: {
    docs: {
      description: {
        story: 'Styling via the `<a>` element when `href` attribute starts with `mailto:`.',
      },
    },
  },
};

export const External: Story = {
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
    external: true,
    href: 'https://example.com/',
  },
  name: 'External',
  parameters: {
    docs: {
      description: {
        story: 'Styling via het `<a>` element wanneer `rel="external"` is gezet:',
      },
    },
  },
};

export const Telephone: Story = {
  args: {
    href: 'tel:+31555385385',
    children: '+31 555 385 385',
  },
  name: 'Telephone',
  parameters: {
    docs: {
      description: {
        story: 'Styling via the `<a>` element when `href` attribute starts with `tel:`.',
      },
    },
  },
};

export const AlternateLang: Story = {
  args: {
    alternate: true,
    href: 'https://example.com/en/',
    hrefLang: 'en',
    lang: 'en',
    children: 'EN',
    ariaLabel: 'This page in English',
  },
  name: 'Alternate language',
};

export const CurrentLang: Story = {
  args: {
    current: true,
    href: 'https://example.com/en/',
    hrefLang: 'en',
    lang: 'en',
    children: 'EN',
    ariaLabel: 'This page in English',
  },
  name: 'Current language',
};

export const DesignTokens = designTokenStory(meta);

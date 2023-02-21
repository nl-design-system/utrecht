/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/link/README.md?raw';
import tokensDefinition from '@utrecht/components/link/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { Link } from './Link';
import { designTokenStory } from './util';
import '@utrecht/components/link/css/index.scss';

const meta = {
  title: 'CSS Component/Link 2',
  id: 'css-link',
  component: Link,
  argTypes: {
    active: {
      description: 'Active',
      control: 'boolean',
      defaultValue: false,
    },
    boxContent: {
      description: 'Content is a box, such as an image or a section, not just text',
      control: 'boolean',
      defaultValue: false,
    },
    current: {
      description: 'Current',
      control: 'boolean',
      defaultValue: false,
    },
    external: {
      description: 'External',
      control: 'boolean',
      defaultValue: false,
    },
    hover: {
      description: 'Hover',
      control: 'boolean',
      defaultValue: false,
    },
    focus: {
      description: 'Focus',
      control: 'boolean',
      defaultValue: false,
    },
    focusVisible: {
      description: 'Focus visible',
      control: 'boolean',
      defaultValue: false,
    },
    href: {
      description: 'Target URL',
      defaultValue: '',
      type: {
        name: 'string',
        required: true,
      },
    },
    hrefLang: {
      description: 'Language of target resource',
      defaultValue: '',
      type: {
        name: 'string',
        required: true,
      },
    },
    lang: {
      description: 'Language of link text',
      defaultValue: '',
      type: {
        name: 'string',
        required: true,
      },
    },
    tabIndex: {
      description: 'Tabindex',
      defaultValue: '',
      type: {
        name: 'string',
        required: false,
      },
    },
    telephone: {
      description: 'Link to telephone number',
      control: 'boolean',
      defaultValue: false,
    },
    textContent: {
      description: 'Link text',
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: '',
    },
    visited: {
      description: 'Visited',
      control: 'boolean',
      defaultValue: false,
    },
    placeholder: {
      description: 'Placeholder for a link',
      control: 'boolean',
      defaultValue: false,
    },
  },
  args: {
    href: 'https://example.com/',
    textContent: 'Voorbeeldlink',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'ALPHA',
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
} as Meta<typeof Link>;

export default meta;

export const Default: StoryObj<typeof Link> = {};

export const Email: StoryObj<typeof Link> = {
  args: {
    href: 'mailto:info@example.com',
    textContent: 'info@example.com',
    mail: true,
  },
  name: 'E-mail',
};

export const Telephone: StoryObj<typeof Link> = {
  args: {
    href: 'tel:+31555385385',
    textContent: '+31 555 385 385',
    telephone: true,
  },
  name: 'Telephone',
};

export const DesignTokens = designTokenStory(meta);

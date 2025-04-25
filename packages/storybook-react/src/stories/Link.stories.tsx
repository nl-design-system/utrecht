import { Meta, StoryObj } from '@storybook/react';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import iconSet from '@utrecht/icon/dist/iconset.mjs';
import readme from '@utrecht/link-css/README.md?raw';
import tokensDefinition from '@utrecht/link-css/dist/tokens.mjs';
import { Link, LinkProps } from '@utrecht/link-react/dist/css';
import React from 'react';
import { designTokenStory } from './util.js';

interface LinkStoryProps extends LinkProps {
  icon?: string;
}

const LinkStory = ({ children, icon, ...props }: LinkStoryProps) => {
  const IconElement = icon;
  return (
    <Link icon={IconElement ? <IconElement /> : null} {...props}>
      {children}
    </Link>
  );
};

const meta = {
  title: 'React Component/Link',
  id: 'react-link',
  component: LinkStory,
  args: {
    children: 'Read more',
    href: 'https://www.example.com',
  },
  parameters: {
    tokensPrefix: 'utrecht-link',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  argTypes: {
    external: {
      name: 'external',
      type: { name: 'boolean', required: false },
      table: {
        category: 'API',
        defaultValue: { summary: false },
      },
    },
    href: {
      name: 'href',
      type: { name: 'string', required: false },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    'aria-current': {
      name: 'aria-current',
      type: { name: 'string', required: false },
      options: [undefined, 'page', 'step', 'location', 'date', 'time', 'true', 'false'],
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: 'false' },
      },
    },
    hrefLang: {
      name: 'hrefLang',
      type: { name: 'string', required: false },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    lang: {
      name: 'lang',
      type: { name: 'string', required: false },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    placeholder: {
      name: 'placeholder',
      type: { name: 'boolean', required: false },
      table: {
        category: 'API',
        defaultValue: { summary: false },
      },
    },
    rel: {
      name: 'rel',
      type: { name: 'string', required: false },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    target: {
      name: 'target',
      type: { name: 'string', required: false },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    icon: {
      description: 'Icon',
      control: { type: 'select' },
      options: ['', ...iconSet.map(({ id }) => id)],
      table: {
        category: 'API',
        defaultValue: { summary: '' },
      },
    },
  },
} satisfies Meta<typeof LinkStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultWithIcon: Story = {
  args: {
    children: null,
    label: (
      <>
        Read more <i>here</i>...
      </>
    ),
    icon: 'utrecht-icon-loupe',
  },
};

export const External: Story = {
  args: {
    children: 'Watch video on YouTube',
    href: 'https://www.example.com',
    external: true,
  },
};

export const Placeholder: Story = {
  args: {
    children: 'Step 5: Review your submission',
    href: 'https://www.example.com',
    placeholder: true,
  },
};

export const Email: Story = {
  args: {
    href: 'mailto:info@example.com',
    children: 'info@example.com',
  },
};

export const Telephone: Story = {
  args: {
    href: 'tel:+31555385385',
    children: '+31 555 385 385',
  },
};

export const AlternateLanguage: Story = {
  args: {
    href: 'https://example.com/en',
    title: 'This page in English',
    hrefLang: 'en',
    lang: 'en',
    rel: 'alternate',
    children: 'EN',
  },
};

export const CurrentLanguage: Story = {
  args: {
    href: 'https://example.com/en',
    title: 'This page in English',
    hrefLang: 'en',
    lang: 'en',
    children: 'EN',
    'aria-current': 'page',
  },
};

export const Hover: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Focus: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    pseudo: { focus: true },
  },
};

export const FocusVisible: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    pseudo: { focusVisible: true },
  },
};

export const Active: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    pseudo: { active: true },
  },
};

export const Visited: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    pseudo: { visited: true },
  },
};

export const DesignTokens = designTokenStory(meta);

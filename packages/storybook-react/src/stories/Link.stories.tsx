import { Meta, StoryObj } from '@storybook/react';
import { Link } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/link/README.md?raw';
import tokensDefinition from '@utrecht/components/link/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Link',
  id: 'react-link',
  component: Link,
  tags: ['autodocs'],
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
  },
} as Meta<typeof Link>;

export default meta;

const Template: StoryObj<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Read more',
  href: 'https://www.example.com',
};

export const External = Template.bind({});

External.args = {
  children: 'Watch video on YouTube',
  href: 'https://www.example.com',
  external: true,
};

export const Placeholder = Template.bind({});

Placeholder.args = {
  children: 'Step 5: Review your submission',
  href: 'https://www.example.com',
  placeholder: true,
};

export const Email = Template.bind({});

Email.args = {
  href: 'mailto:info@example.com',
  children: 'info@example.com',
};

export const Telephone = Template.bind({});

Telephone.args = {
  href: 'tel:+31555385385',
  children: '+31 555 385 385',
};

export const AlternateLanguage = Template.bind({});

AlternateLanguage.args = {
  href: 'https://example.com/en',
  title: 'This page in English',
  hrefLang: 'en',
  lang: 'en',
  rel: 'alternate',
  children: 'EN',
};

export const CurrentLanguage = Template.bind({});

CurrentLanguage.args = {
  href: 'https://example.com/en',
  title: 'This page in English',
  hrefLang: 'en',
  lang: 'en',
  children: 'EN',
  'aria-current': 'page',
};

export const Hover = Template.bind({});

Hover.args = {
  ...Default.args,
};

Hover.parameters = {
  pseudo: { hover: true },
};

export const Focus = Template.bind({});

Focus.args = {
  ...Default.args,
};

Focus.parameters = {
  pseudo: { focus: true },
};

export const FocusVisible = Template.bind({});

FocusVisible.args = {
  ...Default.args,
};

FocusVisible.parameters = {
  pseudo: { focusVisible: true },
};

export const Active = Template.bind({});

Active.args = {
  ...Default.args,
};

Active.parameters = {
  pseudo: { active: true },
};

export const Visited = Template.bind({});

Visited.args = {
  ...Default.args,
};

Visited.parameters = {
  pseudo: { visited: true },
};

export const DesignTokens = designTokenStory(meta);

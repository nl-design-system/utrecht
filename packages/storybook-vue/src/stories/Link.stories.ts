import type { Meta, StoryObj } from '@storybook/vue3';
import { Link } from '@utrecht/component-library-vue';
import readme from '@utrecht/components/link/README.md?raw';
import tokens from '@utrecht/components/link/tokens.json';
import { createStory } from './util';

const meta = {
  id: 'vue-link',
  title: 'Vue.js Component/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    external: {
      name: 'external',
      type: { name: 'boolean', required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
    href: {
      name: 'href',
      type: { name: 'string', required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
    target: {
      type: { name: 'string', required: false },
    },
  },
  args: {
    href: 'https://example.com',
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-link',
    docs: {
      description: {
        component: readme,
      },
      source: {
        code: '<UtrechtLink v-bind="$props"><slot></slot></UtrechtLink>',
      },
    },
  },
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'Link',
  args: {
    textContent: 'Default',
  },
});

export const ExternalLink: Story = createStory(meta, {
  name: 'External link',
  args: {
    external: true,
    href: 'https://example.com',
    textContent: 'External Link',
  },
});

export const EmailLink: Story = createStory(meta, {
  name: 'E-mail link',
  args: {
    textContent: 'Email',
    href: 'mailto:info@example.com',
  },
});

export const TelephoneLink: Story = createStory(meta, {
  name: 'Telephone link',
  args: {
    textContent: '+31 555 385 385',
    href: 'tel:+31555385385',
  },
});

export const AlternateLanguageLink: Story = createStory(meta, {
  name: 'Alternate language link',
  args: {
    textContent: 'EN',
    href: 'https://example.com/en',
    title: 'This page in English',
    hreflang: 'en',
    lang: 'en',
  },
});

export const CurrentLanguageLink: Story = createStory(meta, {
  name: 'Current language link',
  args: {
    textContent: 'EN',
    href: 'https://example.com/en',
    'aria-current': 'page',
    title: 'This page in English',
    hreflang: 'en',
    lang: 'en',
  },
});

export const Hover: Story = createStory(meta, {
  name: 'Hover',
  args: {
    textContent: 'Interactive state: hover',
  },
  parameters: {
    pseudo: { hover: true },
  },
});

export const Focus: Story = createStory(meta, {
  name: 'Focus',
  args: {
    textContent: 'Interactive state: focus',
  },
  parameters: {
    pseudo: { focus: true },
  },
});

export const FocusVisible: Story = createStory(meta, {
  name: 'Focus visible',
  args: {
    textContent: 'Interactive state: focus visible',
  },
  parameters: {
    pseudo: { focus: true, focusVisible: true },
  },
});

export const Active: Story = createStory(meta, {
  name: 'Active',
  args: {
    textContent: 'Interactive state: active',
  },
  parameters: {
    pseudo: { active: true },
  },
});

export const Visited: Story = createStory(meta, {
  name: 'Visited',
  args: {
    textContent: 'Interactive state: visited',
  },
  parameters: {
    pseudo: { visited: true },
  },
});

import type { Meta, StoryObj } from '@storybook/vue3';
import { BreadcrumbNav, BreadcrumbNavLink, Heading } from '@utrecht/component-library-vue';
import readme from '@utrecht/components/breadcrumb-nav/README.md?raw';
import tokens from '@utrecht/components/breadcrumb-nav/tokens.json';
import { createStory } from './util';

const meta = {
  id: 'vue-breadcrumb-nav',
  title: 'Vue.js Component/Breadcrumb Nav',
  component: BreadcrumbNav,
  tags: ['autodocs'],
  args: {
    appearance: 'arrows',
    label: 'Kruimelpad',
  },
  argTypes: {
    appearance: {
      description: 'Appearance',
      control: { type: 'select' },
      options: ['', 'arrows'],
    },
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokenPrefix: 'utrecht-breadcrumb-nav',
    tokens,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: (args) => ({
    components: {
      BreadcrumbNavLink,
      BreadcrumbNav,
      Heading,
    },
    setup() {
      return { args };
    },
    template: `
      <BreadcrumbNav v-bind="$props">
        <slot></slot>
      </BreadcrumbNav>
    `,
  }),
} satisfies Meta<typeof BreadcrumbNav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  args: {
    slot: `<BreadcrumbNavLink href="/" :rel="home" :index="0">Home</BreadcrumbNavLink>
      <BreadcrumbNavLink href="/a/" :index="1">Niveau 1</BreadcrumbNavLink>
      <BreadcrumbNavLink href="/a/b/" :rel="up" :index="2">Niveau 2</BreadcrumbNavLink>`,
  },
});

export const Current: Story = createStory(meta, {
  args: {
    slot: `<BreadcrumbNavLink href="/" :rel="home" :index="0">Home</BreadcrumbNavLink>
      <BreadcrumbNavLink href="/a/" :index="1">Niveau 1</BreadcrumbNavLink>
      <BreadcrumbNavLink href="/a/b/" :rel="up" :index="2">Niveau 2</BreadcrumbNavLink>
      <BreadcrumbNavLink href="/a/b/this-page" :index="3" :current="true">This page</BreadcrumbNavLink>`,
  },
});

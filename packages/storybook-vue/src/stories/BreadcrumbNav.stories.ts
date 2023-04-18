import type { Meta, StoryObj } from '@storybook/vue3';
import { BreadcrumbLink, BreadcrumbNav, Heading } from '@utrecht/component-library-vue';
import readme from '@utrecht/components/breadcrumb/README.md?raw';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { createStory } from './util';

const meta: Meta<typeof BreadcrumbNav> = {
  id: 'vue-breadcrumb-nav',
  title: 'Vue.js Component/Breadcrumb Nav',
  component: BreadcrumbNav,
  tags: ['autodocs'],
  args: {
    appearance: 'arrows',
    label: 'Kruimelpad',
  },
  argTypes: {
    description: 'Appearance',
    control: { type: 'select' },
    options: ['', 'arrows'],
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokensPrefix: 'utrecht-breadcrumb-nav',
    tokens,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: (args) => ({
    components: {
      BreadcrumbLink,
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
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  args: {
    slot: `<BreadcrumbLink :href="'/'" :rel="home" :index="0">Home</BreadcrumbLink>
      <BreadcrumbLink :href="'/a/'" :index="1">Niveau 1</BreadcrumbLink>
      <BreadcrumbLink :href="'/a/b/'" :rel="up" :index="2">Niveau 2</BreadcrumbLink>`,
  },
});

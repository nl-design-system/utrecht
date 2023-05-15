import type { Meta, StoryObj } from '@storybook/vue3';
import { SkipLink } from '@utrecht/component-library-vue';
import readme from '@utrecht/components/skip-link/README.md?raw';
import tokens from '@utrecht/components/skip-link/tokens.json';
import { createStory } from './util';

const meta: Meta<typeof SkipLink> = {
  id: 'vue-skip-link',
  title: 'Vue.js Component/Skip Link',
  component: SkipLink,
  tags: ['autodocs'],
  argTypes: {
    href: {
      name: 'href',
      type: { name: 'string', required: true },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
  },
  decorators: [() => ({ template: '<div class="utrecht-document utrecht-theme"><story/></div>' })],
  render: (args) => ({
    setup() {
      return { args };
    },
    components: { SkipLink },
    template: `<div style="min-height: 240px; min-width: 320px; position: relative; will-change: transform;"><SkipLink :href="args.href"><slot></slot></SkipLink></div>`,
  }),
  parameters: {
    status: {
      type: 'ALPHA',
    },
    pseudo: {
      // Since skip link is not visible by default, simulate focus state by default
      focus: true,
      focusVisible: true,
    },
    tokens,
    tokenPrefix: 'utrecht-skip-link',
    docs: {
      description: {
        component: readme,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'SkipLink',
  component: SkipLink,
  args: {
    href: '#main',
    slot: 'Skip to main content',
  },
});

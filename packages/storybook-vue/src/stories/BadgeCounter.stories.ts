import type { Meta, StoryObj } from '@storybook/vue3';
import { BadgeCounter } from '@utrecht/component-library-vue';
import readme from '@utrecht/components/badge-counter/README.md?raw';
import tokens from '@utrecht/components/badge-counter/tokens.json';
import { createStory } from './util';

const meta = {
  id: 'vue-badge-counter',
  title: 'Vue.js Component/Badge Counter',
  component: BadgeCounter,
  tags: ['autodocs'],
  args: {
    value: '42',
  },
  argTypes: {
    value: {
      name: 'Value',
      type: { name: 'string', required: false },
      table: { defaultValue: { summary: '' } },
    },
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokenPrefix: 'utrecht-badge-counter',
    tokens,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: (args) => ({
    components: {
      BadgeCounter,
    },
    setup() {
      return { args };
    },
    template: `
      <BadgeCounter v-bind="$props">
        <slot></slot>
      </BadgeCounter>
    `,
  }),
} satisfies Meta<typeof BadgeCounter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  args: {
    slot: '42',
  },
});

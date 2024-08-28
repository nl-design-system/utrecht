import type { Meta, StoryObj } from '@storybook/vue3';
import { NumberBadge } from '@utrecht/component-library-vue';
import readme from '@utrecht/number-badge-css/README.md?raw';
import tokens from '@utrecht/number-badge-css/src/tokens.json';
import { createStory } from './util';

const meta = {
  id: 'vue-badge-counter',
  title: 'Vue.js Component/Number badge',
  component: NumberBadge,
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
    tokenPrefix: 'utrecht-number-badge',
    tokens,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: (args) => ({
    components: {
      NumberBadge,
    },
    setup() {
      return { args };
    },
    template: `
      <NumberBadge v-bind="$props">
        <slot></slot>
      </NumberBadge>
    `,
  }),
} satisfies Meta<typeof NumberBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  args: {
    slot: '42',
  },
});

import type { Meta, StoryObj } from '@storybook/vue3';
import { NumberData } from '@utrecht/component-library-vue';
import readme from '@utrecht/components/number-data/README.md?raw';
import tokens from '@utrecht/components/number-data/tokens.json';
import { createStory } from './util';

const meta = {
  id: 'vue-number-data',
  title: 'Vue.js Component/Number data',
  component: NumberData,
  tags: ['autodocs'],
  argTypes: {
    value: {
      name: 'value',
      type: { name: 'string', required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
  },
  args: {
    value: '123',
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-number-data',
    docs: {
      description: {
        component: readme,
      },
      source: {
        code: '<NumberData v-bind="$props"><slot></slot></NumberData>',
      },
    },
  },
  render: () => ({
    components: {
      NumberData,
    },
    template: `<NumberData v-bind="$props"><slot></slot></NumberData>`,
  }),
} satisfies Meta<typeof NumberData>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  args: {
    slot: '1234567890',
    value: '1234567890',
  },
});

export const WithFormatting: Story = createStory(meta, {
  args: {
    slot: '1.234.567.890',
    value: '1234567890',
  },
});

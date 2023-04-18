import type { Meta, StoryObj } from '@storybook/vue3';
import { NumberValue } from '@utrecht/component-library-vue';
import readme from '@utrecht/components/value-number/README.md?raw';
import tokens from '@utrecht/components/value-number/tokens.json';
import { createStory } from './util';

const meta: Meta<typeof NumberValue> = {
  id: 'vue-number-value',
  title: 'Vue.js Component/Number Value',
  component: NumberValue,
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
    tokenPrefix: 'utrecht-number-value',
    docs: {
      description: {
        component: readme,
      },
      source: {
        code: '<NumberValue v-bind="$props"><slot></slot></NumberValue>',
      },
    },
  },
  render: () => ({
    components: {
      NumberValue,
    },
    template: `<NumberValue v-bind="$props"><slot></slot></NumberValue>`,
  }),
};

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

import type { Meta, StoryObj } from '@storybook/vue3';
import { OrderedList, OrderedListItem } from '@utrecht/component-library-vue';
import readme from '@utrecht/ordered-list-css/README.md?raw';
import tokens from '@utrecht/ordered-list-css/src/tokens.json';
import { createStory } from './util';

const meta = {
  id: 'vue-ordered-list',
  title: 'Vue.js Component/Ordered List',
  component: OrderedList,
  tags: ['autodocs'],
  argTypes: {
    slot: {
      name: 'slot',
      control: { type: 'text' },
      type: { required: false },
      table: {
        defaultValue: { summary: '' },
      },
    },
    reversed: {
      type: { name: 'boolean', required: false },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: false },
      },
    },
    start: {
      type: { name: 'number', required: false },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: 1 },
      },
    },
  },
  render: (args) => ({
    setup() {
      return { args };
    },
    components: { OrderedList, OrderedListItem },
    template: `<OrderedList v-bind="$props"><slot></slot></OrderedList>`,
  }),
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-ordered-list',
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof OrderedList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'Ordered List',
  component: OrderedList,
  components: { OrderedListItem },
  args: {
    slot: `
      <OrderedListItem>List item 1</OrderedListItem>
      <OrderedListItem>List item 2</OrderedListItem>
      <OrderedListItem>List item 3</OrderedListItem>
    `,
  },
});

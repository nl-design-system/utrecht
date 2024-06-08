import type { Meta, StoryObj } from '@storybook/vue3';
import { UnorderedList, UnorderedListItem } from '@utrecht/component-library-vue';
import readme from '@utrecht/unordered-list-css/README.md?raw';
import tokens from '@utrecht/unordered-list-css/src/tokens.json';
import { createStory } from './util';

const meta = {
  id: 'vue-unordered-list',
  title: 'Vue.js Component/Unordered List',
  component: UnorderedList,
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
  },
  render: (args) => ({
    setup() {
      return { args };
    },
    components: { UnorderedList, UnorderedListItem },
    template: `<UnorderedList v-bind="$props"><slot></slot></UnorderedList>`,
  }),
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-unordered-list',
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UnorderedList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'Unordered List',
  component: UnorderedList,
  components: { UnorderedListItem },
  args: {
    slot: `
      <UnorderedListItem>List item 1</UnorderedListItem>
      <UnorderedListItem>List item 2</UnorderedListItem>
      <UnorderedListItem>List item 3</UnorderedListItem>
    `,
  },
});

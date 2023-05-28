import type { Meta, StoryObj } from '@storybook/vue3';
import { URLValue } from '@utrecht/component-library-vue';
import readme from '@utrecht/components/url/README.md?raw';
import tokens from '@utrecht/components/url/tokens.json';
import { createStory } from './util';

const meta: Meta<typeof URLValue> = {
  id: 'vue-url-value',
  title: 'Vue.js Component/URL Value',
  component: URLValue,
  tags: ['autodocs'],
  args: {},
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-url-value',
    docs: {
      description: {
        component: readme,
      },
      source: {
        code: '<URLValue v-bind="$props"><slot></slot></URLValue>',
      },
    },
  },
  render: (args) => ({
    components: {
      URLValue,
    },
    setup() {
      return { args };
    },
    template: `
      <URLValue v-bind="$props"><slot></slot></URLValue>
    `,
  }),
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  args: {
    slot: 'https://www.nldesignsystem.nl/',
  },
});

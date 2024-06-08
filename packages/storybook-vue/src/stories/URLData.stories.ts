import type { Meta, StoryObj } from '@storybook/vue3';
import { URLData } from '@utrecht/component-library-vue';
import readme from '@utrecht/url-data-css/README.md?raw';
import tokens from '@utrecht/url-data-css/src/tokens.json';
import { createStory } from './util';

const meta = {
  id: 'vue-url-data',
  title: 'Vue.js Component/URL data',
  component: URLData,
  tags: ['autodocs'],
  args: {},
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-url-data',
    docs: {
      description: {
        component: readme,
      },
      source: {
        code: '<URLData v-bind="$props"><slot></slot></URLData>',
      },
    },
  },
  render: (args) => ({
    components: {
      URLData,
    },
    setup() {
      return { args };
    },
    template: `
      <URLData v-bind="$props"><slot></slot></URLData>
    `,
  }),
} satisfies Meta<typeof URLData>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  args: {
    slot: 'https://www.nldesignsystem.nl/',
  },
});

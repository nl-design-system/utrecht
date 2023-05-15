import type { Meta, StoryObj } from '@storybook/vue3';
import { Strong } from '@utrecht/component-library-vue';
import readme from '@utrecht/components/emphasis/README.md?raw';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { createStory } from './util';

const meta: Meta<typeof Strong> = {
  id: 'vue-strong',
  title: 'Vue.js Component/Strong',
  component: Strong,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [() => ({ template: '<div class="utrecht-document utrecht-theme"><story/></div>' })],
  render: (args) => ({
    setup() {
      return { args };
    },
    components: { Strong },
    template: `<Strong><slot></slot></Strong>`,
  }),
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-emphasis',
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
  name: 'Strong',
  component: Strong,
  args: {
    slot: 'Hello, World!',
  },
});

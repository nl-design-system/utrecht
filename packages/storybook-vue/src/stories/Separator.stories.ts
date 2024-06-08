import type { Meta, StoryObj } from '@storybook/vue3';
import { Separator } from '@utrecht/component-library-vue';
import readme from '@utrecht/separator-css/README.md?raw';
import tokens from '@utrecht/separator-css/src/tokens.json';
import { createStory } from './util';

const meta = {
  id: 'vue-separator',
  title: 'Vue.js Component/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {},
  render: (args) => ({
    setup() {
      return { args };
    },
    components: { Separator },
    template: `<Separator />`,
  }),
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-separator',
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'Separator',
  component: Separator,
  args: {},
});

import type { Meta, StoryObj } from '@storybook/vue3';
import { Paragraph, Strong } from '@utrecht/component-library-vue';
import readme from '@utrecht/components/emphasis/README.md?raw';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { createStory } from './util';

const meta = {
  id: 'vue-strong',
  title: 'Vue.js Component/Strong',
  component: Strong,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    () => ({
      components: { Paragraph },
      template: '<Paragraph><story/></Paragraph>',
    }),
  ],
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
} satisfies Meta<typeof Strong>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'Strong',
  component: Strong,
  args: {
    slot: 'Hello, World!',
  },
});

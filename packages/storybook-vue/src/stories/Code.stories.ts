import type { Meta, StoryObj } from '@storybook/vue3';
import { Code } from '@utrecht/component-library-vue';
import readme from '@utrecht/components/code/README.md?raw';
import tokens from '@utrecht/components/code/tokens.json';
import { createStory } from './util';

const meta = {
  id: 'vue-code',
  title: 'Vue.js Component/Code',
  component: Code,
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokenPrefix: 'utrecht-code',
    tokens,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: (args) => ({
    components: {
      Code,
    },
    setup() {
      return { args };
    },
    template: `
      <Code v-bind="$props">
        {{ args.slot }}
      </Code>
    `,
  }),
} satisfies Meta<typeof Code>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  args: {
    slot: `<input type='url' value='https://example.fi/'>`,
  },
});

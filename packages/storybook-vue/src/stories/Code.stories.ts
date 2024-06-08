import type { Meta, StoryObj } from '@storybook/vue3';
import readme from '@utrecht/code-css/README.md?raw';
import tokens from '@utrecht/code-css/src/tokens.json';
import { Code } from '@utrecht/component-library-vue';
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

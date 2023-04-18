import type { Meta, StoryObj } from '@storybook/vue3';
import { CodeBlock } from '@utrecht/component-library-vue';
import readme from '@utrecht/components/code-block/README.md?raw';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { createStory } from './util';

const meta: Meta<typeof CodeBlock> = {
  id: 'vue-code-block',
  title: 'Vue.js Component/Code Block',
  component: CodeBlock,
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokensPrefix: 'utrecht-code-block',
    tokens,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: (args) => ({
    components: {
      CodeBlock,
    },
    setup() {
      return { args };
    },
    template: `
      <CodeBlock v-bind="$props">
        {{ args.slot }}
      </CodeBlock>
    `,
  }),
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  args: {
    slot: `<!DOCTYPE html>
      <html lang="nl" dir="ltr">
        <head>
          <title>NL Design System</title>
          <meta charset="utf-8"/>
        </head>
        <body>
          <h1>NL Design System</h1>
        </body>
      </html>
  `,
  },
});

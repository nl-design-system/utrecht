import type { Meta, StoryObj } from '@storybook/vue3';
import { HtmlContent } from '@utrecht/component-library-vue';
import tokens from '@utrecht/html-content-css/src/tokens.json';
import { createStory } from './util';

const meta = {
  id: 'vue-html-content',
  title: 'Vue.js Component/HTML Content',
  component: HtmlContent,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-html-content',
    docs: {
      source: {
        code: '<UtrechtHtmlContent v-bind="$props"><slot></slot></UtrechtHtmlContent>',
      },
    },
  },
  render: (args: any) => ({
    components: { HtmlContent },
    setup() {
      return { args };
    },
    template: `
      <HtmlContent><slot></slot></HtmlContent>
    `,
  }),
} satisfies Meta<typeof HtmlContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'HTML Content',
  args: {
    slot: '<h1>The Quick Brown Fox Jumps Over The Lazy Dog</h1><p>You will never believe what happened next!</p>',
  },
});

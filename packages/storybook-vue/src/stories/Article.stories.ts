import type { Meta, StoryObj } from '@storybook/vue3';
import readme from '@utrecht/article-css/README.md?raw';
import tokens from '@utrecht/article-css/src/tokens.json';
import { Article, Heading, Paragraph } from '@utrecht/component-library-vue';
import { createStory } from './util';

const meta = {
  id: 'vue-article',
  title: 'Vue.js Component/Article',
  component: Article,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  render: () => ({
    components: {
      Article,
      Heading,
      Paragraph,
    },
    template: `<Article v-bind="$props"><slot></slot></Article>`,
  }),
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-article',
    docs: {
      component: {
        description: readme,
      },
    },
  },
} satisfies Meta<typeof Article>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'Article',
  args: {
    slot: `<Heading :level="1">Lorem ipsum</Heading>
  <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
  laborum.</Paragraph>`,
  },
});

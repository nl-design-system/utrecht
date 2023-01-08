import type { Meta, StoryObj } from '@storybook/vue3';
import { Article, Heading, Paragraph } from '@utrecht/component-library-vue';
import readme from '@utrecht/components/article/README.md?raw';
import tokens from '@utrecht/components/article/tokens.json';
import { createStory } from './util';

const meta: Meta<typeof Article> = {
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
};

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

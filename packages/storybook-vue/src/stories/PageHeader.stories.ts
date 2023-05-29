import type { Meta, StoryObj } from '@storybook/vue3';
import { PageHeader, Paragraph } from '@utrecht/component-library-vue';
import readme from '@utrecht/components/page-header/README.md?raw';
import tokens from '@utrecht/components/page-header/tokens.json';
import { createStory } from './util';

const meta = {
  id: 'vue-page-header',
  title: 'Vue.js Component/Page header',
  component: PageHeader,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  render: () => ({
    components: {
      PageHeader,
      Paragraph,
    },
    template: `<PageHeader v-bind="$props"><slot></slot></PageHeader>`,
  }),
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-page-header',
    docs: {
      component: {
        description: readme,
      },
    },
  },
} satisfies Meta<typeof PageHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'Page header',
  args: {
    template: `Logo en navigatie kunnen hier`,
  },
});

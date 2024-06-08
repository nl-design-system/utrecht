import type { Meta, StoryObj } from '@storybook/vue3';
import { PageContent, Paragraph } from '@utrecht/component-library-vue';
import readme from '@utrecht/page-content-css/README.md?raw';
import tokens from '@utrecht/page-content-css/src/tokens.json';
import { createStory } from './util';

const meta = {
  id: 'vue-page-content',
  title: 'Vue.js Component/Page content',
  component: PageContent,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  render: () => ({
    components: {
      PageContent,
      Paragraph,
    },
    template: `<PageContent v-bind="$props"><slot></slot></PageContent>`,
  }),
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-page-content',
    docs: {
      component: {
        description: readme,
      },
    },
  },
} satisfies Meta<typeof PageContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'Page content',
  args: {
    slot: `Inhoud van de pagina kan hier`,
  },
});

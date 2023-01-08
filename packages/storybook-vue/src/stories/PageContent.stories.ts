import type { Meta, StoryObj } from '@storybook/vue3';
import { PageContent, Paragraph } from '@utrecht/component-library-vue';
import readme from '@utrecht/components/page-content/README.md?raw';
import tokens from '@utrecht/components/page-content/tokens.json';
import { createStory } from './util';

const meta: Meta<typeof PageContent> = {
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
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'Page content',
  args: {
    slot: `Inhoud van de pagina kan hier`,
  },
});

import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { PageFooter, Paragraph } from '@utrecht/component-library-vue';
import readme from '@utrecht/page-footer-css/README.md?raw';
import tokens from '@utrecht/page-footer-css/src/tokens.json';
import { createStory } from './util';

const meta = {
  id: 'vue-page-footer',
  title: 'Vue.js Component/Page footer',
  component: PageFooter,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  render: () => ({
    components: {
      PageFooter,
      Paragraph,
    },
    template: `<PageFooter v-bind="$props"><slot></slot></PageFooter>`,
  }),
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-page-footer',
    docs: {
      component: {
        description: readme,
      },
    },
  },
} satisfies Meta<typeof PageFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'Page footer',
  args: {
    slot: `Contactgegevens kunnen hier`,
  },
});

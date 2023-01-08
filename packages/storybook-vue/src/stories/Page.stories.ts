import type { Meta, StoryObj } from '@storybook/vue3';
import { Page, PageContent, PageFooter, PageHeader, Paragraph } from '@utrecht/component-library-vue';
import readme from '@utrecht/components/page/README.md?raw';
import tokens from '@utrecht/components/page/tokens.json';
import { createStory } from './util';

const meta: Meta<typeof Page> = {
  id: 'vue-page',
  title: 'Vue.js Component/Page',
  component: Page,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  render: () => ({
    components: {
      Page,
      PageHeader,
      PageContent,
      PageFooter,
      Paragraph,
    },
    template: `<Page v-bind="$props"><slot></slot></Page>`,
  }),
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-page',
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
  name: 'Page',
  args: {
    slot: `<PageHeader>Page header</PageHeader>
<PageContent>
  <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
laborum.</Paragraph>
</PageContent>
<PageFooter>Page footer</PageFooter>`,
  },
});

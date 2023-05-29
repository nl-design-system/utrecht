import type { Meta, StoryObj } from '@storybook/vue3';
import { Document, Heading, Paragraph } from '@utrecht/component-library-vue';
import readme from '@utrecht/components/document/README.md?raw';
import tokens from '@utrecht/components/document/tokens.json';
import { createStory } from './util';

const meta = {
  id: 'vue-document',
  title: 'Vue.js Component/Document',
  component: Document,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  render: () => ({
    components: {
      Document,
      Heading,
      Paragraph,
    },
    template: `<Document v-bind="$props"><slot></slot></Document>`,
  }),
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-document',
    docs: {
      component: {
        description: readme,
      },
    },
  },
} satisfies Meta<typeof Document>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'Document',
  args: {
    slot: `<Heading :level="1">Lorem ipsum</Heading><Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
  laborum.</Paragraph>`,
  },
});

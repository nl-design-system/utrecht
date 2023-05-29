import readme from '@nl-design-system-unstable/documentation/componenten/_paragraph.md?raw';
import type { Meta, StoryObj } from '@storybook/vue3';
import { Paragraph } from '@utrecht/component-library-vue';
import tokens from '@utrecht/components/paragraph/tokens.json';
import { createStory } from './util';

const meta = {
  id: 'vue-paragraph',
  title: 'Vue.js Component/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  argTypes: {
    lead: {
      name: 'lead',
      type: { name: 'boolean', required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
    small: {
      name: 'small',
      type: { name: 'boolean', required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
  },
  args: {
    lead: false,
    small: false,
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-paragraph',
    docs: {
      description: {
        component: readme,
      },
      source: {
        code: '<UtrechtParagraph v-bind="$props"><slot></slot></UtrechtParagraph>',
      },
    },
  },
  render: (args) => ({
    components: {
      Paragraph,
    },
    setup() {
      return { args };
    },
    template: `
      <Paragraph v-bind="$props"><slot></slot></Paragraph>
    `,
  }),
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

const paragraphText: string =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

export const Default: Story = createStory(meta, {
  name: 'Paragraph',
  args: {
    slot: paragraphText,
  },
});

export const Lead: Story = createStory(meta, {
  name: 'Lead',
  args: {
    lead: true,
    slot: paragraphText,
  },
});

export const Small: Story = createStory(meta, {
  name: 'Small',
  args: {
    small: true,
    slot: paragraphText,
  },
  render: (args: any) => ({
    components: {
      Paragraph,
    },
    setup() {
      return { args };
    },
    template: `
      <Paragraph v-bind="$props"><small><slot></slot></small></Paragraph>
    `,
  }),
});

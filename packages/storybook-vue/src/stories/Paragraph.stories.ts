import readme from '@nl-design-system-unstable/documentation/componenten/_paragraph.md?raw';
import type { Meta, StoryObj } from '@storybook/vue3';
import { Paragraph } from '@utrecht/component-library-vue';
import tokens from '@utrecht/components/paragraph/tokens.json';
import { createStory } from './util';

const meta: Meta<typeof Paragraph> = {
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
  },
  args: {},
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
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'Paragraph',
  args: {
    textContent:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
});

export const Lead: Story = createStory(meta, {
  name: 'Lead',
  args: {
    lead: true,
    textContent:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
});

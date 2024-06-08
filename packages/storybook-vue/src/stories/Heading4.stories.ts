import type { Meta, StoryObj } from '@storybook/vue3';
import { Heading4 } from '@utrecht/component-library-vue';
import tokens from '@utrecht/heading-4-css/src/tokens.json';
import { createStory } from './util';

const meta = {
  id: 'vue-heading-4',
  title: 'Vue.js Component/Heading 4',
  component: Heading4,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-heading-4',
    docs: {
      source: {
        code: '<UtrechtHeading4 v-bind="$props"><slot></slot></UtrechtHeading4>',
      },
    },
  },
} satisfies Meta<typeof Heading4>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'Heading 4',
  args: {
    textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
});

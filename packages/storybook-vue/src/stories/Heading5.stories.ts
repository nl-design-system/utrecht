import type { Meta, StoryObj } from '@storybook/vue3';
import { Heading5 } from '@utrecht/component-library-vue';
import tokens from '@utrecht/heading-5-css/src/tokens.json';
import { createStory } from './util';

const meta = {
  id: 'vue-heading-5',
  title: 'Vue.js Component/Heading 5',
  component: Heading5,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-heading-5',
    docs: {
      source: {
        code: '<UtrechtHeading5 v-bind="$props"><slot></slot></UtrechtHeading5>',
      },
    },
  },
} satisfies Meta<typeof Heading5>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'Heading 5',
  args: {
    textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
});

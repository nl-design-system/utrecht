import type { Meta, StoryObj } from '@storybook/vue3';
import { Heading2 } from '@utrecht/component-library-vue';
import tokens from '@utrecht/heading-1-css/src/tokens.json';
import { createStory } from './util';

const meta = {
  id: 'vue-heading-2',
  title: 'Vue.js Component/Heading 2',
  component: Heading2,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-heading-2',
    docs: {
      source: {
        code: '<UtrechtHeading2 v-bind="$props"><slot></slot></UtrechtHeading2>',
      },
    },
  },
} satisfies Meta<typeof Heading2>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'Heading 2',
  args: {
    textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
});

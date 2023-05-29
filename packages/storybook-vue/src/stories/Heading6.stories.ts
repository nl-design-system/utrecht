import type { Meta, StoryObj } from '@storybook/vue3';
import { Heading6 } from '@utrecht/component-library-vue';
import tokens from '@utrecht/components/heading-6/tokens.json';
import { createStory } from './util';

const meta = {
  id: 'vue-heading-6',
  title: 'Vue.js Component/Heading 6',
  component: Heading6,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-heading-6',
    docs: {
      source: {
        code: '<UtrechtHeading6 v-bind="$props"><slot></slot></UtrechtHeading6>',
      },
    },
  },
} satisfies Meta<typeof Heading6>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'Heading 6',
  args: {
    textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
});

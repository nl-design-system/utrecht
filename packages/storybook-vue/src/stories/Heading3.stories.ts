import type { Meta, StoryObj } from '@storybook/vue3';
import { Heading3 } from '@utrecht/component-library-vue';
import tokens from '@utrecht/components/heading-3/tokens.json';
import { createStory } from './util';

const meta = {
  id: 'vue-heading-3',
  title: 'Vue.js Component/Heading 3',
  component: Heading3,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-heading-3',
    docs: {
      source: {
        code: '<UtrechtHeading3 v-bind="$props"><slot></slot></UtrechtHeading3>',
      },
    },
  },
} satisfies Meta<typeof Heading3>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'Heading 3',
  args: {
    textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
});

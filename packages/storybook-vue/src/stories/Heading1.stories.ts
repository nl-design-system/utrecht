import type { Meta, StoryObj } from '@storybook/vue3';
import { Heading1 } from '@utrecht/component-library-vue';
import tokens from '@utrecht/components/heading-1/tokens.json';
import { createStory } from './util';

const meta: Meta<typeof Heading1> = {
  id: 'vue-heading-1',
  title: 'Vue.js Component/Heading 1',
  component: Heading1,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-heading-1',
    docs: {
      source: {
        code: '<UtrechtHeading1 v-bind="$props"><slot></slot></UtrechtHeading1>',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'Heading 1',
  args: {
    textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
});

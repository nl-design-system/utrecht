import type { Meta, StoryObj } from '@storybook/vue3';
import { Heading } from '@utrecht/component-library-vue';
import tokens from '@utrecht/components/heading/tokens.json';
import { createStory } from './util';

const meta = {
  id: 'vue-heading',
  title: 'Vue.js Component/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-heading',
    docs: {
      source: {
        code: '<UtrechtHeading v-bind="$props"><slot></slot></UtrechtHeading>',
      },
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Heading1: Story = createStory(meta, {
  name: 'Heading 1',
  args: {
    level: 1,
    textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
});

export const Heading2: Story = createStory(meta, {
  name: 'Heading 2',
  args: {
    level: 2,
    textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
});

export const Heading3: Story = createStory(meta, {
  name: 'Heading 3',
  args: {
    level: 3,
    textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
});

export const Heading4: Story = createStory(meta, {
  name: 'Heading 4',
  args: {
    level: 4,
    textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
});

export const Heading5: Story = createStory(meta, {
  name: 'Heading 5',
  args: {
    level: 5,
    textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
});

export const Heading6: Story = createStory(meta, {
  name: 'Heading 6',
  args: {
    level: 6,
    textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
});

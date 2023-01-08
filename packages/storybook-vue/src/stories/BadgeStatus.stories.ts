import type { Meta, StoryObj } from '@storybook/vue3';
import { BadgeStatus } from '@utrecht/component-library-vue';
import readme from '@utrecht/components/badge-status/README.md?raw';
import tokens from '@utrecht/components/badge-status/tokens.json';
import { createStory } from './util';

const meta: Meta<typeof BadgeStatus> = {
  id: 'vue-badge-status',
  title: 'Vue.js Component/Status badge',
  component: BadgeStatus,
  tags: ['autodocs'],
  argTypes: {
    textContent: {
      type: 'text',
      table: {
        defaultValue: { summary: '' },
      },
    },
    status: {
      type: 'select',
      options: ['neutral', 'danger', 'safe', 'invalid', 'valid', 'error', 'warning', 'success', 'inactive', 'active'],
      table: {
        defaultValue: { summary: '' },
      },
    },
  },
  args: {},
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-badge-status',
    docs: {
      description: {
        component: readme,
      },
      source: {
        code: '<UtrechtBadgeStatus v-bind="$props"><slot></slot></UtrechtBadgeStatus>',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'Status badge',
  args: {
    textContent: 'Neutral',
  },
});

export const Neutral: Story = createStory(meta, {
  name: 'Neutral',
  args: {
    status: 'neutral',
    textContent: 'Neutral',
  },
});

export const Danger: Story = createStory(meta, {
  name: 'Danger',
  args: {
    status: 'danger',
    textContent: 'Danger',
  },
});

export const Safe: Story = createStory(meta, {
  name: 'Safe',
  args: {
    status: 'safe',
    textContent: 'Safe',
  },
});

export const Invalid: Story = createStory(meta, {
  name: 'Invalid',
  args: {
    status: 'invalid',
    textContent: 'Invalid',
  },
});

export const Valid: Story = createStory(meta, {
  name: 'Valid',
  args: {
    status: 'valid',
    textContent: 'Valid',
  },
});

export const Error: Story = createStory(meta, {
  name: 'Error',
  args: {
    status: 'error',
    textContent: 'Error',
  },
});
export const Warning: Story = createStory(meta, {
  name: 'Warning',
  args: {
    status: 'warning',
    textContent: 'Warning',
  },
});
export const Success: Story = createStory(meta, {
  name: 'Success',
  args: {
    status: 'success',
    textContent: 'Success',
  },
});
export const Active: Story = createStory(meta, {
  name: 'Active',
  args: {
    status: 'active',
    textContent: 'Active',
  },
});

export const Inactive: Story = createStory(meta, {
  name: 'Inactive',
  args: {
    status: 'inactive',
    textContent: 'Inactive',
  },
});

import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { StatusBadge } from '@utrecht/component-library-vue';
import readme from '@utrecht/status-badge-css/README.md?raw';
import tokens from '@utrecht/status-badge-css/src/tokens.json';
import { createStory } from './util';

const meta = {
  id: 'vue-status-badge',
  title: 'Vue.js Component/Status badge',
  component: StatusBadge,
  tags: ['autodocs'],
  argTypes: {
    textContent: {
      type: 'string',
      table: {
        defaultValue: { summary: '' },
      },
    },
    status: {
      type: 'string',
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
    tokenPrefix: 'utrecht-status-badge',
    docs: {
      description: {
        component: readme,
      },
      source: {
        code: '<UtrechtStatusBadge v-bind="$props"><slot></slot></UtrechtStatusBadge>',
      },
    },
  },
} satisfies Meta<typeof StatusBadge>;

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

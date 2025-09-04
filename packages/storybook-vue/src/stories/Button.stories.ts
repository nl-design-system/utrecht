import type { Meta, StoryObj } from '@storybook/vue3-vite';
import tokens from '@utrecht/button-css/src/tokens.json';
import { Button } from '@utrecht/component-library-vue';
import { fn } from 'storybook/test';
import { createStory } from './util';

const meta = {
  id: 'vue-button',
  title: 'Vue.js Component/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    appearance: {
      type: 'string',
      options: ['primary-action-button', 'secondary-action-button', 'subtle-button'],
    },
    type: {
      type: 'string',
      options: ['button', 'submit', 'reset'],
    },
  },
  args: {
    onClick: fn(),
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-button',
    docs: {
      source: {
        code: '<UtrechtButton v-bind="$props"><slot></slot></UtrechtButton>',
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = createStory(meta, {
  name: 'Primary action button',
  args: {
    appearance: 'primary-action-button',
    textContent: 'Primary action',
  },
});

export const Secondary: Story = createStory(meta, {
  name: 'Secondary action button',
  args: {
    appearance: 'secondary-action-button',
    textContent: 'Secondary action',
  },
});

export const Subtle: Story = createStory(meta, {
  name: 'Subtle button',
  args: {
    appearance: 'subtle-button',
    textContent: 'Subtle button',
  },
});

export const ToggleButton: Story = createStory(meta, {
  name: 'Toggle button',
  args: {
    pressed: false,
    textContent: 'Toggle action',
  },
});

export const ToggleButtonPressed: Story = createStory(meta, {
  name: 'Toggle button pressed',
  args: {
    pressed: true,
    textContent: 'Toggle action',
  },
});

export const Hover: Story = createStory(meta, {
  name: 'Hover',
  args: {
    appearance: 'primary-action-button',
    textContent: 'Interactive state: hover',
  },
  parameters: {
    pseudo: { hover: true },
  },
});

export const Focus: Story = createStory(meta, {
  name: 'Focus',
  args: {
    appearance: 'primary-action-button',
    textContent: 'Interactive state: focus',
  },
  parameters: {
    pseudo: { focus: true },
  },
});

export const FocusVisible: Story = createStory(meta, {
  name: 'Focus visible',
  args: {
    appearance: 'primary-action-button',
    textContent: 'Interactive state: focus',
  },
  parameters: {
    pseudo: { focus: true, focusVisible: true },
  },
});

export const Active: Story = createStory(meta, {
  name: 'Active',
  args: {
    appearance: 'primary-action-button',
    textContent: 'Interactive state: active',
  },
  parameters: {
    pseudo: { active: true },
  },
});

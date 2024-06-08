import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/vue3';
import { Select } from '@utrecht/component-library-vue';
import readme from '@utrecht/select-css/README.md?raw';
import tokens from '@utrecht/select-css/src/tokens.json';
import { createStory } from './util';

const meta = {
  id: 'vue-select',
  title: 'Vue.js Component/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      name: 'disabled',
      type: { name: 'boolean', required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
    invalid: {
      name: 'invalid',
      type: { name: 'boolean', required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
    required: {
      name: 'required',
      type: { name: 'boolean', required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
    modelValue: {
      name: 'modelValue',
      table: {
        defaultValue: { summary: '' },
      },
    },
    readonly: {
      name: 'readonly',
      type: { name: 'boolean', required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
  },
  args: {},
  render: () => ({
    components: { Select },
    template: `<Select v-bind="$props" @update:modelValue="updateModelValue"><slot></slot></Select>`,
    methods: {
      updateModelValue: action('updateModelValue'),
    },
  }),
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-select',
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'Select',
  args: {
    options: [
      { value: '', label: 'Select an option', disabled: true },
      { value: 1, label: 'Option #1' },
      { value: 2, label: 'Option #2' },
      { value: 3, label: 'Option #3' },
      { value: 4, label: 'Option #4' },
    ],
  },
});

export const Disabled: Story = createStory(meta, {
  name: 'Disabled',
  args: {
    // ...Default.args,
    disabled: true,
  },
});

export const Invalid: Story = createStory(meta, {
  name: 'Invalid',
  args: {
    // ...Default.args,
    invalid: true,
  },
});

export const ReadOnly: Story = createStory(meta, {
  name: 'Read-only',
  args: {
    // ...Default.args,
    readonly: true,
  },
});

export const Required: Story = createStory(meta, {
  name: 'Required',
  args: {
    // ...Default.args,
    required: true,
  },
});

import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/vue3';
import { RadioButton } from '@utrecht/component-library-vue';
import readme from '@utrecht/radio-button-css/README.md?raw';
import tokens from '@utrecht/radio-button-css/src/tokens.json';
import { createStory } from './util';

const meta = {
  id: 'vue-radio-button',
  title: 'Vue.js Component/Radio button',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      name: 'checked',
      type: { name: 'boolean', required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
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
      type: { name: 'string', required: false },
    },
    value: {
      name: 'value',
      type: { name: 'string', required: false },
    },
  },
  args: {},
  render: () => ({
    components: {
      RadioButton,
    },
    template: `<RadioButton v-bind="$props" @update:modelValue="updateModelValue"></RadioButton>`,
    methods: {
      updateModelValue: action('updateModelValue'),
    },
  }),
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-radio-button',
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'RadioButton',
  args: {
    name: 'example-radio-button',
  },
});

export const Checked: Story = createStory(meta, {
  name: 'Checked',
  args: {
    name: 'example-radio-button',
    checked: true,
    value: 'optional value',
  },
});

export const Disabled: Story = createStory(meta, {
  name: 'Disabled',
  args: {
    name: 'example-radio-button',
    disabled: true,
    value: 'optional value',
  },
});

export const Invalid: Story = createStory(meta, {
  name: 'Invalid',
  args: {
    name: 'example-radio-button',
    invalid: true,
    value: 'optional value',
  },
});

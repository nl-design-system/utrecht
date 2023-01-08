import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/vue3';
import { Checkbox } from '@utrecht/component-library-vue';
import readme from '@utrecht/components/checkbox/README.md?raw';
import tokens from '@utrecht/components/checkbox/tokens.json';
import { createStory } from './util';

const meta: Meta<typeof Checkbox> = {
  id: 'vue-checkbox',
  title: 'Vue.js Component/Checkbox',
  component: Checkbox,
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
      table: {
        defaultValue: { summary: '' },
      },
    },
    value: {
      name: 'value',
      type: { name: 'string', required: false },
      table: {
        defaultValue: { summary: '' },
      },
    },
  },
  args: {},
  render: () => ({
    components: {
      Checkbox,
    },
    template: `<Checkbox v-bind="$props" @update:modelValue="updateModelValue"></Checkbox>`,
    methods: {
      updateModelValue: action('updateModelValue'),
    },
  }),
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-checkbox',
    docs: {
      description: {
        component: readme,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'Checkbox',
  args: {
    checked: true,
    name: 'example-checkbox',
    value: 'optional value',
  },
});

export const Checked: Story = createStory(meta, {
  name: 'Checked',
  args: {
    modelValue: 'true',
    name: 'example-checkbox',
    value: 'optional value',
  },
});

export const Disabled: Story = createStory(meta, {
  name: 'Disabled',
  args: {
    disabled: true,
    name: 'example-checkbox',
    value: 'optional value',
  },
});

export const DisabledChecked: Story = createStory(meta, {
  name: 'Disabled and checked',
  args: {
    disabled: true,
    modelValue: 'true',
    name: 'example-checkbox',
    value: 'optional value',
  },
});

export const Invalid: Story = createStory(meta, {
  name: 'Invalid',
  args: {
    invalid: true,
    name: 'example-checkbox',
    value: 'optional value',
  },
});

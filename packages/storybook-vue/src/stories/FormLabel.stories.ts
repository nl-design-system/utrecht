import type { Meta, StoryObj } from '@storybook/vue3';
import { FormLabel } from '@utrecht/component-library-vue';
import readme from '@utrecht/components/form-label/README.md?raw';
import tokens from '@utrecht/components/form-label/tokens.json';
import { createStory } from './util';

const meta = {
  id: 'vue-form-label',
  title: 'Vue.js Component/Form label',
  component: FormLabel,
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
    for: {
      name: 'for',
      type: { name: 'string', required: false },
      table: {
        defaultValue: { summary: '' },
      },
    },
    type: {
      name: 'type',
      control: { type: 'select' },
      options: ['', 'checkbox', 'radio'],
      type: { name: 'string', required: false },
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
    tokenPrefix: 'utrecht-form-label',
    docs: {
      description: {
        component: readme,
      },
      source: {
        code: '<UtrechtFormLabel v-bind="$props"><slot></slot></UtrechtFormLabel>',
      },
    },
  },
} satisfies Meta<typeof FormLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'Form label',
  args: {
    for: 'idref',
    textContent: 'Lorem ipsum',
  },
});

export const Disabled: Story = createStory(meta, {
  name: 'Disabled',
  args: {
    disabled: true,
    for: 'idref',
    textContent: 'Lorem ipsum',
  },
});

export const Checkbox: Story = createStory(meta, {
  name: 'Form label for checkbox',
  args: {
    for: 'idref',
    textContent: 'Lorem ipsum',
    type: 'checkbox',
  },
});

export const CheckedCheckbox: Story = createStory(meta, {
  name: 'Form label for checked checkbox',
  args: {
    checked: true,
    for: 'idref',
    textContent: 'Lorem ipsum',
    type: 'checkbox',
  },
});
export const Radio: Story = createStory(meta, {
  name: 'Form label for radio button',
  args: {
    for: 'idref',
    textContent: 'Lorem ipsum',
    type: 'radio',
  },
});

export const CheckedRadio: Story = createStory(meta, {
  name: 'Form label for checked radio button',
  args: {
    checked: true,
    for: 'idref',
    textContent: 'Lorem ipsum',
    type: 'radio',
  },
});

import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { Textarea } from '@utrecht/component-library-vue';
import readme from '@utrecht/textarea-css/README.md?raw';
import tokens from '@utrecht/textarea-css/src/tokens.json';
import { action } from 'storybook/actions';
import { createStory } from './util';

const meta = {
  id: 'vue-textarea',
  title: 'Vue.js Component/Textarea',
  component: Textarea,
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
    readonly: {
      name: 'readonly',
      type: { name: 'boolean', required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
    modelValue: {
      name: 'modelValue',
      type: { name: 'string', required: false },
      table: {
        defaultValue: { summary: 'The Quick Brown Fox Jumps Over The Lazy Dog' },
      },
    },
    rows: {
      name: 'rows',
      type: { name: 'number', required: false },
    },
    cols: {
      name: 'cols',
      type: { name: 'number', required: false },
    },
  },
  args: {},
  render: () => ({
    components: {
      Textarea,
    },
    template: `<Textarea v-bind="$props" @update:modelValue="updateModelValue"><slots></slots></Textarea>`,
    methods: {
      updateModelValue: action('updateModelValue'),
    },
  }),
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-textarea',
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

export const Default: Story = createStory(meta, {
  name: 'Textarea',
  args: {
    modelValue: loremIpsum,
    name: 'default-textarea',
    id: 'default-textarea',
  },
});

export const Placeholder: Story = createStory(meta, {
  name: 'Placeholder',
  args: {
    placeholder: 'Type your message here...',
    name: 'with-placeholder-textarea',
    id: 'with-placeholder-textarea',
  },
});

export const Disabled: Story = createStory(meta, {
  name: 'Disabled',
  args: {
    modelValue: loremIpsum,
    name: 'default-textarea',
    id: 'default-textarea',
    disabled: true,
  },
});

export const Invalid: Story = createStory(meta, {
  name: 'Invalid',
  args: {
    modelValue: loremIpsum,
    name: 'invalid-textarea',
    id: 'invalid-textarea',
    invalid: true,
  },
});

export const ReadOnly: Story = createStory(meta, {
  name: 'Read-only',
  args: {
    modelValue: loremIpsum,
    name: 'readonly-textarea',
    id: 'readonly-textarea',
    readonly: true,
  },
});
export const Required: Story = createStory(meta, {
  name: 'Required',
  args: {
    name: 'required-textarea',
    id: 'required-textarea',
    required: true,
    modelValue: loremIpsum,
  },
});

export const Hover: Story = createStory(meta, {
  name: 'Hover',
  args: {
    ...Default.args,
  },
  parameters: {
    pseudo: { hover: true },
  },
});

export const Focus: Story = createStory(meta, {
  name: 'Focus',
  args: {
    ...Default.args,
  },
  parameters: {
    pseudo: { focus: true },
  },
});

export const FocusVisible: Story = createStory(meta, {
  name: 'Focus-visible',
  args: {
    ...Default.args,
  },
  parameters: {
    pseudo: { focus: true, focusVisible: true },
  },
});

import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/vue3';
import { Textbox } from '@utrecht/component-library-vue';
import readme from '@utrecht/components/textbox/README.md?raw';
import tokens from '@utrecht/components/textbox/tokens.json';
import { createStory } from './util';

const meta: Meta<typeof Textbox> = {
  id: 'vue-textbox',
  title: 'Vue.js Component/Textbox',
  component: Textbox,
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
        defaultValue: { summary: '' },
      },
    },
    type: {
      name: 'type',
      type: { name: 'select', required: false },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      table: {
        defaultValue: { summary: 'text' },
      },
    },
    updateModelValue: {
      action: 'updateModelValue',
    },
    updateInput: {
      action: 'updateInput',
    },
  },
  args: {},
  render: () => ({
    components: {
      Textbox,
    },
    template: `<Textbox v-bind="$props" @update:modelValue="updateModelValue"></Textbox>`,
    methods: {
      updateModelValue: action('updateModelValue'),
    },
  }),
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-textbox',
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
  name: 'Textbox',
  args: {
    name: 'default-textbox',
    id: 'default-textbox',
    modelValue: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
});

export const Email: Story = createStory(meta, {
  name: 'Email',
  args: {
    name: 'textbox-email',
    id: 'textbox-email',
    type: 'email',
    modelValue: 'info@example.com',
  },
});

export const Password: Story = createStory(meta, {
  name: 'Password',
  args: {
    name: 'textbox-password',
    id: 'textbox-password',
    type: 'password',
    modelValue: '@*4xcRQjbZ8c*sEE@.G_nmsxakdX6vgJny_mYff4v!',
  },
});

export const NumberTextbox: Story = createStory(meta, {
  name: 'Number',
  args: {
    name: 'textbox-number',
    id: 'textbox-number',
    type: 'number',
    modelValue: '42',
  },
});

export const URLTextbox: Story = createStory(meta, {
  name: 'URL',
  args: {
    name: 'textbox-url',
    id: 'textbox-url',
    type: 'url',
    modelValue: 'https://example.com/',
  },
});

export const TelephoneTextbox: Story = createStory(meta, {
  name: 'Telephone number',
  args: {
    name: 'textbox-tel',
    id: 'textbox-tel',
    modelValue: '+31 555 385 385',
  },
});

export const Disabled: Story = createStory(meta, {
  name: 'Disabled',
  args: {
    name: 'textbox-disabled',
    id: 'textbox-disabled',
    disabled: true,
  },
});

export const Invalid: Story = createStory(meta, {
  name: 'Invalid',
  args: {
    name: 'textbox-invalid',
    id: 'textbox-invalid',
    invalid: true,
  },
});

export const ReadOnly: Story = createStory(meta, {
  name: 'Read-only',
  args: {
    name: 'textbox-readonly',
    id: 'textbox-readonly',
    readonly: true,
    value: 'Textbox Read-only',
  },
});

export const Required: Story = createStory(meta, {
  name: 'Required',
  args: {
    name: 'textbox-required',
    id: 'textbox-required',
    required: true,
    modelValue: '',
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
  name: 'Focus visible',
  args: {
    ...Default.args,
  },
  parameters: {
    pseudo: { focus: true, focusVisible: true },
  },
});

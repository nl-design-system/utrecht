import { Meta, StoryObj } from '@storybook/react';
import { MultipleFormioComponents } from './StoryUtil.js';

const meta = {
  id: 'open-forms-voorbeeld',
  title: 'Open Formulieren/Voorbeeld',
  component: MultipleFormioComponents,
  args: {
    components: [
      {
        type: '',
        key: '',
        label: '',
      },
    ],
  },
} satisfies Meta<typeof MultipleFormioComponents>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    components: [
      {
        type: 'textfield',
        key: 'textfield',
        label: 'Required text field',
        description: 'Text field description',
        validate: {
          required: true,
          pattern: '^\\d+',
        },
      },
      {
        type: 'radio',
        key: 'radio',
        label: 'Required radio',
        validate: {
          required: true,
        },
        values: [
          { value: 'a', label: 'Option A' },
          { value: 'b', label: 'Option B' },
        ],
      },
      {
        type: 'content',
        key: 'content',
        label: 'Content',
        html: '<p>Some WYSIWYG content</p>',
        customClass: 'info',
      },
      {
        type: 'fieldset',
        key: 'fieldset',
        label: 'Fieldset label',
        hideHeader: true,
        components: [
          {
            type: 'checkbox',
            key: 'checkbox',
            label: 'Checkbox',
          },
          {
            type: 'textfield',
            key: 'nestedTextfield',
            label: 'Nested text field',
          },
        ],
      },
      {
        type: 'textfield',
        key: 'hiddenTextfield',
        label: 'Hidden text field',
        hidden: true,
      },
      {
        label: 'Submit',
        showValidations: false,
        key: 'submit1',
        type: 'button',
        input: true,
      },
    ],
  },
};

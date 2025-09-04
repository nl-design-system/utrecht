import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { Checkbox, FormField, FormLabel, RadioButton, Textbox } from '@utrecht/component-library-vue';
import readme from '@utrecht/form-field-css/README.md?raw';
import tokens from '@utrecht/form-field-css/src/tokens.json';
import { createStory } from './util';

const meta = {
  id: 'vue-form-field',
  title: 'Vue.js Component/Form field',
  component: FormField,
  tags: ['autodocs'],
  argTypes: {
    type: {
      name: 'type',
      control: { type: 'select' },
      options: ['', 'checkbox', 'radio'],
      type: { required: false },
      table: {
        defaultValue: { summary: '' },
      },
    },
  },
  args: {},
  render: () => ({
    components: {
      Checkbox,
      FormField,
      FormLabel,
      RadioButton,
      Textbox,
    },
    template: `<FormField v-bind="$props"><slot></slot></FormField>`,
  }),
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-form-field',
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'Form field with textbox',
  args: {
    slot: '<FormLabel for="92eb76ee-c52f-4dc2-b3db-257ab2cba897">Value</FormLabel> <Textbox id="92eb76ee-c52f-4dc2-b3db-257ab2cba897"/>',
  },
});

export const Disabled: Story = createStory(meta, {
  name: 'Form field with disabled textbox',
  args: {
    slot: '<FormLabel for="d846e136-295d-486d-b939-e4e6126873c5" disabled>Value</FormLabel> <Textbox id="d846e136-295d-486d-b939-e4e6126873c5" disabled/>',
  },
});

export const Invalid: Story = createStory(meta, {
  name: 'Form field with invalid textbox',
  args: {
    invalid: true,
    slot: '<FormLabel for="d846e136-295d-486d-b939-e4e6126873c5">Value</FormLabel> <Textbox id="d846e136-295d-486d-b939-e4e6126873c5" invalid/>',
  },
});

export const CheckboxStory: Story = createStory(meta, {
  name: 'Form field with checkbox',
  args: {
    slot: '<Checkbox id="8592b5a5-588a-49d9-a14b-f25bc4d58714"/> <FormLabel for="8592b5a5-588a-49d9-a14b-f25bc4d58714" type="checkbox">Value</FormLabel>',
  },
});

export const CheckboxCheckedStory: Story = createStory(meta, {
  name: 'Form field with checked checkbox',
  args: {
    slot: '<Checkbox id="9e3eebbf-724f-438b-9466-50e2fa8e3c59" checked /> <FormLabel for="9e3eebbf-724f-438b-9466-50e2fa8e3c59" type="checkbox" checked>Value</FormLabel>',
  },
});

export const RadioButtonStory: Story = createStory(meta, {
  name: 'Form field with radio button',
  args: {
    slot: '<RadioButton id="666b0cb1-1e87-4b21-aeaa-0028ba4508a8"/> <FormLabel for="666b0cb1-1e87-4b21-aeaa-0028ba4508a8" type="radio">Value</FormLabel>',
  },
});

export const RadioButtonCheckedStory: Story = createStory(meta, {
  name: 'Form field with checked radio button',
  args: {
    slot: '<RadioButton id="5a6db203-684b-43bb-8d15-5178952c7a8f" checked /> <FormLabel for="5a6db203-684b-43bb-8d15-5178952c7a8f" type="radio" checked>Value</FormLabel>',
  },
});

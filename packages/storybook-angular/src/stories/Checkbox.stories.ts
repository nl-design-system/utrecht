import { Meta, StoryObj } from '@storybook/angular';
import { UtrechtCheckboxAttr } from '@utrecht/component-library-angular';

const checkboxMeta: Meta<UtrechtCheckboxAttr & { value?: string }> = {
  title: 'Angular Component/Checkbox',
  id: 'angular-checkbox',
  component: UtrechtCheckboxAttr,
  argTypes: {
    checked: {
      name: 'checked',
      type: { name: 'boolean', required: false },
      table: {
        category: 'DOM API',
        defaultValue: { summary: false },
      },
    },
    noValidate: {
      name: 'noValidate',
      type: { name: 'boolean', required: false },
      table: {
        category: 'Component API',
        defaultValue: { summary: false },
      },
    },
    disabled: {
      name: 'disabled',
      type: { name: 'boolean', required: false },
      table: {
        category: 'DOM API',
        defaultValue: { summary: false },
      },
    },
    required: {
      name: 'required',
      type: { name: 'boolean', required: false },
      table: {
        category: 'DOM API',
        defaultValue: { summary: false },
      },
    },
    invalid: {
      name: 'invalid',
      type: { name: 'boolean', required: false },
      table: {
        category: 'Component API',
        defaultValue: { summary: false },
      },
    },
    value: {
      name: 'value',
      type: { name: 'string', required: false },
      table: {
        category: 'DOM API',
        defaultValue: { summary: false },
      },
    },
  },
};

export default checkboxMeta;

export type Story = StoryObj<UtrechtCheckboxAttr & { value?: string }>;

const Template: Story = {
  render: (args) => ({
    props: args,
    template: `<input 
                  type="checkbox" 
                  [value]="value" 
                  [noValidate]="noValidate" 
                  [invalid]="invalid" 
                  [checked]="checked" 
                  [disabled]="disabled" 
                  [required]="required" 
                  utrecht-checkbox 
                  />`,
    component: UtrechtCheckboxAttr,
  }),
};

export const Default: Story = {
  ...Template,
  args: {},
};

export const Checked: Story = {
  ...Template,
  args: {
    checked: true,
  },
};

export const CheckedAndDisabled: Story = {
  ...Template,
  args: {
    checked: true,
    disabled: true,
  },
};

export const Invalid: Story = {
  ...Template,
  args: {
    invalid: true,
  },
};

export const NoValidate: Story = {
  ...Template,
  args: {
    noValidate: true,
    required: true,
  },
};

export const Required: Story = {
  ...Template,
  args: {
    required: true,
  },
};

export const Disabled: Story = {
  ...Template,
  args: {
    disabled: true,
  },
};

export const Hover: Story = {
  ...Template,
  args: {},
  parameters: {
    pseudo: { hover: true },
  },
};

export const Focus: Story = {
  ...Template,
  args: {},
  parameters: {
    pseudo: { focus: true, focusVisible: true },
  },
};

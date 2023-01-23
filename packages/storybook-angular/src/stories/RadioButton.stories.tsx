import { Meta, StoryObj } from '@storybook/angular';
import { UtrechtRadioButtonAttr } from '@utrecht/component-library-angular';

const radioMeta: Meta<UtrechtRadioButtonAttr & { checked?: boolean; value?: string; required?: boolean }> = {
  title: 'Angular Component/Radio Button',
  id: 'angular-radio-button',
  component: UtrechtRadioButtonAttr,
  argTypes: {
    checked: {
      name: 'checked',
      type: { name: 'boolean', required: false },
      table: {
        category: 'DOM API',
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
    value: {
      name: 'value',
      type: { name: 'string', required: false },
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
  },
};

export default radioMeta;

type Story = StoryObj<UtrechtRadioButtonAttr & { checked?: boolean; value?: string; required: boolean }>;

const Template: Story = {
  render: (args) => ({
    props: args,
    template: `<input type="radio" [invalid]="invalid" [value]="value" [checked]="checked" [disabled]="disabled" utrecht-radio-button />`,
    component: UtrechtRadioButtonAttr,
  }),
};

export const Default: Story = {
  ...Template,
  args: {},
};

export const Hover: Story = {
  ...Template,
  parameters: {
    pseudo: { hover: true },
  },
  args: {},
};

export const Focus: Story = {
  ...Template,
  parameters: {
    pseudo: { focus: true },
  },
  args: {},
};

export const FocusVisible: Story = {
  ...Template,
  parameters: {
    pseudo: { focusVisible: true },
  },
  args: {},
};

export const Checked: Story = {
  ...Template,
  args: {
    checked: true,
    value: 'checked',
  },
};

export const CheckedAndDisabled: Story = {
  ...Template,
  args: {
    checked: true,
    disabled: true,
  },
};

export const Disabled: Story = {
  ...Template,
  args: {
    disabled: true,
  },
};

export const Invalid: Story = {
  ...Template,
  args: {
    invalid: true,
  },
};

export const Required: Story = {
  ...Template,
  args: {
    required: true,
  },
};

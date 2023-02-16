import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import {
  UtrechtCheckboxAttr,
  UtrechtFormFieldDescription,
  UtrechtFormLabelAttr,
} from '@utrecht/component-library-angular';

export default {
  title: 'Angular Component/Form field description',
  id: 'angular-component-form-field-description',
  argTypes: {
    invalid: {
      type: { name: 'boolean', required: false },
      description: 'indicates if the related form field is invalid',
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
        category: 'Component API',
      },
    },
    valid: {
      type: { name: 'boolean', required: false },
      description: 'indicates if the related form field is valid',
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
        category: 'Component API',
      },
    },
    warning: {
      type: { name: 'boolean', required: false },
      description: 'indicates if the description contains a warning',
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
        category: 'Component API',
      },
    },
    textContent: {
      type: { name: 'string', required: true },
      description: 'Description',
      defaultValue: '',
      table: {
        defaultValue: { summary: '' },
        category: 'Story',
      },
    },
  },
  decorators: [
    moduleMetadata({
      declarations: [UtrechtFormFieldDescription, UtrechtCheckboxAttr, UtrechtFormLabelAttr],
      imports: [CommonModule],
    }),
  ],
  component: UtrechtFormFieldDescription,
} as Meta;

interface StoryArgs {
  textContent: string;
}

type Story = StoryObj<UtrechtFormFieldDescription & StoryArgs>;

const Template: Story = {
  render: (args) => ({
    props: args,
    template: `
  <utrecht-form-field-description [invalid]="invalid" [valid]="valid" [warning]="warning">
    {{textContent}}
  </utrecht-form-field-description>
`,
    component: UtrechtFormFieldDescription,
  }),
};
export const Default: Story = {
  ...Template,
  args: {
    textContent: 'Your password must contain at least 16 characters.',
  },
  parameters: {
    status: 'ALPHA',
  },
};

export const Invalid: Story = {
  ...Template,
  args: {
    invalid: true,
    textContent: 'This is a required field and must not be left empty.',
  },
  parameters: {
    status: 'ALPHA',
  },
};

export const Valid: Story = {
  ...Template,
  args: {
    valid: true,
    textContent: 'This is a very safe password!',
  },
  parameters: {
    status: 'WORK IN PROGRESS',
  },
};

export const Warning: Story = {
  ...Template,
  args: {
    warning: true,
    textContent:
      'When you proceed without providing a mobile number, you will be locked out of your account when you forget the password.',
  },
  parameters: {
    status: 'WORK IN PROGRESS',
  },
};

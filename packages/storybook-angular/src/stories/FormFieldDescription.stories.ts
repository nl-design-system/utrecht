import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import {
  UtrechtCheckboxAttr,
  UtrechtFormFieldDescription,
  UtrechtFormLabelAttr,
} from '@utrecht/component-library-angular';

export default {
  title: 'Angular Component/Form Field Description',
  id: 'angular-component-form-field-description',
  argTypes: {
    invalid: {
      type: { name: 'boolean', required: false },
      description: 'indicates if the related form field is invalid',
      table: {
        defaultValue: { summary: false },
        category: 'DOM API',
      },
    },
    valid: {
      type: { name: 'boolean', required: false },
      description: 'indicates if the related form field is valid',
      table: {
        defaultValue: { summary: false },
        category: 'Component API',
      },
    },
    warning: {
      type: { name: 'boolean', required: false },
      description: 'indicates if the description contains a warning',
      table: {
        defaultValue: { summary: false },
        category: 'Component API',
      },
    },
    class: {
      type: { name: 'string', required: false },
      description: 'a modifier CSS class',
      table: {
        defaultValue: { summary: false },
        category: 'DOM API',
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
type Story = StoryObj<UtrechtFormFieldDescription>;

const Template: Story = {
  render: (args) => ({
    props: args,
    template: `
  <utrecht-form-field-description [invalid]="invalid" [valid]="valid" [warning]="warning" [class]="class">
    <strong>The form field below contains requires you to fill in your last name.</strong>
  </utrecht-form-field-description>
`,
    component: UtrechtFormFieldDescription,
  }),
};
export const Default: Story = {
  ...Template,
  args: {},
};

import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { UtrechtCheckboxAttr, UtrechtFormField, UtrechtFormLabelAttr } from '@utrecht/component-library-angular';

const meta: Meta<UtrechtFormField> = {
  title: 'Angular Component/Form Field',
  id: 'angular-component-form-field',
  argTypes: {
    class: {
      type: { name: 'string', required: false },
      description: 'a modifier CSS class',
      table: {
        category: 'DOM API',
      },
    },
    invalid: {
      type: { name: 'boolean', required: false },
      description: 'a modifier CSS class',
      table: {
        category: 'Component API',
      },
    },
    type: {
      name: 'type',
      control: { type: 'select' },
      options: ['checkbox', 'radio', 'text'],
      table: {
        category: 'Component API',
      },
    },
  },
  decorators: [
    moduleMetadata({
      declarations: [UtrechtFormField, UtrechtCheckboxAttr, UtrechtFormLabelAttr],
      imports: [CommonModule],
    }),
  ],
  component: UtrechtFormField,
};
export default meta;
type Story = StoryObj<UtrechtFormField>;

const Template: Story = {
  render: (args) => ({
    props: args,
    template: `
  <utrecht-form-field [type]="type" [invalid]="invalid" [class]="class">
    <input type="checkbox" id="1" utrecht-checkbox />
    <label utrecht-form-label for="1">Form Field</label>
  </utrecht-form-field>`,
    component: UtrechtFormField,
  }),
};
export const Default: Story = {
  ...Template,
  args: {
    type: 'checkbox',
  },
};

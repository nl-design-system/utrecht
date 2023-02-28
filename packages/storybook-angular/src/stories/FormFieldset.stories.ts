import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { UtrechtFieldsetAttr, UtrechtFormLabelAttr } from '@utrecht/component-library-angular';

export default {
  title: 'Angular Component/Form Fieldset',
  id: 'angular-component-form-fieldset',
  argTypes: {
    invalid: {
      type: { name: 'boolean', required: false },
      description: 'indicates if the fieldset is invalid',
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
        category: 'Component API',
      },
    },
    disabled: {
      type: { name: 'boolean', required: false },
      description: 'indicates if the fieldset is disabled',
      table: {
        defaultValue: { summary: false },
        category: 'Component API',
      },
    },
  },
  decorators: [
    moduleMetadata({
      declarations: [UtrechtFieldsetAttr, UtrechtFormLabelAttr],
      imports: [CommonModule],
    }),
  ],
  component: UtrechtFieldsetAttr,
} as Meta;

interface StoryArgs {
  textContent: string;
}
type Story = StoryObj<UtrechtFieldsetAttr & StoryArgs>;

const Template: Story = {
  render: (args) => ({
    props: args,
    template: `
  <fieldset utrecht-fieldset>
    {{textContent}}
  </fieldset>`,
    component: UtrechtFieldsetAttr,
  }),
};

const Template_Invalid: Story = {
  render: (args) => ({
    props: args,
    template: `
  <fieldset utrecht-fieldset invalid="true">
    {{textContent}}
  </fieldset>`,
    component: UtrechtFieldsetAttr,
  }),
};

const Template_Disabled: Story = {
  render: (args) => ({
    props: args,
    template: `
  <fieldset utrecht-fieldset disabled="true">
    {{textContent}}
  </fieldset>`,
    component: UtrechtFieldsetAttr,
  }),
};

export const Default: Story = {
  ...Template,
  args: {
    textContent: 'This is an utrecht fieldset.',
  },
};
export const Invalid: Story = {
  ...Template_Invalid,
  args: {
    textContent: 'The contents of this utrecht fieldset are invalid. Please provide valid input.',
  },
};
export const Disabled: Story = {
  ...Template_Disabled,
  args: {
    textContent: 'This utrecht fieldset is disabled. You cannot edit its contents.',
  },
};

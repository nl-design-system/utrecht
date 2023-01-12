import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata } from '@storybook/angular';
import {
  UtrechtCheckboxAttr,
  UtrechtFieldsetAttr,
  UtrechtFieldsetLegendAttr,
  UtrechtFormField,
  UtrechtFormLabelAttr,
} from '@utrecht/component-library-angular';
import checkboxMeta, { Story } from './Checkbox.stories';

export default {
  title: 'Angular Component/Checkbox/With Fieldset And Legend',
  id: 'angular-checkbox--fieldset-legend',
  component: UtrechtCheckboxAttr,
  argTypes: checkboxMeta.argTypes,
  decorators: [
    moduleMetadata({
      declarations: [
        UtrechtCheckboxAttr,
        UtrechtFieldsetAttr,
        UtrechtFieldsetLegendAttr,
        UtrechtFormField,
        UtrechtFormLabelAttr,
      ],
      imports: [CommonModule],
    }),
  ],
} as Meta<UtrechtCheckboxAttr>;

const Template: Story = {
  render: (args) => ({
    props: args,
    template: `
    <form>
      <div utrecht-fieldset>
        <div utrecht-fieldset-legend>Filter op:</div>
        <utrecht-form-field>
         
          <label for="1" type="checkbox" utrecht-form-label>
          <input [checked]="checked" [disabled]="disabled" [value]="value" id="1" name="gratis-trouwen" type="checkbox" utrecht-checkbox />
          Gratis trouwen
          </label>
        </utrecht-form-field>
        <utrecht-form-field>
          <label for="2" type="checkbox" utrecht-form-label>
          <input [checked]="checked" [disabled]="disabled" [value]="value" name="flits-balie-huwelijk" id="2" type="checkbox" utrecht-checkbox />
          Flits/balie-huwelijk</label>
        </utrecht-form-field>
        <utrecht-form-field>
          <label for="3" type="checkbox" utrecht-form-label>
          <input [checked]="checked" [disabled]="disabled" [value]="value" name="eenvoudig-trouwen" id="3" type="checkbox" utrecht-checkbox />
          Eenvoudig trouwen</label>
        </utrecht-form-field>
        <utrecht-form-field>
          <label for="4" type="checkbox" utrecht-form-label>
          <input [checked]="checked" [disabled]="disabled" [value]="value" id="4" name="uitgebreid-trouwen" type="checkbox" utrecht-checkbox />
          Uitgebreid trouwen</label>
        </utrecht-form-field>
      </div>
    </form>
    `,
    component: UtrechtCheckboxAttr,
  }),
};
export const WithFieldsetAndLegend: Story = {
  ...Template,
  args: {},
};

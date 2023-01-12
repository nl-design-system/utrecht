import { Meta } from '@storybook/angular';
import { UtrechtCheckboxAttr } from '@utrecht/component-library-angular';
import checkboxMeta, { Story } from './Checkbox.stories';

export default {
  title: 'Angular Component/Checkbox/With Label',
  id: 'angular-checkbox--label',
  component: UtrechtCheckboxAttr,
  argTypes: checkboxMeta.argTypes,
} as Meta<UtrechtCheckboxAttr>;

const Template: Story = {
  render: (args) => ({
    props: args,
    template: `  
  <utrecht-form-field>
  <label for="1" type="checkbox"  utrecht-form-label>
    <input id="1" type="checkbox" [checked]="checked" [disabled]="disabled" [value]="value" utrecht-checkbox />
    With label</label>
  </utrecht-form-field>`,
    component: UtrechtCheckboxAttr,
  }),
};
export const WithLabel: Story = {
  ...Template,
  args: {},
};

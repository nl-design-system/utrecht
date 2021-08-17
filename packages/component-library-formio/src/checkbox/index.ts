import { Formio } from 'react-formio';

export default class FormioCheckbox extends Formio.Components.components.checkbox {
  get className() {
    return 'utrecht-form-field-textbox utrecht-form-field-textbox--distanced';
  }
  get inputInfo() {
    const info = super.inputInfo;
    info.attr.class = 'utrecht-checkbox';
    return info;
  }
}

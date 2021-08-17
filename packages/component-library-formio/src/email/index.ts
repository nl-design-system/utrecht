import { Formio } from 'react-formio';

export default class FormioEmail extends Formio.Components.components.email {
  get className() {
    return 'utrecht-form-field-textbox utrecht-form-field-textbox--distanced';
  }
  get inputInfo() {
    const info = super.inputInfo;
    info.attr.class = 'utrecht-textbox';
    return info;
  }
}

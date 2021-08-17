import { Formio } from 'react-formio';

export default class FormioDateTime extends Formio.Components.components.time {
  get className() {
    return 'utrecht-form-field-textbox utrecht-form-field-textbox--distanced';
  }
  get inputInfo() {
    const info = super.inputInfo;
    info.attr.class = 'utrecht-textbox';
    return info;
  }
}

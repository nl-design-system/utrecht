import { Formio } from 'react-formio';

export default class FormioTextarea extends Formio.Components.components.textarea {
  get className() {
    return 'utrecht-form-field-textbox utrecht-form-field-textbox--distanced';
  }
  get inputInfo() {
    const info = super.inputInfo;
    info.attr.class = 'utrecht-textarea';
    return info;
  }
}

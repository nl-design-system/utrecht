import { Formio } from 'react-formio';

export default class FormioRadioButton extends Formio.Components.components.radio {
  get className() {
    return 'utrecht-form-field-textbox utrecht-form-field-textbox--distanced';
  }
  get inputInfo() {
    const info = super.inputInfo;
    info.attr.class = 'utrecht-radio-button';
    return info;
  }
}

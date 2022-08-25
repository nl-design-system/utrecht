import { Formio } from 'react-formio';
export default class FormioCheckbox extends Formio.Components.components.checkbox {
    get className(): string;
    get inputInfo(): any;
}

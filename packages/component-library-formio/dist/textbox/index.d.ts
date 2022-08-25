import { Formio } from 'react-formio';
export default class FormioTextbox extends Formio.Components.components.textfield {
    get className(): string;
    get inputInfo(): any;
}

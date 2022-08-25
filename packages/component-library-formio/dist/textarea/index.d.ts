import { Formio } from 'react-formio';
export default class FormioTextarea extends Formio.Components.components.textarea {
    get className(): string;
    get inputInfo(): any;
}

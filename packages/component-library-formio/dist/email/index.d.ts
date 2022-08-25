import { Formio } from 'react-formio';
export default class FormioEmail extends Formio.Components.components.email {
    get className(): string;
    get inputInfo(): any;
}

import { Formio } from 'react-formio';
export default class FormioPhone extends Formio.Components.components.phoneNumber {
    get className(): string;
    get inputInfo(): any;
}

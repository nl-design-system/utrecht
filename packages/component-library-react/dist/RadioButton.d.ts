import { InputHTMLAttributes } from 'react';
export interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'readOnly'> {
    invalid?: boolean;
}
export declare const RadioButton: import("react").ForwardRefExoticComponent<RadioButtonProps & import("react").RefAttributes<HTMLInputElement>>;

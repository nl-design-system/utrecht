import { InputHTMLAttributes } from 'react';
export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'readOnly'> {
    invalid?: boolean;
}
export declare const Checkbox: import("react").ForwardRefExoticComponent<CheckboxProps & import("react").RefAttributes<HTMLInputElement>>;

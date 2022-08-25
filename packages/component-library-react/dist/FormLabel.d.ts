import { LabelHTMLAttributes } from 'react';
export interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    htmlFor: string;
    type?: 'checkbox' | 'radio';
    disabled?: boolean;
    checked?: boolean;
}
export declare const FormLabel: import("react").ForwardRefExoticComponent<FormLabelProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLLabelElement>>;

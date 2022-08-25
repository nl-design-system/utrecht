import { HTMLAttributes } from 'react';
export interface FormFieldDescriptionProps extends HTMLAttributes<HTMLDivElement> {
    invalid?: boolean;
    valid?: boolean;
    warning?: boolean;
}
export declare const FormFieldDescription: import("react").ForwardRefExoticComponent<FormFieldDescriptionProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;

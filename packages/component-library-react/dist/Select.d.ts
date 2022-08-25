import { OptionHTMLAttributes, SelectHTMLAttributes } from 'react';
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    invalid?: boolean;
    /**
     * `noscript`: Don't let it affect CSS :invalid
     */
    noscript?: boolean;
}
export declare const Select: import("react").ForwardRefExoticComponent<SelectProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLSelectElement>>;
export interface SelectOptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
    disabled?: boolean;
    invalid?: boolean;
    value?: string;
}
export declare const SelectOption: import("react").ForwardRefExoticComponent<SelectOptionProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLOptionElement>>;

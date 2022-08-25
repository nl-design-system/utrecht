import { InputHTMLAttributes } from 'react';
export declare type TextboxTypes = 'email' | 'number' | 'password' | 'tel' | 'text' | 'url';
export interface TextboxProps extends InputHTMLAttributes<HTMLInputElement> {
    invalid?: boolean;
    type?: TextboxTypes;
}
export declare const Textbox: import("react").ForwardRefExoticComponent<TextboxProps & import("react").RefAttributes<HTMLInputElement>>;

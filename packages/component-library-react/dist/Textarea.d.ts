import { TextareaHTMLAttributes } from 'react';
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    invalid?: boolean;
}
export declare const Textarea: import("react").ForwardRefExoticComponent<TextareaProps & import("react").RefAttributes<HTMLTextAreaElement>>;

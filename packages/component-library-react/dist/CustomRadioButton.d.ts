/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */
import { InputHTMLAttributes } from 'react';
export declare type CustomRadioButtonProps = InputHTMLAttributes<HTMLInputElement> & {
    invalid?: boolean;
};
export declare const CustomRadioButton: import("react").ForwardRefExoticComponent<InputHTMLAttributes<HTMLInputElement> & {
    invalid?: boolean | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLInputElement>>;

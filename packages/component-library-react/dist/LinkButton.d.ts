/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */
import { ButtonHTMLAttributes } from 'react';
export interface LinkButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    inline?: boolean;
}
export declare const LinkButton: import("react").ForwardRefExoticComponent<LinkButtonProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLButtonElement>>;

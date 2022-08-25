/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */
import { AnchorHTMLAttributes } from 'react';
export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    external?: boolean;
}
export declare const Link: import("react").ForwardRefExoticComponent<LinkProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLAnchorElement>>;

/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */
import { AnchorHTMLAttributes } from 'react';
interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    external?: boolean;
}
export declare const ButtonLink: import("react").ForwardRefExoticComponent<ButtonLinkProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLAnchorElement>>;
export {};

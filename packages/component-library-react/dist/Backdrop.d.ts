/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */
import { HTMLAttributes } from 'react';
export declare type BackdropProps = HTMLAttributes<HTMLDivElement>;
export declare const Backdrop: import("react").ForwardRefExoticComponent<BackdropProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;

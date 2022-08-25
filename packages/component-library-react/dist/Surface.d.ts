/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */
import { HTMLAttributes } from 'react';
export declare type SurfaceProps = HTMLAttributes<HTMLDivElement>;
export declare const Surface: import("react").ForwardRefExoticComponent<SurfaceProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;

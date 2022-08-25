/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */
import { HTMLAttributes } from 'react';
export declare type PageProps = HTMLAttributes<HTMLDivElement>;
export declare const Page: import("react").ForwardRefExoticComponent<PageProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;

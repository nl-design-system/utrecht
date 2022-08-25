/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */
import { HTMLAttributes } from 'react';
export declare type ArticleProps = HTMLAttributes<HTMLElement>;
export declare const Article: import("react").ForwardRefExoticComponent<ArticleProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;

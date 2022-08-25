/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */
import { HTMLAttributes } from 'react';
export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
    lead?: boolean;
}
export declare const Paragraph: import("react").ForwardRefExoticComponent<ParagraphProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLParagraphElement>>;

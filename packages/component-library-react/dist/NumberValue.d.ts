/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */
import { DataHTMLAttributes } from 'react';
export interface NumberValueProps extends DataHTMLAttributes<HTMLDataElement> {
    value?: number | string;
}
export declare const NumberValue: import("react").ForwardRefExoticComponent<NumberValueProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDataElement>>;

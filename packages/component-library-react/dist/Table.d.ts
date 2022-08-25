/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Robbert Broersma
 */
import { TableHTMLAttributes } from 'react';
export declare type TableProps = TableHTMLAttributes<HTMLTableElement>;
export declare const Table: import("react").ForwardRefExoticComponent<TableProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLTableElement>>;

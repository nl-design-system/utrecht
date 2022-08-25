/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Robbert Broersma
 */
import { TdHTMLAttributes } from 'react';
export declare type TableCellProps = TdHTMLAttributes<HTMLTableCellElement>;
export declare const TableCell: import("react").ForwardRefExoticComponent<TableCellProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLTableCellElement>>;

import { HTMLAttributes } from 'react';
export interface DataListProps extends HTMLAttributes<HTMLElement> {
    appearance?: string;
}
export declare const DataList: import("react").ForwardRefExoticComponent<DataListProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDListElement>>;
export declare type DataListItemProps = HTMLAttributes<HTMLDivElement>;
export declare const DataListItem: import("react").ForwardRefExoticComponent<DataListItemProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;
export declare type DataListKeyProps = HTMLAttributes<HTMLElement>;
export declare const DataListKey: import("react").ForwardRefExoticComponent<DataListKeyProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
export interface DataListValueProps extends HTMLAttributes<HTMLElement> {
    value?: number | string;
    emptyDescription?: string;
    multiline?: boolean;
    notranslate?: boolean;
}
export declare const DataListValue: import("react").ForwardRefExoticComponent<DataListValueProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
export declare type DataListActionsProps = HTMLAttributes<HTMLElement>;
export declare const DataListActions: import("react").ForwardRefExoticComponent<DataListActionsProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;

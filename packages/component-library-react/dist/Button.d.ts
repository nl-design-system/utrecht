import { ButtonHTMLAttributes } from 'react';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    appearance?: string;
    busy?: boolean;
}
export declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLButtonElement>>;
export declare const PrimaryActionButton: {
    ({ ...args }: {
        [x: string]: any;
    }): JSX.Element;
    displayName: string;
};
export declare const SecondaryActionButton: {
    ({ ...args }: {
        [x: string]: any;
    }): JSX.Element;
    displayName: string;
};
export declare const SubtleButton: {
    ({ ...args }: {
        [x: string]: any;
    }): JSX.Element;
    displayName: string;
};

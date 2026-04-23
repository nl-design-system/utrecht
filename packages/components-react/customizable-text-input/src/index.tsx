import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes } from 'react';

export interface CustomizableTextInputProps extends HTMLAttributes<HTMLSpanElement> {}

export const CustomizableTextInput = forwardRef(
  ({ className, ...restProps }: CustomizableTextInputProps, ref: ForwardedRef<HTMLSpanElement>) => (
    <span {...restProps} className={clsx('utrecht-customizable-text-input', className)} ref={ref} />
  ),
);

CustomizableTextInput.displayName = 'CustomizableTextInput';

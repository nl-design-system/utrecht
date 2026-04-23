import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, ReactNode } from 'react';

export interface CustomizableTextInputProps extends HTMLAttributes<HTMLSpanElement> {
  start?: ReactNode;
  end?: ReactNode;
  inputId?: string;
}

export const CustomizableTextInput = forwardRef(
  (
    { inputId, start, end, className, children, ...restProps }: CustomizableTextInputProps,
    ref: ForwardedRef<HTMLSpanElement>,
  ) => (
    <span {...restProps} className={clsx('utrecht-customizable-text-input', className)} ref={ref}>
      {start ? (
        <SlotRenderer inputId={inputId} className="utrecht-customizable-text-input__slot--start">
          {start}
        </SlotRenderer>
      ) : null}
      {children}
      {end ? (
        <SlotRenderer inputId={inputId} className="utrecht-customizable-text-input__slot--end">
          {end}
        </SlotRenderer>
      ) : null}
    </span>
  ),
);

CustomizableTextInput.displayName = 'CustomizableTextInput';

interface SlotRendererProps extends HTMLAttributes<HTMLElement> {
  inputId?: string;
}

const SlotRenderer = ({ inputId, className, ...restProps }: SlotRendererProps) => {
  return inputId ? (
    <label {...restProps} className={clsx('utrecht-customizable-text-input__slot', className)} />
  ) : (
    <span {...restProps} className={clsx('utrecht-customizable-text-input__slot', className)} />
  );
};

SlotRenderer.displayName = 'SlotRenderer';

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, ReactNode } from 'react';

export interface CustomizableTextInputProps extends HTMLAttributes<HTMLSpanElement> {
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  start?: ReactNode;
  end?: ReactNode;
  inputId?: string;
}

export const CustomizableTextInput = forwardRef(
  (
    { inputId, start, end, className, children, ...restProps }: CustomizableTextInputProps,
    ref: ForwardedRef<HTMLSpanElement>,
  ) => {
    return (
      <span {...restProps} className={clsx('utrecht-customizable-text-input', className)} ref={ref}>
        {start ? (
          <SlotRenderer inputId={inputId} position="start" hideFromAT>
            {start}
          </SlotRenderer>
        ) : null}
        {end ? (
          <SlotRenderer inputId={inputId} position="end" hideFromAT>
            {end}
          </SlotRenderer>
        ) : null}
        {children}
      </span>
    );
  },
);

CustomizableTextInput.displayName = 'CustomizableTextInput';

interface SlotRendererProps extends HTMLAttributes<HTMLElement> {
  inputId?: string;
  hideFromAT?: boolean;
  position?: 'start' | 'end';
}

const SlotRenderer = ({ inputId, hideFromAT, className, position, ...restProps }: SlotRendererProps) => {
  const classNames = clsx(
    'utrecht-customizable-text-input__slot',
    {
      'utrecht-customizable-text-input__slot--start': position === 'start',
      'utrecht-customizable-text-input__slot--end': position === 'end',
    },
    className,
  );

  return inputId ? (
    <label {...restProps} htmlFor={inputId} className={clsx(classNames)} aria-hidden={hideFromAT ? true : undefined} />
  ) : (
    <span {...restProps} className={clsx(classNames)} />
  );
};

SlotRenderer.displayName = 'SlotRenderer';

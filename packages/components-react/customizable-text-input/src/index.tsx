import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, ReactNode } from 'react';

export interface CustomizableTextInputProps extends HTMLAttributes<HTMLSpanElement> {
  labelStart?: ReactNode;
  labelEnd?: ReactNode;
  start?: ReactNode;
  end?: ReactNode;
  actionStart?: ReactNode;
  actionEnd?: ReactNode;
  inputId?: string;
}

export const CustomizableTextInput = forwardRef(
  (
    {
      inputId,
      labelStart,
      labelEnd,
      start,
      end,
      actionStart,
      actionEnd,
      className,
      children,
      ...restProps
    }: CustomizableTextInputProps,
    ref: ForwardedRef<HTMLSpanElement>,
  ) => {
    return (
      <span {...restProps} className={clsx('utrecht-customizable-text-input', className)} ref={ref}>
        <span className="utrecht-customizable-text-input__inner">
          {labelStart ? (
            <SlotRenderer inputId={inputId} position="start">
              {labelStart}
            </SlotRenderer>
          ) : null}
          {labelEnd ? (
            <SlotRenderer inputId={inputId} position="end">
              {labelEnd}
            </SlotRenderer>
          ) : null}

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

          {actionStart ? (
            <SlotRenderer position="start" className="utrecht-customizable-text-input__action">
              {actionStart}
            </SlotRenderer>
          ) : null}

          <span className="utrecht-customizable-text-input__wrap-input">{children}</span>

          {actionEnd ? (
            <SlotRenderer position="end" className="utrecht-customizable-text-input__action">
              {actionEnd}
            </SlotRenderer>
          ) : null}
        </span>
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
    <label
      {...restProps}
      htmlFor={inputId}
      className={clsx('utrecht-customizable-text-input__slot--label', classNames)}
      aria-hidden={hideFromAT ? true : undefined}
    />
  ) : (
    <span {...restProps} className={clsx(classNames)} />
  );
};

SlotRenderer.displayName = 'SlotRenderer';

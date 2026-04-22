import clsx from 'clsx';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';

export interface TextboxAddonOwnProps {
  start?: ReactNode;
  end?: ReactNode;
  inputId?: string;
}

export interface TextboxAddonProps extends HTMLAttributes<HTMLSpanElement>, TextboxAddonOwnProps {}

export const TextboxAddon = forwardRef<HTMLSpanElement, TextboxAddonProps>(
  ({ children, className, start, end, ...restProps }: TextboxAddonProps, ref) => {
    return (
      <span {...restProps} className={clsx('utrecht-textbox-addon', className)} ref={ref}>
        {start ? <SlotWrapper className="utrecht-textbox-addon__slot--start">{start}</SlotWrapper> : null}
        {children}
        {end ? <SlotWrapper className="utrecht-textbox-addon__slot--end">{end}</SlotWrapper> : null}
      </span>
    );
  },
);

TextboxAddon.displayName = 'TextboxAddon';

export interface SlotWrapperOwnProps {
  hiddenFromAT?: boolean;
  inputId?: string;
}

export interface SlotWrapperProps extends HTMLAttributes<HTMLElement>, SlotWrapperOwnProps {}

const SlotWrapper = ({ children, className, inputId, ...restProps }: SlotWrapperProps) => {
  return inputId ? (
    <label {...restProps} className={clsx('utrecht-textbox-addon__slot', className)}>
      {children}
    </label>
  ) : (
    <span {...restProps} className={clsx('utrecht-textbox-addon__slot', className)}>
      {children}
    </span>
  );
};

SlotWrapper.displayName = 'SlotWrapper';

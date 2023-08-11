import { clsx } from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { Button, ButtonProps } from '../Button';

export interface CalendarButtonProps extends ButtonProps {}

export const CalendarButton = forwardRef(
  ({ children, className, ...props }: CalendarButtonProps, ref: ForwardedRef<HTMLButtonElement>) => (
    <Button appearance="subtle-button" {...props} ref={ref} className={clsx('utrecht-calendar__button', className)}>
      {children}
    </Button>
  ),
);

CalendarButton.displayName = 'CalendarButton';

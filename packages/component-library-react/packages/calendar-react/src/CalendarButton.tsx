import { Button, ButtonProps } from '@utrecht/button-react';
import { clsx } from 'clsx';
import { PropsWithChildren } from 'react';

export interface CalendarButtonProps extends ButtonProps {}

export const CalendarButton = ({ children, className, ...props }: PropsWithChildren<CalendarButtonProps>) => (
  <Button appearance="subtle-button" {...props} className={clsx('utrecht-calendar__button', className)}>
    {children}
  </Button>
);

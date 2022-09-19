import { clsx } from 'clsx';
import React from 'react';
import { Button, ButtonProps } from '../Button';

export interface CalendarButtonProps extends ButtonProps {}

export const CalendarButton: React.FC<CalendarButtonProps> = ({ children, className, ...props }) => (
  <Button appearance="subtle-button" {...props} className={clsx('utrecht-calendar__button', className)}>
    {children}
  </Button>
);

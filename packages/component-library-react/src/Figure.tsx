import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type FigureProps = HTMLAttributes<HTMLElement>;

export const Figure = forwardRef(
  ({ className, children, ...restProps }: PropsWithChildren<FigureProps>, ref: ForwardedRef<HTMLElement>) => (
    <figure {...restProps} ref={ref} className={clsx('utrecht-figure', className)}>
      {children}
    </figure>
  ),
);

Figure.displayName = 'Figure';

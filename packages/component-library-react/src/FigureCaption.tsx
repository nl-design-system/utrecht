import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type FigureCaptionProps = HTMLAttributes<HTMLElement>;

export const FigureCaption = forwardRef(
  ({ className, children, ...restProps }: PropsWithChildren<FigureCaptionProps>, ref: ForwardedRef<HTMLElement>) => (
    <figcaption {...restProps} ref={ref} className={clsx('utrecht-figure__caption', className)}>
      {children}
    </figcaption>
  ),
);

FigureCaption.displayName = 'FigureCaption';

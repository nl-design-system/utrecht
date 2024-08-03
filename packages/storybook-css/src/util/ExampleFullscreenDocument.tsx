import { clsx } from 'clsx';
import React, { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import './ExampleFullscreenDocument.scss';

export interface ExampleFullscreenDocumentProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}

export const ExampleFullscreenDocument = forwardRef(
  ({ children, className, ...restProps }: ExampleFullscreenDocumentProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div className={clsx('example-fullscreen-document', className)} {...restProps} ref={ref}>
      {children}
    </div>
  ),
);

ExampleFullscreenDocument.displayName = 'ExampleFullscreenDocument';

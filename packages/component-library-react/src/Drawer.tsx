/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import {
  DialogHTMLAttributes,
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';

export type DrawerAlignType = 'block-end' | 'block-start' | 'inline-end' | 'inline-start';

export interface DrawerProps extends DialogHTMLAttributes<HTMLDialogElement> {
  align?: string | DrawerAlignType;
  modal?: boolean;
}

export const Drawer = forwardRef(
  (
    { align, children, className, modal, ...restProps }: PropsWithChildren<DrawerProps>,
    ref: ForwardedRef<HTMLDialogElement>,
  ) => {
    let dialogRef = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => dialogRef.current as HTMLDialogElement);

    useEffect(() => {
      if (modal && restProps.open && dialogRef?.current) {
        // Dialog must not be `open` initially, prevent the following error:
        // "Cannot call showModal() on an open non-modal dialog"
        dialogRef.current.close();
        dialogRef.current.showModal();
      }
    });

    return (
      <dialog
        {...restProps}
        ref={dialogRef}
        className={clsx(
          'utrecht-drawer',
          {
            'utrecht-drawer--block-end': align === 'block-end',
            'utrecht-drawer--block-start': align === 'block-start',
            'utrecht-drawer--inline-end': align === 'inline-end',
            'utrecht-drawer--inline-start': align === 'inline-start' || !align,
          },
          className,
        )}
      >
        {children}
      </dialog>
    );
  },
);

Drawer.displayName = 'Drawer';

/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type NotePurpose = 'info' | 'warning' | 'error' | 'success';

export interface NoteProps extends HTMLAttributes<HTMLDivElement> {
  aside?: boolean;
  purpose?: string | NotePurpose;
}

export const Note = forwardRef(
  (
    { aside, children, className, purpose, ...restProps }: PropsWithChildren<NoteProps>,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const props = {
      ...restProps,
      ref,
      className: clsx(
        'utrecht-note',
        {
          [`utrecht-note--${purpose}`]: purpose,
        },
        className,
      ),
    };
    return aside ? (
      <aside {...props}>{children}</aside>
    ) : (
      <section role="note" {...props}>
        {children}
      </section>
    );
  },
);

Note.displayName = 'Note';

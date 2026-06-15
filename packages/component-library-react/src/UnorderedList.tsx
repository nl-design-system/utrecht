/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { createContext, ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren, useContext } from 'react';

export type UnorderedListProps = HTMLAttributes<HTMLUListElement>;

/** The deepest nesting level for which the design system defines `--level-*` styles */
const maxUnorderedListLevel = 8;

export const UnorderedListLevelContext = createContext(1);

export const UnorderedList = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<UnorderedListProps>,
    ref: ForwardedRef<HTMLUListElement>,
  ) => {
    const level = useContext(UnorderedListLevelContext);

    return (
      <ul
        role="list"
        {...restProps}
        ref={ref}
        className={clsx(
          'utrecht-unordered-list',
          `utrecht-unordered-list--level-${Math.min(level, maxUnorderedListLevel)}`,
          className,
        )}
      >
        <UnorderedListLevelContext.Provider value={level + 1}>{children}</UnorderedListLevelContext.Provider>
      </ul>
    );
  },
);

UnorderedList.displayName = 'UnorderedList';

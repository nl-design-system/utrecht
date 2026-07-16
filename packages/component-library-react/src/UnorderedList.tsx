/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { createContext, ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren, useContext } from 'react';

export interface UnorderedListProps extends HTMLAttributes<HTMLUListElement> {
  /**
   * Overrides the automatically detected nesting level. Use this when a list is nested inside
   * markup that isn't rendered by this component (e.g. raw HTML or another framework), since the
   * automatic detection can only count `UnorderedList` ancestors in the React tree.
   */
  level?: number;
}

/** The deepest nesting level for which the design system defines `--level-*` styles */
const maxUnorderedListLevel = 8;

export const UnorderedListLevelContext = createContext(1);

export const UnorderedList = forwardRef(
  (
    { children, className, level: levelProp, ...restProps }: PropsWithChildren<UnorderedListProps>,
    ref: ForwardedRef<HTMLUListElement>,
  ) => {
    const contextLevel = useContext(UnorderedListLevelContext);
    const level = levelProp ?? contextLevel;

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

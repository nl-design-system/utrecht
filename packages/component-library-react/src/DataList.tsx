import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export interface DataListProps extends HTMLAttributes<HTMLElement> {
  appearance?: string;
}

export const DataList = forwardRef(
  (
    { appearance, children, className, ...restProps }: PropsWithChildren<DataListProps>,
    ref: ForwardedRef<HTMLDListElement>,
  ) => {
    return (
      <dl
        {...restProps}
        className={clsx(
          'utrecht-data-list',
          'utrecht-data-list--html-dl',
          appearance === 'rows' && 'utrecht-data-list--rows',
          className,
        )}
        ref={ref}
      >
        {children}
      </dl>
    );
  },
);

DataList.displayName = 'DataList';

export type DataListItemProps = HTMLAttributes<HTMLDivElement>;

export const DataListItem = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<DataListItemProps>, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div {...restProps} className={clsx('utrecht-data-list__item', className)} ref={ref}>
        {children}
      </div>
    );
  },
);

DataListItem.displayName = 'DataListItem';

export type DataListKeyProps = HTMLAttributes<HTMLElement>;

export const DataListKey = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<DataListKeyProps>, ref: ForwardedRef<HTMLElement>) => {
    return (
      <dt {...restProps} className={clsx('utrecht-data-list__item-key', className)} ref={ref}>
        {children}
      </dt>
    );
  },
);

DataListKey.displayName = 'DataListKey';

export interface DataListValueProps extends HTMLAttributes<HTMLElement> {
  value?: number | string;
  emptyDescription?: string;
  multiline?: boolean;
  // We couldn't use `translate` as boolean input, because `HTMLElement` already implements it as `string`.
  notranslate?: boolean;
}

export const DataListValue = forwardRef(
  (
    { value, children, className, emptyDescription, multiline, notranslate }: PropsWithChildren<DataListValueProps>,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const empty = value === '' || value === null;

    return (
      <dd
        className={clsx(
          'utrecht-data-list__item-value',
          'utrecht-data-list__item-value--html-dd',
          className,
          multiline && 'utrecht-data-list__item-value--multiline',
        )}
        translate={typeof notranslate === 'boolean' ? (notranslate ? 'no' : 'yes') : undefined}
        ref={ref}
      >
        {empty ? <span aria-label={emptyDescription}>-</span> : children}
      </dd>
    );
  },
);

DataListValue.displayName = 'DataListValue';

export type DataListActionsProps = HTMLAttributes<HTMLElement>;

export const DataListActions = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<DataListActionsProps>, ref: ForwardedRef<HTMLElement>) => {
    return (
      <dd
        {...restProps}
        className={clsx('utrecht-data-list__actions', 'utrecht-data-list__actions--html-dd', className)}
        ref={ref}
      >
        {children}
      </dd>
    );
  },
);
DataListActions.displayName = 'DataListActions';

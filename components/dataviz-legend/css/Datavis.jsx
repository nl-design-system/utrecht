import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export const DatavizLegend = forwardRef(({ appearance, children, className, ...restProps }, ref) => {
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
});

DatavizLegend.displayName = 'DatavizLegend';

export const DatavizLegendItem = forwardRef(({ children, className, ...restProps }, ref) => {
  return (
    <div {...restProps} className={clsx('utrecht-data-list__item', className)} ref={ref}>
      {children}
    </div>
  );
});

DatavizLegendItem.displayName = 'DatavizLegendItem';

export const DatavizLegendKey = forwardRef(({ children, className, ...restProps }, ref) => {
  return (
    <dt {...restProps} className={clsx('utrecht-data-list__item-key', className)} ref={ref}>
      {children}
    </dt>
  );
});

DatavizLegendKey.displayName = 'DatavizLegendKey';

export const DatavizLegendValue = forwardRef(
  ({ value, children, className, emptyDescription, multiline, notranslate }, ref) => {
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

DatavizLegendValue.displayName = 'DatavizLegendValue';

export const DatavizLegendActions = forwardRef(({ children, className, ...restProps }, ref) => {
  return (
    <dd
      {...restProps}
      className={clsx('utrecht-data-list__actions', 'utrecht-data-list__actions--html-dd', className)}
      ref={ref}
    >
      {children}
    </dd>
  );
});

DatavizLegendActions.displayName = 'DatavizLegendActions';

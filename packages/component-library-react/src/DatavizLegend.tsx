import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import { Heading } from './Heading';

export const DatavizLegend = forwardRef(({ children, className, ...restProps }, ref) => {
  return (
    <section {...restProps} className={clsx('utrecht-dataviz-legend', className)} ref={ref}>
      {children}
    </section>
  );
});

DatavizLegend.displayName = 'DatavizLegend';

export const DatavizLegendList = forwardRef(({ appearance, children, className, ...restProps }, ref) => {
  return (
    <dl
      {...restProps}
      className={clsx(
        'utrecht-dataviz-legend__list',
        'utrecht-dataviz-legend__list--html-dl',
        appearance === 'rows' && 'utrecht-dataviz-legend__list--rows',
        className,
      )}
      ref={ref}
    >
      {children}
    </dl>
  );
});

DatavizLegendList.displayName = 'DatavizLegendList';

export const DatavizLegendHeading = ({ className, ...restProps }) => (
  <Heading {...restProps} className={clsx('utrecht-dataviz-legend__heading', className)} />
);

DatavizLegendHeading.displayName = 'DatavizLegendHeading';

export const DatavizLegendItem = forwardRef(({ children, className, ...restProps }, ref) => {
  return (
    <div {...restProps} className={clsx('utrecht-dataviz-legend__item', className)} ref={ref}>
      {children}
    </div>
  );
});

DatavizLegendItem.displayName = 'DatavizLegendItem';

export const DatavizLegendKey = forwardRef(({ children, className, ...restProps }, ref) => {
  return (
    <dt {...restProps} className={clsx('utrecht-dataviz-legend__item-key', className)} ref={ref}>
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
          'utrecht-dataviz-legend__item-value',
          'utrecht-dataviz-legend__item-value--html-dd',
          className,
          multiline && 'utrecht-dataviz-legend__item-value--multiline',
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

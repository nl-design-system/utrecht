import clsx from 'clsx';
import React, { ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from 'react';
import '@utrecht/grid-css/dist/index';

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Order = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Spacing = 'sm' | 'md' | 'lg';

type JustifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between';
type AlignItems = 'flex-start' | 'center' | 'flex-end';
type FlexDirection = 'column' | 'column-reverse' | 'row' | 'row-reverse';

export interface GridProps extends React.HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  spacing?: Spacing;
  justifyContent?: JustifyContent;
  justifyContentSm?: JustifyContent;
  justifyContentMd?: JustifyContent;
  justifyContentLg?: JustifyContent;
  alignItems?: AlignItems;
  alignItemsSm?: AlignItems;
  alignItemsMd?: AlignItems;
  alignItemsLg?: AlignItems;
  flexDirection?: FlexDirection;
}
export interface GridCellProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  xs?: Cols;
  sm?: Cols;
  md?: Cols;
  lg?: Cols;
  justifyContent?: JustifyContent;
  justifyContentSm?: JustifyContent;
  justifyContentMd?: JustifyContent;
  justifyContentLg?: JustifyContent;
  alignItems?: AlignItems;
  alignItemsSm?: AlignItems;
  alignItemsMd?: AlignItems;
  alignItemsLg?: AlignItems;
  order?: Order;
  orderSm?: Order;
  orderMd?: Order;
  orderLg?: Order;
}

export const Grid = forwardRef(
  (
    {
      children,
      spacing,
      justifyContent,
      justifyContentSm,
      justifyContentMd,
      justifyContentLg,
      alignItems,
      alignItemsSm,
      alignItemsMd,
      alignItemsLg,
      flexDirection,
      className,
      ...props
    }: PropsWithChildren<GridProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const classes = clsx('utrecht-grid__container', className, {
      [`utrecht-grid--spacing-${spacing}`]: spacing,
      [`utrecht-grid--justify-content-${justifyContent}`]: justifyContent,
      [`utrecht-grid--justify-content-sm-${justifyContentSm}`]: justifyContentSm,
      [`utrecht-grid--justify-content-md-${justifyContentMd}`]: justifyContentMd,
      [`utrecht-grid--justify-content-lg-${justifyContentLg}`]: justifyContentLg,
      [`utrecht-grid--align-items-${alignItems}`]: alignItems,
      [`utrecht-grid--align-items-sm-${alignItemsSm}`]: alignItemsSm,
      [`utrecht-grid--align-items-md-${alignItemsMd}`]: alignItemsMd,
      [`utrecht-grid--align-items-lg-${alignItemsLg}`]: alignItemsLg,
      [`utrecht-grid--flex-direction-${flexDirection}`]: flexDirection,
    });

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  },
);

Grid.displayName = 'Grid';

export const GridCell = forwardRef(
  (
    {
      children,
      xs,
      sm,
      md,
      lg,
      justifyContent,
      justifyContentSm,
      justifyContentMd,
      justifyContentLg,
      alignItems,
      alignItemsSm,
      alignItemsMd,
      alignItemsLg,
      className,
      orderLg,
      orderMd,
      orderSm,
      order,
      ...props
    }: PropsWithChildren<GridCellProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const classes = clsx('utrecht-grid__cell', className, {
      [`utrecht-grid--xs-${xs}`]: xs,
      [`utrecht-grid--sm-${sm}`]: sm,
      [`utrecht-grid--md-${md}`]: md,
      [`utrecht-grid--lg-${lg}`]: lg,
      [`utrecht-grid--justify-content-${justifyContent}`]: justifyContent,
      [`utrecht-grid--justify-content-sm-${justifyContentSm}`]: justifyContentSm,
      [`utrecht-grid--justify-content-md-${justifyContentMd}`]: justifyContentMd,
      [`utrecht-grid--justify-content-lg-${justifyContentLg}`]: justifyContentLg,
      [`utrecht-grid--align-items-${alignItems}`]: alignItems,
      [`utrecht-grid--align-items-sm-${alignItemsSm}`]: alignItemsSm,
      [`utrecht-grid--align-items-md-${alignItemsMd}`]: alignItemsMd,
      [`utrecht-grid--align-items-lg-${alignItemsLg}`]: alignItemsLg,
      [`utrecht-grid--order-${order}`]: order,
      [`utrecht-grid--order-sm-${orderSm}`]: orderSm,
      [`utrecht-grid--order-md-${orderMd}`]: orderMd,
      [`utrecht-grid--order-lg-${orderLg}`]: orderLg,
    });

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  },
);

GridCell.displayName = 'GridCell';

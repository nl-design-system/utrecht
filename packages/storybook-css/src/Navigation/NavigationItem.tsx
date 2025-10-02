import clsx from 'clsx';
import React, { ForwardedRef, forwardRef, LiHTMLAttributes, PropsWithChildren } from 'react';

interface NavigationItemProps extends LiHTMLAttributes<HTMLLIElement> {
  mobile?: boolean;
}
export const NavigationItem = forwardRef(
  (
    { children, mobile, className, ...restProps }: PropsWithChildren<NavigationItemProps>,
    ref: ForwardedRef<HTMLLIElement>,
  ) => (
    <li
      className={clsx(className, 'utrecht-navigation__item', {
        'utrecht-navigation__item--mobile': mobile,
        'utrecht-navigation__item-icon': mobile,
      })}
      ref={ref}
      {...restProps}
    >
      {children}
    </li>
  ),
);

NavigationItem.displayName = 'NavigationItem';

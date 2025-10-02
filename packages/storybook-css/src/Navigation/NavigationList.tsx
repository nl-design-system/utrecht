import clsx from 'clsx';
import React from 'react';
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren, useRef } from 'react';
import { NavigationListType } from '.';
import { NavigationItem } from './NavigationItem';
import { NavigationLink } from './NavigationLink';
import { NavigationMarker } from './NavigationMarker';

export interface NavigationListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  list: NavigationListType[];
  mobile?: boolean;
  sideNav?: boolean;
  subList?: boolean;
  targetId?: string;
}

const NavSubList = ({ list }: { list: NavigationListType[] }) => (
  <ul className={clsx('utrecht-navigation__list--sub-list')}>
    {list.map((item, index) => (
      <NavigationItem key={index} mobile className={clsx('utrecht-navigation__list--sub-list-item')}>
        <NavigationLink
          href={item.href}
          mobile
          marker={<NavigationMarker isCurrent={item.isCurrent} appearance="outline" />}
        >
          {item.textContent}
        </NavigationLink>
        {item.children && Array.isArray(item.children) && <NavSubList list={item.children} />}
      </NavigationItem>
    ))}
  </ul>
);

export const NavigationList = ({
  list,
  mobile,
  sideNav,
  children,
  subList,
  targetId,
  ...restProps
}: PropsWithChildren<NavigationListProps>) => (
  <ul
    className={clsx('utrecht-navigation__list', {
      'utrecht-navigation__list--mobile': mobile,
      'utrecht-navigation__list--side-nav': sideNav,
      'utrecht-navigation__list--sub-list': subList,
    })}
    {...restProps}
  >
    {children}

    {Array.isArray(list) &&
      list.map((item, index) => {
        const isTheFirstElement = index === 0;
        return (
          <NavigationItem key={index} mobile={mobile}>
            <NavigationLink
              mobile={mobile}
              href={item.href}
              isCurrent={item.isCurrent}
              id={isTheFirstElement ? targetId : undefined}
              marker={mobile && <NavigationMarker isCurrent={item.isCurrent} />}
            >
              {item.textContent}
            </NavigationLink>
            {mobile && item.children && item.children.length > 0 && <NavSubList list={item.children} />}
          </NavigationItem>
        );
      })}
  </ul>
);

NavigationList.displayName = 'NavigationList';

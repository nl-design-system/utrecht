import clsx from 'clsx';
import React from 'react';
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren, useRef } from 'react';
import { FocusEvent } from 'react';
import { NavigationListType } from '.';
import { NavigationItem } from './NavigationItem';
import { NavigationLink } from './NavigationLink';
import { NavigationMarker } from './NavigationMarker';

export interface NavigationListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  list: NavigationListType[];
  mobile?: boolean;
  sideNav?: boolean;
  subList?: boolean;
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
  ...restProps
}: PropsWithChildren<NavigationListProps>) => {
  const navListRef = useRef<HTMLUListElement>(null);
  const navLinkRef = useRef<HTMLAnchorElement>(null);

  // focus on first link in list when list is focused
  const onNavListLinkFocusHandler = (event: FocusEvent<HTMLUListElement, Element>) => {
    if (mobile) return; // prevent behavior on mobile
    if (event.target !== navListRef.current) return; // ignore bubbling focus event in React

    if (navListRef.current && navLinkRef?.current) {
      navLinkRef.current.focus();
    }
  };

  return (
    <ul
      className={clsx('utrecht-navigation__list', {
        'utrecht-navigation__list--mobile': mobile,
        'utrecht-navigation__list--side-nav': sideNav,
        'utrecht-navigation__list--sub-list': subList,
      })}
      ref={navListRef}
      tabIndex={-1}
      onFocus={onNavListLinkFocusHandler}
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
                ref={isTheFirstElement ? navLinkRef : null}
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
};

NavigationList.displayName = 'NavigationList';

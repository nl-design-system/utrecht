import { OrderedList, OrderedListItem } from '@utrecht/component-library-react';
import type { OrderedListProps } from '@utrecht/component-library-react';
import clsx from 'clsx';
import React, { ReactNode } from 'react';

interface OrderedListItemData {
  children?: ReactNode;
  items?: OrderedListItemData[];
}

interface OrderedListStoryProps extends OrderedListProps {
  element?: string | 'div';
  center?: boolean;
  items?: OrderedListItemData[];
  htmlContent?: boolean;
}

const HTMLList = ({ items }: { items: OrderedListItemData[] }) => (
  <ol>
    {items?.map(({ children: subChildren, items: subItems }, index) => (
      <li key={index}>
        {subChildren}
        {subItems && HTMLList({ items: subItems })}
      </li>
    ))}
  </ol>
);

export const OrderedListStory = ({ children, center, items, htmlContent }: OrderedListStoryProps) => {
  return (
    <OrderedList
      className={clsx({
        'utrecht-ordered-list--center': center,
        'utrecht-ordered-list--html-content': htmlContent,
      })}
    >
      {children}
      {htmlContent
        ? items?.map(({ children: subChildren, items: subItems }, index) => (
            <li key={index}>
              {subChildren}
              {subItems && HTMLList({ items: subItems })}
            </li>
          ))
        : items?.map(({ children: subChildren, items: subItems }, index) => (
            <OrderedListItem key={index}>
              {subChildren}
              {subItems && OrderedListStory({ items: subItems })}
            </OrderedListItem>
          ))}
    </OrderedList>
  );
};

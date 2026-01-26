import { UnorderedList, UnorderedListItem } from '@utrecht/component-library-react';
import type { UnorderedListProps } from '@utrecht/component-library-react';
import clsx from 'clsx';
import React, { ReactNode } from 'react';

interface UnorderedListItemData {
  children?: ReactNode;
  items?: UnorderedListItemData[];
}

interface UnorderedListStoryProps extends UnorderedListProps {
  element?: string | 'div';
  center?: boolean;
  forcedColors?: boolean;
  items?: UnorderedListItemData[];
  htmlContent?: boolean;
  nested?: boolean;
}

const HTMLList = ({ items }: { items: UnorderedListItemData[] }) => (
  <ul>
    {items?.map(({ children: subChildren, items: subItems }, index) => (
      <li key={index}>
        {subChildren}
        {subItems && HTMLList({ items: subItems })}
      </li>
    ))}
  </ul>
);

export const UnorderedListStory = ({
  children,
  center,
  forcedColors,
  items,
  htmlContent,
  nested,
}: UnorderedListStoryProps) => {
  return (
    <UnorderedList
      className={clsx({
        'utrecht-unordered-list--center': center,
        'utrecht-unordered-list--forced-colors': forcedColors,
        'utrecht-unordered-list--html-content': htmlContent,
        'utrecht-unordered-list--nested': nested,
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
            <UnorderedListItem key={index}>
              {subChildren}
              {subItems && UnorderedListStory({ items: subItems, nested: true })}
            </UnorderedListItem>
          ))}
    </UnorderedList>
  );
};

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
  items?: UnorderedListItemData[];
  htmlContent?: boolean;
  nested?: boolean;
  level?: number;
}

const HTMLList = ({ items }: { items: UnorderedListItemData[] }) => (
  <ul>
    {items?.map(({ children: subChildren, items: subItems }) => (
      <li key={`${subChildren}`}>
        {subChildren}
        {subItems && <HTMLList items={subItems} />}
      </li>
    ))}
  </ul>
);

export const UnorderedListStory = ({
  children,
  center,
  items,
  htmlContent,
  nested,
  level = 1,
}: UnorderedListStoryProps) => {
  return (
    <UnorderedList
      className={clsx(`utrecht-unordered-list--level-${level}`, {
        'utrecht-unordered-list--center': center,
        'utrecht-unordered-list--html-content': htmlContent,
        'utrecht-unordered-list--nested': nested,
      })}
    >
      {children}
      {htmlContent
        ? items?.map(({ children: subChildren, items: subItems }) => (
            <li key={`${subChildren}`}>
              {subChildren}
              {subItems && HTMLList({ items: subItems })}
            </li>
          ))
        : items?.map(({ children: subChildren, items: subItems }) => (
            <UnorderedListItem key={`${subChildren}`}>
              {subChildren}
              {subItems && UnorderedListStory({ items: subItems, nested: true, level: level + 1 })}
            </UnorderedListItem>
          ))}
    </UnorderedList>
  );
};

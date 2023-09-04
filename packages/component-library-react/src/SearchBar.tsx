/**
 * @license EUPL-1.2
 * Copyright (c) 2023 Robbert Broersma
 */

import clsx from 'clsx';
import Downshift, { DownshiftProps } from 'downshift';
import React from 'react';
import { Button, ButtonProps } from './Button';
import { Textbox, TextboxProps } from './Textbox';
import { UnorderedList } from './UnorderedList';
import { UnorderedListItem } from './UnorderedListItem';

interface InputTypes extends TextboxProps {}

interface ButtonTypes extends ButtonProps {
  label: string;
}

export interface SearchBarProps extends DownshiftProps<any> {
  /**
   * Configuration for an input field, extending properties from TextboxProps.
   */
  input?: InputTypes;
  /**
   * A function responsible for converting an item into its string representation for display in the list.
   *
   * @property itemToString - A function that takes an item and returns its string representation.
   *
   * This function is used to display the list item text in the dropdown. You can customize how items are displayed.
   *
   * @example
   * // Example 1: Returning just the 'name' property of an object
   * const itemToString = (item: any) => {
   *   return item ? item.name : '';
   * };
   *
   * // Example 2: Combining 'name' and 'year' properties of an object
   * const itemToString = (item: any) => {
   *   return item ? `${item.name} ${item.year}` : '';
   * };
   */
  itemToString: (_item?: any) => string;
  /**
   * An array of items to populate the search bar's dropdown list.
   *
   * @property items - An array of sections, each containing a title and a list of items.
   * @property items[].title - The title of a section in the dropdown list.
   * @property items[].list - The list of items within the section.
   *
   * @example
   * const items = [
   *   {
   *     title: 'Fruits',
   *     list: ['Apple', 'Banana', 'Orange'],
   *   },
   *   {
   *     title: 'Colors',
   *     list: ['Red', 'Green', 'Blue'],
   *   },
   * ];
   */
  items?: any[];
  /**
   * Configuration for a button, including additional properties inherited from ButtonProps.
   */
  button: ButtonTypes;
  /**
   * A function that provides custom rendering for individual search result options.
   *
   * This function allows you to define a custom rendering template for each option displayed
   * in the search dropdown. It takes an individual search result option and returns a React
   * node representing the custom-rendered option.
   *
   * @param option - The individual search result option to be rendered.
   * @returns A React node representing the custom-rendered option.
   *
   * @example
   * // Custom rendering function for rendering books as search results.
   * const customRenderOptions = (book: any) => {
   *   return (
   *     <div>
   *       <h3>{book.title}</h3>
   *       <p>Author: {book.author}</p>
   *       <p>Published Year: {book.publishedYear}</p>
   *     </div>
   *   );
   * };
   *
   * // Pass the custom rendering function as the renderOptions prop.
   * <SearchBar renderOptions={customRenderOptions} />
   */
  renderOptions?: (_option: any) => React.ReactNode;
}

interface SearchBarDropdownProps {
  children: React.ReactNode;
}

export const SearchBarDropdown: React.FC<SearchBarDropdownProps> = ({ children }) => (
  <div className={clsx('utrecht-search-bar__dropdown')}>{children}</div>
);

interface SearchBarSectionProps {
  children: React.ReactNode;
  title?: string;
}

export const SearchBarSection: React.FC<SearchBarSectionProps> = ({ children, title }) => (
  <section className={clsx('utrecht-search-bar__section')}>
    {title && <span className={clsx('utrecht-search-bar__section-title')}>{title}</span>}
    {children}
  </section>
);

/**
 * SearchBar Component
 *
 * This component extends the functionality of the [Downshift](https://www.npmjs.com/package/downshift#onstatechange) component,
 * allowing you to leverage its powerful features and customize its behavior
 * while providing a convenient and accessible search bar interface.
 */

export const SearchBar: React.FC<SearchBarProps> = ({ itemToString, items, input, button, renderOptions, ...rest }) => {
  return (
    <Downshift itemToString={itemToString} {...rest}>
      {({ getInputProps, getItemProps, isOpen, selectedItem, highlightedIndex, getMenuProps }) => (
        <div>
          <div className={clsx('utrecht-search-bar')}>
            <Textbox {...getInputProps()} type="search" className={clsx('utrecht-search-bar__input')} {...input} />
            <Button
              type="submit"
              appearance="primary-action-button"
              className={clsx('utrecht-search-bar__button')}
              {...button}
            >
              {button?.label}
            </Button>
          </div>
          {(items && items.length === 0) || !isOpen ? null : (
            <SearchBarDropdown>
              {items &&
                items.reduce(
                  (result: any, section: any, sectionIndex: any) => {
                    result.list.push(
                      <SearchBarSection key={sectionIndex} title={section?.title}>
                        <UnorderedList {...getMenuProps()}>
                          {section.list.map((item: any, itemIndex: any) => {
                            const index = result.itemIndex++;
                            return (
                              <UnorderedListItem
                                className={clsx('utrecht-search-bar__list-item', {
                                  'utrecht-search-bar__list-item--is-active': highlightedIndex === index,
                                  'utrecht-search-bar__list-item--is-selected': selectedItem === item,
                                })}
                                key={itemIndex}
                                {...getItemProps({ item, index })}
                              >
                                {renderOptions ? renderOptions(item) : itemToString(item)}
                              </UnorderedListItem>
                            );
                          })}
                        </UnorderedList>
                      </SearchBarSection>,
                    );

                    return result;
                  },
                  { list: [], itemIndex: 0 },
                ).list}
            </SearchBarDropdown>
          )}
        </div>
      )}
    </Downshift>
  );
};

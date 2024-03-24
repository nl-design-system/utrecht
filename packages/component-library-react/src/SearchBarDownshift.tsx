/**
 * @license EUPL-1.2
 * Copyright (c) 2023 Robbert Broersma
 */

import clsx from 'clsx';
import Downshift, { DownshiftProps } from 'downshift';
import React, { ReactNode } from 'react';
import { Button, ButtonProps } from './Button';
import { Combobox } from './Combobox';
import { Listbox, ListboxOption, ListboxOptionGroup } from './Listbox';
import { SearchBarFormField } from './SearchBar';
import { Textbox, TextboxProps } from './Textbox';

interface InputTypes extends TextboxProps {}

interface ButtonTypes extends ButtonProps {
  label: string;
}

export interface SearchBarProps<T = any> extends DownshiftProps<T> {
  name?: string;

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
  itemToString: (_item: T | null) => string;
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
  items?: {
    title: ReactNode;
    list: string[];
  }[];
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
  renderOptions?: (_option?: T) => React.ReactNode;
}

/**
 * SearchBar Component
 *
 * This component extends the functionality of the [Downshift](https://www.npmjs.com/package/downshift#onstatechange) component,
 * allowing you to leverage its powerful features and customize its behavior
 * while providing a convenient and accessible search bar interface.
 */
export const SearchBarDownshift = ({
  itemToString,
  items,
  name,
  input,
  button,
  renderOptions,
  ...rest
}: SearchBarProps) => {
  return (
    <Downshift itemToString={itemToString} {...rest}>
      {({ getInputProps, getItemProps, getMenuProps, getRootProps, isOpen, selectedItem, highlightedIndex }) => (
        <SearchBarFormField {...getRootProps()}>
          <Combobox>
            <Textbox name={name} type="search" className="utrecht-search-bar__input" {...getInputProps()} {...input} />
            <Listbox
              className={clsx('utrecht-search-bar__popover', 'utrecht-search-bar__popover--block-end')}
              hidden={!isOpen}
            >
              {Array.isArray(items) &&
                items.length >= 1 &&
                items.reduce(
                  (result: { list: ReactNode[]; itemIndex: number }, group, groupIndex) => {
                    result.list.push(
                      <ListboxOptionGroup key={groupIndex} label={group?.title} {...getMenuProps()}>
                        {group.list.map((item, itemIndex) => {
                          const index = result.itemIndex++;
                          return (
                            <ListboxOption
                              active={highlightedIndex === index}
                              selected={selectedItem === item}
                              key={itemIndex}
                              {...getItemProps({ item, index })}
                            >
                              {renderOptions ? renderOptions(item) : itemToString(item)}
                            </ListboxOption>
                          );
                        })}
                      </ListboxOptionGroup>,
                    );

                    return result;
                  },
                  { list: [], itemIndex: 0 },
                ).list}
            </Listbox>
          </Combobox>
          <Button type="submit" appearance="primary-action-button" className="utrecht-search-bar__button" {...button}>
            {button?.label}
          </Button>
        </SearchBarFormField>
      )}
    </Downshift>
  );
};

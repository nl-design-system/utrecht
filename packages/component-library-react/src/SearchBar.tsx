/**
 * @license EUPL-1.2
 * Copyright (c) 2023 Robbert Broersma
 */

import clsx from 'clsx';
import Downshift, { DownshiftProps } from 'downshift';
import React, { HTMLAttributes, PropsWithChildren, ReactNode, useId } from 'react';
import { Button, ButtonProps } from './Button';
import { Textbox, TextboxProps } from './Textbox';

interface InputTypes extends TextboxProps {}

interface ButtonTypes extends ButtonProps {
  label: string;
}

export interface SearchBarProps<T = any> extends DownshiftProps<T> {
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

export type ComboboxProps = HTMLAttributes<HTMLDivElement>;

export const Combobox = ({ className, ...restProps }: PropsWithChildren<ComboboxProps>) => (
  <div className={clsx('utrecht-combobox', className)} {...restProps} />
);

export type ListboxProps = HTMLAttributes<HTMLDivElement>;

export const Listbox = ({ className, ...restProps }: PropsWithChildren<ListboxProps>) => (
  <div className={clsx('utrecht-listbox', className)} {...restProps} />
);

export interface ListboxOptionGroupProps extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode;
}

export const ListboxOptionGroup = ({ children, label, ...restProps }: PropsWithChildren<ListboxOptionGroupProps>) => {
  const id = useId();
  return (
    <div className="utrecht-listbox__group" role="group" aria-labelledby={id} {...restProps}>
      {label && (
        <div id={id} className="utrecht-listbox__group-label">
          {label}
        </div>
      )}
      <ul>{children}</ul>
    </div>
  );
};
export interface ListboxOptionProps extends HTMLAttributes<HTMLLIElement> {
  active?: boolean;
  selected?: boolean;
}

export const ListboxOption = ({ active, selected, ...restProps }: PropsWithChildren<ListboxOptionProps>) => (
  <li
    className={clsx('utrecht-listbox__option', {
      'utrecht-listbox__option--active': active,
      'utrecht-listbox__option--selected': selected,
    })}
    role="option"
    {...restProps}
  />
);

export const SearchBarFormField = ({ ...restProps }) => <div className="utrecht-search-bar" {...restProps} />;

/**
 * SearchBar Component
 *
 * This component extends the functionality of the [Downshift](https://www.npmjs.com/package/downshift#onstatechange) component,
 * allowing you to leverage its powerful features and customize its behavior
 * while providing a convenient and accessible search bar interface.
 */

export const SearchBar = ({ itemToString, items, input, button, renderOptions, ...rest }: SearchBarProps) => {
  return (
    <Downshift itemToString={itemToString} {...rest}>
      {({ getInputProps, getItemProps, getMenuProps, isOpen, selectedItem, highlightedIndex }) => (
        <div>
          <SearchBarFormField>
            <Combobox>
              <Textbox type="search" className="utrecht-search-bar__input" {...getInputProps()} {...input} />
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
        </div>
      )}
    </Downshift>
  );
};

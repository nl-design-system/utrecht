/**
 * @license EUPL-1.2
 * Copyright (c) 2023 Robbert Broersma
 */

import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren, ReactNode, useId } from 'react';

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

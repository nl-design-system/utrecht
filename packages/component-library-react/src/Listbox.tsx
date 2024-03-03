/**
 * @license EUPL-1.2
 * Copyright (c) 2023 Robbert Broersma
 */

import clsx from 'clsx';
import { HTMLAttributes, LiHTMLAttributes, PropsWithChildren, ReactNode, useId } from 'react';

export interface ListboxProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  invalid?: boolean;
  multiple?: boolean;
  readOnly?: boolean;
  required?: boolean;
}

export const Listbox = ({
  children,
  className,
  disabled,
  invalid,
  multiple,
  readOnly,
  required,
  ...restProps
}: PropsWithChildren<ListboxProps>) => (
  <div
    className={clsx(
      'utrecht-listbox',
      'utrecht-listbox--html-div',
      {
        'utrecht-listbox--disabled': disabled,
        'utrecht-listbox--invalid': invalid,
        'utrecht-listbox--read-only': readOnly,
      },
      className,
    )}
    role="listbox"
    aria-disabled={disabled || undefined}
    aria-invalid={invalid || undefined}
    aria-multiselectable={multiple || undefined}
    aria-readonly={readOnly || undefined}
    aria-required={required || undefined}
    tabIndex={0}
    {...restProps}
  >
    <ul className="utrecht-listbox__list">{children}</ul>
  </div>
);

export interface ListboxOptionGroupProps extends LiHTMLAttributes<HTMLLIElement> {
  label?: ReactNode;
}

export const ListboxOptionGroup = ({ children, label, ...restProps }: PropsWithChildren<ListboxOptionGroupProps>) => {
  const id = useId();
  return (
    <li className="utrecht-listbox__group" role="group" aria-labelledby={id} {...restProps}>
      {label && (
        <div id={id} className="utrecht-listbox__group-label">
          {label}
        </div>
      )}
      <ul>{children}</ul>
    </li>
  );
};

export interface ListboxOptionProps extends HTMLAttributes<HTMLLIElement> {
  active?: boolean;
  disabled?: boolean;
  selected?: boolean;
}

export const ListboxOption = ({
  active,
  className,
  disabled,
  selected,
  ...restProps
}: PropsWithChildren<ListboxOptionProps>) => (
  <li
    className={clsx(
      'utrecht-listbox__option',
      'utrecht-listbox__option--html-li',
      {
        'utrecht-listbox__option--active': active,
        'utrecht-listbox__option--disabled': disabled,
        'utrecht-listbox__option--selected': selected,
      },
      className,
    )}
    aria-disabled={disabled || undefined}
    aria-selected={selected ? 'true' : 'false'}
    tabIndex={disabled ? undefined : -1}
    role="option"
    {...restProps}
  />
);

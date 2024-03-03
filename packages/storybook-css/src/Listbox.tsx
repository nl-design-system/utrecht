/* @license CC0-1.0 */

import { Listbox, ListboxOption } from '@utrecht/component-library-react/src/Listbox';
import clsx from 'clsx';
import React, { ReactNode } from 'react';

export interface ListboxOptionStoryProps {
  disabled?: boolean;
  focus?: boolean;
  focusVisible?: boolean;
  label: ReactNode;
  selected?: boolean;
}

export interface ListboxStoryProps {
  disabled?: boolean;
  invalid?: boolean;
  focus?: boolean;
  focusVisible?: boolean;
  multiple?: boolean;
  readOnly?: boolean;
  required?: boolean;
  options: ListboxOptionStoryProps[];
}

export const ListboxStory = ({
  disabled,
  focus,
  focusVisible,
  invalid,
  multiple,
  options,
  readOnly,
  required,
}: ListboxStoryProps) => (
  <Listbox
    className={clsx({
      'utrecht-listbox--focus': focus,
      'utrecht-listbox--focus-visible': focusVisible,
    })}
    disabled={disabled}
    invalid={invalid}
    multiple={multiple}
    required={required}
    readOnly={readOnly}
  >
    {options.map(({ disabled, focus, focusVisible, label, selected }, index) => (
      <ListboxOption
        className={clsx({
          'utrecht-listbox__option--focus': focus,
          'utrecht-listbox__option--focus-visible': focusVisible,
        })}
        disabled={disabled}
        selected={selected}
        key={index}
      >
        {label}
      </ListboxOption>
    ))}
  </Listbox>
);

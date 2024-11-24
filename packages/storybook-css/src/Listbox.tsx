/* @license CC0-1.0 */

import { Listbox, ListboxOption } from '@utrecht/component-library-react/dist/index';
import clsx from 'clsx';
import React, { ReactNode } from 'react';

export interface ListboxOptionStoryProps {
  active?: boolean;
  disabled?: boolean;
  focus?: boolean;
  focusVisible?: boolean;
  hover?: boolean;
  label: ReactNode;
  selected?: boolean;
}

export interface ListboxStoryProps {
  disabled?: boolean;
  invalid?: boolean;
  focus?: boolean;
  focusVisible?: boolean;
  forcedColors?: boolean;
  multiple?: boolean;
  readOnly?: boolean;
  required?: boolean;
  options: ListboxOptionStoryProps[];
}

export const ListboxStory = ({
  disabled,
  focus,
  focusVisible,
  forcedColors,
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
      'utrecht-listbox--forced-colors': forcedColors,
    })}
    disabled={disabled}
    invalid={invalid}
    multiple={multiple}
    required={required}
    readOnly={readOnly}
  >
    {options.map(({ active, disabled, focus, focusVisible, hover, label, selected }, index) => (
      <ListboxOption
        className={clsx({
          'utrecht-listbox__option--hover': hover,
          'utrecht-listbox__option--focus': focus,
          'utrecht-listbox__option--focus-visible': focusVisible,
        })}
        active={active}
        disabled={disabled}
        selected={selected}
        key={index}
      >
        {label}
      </ListboxOption>
    ))}
  </Listbox>
);

// @ts-check
/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import clsx from 'clsx';
import React from 'react';

export const argTypes = {
  options: {
    name: 'options',
    type: { name: 'Array', required: false },
    description:
      "Array of values `const options = ['Afghanistan','Åland Islands', 'Albania', 'Algeria', 'American Samoa','AndorrA','Angola']`",
    table: {
      category: 'API',
      defaultValue: { summary: undefined },
    },
  },
  label: {
    name: 'label',
    type: { name: 'string', required: false },
    table: {
      category: 'HTML',
      defaultValue: { summary: '' },
    },
  },
  placeholder: {
    name: 'placeholder',
    type: { name: 'string', required: false },
    table: {
      category: 'HTML',
      defaultValue: { summary: '' },
    },
  },
  onComboboxChange: {
    name: 'onComboboxChange',
    type: { name: 'func', required: false },
    description:
      'This function returns the selected value from the ComboBox component `onComboboxChange: {(value: string)=> console.log(value)}`',
    table: {
      category: 'API',
      defaultValue: { summary: undefined },
    },
  },
  renderOptions: {
    name: 'renderOptions',
    type: { name: 'func', required: false },
    description:
      'This function allows wrapping the option value with a component `renderOptions={(option)=> <Paragraph>{option}</Paragraph>}`',
    table: {
      category: 'API',
      defaultValue: { summary: undefined },
    },
  },
};

export const defaultArgs = {
  placeholder: '',
  label: '',
  isOpen: false,
  ariaActivedescendant: '',
  options: [],
};

export const exampleArgs = { placeholder: 'Search your country here', label: 'Select Your Country' };
export const countries = [
  { label: 'Ukraine', id: '0663E18C-A145-4335-82BA-EAC75F54BAB1', selectedItem: true, hovered: false },
  { label: 'United Arab Emirates', id: '927E193A-E330-4230-B4CB-A10704E4CC79', selectedItem: false, hovered: false },
  { label: 'United Kingdom', id: '68C8A000-1898-4F31-81CE-50CBD9F87028', selectedItem: false, hovered: true },
  { label: 'United States', id: '01FA95A7-22FE-4DA7-A550-D06AC568A87F', selectedItem: false, hovered: false },
  {
    label: 'United States Minor Outlying Islands',
    id: '0E4E9C6E-8E9D-4E2A-8619-A9AC19DF24D7',
    selectedItem: false,
    hovered: false,
  },
];

export const Combobox = ({
  placeholder = defaultArgs.placeholder,
  value,
  label,
  isOpen,
  options,
  ariaActivedescendant,
  ...restProps
}) => {
  const [open, toggle] = React.useState(isOpen);
  const ariaControlsId = 'combobox-0-menu';
  const ariaLabelledbyId = 'combobox-0-label';
  const inputId = 'combobox-0-input';

  return (
    <div className={clsx('utrecht-combobox')}>
      <div className={clsx('utrecht-form-field', 'utrecht-form-field--text')}>
        <label id={ariaLabelledbyId} className={clsx('utrecht-form-label')} htmlFor={inputId}>
          {label}
        </label>
        <div className={clsx('utrecht-combobox__input-wrapper')} onClick={() => toggle(!open)}>
          <input
            {...restProps}
            aria-activedescendant={ariaActivedescendant}
            aria-autocomplete="list"
            aria-controls={ariaControlsId}
            aria-labelledby={ariaLabelledbyId}
            id={inputId}
            autoComplete="off"
            aria-expanded={open || isOpen}
            role="combobox"
            className={clsx('utrecht-textbox', 'utrecht-textbox--html-input', 'utrecht-combobox__input')}
            placeholder={placeholder}
            defaultValue={value}
          />
          <button
            aria-label="toggle menu"
            tabIndex={-1}
            type="button"
            onClick={() => toggle(!open)}
            aria-expanded={open}
            className={clsx('utrecht-combobox__button')}
            aria-controls={ariaControlsId}
          >
            {open ? (
              <svg
                aria-hidden="true"
                focusable="false"
                className={clsx('utrecht-combobox__icon')}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 14L10 9L5 14L3 13L10 6L17 13L15 14Z" fill="currentColor" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                focusable="false"
                className={clsx('utrecht-combobox__icon')}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 6L10 11L15 6L17 7L10 14L3 7L5 6Z" fill="currentColor" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {open && (
        <ComboboxList listId={ariaControlsId} ariaLabelledby={ariaLabelledbyId} hidden={!isOpen}>
          {options &&
            options.length > 0 &&
            options.map((option) => (
              <ComboboxListItem
                listItemId={option.id}
                ariaSelected={option.selectedItem && true}
                hovered={option.hovered}
                selectedItem={option.selectedItem}
                key={option.id}
              >
                {option.label}
              </ComboboxListItem>
            ))}
        </ComboboxList>
      )}
    </div>
  );
};

export const ComboboxList = ({ children, listId, ariaLabelledby, hidden }) => (
  <ul
    id={listId}
    role="listbox"
    aria-labelledby={ariaLabelledby}
    className={clsx('utrecht-combobox__list')}
    hidden={hidden}
  >
    {children}
  </ul>
);

export const ComboboxListItem = ({ children, listItemId, ariaSelected, selectedItem = false, hovered = false }) => {
  return (
    <li
      id={listItemId}
      aria-selected={ariaSelected}
      className={clsx('utrecht-combobox__list-item', hovered ? 'utrecht-combobox__list-item--hover' : '', {
        'utrecht-combobox__list-item--selected': selectedItem,
      })}
      role="option"
    >
      {children}
    </li>
  );
};

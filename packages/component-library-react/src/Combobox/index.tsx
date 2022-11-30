import clsx from 'clsx';
import { useCombobox } from 'downshift';
import { useState } from 'react';
import React from 'react';
import { FormField, FormLabel, Textbox } from '../index';

export function getOptionFilter(inputValue?: string) {
  return function optionsFilter(searchedValue: string) {
    return !inputValue || searchedValue.toLowerCase().includes(inputValue);
  };
}

export interface ComboboxProps {
  options: string[];
  label: string;
  placeholder?: string;
  onComboboxChange?: (_value?: string) => void;
  renderOptions?: (_option: string) => React.ReactNode;
}

export const Combobox: React.FC<ComboboxProps> = ({ options, label, placeholder, onComboboxChange, renderOptions }) => {
  const [items, setItems] = useState(options);
  const { isOpen, getToggleButtonProps, getLabelProps, getMenuProps, getInputProps, getItemProps, selectedItem } =
    useCombobox({
      onInputValueChange({ inputValue }) {
        setItems(options.filter(getOptionFilter(inputValue)));
        if (onComboboxChange) {
          onComboboxChange(inputValue);
        }
      },
      items,
      itemToString(option) {
        return option ? option : '';
      },
    });

  return (
    <div className={clsx('utrecht-combobox')}>
      <FormField type="text">
        <FormLabel {...getLabelProps()}>{label}</FormLabel>
        <div className={clsx('utrecht-combobox__input-wrapper')}>
          <Textbox className={clsx('utrecht-combobox__input')} placeholder={placeholder} {...getInputProps()} />
          <button aria-expanded={isOpen} className={clsx('utrecht-combobox__button')} {...getToggleButtonProps()}>
            {isOpen ? (
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
      </FormField>
      <ul {...getMenuProps()} className={clsx('utrecht-combobox__list')} hidden={!isOpen}>
        {isOpen &&
          items.map((option, index) => (
            <li
              className={clsx('utrecht-combobox__list-item', {
                'utrecht-combobox__list-item--selected': selectedItem === option,
              })}
              key={`${option}${index}`}
              {...getItemProps({ item: option, index })}
            >
              {renderOptions ? renderOptions(option) : option}
            </li>
          ))}
      </ul>
    </div>
  );
};

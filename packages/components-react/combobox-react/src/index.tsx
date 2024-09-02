import type { ButtonProps } from '@utrecht/button-react';
import { Button } from '@utrecht/button-react';
import { FormFieldCombobox } from '@utrecht/form-field-combobox-react';
import { Listbox, ListboxOption } from '@utrecht/listbox-react';
import type { TextboxProps } from '@utrecht/textbox-react';
import { Textbox } from '@utrecht/textbox-react';
import clsx from 'clsx';
import { useCombobox } from 'downshift';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren, ReactNode, useId, useState } from 'react';

export interface ComboboxTextboxProps {
  label: string;
  inputProps?: TextboxProps;
  labelProps?: HTMLAttributes<HTMLLabelElement>;
}

export const ComboboxTextbox = forwardRef(
  (
    { label, inputProps, labelProps, children }: PropsWithChildren<ComboboxTextboxProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const inputID = useId();

    return (
      <FormFieldCombobox label={label} labelProps={{ htmlFor: inputID, ...labelProps }} ref={ref}>
        <div className={clsx('utrecht-combobox__textbox-container')}>
          <Textbox {...inputProps} className={clsx(inputProps?.className, 'utrecht-combobox__textbox')} id={inputID} />
          {children}
        </div>
      </FormFieldCombobox>
    );
  },
);
ComboboxTextbox.displayName = 'ComboboxTextbox';

export interface ComboboxIconProps extends HTMLAttributes<SVGSVGElement> {
  icon: 'chevron-up' | 'chevron-down';
}

export const ComboboxIcon = forwardRef(
  ({ icon, ...restProps }: ComboboxIconProps, ref: ForwardedRef<SVGSVGElement>) => (
    <svg
      ref={ref}
      aria-hidden="true"
      focusable="false"
      className={clsx('utrecht-combobox__icon')}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <path
        d={icon === 'chevron-up' ? 'M15 14L10 9L5 14L3 13L10 6L17 13L15 14Z' : 'M5 6L10 11L15 6L17 7L10 14L3 7L5 6Z'}
        fill="currentColor"
      />
    </svg>
  ),
);
ComboboxIcon.displayName = 'ComboboxIcon';

export interface ComboboxToggleButtonProps extends ButtonProps {
  isOpen: boolean;
}

export const ComboboxToggleButton = forwardRef(
  ({ isOpen, ...restProps }: ComboboxToggleButtonProps, ref: ForwardedRef<HTMLButtonElement>) => (
    <Button
      ref={ref}
      className={clsx('utrecht-combobox__toggle-button')}
      appearance="subtle-button"
      aria-label="toggle menu"
      type="button"
      {...restProps}
    >
      <ComboboxIcon icon={isOpen ? 'chevron-up' : 'chevron-down'} />
    </Button>
  ),
);
ComboboxToggleButton.displayName = 'ComboboxToggleButton';

export function getOptionFilter(inputValue?: string) {
  return function optionsFilter(searchedValue: string) {
    return !inputValue || searchedValue.toLowerCase().includes(inputValue);
  };
}

export interface ComboboxProps extends HTMLAttributes<HTMLDivElement> {
  options: string[];
  label: string;
  inputProps?: TextboxProps;
  onComboboxChange?: (_value?: string) => void;
  renderOptions?: (_option: string) => ReactNode;
}

export const Combobox = forwardRef(
  (
    { inputProps, label, className, options, onComboboxChange, renderOptions, ...restProps }: ComboboxProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const [items, setItems] = useState(options);

    const {
      isOpen,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      getInputProps,
      highlightedIndex,
      getItemProps,
      selectedItem,
    } = useCombobox({
      onInputValueChange({ inputValue }) {
        setItems(options.filter(getOptionFilter(inputValue)));
        if (onComboboxChange) {
          onComboboxChange(inputValue);
        }
      },
      items,
      itemToString: (option) => (option ? option : ''),
    });

    return (
      <div className={clsx(className, 'utrecht-combobox')} ref={ref} {...restProps}>
        <ComboboxTextbox
          inputProps={{
            ...getInputProps({ ...inputProps }),
          }}
          label={label}
          labelProps={{ ...getLabelProps() }}
        >
          <ComboboxToggleButton {...getToggleButtonProps()} isOpen={isOpen} />
        </ComboboxTextbox>
        <Listbox
          className={clsx({
            'utrecht-combobox__popover--hidden': !isOpen || !items.length,
          })}
          {...getMenuProps()}
        >
          {isOpen &&
            Array.isArray(items) &&
            items.map((option, index) => (
              <ListboxOption
                className={clsx('utrecht-list-box')}
                selected={selectedItem === option}
                active={highlightedIndex === index}
                key={`${option}${index}`}
                {...getItemProps({ item: option, index })}
              >
                {renderOptions ? renderOptions(option) : option}
              </ListboxOption>
            ))}
        </Listbox>
      </div>
    );
  },
);
Combobox.displayName = 'Combobox';

import { Button } from '@utrecht/button-react';
import { ComboboxProps } from '@utrecht/combobox-react';
import { Textbox } from '@utrecht/textbox-react';
import type { TextboxProps } from '@utrecht/textbox-react';
import clsx from 'clsx';
import { useCombobox, UseComboboxGetInputPropsReturnValue } from 'downshift';
import { ReactNode, RefObject, useId, useRef, useState } from 'react';
import { ComboboxStructure } from './ComboboxStructure';
import { ListboxOptionProps, ListboxWithOptions, ListboxWithOptionsProps } from './ListboxWithOptions';

type FilterFn = (inputValue: string, option: ListboxOptionProps) => boolean;

type SortFn = (a: ListboxOptionProps, b: ListboxOptionProps) => number;

const defaultFilterFn: FilterFn = (inputValue: string, option: ListboxOptionProps) =>
  String(option.value).toLowerCase().includes(inputValue.toLowerCase());

export interface SelectComboboxProps extends Omit<ComboboxProps, 'onBlur' | 'onChange' | 'onFocus' | 'onInput'> {
  defaultExpanded?: boolean;
  defaultValue?: TextboxProps['defaultValue'];
  disabled?: TextboxProps['disabled'];
  expanded?: boolean;
  filterFn?: FilterFn;
  hiddenLabel?: ReactNode;
  inputRequired?: TextboxProps['inputRequired'];
  invalid?: TextboxProps['invalid'];
  maxLength?: TextboxProps['maxLength'];
  minLength?: TextboxProps['minLength'];
  name?: TextboxProps['name'];
  onBlur?: TextboxProps['onBlur'];
  onChange?: TextboxProps['onChange'];
  onFocus?: TextboxProps['onFocus'];
  onInput?: TextboxProps['onInput'];
  options: ListboxWithOptionsProps['options'];
  pattern?: TextboxProps['pattern'];
  placeholder?: TextboxProps['placeholder'];
  readOnly?: TextboxProps['readOnly'];
  required?: TextboxProps['required'];
  showButton?: boolean;
  size?: TextboxProps['size'];
  sortFn?: SortFn;
  type?: TextboxProps['type'];
  value?: TextboxProps['value'];
}

type ActualTextboxProps = UseComboboxGetInputPropsReturnValue & { ref: RefObject<HTMLInputElement> };

export const SelectCombobox = ({
  defaultExpanded,
  defaultValue,
  disabled,
  expanded,
  filterFn = defaultFilterFn,
  id,
  onBlur,
  onChange,
  onFocus,
  onInput,
  onKeyDown,
  options,
  placeholder,
  required,
  sortFn,
  type,
  value,
  hiddenLabel,
  showButton,
  name,
  minLength,
  maxLength,
  pattern,
  readOnly,
  dir,
  invalid,
  inputRequired,
  size,
  ...props
}: SelectComboboxProps) => {
  let textboxRef: RefObject<HTMLInputElement | null> | undefined = undefined;
  let textboxPropsRef: RefObject<HTMLInputElement | null> | undefined = undefined;

  const [items, setItems] = useState(Array.isArray(options) ? [...options] : []);
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
    initialIsOpen: defaultExpanded,
    initialInputValue: value ? String(value) : defaultValue ? String(defaultValue) : undefined,
    onInputValueChange({ inputValue }) {
      let filteredOptions = options || [];

      if (inputValue) {
        filteredOptions = filteredOptions.filter((option) => filterFn(inputValue, option));
      }

      if (sortFn) {
        filteredOptions.sort(sortFn);
      }

      setItems(filteredOptions);
    },
    items,
    itemToString(item) {
      // FIXME: Find a way to get the text content
      return item ? String(item.children) : '';
    },
    onSelectedItemChange: () => {
      if (textboxRef?.current) {
        const evt = new CustomEvent('change', {
          detail: {
            name: 'dog',
          },
        });
        textboxRef.current.dispatchEvent(evt);
        console.log(`Dispatched "${evt.type}" event`, evt);

        if (onChange) {
          onChange(evt as any);
        }
      }
    },
  });

  const textboxProps = getInputProps({ disabled });
  textboxRef = useRef<HTMLInputElement>(null);
  textboxPropsRef = (textboxProps as any as ActualTextboxProps).ref;
  const menuProps = getMenuProps<{}>();
  const inputId = id || useId();
  const toggleButtonId = `${inputId}-toggle-button}`;
  const menuId = `${inputId}-listbox}`;
  const labelId = `${inputId}-label}`;
  const autocompleteType = 'list';
  const isExpanded = (isOpen && !readOnly && !disabled) || expanded;

  /* The following properties for `Textbox` are probably not needed in `SelectCombobox`:
   *
   * - `min`
   * - `max`
   * - `list`
   * - `step`
   */
  return (
    <ComboboxStructure
      expanded={isExpanded}
      input={
        <>
          {hiddenLabel ? (
            <label id={labelId} hidden {...getLabelProps()}>
              {hiddenLabel}
            </label>
          ) : null}
          <Textbox
            {...textboxProps}
            onChange={(evt) => {
              if (textboxProps.onChange) {
                textboxProps.onChange(evt);
              }
              if (onChange) {
                onChange(evt);
              }
            }}
            onInput={(evt) => {
              if (textboxProps.onInput) {
                textboxProps.onInput(evt);
              }
              if (onInput) {
                onInput(evt);
              }
            }}
            onFocus={onFocus}
            onBlur={(evt) => {
              if (textboxProps.onBlur) {
                textboxProps.onBlur(evt);
              }
              if (onBlur) {
                onBlur(evt);
              }
            }}
            onKeyDown={(evt) => {
              if (textboxProps.onKeyDown) {
                textboxProps.onKeyDown(evt);
              }
              if (onKeyDown) {
                onKeyDown(evt);
              }
            }}
            ref={(el: HTMLInputElement) => {
              textboxRef.current = el;
              textboxPropsRef.current = el;
            }}
            type={type}
            placeholder={placeholder}
            required={required}
            id={inputId}
            role="combobox"
            aria-controls={menuId}
            aria-autocomplete={autocompleteType}
            aria-expanded={isExpanded ? 'true' : 'false'}
            autoComplete="off"
            name={name}
            invalid={invalid}
            dir={dir}
            disabled={disabled}
            minLength={minLength}
            maxLength={maxLength}
            pattern={pattern}
            readOnly={readOnly}
            inputRequired={inputRequired}
            defaultValue={defaultValue}
            size={size}
          />
          {showButton ? (
            <Button
              {...getToggleButtonProps()}
              id={toggleButtonId}
              appearance="subtle"
              tabIndex={-1}
              aria-expanded={isExpanded ? 'true' : 'false'}
              aria-controls={menuId}
              aria-labelledby={clsx(toggleButtonId, inputId)}
              disabled={disabled || readOnly}
            >
              {isOpen ? 'Close' : 'Open'}
            </Button>
          ) : null}
        </>
      }
      Popover={({ ...popoverProps }, _ref: any) => {
        return (
          <ListboxWithOptions
            options={items.map((option, index) => ({
              active: highlightedIndex === index,
              selected: selectedItem === option,
              ...option,
              ...getItemProps({ index, item: option }),
            }))}
            {...menuProps}
            {...popoverProps}
            disabled={disabled || readOnly}
            aria-labelledby={labelId}
            id={menuId}
          />
        );
      }}
      {...props}
    />
  );
};

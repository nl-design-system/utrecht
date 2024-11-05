import { Textbox } from '@utrecht/textbox-react';
import type { TextboxProps } from '@utrecht/textbox-react';
import Downshift from 'downshift';
import { useId } from 'react';
import { ComboboxStructure } from './ComboboxStructure';
import { ListboxOptionProps, ListboxWithOptions, ListboxWithOptionsProps } from './ListboxWithOptions';

type FilterFn = (inputValue: string, option: ListboxOptionProps) => boolean;

type SortFn = (a: ListboxOptionProps, b: ListboxOptionProps) => number;

const defaultFilterFn: FilterFn = (inputValue: string, option: ListboxOptionProps) =>
  String(option.value).toLowerCase().includes(inputValue.toLowerCase());

export interface ComboboxProps extends TextboxProps, Pick<ListboxWithOptionsProps, 'options'> {
  defaultExpanded?: boolean;
  expanded?: boolean;
  filterFn?: FilterFn;
  sortFn?: SortFn;
}

const getTextboxProps = ({ defaultValue }: { [index: string]: any } & TextboxProps): TextboxProps => ({
  defaultValue,
});

export const SelectCombobox = ({
  defaultValue,
  defaultExpanded,
  disabled,
  expanded,
  options,
  required,
  value,
  filterFn = defaultFilterFn,
  sortFn,
  id,
  ...props
}: ComboboxProps) => {
  const textboxProps = getTextboxProps(props);
  const _id = id || useId();
  const _labelId = undefined; //= useId();
  const _inputId = undefined; // = useId();
  const _menuId = undefined; // = useId();
  return (
    <Downshift
      itemToString={(option) => {
        return option === null
          ? ''
          : !!option && typeof option === 'object' && typeof option?.value === 'string'
          ? option.value
          : String(option);
      }}
      initialInputValue={typeof defaultValue !== 'undefined' ? String(defaultValue) : undefined}
      initialIsOpen={defaultExpanded || expanded}
      inputValue={typeof value !== 'undefined' ? String(value) : undefined}
      id={_id}
      labelId={_labelId}
      inputId={_inputId}
      menuId={_menuId}
    >
      {({
        getInputProps,
        getMenuProps,
        getItemProps,
        getRootProps,
        selectedItem,
        highlightedIndex,
        isOpen,
        inputValue,
      }) => {
        let filteredOptions = options || [];

        if (inputValue) {
          filteredOptions = filteredOptions.filter((option) => filterFn(inputValue, option));
        }

        if (sortFn) {
          filteredOptions.sort(sortFn);
        }

        return (
          <ComboboxStructure
            {...getRootProps()}
            expanded={isOpen || expanded}
            input={<Textbox required={required} {...getInputProps({ disabled })} {...textboxProps} />}
            Popover={({ ...popoverProps }, _ref: any) => {
              return (
                <ListboxWithOptions
                  options={filteredOptions.map((option, index) => ({
                    active: highlightedIndex === index,
                    selected: selectedItem === option,
                    ...option,
                    ...getItemProps({ index, item: option }),
                  }))}
                  {...getMenuProps<{}>()}
                  {...popoverProps}
                />
              );
            }}
            {...props}
          />
        );
      }}
    </Downshift>
  );
};

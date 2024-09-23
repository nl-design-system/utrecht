import {
  Combobox,
  FormField,
  FormLabel,
  Listbox,
  ListboxOption,
  ListboxOptionGroup,
  Textbox,
} from '@utrecht/component-library-react/dist/css-module/index';
import clsx from 'clsx';
import React, { PropsWithChildren, ReactNode } from 'react';

export interface ComboboxStoryProps {
  id: string;
  name?: string;
  activeId?: string;
  popoverId?: string;
  label?: string;
  placeholder?: string;
  expanded?: boolean;
  defaultValue?: string;
  position?: string;
  options: {
    id: string;
    label: ReactNode;
    active?: boolean;
    selected?: boolean;
    value?: any;
    options?: {
      id: string;
      label: ReactNode;
      active?: boolean;
      selected?: boolean;
      value?: any;
    }[];
  }[];
}
interface ComboboxPopoverProps {
  expanded?: boolean;
  position?: string;
}
const ComboboxTextbox = ({ ...restProps }) => <Textbox className="utrecht-combobox__input" {...restProps} />;

const ComboboxListboxPopover = ({
  expanded,
  position,
  ...restProps
}: PropsWithChildren<{ expanded?: boolean } & ComboboxPopoverProps>) => (
  <Listbox
    className={clsx('utrecht-combobox__popover', {
      'utrecht-combobox__popover--block-end': !position || position === 'block-end',
      'utrecht-combobox__popover--block-start': position === 'block-start',
      'utrecht-combobox__popover--hidden': !expanded,
    })}
    hidden={!expanded}
    tabIndex={-1}
    {...restProps}
  />
);

export const ComboboxStory = ({
  id,
  activeId,
  options,
  expanded,
  popoverId,
  label,
  placeholder,
  defaultValue,
  position,
}: ComboboxStoryProps) => {
  const flatOptions = options.reduce(
    (arr: { active?: boolean; id: string }[], item) =>
      Array.isArray(item.options) ? [...arr, ...item.options] : [...arr, item],
    [],
  );
  return (
    <FormField
      label={<FormLabel htmlFor={id}>{label}</FormLabel>}
      input={
        <Combobox>
          <ComboboxTextbox
            id={id}
            autoComplete="off"
            aria-autocomplete="list"
            aria-haspopup="listbox"
            aria-label={label || undefined}
            placeholder={placeholder || undefined}
            aria-activedescendant={flatOptions.find(({ active }) => active)?.id}
            aria-controls={popoverId}
            defaultValue={defaultValue}
          />
          {Array.isArray(options) && (
            <ComboboxListboxPopover expanded={expanded} id={popoverId} position={position}>
              {
                options.reduce(
                  (result: { list: ReactNode[]; itemIndex: number }, group) => {
                    if (group.options && Array.isArray(group.options)) {
                      result.list.push(
                        <ListboxOptionGroup key={group.id} label={group?.label}>
                          {group.options.map((item) => {
                            result.itemIndex++;
                            return (
                              <ListboxOption
                                active={item.active || (!!activeId && item.id === activeId)}
                                key={item.id}
                                id={item.id}
                                selected={item.selected}
                              >
                                {item.label}
                              </ListboxOption>
                            );
                          })}
                        </ListboxOptionGroup>,
                      );
                    } else {
                      result.list.push(
                        <ListboxOption
                          active={group.active || (!!activeId && group.id === activeId)}
                          key={group.id}
                          id={group.id}
                          selected={group.selected}
                        >
                          {group.label}
                        </ListboxOption>,
                      );
                    }

                    return result;
                  },
                  { list: [], itemIndex: 0 },
                ).list
              }
            </ComboboxListboxPopover>
          )}
        </Combobox>
      }
    ></FormField>
  );
};

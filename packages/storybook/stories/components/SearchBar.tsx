import {
  Button,
  Combobox,
  Listbox,
  ListboxOption,
  ListboxOptionGroup,
  SearchBarFormField,
  Textbox,
} from '@utrecht/component-library-react/dist/css-module/index';
import clsx from 'clsx';
import React, { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';

export interface SearchBarComboboxStoryProps {
  buttonLabel?: string;
  formLabel?: string;
  name?: string;
  popoverId?: string;
  textboxLabel?: string;
  textboxPlaceholder?: string;
  expanded?: boolean;
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

const SearchBarTextbox = ({ ...restProps }) => (
  <Textbox type="search" className="utrecht-search-bar__input" spellCheck="false" {...restProps} />
);

const SearchBarCombobox = ({ ...restProps }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => (
  <Combobox className="utrecht-search-bar__combobox" {...restProps} />
);

const SearchBarButton = ({ ...restProps }) => (
  <Button type="submit" appearance="primary-action-button" className="utrecht-search-bar__button" {...restProps} />
);

const SearchBarListboxPopover = ({
  expanded,
  ...restProps
}: PropsWithChildren<{ expanded?: boolean } & HTMLAttributes<HTMLDivElement>>) => (
  <Listbox
    className={clsx('utrecht-search-bar__popover', 'utrecht-search-bar__popover--block-end')}
    hidden={!expanded}
    {...restProps}
  />
);

export const SearchBarComboboxStory = ({
  options,
  expanded,
  formLabel,
  popoverId,
  textboxLabel,
  textboxPlaceholder,
  buttonLabel,
}: SearchBarComboboxStoryProps) => {
  return (
    <form role="search" aria-label={formLabel || undefined}>
      <SearchBarFormField>
        <SearchBarCombobox>
          <SearchBarTextbox
            autoComplete="off"
            aria-autocomplete="list"
            aria-label={textboxLabel || undefined}
            placeholder={textboxPlaceholder || undefined}
            aria-controls={popoverId}
          />
          {Array.isArray(options) && (
            <SearchBarListboxPopover expanded={expanded} id={popoverId}>
              {
                options.reduce(
                  (result: { list: ReactNode[]; itemIndex: number }, group, groupIndex) => {
                    if (group.options && Array.isArray(group.options)) {
                      result.list.push(
                        <ListboxOptionGroup key={groupIndex} label={group?.label}>
                          {group.options.map((item, itemIndex) => {
                            result.itemIndex++;
                            return (
                              <ListboxOption active={item.active} selected={item.selected} key={itemIndex}>
                                {item.label}
                              </ListboxOption>
                            );
                          })}
                        </ListboxOptionGroup>,
                      );
                    } else {
                      result.list.push(
                        <ListboxOption active={group.active} selected={group.selected} key={groupIndex}>
                          {group.label}
                        </ListboxOption>,
                      );
                    }

                    return result;
                  },
                  { list: [], itemIndex: 0 },
                ).list
              }
            </SearchBarListboxPopover>
          )}
        </SearchBarCombobox>
        <SearchBarButton>{buttonLabel}</SearchBarButton>
      </SearchBarFormField>
    </form>
  );
};

export const SearchBarStory = ({
  formLabel,
  name,
  textboxLabel,
  textboxPlaceholder,
  buttonLabel,
}: SearchBarComboboxStoryProps) => {
  return (
    <form role="search" aria-label={formLabel || undefined}>
      <SearchBarFormField>
        <SearchBarTextbox
          aria-label={textboxLabel || undefined}
          name={name || undefined}
          placeholder={textboxPlaceholder || undefined}
        />
        <SearchBarButton>{buttonLabel}</SearchBarButton>
      </SearchBarFormField>
    </form>
  );
};

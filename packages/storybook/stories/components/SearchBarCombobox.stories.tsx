import type { Meta, StoryObj } from '@storybook/react';
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
import React, { PropsWithChildren, ReactNode } from 'react';

const spaceForPopover = (Story) => <div style={{ minBlockSize: '42em' }}>{Story()}</div>;

const exampleOptions = [
  {
    id: '1b21002d-1f33-484e-bd43-11159502c6d1',
    label: 'C',
    value: 1972,
  },
  {
    id: '9795886d-1d5a-4b8a-ac4d-fd0114c7e7f6',
    label: 'C++',
    value: 1983,
  },
  {
    id: '3b992d19-21a4-42c0-ab95-fd60b6f89011',
    label: 'Perl',
    value: 1987,
  },
];

const exampleOptionGroups = [
  {
    id: '15a6eabc-7b94-4965-8ee1-e2dc8f5a2282',
    label: '1970s',
    options: [
      {
        id: '1b21002d-1f33-484e-bd43-11159502c6d1',
        label: 'C',
        value: 1972,
      },
    ],
  },
  {
    id: 'e28e470a-f4bd-4293-a9a7-261dbc16c375',
    label: '1980s',
    options: [
      {
        id: '9795886d-1d5a-4b8a-ac4d-fd0114c7e7f6',
        label: 'C++',
        value: 1983,
      },
      {
        id: '3b992d19-21a4-42c0-ab95-fd60b6f89011',
        label: 'Perl',
        value: 1987,
      },
    ],
  },
];

interface SearchBarComboboxStoryProps {
  buttonLabel?: string;
  formLabel?: string;
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
  <Textbox type="search" autoComplete="off" className="utrecht-search-bar__input" {...restProps} />
);

const SearchBarCombobox = ({ ...restProps }) => <Combobox className="utrecht-search-bar__combobox" {...restProps} />;

const SearchBarButton = ({ ...restProps }) => (
  <Button type="submit" appearance="primary-action-button" className="utrecht-search-bar__button" {...restProps} />
);

const SearchBarListboxPopover = ({ expanded, ...restProps }: PropsWithChildren<{ expanded?: boolean }>) => (
  <Listbox
    className={clsx('utrecht-search-bar__popover', 'utrecht-search-bar__popover--block-end')}
    hidden={!expanded}
    {...restProps}
  />
);
const SearchBarComboboxStory = ({
  options,
  expanded,
  formLabel,
  textboxLabel,
  textboxPlaceholder,
  buttonLabel,
}: SearchBarComboboxStoryProps) => {
  return (
    <form role="search" aria-label={formLabel || undefined}>
      <SearchBarFormField>
        <SearchBarCombobox>
          <SearchBarTextbox aria-label={textboxLabel || undefined} placeholder={textboxPlaceholder || undefined} />
          {Array.isArray(options) && (
            <SearchBarListboxPopover expanded={expanded}>
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

const meta = {
  title: 'CSS Component/Search bar/Combobox',
  id: 'css-search-bar-combobox',
  component: SearchBarComboboxStory,
  tags: ['autodocs'],
  argTypes: {
    buttonLabel: {
      description: 'Button label',
      type: 'string',
    },
    expanded: {
      description: 'Expanded',
      type: 'boolean',
    },
    formLabel: {
      description: 'Form label',
      type: 'string',
    },
    options: {
      description: 'Options',
      control: 'select',
      options: {
        '': undefined,
        empty: [],
        '3 options': exampleOptions,
        '2 option groups': exampleOptionGroups,
      },
    },
    textboxLabel: {
      description: 'Textbox label',
      type: 'string',
    },
    textboxPlaceholder: {
      description: 'Textbox placeholder text',
      type: 'string',
    },
  },
  args: {
    buttonLabel: '',
    expanded: false,
    textboxLabel: '',
    textboxPlaceholder: '',
    options: [],
  },
  decorators: [spaceForPopover],
} satisfies Meta<typeof SearchBarComboboxStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonLabel: 'Zoeken',
    formLabel: 'zoeken in Utrecht.nl',
  },
};

export const Options: Story = {
  args: {
    buttonLabel: 'Zoeken',
    formLabel: 'zoeken in Utrecht.nl',
    expanded: true,
    options: exampleOptions,
  },
};

export const OptionGroup: Story = {
  args: {
    buttonLabel: 'Zoeken',
    formLabel: 'zoeken in Utrecht.nl',
    expanded: true,
    options: exampleOptionGroups,
  },
};

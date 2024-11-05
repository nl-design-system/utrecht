import { Listbox, ListboxOption } from '@utrecht/listbox-react';
import { ForwardedRef, forwardRef, ReactNode } from 'react';

export interface ListboxOptionProps {
  data?: { [index: string]: any };
  disabled?: boolean;
  selected?: boolean;
  active?: boolean;
  value?: string;
  children?: ReactNode;
}

export interface ListboxWithOptionsProps {
  options: ListboxOptionProps[];
}

export const ListboxWithOptions = forwardRef(
  ({ options, ...props }: ListboxWithOptionsProps, ref: ForwardedRef<HTMLDivElement>) => (
    <Listbox {...props} ref={ref}>
      {options.map(({ value, ...option }, itemIndex) => {
        const { active, children, selected } = option;
        return (
          <ListboxOption {...option} active={active} selected={selected} key={itemIndex}>
            {children}
          </ListboxOption>
        );
      })}
    </Listbox>
  ),
);

ListboxWithOptions.displayName = 'ListboxWithOptions';

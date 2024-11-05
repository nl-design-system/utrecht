import { Combobox, ComboboxProps } from '@utrecht/combobox-react';
import clsx from 'clsx';
import { FC, ForwardedRef, forwardRef, ReactNode } from 'react';

export interface ComboboxStructureProps extends ComboboxProps {
  Input?: FC<any>;
  Popover?: FC<any>;

  expanded?: boolean;
  position?: string;
  input?: ReactNode;
}

export const ComboboxStructure = forwardRef(
  (
    { expanded, position, Input, Popover, input, ...props }: ComboboxStructureProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <Combobox {...props} ref={ref}>
        {input ? <div className="utrecht-combobox__input">{input}</div> : input}
        {Input && <Input />}
        {Popover && (
          <Popover
            className={clsx('utrecht-combobox__popover', {
              'utrecht-combobox__popover--block-end': !position || position === 'block-end',
              'utrecht-combobox__popover--block-start': position === 'block-start',
              'utrecht-combobox__popover--hidden': !expanded,
            })}
            hidden={!expanded}
            tabIndex={-1}
          />
        )}
      </Combobox>
    );
  },
);
ComboboxStructure.displayName = 'ComboboxStructure';

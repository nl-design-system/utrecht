import clsx from 'clsx';
import { ForwardedRef, forwardRef, OptionHTMLAttributes, PropsWithChildren, SelectHTMLAttributes } from 'react';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  invalid?: boolean;
}

export const Select = forwardRef(
  (
    { disabled, invalid, required, className, children, ...restProps }: PropsWithChildren<SelectProps>,
    ref: ForwardedRef<HTMLSelectElement>,
  ) => {
    const noscript = true;
    return (
      <select
        {...restProps}
        ref={ref}
        aria-invalid={invalid || undefined}
        disabled={disabled}
        required={noscript ? required : false}
        aria-required={noscript ? undefined : required} // Don't let it affect CSS :invalid
        className={clsx(
          'utrecht-select',
          disabled && 'utrecht-select--disabled',
          invalid && 'utrecht-select--invalid',
          required && 'utrecht-select--required',
          className,
        )}
      >
        {children}
      </select>
    );
  },
);

Select.displayName = 'Select';

export interface SelectOptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
  disabled?: boolean;
  invalid?: boolean;
  value?: string;
}

export const SelectOption = forwardRef(
  (
    { disabled, invalid, value, children, className, ...restProps }: PropsWithChildren<SelectOptionProps>,
    ref: ForwardedRef<HTMLOptionElement>,
  ) => {
    return (
      <option
        {...restProps}
        ref={ref}
        disabled={disabled}
        value={value}
        className={clsx(
          'utrecht-select__option',
          disabled && 'utrecht-select__option--disabled',
          invalid && 'utrecht-select__option--invalid',
          className,
        )}
      >
        {children}
      </option>
    );
  },
);

SelectOption.displayName = 'SelectOption';

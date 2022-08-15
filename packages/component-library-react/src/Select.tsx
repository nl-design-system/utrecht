import clsx from 'clsx';
import { ForwardedRef, forwardRef, OptionHTMLAttributes, PropsWithChildren, SelectHTMLAttributes } from 'react';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  invalid?: boolean;
  /**
   * `noscript`: Don't let it affect CSS :invalid
   */
  noscript?: boolean;
}

export const Select = forwardRef(
  (
    { invalid, required, className, noscript, children, ...restProps }: PropsWithChildren<SelectProps>,
    ref: ForwardedRef<HTMLSelectElement>,
  ) => {
    return (
      <select
        {...restProps}
        ref={ref}
        aria-invalid={invalid || undefined}
        required={noscript ? required : false}
        aria-required={noscript ? undefined : required}
        className={clsx(
          'utrecht-select',
          'utrecht-select--html-select',
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

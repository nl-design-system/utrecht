import clsx from 'clsx';
import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';

export type TextboxTypes =
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'month'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

export interface TextboxProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
  novalidate?: boolean;
  type?: TextboxTypes;
}

export const Textbox = forwardRef(
  (
    {
      disabled,
      invalid,
      readOnly,
      required,
      className,
      type = 'text',
      inputMode,
      novalidate = false,
      ...restProps
    }: TextboxProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => (
    <input
      {...restProps}
      ref={ref}
      type={type}
      className={clsx(
        'utrecht-textbox',
        'utrecht-textbox--html-input',
        disabled && 'utrecht-textbox--disabled',
        invalid && 'utrecht-textbox--invalid',
        readOnly && 'utrecht-textbox--readonly',
        required && 'utrecht-textbox--required',
        className,
      )}
      disabled={disabled}
      readOnly={readOnly}
      required={required && !novalidate ? required : undefined}
      aria-required={(required && novalidate) || undefined}
      aria-invalid={invalid || undefined}
      inputMode={inputMode || (type === 'number' ? 'numeric' : undefined)}
    />
  ),
);

Textbox.displayName = 'Textbox';

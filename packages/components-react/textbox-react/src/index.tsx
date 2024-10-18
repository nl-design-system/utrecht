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
  inputRequired?: boolean;
  invalid?: boolean;
  type?: string | TextboxTypes;
}

export const Textbox = forwardRef(
  (
    {
      dir,
      disabled,
      invalid,
      readOnly,
      required,
      inputRequired,
      className,
      type = 'text',
      inputMode,
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
        (required || inputRequired) && 'utrecht-textbox--required',
        className,
      )}
      dir={dir ?? 'auto'}
      disabled={disabled}
      readOnly={readOnly}
      aria-required={required ? required : undefined}
      required={inputRequired}
      aria-invalid={invalid || undefined}
      inputMode={inputMode || (type === 'number' ? 'numeric' : undefined)}
    />
  ),
);

Textbox.displayName = 'Textbox';

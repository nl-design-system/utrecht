import clsx from 'clsx';
import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
export type TextboxTypes = 'email' | 'number' | 'password' | 'tel' | 'text' | 'url';

export interface TextboxProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
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
      maxLength,
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
        required && 'utrecht-textbox--required',
        className,
      )}
      maxLength={maxLength}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      aria-invalid={invalid || undefined}
      inputMode={inputMode || (type === 'number' ? 'numeric' : undefined)}
    />
  ),
);

Textbox.displayName = 'utrecht-textbox';

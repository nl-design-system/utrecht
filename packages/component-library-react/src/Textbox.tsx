import clsx from 'clsx';
import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';

export type TextboxTypes = 'email' | 'number' | 'password' | 'tel' | 'text' | 'url';

interface TextboxProps extends InputHTMLAttributes<HTMLInputElement> {
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
        type === 'email' && 'utrecht-textbox--url',
        type === 'password' && 'utrecht-textbox--password',
        type === 'number' && 'utrecht-textbox--numeric',
        type === 'tel' && 'utrecht-textbox--numeric',
        type === 'url' && 'utrecht-textbox--url',
        inputMode === 'numeric' && 'utrecht-textbox--numeric',
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

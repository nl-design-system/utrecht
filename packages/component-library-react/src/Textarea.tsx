import clsx from 'clsx';
import { ForwardedRef, forwardRef, TextareaHTMLAttributes } from 'react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  inputRequired?: boolean;
  invalid?: boolean;
}

export const Textarea = forwardRef(
  (
    { dir, disabled, invalid, readOnly, required, inputRequired, className, ...restProps }: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>,
  ) => (
    <textarea
      {...restProps}
      ref={ref}
      className={clsx(
        'utrecht-textarea',
        'utrecht-textarea--html-textarea',
        disabled && 'utrecht-textarea--disabled',
        invalid && 'utrecht-textarea--invalid',
        readOnly && 'utrecht-textarea--readonly',
        (inputRequired || required) && 'utrecht-textarea--required',
        className,
      )}
      dir={dir ?? 'auto'}
      disabled={disabled}
      readOnly={readOnly}
      aria-required={required ? required : undefined}
      required={inputRequired}
      aria-invalid={invalid || undefined}
    />
  ),
);

Textarea.displayName = 'Textarea';

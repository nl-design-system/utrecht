import clsx from 'clsx';
import { ForwardedRef, forwardRef, TextareaHTMLAttributes } from 'react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
  novalidate?: boolean;
}

export const Textarea = forwardRef(
  (
    { disabled, invalid, readOnly, required, className, novalidate = false, ...restProps }: TextareaProps,
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
        required && 'utrecht-textarea--required',
        className,
      )}
      disabled={disabled}
      readOnly={readOnly}
      required={required && !novalidate ? required : undefined}
      aria-required={(required && novalidate) || undefined}
      aria-invalid={invalid || undefined}
    />
  ),
);

Textarea.displayName = 'Textarea';

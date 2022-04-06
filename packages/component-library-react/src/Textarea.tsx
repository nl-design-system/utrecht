import clsx from 'clsx';
import { ForwardedRef, forwardRef, TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

export const Textarea = forwardRef(
  (
    { disabled, invalid, readOnly, required, className, ...restProps }: TextareaProps,
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
      required={required}
      aria-invalid={invalid || undefined}
    />
  ),
);

Textarea.displayName = 'utrecht-textarea';

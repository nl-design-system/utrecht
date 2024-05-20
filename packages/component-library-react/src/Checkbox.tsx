import clsx from 'clsx';
import { ForwardedRef, forwardRef, InputHTMLAttributes, useEffect, useImperativeHandle, useRef } from 'react';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'readOnly'> {
  appearance?: string;
  indeterminate?: boolean;
  invalid?: boolean;
  inputRequired?: boolean;
}

export const Checkbox = forwardRef(
  (
    {
      appearance = 'custom',
      disabled,
      indeterminate = false,
      inputRequired,
      invalid,
      required,
      className,
      ...restProps
    }: CheckboxProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    // What's the correct way to use useRef and forwardRef together?
    // https://stackoverflow.com/a/68163315

    // `indeterminate` is has no TypeScript definition in React.
    // `indeterminate` renders an attribute, not a property in React.
    let internalRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => internalRef.current!);

    useEffect(() => {
      if (internalRef.current) {
        internalRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    return (
      <input
        {...restProps}
        ref={internalRef}
        type="checkbox"
        className={clsx(
          'utrecht-checkbox',
          'utrecht-checkbox--html-input',
          {
            'utrecht-checkbox--disabled': disabled,
            'utrecht-checkbox--custom': appearance === 'custom',
            'utrecht-checkbox--invalid': invalid,
            'utrecht-checkbox--indeterminate': indeterminate,
            'utrecht-checkbox--required': required || inputRequired,
          },
          className,
        )}
        aria-checked={indeterminate ? 'mixed' : undefined}
        aria-invalid={invalid || undefined}
        aria-required={required ? required : undefined}
        disabled={disabled}
        required={inputRequired}
      />
    );
  },
);

Checkbox.displayName = 'Checkbox';

import clsx from 'clsx';
import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';

export interface FormToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'readOnly'> {
  invalid?: boolean;
}

export const FormToggle = forwardRef(
  (
    { checked, disabled, invalid, id, hidden, required, role, tabIndex, className, ...restProps }: FormToggleProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => (
    <div
      className={clsx(
        'utrecht-form-toggle',
        'utrecht-form-toggle--html-checkbox',
        {
          'utrecht-form-toggle--disabled': disabled,
          'utrecht-form-toggle--invalid': invalid,
          'utrecht-form-toggle--required': required,
        },
        className,
      )}
      hidden={hidden}
    >
      <input
        id={id}
        aria-invalid={invalid || undefined}
        type="checkbox"
        className="utrecht-form-toggle__checkbox"
        defaultChecked={checked || undefined}
        disabled={disabled || undefined}
        required={required}
        ref={ref}
        role={role}
        tabIndex={tabIndex}
        {...restProps}
      />
      <label htmlFor={id} className={clsx('utrecht-form-toggle__track', 'utrecht-form-toggle__track--html-label')}>
        <div className="utrecht-form-toggle__thumb"></div>
      </label>
    </div>
  ),
);

FormToggle.displayName = 'FormToggle';

import clsx from 'clsx';
import React from 'react';

interface FormToggleDivProps {
  checked?: boolean;
  disabled?: boolean;
  hover?: boolean;
  focus?: boolean;
  focusVisible?: boolean;
}

const FormToggleDiv = ({ checked, disabled, hover, focus, focusVisible, ...restProps }: FormToggleDivProps) => (
  <div
    className={clsx(
      'utrecht-form-toggle',
      'utrecht-form-toggle--html-div',
      checked && 'utrecht-form-toggle--checked',
      !checked && 'utrecht-form-toggle--not-checked',
      disabled && 'utrecht-form-toggle--disabled',
      focus && 'utrecht-form-toggle--focus',
      focusVisible && 'utrecht-form-toggle--focus-visible',
      hover && 'utrecht-form-toggle--hover',
    )}
    role="switch"
    tabIndex={0}
    aria-checked={checked || null}
    aria-disabled={disabled || null}
    {...restProps}
  >
    <div
      className={clsx(
        'utrecht-form-toggle__track',
        checked && 'utrecht-form-toggle__track--checked',
        !checked && 'utrecht-form-toggle__track--not-checked',
        disabled && 'utrecht-form-toggle__track--disabled',
      )}
    >
      <div
        className={clsx(
          'utrecht-form-toggle__thumb',
          checked && 'utrecht-form-toggle__thumb--checked',
          !checked && 'utrecht-form-toggle__thumb--not-checked',
          disabled && 'utrecht-form-toggle__thumb--disabled',
        )}
      ></div>
    </div>
  </div>
);

interface FormToggleCheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  id?: string;
}

const FormToggleCheckbox = ({ checked, disabled, id }: FormToggleCheckboxProps) => (
  <div className={clsx('utrecht-form-toggle', 'utrecht-form-toggle--html-checkbox')}>
    <input
      id={id}
      type="checkbox"
      className="utrecht-form-toggle__checkbox"
      defaultChecked={checked || null}
      disabled={disabled || null}
    />
    <label htmlFor={id} className={clsx('utrecht-form-toggle__track')}>
      <div className={clsx('utrecht-form-toggle__thumb')}></div>
    </label>
  </div>
);

export const FormToggleStory = ({
  element,
  ...restProps
}: FormToggleCheckboxProps & FormToggleDivProps & { element?: string }) =>
  element === 'div' ? <FormToggleDiv {...restProps} /> : <FormToggleCheckbox {...restProps} />;

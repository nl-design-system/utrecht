import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import { FormFieldDescription } from './FormFieldDescription';
import { FormLabel } from './FormLabel';
import { Textbox } from './Textbox';

type ValidationTypes = {
  state: 'invalid' | 'valid' | 'warning';
  message: string;
  id: string;
};

type DescriptionTypes = {
  id: string;
  message: string;
};

type LabelTypes = {
  htmlFor: string;
  disabled?: boolean;
  text: string;
};

export interface TextboxFormFieldProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @property
   *  ```jsx
   *    invalid?: boolean
   *  ```
   * @example
   * ```jsx
   *  <TextboxFormField invalid={true} />
   *
   * ```
   * */
  invalid?: boolean;
  /**
   * @property
   *  ```jsx
   * label={{
   *  htmlFor: string;
   *  disabled?: boolean;
   *  text: string;
   *  }}
   *  ```
   * @description
   * Represents a caption for an item in a user interface.
   * [reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
   * @example
   * ```jsx
   *  <TextboxFormField label={{
   *    htmlFor: "the textbox id",
   *    disabled: "optional",
   *    text="Label content",
   *     }}
   * />
   * ```
   * */
  label?: LabelTypes;
  /**
   *
   * @property
   *  ```jsx
   * description={{
   *  id: string;
   *  message: string;
   *  }}
   *  ```
   * @description
   * Gives context about a field’s input
   * @example
   * ```jsx
   *  <TextboxFormField description={{
   *    id: "the id should be connected to the textbox element by `aria-describedby`",
   *    message="Helper text appear below the textbox",
   *    }}
   *  />
   * ```
   * */
  description?: DescriptionTypes;
  /**
   *
   * @property
   *  ```jsx
   * validation={{
   *  state: 'invalid' | 'valid' | 'warning';
   *  id: string;
   *  message: string;
   *   }}
   *  ```
   * @description
   * Gives context about a field’s input validation messages
   * @example
   * ```jsx
   *  <TextboxFormField validation={{
   *    id: "the id should be connected to the textbox element by `aria-describedby`",
   *    state: "invalid",
   *    message="Helper text appear below the textbox",
   *    }}
   *  />
   * ```
   * */
  validation?: ValidationTypes;
}

export const TextboxFormField = forwardRef(
  (
    {
      children,
      className,
      defaultValue,
      description,
      disabled,
      id,
      invalid,
      inputMode,
      name,
      novalidate,
      onChange,
      onInput,
      onBlur,
      onFocus,
      readOnly,
      label,
      required,
      type,
      validation,
      value,
      ...restProps
    }: PropsWithChildren<TextboxFormFieldProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div
      {...restProps}
      className={clsx(
        'utrecht-form-field',
        {
          'utrecht-form-field--invalid': invalid,
        },
        className,
      )}
    >
      {label && label.text && label.htmlFor && (
        <p className={clsx('utrecht-form-field__label')}>
          <FormLabel htmlFor={label.htmlFor} disabled={label.disabled}>
            {label.text}
          </FormLabel>
        </p>
      )}
      {children ? (
        children
      ) : (
        <Textbox
          defaultValue={defaultValue}
          disabled={disabled}
          id={id}
          onChange={onChange}
          onInput={onInput}
          onBlur={onBlur}
          onFocus={onFocus}
          inputMode={inputMode}
          name={name}
          novalidate={novalidate}
          ref={ref}
          readOnly={readOnly}
          required={required}
          type={type}
        />
      )}
      {description && <FormFieldDescription id={description.id}>{description.message}</FormFieldDescription>}
      {validation && validation.message && (
        <FormFieldDescription
          id={validation.id}
          invalid={validation.state === 'invalid'}
          valid={validation.state === 'valid'}
          warning={validation.state === 'warning'}
        >
          {validation.message}
        </FormFieldDescription>
      )}
    </div>
  ),
);

TextboxFormField.displayName = 'TextboxFormField';

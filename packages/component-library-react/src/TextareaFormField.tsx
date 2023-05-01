import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import { FormFieldDescription } from './FormFieldDescription';
import { FormLabel } from './FormLabel';

type ValidationTypes = {
  state: 'invalid' | 'valid' | 'warning';
  message: string;
  id: string;
  className?: string;
};

type DescriptionTypes = {
  id: string;
  message: string;
  className?: string;
};

type LabelTypes = {
  htmlFor: string;
  disabled?: boolean;
  text: string;
  className?: string;
};

export interface TextareaFormFieldProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @property
   *  ```jsx
   *    invalid?: boolean
   *  ```
   * @example
   * ```jsx
   *  <TextareaFormField invalid={true} />
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
   *  className?: string;
   *  text: string;
   *  }}
   *  ```
   * @description
   * Represents a caption for an item in a user interface.
   * [reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
   * @example
   * ```jsx
   *  <TextareaFormField label={{
   *    htmlFor: "the textarea id",
   *    disabled: "optional",
   *    text="Label content",
   *    className="modifier CSS class"
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
   *  className?: string;
   *  }}
   *  ```
   * @description
   * Gives context about a field’s input
   * @example
   * ```jsx
   *  <TextareaFormField description={{
   *    id: "the id should be connected to the textarea element by `aria-describedby`",
   *    message="Helper text appear below the textarea",
   *    className="modifier CSS class"
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
   *  className?: string;
   *   }}
   *  ```
   * @description
   * Gives context about a field’s input validation messages
   * @example
   * ```jsx
   *  <TextareaFormField validation={{
   *    id: "the id should be connected to the textarea element by `aria-describedby`",
   *    state: "invalid",
   *    message="Helper text appear below the textarea",
   *    className="modifier CSS class"
   *    }}
   *  />
   * ```
   * */
  validation?: ValidationTypes;
}

export const TextareaFormField = forwardRef(
  (
    {
      className,
      children,
      invalid,
      label,
      description,
      validation,
      ...restProps
    }: PropsWithChildren<TextareaFormFieldProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div
      {...restProps}
      ref={ref}
      className={clsx(
        'utrecht-form-field',
        {
          'utrecht-form-field--invalid': invalid,
        },
        className,
      )}
    >
      {label && label.text && label.htmlFor && (
        <p className={clsx('utrecht-form-field__label-text')}>
          <FormLabel className={clsx(label.className)} htmlFor={label.htmlFor} disabled={label.disabled}>
            {label.text}
          </FormLabel>
        </p>
      )}
      {children}
      {description && (
        <FormFieldDescription className={clsx(description.className)} id={description.id}>
          {description.message}
        </FormFieldDescription>
      )}
      {validation && validation.message && (
        <FormFieldDescription
          id={validation.id}
          invalid={validation.state === 'invalid'}
          valid={validation.state === 'valid'}
          warning={validation.state === 'warning'}
          className={clsx(validation.className)}
        >
          {validation.message}
        </FormFieldDescription>
      )}
    </div>
  ),
);

TextareaFormField.displayName = 'TextareaFormField';

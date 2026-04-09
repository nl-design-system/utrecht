import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, InputHTMLAttributes, ReactNode } from 'react';
export type TextboxTypes =
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'month'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

export interface TextboxProps extends InputHTMLAttributes<HTMLInputElement> {
  inputRequired?: boolean;
  invalid?: boolean;
  type?: string | TextboxTypes;
}

export const Textbox = forwardRef(
  (
    {
      dir,
      disabled,
      invalid,
      readOnly,
      required,
      inputRequired,
      className,
      type = 'text',
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
        (required || inputRequired) && 'utrecht-textbox--required',
        className,
      )}
      dir={dir ?? 'auto'}
      disabled={disabled}
      readOnly={readOnly}
      aria-required={required ? required : undefined}
      required={inputRequired}
      aria-invalid={invalid || undefined}
      inputMode={inputMode || (type === 'number' ? 'numeric' : undefined)}
    />
  ),
);

Textbox.displayName = 'Textbox';

export interface TextboxContainerProps extends HTMLAttributes<HTMLSpanElement> {
  leading?: ReactNode;
}

export const TextboxContainer = forwardRef(
  ({ className, leading, ...restProps }: TextboxContainerProps, ref: ForwardedRef<HTMLSpanElement>) => (
    <span {...restProps} ref={ref} className={clsx('utrecht-textbox-container', className)}>
      {leading ? <span className="utrecht-textbox-container__leading">{leading}</span> : null}
    </span>
  ),
);

TextboxContainer.displayName = 'TextboxContainer';

export const TextboxInput = forwardRef(
  (
    {
      dir,
      disabled,
      invalid,
      readOnly,
      required,
      inputRequired,
      className,
      type = 'text',
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
        'utrecht-textbox-container__input',
        // 'utrecht-textbox--html-input',
        disabled && 'utrecht-textbox-container__input--disabled',
        invalid && 'utrecht-textbox-container__input--invalid',
        readOnly && 'utrecht-textbox-container__input--readonly',
        (required || inputRequired) && 'utrecht-textbox-container__input--required',
        className,
      )}
      dir={dir ?? 'auto'}
      disabled={disabled}
      readOnly={readOnly}
      aria-required={required ? required : undefined}
      required={inputRequired}
      aria-invalid={invalid || undefined}
      inputMode={inputMode || (type === 'number' ? 'numeric' : undefined)}
    />
  ),
);

TextboxInput.displayName = 'TextboxInput';

// TODO: if leading or trailing icons are present, wrap the input. If not render the OG textbox

export interface TextboxSpanProps extends TextboxContainerProps {
  leading?: ReactNode;
}

export interface TextboxInputProps extends TextboxProps {
  // TODO: shouldnt be here
  leading?: ReactNode;
}

export const Textbox2 = forwardRef(
  ({ leading, ...restProps }: TextboxSpanProps | TextboxInputProps, ref: ForwardedRef<HTMLElement>) => {
    if (leading) {
      return (
        <TextboxContainer {...restProps} leading={leading}>
          <TextboxInput {...restProps} ref={ref as any} />
        </TextboxContainer>
      );
    }

    return <TextboxInput {...restProps} ref={ref as any} />;
  },
);

Textbox2.displayName = 'Textbox2';

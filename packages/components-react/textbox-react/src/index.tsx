import clsx from 'clsx';
import {
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  useImperativeHandle,
  useRef,
} from 'react';
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

/**
 * TextboxContainer
 * Wrapper around a textbox input with optional leading and trailing elements.
 */
interface TextboxContainerOwnProps {
  leading?: ReactNode;
  trailing?: ReactNode;
}

export interface TextboxContainerProps extends HTMLAttributes<HTMLSpanElement>, TextboxContainerOwnProps {}

export const TextboxContainer = forwardRef<HTMLSpanElement, TextboxContainerProps>(
  ({ children, className, leading, trailing, ...restProps }: TextboxContainerProps, ref) => (
    <span {...restProps} ref={ref} className={clsx('utrecht-textbox-container', className)}>
      {leading ? <span className="utrecht-textbox-container__leading">{leading}</span> : null}
      {children}
      {trailing ? <span className="utrecht-textbox-container__trailing">{trailing}</span> : null}
    </span>
  ),
);

TextboxContainer.displayName = 'TextboxContainer';

/**
 * Textbox2
 */
export interface Textbox2Props extends InputHTMLAttributes<HTMLInputElement>, TextboxContainerOwnProps {
  inputRequired?: boolean;
  invalid?: boolean;
  type?: string | TextboxTypes;
}

export const Textbox2 = forwardRef<HTMLInputElement, Textbox2Props>(
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
      leading,
      trailing,
      ...restProps
    }: Textbox2Props,
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLSpanElement>(null);

    // Default ref behavior: point to the input element (backwards compatibility)
    useImperativeHandle(ref, () => inputRef.current!, []);

    const renderContainer = leading || trailing;

    const inputClasses = clsx(
      'utrecht-textbox',
      'utrecht-textbox--html-input',
      disabled && 'utrecht-textbox--disabled',
      invalid && 'utrecht-textbox--invalid',
      readOnly && 'utrecht-textbox--readonly',
      (required || inputRequired) && 'utrecht-textbox--required',
      className,
    );

    const inputClassesInContainer = clsx(
      'utrecht-textbox-container__input',
      (required || inputRequired) && 'utrecht-textbox-container__input--required',
      className,
    );

    const Input = (
      <input
        {...restProps}
        ref={inputRef}
        type={type}
        className={renderContainer ? inputClassesInContainer : inputClasses}
        dir={dir ?? 'auto'}
        disabled={disabled}
        readOnly={readOnly}
        aria-required={required ? required : undefined}
        required={inputRequired}
        aria-invalid={invalid || undefined}
        inputMode={inputMode || (type === 'number' ? 'numeric' : undefined)}
      />
    );

    if (renderContainer) {
      return (
        <TextboxContainer ref={containerRef} leading={leading} trailing={trailing}>
          {Input}
        </TextboxContainer>
      );
    }

    return Input;
  },
);

Textbox2.displayName = 'Textbox2';

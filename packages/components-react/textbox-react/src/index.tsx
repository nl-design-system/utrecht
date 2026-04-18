import clsx from 'clsx';
import {
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  PropsWithChildren,
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
  iconStart?: ReactNode;
  labelStart?: ReactNode;
  descriptionStart?: ReactNode;
  actionsStart?: ReactNode;
  iconEnd?: ReactNode;
  actionsEnd?: ReactNode;
  labelEnd?: ReactNode;
  descriptionEnd?: ReactNode;
  inputId?: string;
}

export interface TextboxContainerProps extends HTMLAttributes<HTMLSpanElement>, TextboxContainerOwnProps {}

export const TextboxContainer = forwardRef<HTMLSpanElement, TextboxContainerProps>(
  (
    {
      actionsEnd,
      actionsStart,
      children,
      className,
      iconStart,
      iconEnd,
      labelStart,
      labelEnd,
      descriptionStart,
      descriptionEnd,
      inputId,
      ...restProps
    }: TextboxContainerProps,
    ref,
  ) => {
    /** Use a `<label>` element to make the icons clickable, and clicking them focuses the `<input>`.
     * Use `<label aria-hidden="true">` to avoid associating the text content of the icon a label.
     */
    const ClickableWrapper = ({ children, ...restProps }: PropsWithChildren<{}>) =>
      inputId ? (
        <label htmlFor={inputId} {...restProps} aria-hidden="true">
          {children}
        </label>
      ) : (
        <span {...restProps}>{children}</span>
      );
    const LabelWrapper = ({ children, ...restProps }: PropsWithChildren<{}>) =>
      inputId ? (
        <label htmlFor={inputId} {...restProps}>
          {children}
        </label>
      ) : (
        <span {...restProps}>{children}</span>
      );

    return (
      <span {...restProps} className={clsx('utrecht-textbox-container', className)} ref={ref}>
        {iconStart ? (
          <ClickableWrapper className="utrecht-textbox-container__icon-start">{iconStart}</ClickableWrapper>
        ) : null}
        {labelStart ? (
          <LabelWrapper className="utrecht-textbox-container__label-start">{labelStart}</LabelWrapper>
        ) : null}
        {descriptionStart ? (
          <ClickableWrapper className="utrecht-textbox-container__description-start">
            {descriptionStart}
          </ClickableWrapper>
        ) : null}
        {actionsStart ? <span className="utrecht-textbox-container__actions-start">{actionsStart}</span> : null}
        {children}
        {actionsEnd ? <span className="utrecht-textbox-container__actions-end">{actionsEnd}</span> : null}
        {labelEnd ? <LabelWrapper className="utrecht-textbox-container__label-end">{labelEnd}</LabelWrapper> : null}
        {descriptionEnd ? (
          <ClickableWrapper className="utrecht-textbox-container__description-end">{descriptionEnd}</ClickableWrapper>
        ) : null}
        {iconEnd ? (
          <ClickableWrapper className="utrecht-textbox-container__icon-end">{iconEnd}</ClickableWrapper>
        ) : null}
      </span>
    );
  },
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
      className,
      actionsEnd,
      actionsStart,
      iconStart,
      iconEnd,
      labelStart,
      labelEnd,
      descriptionStart,
      descriptionEnd,
      ...restProps
    }: Textbox2Props,
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const containerInnerRef = useRef<HTMLSpanElement>(null);

    // Default ref behavior: point to the input element
    useImperativeHandle(ref, () => inputRef.current!, []);

    const renderContainer = !!(
      actionsEnd ||
      actionsStart ||
      iconStart ||
      iconEnd ||
      labelStart ||
      labelEnd ||
      descriptionStart ||
      descriptionEnd
    );
    // const inputClasses = clsx(
    //   'utrecht-textbox',
    //   'utrecht-textbox--html-input',
    //   disabled && 'utrecht-textbox--disabled',
    //   invalid && 'utrecht-textbox--invalid',
    //   readOnly && 'utrecht-textbox--readonly',
    //   (required || inputRequired) && 'utrecht-textbox--required',
    //   className,
    // );

    // const inputClassesInContainer = clsx(
    //   'utrecht-textbox-container__input',
    //   (required || inputRequired) && 'utrecht-textbox-container__input--required',
    // );

    const inputClasses = clsx('utrecht-textbox-sizing', className);
    const inputClassesInContainer = clsx('utrecht-textbox-container__input', className);

    // const Input = (
    //   <input
    //     {...restProps}
    //     ref={inputRef}
    //     type={type}
    //     className={renderContainer ? inputClassesInContainer : inputClasses}
    //     dir={dir ?? 'auto'}
    //     disabled={disabled}
    //     readOnly={readOnly}
    //     aria-required={required ? required : undefined}
    //     required={inputRequired}
    //     aria-invalid={invalid || undefined}
    //     inputMode={inputMode || (type === 'number' ? 'numeric' : undefined)}
    //   />
    // );

    if (renderContainer) {
      return (
        <TextboxContainer
          ref={containerInnerRef}
          inputId={restProps.id}
          {...{ actionsEnd, actionsStart, iconStart, iconEnd, labelStart, labelEnd, descriptionStart, descriptionEnd }}
        >
          <Textbox {...restProps} className={inputClassesInContainer} ref={inputRef} />
        </TextboxContainer>
      );
    }

    return <Textbox {...restProps} className={inputClasses} ref={inputRef} />;
  },
);

Textbox2.displayName = 'Textbox2';

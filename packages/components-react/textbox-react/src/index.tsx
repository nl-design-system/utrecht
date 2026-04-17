import clsx from 'clsx';
import {
  CSSProperties,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
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
  ({ children, className, leading, trailing, ...restProps }: TextboxContainerProps, ref) => {
    const leadingRef = useRef<HTMLSpanElement>(null);
    const trailingRef = useRef<HTMLSpanElement>(null);
    const containerInnerRef = useRef<HTMLSpanElement>(null);
    const resizeTimeoutRef = useRef<number | null>(null);
    const [leadingInlineSize, setLeadingInlineSize] = useState<string>('0px');
    const [trailingInlineSize, setTrailingInlineSize] = useState<string>('0px');

    const updateInlineSizes = () => {
      if (leadingRef.current) {
        const width = leadingRef.current.getBoundingClientRect().width;
        setLeadingInlineSize(`${width}px`);
      }
      if (trailingRef.current) {
        const width = trailingRef.current.getBoundingClientRect().width;
        setTrailingInlineSize(`${width}px`);
      }
    };

    const deBouncedOnResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      resizeTimeoutRef.current = window?.setTimeout(updateInlineSizes, 100);
    };

    useEffect(() => {
      updateInlineSizes();

      const resizeObserver = new ResizeObserver(deBouncedOnResize);

      if (containerInnerRef.current) {
        resizeObserver.observe(containerInnerRef.current);
      }

      // Cleanup
      return () => {
        resizeObserver.disconnect();
        if (resizeTimeoutRef.current) {
          clearTimeout(resizeTimeoutRef.current);
        }
      };
    }, [leading, trailing]);

    return (
      <span
        {...restProps}
        className={clsx('utrecht-textbox-container', className)}
        style={{
          ['--_utrecht-textbox-leading-inline-size-calculated' as keyof CSSProperties]: leadingInlineSize,
          ['--_utrecht-textbox-trailing-inline-size-calculated' as keyof CSSProperties]: trailingInlineSize,
        }}
        ref={ref}
      >
        <span className="utrecht-textbox-container__inner" ref={containerInnerRef}>
          {leading ? (
            <span ref={leadingRef} className="utrecht-textbox-container__leading">
              {leading}
            </span>
          ) : null}
          {children}
          {trailing ? (
            <span ref={trailingRef} className="utrecht-textbox-container__trailing">
              {trailing}
            </span>
          ) : null}
        </span>
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
  ({ className, leading, trailing, ...restProps }: Textbox2Props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const containerInnerRef = useRef<HTMLSpanElement>(null);

    // Default ref behavior: point to the input element
    useImperativeHandle(ref, () => inputRef.current!, []);

    const renderContainer = leading || trailing;

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
        <TextboxContainer ref={containerInnerRef} leading={leading} trailing={trailing}>
          <Textbox {...restProps} className={inputClassesInContainer} ref={inputRef} />
        </TextboxContainer>
      );
    }

    return <Textbox {...restProps} className={inputClasses} ref={inputRef} />;
  },
);

Textbox2.displayName = 'Textbox2';

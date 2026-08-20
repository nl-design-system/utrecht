/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import type { FocusEvent, KeyboardEvent as ReactKeyboardEvent, PointerEvent as ReactPointerEvent } from 'react';
import {
  createElement,
  FormHTMLAttributes,
  ForwardedRef,
  forwardRef,
  ReactNode,
  Ref,
  useEffect,
  useId,
  useState,
} from 'react';
import { Button } from './Button';
import { Textbox, TextboxProps } from './Textbox';

let headerSearchBarKeyboardModality = false;

const setHeaderSearchBarKeyboardModality = ({ key }: KeyboardEvent) => {
  if (key === 'Tab') {
    headerSearchBarKeyboardModality = true;
  }
};

const resetHeaderSearchBarKeyboardModality = () => {
  headerSearchBarKeyboardModality = false;
};

const headerSearchBarDefaultIcon = createElement(
  'utrecht-icon-search',
  { 'aria-hidden': true },
  createElement(
    'svg',
    {
      'aria-hidden': true,
      fill: 'currentColor',
      focusable: false,
      height: '1em',
      viewBox: '0 0 20 20',
      width: '1em',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    createElement('path', {
      d: 'M2 8c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6m6-8C3.58 0 0 3.58 0 8s3.58 8 8 8c1.85 0 3.55-.63 4.91-1.68l5.39 5.39a.996.996 0 1 0 1.41-1.41l-5.39-5.39A8.005 8.005 0 0 0 16 8c0-4.42-3.58-8-8-8',
      fillRule: 'evenodd',
    }),
  ),
);

export interface HeaderSearchBarProps
  extends Omit<
      FormHTMLAttributes<HTMLFormElement>,
      'autoComplete' | 'children' | 'name' | 'onBlur' | 'onChange' | 'onFocus' | 'onInput'
    >,
    Pick<
      TextboxProps,
      | 'autoComplete'
      | 'defaultValue'
      | 'disabled'
      | 'inputMode'
      | 'inputRequired'
      | 'invalid'
      | 'maxLength'
      | 'minLength'
      | 'name'
      | 'onBlur'
      | 'onChange'
      | 'onFocus'
      | 'onInput'
      | 'placeholder'
      | 'readOnly'
      | 'required'
      | 'value'
    > {
  buttonIcon?: ReactNode;
  buttonLabel?: ReactNode;
  buttonRef?: Ref<HTMLButtonElement>;
  inputDir?: TextboxProps['dir'];
  inputId?: string;
  inputLabel?: string;
  inputRef?: Ref<HTMLInputElement>;
}

export const HeaderSearchBar = forwardRef(
  (
    {
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      autoComplete,
      buttonIcon = headerSearchBarDefaultIcon,
      buttonLabel = 'Zoek',
      buttonRef,
      className,
      defaultValue,
      disabled,
      inputDir,
      inputId: definedInputId,
      inputLabel = 'Zoeken',
      inputMode,
      inputRef,
      inputRequired,
      invalid,
      maxLength,
      minLength,
      name,
      onBlur,
      onBlurCapture,
      onChange,
      onFocus,
      onFocusCapture,
      onInput,
      onKeyDownCapture,
      onPointerDownCapture,
      placeholder,
      readOnly,
      required,
      value,
      ...restProps
    }: HeaderSearchBarProps,
    ref: ForwardedRef<HTMLFormElement>,
  ) => {
    const generatedInputId = useId();
    const inputId = definedInputId || generatedInputId;
    const [focusVisible, setFocusVisible] = useState(false);

    useEffect(() => {
      window.addEventListener('keydown', setHeaderSearchBarKeyboardModality, true);
      window.addEventListener('mousedown', resetHeaderSearchBarKeyboardModality, true);
      window.addEventListener('pointerdown', resetHeaderSearchBarKeyboardModality, true);
      window.addEventListener('touchstart', resetHeaderSearchBarKeyboardModality, true);

      return () => {
        window.removeEventListener('keydown', setHeaderSearchBarKeyboardModality, true);
        window.removeEventListener('mousedown', resetHeaderSearchBarKeyboardModality, true);
        window.removeEventListener('pointerdown', resetHeaderSearchBarKeyboardModality, true);
        window.removeEventListener('touchstart', resetHeaderSearchBarKeyboardModality, true);
      };
    }, []);

    const handleFocusCapture = (event: FocusEvent<HTMLFormElement>) => {
      onFocusCapture?.(event);
      setFocusVisible(headerSearchBarKeyboardModality);
    };

    const handleBlurCapture = (event: FocusEvent<HTMLFormElement>) => {
      onBlurCapture?.(event);

      if (!event.currentTarget.contains(event.relatedTarget)) {
        setFocusVisible(false);
      }
    };

    const handleKeyDownCapture = (event: ReactKeyboardEvent<HTMLFormElement>) => {
      onKeyDownCapture?.(event);

      if (event.key === 'Tab') {
        headerSearchBarKeyboardModality = true;
        setFocusVisible(true);
      }
    };

    const handlePointerDownCapture = (event: ReactPointerEvent<HTMLFormElement>) => {
      onPointerDownCapture?.(event);
      resetHeaderSearchBarKeyboardModality();
      setFocusVisible(false);
    };

    return (
      <form
        {...restProps}
        ref={ref}
        className={clsx(
          'utrecht-header-search-bar',
          'utrecht-search-bar',
          'utrecht-search-bar--manual-focus-visible',
          disabled && 'utrecht-header-search-bar--disabled',
          focusVisible && 'utrecht-search-bar--focus-visible',
          invalid && 'utrecht-header-search-bar--invalid',
          readOnly && 'utrecht-header-search-bar--readonly',
          className,
        )}
        onBlurCapture={handleBlurCapture}
        onFocusCapture={handleFocusCapture}
        onKeyDownCapture={handleKeyDownCapture}
        onPointerDownCapture={handlePointerDownCapture}
        role="search"
        aria-label={ariaLabelledBy ? ariaLabel : ariaLabel || 'Zoeken op de website'}
        aria-labelledby={ariaLabelledBy}
      >
        <Textbox
          ref={inputRef}
          id={inputId}
          name={name}
          type="search"
          autoComplete={autoComplete}
          className={clsx('utrecht-header-search-bar__input', 'utrecht-search-bar__input')}
          defaultValue={defaultValue}
          dir={inputDir || 'auto'}
          disabled={disabled}
          inputMode={inputMode}
          inputRequired={inputRequired}
          invalid={invalid}
          maxLength={maxLength}
          minLength={minLength}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          onInput={onInput}
          placeholder={placeholder}
          readOnly={readOnly}
          required={required}
          value={value}
          aria-label={inputLabel}
        />
        <Button
          ref={buttonRef}
          type="submit"
          appearance="primary-action-button"
          className={clsx('utrecht-header-search-bar__button', 'utrecht-search-bar__button')}
          disabled={disabled}
          icon={
            buttonIcon ? (
              <span
                aria-hidden="true"
                className={clsx('utrecht-header-search-bar__button-icon', 'utrecht-search-bar__button-icon')}
              >
                {buttonIcon}
              </span>
            ) : undefined
          }
          label={buttonLabel}
        />
      </form>
    );
  },
);

HeaderSearchBar.displayName = 'HeaderSearchBar';

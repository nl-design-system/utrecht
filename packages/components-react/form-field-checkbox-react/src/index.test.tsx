import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { FormFieldCheckbox } from './index';
import '@testing-library/jest-dom';

describe('Form field with a checkbox', () => {
  const defaultProps = {
    name: 'check',
    label: 'I agree',
  };

  it('renders an HTML div element', () => {
    const { container } = render(<FormFieldCheckbox {...defaultProps} />);

    const field = container.querySelector('div');

    expect(field).toBeInTheDocument();
  });

  it('renders a design system BEM class name: utrecht-form-field', () => {
    const { container } = render(<FormFieldCheckbox {...defaultProps} />);

    const field = container.querySelector('div');

    expect(field).toHaveClass('utrecht-form-field');
  });

  it('renders a design system BEM modifier class name: utrecht-form-field--checkbox', () => {
    const { container } = render(<FormFieldCheckbox {...defaultProps} />);

    const field = container.querySelector('.utrecht-form-field');

    expect(field).toHaveClass('utrecht-form-field--checkbox');
  });

  it('displays as CSS block element (or equivalent)', () => {
    const { container } = render(<FormFieldCheckbox {...defaultProps} />);

    const field = container.querySelector('div');

    expect(field).toBeVisible();
    expect(field).not.toHaveStyle({ display: 'inline' });
    expect(field).not.toHaveStyle({ display: 'inline-block' });
  });

  it('renders rich text content', () => {
    const { container } = render(
      <FormFieldCheckbox {...defaultProps}>
        <hr />
      </FormFieldCheckbox>,
    );

    const richText = container.querySelector('hr');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<FormFieldCheckbox {...defaultProps} hidden />);

    const field = container.querySelector('div');

    expect(field).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<FormFieldCheckbox {...defaultProps} className="invalid" />);

    const field = container.querySelector('div');

    expect(field).toHaveClass('invalid');
  });

  it('can have a additional class name', () => {
    const { container } = render(<FormFieldCheckbox {...defaultProps} className="large" />);

    const field = container.querySelector(':only-child');

    expect(field).toHaveClass('large');
    expect(field).toHaveClass('utrecht-form-field');
  });

  describe('label', () => {
    it('renders a design system BEM class name: utrecht-form-field__label', () => {
      const { container } = render(<FormFieldCheckbox {...defaultProps} />);

      const field = container.querySelector('.utrecht-form-field__label');

      expect(field).toBeInTheDocument();
    });

    it('renders rich text content', () => {
      const { container } = render(
        <FormFieldCheckbox
          {...defaultProps}
          label={
            <>
              I can speak the <i lang="la">lingua franca</i>
            </>
          }
        />,
      );

      const richText = container.querySelector('i');

      expect(richText).toBeInTheDocument();
    });

    it('is associated with the checkbox', () => {
      render(<FormFieldCheckbox {...defaultProps} />);

      const checkbox = screen.getByRole('checkbox', { name: 'I agree' });

      expect(checkbox).toBeInTheDocument();
    });

    it('can be clicked to toggle the checkbox', () => {
      const labelRef = createRef<HTMLSpanElement>();

      render(<FormFieldCheckbox {...defaultProps} label={<span ref={labelRef}>I agree</span>} />);

      const checkbox = screen.getByRole('checkbox', { name: 'I agree' });

      expect(checkbox).not.toBeChecked();

      labelRef.current?.click();

      expect(checkbox).toBeChecked();

      labelRef.current?.click();

      expect(checkbox).not.toBeChecked();
    });
  });

  describe('description', () => {
    it('is not rendered by default', () => {
      const { container } = render(<FormFieldCheckbox {...defaultProps} />);

      const field = container.querySelector('.utrecht-form-field__description');

      expect(field).not.toBeInTheDocument();
    });

    it('renders a design system BEM class name: utrecht-form-field__description', () => {
      const { container } = render(
        <FormFieldCheckbox
          {...defaultProps}
          description="Lingua franca is a common language between groups of people."
        />,
      );

      const field = container.querySelector('.utrecht-form-field__description');

      expect(field).toBeInTheDocument();
    });

    it('renders rich text content', () => {
      const { container } = render(
        <FormFieldCheckbox
          {...defaultProps}
          description={
            <p>
              You are <strong>not</strong> required to agree.
            </p>
          }
        />,
      );

      const richText = container.querySelector('strong');

      expect(richText).toBeInTheDocument();
    });

    it('is associated with the checkbox', () => {
      const description = 'Lingua franca is a common language between groups of people.';

      render(<FormFieldCheckbox {...defaultProps} description={description} />);

      const checkbox = screen.getByRole('checkbox', { description });

      expect(checkbox).toBeInTheDocument();
    });
  });

  describe('error message', () => {
    it('is not rendered by default', () => {
      const { container } = render(<FormFieldCheckbox {...defaultProps} />);

      const field = container.querySelector('.utrecht-form-field__error-message');

      expect(field).not.toBeInTheDocument();
    });

    it('renders a design system BEM class name: utrecht-form-field__error-message', () => {
      const { container } = render(
        <FormFieldCheckbox {...defaultProps} invalid errorMessage="Check this required field to continue." />,
      );

      const field = container.querySelector('.utrecht-form-field__error-message');

      expect(field).toBeInTheDocument();
    });

    it('renders rich text content', () => {
      const { container } = render(
        <FormFieldCheckbox
          {...defaultProps}
          invalid
          errorMessage={
            <p>
              You <strong>required</strong> to agree.
            </p>
          }
        />,
      );

      const richText = container.querySelector('strong');

      expect(richText).toBeInTheDocument();
    });

    it('is associated with the checkbox', () => {
      const errorMessage = 'Check this required field to continue.';

      render(<FormFieldCheckbox {...defaultProps} invalid errorMessage={errorMessage} />);

      const checkbox = screen.getByRole('checkbox', { description: errorMessage });

      expect(checkbox).toBeInTheDocument();
    });
  });

  describe('input', () => {
    it('renders a checkbox role element', () => {
      render(<FormFieldCheckbox {...defaultProps} />);

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeInTheDocument();
    });

    it('renders a design system BEM class name: utrecht-form-field__input', () => {
      const { container } = render(<FormFieldCheckbox {...defaultProps} />);

      const field = container.querySelector('.utrecht-form-field__input');

      expect(field).toBeInTheDocument();
    });

    it('renders an HTML input type=checkbox element', () => {
      const { container } = render(<FormFieldCheckbox {...defaultProps} />);

      const checkbox = container.querySelector('input[type="checkbox"]');

      expect(checkbox).toBeInTheDocument();
    });

    // TypeScript definitions do not support `switch` yet
    /*
    it.skip('can render a switch role element', () => {
      render(<FormFieldCheckbox {...defaultProps} switch={true} />);

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeInTheDocument();
    });

    it.skip('can render a HTML switch input', () => {
      const { container } = render(<FormFieldCheckbox {...defaultProps} switch />);

      const checkbox = container.querySelector('input[type="checkbox"][switch]');

      expect(checkbox).toBeInTheDocument();
    });
    */
  });

  describe('status', () => {
    it('is not rendered by default', () => {
      const { container } = render(<FormFieldCheckbox {...defaultProps} />);

      const field = container.querySelector('.utrecht-form-field__status');

      expect(field).not.toBeInTheDocument();
    });

    it('renders a design system BEM class name: utrecht-form-field__status', () => {
      const { container } = render(<FormFieldCheckbox {...defaultProps} status="Saving..." />);

      const field = container.querySelector('.utrecht-form-field__status');

      expect(field).toBeInTheDocument();
    });

    it('renders rich text content', () => {
      const { container } = render(
        <FormFieldCheckbox
          {...defaultProps}
          status={
            <p>
              Saving <strong>failed</strong>. Please try again at a later time.
            </p>
          }
        />,
      );

      const richText = container.querySelector('strong');

      expect(richText).toBeInTheDocument();
    });
  });

  describe('change event', () => {
    it('can trigger a change event', () => {
      const handleChange = jest.fn();

      render(<FormFieldCheckbox {...defaultProps} onChange={handleChange} />);

      const checkbox = screen.getByRole('checkbox');

      checkbox?.click();

      expect(handleChange).toHaveBeenCalled();
    });

    it('does not trigger a change event when disabled', () => {
      const handleChange = jest.fn();

      render(<FormFieldCheckbox {...defaultProps} disabled onChange={handleChange} />);

      const checkbox = screen.getByRole('checkbox');

      checkbox?.click();

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('input event', () => {
    it('can trigger a input event', () => {
      const handleInput = jest.fn();

      render(<FormFieldCheckbox {...defaultProps} onInput={handleInput} />);

      const checkbox = screen.getByRole('checkbox');

      checkbox?.click();

      expect(handleInput).toHaveBeenCalled();
    });

    it('does not trigger a input event when disabled', () => {
      const handleInput = jest.fn();

      render(<FormFieldCheckbox {...defaultProps} disabled onInput={handleInput} />);

      const checkbox = screen.getByRole('checkbox');

      checkbox?.click();

      expect(handleInput).not.toHaveBeenCalled();
    });
  });

  describe('focus event', () => {
    it('can trigger a focus event', async () => {
      const handleFocus = jest.fn();

      render(<FormFieldCheckbox {...defaultProps} onFocus={handleFocus} />);

      const textbox = screen.getByRole('checkbox');

      expect(handleFocus).not.toHaveBeenCalled();

      textbox?.focus();

      expect(handleFocus).toHaveBeenCalled();
    });

    it('does not trigger a focus event when disabled', async () => {
      const handleFocus = jest.fn();

      render(<FormFieldCheckbox {...defaultProps} disabled onFocus={handleFocus} />);

      const textbox = screen.getByRole('checkbox');

      textbox?.focus();

      expect(handleFocus).not.toHaveBeenCalled();
    });
  });

  describe('blur event', () => {
    it('can trigger a blur event', async () => {
      const handleBlur = jest.fn();

      render(<FormFieldCheckbox {...defaultProps} onBlur={handleBlur} />);

      const textbox = screen.getByRole('checkbox');

      expect(handleBlur).not.toHaveBeenCalled();

      textbox?.focus();
      textbox?.blur();

      expect(handleBlur).toHaveBeenCalled();
    });

    it('does not trigger a blur event when disabled', async () => {
      const handleBlur = jest.fn();

      render(<FormFieldCheckbox {...defaultProps} disabled onBlur={handleBlur} />);

      const textbox = screen.getByRole('checkbox');

      textbox?.focus();
      textbox?.blur();

      expect(handleBlur).not.toHaveBeenCalled();
    });
  });

  describe('checked variant', () => {
    it('is not checked by default', () => {
      render(<FormFieldCheckbox {...defaultProps} />);

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).not.toBeChecked();
    });

    it('can have a checked state', () => {
      render(<FormFieldCheckbox {...defaultProps} defaultChecked />);

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeChecked();
    });

    it('can have a defaultChecked state (in React)', () => {
      render(<FormFieldCheckbox {...defaultProps} defaultChecked />);

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeChecked();
    });

    it('can have a checked state in CSS', () => {
      const handleChange = () => {};
      const { container } = render(<FormFieldCheckbox {...defaultProps} defaultChecked onChange={handleChange} />);

      const checkbox = container.querySelector(':checked');

      expect(checkbox).toBeInTheDocument();
    });

    describe('label', () => {
      it.skip('renders a design system BEM modifier class name: utrecht-form-label--checked', () => {
        const { container } = render(<FormFieldCheckbox {...defaultProps} defaultChecked />);

        const checkbox = container.querySelector('.utrecht-form-label--checked');

        expect(checkbox).toBeInTheDocument();
      });
    });
  });

  describe('invalid variant', () => {
    it('renders a design system BEM modifier class name: utrecht-form-field--invalid', () => {
      const { container } = render(<FormFieldCheckbox {...defaultProps} invalid />);

      const checkbox = container.querySelector('.utrecht-form-field');

      expect(checkbox).toHaveClass('utrecht-form-field--invalid');
    });

    it('renders a design system BEM modifier class name: utrecht-checkbox--invalid', () => {
      const { container } = render(<FormFieldCheckbox {...defaultProps} invalid />);

      const checkbox = container.querySelector('.utrecht-checkbox');

      expect(checkbox).toHaveClass('utrecht-checkbox--invalid');
    });

    it('is not invalid by default', () => {
      render(<FormFieldCheckbox {...defaultProps} />);

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).not.toBeInvalid();
    });

    it('omits non-essential invalid attributes when not invalid', () => {
      render(<FormFieldCheckbox {...defaultProps} invalid={false} />);

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).not.toBeInvalid();
      expect(checkbox).not.toHaveAttribute('aria-invalid');
    });

    it('can have an invalid state', () => {
      render(<FormFieldCheckbox {...defaultProps} invalid />);

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeInvalid();
    });

    it('can have a invalid state in CSS for inputRequired', () => {
      const { container } = render(<FormFieldCheckbox {...defaultProps} inputRequired defaultChecked={false} />);

      const checkbox = container.querySelector(':invalid');

      expect(checkbox).toBeInTheDocument();
    });
  });

  describe('disabled variant', () => {
    it('renders a design system BEM modifier class name', () => {
      const { container } = render(<FormFieldCheckbox {...defaultProps} disabled />);

      const checkbox = container.querySelector('.utrecht-checkbox');

      expect(checkbox).toHaveClass('utrecht-checkbox--disabled');
    });

    it('is not disabled by default', () => {
      render(<FormFieldCheckbox {...defaultProps} />);

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).not.toBeDisabled();
    });

    it('omits non-essential disabled attributes when not disabled', () => {
      render(<FormFieldCheckbox {...defaultProps} disabled={false} />);

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).not.toBeDisabled();
      expect(checkbox).not.toHaveAttribute('aria-disabled');
      expect(checkbox).not.toHaveAttribute('disabled');
    });

    it('can have a disabled state', () => {
      render(<FormFieldCheckbox {...defaultProps} disabled />);

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeDisabled();
    });

    it('can have a disabled state in CSS', () => {
      const { container } = render(<FormFieldCheckbox {...defaultProps} disabled />);

      const checkbox = container.querySelector(':disabled');

      expect(checkbox).toBeInTheDocument();
    });
  });

  describe('required variant', () => {
    it('is not required by default', () => {
      render(<FormFieldCheckbox {...defaultProps} />);

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).not.toBeRequired();
    });

    it('omits non-essential required attributes when not required', () => {
      render(<FormFieldCheckbox {...defaultProps} required={false} />);

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).not.toBeRequired();
      expect(checkbox).not.toHaveAttribute('aria-required');
      expect(checkbox).not.toHaveAttribute('required');
    });

    it('can have a required state', () => {
      render(<FormFieldCheckbox {...defaultProps} required />);

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeRequired();
    });
  });

  describe('inputRequired state', () => {
    it('is not required by default', () => {
      render(<FormFieldCheckbox {...defaultProps} />);

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).not.toBeRequired();
    });

    it('omits non-essential required attributes when not required', () => {
      render(<FormFieldCheckbox {...defaultProps} inputRequired={false} />);

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).not.toBeRequired();
      expect(checkbox).not.toHaveAttribute('aria-required');
      expect(checkbox).not.toHaveAttribute('required');
    });

    it('can have a required state', () => {
      render(<FormFieldCheckbox {...defaultProps} inputRequired />);

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeRequired();
    });

    it('can have a required state in CSS', () => {
      const { container } = render(<FormFieldCheckbox {...defaultProps} inputRequired />);

      const checkbox = container.querySelector(':required');

      expect(checkbox).toBeInTheDocument();
    });
  });

  describe('indeterminate variant', () => {
    it.skip('is not indeterminate by default (in the accessibility tree)', () => {});

    it('is not indeterminate by default', () => {
      render(<FormFieldCheckbox {...defaultProps} />);

      const checkbox = screen.getByRole('checkbox');

      // TODO: Find out how to test the indeterminate state
      expect(checkbox).not.toHaveAttribute('aria-checked', 'mixed');
    });

    it.skip('can have a indeterminate state (in the accessibility tree)', () => {});

    it('can have a indeterminate state', () => {
      render(<FormFieldCheckbox {...defaultProps} indeterminate />);

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toHaveAttribute('aria-checked', 'mixed');
    });
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>();

    const { container } = render(<FormFieldCheckbox {...defaultProps} ref={ref} />);

    const div = container.querySelector('div');

    expect(ref.current).toBe(div);
  });

  it('supports ForwardRef for the form control in React', () => {
    const inputRef = createRef<HTMLInputElement>();

    const { container } = render(<FormFieldCheckbox {...defaultProps} inputRef={inputRef} />);

    const div = container.querySelector('input');

    expect(inputRef.current).toBe(div);
  });
});

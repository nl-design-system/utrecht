import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { FormFieldTextarea } from './FormFieldTextarea';
import '@testing-library/jest-dom';

describe('Form field with a textarea', () => {
  const defaultProps = {
    name: 'subject',
    label: 'Subject',
  };

  it('renders an HTML div element', () => {
    const { container } = render(<FormFieldTextarea {...defaultProps} />);

    const field = container.querySelector('div');

    expect(field).toBeInTheDocument();
  });

  it('renders a design system BEM class name: utrecht-form-field', () => {
    const { container } = render(<FormFieldTextarea {...defaultProps} />);

    const field = container.querySelector('div');

    expect(field).toHaveClass('utrecht-form-field');
  });

  it('displays as CSS block element (or equivalent)', () => {
    const { container } = render(<FormFieldTextarea {...defaultProps} />);

    const field = container.querySelector('div');

    expect(field).toBeVisible();
    expect(field).not.toHaveStyle({ display: 'inline' });
    expect(field).not.toHaveStyle({ display: 'inline-block' });
  });

  it('renders rich text content', () => {
    const { container } = render(
      <FormFieldTextarea {...defaultProps}>
        <hr />
      </FormFieldTextarea>,
    );

    const richText = container.querySelector('hr');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<FormFieldTextarea {...defaultProps} hidden />);

    const field = container.querySelector('div');

    expect(field).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<FormFieldTextarea {...defaultProps} className="invalid" />);

    const field = container.querySelector('div');

    expect(field).toHaveClass('invalid');
  });

  it('can have a additional class name', () => {
    const { container } = render(<FormFieldTextarea {...defaultProps} className="large" />);

    const field = container.querySelector(':only-child');

    expect(field).toHaveClass('large');
    expect(field).toHaveClass('utrecht-form-field');
  });

  describe('label', () => {
    it('renders a design system BEM class name: utrecht-form-field__label', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} />);

      const field = container.querySelector('.utrecht-form-field__label');

      expect(field).toBeInTheDocument();
    });

    it('renders rich text content', () => {
      const { container } = render(
        <FormFieldTextarea
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

    it('is associated with the textbox', () => {
      render(<FormFieldTextarea {...defaultProps} />);

      const textbox = screen.getByRole('textbox', { name: 'Subject' });

      expect(textbox).toBeInTheDocument();
    });

    // We cannot test this currently, because jsdom doesn't appear to have
    // implemented focusing the associated input after clicking <label>.
    it.skip('can be clicked to focus the textbox', () => {
      const handleFocus = jest.fn();
      const labelRef = createRef<HTMLSpanElement>();

      render(<FormFieldTextarea {...defaultProps} label={<span ref={labelRef}>Subject</span>} onFocus={handleFocus} />);

      labelRef.current?.parentElement?.click();
      console.log(labelRef.current?.parentElement);
      expect(handleFocus).toHaveBeenCalled();
    });

    // As a workaround for testing focusing the textbox via the lable,
    // we need to check the implementation details instead of the behavior.
    it('is associated with the textbox using the `for` attribute', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} label="Subject" />);

      const textbox = container.querySelector('textarea[id]');
      const label = container.querySelector('label[for]');

      expect(textbox?.id).toBeTruthy();
      expect(textbox?.id).toBe(label?.getAttribute('for'));
    });
  });

  describe('description', () => {
    it('is not rendered by default', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} />);

      const field = container.querySelector('.utrecht-form-field__description');

      expect(field).not.toBeInTheDocument();
    });

    it('renders a design system BEM class name: utrecht-form-field__description', () => {
      const { container } = render(
        <FormFieldTextarea
          {...defaultProps}
          description="Lingua franca is a common language between groups of people."
        />,
      );

      const field = container.querySelector('.utrecht-form-field__description');

      expect(field).toBeInTheDocument();
    });

    it('renders rich text content', () => {
      const { container } = render(
        <FormFieldTextarea
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

    it('is associated with the textbox', () => {
      const description = 'Lingua franca is a common language between groups of people.';

      render(<FormFieldTextarea {...defaultProps} description={description} />);

      const textbox = screen.getByRole('textbox', { description });

      expect(textbox).toBeInTheDocument();
    });
  });

  describe('error message', () => {
    it('is not rendered by default', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} />);

      const field = container.querySelector('.utrecht-form-field__error-message');

      expect(field).not.toBeInTheDocument();
    });

    it('renders a design system BEM class name: utrecht-form-field__error-message', () => {
      const { container } = render(
        <FormFieldTextarea {...defaultProps} invalid errorMessage="Check this required field to continue." />,
      );

      const field = container.querySelector('.utrecht-form-field__error-message');

      expect(field).toBeInTheDocument();
    });

    it('renders rich text content', () => {
      const { container } = render(
        <FormFieldTextarea
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

    it('is associated with the textbox', () => {
      const errorMessage = 'Check this required field to continue.';

      render(<FormFieldTextarea {...defaultProps} invalid errorMessage={errorMessage} />);

      const textbox = screen.getByRole('textbox', { description: errorMessage });

      expect(textbox).toBeInTheDocument();
    });
  });

  describe('input', () => {
    it('renders a textbox role element', () => {
      render(<FormFieldTextarea {...defaultProps} />);

      const textbox = screen.getByRole('textbox');

      expect(textbox).toBeInTheDocument();
    });

    it('renders a design system BEM class name: utrecht-form-field__input', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} />);

      const field = container.querySelector('.utrecht-form-field__input');

      expect(field).toBeInTheDocument();
    });

    it('renders an HTML textarea element', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} />);

      const textbox = container.querySelector('textarea');

      expect(textbox).toBeInTheDocument();
    });
  });

  describe('status', () => {
    it('is not rendered by default', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} />);

      const field = container.querySelector('.utrecht-form-field__status');

      expect(field).not.toBeInTheDocument();
    });

    it('renders a design system BEM class name: utrecht-form-field__status', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} status="Saving..." />);

      const field = container.querySelector('.utrecht-form-field__status');

      expect(field).toBeInTheDocument();
    });

    it('renders rich text content', () => {
      const { container } = render(
        <FormFieldTextarea
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

    it('is associated with the textbox', () => {
      const status = '40 characters remaining';

      render(<FormFieldTextarea {...defaultProps} status={status} />);

      const textbox = screen.getByRole('textbox', { description: status });

      expect(textbox).toBeInTheDocument();
    });
  });

  describe('change event', () => {
    it('can trigger a change event', async () => {
      const handleChange = jest.fn();

      render(<FormFieldTextarea {...defaultProps} onChange={handleChange} />);

      const textbox = screen.getByRole('textbox');

      expect(handleChange).not.toHaveBeenCalled();

      textbox?.focus();
      await userEvent.keyboard('Hello, world!');

      expect(handleChange).toHaveBeenCalled();
    });

    it('does not trigger a change event when disabled', async () => {
      const handleChange = jest.fn();

      render(<FormFieldTextarea {...defaultProps} disabled onChange={handleChange} />);

      const textbox = screen.getByRole('textbox');

      textbox?.focus();
      await userEvent.keyboard('Hello, world!');

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('focus event', () => {
    it('can trigger a focus event', async () => {
      const handleFocus = jest.fn();

      render(<FormFieldTextarea {...defaultProps} onFocus={handleFocus} />);

      const textbox = screen.getByRole('textbox');

      expect(handleFocus).not.toHaveBeenCalled();

      textbox?.focus();

      expect(handleFocus).toHaveBeenCalled();
    });

    it('can trigger a focus event when read-only', async () => {
      const handleFocus = jest.fn();

      render(<FormFieldTextarea {...defaultProps} readOnly onFocus={handleFocus} />);

      const textbox = screen.getByRole('textbox');

      textbox?.focus();

      expect(handleFocus).toHaveBeenCalled();
    });

    it('does not trigger a focus event when disabled', async () => {
      const handleFocus = jest.fn();

      render(<FormFieldTextarea {...defaultProps} disabled onFocus={handleFocus} />);

      const textbox = screen.getByRole('textbox');

      textbox?.focus();

      expect(handleFocus).not.toHaveBeenCalled();
    });
  });

  describe('blur event', () => {
    it('can trigger a blur event', async () => {
      const handleBlur = jest.fn();

      render(<FormFieldTextarea {...defaultProps} onBlur={handleBlur} />);

      const textbox = screen.getByRole('textbox');

      expect(handleBlur).not.toHaveBeenCalled();

      textbox?.focus();
      textbox?.blur();

      expect(handleBlur).toHaveBeenCalled();
    });

    it('can trigger a blur event when read-only', async () => {
      const handleBlur = jest.fn();

      render(<FormFieldTextarea {...defaultProps} readOnly onBlur={handleBlur} />);

      const textbox = screen.getByRole('textbox');

      textbox?.focus();
      textbox?.blur();

      expect(handleBlur).toHaveBeenCalled();
    });

    it('does not trigger a blur event when disabled', async () => {
      const handleBlur = jest.fn();

      render(<FormFieldTextarea {...defaultProps} disabled onBlur={handleBlur} />);

      const textbox = screen.getByRole('textbox');

      textbox?.focus();
      textbox?.blur();

      expect(handleBlur).not.toHaveBeenCalled();
    });
  });

  describe('input event', () => {
    it('can trigger a input event', async () => {
      const handleInput = jest.fn();

      render(<FormFieldTextarea {...defaultProps} onInput={handleInput} />);

      const textbox = screen.getByRole('textbox');

      expect(handleInput).not.toHaveBeenCalled();

      textbox?.focus();
      await userEvent.keyboard('Hello, world!');

      expect(handleInput).toHaveBeenCalled();
    });

    it('does not trigger a input event when disabled', async () => {
      const handleInput = jest.fn();

      render(<FormFieldTextarea {...defaultProps} disabled onInput={handleInput} />);

      const textbox = screen.getByRole('textbox');

      textbox?.focus();
      await userEvent.keyboard('Hello, world!');

      expect(handleInput).not.toHaveBeenCalled();
    });
  });

  describe('invalid state', () => {
    it('renders a design system BEM modifier class name: utrecht-form-field--invalid', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} invalid />);

      const formField = container.querySelector('.utrecht-form-field');

      expect(formField).toHaveClass('utrecht-form-field--invalid');
    });

    it('renders a design system BEM modifier class name: utrecht-textarea--invalid', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} invalid />);

      const textbox = container.querySelector('.utrecht-textarea');

      expect(textbox).toHaveClass('utrecht-textarea--invalid');
    });

    it('is not invalid by default', () => {
      render(<FormFieldTextarea {...defaultProps} />);

      const textbox = screen.getByRole('textbox');

      expect(textbox).not.toBeInvalid();
    });

    it('omits non-essential invalid attributes when not invalid', () => {
      render(<FormFieldTextarea {...defaultProps} invalid={false} />);

      const textbox = screen.getByRole('textbox');

      expect(textbox).not.toHaveAttribute('aria-invalid');
    });

    it('can have an invalid state', () => {
      render(<FormFieldTextarea {...defaultProps} invalid />);

      const textbox = screen.getByRole('textbox');

      expect(textbox).toBeInvalid();
    });

    it.skip('can have a invalid state in CSS based on required', () => {
      // This doesn't work, because the rendering uses `aria-required`
      const { container } = render(<FormFieldTextarea {...defaultProps} required />);

      const textbox = container.querySelector(':invalid');

      expect(textbox).toBeInTheDocument();
    });
  });

  describe('disabled state', () => {
    it('renders a design system BEM modifier class name: utrecht-textarea--disabled', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} disabled />);

      const textbox = container.querySelector('.utrecht-textarea');

      expect(textbox).toHaveClass('utrecht-textarea--disabled');
    });

    it('is not disabled by default', () => {
      render(<FormFieldTextarea {...defaultProps} />);

      const textbox = screen.getByRole('textbox');

      expect(textbox).not.toBeDisabled();
    });

    it('omits non-essential disabled attributes when not disabled', () => {
      render(<FormFieldTextarea {...defaultProps} disabled={false} />);

      const textbox = screen.getByRole('textbox');

      expect(textbox).not.toHaveAttribute('aria-disabled');

      expect(textbox).not.toHaveAttribute('disabled');
    });

    it('can have a disabled state', () => {
      render(<FormFieldTextarea {...defaultProps} disabled />);

      const textbox = screen.getByRole('textbox');

      expect(textbox).toBeDisabled();
    });

    it('can have a disabled state in CSS', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} disabled />);

      const textbox = container.querySelector(':disabled');

      expect(textbox).toBeInTheDocument();
    });
  });

  describe('required state', () => {
    it('renders a design system BEM modifier class name: utrecht-textarea--required', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} required />);

      const textbox = container.querySelector('.utrecht-textarea');

      expect(textbox).toHaveClass('utrecht-textarea--required');
    });

    it('is not required by default', () => {
      render(<FormFieldTextarea {...defaultProps} />);

      const textbox = screen.getByRole('textbox');

      expect(textbox).not.toBeRequired();
    });

    it('omits non-essential required attributes when not required', () => {
      render(<FormFieldTextarea {...defaultProps} required={false} />);

      const textbox = screen.getByRole('textbox');

      expect(textbox).not.toHaveAttribute('aria-required');

      expect(textbox).not.toHaveAttribute('required');
    });

    it('can have a required state', () => {
      render(<FormFieldTextarea {...defaultProps} required />);

      const textbox = screen.getByRole('textbox');

      expect(textbox).toBeRequired();
    });
  });

  describe('read-only state', () => {
    it('renders a design system BEM modifier class name: utrecht-textarea--readonly', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} readOnly />);

      const textbox = container.querySelector('.utrecht-textarea');

      expect(textbox).toHaveClass('utrecht-textarea--readonly');
    });

    it('is not read-only in CSS by default', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} />);

      const textbox = container.querySelector(':read-only');

      expect(textbox).not.toBeInTheDocument();
    });

    // Test doesn't work, Testing Library doesn't support testing read only state
    it.skip('is not read-only in the accessibility tree by default', () => {});

    it('omits non-essential disabled attributes when not read-only', () => {
      render(<FormFieldTextarea {...defaultProps} readOnly={false} />);

      const textbox = screen.getByRole('textbox');

      expect(textbox).not.toHaveAttribute('aria-readonly');
      expect(textbox).not.toHaveAttribute('readonly');
    });

    // Test doesn't work, Testing Library doesn't support testing read only state
    it.skip('can have a read-only state in the accessibility tree', () => {});

    it('can have a read-only state in CSS', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} readOnly />);

      const textbox = container.querySelector(':read-only');

      expect(textbox).toBeInTheDocument();
    });
  });

  describe('minlength', () => {
    it('omits non-essential required attributes when not required', () => {
      render(<FormFieldTextarea {...defaultProps} />);

      const textbox = screen.getByRole('textbox');

      // avoid `minlength="0"`
      expect(textbox).not.toHaveAttribute('minlength');
    });

    it('can have a minlength', () => {
      render(<FormFieldTextarea {...defaultProps} minLength={1} />);

      const textbox = screen.getByRole('textbox');

      expect(textbox).toHaveAttribute('minlength');
    });

    // Test doesn't work, perhaps Testing Library doesn't support `minLength` validation
    it.skip('can have a invalid state in CSS based on minlength', async () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} minLength={20} />);

      const textbox = screen.getByRole('textbox');

      // minlength is validated only for inputs with the "dirty flag", so only after changes:
      // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-minlength
      textbox?.focus();
      await userEvent.keyboard('Hello, world!');
      textbox?.blur();

      const invalidTextbox = container.querySelector(':invalid');

      expect(invalidTextbox).toBeInTheDocument();
    });
  });

  describe('maxlength', () => {
    it('omits non-essential required attributes when not required', () => {
      render(<FormFieldTextarea {...defaultProps} />);

      const textbox = screen.getByRole('textbox');

      expect(textbox).not.toHaveAttribute('maxlength');
    });

    it('can have a maxlength', () => {
      render(<FormFieldTextarea {...defaultProps} maxLength={1} />);

      const textbox = screen.getByRole('textbox');

      expect(textbox).toHaveAttribute('maxlength');
    });

    // Test doesn't work, perhaps Testing Library doesn't support `maxLength` validation
    it.skip('can have a invalid state in CSS based on maxlength', async () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} maxLength={10} />);

      const textbox = screen.getByRole('textbox');

      // maxlength is validated only for inputs with the "dirty flag", so only after changes:
      // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-maxlength
      textbox?.focus();
      await userEvent.keyboard('Hello, world!');
      textbox?.blur();

      const invalidTextbox = container.querySelector(':invalid');

      expect(invalidTextbox).toBeInTheDocument();
    });
  });

  describe('placeholder', () => {
    it('omits non-essential required attributes when not required', () => {
      render(<FormFieldTextarea {...defaultProps} />);

      const textbox = screen.getByRole('textbox');

      expect(textbox).not.toHaveAttribute('placeholder');
    });

    it('does not have a placeholder by default', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} />);

      const textbox = container.querySelector(':placeholder-shown');

      expect(textbox).not.toBeInTheDocument();
    });

    it('can have a placeholder', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} placeholder="Type some text..." />);

      const textbox = container.querySelector(':placeholder-shown');

      expect(textbox).toBeInTheDocument();
    });
  });

  describe('input text directionality', () => {
    it('renders bidirectional by default using `dir="auto"', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} />);

      const textbox = container.querySelector('textarea:only-child');

      expect(textbox).toHaveAttribute('dir', 'auto');
    });

    it('can render left-to-right', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} inputDir="ltr" />);

      const textbox = container.querySelector('textarea:only-child');

      expect(textbox).toHaveAttribute('dir', 'ltr');
    });

    it('can render right-to-left', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} inputDir="rtl" />);

      const textbox = container.querySelector('textarea:only-child');

      expect(textbox).toHaveAttribute('dir', 'rtl');
    });
  });

  describe('autocomplete', () => {
    it('is not rendered by default', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} />);

      const textbox = container.querySelector('textarea');

      expect(textbox).not.toHaveAttribute('autocomplete');
    });

    it('renders the autocomplete attribute on the textarea element', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} autoComplete="off" />);

      const textbox = container.querySelector('textarea');

      expect(textbox).toHaveAttribute('autocomplete', 'off');
    });
  });

  describe('name', () => {
    it('associates the textarea with a form', () => {
      const name = 'message';
      const { container } = render(
        <form>
          <FormFieldTextarea {...defaultProps} name={name} />
        </form>,
      );

      const form = container.querySelector('form');
      const textbox = container.querySelector('textarea');

      // TypeScript definitions don't yet support the named index
      expect(form?.elements[name as any]).toBe(textbox);
    });
  });

  describe('rows', () => {
    it('can render the rows attribute on the textarea', () => {
      const { container } = render(
        <form>
          <FormFieldTextarea {...defaultProps} rows={20} />
        </form>,
      );

      const textarea = container.querySelector('textarea');
      expect(textarea).toHaveAttribute('rows', '20');
    });
  });

  describe('cols', () => {
    it('can render the cols attribute on the textarea', () => {
      const { container } = render(
        <form>
          <FormFieldTextarea {...defaultProps} cols={20} />
        </form>,
      );

      const textarea = container.querySelector('textarea');
      expect(textarea).toHaveAttribute('cols', '20');
    });
  });

  describe.skip('inputId', () => {});
  describe.skip('defaultValue', () => {});

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>();

    const { container } = render(<FormFieldTextarea {...defaultProps} ref={ref} />);

    const div = container.querySelector('div');

    expect(ref.current).toBe(div);
  });

  it('supports ForwardRef for the form control in React', () => {
    const textareaRef = createRef<HTMLTextAreaElement>();

    const { container } = render(<FormFieldTextarea {...defaultProps} inputRef={textareaRef} />);

    const div = container.querySelector('textarea');

    expect(textareaRef.current).toBe(div);
  });
});

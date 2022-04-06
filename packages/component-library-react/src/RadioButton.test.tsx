import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { RadioButton } from './RadioButton';
import '@testing-library/jest-dom';

describe('RadioButton', () => {
  it('renders a radio role element', () => {
    render(<RadioButton />);

    const radioButton = screen.getByRole('radio');

    expect(radioButton).toBeInTheDocument();
  });

  it('renders an HTML input type=radio element', () => {
    const { container } = render(<RadioButton />);

    const radioButton = container.querySelector('input[type="radio"]:only-child');

    expect(radioButton).toBeInTheDocument();
  });

  it('displays as CSS inline-block element', () => {
    const { container } = render(<RadioButton />);

    const radioButton = container.querySelector(':only-child');

    expect(radioButton).toBeVisible();
    expect(radioButton).toHaveStyle({ display: 'inline-block' });
  });

  it('renders a design system BEM block class name', () => {
    const { container } = render(<RadioButton />);

    const radioButton = container.querySelector(':only-child');

    expect(radioButton).toHaveClass('utrecht-radio-button');
  });

  describe('checked variant', () => {
    it('renders a design system BEM modifier class name', () => {
      const { container } = render(<RadioButton checked />);

      const radioButton = container.querySelector(':only-child');

      expect(radioButton).toHaveClass('utrecht-radio-button--checked');
    });

    it('is not checked by default', () => {
      const { container } = render(<RadioButton />);

      const radioButton = container.querySelector(':only-child');

      expect(radioButton).not.toBeChecked();
    });

    it('omits non-essential checked attributes when not checked', () => {
      const handleChange = () => {};
      const { container } = render(<RadioButton checked={false} onChange={handleChange} />);

      const radioButton = container.querySelector(':only-child');

      expect(radioButton).not.toHaveAttribute('aria-checked');

      expect(radioButton).not.toHaveAttribute('checked');
    });

    it('can have a checked state', () => {
      const handleChange = () => {};
      const { container } = render(<RadioButton checked onChange={handleChange} />);

      const radioButton = container.querySelector(':only-child');

      expect(radioButton).toBeChecked();
    });

    it('can have a checked state in CSS', () => {
      const handleChange = () => {};
      const { container } = render(<RadioButton checked onChange={handleChange} />);

      const radioButton = container.querySelector(':checked');

      expect(radioButton).toBeInTheDocument();
    });
  });

  describe('invalid variant', () => {
    it('can have an invalid state', () => {
      const { container } = render(<RadioButton invalid />);

      const radioButton = container.querySelector(':only-child');

      // Since `aria-invalid` is not allowed on the radio button itself,
      // this test cannot use `toBeInvalid()` without embedding it in context.
      expect(radioButton).toBeInTheDocument();
    });

    it('is not invalid by default', () => {
      const { container } = render(<RadioButton />);

      const radioButton = container.querySelector(':only-child');

      expect(radioButton).not.toBeInvalid();
    });

    it('defers rendering of aria-invalid to the radiogroup', () => {
      const { container } = render(<RadioButton invalid />);

      const radioButton = container.querySelector(':only-child');

      expect(radioButton).not.toHaveAttribute('aria-invalid');
    });

    it('renders a design system BEM modifier class name', () => {
      const { container } = render(<RadioButton invalid />);

      const radioButton = container.querySelector(':only-child');

      expect(radioButton).toHaveClass('utrecht-radio-button--invalid');
    });

    it('omits non-essential invalid attributes when not invalid', () => {
      const { container } = render(<RadioButton invalid={false} />);

      const radioButton = container.querySelector(':only-child');

      expect(radioButton).not.toHaveAttribute('aria-invalid');
    });

    it('can have an invalid state in CSS', () => {
      const handleChange = () => {};
      const { container } = render(<RadioButton required checked={false} onChange={handleChange} />);

      const radioButton = container.querySelector(':invalid');

      expect(radioButton).toBeInTheDocument();
    });
  });

  describe('disabled variant', () => {
    it('can have a disabled state', () => {
      const { container } = render(<RadioButton disabled />);

      const radioButton = container.querySelector(':only-child');

      expect(radioButton).toBeDisabled();
    });

    it('is not disabled by default', () => {
      const { container } = render(<RadioButton />);

      const radioButton = container.querySelector(':only-child');

      expect(radioButton).not.toBeDisabled();
    });

    it('renders a design system BEM modifier class name', () => {
      const { container } = render(<RadioButton disabled />);

      const radioButton = container.querySelector(':only-child');

      expect(radioButton).toHaveClass('utrecht-radio-button--disabled');
    });

    it('omits non-essential disabled attributes when not disabled', () => {
      const { container } = render(<RadioButton disabled={false} />);

      const radioButton = container.querySelector(':only-child');

      expect(radioButton).not.toHaveAttribute('aria-disabled');

      expect(radioButton).not.toHaveAttribute('disabled');
    });

    it('can have a disabled state in CSS', () => {
      const { container } = render(<RadioButton disabled />);

      const radioButton = container.querySelector(':disabled');

      expect(radioButton).toBeInTheDocument();
    });
  });

  describe('required variant', () => {
    it('can have a required state', () => {
      const { container } = render(<RadioButton required />);

      const radioButton = container.querySelector(':only-child');

      expect(radioButton).toBeRequired();
    });

    it('is not required by default', () => {
      const { container } = render(<RadioButton />);

      const radioButton = container.querySelector(':only-child');

      expect(radioButton).not.toBeRequired();
    });

    it('renders a design system BEM modifier class name', () => {
      const { container } = render(<RadioButton required />);

      const radioButton = container.querySelector(':only-child');

      expect(radioButton).toHaveClass('utrecht-radio-button--required');
    });

    it('omits non-essential required attributes when not required', () => {
      const { container } = render(<RadioButton required={false} />);

      const radioButton = container.querySelector(':only-child');

      expect(radioButton).not.toHaveAttribute('aria-required');

      expect(radioButton).not.toHaveAttribute('required');
    });

    it('can have a required state in CSS', () => {
      const { container } = render(<RadioButton required />);

      const radioButton = container.querySelector(':required');

      expect(radioButton).toBeInTheDocument();
    });
  });

  it('can be hidden', () => {
    const { container } = render(<RadioButton hidden />);

    const radioButton = container.querySelector(':only-child');

    expect(radioButton).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<RadioButton className="ballot-box" />);

    const radioButton = container.querySelector(':only-child');

    expect(radioButton).toHaveClass('ballot-box');
  });

  describe('change event', () => {
    it('can trigger a change event', () => {
      const handleChange = jest.fn();

      const { container } = render(<RadioButton onChange={handleChange} />);

      const radioButton = container.querySelector<HTMLElement>(':only-child');

      radioButton?.click();

      expect(handleChange).toHaveBeenCalled();
    });

    it('does not trigger a change event when disabled', () => {
      const handleChange = jest.fn();

      const { container } = render(<RadioButton disabled onChange={handleChange} />);

      const radioButton = container.querySelector<HTMLElement>(':only-child');

      radioButton?.click();

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('input event', () => {
    it('can trigger a input event', () => {
      const handleInput = jest.fn();

      const { container } = render(<RadioButton onInput={handleInput} />);

      const radioButton = container.querySelector<HTMLElement>(':only-child');

      radioButton?.click();

      expect(handleInput).toHaveBeenCalled();
    });

    it('does not trigger a input event when disabled', () => {
      const handleInput = jest.fn();

      const { container } = render(<RadioButton disabled onInput={handleInput} />);

      const radioButton = container.querySelector<HTMLElement>(':only-child');

      radioButton?.click();

      expect(handleInput).not.toHaveBeenCalled();
    });
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLInputElement>();

    const { container } = render(<RadioButton ref={ref} />);

    const radioButton = container.querySelector(':only-child');

    expect(ref.current).toBe(radioButton);
  });
});

import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { CustomRadioButton } from './CustomRadioButton';
import '@testing-library/jest-dom';

describe('CustomRadioButton', () => {
  it('renders a radioButton role element', () => {
    render(<CustomRadioButton />);

    const radioButton = screen.getByRole('radio');

    expect(radioButton).toBeInTheDocument();
  });

  it('renders an HTML input type=radio element', () => {
    const { container } = render(<CustomRadioButton />);

    const radioButton = container.querySelector('input[type="radio"]:only-child');

    expect(radioButton).toBeInTheDocument();
  });

  it('displays as CSS inline-block element', () => {
    const { container } = render(<CustomRadioButton />);

    const radioButton = container.querySelector(':only-child');

    expect(radioButton).toBeVisible();
    expect(radioButton).toHaveStyle({ display: 'inline-block' });
  });

  it('renders a design system BEM block class name', () => {
    const { container } = render(<CustomRadioButton />);

    const radioButton = container.querySelector(':only-child');

    expect(radioButton).toHaveClass('utrecht-custom-radio-button');
  });

  describe('checked variant', () => {
    it('is not checked by default', () => {
      const { container } = render(<CustomRadioButton />);

      const radiobutton = container.querySelector(':only-child');

      expect(radiobutton).not.toBeChecked();
    });

    it('omits non-essential checked attributes when not checked', () => {
      const handleChange = () => {};
      const { container } = render(<CustomRadioButton checked={false} onChange={handleChange} />);

      const radiobutton = container.querySelector(':only-child');

      expect(radiobutton).not.toHaveAttribute('aria-checked');

      expect(radiobutton).not.toHaveAttribute('checked');
    });

    it('can have a checked state', () => {
      const handleChange = () => {};
      const { container } = render(<CustomRadioButton checked onChange={handleChange} />);

      const radiobutton = container.querySelector(':only-child');

      expect(radiobutton).toBeChecked();
    });

    it('can have a checked state in CSS', () => {
      const handleChange = () => {};
      const { container } = render(<CustomRadioButton checked onChange={handleChange} />);

      const radiobutton = container.querySelector(':checked');

      expect(radiobutton).toBeInTheDocument();
    });
  });

  describe('invalid variant', () => {
    it('renders a design system BEM modifier class name', () => {
      const { container } = render(<CustomRadioButton invalid />);

      const radiobutton = container.querySelector(':only-child');

      expect(radiobutton).toHaveClass('utrecht-custom-radio-button--invalid');
    });

    it('is not invalid by default', () => {
      const { container } = render(<CustomRadioButton />);

      const radiobutton = container.querySelector(':only-child');

      expect(radiobutton).not.toBeInvalid();
    });

    it('omits non-essential invalid attributes when not invalid', () => {
      const { container } = render(<CustomRadioButton invalid={false} />);

      const radiobutton = container.querySelector(':only-child');

      expect(radiobutton).not.toHaveAttribute('aria-invalid');
    });

    it('can have an invalid state', () => {
      const { container } = render(<CustomRadioButton invalid />);

      const radiobutton = container.querySelector(':only-child');

      expect(radiobutton).toBeInvalid();
    });

    it('can have a invalid state in CSS', () => {
      const handleChange = () => {};
      const { container } = render(<CustomRadioButton required checked={false} onChange={handleChange} />);

      const radiobutton = container.querySelector(':invalid');

      expect(radiobutton).toBeInTheDocument();
    });
  });

  describe('disabled variant', () => {
    it('renders a design system BEM modifier class name', () => {
      const { container } = render(<CustomRadioButton disabled />);

      const radiobutton = container.querySelector(':only-child');

      expect(radiobutton).toHaveClass('utrecht-custom-radio-button--disabled');
    });

    it('is not disabled by default', () => {
      const { container } = render(<CustomRadioButton />);

      const radiobutton = container.querySelector(':only-child');

      expect(radiobutton).not.toBeDisabled();
    });

    it('omits non-essential disabled attributes when not disabled', () => {
      const { container } = render(<CustomRadioButton disabled={false} />);

      const radiobutton = container.querySelector(':only-child');

      expect(radiobutton).not.toHaveAttribute('aria-disabled');

      expect(radiobutton).not.toHaveAttribute('disabled');
    });

    it('can have a disabled state', () => {
      const { container } = render(<CustomRadioButton disabled />);

      const radiobutton = container.querySelector(':only-child');

      expect(radiobutton).toBeDisabled();
    });

    it('can have a disabled state in CSS', () => {
      const { container } = render(<CustomRadioButton disabled />);

      const radiobutton = container.querySelector(':disabled');

      expect(radiobutton).toBeInTheDocument();
    });
  });

  it('can be hidden', () => {
    const { container } = render(<CustomRadioButton hidden />);

    const radiobutton = container.querySelector(':only-child');

    expect(radiobutton).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<CustomRadioButton className="ballot-box" />);

    const radiobutton = container.querySelector(':only-child');

    expect(radiobutton).toHaveClass('ballot-box');
  });

  describe('change event', () => {
    it('can trigger a change event', () => {
      const handleChange = jest.fn();

      const { container } = render(<CustomRadioButton onChange={handleChange} />);

      const radiobutton = container.querySelector<HTMLElement>(':only-child');

      radiobutton?.click();

      expect(handleChange).toHaveBeenCalled();
    });

    it('does not trigger a change event when disabled', () => {
      const handleChange = jest.fn();

      const { container } = render(<CustomRadioButton disabled onChange={handleChange} />);

      const radiobutton = container.querySelector<HTMLElement>(':only-child');

      radiobutton?.click();

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('input event', () => {
    it('can trigger a input event', () => {
      const handleInput = jest.fn();

      const { container } = render(<CustomRadioButton onInput={handleInput} />);

      const radiobutton = container.querySelector<HTMLElement>(':only-child');

      radiobutton?.click();

      expect(handleInput).toHaveBeenCalled();
    });

    it('does not trigger a input event when disabled', () => {
      const handleInput = jest.fn();

      const { container } = render(<CustomRadioButton disabled onInput={handleInput} />);

      const radiobutton = container.querySelector<HTMLElement>(':only-child');

      radiobutton?.click();

      expect(handleInput).not.toHaveBeenCalled();
    });
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLInputElement>();

    const { container } = render(<CustomRadioButton ref={ref} />);

    const radiobutton = container.querySelector(':only-child');

    expect(ref.current).toBe(radiobutton);
  });
});

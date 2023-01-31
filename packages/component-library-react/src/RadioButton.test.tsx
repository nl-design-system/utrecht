import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { RadioButton } from './RadioButton';
import '@testing-library/jest-dom';

describe('RadioButton', () => {
  it('renders a radioButton role element', () => {
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
    it('is not checked by default', () => {
      const { container } = render(<RadioButton />);

      const radiobutton = container.querySelector(':only-child');

      expect(radiobutton).not.toBeChecked();
    });

    it('omits non-essential checked attributes when not checked', () => {
      const handleChange = () => {};
      const { container } = render(<RadioButton checked={false} onChange={handleChange} />);

      const radiobutton = container.querySelector(':only-child');

      expect(radiobutton).not.toHaveAttribute('aria-checked');

      expect(radiobutton).not.toHaveAttribute('checked');
    });

    it('can have a checked state', () => {
      const handleChange = () => {};
      const { container } = render(<RadioButton checked onChange={handleChange} />);

      const radiobutton = container.querySelector(':only-child');

      expect(radiobutton).toBeChecked();
    });

    it('can have a checked state in CSS', () => {
      const handleChange = () => {};
      const { container } = render(<RadioButton checked onChange={handleChange} />);

      const radiobutton = container.querySelector(':checked');

      expect(radiobutton).toBeInTheDocument();
    });
  });

  describe('invalid variant', () => {
    it('renders a design system BEM modifier class name', () => {
      const { container } = render(<RadioButton invalid />);

      const radiobutton = container.querySelector(':only-child');

      expect(radiobutton).toHaveClass('utrecht-radio-button--invalid');
    });

    it('is not invalid by default', () => {
      const { container } = render(<RadioButton />);

      const radiobutton = container.querySelector(':only-child');

      expect(radiobutton).not.toBeInvalid();
    });

    it('omits non-essential invalid attributes when not invalid', () => {
      const { container } = render(<RadioButton invalid={false} />);

      const radiobutton = container.querySelector(':only-child');

      expect(radiobutton).not.toHaveAttribute('aria-invalid');
    });

    it('can have an invalid state', () => {
      const { container } = render(<RadioButton invalid />);

      const radiobutton = container.querySelector(':only-child');

      expect(radiobutton).toBeInvalid();
    });

    it('can have a invalid state in CSS', () => {
      const handleChange = () => {};
      const { container } = render(<RadioButton required checked={false} onChange={handleChange} />);

      const radiobutton = container.querySelector(':invalid');

      expect(radiobutton).toBeInTheDocument();
    });
  });

  describe('disabled variant', () => {
    it('renders a design system BEM modifier class name', () => {
      const { container } = render(<RadioButton disabled />);

      const radiobutton = container.querySelector(':only-child');

      expect(radiobutton).toHaveClass('utrecht-radio-button--disabled');
    });

    it('is not disabled by default', () => {
      const { container } = render(<RadioButton />);

      const radiobutton = container.querySelector(':only-child');

      expect(radiobutton).not.toBeDisabled();
    });

    it('omits non-essential disabled attributes when not disabled', () => {
      const { container } = render(<RadioButton disabled={false} />);

      const radiobutton = container.querySelector(':only-child');

      expect(radiobutton).not.toHaveAttribute('aria-disabled');

      expect(radiobutton).not.toHaveAttribute('disabled');
    });

    it('can have a disabled state', () => {
      const { container } = render(<RadioButton disabled />);

      const radiobutton = container.querySelector(':only-child');

      expect(radiobutton).toBeDisabled();
    });

    it('can have a disabled state in CSS', () => {
      const { container } = render(<RadioButton disabled />);

      const radiobutton = container.querySelector(':disabled');

      expect(radiobutton).toBeInTheDocument();
    });
  });

  it('can be hidden', () => {
    const { container } = render(<RadioButton hidden />);

    const radiobutton = container.querySelector(':only-child');

    expect(radiobutton).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<RadioButton className="ballot-box" />);

    const radiobutton = container.querySelector(':only-child');

    expect(radiobutton).toHaveClass('ballot-box');
  });
  it('can have a additional class name', () => {
    const { container } = render(<RadioButton className="large" />);

    const radiobutton = container.querySelector(':only-child');

    expect(radiobutton).toHaveClass('large');

    expect(radiobutton).toHaveClass('utrecht-radio-button');
  });

  describe('change event', () => {
    it('can trigger a change event', () => {
      const handleChange = jest.fn();

      const { container } = render(<RadioButton onChange={handleChange} />);

      const radiobutton = container.querySelector<HTMLElement>(':only-child');

      radiobutton?.click();

      expect(handleChange).toHaveBeenCalled();
    });

    it('does not trigger a change event when disabled', () => {
      const handleChange = jest.fn();

      const { container } = render(<RadioButton disabled onChange={handleChange} />);

      const radiobutton = container.querySelector<HTMLElement>(':only-child');

      radiobutton?.click();

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('input event', () => {
    it('can trigger a input event', () => {
      const handleInput = jest.fn();

      const { container } = render(<RadioButton onInput={handleInput} />);

      const radiobutton = container.querySelector<HTMLElement>(':only-child');

      radiobutton?.click();

      expect(handleInput).toHaveBeenCalled();
    });

    it('does not trigger a input event when disabled', () => {
      const handleInput = jest.fn();

      const { container } = render(<RadioButton disabled onInput={handleInput} />);

      const radiobutton = container.querySelector<HTMLElement>(':only-child');

      radiobutton?.click();

      expect(handleInput).not.toHaveBeenCalled();
    });
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLInputElement>();

    const { container } = render(<RadioButton ref={ref} />);

    const radiobutton = container.querySelector(':only-child');

    expect(ref.current).toBe(radiobutton);
  });
});

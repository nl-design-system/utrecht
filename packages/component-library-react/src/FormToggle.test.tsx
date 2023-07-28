import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { FormToggle } from './FormToggle';
import '@testing-library/jest-dom';

describe('Form toggle', () => {
  it('renders a checkbox role element', () => {
    render(<FormToggle />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
  });

  it('can render a switch role element', () => {
    render(<FormToggle role="switch" />);

    const switchElement = screen.getByRole('switch');

    expect(switchElement).toBeInTheDocument();
  });

  it('renders an HTML input type=checkbox element', () => {
    const { container } = render(<FormToggle />);

    const checkbox = container.querySelector('input[type="checkbox"]');

    expect(checkbox).toBeInTheDocument();
  });

  it.skip('displays as CSS inline-block element', () => {
    /* Skip, because this cannot be tested without CSS */
    const { container } = render(<FormToggle />);

    const checkbox = container.querySelector(':only-child');

    expect(checkbox).toBeVisible();
    expect(checkbox).toHaveStyle({ display: 'inline-block' });
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<FormToggle />);

    const link = container.querySelector(':only-child');

    expect(link).toHaveClass('utrecht-form-toggle');
  });

  it('can have a additional class name', () => {
    const { container } = render(<FormToggle className="large" />);

    const checkbox = container.querySelector(':only-child');

    expect(checkbox).toHaveClass('large');

    expect(checkbox).toHaveClass('utrecht-form-toggle');
  });

  it('can configure tabIndex on the input element', () => {
    const { container } = render(<FormToggle tabIndex={42} />);

    const el = container.querySelector('input[tabindex="42"]');

    expect(el).toBeInTheDocument();
  });

  describe('checked variant', () => {
    it('is not checked by default', () => {
      const { container } = render(<FormToggle />);

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).not.toBeChecked();
    });

    it('omits non-essential checked attributes when not checked', () => {
      const handleChange = () => {};
      const { container } = render(<FormToggle checked={false} onChange={handleChange} />);

      const checkbox = container.querySelector('input');

      expect(checkbox).not.toHaveAttribute('aria-checked');

      expect(checkbox).not.toHaveAttribute('checked');
    });

    it('can have a checked state', () => {
      const handleChange = () => {};
      const { container } = render(<FormToggle checked onChange={handleChange} />);

      const checkbox = container.querySelector('input');

      expect(checkbox).toBeChecked();
    });

    it('can have a checked state in CSS', () => {
      const handleChange = () => {};
      const { container } = render(<FormToggle checked onChange={handleChange} />);

      const checkbox = container.querySelector(':checked');

      expect(checkbox).toBeInTheDocument();
    });
  });

  describe('invalid variant', () => {
    it('renders a design system BEM modifier class name', () => {
      const { container } = render(<FormToggle invalid />);

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).toHaveClass('utrecht-form-toggle--invalid');
    });

    it('is not invalid by default', () => {
      render(<FormToggle />);

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).not.toBeInvalid();
    });

    it('omits non-essential invalid attributes when not invalid', () => {
      const { container } = render(<FormToggle invalid={false} />);

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).not.toHaveAttribute('aria-invalid');
    });

    it('can have an invalid state', () => {
      render(<FormToggle invalid />);

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeInvalid();
    });

    it('can have a invalid state in CSS', () => {
      const handleChange = () => {};
      const { container } = render(<FormToggle required checked={false} onChange={handleChange} />);

      const checkbox = container.querySelector(':invalid');

      expect(checkbox).toBeInTheDocument();
    });
  });

  describe('disabled variant', () => {
    it('renders a design system BEM modifier class name', () => {
      const { container } = render(<FormToggle disabled />);

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).toHaveClass('utrecht-form-toggle--disabled');
    });

    it('is not disabled by default', () => {
      render(<FormToggle />);

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).not.toBeDisabled();
    });

    it('omits non-essential disabled attributes when not disabled', () => {
      const { container } = render(<FormToggle disabled={false} />);

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).not.toHaveAttribute('aria-disabled');

      expect(checkbox).not.toHaveAttribute('disabled');
    });

    it('can have a disabled state', () => {
      render(<FormToggle disabled />);

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeDisabled();
    });

    it('can have a disabled state in CSS', () => {
      const { container } = render(<FormToggle disabled />);

      const checkbox = container.querySelector(':disabled');

      expect(checkbox).toBeInTheDocument();
    });
  });

  describe('required variant', () => {
    it('renders a design system BEM modifier class name', () => {
      const { container } = render(<FormToggle required />);

      const checkbox = container.querySelector('.utrecht-form-toggle');

      expect(checkbox).toHaveClass('utrecht-form-toggle--required');
    });

    it('is not required by default', () => {
      render(<FormToggle />);

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).not.toBeRequired();
    });

    it('omits non-essential required attributes when not required', () => {
      const { container } = render(<FormToggle required={false} />);

      const checkbox = container.querySelector(':only-child');

      expect(checkbox).not.toHaveAttribute('aria-required');

      expect(checkbox).not.toHaveAttribute('required');
    });

    it('can have a required state', () => {
      render(<FormToggle required />);

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeRequired();
    });

    it('can have a required state in CSS', () => {
      const { container } = render(<FormToggle required />);

      const checkbox = container.querySelector(':required');

      expect(checkbox).toBeInTheDocument();
    });
  });

  it('can be hidden', () => {
    const { container } = render(<FormToggle hidden />);

    const checkbox = container.querySelector(':only-child');

    expect(checkbox).not.toBeVisible();
  });

  describe('focus event', () => {
    it('can trigger a focus event', () => {
      const handleFocus = jest.fn();

      render(<FormToggle onFocus={handleFocus} />);

      const checkbox = screen.getByRole('checkbox');

      checkbox?.focus();

      expect(handleFocus).toHaveBeenCalled();
    });

    it('does not trigger a focus event when disabled', () => {
      const handleFocus = jest.fn();

      render(<FormToggle disabled onFocus={handleFocus} />);

      const checkbox = screen.getByRole('checkbox');

      checkbox?.focus();

      expect(handleFocus).not.toHaveBeenCalled();
    });

    it('does trigger a focus event when disabled and focusable', () => {
      const handleFocus = jest.fn();

      render(<FormToggle disabled tabIndex={0} onFocus={handleFocus} />);

      const checkbox = screen.getByRole('checkbox');

      checkbox?.focus();

      expect(handleFocus).toHaveBeenCalled();
    });
  });

  describe('blur event', () => {
    it('can trigger a blur event', () => {
      const handleBlur = jest.fn();

      render(<FormToggle onBlur={handleBlur} />);

      const checkbox = screen.getByRole('checkbox');

      checkbox?.focus();
      checkbox?.blur();

      expect(handleBlur).toHaveBeenCalled();
    });
  });

  describe('change event', () => {
    it('can trigger a change event', () => {
      const handleChange = jest.fn();

      render(<FormToggle onChange={handleChange} />);

      const checkbox = screen.getByRole('checkbox');

      checkbox?.click();

      expect(handleChange).toHaveBeenCalled();
    });

    it('does not trigger a change event when disabled', () => {
      const handleChange = jest.fn();

      render(<FormToggle disabled onChange={handleChange} />);

      const checkbox = screen.getByRole('checkbox');

      checkbox?.click();

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('input event', () => {
    it('can trigger a input event', () => {
      const handleInput = jest.fn();

      render(<FormToggle onInput={handleInput} />);

      const checkbox = screen.getByRole('checkbox');

      checkbox?.click();

      expect(handleInput).toHaveBeenCalled();
    });

    it('does not trigger a input event when disabled', () => {
      const handleInput = jest.fn();

      render(<FormToggle disabled onInput={handleInput} />);

      const checkbox = screen.getByRole('checkbox');

      checkbox?.click();

      expect(handleInput).not.toHaveBeenCalled();
    });
  });

  it('can be activated with Space', async () => {
    const handleChange = jest.fn();

    render(<FormToggle onChange={handleChange} />);

    const checkbox = screen.getByRole('checkbox');

    checkbox?.focus();

    await userEvent.keyboard(' ');

    expect(handleChange).toHaveBeenCalled();
  });

  it('can NOT be activated with Enter', async () => {
    const handleChange = jest.fn();

    render(<FormToggle onChange={handleChange} />);

    const checkbox = screen.getByRole('checkbox');

    checkbox?.focus();

    await userEvent.keyboard('{Enter}');

    expect(handleChange).not.toHaveBeenCalled();
  });

  it('supports ForwardRef in React (but for the input element, not the container)', () => {
    const ref = createRef<HTMLInputElement>();

    const { container } = render(<FormToggle ref={ref} />);

    const checkbox = container.querySelector('input');

    expect(ref.current).toBe(checkbox);
  });
});

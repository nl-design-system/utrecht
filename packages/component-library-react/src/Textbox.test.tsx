import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { Textbox } from './Textbox';
import '@testing-library/jest-dom';

describe('Textbox', () => {
  it('renders a textbox role element', () => {
    render(<Textbox />);

    const textbox = screen.getByRole('textbox');

    expect(textbox).toBeInTheDocument();
  });

  it('renders an HTML input element', () => {
    const { container } = render(<Textbox />);

    const textbox = container.querySelector('input:only-child');

    expect(textbox).toBeInTheDocument();
  });

  it('renders an HTML input type=text element by default', () => {
    const { container } = render(<Textbox />);

    const textbox = container.querySelector('input[type="text"]:only-child');

    expect(textbox).toBeInTheDocument();
  });

  it('displays as CSS inline-block element', () => {
    const { container } = render(<Textbox />);

    const textbox = container.querySelector(':only-child');

    expect(textbox).toBeVisible();
    expect(textbox).toHaveStyle({ display: 'inline-block' });
  });

  it('renders a design system BEM block class name', () => {
    const { container } = render(<Textbox />);

    const textbox = container.querySelector(':only-child');

    expect(textbox).toHaveClass('utrecht-textbox');
  });

  describe('disabled variant', () => {
    it('can have a disabled state', () => {
      const { container } = render(<Textbox disabled />);

      const textbox = container.querySelector(':only-child');

      expect(textbox).toBeDisabled();
    });

    it('is not disabled by default', () => {
      const { container } = render(<Textbox />);

      const textbox = container.querySelector(':only-child');

      expect(textbox).not.toBeDisabled();
    });

    it('renders a design system BEM modifier class name', () => {
      const { container } = render(<Textbox disabled />);

      const textbox = container.querySelector(':only-child');

      expect(textbox).toHaveClass('utrecht-textbox--disabled');
    });

    it('omits non-essential disabled attributes when not disabled', () => {
      const { container } = render(<Textbox disabled={false} />);

      const textbox = container.querySelector(':only-child');

      expect(textbox).not.toHaveAttribute('aria-disabled');

      expect(textbox).not.toHaveAttribute('disabled');
    });

    it('can have a disabled state in CSS', () => {
      const { container } = render(<Textbox disabled />);

      const textbox = container.querySelector(':disabled');

      expect(textbox).toBeInTheDocument();
    });
  });

  describe('invalid variant', () => {
    it('can have an invalid state', () => {
      const { container } = render(<Textbox invalid />);

      const textbox = container.querySelector(':only-child');

      expect(textbox).toBeInvalid();
    });

    it('is not invalid by default', () => {
      const { container } = render(<Textbox />);

      const textbox = container.querySelector(':only-child');

      expect(textbox).not.toBeInvalid();
    });

    it('renders a design system BEM modifier class name', () => {
      const { container } = render(<Textbox invalid />);

      const textbox = container.querySelector(':only-child');

      expect(textbox).toHaveClass('utrecht-textbox--invalid');
    });

    it('omits non-essential invalid attributes when not invalid', () => {
      const { container } = render(<Textbox invalid={false} />);

      const textbox = container.querySelector(':only-child');

      expect(textbox).not.toHaveAttribute('aria-invalid');
    });

    // The :invalid state in CSS is not reliable for custom implementations,
    // no need to test something that doesn't work.
  });

  describe('read-only variant', () => {
    it('can have a read-only state', () => {
      const handleChange = () => {};
      const { container } = render(<Textbox readOnly onChange={handleChange} />);

      const textbox = container.querySelector(':only-child');

      // Unfortunately testing library does not (yet) support `not.toBeReadonly()`
      expect(textbox).toHaveAttribute('readonly');
    });

    it('is not read-only by default', () => {
      const { container } = render(<Textbox />);

      const textbox = container.querySelector(':only-child');

      // Unfortunately testing library does not (yet) support `not.toBeReadonly()`
      expect(textbox).not.toHaveAttribute('aria-readonly');

      expect(textbox).not.toHaveAttribute('readonly');
    });

    it('renders a design system BEM modifier class name', () => {
      const { container } = render(<Textbox readOnly />);

      const textbox = container.querySelector(':only-child');

      expect(textbox).toHaveClass('utrecht-textbox--readonly');
    });

    it('omits non-essential read-only attributes when not read-only', () => {
      const handleChange = () => {};
      const { container } = render(<Textbox readOnly={false} onChange={handleChange} />);

      const textbox = container.querySelector(':only-child');

      expect(textbox).not.toHaveAttribute('aria-readonly');

      expect(textbox).not.toHaveAttribute('readonly');
    });

    it('can have a read-only state in CSS', () => {
      const handleChange = () => {};
      const { container } = render(<Textbox readOnly onChange={handleChange} />);

      const textbox = container.querySelector(':read-only');

      expect(textbox).toBeInTheDocument();
    });
  });

  describe('required variant', () => {
    it('can have a required state', () => {
      const { container } = render(<Textbox required />);

      const textbox = container.querySelector(':only-child');

      expect(textbox).toBeRequired();
    });

    it('is not required by default', () => {
      const { container } = render(<Textbox />);

      const textbox = container.querySelector(':only-child');

      expect(textbox).not.toBeRequired();
    });

    it('renders a design system BEM modifier class name', () => {
      const { container } = render(<Textbox required />);

      const textbox = container.querySelector(':only-child');

      expect(textbox).toHaveClass('utrecht-textbox--required');
    });

    it('omits non-essential required attributes when not required', () => {
      const { container } = render(<Textbox required={false} />);

      const textbox = container.querySelector(':only-child');

      expect(textbox).not.toHaveAttribute('aria-required');

      expect(textbox).not.toHaveAttribute('required');
    });

    it('can have a required state in CSS', () => {
      const { container } = render(<Textbox required />);

      const textbox = container.querySelector(':required');

      expect(textbox).toBeInTheDocument();
    });
  });

  describe('variant for URL values', () => {
    it('renders an HTML input type=url element that can trigger the URL input mode', () => {
      const { container } = render(<Textbox type="url" />);

      const textbox = container.querySelector('input[type="url"]');

      expect(textbox).toBeInTheDocument();
    });
  });

  describe('variant for email values', () => {
    it('renders an HTML input type=email element that can trigger the email input mode', () => {
      const { container } = render(<Textbox type="email" />);

      const textbox = container.querySelector('input[type="email"]');

      expect(textbox).toBeInTheDocument();
    });
  });

  describe('variant for password values', () => {
    it('renders an HTML input type=password element that masks input', () => {
      const { container } = render(<Textbox type="password" />);

      const textbox = container.querySelector('input[type="password"]');

      expect(textbox).toBeInTheDocument();
    });
  });

  describe('variant for telephone values', () => {
    it('renders an HTML input type=tel element that can trigger the telephone number input mode', () => {
      const { container } = render(<Textbox type="tel" />);

      const textbox = container.querySelector('input[type="tel"]');

      expect(textbox).toBeInTheDocument();
    });
  });

  describe('variant for numeric values', () => {
    it('renders an HTML inputMode attribute that can trigger the numeric input mode', () => {
      const { container } = render(<Textbox inputMode="numeric" />);

      const textbox = container.querySelector(':only-child');

      expect(textbox).toHaveAttribute('inputMode', 'numeric');
    });
  });

  describe('variant for number values', () => {
    it('renders an HTML inputMode attribute that can trigger the numeric input mode', () => {
      const { container } = render(<Textbox type="number" />);

      const textbox = container.querySelector(':only-child');

      expect(textbox).toHaveAttribute('inputMode', 'numeric');
    });
  });

  it('can be hidden', () => {
    const { container } = render(<Textbox hidden />);

    const textbox = container.querySelector(':only-child');

    expect(textbox).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<Textbox className="search" />);

    const textbox = container.querySelector(':only-child');

    expect(textbox).toHaveClass('search');
  });

  it('can limit the input length in a way that prevents screen reader from announcing blocked typed input', () => {
    const { container } = render(<Textbox maxLength={42} />);

    const textbox = container.querySelector(':only-child');

    expect(textbox).toHaveAttribute('maxlength');
  });

  describe('change event', () => {
    it('can trigger a change event', async () => {
      const handleChange = jest.fn();

      render(<Textbox onChange={handleChange} defaultValue="Hello" />);

      const textbox = screen.getByRole<HTMLInputElement>('textbox');

      expect(textbox).toBeInTheDocument();

      if (textbox) {
        await userEvent.type(textbox, ', World!');
      }

      expect(handleChange).toHaveBeenCalled();
    });

    it('does not trigger a change event when disabled', async () => {
      const handleChange = jest.fn();

      render(<Textbox onChange={handleChange} defaultValue="Hello" disabled />);

      const textbox = screen.getByRole<HTMLInputElement>('textbox');

      expect(textbox).toBeInTheDocument();

      if (textbox) {
        await userEvent.type(textbox, ', World!');
      }

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('input event', () => {
    it('can trigger a change event', async () => {
      const handleInput = jest.fn();

      render(<Textbox onInput={handleInput} defaultValue="Hello" />);

      const textbox = screen.getByRole<HTMLInputElement>('textbox');

      expect(textbox).toBeInTheDocument();

      if (textbox) {
        await userEvent.type(textbox, ', World!');
      }

      expect(handleInput).toHaveBeenCalled();
    });

    it('does not trigger a change event when disabled', async () => {
      const handleInput = jest.fn();

      render(<Textbox onInput={handleInput} defaultValue="Hello" disabled />);

      const textbox = screen.getByRole<HTMLInputElement>('textbox');

      expect(textbox).toBeInTheDocument();

      if (textbox) {
        await userEvent.type(textbox, ', World!');
      }

      expect(handleInput).not.toHaveBeenCalled();
    });
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLInputElement>();

    const { container } = render(<Textbox ref={ref} />);

    const textbox = container.querySelector(':only-child');

    expect(ref.current).toBe(textbox);
  });
});

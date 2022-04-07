import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { Textarea } from './Textarea';
import '@testing-library/jest-dom';

describe('Textarea', () => {
  it('renders a textbox role element', () => {
    render(<Textarea />);

    const textarea = screen.getByRole('textbox');

    expect(textarea).toBeInTheDocument();
  });

  it('renders an HTML textarea element', () => {
    const { container } = render(<Textarea />);

    const textarea = container.querySelector('textarea:only-child');

    expect(textarea).toBeInTheDocument();
  });

  it('displays as CSS inline-block element', () => {
    const { container } = render(<Textarea />);

    const textarea = container.querySelector(':only-child');

    expect(textarea).toBeVisible();
    expect(textarea).toHaveStyle({ display: 'inline-block' });
  });

  it('renders a design system BEM block class name', () => {
    const { container } = render(<Textarea />);

    const textarea = container.querySelector(':only-child');

    expect(textarea).toHaveClass('utrecht-textarea');
  });

  describe('disabled variant', () => {
    it('can have a disabled state', () => {
      const { container } = render(<Textarea disabled />);

      const textarea = container.querySelector(':only-child');

      expect(textarea).toBeDisabled();
    });

    it('is not disabled by default', () => {
      const { container } = render(<Textarea />);

      const textarea = container.querySelector(':only-child');

      expect(textarea).not.toBeDisabled();
    });

    it('renders a design system BEM modifier class name', () => {
      const { container } = render(<Textarea disabled />);

      const textarea = container.querySelector(':only-child');

      expect(textarea).toHaveClass('utrecht-textarea--disabled');
    });

    it('omits non-essential disabled attributes when not disabled', () => {
      const { container } = render(<Textarea disabled={false} />);

      const textarea = container.querySelector(':only-child');

      expect(textarea).not.toHaveAttribute('aria-disabled');

      expect(textarea).not.toHaveAttribute('disabled');
    });

    it('can have a disabled state in CSS', () => {
      const { container } = render(<Textarea disabled />);

      const textarea = container.querySelector(':disabled');

      expect(textarea).toBeInTheDocument();
    });
  });

  describe('invalid variant', () => {
    it('can have an invalid state', () => {
      const { container } = render(<Textarea invalid />);

      const textarea = container.querySelector(':only-child');

      expect(textarea).toBeInvalid();
    });

    it('is not invalid by default', () => {
      const { container } = render(<Textarea />);

      const textarea = container.querySelector(':only-child');

      expect(textarea).not.toBeInvalid();
    });

    it('renders a design system BEM modifier class name', () => {
      const { container } = render(<Textarea invalid />);

      const textarea = container.querySelector(':only-child');

      expect(textarea).toHaveClass('utrecht-textarea--invalid');
    });

    it('omits non-essential invalid attributes when not invalid', () => {
      const { container } = render(<Textarea invalid={false} />);

      const textarea = container.querySelector(':only-child');

      expect(textarea).not.toHaveAttribute('aria-invalid');
    });

    it('can have a invalid state in CSS', () => {
      const handleChange = () => {};
      const { container } = render(<Textarea required onChange={handleChange} />);

      const textarea = container.querySelector(':invalid');

      expect(textarea).toBeInTheDocument();
    });
  });

  describe('read-only variant', () => {
    it('can have a read-only state', () => {
      const { container } = render(<Textarea readOnly />);

      const textarea = container.querySelector(':only-child');

      // Unfortunately there is no `toBeReadonly()` (yet)
      expect(textarea).toHaveAttribute('readonly');
    });

    it('is not read-only by default', () => {
      const { container } = render(<Textarea />);

      const textarea = container.querySelector(':only-child');

      expect(textarea).not.toHaveAttribute('aria-readonly');
      expect(textarea).not.toHaveAttribute('readonly');
    });

    it('renders a design system BEM modifier class name', () => {
      const { container } = render(<Textarea readOnly />);

      const textarea = container.querySelector(':only-child');

      expect(textarea).toHaveClass('utrecht-textarea--readonly');
    });

    it('omits non-essential read-only attributes when not read-only', () => {
      const { container } = render(<Textarea readOnly={false} />);

      const textarea = container.querySelector(':only-child');

      expect(textarea).not.toHaveAttribute('aria-readonly');

      expect(textarea).not.toHaveAttribute('readonly');
    });

    it('can have a read-only state in CSS', () => {
      const { container } = render(<Textarea readOnly />);

      const textarea = container.querySelector(':read-only');

      expect(textarea).toBeInTheDocument();
    });
  });

  describe('required variant', () => {
    it('can have a required state', () => {
      const { container } = render(<Textarea required />);

      const textarea = container.querySelector(':only-child');

      expect(textarea).toBeRequired();
    });

    it('is not required by default', () => {
      const { container } = render(<Textarea />);

      const textarea = container.querySelector(':only-child');

      expect(textarea).not.toBeRequired();
    });

    it('renders a design system BEM modifier class name', () => {
      const { container } = render(<Textarea required />);

      const textarea = container.querySelector(':only-child');

      expect(textarea).toHaveClass('utrecht-textarea--required');
    });

    it('omits non-essential required attributes when not required', () => {
      const { container } = render(<Textarea required={false} />);

      const textarea = container.querySelector(':only-child');

      expect(textarea).not.toHaveAttribute('aria-required');

      expect(textarea).not.toHaveAttribute('required');
    });

    it('can have a required state in CSS', () => {
      const { container } = render(<Textarea required />);

      const textarea = container.querySelector(':required');

      expect(textarea).toBeInTheDocument();
    });
  });

  it('can be hidden', () => {
    const { container } = render(<Textarea hidden />);

    const textarea = container.querySelector(':only-child');

    expect(textarea).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<Textarea className="ballot-box" />);

    const textarea = container.querySelector(':only-child');

    expect(textarea).toHaveClass('ballot-box');
  });

  describe('change event', () => {
    it('can trigger a change event', async () => {
      const handleChange = jest.fn();

      render(<Textarea onChange={handleChange} defaultValue="Hello" />);

      const textarea = screen.getByRole<HTMLTextAreaElement>('textbox');

      expect(textarea).toBeInTheDocument();

      if (textarea) {
        await userEvent.type(textarea, ', World!');
      }

      expect(handleChange).toHaveBeenCalled();
    });

    it('does not trigger a change event when disabled', async () => {
      const handleChange = jest.fn();

      render(<Textarea onChange={handleChange} defaultValue="Hello" disabled />);

      const textarea = screen.getByRole<HTMLTextAreaElement>('textbox');

      expect(textarea).toBeInTheDocument();

      if (textarea) {
        await userEvent.type(textarea, ', World!');
      }

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('input event', () => {
    it('can trigger a change event', async () => {
      const handleInput = jest.fn();

      render(<Textarea onInput={handleInput} defaultValue="Hello" />);

      const textarea = screen.getByRole<HTMLTextAreaElement>('textbox');

      expect(textarea).toBeInTheDocument();

      if (textarea) {
        await userEvent.type(textarea, ', World!');
      }

      expect(handleInput).toHaveBeenCalled();
    });

    it('does not trigger a change event when disabled', async () => {
      const handleInput = jest.fn();

      render(<Textarea onInput={handleInput} defaultValue="Hello" disabled />);

      const textarea = screen.getByRole<HTMLTextAreaElement>('textbox');

      expect(textarea).toBeInTheDocument();

      if (textarea) {
        await userEvent.type(textarea, ', World!');
      }

      expect(handleInput).not.toHaveBeenCalled();
    });
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLTextAreaElement>();

    const { container } = render(<Textarea ref={ref} />);

    const textarea = container.querySelector(':only-child');

    expect(ref.current).toBe(textarea);
  });
});

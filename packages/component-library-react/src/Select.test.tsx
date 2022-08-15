import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { Select, SelectOption } from './Select';
import '@testing-library/jest-dom';

describe('Select', () => {
  it('renders a combobox role element', () => {
    render(<Select />);

    const select = screen.getByRole('combobox');

    expect(select).toBeInTheDocument();
    expect(select).toBeVisible();
  });

  it('renders an HTML select element', () => {
    const { container } = render(<Select />);

    const select = container.querySelector('select:only-child');

    expect(select).toBeInTheDocument();
  });

  it('displays as CSS inline-block element', () => {
    const { container } = render(<Select />);

    const select = container.querySelector(':only-child');

    expect(select).toBeVisible();
    expect(select).toHaveStyle({ display: 'inline-block' });
  });

  it('renders a design system BEM block class name', () => {
    const { container } = render(<Select />);

    const select = container.querySelector(':only-child');

    expect(select).toHaveClass('utrecht-select');
  });

  it('renders options', () => {
    render(
      <Select>
        <SelectOption value="a">Option A</SelectOption>
        <SelectOption value="b">Option B</SelectOption>
      </Select>,
    );

    const select = screen.getByRole('combobox');

    const option = screen.getByRole('option', {
      name: 'Option B',
    });

    expect(select).toContain(option);
  });

  describe('invalid variant', () => {
    it('can have an invalid state', () => {
      const { container } = render(<Select invalid />);

      const select = container.querySelector(':only-child');

      expect(select).toBeInvalid();
    });

    it('is not invalid by default', () => {
      const { container } = render(<Select />);

      const select = container.querySelector(':only-child');

      expect(select).not.toBeInvalid();
      expect(select).not.toHaveClass('utrecht-select--invalid');
      expect(select).not.toHaveAttribute('aria-invalid');
    });

    it('renders a design system BEM modifier class name', () => {
      const { container } = render(<Select invalid />);

      const select = container.querySelector(':only-child');

      expect(select).toHaveClass('utrecht-select--invalid');
    });

    it('omits non-essential invalid attributes when not invalid', () => {
      const { container } = render(<Select invalid={false} />);

      const select = container.querySelector(':only-child');

      expect(select).not.toHaveAttribute('aria-invalid');
    });
  });

  describe('disabled variant', () => {
    it('can have a disabled state', () => {
      const { container } = render(<Select disabled />);

      const select = container.querySelector(':only-child');

      expect(select).toBeDisabled();
    });

    it('is not disabled by default', () => {
      const { container } = render(<Select />);

      const select = container.querySelector(':only-child');

      expect(select).not.toBeDisabled();
      expect(select).not.toHaveClass('utrecht-select--disabled');
      expect(select).not.toHaveAttribute('aria-disabled');
    });

    it('omits non-essential disabled attributes when not disabled', () => {
      const { container } = render(<Select disabled={false} />);

      const select = container.querySelector(':only-child');

      expect(select).not.toHaveAttribute('aria-disabled');

      expect(select).not.toHaveAttribute('disabled');
    });

    it('can have a disabled state in CSS', () => {
      const { container } = render(<Select disabled />);

      const select = container.querySelector(':disabled');

      expect(select).toBeInTheDocument();
    });
  });

  describe('required variant', () => {
    it('can have a required state', () => {
      const { container } = render(<Select required />);

      const select = container.querySelector(':only-child');

      expect(select).toBeRequired();
    });

    it('is not required by default', () => {
      const { container } = render(<Select />);

      const select = container.querySelector(':only-child');

      expect(select).not.toBeRequired();
      expect(select).not.toHaveClass('utrecht-select--required');
      expect(select).not.toHaveAttribute('aria-required');
    });

    it('renders a design system BEM modifier class name', () => {
      const { container } = render(<Select required />);

      const select = container.querySelector(':only-child');

      expect(select).toHaveClass('utrecht-select--required');
    });

    it('omits non-essential required attributes when not required', () => {
      const { container } = render(<Select required={false} />);

      const select = container.querySelector(':only-child');

      expect(select).toHaveAttribute('aria-required', 'false');

      expect(select).not.toHaveAttribute('required');
    });
  });

  it('can be hidden', () => {
    const { container } = render(<Select hidden />);

    const select = container.querySelector(':only-child');

    expect(select).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<Select className="ballot-box" />);

    const select = container.querySelector(':only-child');

    expect(select).toHaveClass('ballot-box');
  });

  describe('change event', () => {
    it('can trigger a change event', async () => {
      const handleChange = jest.fn();

      render(
        <Select onChange={handleChange} defaultValue="1">
          <SelectOption value="1">Option 1</SelectOption>
          <SelectOption value="2">Option 2</SelectOption>
        </Select>,
      );

      const select = screen.getByRole<HTMLSelectElement>('combobox');

      expect(select).toBeInTheDocument();

      if (select) {
        await userEvent.selectOptions(select, ['Option 2']);
      }

      expect(handleChange).toHaveBeenCalled();
    });

    it('does not trigger a change event when disabled', async () => {
      const handleChange = jest.fn();

      render(
        <Select onChange={handleChange} defaultValue="1" disabled>
          <SelectOption value="1">Option 1</SelectOption>
          <SelectOption value="2">Option 2</SelectOption>
        </Select>,
      );

      const select = screen.getByRole<HTMLSelectElement>('combobox');

      expect(select).toBeInTheDocument();

      if (select) {
        await userEvent.selectOptions(select, ['Option 2']);
      }

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('input event', () => {
    it('can trigger a input event', async () => {
      const handleInput = jest.fn();

      render(
        <Select onInput={handleInput} defaultValue="1">
          <SelectOption value="1">Option 1</SelectOption>
          <SelectOption value="2">Option 2</SelectOption>
        </Select>,
      );

      const select = screen.getByRole<HTMLSelectElement>('combobox');

      expect(select).toBeInTheDocument();

      if (select) {
        await userEvent.selectOptions(select, ['Option 2']);
      }

      expect(handleInput).toHaveBeenCalled();
    });

    it('does not trigger a input event when disabled', async () => {
      const handleInput = jest.fn();

      render(
        <Select onInput={handleInput} defaultValue="1" disabled>
          <SelectOption value="1">Option 1</SelectOption>
          <SelectOption value="2">Option 2</SelectOption>
        </Select>,
      );

      const select = screen.getByRole<HTMLSelectElement>('combobox');

      expect(select).toBeInTheDocument();

      if (select) {
        await userEvent.selectOptions(select, ['Option 2']);
      }

      expect(handleInput).not.toHaveBeenCalled();
    });
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLSelectElement>();

    const { container } = render(<Select ref={ref} />);

    const select = container.querySelector(':only-child');

    expect(ref.current).toBe(select);
  });
});

describe('Select option', () => {
  it('renders an option role element', () => {
    render(<SelectOption />);

    const option = screen.getByRole('option');

    expect(option).toBeInTheDocument();
    expect(option).toBeVisible();
  });

  it('renders an option role element with a text label', () => {
    render(<SelectOption>Heading 1</SelectOption>);

    const option = screen.getByRole('option', {
      name: 'Heading 1',
    });

    expect(option).toBeInTheDocument();
  });

  it('renders an HTML option element', () => {
    const { container } = render(<SelectOption />);

    const option = container.querySelector('option:only-child');

    expect(option).toBeInTheDocument();
  });

  it('renders a design system BEM block class name', () => {
    const { container } = render(<SelectOption />);

    const select = container.querySelector(':only-child');

    expect(select).toHaveClass('utrecht-select__option');
  });

  // Rich text is not supported by the HTML <option> element

  describe('disabled variant', () => {
    it('can have a disabled state', () => {
      const { container } = render(<SelectOption disabled />);

      const select = container.querySelector(':only-child');

      expect(select).toBeDisabled();
    });

    it('is not disabled by default', () => {
      const { container } = render(<SelectOption />);

      const select = container.querySelector(':only-child');

      expect(select).not.toBeDisabled();
    });

    it('renders a design system BEM modifier class name', () => {
      const { container } = render(<SelectOption disabled />);

      const select = container.querySelector(':only-child');

      expect(select).toHaveClass('utrecht-select__option--disabled');
    });

    it('omits non-essential disabled attributes when not disabled', () => {
      const { container } = render(<SelectOption disabled={false} />);

      const select = container.querySelector(':only-child');

      expect(select).not.toHaveAttribute('aria-disabled');

      expect(select).not.toHaveAttribute('disabled');
    });

    it('can have a disabled state in CSS', () => {
      const { container } = render(<SelectOption disabled />);

      const select = container.querySelector(':disabled');

      expect(select).toBeInTheDocument();
    });
  });

  describe('invalid variant', () => {
    it('can have a invalid state', () => {
      const { container } = render(<SelectOption invalid />);

      const select = container.querySelector(':only-child');

      expect(select).toBeInTheDocument();
    });

    it('is not invalid by default', () => {
      const { container } = render(<SelectOption />);

      const select = container.querySelector(':only-child');

      expect(select).not.toBeInvalid();
      expect(select).not.toHaveClass('utrecht-select__option--invalid');
    });

    it('renders a design system BEM modifier class name', () => {
      const { container } = render(<SelectOption invalid />);

      const select = container.querySelector(':only-child');

      expect(select).toHaveClass('utrecht-select__option--invalid');
    });

    it('does not render the aria-invalid attribute for the HTML option element', () => {
      const { container } = render(<SelectOption invalid />);

      const select = container.querySelector(':only-child');

      expect(select).not.toHaveAttribute('aria-invalid');
    });
  });

  it('can be hidden', () => {
    const { container } = render(<SelectOption hidden />);

    const select = container.querySelector(':only-child');

    expect(select).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<SelectOption className="highlight" />);

    const select = container.querySelector(':only-child');

    expect(select).toHaveClass('highlight');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLOptionElement>();

    const { container } = render(<SelectOption ref={ref} />);

    const select = container.querySelector(':only-child');

    expect(ref.current).toBe(select);
  });
});

import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Fieldset } from './index';
import '@testing-library/jest-dom';

describe('Fieldset', () => {
  it('renders a group role', () => {
    render(<Fieldset />);

    const fieldset = screen.getByRole('group');

    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toBeVisible();
  });

  it('can be configured with the radiogroup role', () => {
    render(<Fieldset role="radiogroup" />);

    const fieldset = screen.getByRole('radiogroup');

    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toBeVisible();
  });

  it('renders an HTML fieldset element', () => {
    const { container } = render(<Fieldset />);

    const fieldset = container.querySelector('fieldset:only-child');

    expect(fieldset).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<Fieldset />);

    const fieldset = container.querySelector(':only-child');

    expect(fieldset).toHaveClass('utrecht-form-fieldset');
  });
  it('can have a additional class name', () => {
    const { container } = render(<Fieldset className="large" />);

    const fieldSet = container.querySelector(':only-child');

    expect(fieldSet).toHaveClass('large');

    expect(fieldSet).toHaveClass('utrecht-form-fieldset');
  });
  it('displays as CSS block element', () => {
    const { container } = render(<Fieldset />);

    const fieldset = container.querySelector(':only-child');

    expect(fieldset).toHaveStyle({ display: 'block' });
  });

  it('renders rich text content', () => {
    const { container } = render(
      <Fieldset>
        <p>Description</p>
      </Fieldset>,
    );

    const fieldset = container.querySelector(':only-child');

    const richText = fieldset?.querySelector('p');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<Fieldset hidden />);

    const fieldset = container.querySelector(':only-child');

    expect(fieldset).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<Fieldset className="card" />);

    const fieldset = container.querySelector(':only-child');

    expect(fieldset).toHaveClass('card');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>();

    const { container } = render(<Fieldset ref={ref} />);

    const fieldset = container.querySelector(':only-child');

    expect(ref.current).toBe(fieldset);
  });

  describe('invalid state', () => {
    it('has no aria-invalid="true" attribute', () => {
      render(<Fieldset invalid />);

      const group = screen.getByRole('group');

      expect(group).not.toHaveAttribute('aria-invalid');
    });
  });

  describe('required state', () => {
    it('has no aria-required="true" attribute', () => {
      render(<Fieldset required />);

      const group = screen.getByRole('group');

      expect(group).not.toHaveAttribute('aria-required');
    });
  });

  describe('radio group', () => {
    describe('required state', () => {
      it('has an aria-invalid="true" attribute', () => {
        render(<Fieldset role="radiogroup" invalid />);

        const group = screen.getByRole('radiogroup');

        expect(group).toHaveAttribute('aria-invalid', 'true');
      });

      it('has an invalid state in the accessibility tree', () => {
        render(<Fieldset role="radiogroup" invalid />);

        const group = screen.getByRole('radiogroup');

        expect(group).toBeInvalid();
      });
    });

    describe('required state', () => {
      it('has an aria-required="true" attribute', () => {
        render(<Fieldset role="radiogroup" required />);

        const group = screen.getByRole('radiogroup');

        expect(group).toHaveAttribute('aria-required', 'true');
      });

      it('has an required state in the accessibility tree', () => {
        render(<Fieldset role="radiogroup" required />);

        const group = screen.getByRole('radiogroup');

        expect(group).toBeRequired();
      });
    });
  });
});

import { render } from '@testing-library/react';
import { createRef } from 'react';
import { FormFieldErrorMessage } from './index';
import '@testing-library/jest-dom';

describe('Form Field Error Message', () => {
  it('renders an HTML div element', () => {
    const { container } = render(<FormFieldErrorMessage />);

    const desc = container.querySelector('div:only-child');

    expect(desc).toBeInTheDocument();
  });

  it('renders a design system BEM class name: utrecht-form-field-error-message', () => {
    const { container } = render(<FormFieldErrorMessage />);

    const desc = container.querySelector(':only-child');

    expect(desc).toHaveClass('utrecht-form-field-error-message');
  });

  it('displays as CSS block element', () => {
    const { container } = render(<FormFieldErrorMessage />);

    const desc = container.querySelector(':only-child');

    expect(desc).toBeVisible();
    expect(desc).toHaveStyle({ display: 'block' });
  });

  it('renders rich text content', () => {
    const { container } = render(
      <FormFieldErrorMessage>
        Remove one topping, <strong>3 toppings is the maximum</strong>.
      </FormFieldErrorMessage>,
    );

    const strong = container.querySelector('strong:only-child');

    expect(strong).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<FormFieldErrorMessage hidden />);

    const desc = container.querySelector(':only-child');

    expect(desc).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<FormFieldErrorMessage className="internal-server-error" />);

    const desc = container.querySelector(':only-child');

    expect(desc).toHaveClass('internal-server-error');
  });

  it('can have a additional class name', () => {
    const { container } = render(<FormFieldErrorMessage className="internal-server-error" />);

    const desc = container.querySelector(':only-child');

    expect(desc).toHaveClass('internal-server-error');

    expect(desc).toHaveClass('utrecht-form-field-error-message');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>();

    const { container } = render(<FormFieldErrorMessage ref={ref} />);

    const div = container.querySelector(':only-child');

    expect(ref.current).toBe(div);
  });
});

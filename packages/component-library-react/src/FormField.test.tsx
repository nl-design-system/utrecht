import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { FormField } from './FormField';
import '@testing-library/jest-dom';

describe('Form field', () => {
  it('renders an HTML div element', () => {
    const { container } = render(<FormField />);

    const field = container.querySelector('div');

    expect(field).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<FormField />);

    const field = container.querySelector('div');

    expect(field).toHaveClass('utrecht-form-field');
  });

  it('displays as CSS block element (or equivalent)', () => {
    const { container } = render(<FormField />);

    const field = container.querySelector('div');

    expect(field).toBeVisible();
    expect(field).not.toHaveStyle({ display: 'inline' });
    expect(field).not.toHaveStyle({ display: 'inline-block' });
  });

  it('renders rich text content', () => {
    render(
      <FormField>
        <input type="text" />
      </FormField>,
    );

    const textbox = screen.getByRole('textbox');

    expect(textbox).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<FormField hidden />);

    const field = container.querySelector('div');

    expect(field).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<FormField className="invalid" />);

    const field = container.querySelector('div');

    expect(field).toHaveClass('invalid');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>();

    const { container } = render(<FormField ref={ref} />);

    const div = container.querySelector('div');

    expect(ref.current).toBe(div);
  });
});

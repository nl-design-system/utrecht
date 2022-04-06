import { render } from '@testing-library/react';
import { createRef } from 'react';
import { FormFieldDescription } from './FormFieldDescription';
import '@testing-library/jest-dom';

describe('Form field description', () => {
  it('renders an HTML div element', () => {
    const { container } = render(<FormFieldDescription />);

    const desc = container.querySelector('div:only-child');

    expect(desc).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<FormFieldDescription />);

    const desc = container.querySelector(':only-child');

    expect(desc).toHaveClass('utrecht-form-field-description');
  });

  describe('variant for a message that describes why the form control is invalid', () => {
    it('renders a design system BEM class name', () => {
      const { container } = render(<FormFieldDescription invalid />);

      const desc = container.querySelector(':only-child');

      expect(desc).toHaveClass('utrecht-form-field-description--invalid');
    });
  });

  describe('variant for a message that mentions the form control has become valid', () => {
    it('renders a design system BEM class name', () => {
      const { container } = render(<FormFieldDescription valid />);

      const desc = container.querySelector(':only-child');

      expect(desc).toHaveClass('utrecht-form-field-description--valid');
    });
  });

  describe('variant for a warning that is provided with a form control', () => {
    it('renders a design system BEM class name', () => {
      const { container } = render(<FormFieldDescription warning />);

      const desc = container.querySelector(':only-child');

      expect(desc).toHaveClass('utrecht-form-field-description--warning');
    });
  });

  it('displays as CSS block element', () => {
    const { container } = render(<FormFieldDescription />);

    const desc = container.querySelector(':only-child');

    expect(desc).toBeVisible();
    expect(desc).toHaveStyle({ display: 'block' });
  });

  it('renders rich text content', () => {
    const { container } = render(
      <FormFieldDescription>
        <strong>Current</strong> password
      </FormFieldDescription>,
    );

    const desc = container.querySelector(':only-child');

    expect(desc).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<FormFieldDescription hidden />);

    const desc = container.querySelector(':only-child');

    expect(desc).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<FormFieldDescription className="internal-server-error" />);

    const desc = container.querySelector(':only-child');

    expect(desc).toHaveClass('internal-server-error');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>();

    const { container } = render(<FormFieldDescription ref={ref} />);

    const div = container.querySelector(':only-child');

    expect(ref.current).toBe(div);
  });
});

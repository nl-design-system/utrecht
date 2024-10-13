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
  it('can have a additional class name', () => {
    const { container } = render(<FormField className="large" />);

    const field = container.querySelector(':only-child');

    expect(field).toHaveClass('large');
    expect(field).toHaveClass('utrecht-form-field');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>();

    const { container } = render(<FormField ref={ref} />);

    const div = container.querySelector('div');

    expect(ref.current).toBe(div);
  });

  describe('error message position', () => {
    it('is displayed after the input field by default', () => {
      const errorMessage = 'Check this required field to continue.';

      render(
        <FormField invalid errorMessage={errorMessage}>
          <input type="text" />
        </FormField>,
      );

      const errorMessageElement = screen.getByText(errorMessage);

      expect(errorMessageElement).toHaveClass('utrecht-form-field__error-message--after');
    });

    it('displays the error message after the input field with `errorMessagePosition="after"`', () => {
      const errorMessage = 'Check this required field to continue.';

      render(
        <FormField invalid errorMessage={errorMessage} errorMessagePosition="after">
          <input type="text" />
        </FormField>,
      );

      const errorMessageElement = screen.getByText(errorMessage);

      expect(errorMessageElement).toHaveClass('utrecht-form-field__error-message--after');
    });

    it('displays the error message before the input field with `errorMessagePosition="before"`', () => {
      const errorMessage = 'Check this required field to continue.';

      render(
        <FormField invalid errorMessage={errorMessage} errorMessagePosition="before">
          <input type="text" />
        </FormField>,
      );

      const errorMessageElement = screen.getByText(errorMessage);

      expect(errorMessageElement).toHaveClass('utrecht-form-field__error-message--before');
    });
  });
});

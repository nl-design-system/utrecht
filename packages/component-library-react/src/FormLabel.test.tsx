import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { FormLabel } from './FormLabel';
import '@testing-library/jest-dom';

describe('Form label', () => {
  it('renders an HTML label element', () => {
    const { container } = render(<FormLabel htmlFor="form-control" />);

    const label = container.querySelector('label:only-child');

    expect(label).toBeInTheDocument();
    expect(label).toBeVisible();
  });

  it('renders an HTML label element with for attribute', () => {
    const { container } = render(<FormLabel htmlFor="form-control" />);

    const label = container.querySelector('label[for="form-control"]:only-child');

    expect(label).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<FormLabel htmlFor="form-control" />);

    const label = container.querySelector(':only-child');

    expect(label).toHaveClass('utrecht-form-label');
  });

  describe('variant for radio button in radio group', () => {
    it('renders a design system BEM class name', () => {
      const { container } = render(<FormLabel htmlFor="form-control" type="radio" />);

      const label = container.querySelector(':only-child');

      expect(label).toHaveClass('utrecht-form-label--radio');
    });
  });

  describe('variant for checkbox in checkbox group', () => {
    it('renders a design system BEM class name', () => {
      const { container } = render(<FormLabel htmlFor="form-control" type="checkbox" />);

      const label = container.querySelector(':only-child');

      expect(label).toHaveClass('utrecht-form-label--checkbox');
    });
  });

  describe('variant for a disabled form control', () => {
    it('renders a design system BEM class name', () => {
      const { container } = render(<FormLabel disabled htmlFor="form-control" />);

      const label = container.querySelector(':only-child');

      expect(label).toHaveClass('utrecht-form-label--disabled');
    });
  });

  describe('variant for a selected checkbox or radio button', () => {
    it('renders a design system BEM class name', () => {
      const { container } = render(<FormLabel checked htmlFor="form-control" />);

      const label = container.querySelector(':only-child');

      expect(label).toHaveClass('utrecht-form-label--checked');
    });
  });

  // Skipped because in js-dom the element unexpectedly does not have an associated `display` style
  it.skip('displays as CSS inline element', () => {
    const { container } = render(<FormLabel htmlFor="form-control" />);

    const label = container.querySelector(':only-child');

    expect(label).toBeVisible();
    expect(label).toHaveStyle({ display: 'inline' });
  });

  it('renders rich text content', () => {
    const { container } = render(
      <FormLabel htmlFor="form-control">
        <strong>Current</strong> password
      </FormLabel>,
    );

    const label = container.querySelector(':only-child');

    const richText = label?.querySelector('strong');

    expect(richText).toBeInTheDocument();
  });

  it('can be associated with an HTML form input', () => {
    render(
      <>
        <FormLabel htmlFor="email">Email</FormLabel>
        <input type="email" id="email" />
      </>,
    );

    const textbox = screen.getByRole('textbox', {
      name: 'Email',
    });

    expect(textbox).toBeInTheDocument();
    expect(textbox).toBeVisible();
  });

  it('can be hidden', () => {
    const { container } = render(<FormLabel hidden htmlFor="form-control" />);

    const label = container.querySelector(':only-child');

    expect(label).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<FormLabel className="question" htmlFor="form-control" />);

    const label = container.querySelector(':only-child');

    expect(label).toHaveClass('question');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLLabelElement>();

    const { container } = render(<FormLabel htmlFor="form-control" ref={ref} />);

    const div = container.querySelector(':only-child');

    expect(ref.current).toBe(div);
  });
});

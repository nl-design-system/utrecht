import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Fieldset } from './Fieldset';
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
    const ref = createRef<HTMLFieldSetElement>();

    const { container } = render(<Fieldset ref={ref} />);

    const fieldset = container.querySelector(':only-child');

    expect(ref.current).toBe(fieldset);
  });
});

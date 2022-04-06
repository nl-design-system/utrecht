import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Fieldset } from './Fieldset';
import { FieldsetLegend } from './FieldsetLegend';
import '@testing-library/jest-dom';

describe('Fieldset legend', () => {
  it('renders a label to a group', () => {
    render(
      <Fieldset>
        <FieldsetLegend>Shipping address</FieldsetLegend>
      </Fieldset>,
    );

    const fieldset = screen.getByRole('group', {
      name: 'Shipping address',
    });

    expect(fieldset).toBeInTheDocument();
  });

  it('renders a label to a radiogroup', () => {
    render(
      <Fieldset role="radiogroup">
        <FieldsetLegend>Shipping method</FieldsetLegend>
      </Fieldset>,
    );

    const fieldset = screen.getByRole('radiogroup', {
      name: 'Shipping method',
    });

    expect(fieldset).toBeInTheDocument();
  });

  it('renders an HTML legend element', () => {
    const { container } = render(<FieldsetLegend />);

    const legend = container.querySelector('legend:only-child');

    expect(legend).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<FieldsetLegend />);

    const legend = container.querySelector(':only-child');

    expect(legend).toHaveClass('utrecht-form-fieldset__legend');
  });

  it('displays as CSS block element', () => {
    const { container } = render(<FieldsetLegend />);

    const legend = container.querySelector(':only-child');

    expect(legend).toBeVisible();
    expect(legend).toHaveStyle({ display: 'block' });
  });

  it('renders rich text content', () => {
    const { container } = render(
      <FieldsetLegend>
        <h2>Shipping address</h2>
      </FieldsetLegend>,
    );

    const legend = container.querySelector(':only-child');
    const richText = legend?.querySelector('h2');

    expect(richText).toBeInTheDocument();
  });

  it('can render a rich text content as a label to a group', () => {
    render(
      <Fieldset>
        <FieldsetLegend>
          <h2>Shipping address</h2>
        </FieldsetLegend>
      </Fieldset>,
    );

    const fieldset = screen.getByRole('group', {
      name: 'Shipping address',
    });

    expect(fieldset).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<FieldsetLegend hidden />);

    const legend = container.querySelector(':only-child');

    expect(legend).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<FieldsetLegend className="heading-2" />);

    const legend = container.querySelector(':only-child');

    expect(legend).toHaveClass('heading-2');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLLegendElement>();

    const { container } = render(<FieldsetLegend ref={ref} />);

    const legend = container.querySelector(':only-child');

    expect(ref.current).toBe(legend);
  });
});

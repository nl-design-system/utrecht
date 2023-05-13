import { render } from '@testing-library/react';
import { createRef } from 'react';
import { ColorSample } from './ColorSample';

import '@testing-library/jest-dom';

describe('Color sample', () => {
  it('renders a data element', () => {
    const { container } = render(<ColorSample color="red" />);

    const sample = container.querySelector('data');

    expect(sample).toBeInTheDocument();
  });

  it('renders the color in the value attribute', () => {
    const color = 'red';

    const { container } = render(<ColorSample color={color} />);

    const sample = container.querySelector('data');

    expect(sample).toHaveAttribute('value', color);
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<ColorSample color="red" />);

    const sample = container.querySelector('*');

    expect(sample).toHaveClass('utrecht-color-sample');
  });

  /* test requires CSS, not part of this components implementation */
  it.skip('displays as inline-block element', () => {
    const { container } = render(<ColorSample color="red" />);

    const sample = container.querySelector(':only-child');

    expect(sample).toBeVisible();
    expect(sample).toHaveStyle({ display: 'inline-block' });
  });

  it('can be hidden', () => {
    const { container } = render(<ColorSample color="red" hidden />);

    const sample = container.querySelector(':only-child');

    expect(sample).not.toBeVisible();
  });

  it('can have an additional custom class name', () => {
    const { container } = render(<ColorSample color="red" className="circle" />);

    const sample = container.querySelector(':only-child');

    expect(sample).toHaveClass('circle');
    expect(sample).toHaveClass('utrecht-color-sample');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDataElement>();

    const { container } = render(<ColorSample color="red" ref={ref} />);

    const sample = container.querySelector(':only-child');

    expect(ref.current).toBe(sample);
  });
});

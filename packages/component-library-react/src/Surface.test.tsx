import { render } from '@testing-library/react';
import { createRef } from 'react';
import { Surface } from './Surface';
import '@testing-library/jest-dom';

describe('Surface', () => {
  it('renders an HTML div element', () => {
    const { container } = render(<Surface />);

    const surface = container.querySelector('div:only-child');

    expect(surface).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<Surface />);

    const surface = container.querySelector(':only-child');

    expect(surface).toHaveClass('utrecht-surface');
  });

  it('displays as CSS block element', () => {
    const { container } = render(<Surface />);

    const surface = container.querySelector(':only-child');

    expect(surface).toBeVisible();
    expect(surface).toHaveStyle({ display: 'block' });
  });

  it('renders rich text content', () => {
    const { container } = render(
      <Surface>
        <h1>Hello, world</h1>
      </Surface>,
    );

    const surface = container.querySelector(':only-child');

    const richText = surface?.querySelector('h1');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<Surface hidden />);

    const surface = container.querySelector(':only-child');

    expect(surface).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<Surface className="checkerboard" />);

    const surface = container.querySelector(':only-child');

    expect(surface).toHaveClass('checkerboard');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>();

    const { container } = render(<Surface ref={ref} />);

    const surface = container.querySelector(':only-child');

    expect(ref.current).toBe(surface);
  });
});

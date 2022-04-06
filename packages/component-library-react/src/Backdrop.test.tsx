import { render } from '@testing-library/react';
import { createRef } from 'react';
import { Backdrop } from './Backdrop';
import '@testing-library/jest-dom';

describe('Backdrop', () => {
  it('renders an HTML div element', () => {
    const { container } = render(<Backdrop />);

    const backdrop = container.querySelector('div:only-child');

    expect(backdrop).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<Backdrop />);

    const backdrop = container.querySelector(':only-child');

    expect(backdrop).toHaveClass('utrecht-backdrop');
  });

  it('displays as CSS block element', () => {
    const { container } = render(<Backdrop />);

    const backdrop = container.querySelector(':only-child');

    expect(backdrop).toBeVisible();
    expect(backdrop).toHaveStyle({ display: 'block' });
  });

  it('renders rich text content', () => {
    const { container } = render(
      <Backdrop>
        <dialog open />
      </Backdrop>,
    );

    const backdrop = container.querySelector(':only-child');

    const dialog = backdrop?.querySelector('dialog');

    expect(dialog).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<Backdrop hidden />);

    const backdrop = container.querySelector(':only-child');

    expect(backdrop).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<Backdrop className="lightbox" />);

    const backdrop = container.querySelector(':only-child');

    expect(backdrop).toHaveClass('lightbox');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>();

    const { container } = render(<Backdrop ref={ref} />);

    const backdrop = container.querySelector(':only-child');

    expect(ref.current).toBe(backdrop);
  });
});

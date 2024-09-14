import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { PaginationNav } from './PaginationNav';
import '@testing-library/jest-dom';

describe('Pagination navigation', () => {
  it('renders an navigation role element', () => {
    render(<PaginationNav />);

    const nav = screen.getByRole('nav');

    expect(nav).toBeInTheDocument();
  });

  it('renders an HTML nav element', () => {
    const { container } = render(<PaginationNav />);

    const nav = container.querySelector('nav:only-child');

    expect(nav).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<PaginationNav />);

    const nav = container.querySelector(':only-child');

    expect(nav).toHaveClass('utrecht-pagination-nav');
  });

  it('displays as CSS block element', () => {
    const { container } = render(<PaginationNav />);

    const nav = container.querySelector(':only-child');

    expect(nav).toBeVisible();
    expect(nav).toHaveStyle({ display: 'block' });
  });

  it('renders rich text content', () => {
    const { container } = render(
      <PaginationNav>
        <a href="/">Back</a>
      </PaginationNav>,
    );

    const nav = container.querySelector(':only-child');

    const link = nav?.querySelector('svg');

    expect(link).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<PaginationNav hidden />);

    const nav = container.querySelector(':only-child');

    expect(nav).not.toBeVisible();
  });

  it('can have a additional class name', () => {
    const { container } = render(<PaginationNav className="sticky" />);

    const nav = container.querySelector(':only-child');

    expect(nav).toHaveClass('sticky');

    expect(nav).toHaveClass('utrecht-pagination');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>();

    const { container } = render(<PaginationNav ref={ref} />);

    const nav = container.querySelector(':only-child');

    expect(ref.current).toBe(nav);
  });
});

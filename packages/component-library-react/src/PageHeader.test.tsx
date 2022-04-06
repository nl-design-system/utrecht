import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { PageHeader } from './PageHeader';
import '@testing-library/jest-dom';

describe('Page header', () => {
  it('renders an banner role element', () => {
    render(<PageHeader />);

    const header = screen.getByRole('banner');

    expect(header).toBeInTheDocument();
  });

  it('renders an HTML header element', () => {
    const { container } = render(<PageHeader />);

    const header = container.querySelector('header:only-child');

    expect(header).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<PageHeader />);

    const header = container.querySelector(':only-child');

    expect(header).toHaveClass('utrecht-page-header');
  });

  it('displays as CSS block element', () => {
    const { container } = render(<PageHeader />);

    const header = container.querySelector(':only-child');

    expect(header).toBeVisible();
    expect(header).toHaveStyle({ display: 'block' });
  });

  it('renders rich text content', () => {
    const { container } = render(
      <PageHeader>
        <svg>
          <title>Logo</title>
        </svg>
      </PageHeader>,
    );

    const header = container.querySelector(':only-child');

    const richText = header?.querySelector('svg');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<PageHeader hidden />);

    const header = container.querySelector(':only-child');

    expect(header).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<PageHeader className="condensed" />);

    const header = container.querySelector(':only-child');

    expect(header).toHaveClass('condensed');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>();

    const { container } = render(<PageHeader ref={ref} />);

    const header = container.querySelector(':only-child');

    expect(ref.current).toBe(header);
  });
});

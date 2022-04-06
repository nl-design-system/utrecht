import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { PageFooter } from './PageFooter';
import '@testing-library/jest-dom';

describe('Page footer', () => {
  it('renders a contentinfo role element', () => {
    render(<PageFooter />);

    const footer = screen.getByRole('contentinfo');

    expect(footer).toBeInTheDocument();
  });

  it('renders an HTML footer element', () => {
    const { container } = render(<PageFooter />);

    const footer = container.querySelector('footer:only-child');

    expect(footer).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<PageFooter />);

    const footer = container.querySelector(':only-child');

    expect(footer).toHaveClass('utrecht-page-footer');
  });

  it('displays as CSS block element (or equivalent)', () => {
    const { container } = render(<PageFooter />);

    const footer = container.querySelector(':only-child');

    expect(footer).toBeVisible();
    expect(footer).toHaveStyle({ display: 'block' });
  });

  it('renders rich text content', () => {
    const { container } = render(
      <PageFooter>
        <address>NL Design System community</address>
      </PageFooter>,
    );

    const footer = container.querySelector(':only-child');

    const richText = footer?.querySelector('address');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<PageFooter hidden />);

    const footer = container.querySelector(':only-child');

    expect(footer).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<PageFooter className="condensed" />);

    const footer = container.querySelector(':only-child');

    expect(footer).toHaveClass('condensed');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>();

    const { container } = render(<PageFooter ref={ref} />);

    const footer = container.querySelector(':only-child');

    expect(ref.current).toBe(footer);
  });
});

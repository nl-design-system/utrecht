import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Link } from './Link';
import '@testing-library/jest-dom';

describe('Link', () => {
  it('renders an link role element', () => {
    render(<Link href="/">Home</Link>);

    const link = screen.getByRole('link', { name: 'Home' });

    expect(link).toBeInTheDocument();
    expect(link).toBeVisible();
  });

  it('renders an HTML a element', () => {
    const { container } = render(<Link>{'https://example.com/'}</Link>);

    const link = container.querySelector('a:only-child');

    expect(link).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<Link />);

    const link = container.querySelector(':only-child');

    expect(link).toHaveClass('utrecht-link');
  });

  it('renders rich text content', () => {
    const { container } = render(
      <Link href="https://example.com/">
        <strong>https:</strong>
        {'//example.com/'}
      </Link>,
    );

    const link = container.querySelector(':only-child');

    const richText = link?.querySelector('strong');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<Link hidden />);

    const link = container.querySelector(':only-child');

    expect(link).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<Link className="visited">{'https://example.com/'}</Link>);

    const link = container.querySelector(':only-child');

    expect(link).toHaveClass('visited');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLAnchorElement>();

    const { container } = render(<Link ref={ref}>{'https://example.com/'}</Link>);

    const link = container.querySelector(':only-child');

    expect(ref.current).toBe(link);
  });

  describe('variant for external links', () => {
    it('renders a design system BEM class name', () => {
      const { container } = render(<Link external />);

      const link = container.querySelector(':only-child');

      expect(link).toHaveClass('utrecht-link--external');
    });

    it('prevents sharing referer information', () => {
      const { container } = render(<Link external />);

      const link = container.querySelector(':only-child');

      expect(link).toHaveAttribute('rel');

      expect(link?.getAttribute('rel')).toContain('noreferrer');
    });

    it('prevents access to window.opener', () => {
      const { container } = render(<Link external />);

      const link = container.querySelector(':only-child');

      expect(link).toHaveAttribute('rel');

      expect(link?.getAttribute('rel')).toContain('noopener');
    });

    it('provides semantic information that the link is external', () => {
      const { container } = render(<Link external />);

      const link = container.querySelector(':only-child');

      expect(link).toHaveAttribute('rel');

      expect(link?.getAttribute('rel')).toContain('external');
    });
  });
});

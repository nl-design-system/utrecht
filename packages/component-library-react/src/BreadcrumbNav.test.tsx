import { render, screen } from '@testing-library/react';
import { Link as GatsbyLink } from 'gatsby';
import type { GatsbyLinkProps } from 'gatsby';
import NextLink from 'next/link';
import { AnchorHTMLAttributes, createRef, PropsWithChildren } from 'react';
import { BreadcrumbLink, BreadcrumbNav } from './BreadcrumbNav';
import '@testing-library/jest-dom';

const CustomLink = ({ children, ...restProps }: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) => {
  return <a {...restProps}>{children}</a>;
};

const CustomGatsbyLink = <TState,>({
  children,
  href,
  ...restProps
}: PropsWithChildren<GatsbyLinkProps<TState> & any>) => {
  return (
    <GatsbyLink {...restProps} to={href}>
      {children}
    </GatsbyLink>
  );
};

describe('Breadcrumb navigation', () => {
  it('renders a list role element', () => {
    render(<BreadcrumbNav />);

    const list = screen.getByRole('list');

    expect(list).toBeInTheDocument();
  });

  it('renders a listitem element', () => {
    render(
      <BreadcrumbNav>
        <BreadcrumbLink href="/" index={0} rel="home"></BreadcrumbLink>
      </BreadcrumbNav>,
    );

    const listitem = screen.getByRole('listitem');

    expect(listitem).toBeInTheDocument();
  });
  it('renders a link element', () => {
    render(
      <BreadcrumbNav>
        <BreadcrumbLink href="/" rel="home"></BreadcrumbLink>
      </BreadcrumbNav>,
    );

    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('rel', 'home');
  });

  it('renders a link element', () => {
    render(
      <BreadcrumbNav>
        <BreadcrumbLink href="/"></BreadcrumbLink>
      </BreadcrumbNav>,
    );

    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
  });

  it('renders a navigation role element', () => {
    render(<BreadcrumbNav />);

    const list = screen.getByRole('navigation');

    expect(list).toBeInTheDocument();
  });

  it('renders a navigation role element with label', () => {
    render(<BreadcrumbNav label="breadcrumb navigation" />);

    const list = screen.getByRole('navigation', { name: 'breadcrumb navigation' });

    expect(list).toBeInTheDocument();
  });

  it('it renders no heading role element for', () => {
    render(<BreadcrumbNav label="breadcrumb navigation" />);

    const heading = screen.queryByRole('heading');

    expect(heading).not.toBeInTheDocument();
  });

  it('renders an HTML nav element', () => {
    const { container } = render(<BreadcrumbNav />);

    const list = container.querySelector('nav:only-child');

    expect(list).toBeInTheDocument();
  });

  it('renders an HTML ol element', () => {
    const { container } = render(<BreadcrumbNav />);

    const list = container.querySelector('ol');

    expect(list).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<BreadcrumbNav />);

    const list = container.querySelector('*');

    expect(list).toHaveClass('utrecht-breadcrumb');
  });

  it('displays as block element', () => {
    const { container } = render(<BreadcrumbNav />);

    const list = container.querySelector(':only-child');

    expect(list).toBeVisible();
    expect(list).toHaveStyle({ display: 'block' });
  });

  it('can be hidden', () => {
    const { container } = render(<BreadcrumbNav hidden />);

    const list = container.querySelector(':only-child');

    expect(list).not.toBeVisible();
  });

  it('can have an additional custom class name', () => {
    const { container } = render(<BreadcrumbNav className="arrows" />);

    const breadcrumbNav = container.querySelector(':only-child');

    expect(breadcrumbNav).toHaveClass('arrows');
    expect(breadcrumbNav).toHaveClass('utrecht-breadcrumb');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLOListElement>();

    const { container } = render(<BreadcrumbNav ref={ref} />);

    const list = container.querySelector(':only-child');

    expect(ref.current).toBe(list);
  });

  describe('custom link component', () => {
    it('renders with custom link', () => {
      const { getByRole } = render(
        <BreadcrumbLink href="/custom" Link={CustomLink} className="utrecht-link">
          Custom Link
        </BreadcrumbLink>,
      );

      const link = getByRole('link');
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/custom');
    });

    it('renders with default Link when customLink is not provided', () => {
      const { getByRole } = render(<BreadcrumbLink href="/default">Default Link</BreadcrumbLink>);

      const link = getByRole('link');
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/default');
      expect(link.tagName).toBe('A');
    });

    describe('with Gatsby component', () => {
      it('renders', () => {
        const { getByRole } = render(
          <BreadcrumbLink Link={CustomGatsbyLink} className="utrecht-link" href="/gatsby-link">
            Gatsby link
          </BreadcrumbLink>,
        );
        const link = getByRole('link');

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/gatsby-link');
      });
    });

    describe('with Next.js component', () => {
      it('renders', () => {
        const { getByRole } = render(
          <BreadcrumbLink Link={NextLink} className="utrecht-link" href="/next-link">
            Next.js link
          </BreadcrumbLink>,
        );
        const link = getByRole('link');

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/next-link');
      });
    });
  });

  describe('current page', () => {
    it('renders aria-current', () => {
      const { getByRole } = render(
        <BreadcrumbNav>
          <BreadcrumbLink current href="/current">
            Current page
          </BreadcrumbLink>
        </BreadcrumbNav>,
      );

      const link = getByRole('link', { name: 'Current page' });

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('aria-current', 'page');
    });

    it('renders a design system BEM class name', () => {
      const { getByRole } = render(
        <BreadcrumbNav>
          <BreadcrumbLink current href="/current">
            Current page
          </BreadcrumbLink>
        </BreadcrumbNav>,
      );

      const link = getByRole('link', { name: 'Current page' });

      expect(link).toBeInTheDocument();
      expect(link).toHaveClass('utrecht-breadcrumb__link--current');
    });
  });

  describe('disabled link', () => {
    it('is a link role element', () => {
      const { getByRole } = render(
        <BreadcrumbNav>
          <BreadcrumbLink disabled href="/current">
            Current page
          </BreadcrumbLink>
        </BreadcrumbNav>,
      );

      const link = getByRole('link', { name: 'Current page' });

      expect(link).toBeInTheDocument();
    });

    it('renders aria-disabled', () => {
      const { getByRole } = render(
        <BreadcrumbNav>
          <BreadcrumbLink disabled href="/current">
            Current page
          </BreadcrumbLink>
        </BreadcrumbNav>,
      );

      const link = getByRole('link', { name: 'Current page' });

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('aria-disabled', 'true');
    });

    it('renders a design system BEM class name', () => {
      const { getByRole } = render(
        <BreadcrumbNav>
          <BreadcrumbLink disabled href="/current">
            Current page
          </BreadcrumbLink>
        </BreadcrumbNav>,
      );

      const link = getByRole('link', { name: 'Current page' });

      expect(link).toBeInTheDocument();
      expect(link).toHaveClass('utrecht-breadcrumb__link--disabled');
    });
  });
});

import { render, screen } from '@testing-library/react';
import { Link } from 'gatsby';
import NextLink from 'next/link';
import React, { createRef } from 'react';
import { BreadcrumbLink, BreadcrumbNav } from './BreadcrumbNav';
import '@testing-library/jest-dom';

const CustomLink = ({ children, ...rest }: any) => {
  return <a {...rest}>{children}</a>;
};

const CustomGatsbyLink = ({ children, href, ...rest }: any) => {
  return (
    <Link to={href} {...rest}>
      {children}
    </Link>
  );
};

const CustomNextjsLink = ({ children, ...rest }: any) => {
  return <NextLink {...rest}>{children}</NextLink>;
};

describe('Breadcrumb Navigation', () => {
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
  it('renders a navigation role element', () => {
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

  it('renders with custom link', () => {
    const { getByRole } = render(
      <BreadcrumbLink href="/custom" customLink={CustomLink} className="utrecht-link">
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

  it('renders a design system BEM class utrecht-breadcrumb__link--current', () => {
    const { getByText } = render(
      <BreadcrumbNav>
        <BreadcrumbLink current href="/current">
          <span className="utrecht-breadcrumb__text">Current Link</span>
        </BreadcrumbLink>
      </BreadcrumbNav>,
    );

    const link = getByText('Current Link');
    const anchor = link.closest('a');

    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveClass('utrecht-breadcrumb__link--current');
  });

  test('renders with custom Gatsby link', () => {
    const { getByRole } = render(
      <BreadcrumbLink customLink={CustomGatsbyLink} className="utrecht-link" href="/gatsby-link">
        Gatsby Link
      </BreadcrumbLink>,
    );
    const link = getByRole('link');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/gatsby-link');
  });

  test('renders with custom Nextjs link', () => {
    const { getByRole } = render(
      <BreadcrumbLink customLink={CustomNextjsLink} className="utrecht-link" href="/next-link">
        Nextjs Link
      </BreadcrumbLink>,
    );
    const link = getByRole('link');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/next-link');
  });
});

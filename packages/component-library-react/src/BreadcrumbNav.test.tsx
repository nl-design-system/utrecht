import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { BreadcrumbLink, BreadcrumbNav } from './BreadcrumbNav';

import '@testing-library/jest-dom';

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

    const list = container.querySelector(':only-child');

    expect(list).toHaveClass('arrows');
    expect(list).toHaveClass('utrecht-breadcrumb');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLOListElement>();

    const { container } = render(<BreadcrumbNav ref={ref} />);

    const list = container.querySelector(':only-child');

    expect(ref.current).toBe(list);
  });
});

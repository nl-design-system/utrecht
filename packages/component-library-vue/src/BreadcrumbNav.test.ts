import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/vue';
import BreadcrumbNav from './BreadcrumbNav.vue';
import BreadcrumbNavLink from './BreadcrumbNavLink.vue';
describe('Breadcrumb Navigation', () => {
  it('renders list role element', () => {
    render(BreadcrumbNav);

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
  });

  it('renders a listitem element', () => {
    render(BreadcrumbNavLink, {
      props: {
        href: '/',
      },
    });

    const listitem = screen.getByRole('listitem');
    expect(listitem).toBeInTheDocument();
  });

  it('renders a link element', () => {
    render(BreadcrumbNavLink, {
      props: {
        href: '/',
      },
    });

    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
  });

  it('renders a navigation role element without a label provided', () => {
    render(BreadcrumbNav);

    const list = screen.getByRole('navigation');
    expect(list).toBeInTheDocument();
  });

  it('renders a navigation role element with a label provided', () => {
    render(BreadcrumbNav, {
      props: {
        label: 'breadcrumb navigation',
      },
    });

    const list = screen.getByRole('navigation', { name: 'breadcrumb navigation' });
    expect(list).toBeInTheDocument();
  });

  it('it renders no heading role element', () => {
    render(BreadcrumbNav, {
      props: {
        label: 'breadcrumb navigation',
      },
    });

    const heading = screen.queryByRole('heading');

    expect(heading).not.toBeInTheDocument();
  });

  it('renders an HTML nav element', () => {
    const { container } = render(BreadcrumbNav);
    const list = container.querySelector('nav:only-child');

    expect(list).toBeInTheDocument();
  });

  it('renders an HTML ol element', () => {
    const { container } = render(BreadcrumbNav);

    const list = container.querySelector('ol');

    expect(list).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(BreadcrumbNav);
    const list = container.querySelector('*');

    expect(list).toHaveClass('utrecht-breadcrumb-nav');
  });

  it('displays as block element', () => {
    const { container } = render(BreadcrumbNav);

    const list = container.querySelector(':only-child');

    expect(list).toBeVisible();
    expect(list).toHaveStyle({ display: 'block' });
  });

  it('can be hidden', () => {
    const { container } = render(BreadcrumbNav, {
      attrs: {
        hidden: true,
      },
    });

    const list = container.querySelector(':only-child');

    expect(list).not.toBeVisible();
  });

  it('can have an additional custom class name', () => {
    const { container } = render(BreadcrumbNav, {
      attrs: {
        class: 'arrows',
      },
    });

    const breadcrumbNav = container.querySelector(':only-child');

    expect(breadcrumbNav).toHaveClass('arrows');
    expect(breadcrumbNav).toHaveClass('utrecht-breadcrumb-nav');
  });
});

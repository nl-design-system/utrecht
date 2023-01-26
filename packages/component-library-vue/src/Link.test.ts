/* eslint-env jest */
import { render } from '@testing-library/vue';
import Link from './Link.vue';
import '@testing-library/jest-dom';

describe('Link', () => {
  it('renders a link role element', () => {
    const { getByRole } = render(Link, {
      props: {
        href: 'contact.html',
      },
      slots: {
        default: 'Contact',
      },
    });

    const link = getByRole('link', { name: 'Contact' });

    expect(link).toBeInTheDocument();
    expect(link).toBeVisible();
  });

  it('renders an HTML a element', () => {
    const { container } = render(Link, {
      props: {
        href: '',
      },
    });

    const link = container.querySelector('a:only-child');

    expect(link).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(Link);

    const link = container.querySelector(':only-child');

    expect(link).toHaveClass('utrecht-link');
  });

  it('renders rich text content', () => {
    const { container } = render(Link, {
      slots: {
        default: 'Order <strong>now</strong>',
      },
    });

    const link = container.querySelector(':only-child');

    const richText = link?.querySelector('strong');

    expect(richText).toBeInTheDocument();
  });

  it('is not external by default', () => {
    const { container } = render(Link);

    const link = container.querySelector('a:only-child');

    expect(link).not.toHaveAttribute('rel');
    expect(link).not.toHaveClass('utrecht-link--external');
  });

  describe('to external website', () => {
    it('has semantic markup for external links', () => {
      const { container } = render(Link, { props: { external: true } });

      const link = container.querySelector('a[rel~="external" i]');

      expect(link).toBeInTheDocument();
    });

    it('prevents access to referrer', () => {
      const { container } = render(Link, { props: { external: true } });

      const link = container.querySelector('a[rel~="noreferrer" i]');

      expect(link).toBeInTheDocument();
    });

    it('prevents access to window.opener', () => {
      const { container } = render(Link, { props: { external: true } });

      const link = container.querySelector('a[rel~="noopener" i]');

      expect(link).toBeInTheDocument();
    });

    it('renders a design system BEM class name', () => {
      const { container } = render(Link, { props: { external: true } });

      const link = container.querySelector(':only-child');

      expect(link).toHaveClass('utrecht-link--external');
    });
  });

  it('can be hidden', () => {
    const { container } = render(Link, { props: { hidden: true } });

    const link = container.querySelector(':only-child');

    expect(link).not.toBeVisible();
  });

  it('can have an additional class name', () => {
    const { container } = render(Link, { props: { class: 'call-to-action' } });

    const link = container.querySelector(':only-child');

    expect(link).toHaveClass('utrecht-link');
    expect(link).toHaveClass('call-to-action');
  });
});

import '@testing-library/jest-dom';
import { render } from '@testing-library/vue';
import BadgeCounter from './BadgeCounter.vue';

describe('Badge Counter', () => {
  it('renders an HTML span element', () => {
    const { container } = render(BadgeCounter, {
      slots: {
        default: '42',
      },
    });

    const badge = container.querySelector('span:only-child');

    expect(badge).toBeInTheDocument();
  });

  it('can render an HTML data element', () => {
    const value = '259';
    const { container } = render(BadgeCounter, {
      props: {
        value,
      },
    });

    const badge = container.querySelector('data:only-child');

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveAttribute('value', value);
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(BadgeCounter);

    const badge = container.querySelector(':only-child');

    expect(badge).toHaveClass('utrecht-badge-counter');
  });

  it('can have a additional class name', () => {
    const { container } = render(BadgeCounter, {
      attrs: {
        class: 'large',
      },
    });

    const dataBadge = container.querySelector(':only-child');

    expect(dataBadge).toHaveClass('large');
    expect(dataBadge).toHaveClass('utrecht-badge-counter');
  });

  it('renders rich text content', () => {
    const { container } = render(BadgeCounter, {
      slots: {
        default: '<span>42</span>',
      },
    });

    const badge = container.querySelector(':only-child');
    const richText = badge?.querySelector('span');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(BadgeCounter, {
      attrs: {
        hidden: true,
      },
      slots: {
        default: '42',
      },
    });

    const badge = container.querySelector(':only-child');

    expect(badge).not.toBeVisible();
  });

  it('renders a `number` type value', () => {
    const { container } = render(BadgeCounter, {
      props: {
        value: 123.4,
      },
      slots: {
        default: '123.40',
      },
    });

    const badge = container.querySelector('data:only-child');

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveAttribute('value', '123.4');
  });
});

import '@testing-library/jest-dom';
import { render } from '@testing-library/vue';
import NumberBadge from './NumberBadge.vue';

describe('Number badge', () => {
  it('renders an HTML span element', () => {
    const { container } = render(NumberBadge, {
      slots: {
        default: '42',
      },
    });

    const badge = container.querySelector('span:only-child');

    expect(badge).toBeInTheDocument();
  });

  it('can render an HTML data element', () => {
    const value = '259';
    const { container } = render(NumberBadge, {
      props: {
        value,
      },
    });

    const badge = container.querySelector('data:only-child');

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveAttribute('value', value);
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(NumberBadge);

    const badge = container.querySelector(':only-child');

    expect(badge).toHaveClass('utrecht-number-badge');
  });

  it('can have a additional class name', () => {
    const additionalClass = 'large';
    const { container } = render(NumberBadge, {
      attrs: {
        class: additionalClass,
      },
    });

    const dataBadge = container.querySelector(':only-child');

    expect(dataBadge).toHaveClass(additionalClass);
    expect(dataBadge).toHaveClass('utrecht-number-badge');
  });

  it('renders rich text content', () => {
    const { container } = render(NumberBadge, {
      slots: {
        default: '<span>42</span>',
      },
    });

    const badge = container.querySelector(':only-child');
    const richText = badge?.querySelector('span');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(NumberBadge, {
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
    const { container } = render(NumberBadge, {
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

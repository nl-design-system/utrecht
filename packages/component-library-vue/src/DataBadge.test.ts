import { render } from '@testing-library/vue';
import '@testing-library/jest-dom';
import DataBadge from './DataBadge.vue';

describe('Data badge', () => {
  it('renders an HTML span element', () => {
    const { container } = render(DataBadge, {
      slots: {
        default: 'Den Haag',
      },
    });

    const badge = container.querySelector('span:only-child');

    expect(badge).toBeInTheDocument();
  });

  it('can render an HTML time element', () => {
    const dateTime = '2038-01-19T03:14:08Z';
    const { container } = render(DataBadge, {
      props: {
        dateTime,
      },
      slots: {
        default: '19 januari 2038 om 03:14:08',
      },
    });

    const badge = container.querySelector('time:only-child');

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveAttribute('datetime', dateTime);
  });

  it('can render an HTML data element', () => {
    const value = '259';
    const { container } = render(DataBadge, {
      props: {
        value,
      },
      slots: {
        default: '≥ 250㎡',
      },
    });

    const badge = container.querySelector('data[value]:only-child');

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveAttribute('value', value);
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(DataBadge);
    const badge = container.querySelector(':only-child');

    expect(badge).toHaveClass('utrecht-badge-data');
  });
  it('can have a additional class name', () => {
    const { container } = render(DataBadge, {
      attrs: {
        class: 'large',
      },
    });

    const dataBadge = container.querySelector(':only-child');

    expect(dataBadge).toHaveClass('large');
    expect(dataBadge).toHaveClass('utrecht-badge-data');
  });
  it('renders rich text content', () => {
    const { container } = render(DataBadge, {
      slots: {
        default: '<code>https:</code>',
      },
    });

    const badge = container.querySelector(':only-child');
    const richText = badge?.querySelector('code');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(DataBadge, {
      slots: {
        default: 'Secrets',
      },
      attrs: {
        hidden: true,
      },
    });

    const badge = container.querySelector(':only-child');

    expect(badge).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(DataBadge, {
      attrs: {
        class: 'utrecht-badge-data--example-dataviz-1',
      },
      slots: {
        default: 'Utrecht',
      },
    });

    const badge = container.querySelector(':only-child');

    expect(badge).toHaveClass('utrecht-badge-data');
    expect(badge).toHaveClass('utrecht-badge-data--example-dataviz-1');
  });
});

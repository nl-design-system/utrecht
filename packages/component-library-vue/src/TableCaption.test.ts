/* eslint-env jest */
import { render } from '@testing-library/vue';
import TableCaption from './TableCaption.vue';
import '@testing-library/jest-dom';

describe('Table caption', () => {
  it('renders an element without role', () => {
    const { container } = render(TableCaption);

    const caption = container.querySelector(':only-child');

    expect(caption).not.toHaveAttribute('aria-role');
    expect(caption).not.toHaveAttribute('role');
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(TableCaption);

    const caption = container.querySelector(':only-child');

    expect(caption).toHaveClass('utrecht-table__caption');
  });

  it('renders an HTML caption element', () => {
    const { container } = render(TableCaption);

    const caption = container.querySelector('caption:only-child');

    expect(caption).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(TableCaption, { props: { hidden: true } });

    const caption = container.querySelector(':only-child');

    expect(caption).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(TableCaption, { props: { class: 'odd' } });

    const caption = container.querySelector(':only-child');

    expect(caption).toHaveClass('odd');
  });
});

/* eslint-env jest */
import { render } from '@testing-library/vue';
import Table from './UtrechtTable.vue';
import '@testing-library/jest-dom';

describe('Table', () => {
  it('renders a table role element', () => {
    const { getByRole } = render(Table);

    const table = getByRole('table');

    expect(table).toBeInTheDocument();
    expect(table).toBeVisible();
  });

  it('can render a table role element with an accessible name', () => {
    const { getByRole } = render(Table, { props: { 'aria-label': 'Interesting data' } });

    const table = getByRole('table', {
      name: 'Interesting data',
    });

    expect(table).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(Table);

    const table = container.querySelector(':only-child');

    expect(table).toHaveClass('utrecht-table');
  });

  it('renders an HTML table element', () => {
    const { container } = render(Table);

    const table = container.querySelector('table:only-child');

    expect(table).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(Table, { props: { hidden: true } });

    const table = container.querySelector(':only-child');

    expect(table).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(Table, { props: { class: 'full-width' } });

    const table = container.querySelector(':only-child');

    expect(table).toHaveClass('full-width');
  });
});

/* eslint-env jest */
import { render } from '@testing-library/vue';
import TableCell from './TableCell.vue';
import '@testing-library/jest-dom';

describe('Table cell', () => {
  it('renders a cell role element', () => {
    const { getByRole } = render(TableCell);

    const table = getByRole('cell');

    expect(table).toBeInTheDocument();
    expect(table).toBeVisible();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(TableCell);

    const table = container.querySelector(':only-child');

    expect(table).toHaveClass('utrecht-table__cell');
  });

  it('renders an HTML td element', () => {
    const { container } = render(TableCell);

    const table = container.querySelector('td:only-child');

    expect(table).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(TableCell, { props: { hidden: true } });

    const table = container.querySelector(':only-child');

    expect(table).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(TableCell, { props: { class: 'negative' } });

    const table = container.querySelector(':only-child');

    expect(table).toHaveClass('negative');
  });
});

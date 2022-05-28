/* eslint-env jest */
import { render } from '@testing-library/vue';
import TableHeaderCell from './UtrechtTableHeaderCell.vue';
import '@testing-library/jest-dom';

describe('Table header cell', () => {
  it('can render a columnheader role element', () => {
    const { getByRole } = render(TableHeaderCell, { props: { scope: 'column' } });

    const headerCell = getByRole('columnheader');

    expect(headerCell).toBeInTheDocument();
    expect(headerCell).toBeVisible();
  });

  it('can render a rowheader role element', () => {
    const { getByRole } = render(TableHeaderCell, { props: { scope: 'row' } });

    const headerCell = getByRole('rowheader');

    expect(headerCell).toBeInTheDocument();
    expect(headerCell).toBeVisible();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(TableHeaderCell);

    const headerCell = container.querySelector(':only-child');

    expect(headerCell).toHaveClass('utrecht-table__header-cell');
  });

  it('renders an HTML th element', () => {
    const { container } = render(TableHeaderCell);

    const headerCell = container.querySelector('th:only-child');

    expect(headerCell).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(TableHeaderCell, { props: { hidden: true } });

    const headerCell = container.querySelector(':only-child');

    expect(headerCell).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(TableHeaderCell, { props: { class: 'sort-ascending' } });

    const headerCell = container.querySelector(':only-child');

    expect(headerCell).toHaveClass('sort-ascending');
  });
});

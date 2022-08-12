/* eslint-env jest */
import { render } from '@testing-library/vue';
import TableRow from './TableRow.vue';
import '@testing-library/jest-dom';

describe('Table row', () => {
  it('renders a row role element', () => {
    const { getByRole } = render(TableRow);

    const row = getByRole('row');

    expect(row).toBeInTheDocument();
    expect(row).toBeVisible();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(TableRow);

    const row = container.querySelector(':only-child');

    expect(row).toHaveClass('utrecht-table__row');
  });

  it('renders an HTML tr element', () => {
    const { container } = render(TableRow);

    const row = container.querySelector('tr:only-child');

    expect(row).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(TableRow, { props: { hidden: true } });

    const row = container.querySelector(':only-child');

    expect(row).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(TableRow, { props: { class: 'odd' } });

    const row = container.querySelector(':only-child');

    expect(row).toHaveClass('odd');
  });
});

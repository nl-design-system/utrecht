import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Table } from './Table';
import { TableBody } from './TableBody';
import { TableRow } from './TableRow';
import '@testing-library/jest-dom';

describe('Table row', () => {
  it('renders a table row role element', () => {
    render(
      <Table>
        <TableBody>
          <TableRow />
        </TableBody>
      </Table>,
    );

    const table = screen.getByRole('row');

    expect(table).toBeInTheDocument();
    expect(table).toBeVisible();
  });

  it('renders an HTML tr element', () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableRow />
        </TableBody>
      </Table>,
    );

    const table = container.querySelector(':only-child');
    const tableBody = table?.querySelector(':only-child');
    const tableRow = tableBody?.querySelector('tr:only-child');

    expect(tableRow).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableRow />
        </TableBody>
      </Table>,
    );
    const table = container.querySelector(':only-child');
    const tableBody = table?.querySelector(':only-child');
    const tableRow = tableBody?.querySelector(':only-child');

    expect(tableRow).toHaveClass('utrecht-table__row');
  });

  it('can be hidden', () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableRow hidden />
        </TableBody>
      </Table>,
    );
    const table = container.querySelector(':only-child');
    const tableBody = table?.querySelector(':only-child');
    const tableRow = tableBody?.querySelector(':only-child');

    expect(tableRow).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableRow className="odd" />
        </TableBody>
      </Table>,
    );

    const table = container.querySelector(':only-child');
    const tableBody = table?.querySelector(':only-child');
    const tableRow = tableBody?.querySelector(':only-child');

    expect(tableRow).toHaveClass('odd');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLTableRowElement>();

    const { container } = render(
      <Table>
        <TableBody>
          <TableRow ref={ref} />
        </TableBody>
      </Table>,
    );

    const table = container.querySelector(':only-child');
    const tableBody = table?.querySelector(':only-child');
    const tableRow = tableBody?.querySelector(':only-child');

    expect(ref.current).toBe(tableRow);
  });
});

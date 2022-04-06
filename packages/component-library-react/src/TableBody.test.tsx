import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Table } from './Table';
import { TableBody } from './TableBody';
import { TableRow } from './TableRow';
import '@testing-library/jest-dom';

describe('Table body', () => {
  it('renders a rowgroup role element', () => {
    render(
      <Table>
        <TableBody />
      </Table>,
    );

    const tableBody = screen.getByRole('rowgroup');

    expect(tableBody).toBeInTheDocument();
    expect(tableBody).toBeVisible();
  });

  it('renders an HTML tbody element', () => {
    const { container } = render(
      <Table>
        <TableBody />
      </Table>,
    );
    const table = container.querySelector(':only-child');
    const tableBody = table?.querySelector('tbody:only-child');

    expect(tableBody).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(
      <Table>
        <TableBody />
      </Table>,
    );
    const table = container.querySelector(':only-child');
    const tableBody = table?.querySelector(':only-child');

    expect(tableBody).toHaveClass('utrecht-table__body');
  });

  it('renders table rows', () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableRow />
        </TableBody>
      </Table>,
    );
    const table = container.querySelector(':only-child');
    const tableBody = table?.querySelector(':only-child');
    const row = tableBody?.querySelector(':only-child');

    expect(row).toBe(screen.getByRole('row'));
  });

  it('can be hidden', () => {
    const { container } = render(
      <Table>
        <TableBody hidden />
      </Table>,
    );
    const table = container.querySelector(':only-child');
    const tableBody = table?.querySelector(':only-child');

    expect(tableBody).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(
      <Table>
        <TableBody className="alternate-row-colors" />
      </Table>,
    );
    const table = container.querySelector(':only-child');
    const tableBody = table?.querySelector(':only-child');

    expect(tableBody).toHaveClass('alternate-row-colors');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLTableSectionElement>();
    const { container } = render(
      <Table>
        <TableBody ref={ref} />
      </Table>,
    );
    const table = container.querySelector(':only-child');
    const tableBody = table?.querySelector(':only-child');

    expect(ref.current).toBe(tableBody);
  });
});

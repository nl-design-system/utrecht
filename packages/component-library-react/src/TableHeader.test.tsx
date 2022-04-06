import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Table } from './Table';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import '@testing-library/jest-dom';

describe('Table header', () => {
  it('renders a rowgroup role element', () => {
    render(
      <Table>
        <TableHeader />
      </Table>,
    );

    const tableHeader = screen.getByRole('rowgroup');

    expect(tableHeader).toBeInTheDocument();
    expect(tableHeader).toBeVisible();
  });

  it('renders an HTML thead element', () => {
    const { container } = render(
      <Table>
        <TableHeader />
      </Table>,
    );
    const table = container.querySelector(':only-child');
    const tableHeader = table?.querySelector('thead:only-child');

    expect(tableHeader).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(
      <Table>
        <TableHeader />
      </Table>,
    );
    const table = container.querySelector(':only-child');
    const tableHeader = table?.querySelector(':only-child');

    expect(tableHeader).toHaveClass('utrecht-table__header');
  });

  it('renders table rows', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow />
        </TableHeader>
      </Table>,
    );
    const tableHeader = screen.getByRole('rowgroup');
    const row = tableHeader?.querySelector(':only-child');

    expect(row).toBe(screen.getByRole('row'));
  });

  it('can be hidden', () => {
    const { container } = render(
      <Table>
        <TableHeader hidden />
      </Table>,
    );
    const table = container.querySelector(':only-child');
    const tableHeader = table?.querySelector(':only-child');

    expect(tableHeader).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(
      <Table>
        <TableHeader className="alternate-column-colors" />
      </Table>,
    );
    const table = container.querySelector(':only-child');
    const tableHeader = table?.querySelector(':only-child');

    expect(tableHeader).toHaveClass('alternate-column-colors');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLTableSectionElement>();
    const { container } = render(
      <Table>
        <TableHeader ref={ref} />
      </Table>,
    );
    const table = container.querySelector(':only-child');
    const tableHeader = table?.querySelector(':only-child');

    expect(ref.current).toBe(tableHeader);
  });
});

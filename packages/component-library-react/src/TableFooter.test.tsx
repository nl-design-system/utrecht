import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Table } from './Table';
import { TableFooter } from './TableFooter';
import { TableRow } from './TableRow';
import '@testing-library/jest-dom';

describe('Table footer', () => {
  it('renders a rowgroup role element', () => {
    render(
      <Table>
        <TableFooter />
      </Table>,
    );

    const tableFooter = screen.getByRole('rowgroup');

    expect(tableFooter).toBeInTheDocument();
    expect(tableFooter).toBeVisible();
  });

  it('renders an HTML tfoot element', () => {
    const { container } = render(
      <Table>
        <TableFooter />
      </Table>,
    );
    const table = container.querySelector(':only-child');
    const tableFooter = table?.querySelector('tfoot:only-child');

    expect(tableFooter).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(
      <Table>
        <TableFooter />
      </Table>,
    );
    const table = container.querySelector(':only-child');
    const tableFooter = table?.querySelector(':only-child');

    expect(tableFooter).toHaveClass('utrecht-table__footer');
  });

  it('renders table rows', () => {
    render(
      <Table>
        <TableFooter>
          <TableRow />
        </TableFooter>
      </Table>,
    );
    const tableFooter = screen.getByRole('rowgroup');
    const row = tableFooter?.querySelector(':only-child');

    expect(row).toBe(screen.getByRole('row'));
  });

  it('can be hidden', () => {
    const { container } = render(
      <Table>
        <TableFooter hidden />
      </Table>,
    );
    const table = container.querySelector(':only-child');
    const tableFooter = table?.querySelector(':only-child');

    expect(tableFooter).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(
      <Table>
        <TableFooter className="alternate-column-colors" />
      </Table>,
    );
    const table = container.querySelector(':only-child');
    const tableFooter = table?.querySelector(':only-child');

    expect(tableFooter).toHaveClass('alternate-column-colors');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLTableSectionElement>();
    const { container } = render(
      <Table>
        <TableFooter ref={ref} />
      </Table>,
    );
    const table = container.querySelector(':only-child');
    const tableFooter = table?.querySelector(':only-child');

    expect(ref.current).toBe(tableFooter);
  });
});

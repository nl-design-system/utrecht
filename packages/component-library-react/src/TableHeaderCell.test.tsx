import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Table } from './Table';
import { TableBody } from './TableBody';
import { TableHeaderCell } from './TableHeaderCell';
import { TableRow } from './TableRow';
import '@testing-library/jest-dom';

describe('Table header cell', () => {
  /**
   * The following tests will render an complete table instead of just one standalone table cell,
   * because React doesn't allow standalone rendering of <td>.
   *
   * Since simply using `:only-child` like the other tests doesn't work anymore,
   * the following tests heavily rely on `useRef()`. (That's also why the test for ForwardRef is
   * one of the first tests.)
   */
  it('renders a columnheader role element', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableHeaderCell />
          </TableRow>
        </TableBody>
      </Table>,
    );

    const cell = screen.getByRole('columnheader');

    expect(cell).toBeInTheDocument();
    expect(cell).toBeVisible();
  });

  it('can render a rowheader role element', () => {
    render(
      <Table>
        <TableBody>
          <TableRow data-testid="table-row">
            <TableHeaderCell scope="row" />
          </TableRow>
        </TableBody>
      </Table>,
    );

    const cell = screen.getByRole('rowheader');

    expect(cell).toBeInTheDocument();
  });

  it('renders a th HTML element', () => {
    render(
      <Table>
        <TableBody>
          <TableRow data-testid="table-row">
            <TableHeaderCell />
          </TableRow>
        </TableBody>
      </Table>,
    );
    const tableRow = screen.getByTestId('table-row');
    const tableHeaderCell = tableRow?.querySelector('th:only-child');

    expect(tableHeaderCell).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableHeaderCell data-testid="table-header-cell" />
          </TableRow>
        </TableBody>
      </Table>,
    );
    const tableHeaderCell = screen.getByTestId('table-header-cell');

    expect(tableHeaderCell).toHaveClass('utrecht-table__header-cell');
  });

  it('renders rich text content', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableHeaderCell data-testid="table-header-cell">
              <abbr title="Uniform Resource Identifier ">URI</abbr>
            </TableHeaderCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    const tableHeaderCell = screen.getByTestId('table-header-cell');
    const richText = tableHeaderCell?.querySelector('abbr');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableHeaderCell data-testid="table-header-cell" hidden />
          </TableRow>
        </TableBody>
      </Table>,
    );
    const tableHeaderCell = screen.getByTestId('table-header-cell');

    expect(tableHeaderCell).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableHeaderCell className="sort-ascending" data-testid="table-header-cell">
              Subject
            </TableHeaderCell>
          </TableRow>
        </TableBody>
      </Table>,
    );
    const tableCell = screen.getByTestId('table-header-cell');

    expect(tableCell).toHaveClass('sort-ascending');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLTableCellElement>();

    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableHeaderCell data-testid="table-header-cell" ref={ref} />
          </TableRow>
        </TableBody>
      </Table>,
    );

    const tableHeaderCell = screen.getByTestId('table-header-cell');

    expect(ref.current).toBe(tableHeaderCell);
  });
});

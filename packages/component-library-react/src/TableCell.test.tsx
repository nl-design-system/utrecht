import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Table } from './Table';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableRow } from './TableRow';
import '@testing-library/jest-dom';

describe('Table cell', () => {
  /**
   * The following tests will render an complete table instead of just one standalone table cell,
   * because React doesn't allow standalone rendering of <td>.
   *
   * Since simply using `:only-child` like the other tests doesn't work anymore,
   * the following tests heavily rely on `useRef()`. (That's also why the test for ForwardRef is
   * one of the first tests.)
   */
  it('renders a cell role element', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell />
          </TableRow>
        </TableBody>
      </Table>,
    );

    const tableCell = screen.getByRole('cell');

    expect(tableCell).toBeInTheDocument();
    expect(tableCell).toBeVisible();
  });

  it('renders a td HTML element', () => {
    render(
      <Table>
        <TableBody>
          <TableRow data-testid="table-row">
            <TableCell />
          </TableRow>
        </TableBody>
      </Table>,
    );
    const tableRow = screen.getByTestId('table-row');
    const tableCell = tableRow?.querySelector('td:only-child');

    expect(tableCell).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell data-testid="table-cell" />
          </TableRow>
        </TableBody>
      </Table>,
    );
    const tableCell = screen.getByTestId('table-cell');

    expect(tableCell).toHaveClass('utrecht-table__cell');
  });

  it('renders rich text content', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell data-testid="table-cell">
              <data value="1234">1,234</data>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );
    const tableCell = screen.getByTestId('table-cell');
    const richText = tableCell?.querySelector('data');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell data-testid="table-cell" hidden />
          </TableRow>
        </TableBody>
      </Table>,
    );
    const tableCell = screen.getByTestId('table-cell');

    expect(tableCell).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="negative" data-testid="table-cell">
              -42
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );
    const tableCell = screen.getByTestId('table-cell');

    expect(tableCell).toHaveClass('negative');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLTableCellElement>();

    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell data-testid="table-cell" ref={ref} />
          </TableRow>
        </TableBody>
      </Table>,
    );
    const tableCell = screen.getByTestId('table-cell');

    expect(ref.current).toBe(tableCell);
  });
});

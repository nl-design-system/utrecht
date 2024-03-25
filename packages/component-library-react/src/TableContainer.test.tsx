import { render } from '@testing-library/react';
import { createRef } from 'react';
import { Table } from './Table';
import { TableContainer } from './TableContainer';
import '@testing-library/jest-dom';

describe('Table container', () => {
  it('renders an table container element', () => {
    const { container } = render(<TableContainer />);

    const tableContainer = container.querySelector('div:only-child');

    expect(tableContainer).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<TableContainer />);

    const tableContainer = container.querySelector(':only-child');

    expect(tableContainer).toHaveClass('utrecht-table-container');
  });

  it('displays as CSS block element', () => {
    const { container } = render(<TableContainer />);

    const tableContainer = container.querySelector(':only-child');

    expect(tableContainer).toBeVisible();
    expect(tableContainer).toHaveStyle({ display: 'block' });
  });

  it('can have childeren', () => {
    const { container } = render(
      <TableContainer>
        <Table></Table>
      </TableContainer>,
    );

    const tableContainer = container.querySelector(':only-child');

    const richText = tableContainer?.querySelector('table');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<TableContainer hidden />);

    const tableContainer = container.querySelector(':only-child');

    expect(tableContainer).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<TableContainer className="max-w-prose mx-auto" />);

    const tableContainer = container.querySelector(':only-child');

    expect(tableContainer).toHaveClass('max-w-prose');
    expect(tableContainer).toHaveClass('mx-auto');
  });
  it('can have a additional class name', () => {
    const { container } = render(<TableContainer className="large" />);

    const tableContainer = container.querySelector(':only-child');

    expect(tableContainer).toHaveClass('large');

    expect(tableContainer).toHaveClass('utrecht-table-container');
  });
  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>();

    const { container } = render(<TableContainer ref={ref} />);

    const tableContainer = container.querySelector(':only-child');

    expect(ref.current).toBe(tableContainer);
  });
});

import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Table } from './Table';
import { TableCaption } from './TableCaption';
import '@testing-library/jest-dom';

describe('Table caption', () => {
  it('can render an accessible name for a table element', () => {
    render(
      <Table>
        <TableCaption>Interesting data</TableCaption>
      </Table>,
    );

    const table = screen.getByRole('table', {
      name: 'Interesting data',
    });

    expect(table).toBeInTheDocument();
  });

  it('renders an HTML caption element', () => {
    const { container } = render(
      <Table>
        <TableCaption />
      </Table>,
    );

    const table = container.querySelector(':only-child');
    const caption = table?.querySelector('caption:only-child');

    expect(caption).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(
      <Table>
        <TableCaption />
      </Table>,
    );
    const table = container.querySelector(':only-child');
    const caption = table?.querySelector(':only-child');

    expect(caption).toHaveClass('utrecht-table__caption');
  });

  it('can be hidden', () => {
    const { container } = render(
      <Table>
        <TableCaption hidden />
      </Table>,
    );
    const table = container.querySelector(':only-child');
    const caption = table?.querySelector(':only-child');

    expect(caption).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(
      <Table>
        <TableCaption className="heading-2" />
      </Table>,
    );

    const table = container.querySelector(':only-child');
    const caption = table?.querySelector(':only-child');

    expect(caption).toHaveClass('heading-2');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLTableCaptionElement>();

    const { container } = render(
      <Table>
        <TableCaption ref={ref} />
      </Table>,
    );

    const table = container.querySelector(':only-child');
    const caption = table?.querySelector(':only-child');

    expect(ref.current).toBe(caption);
  });
});

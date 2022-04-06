import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Table } from './Table';
import '@testing-library/jest-dom';

describe('Table', () => {
  it('renders a table role element', () => {
    render(<Table />);

    const table = screen.getByRole('table');

    expect(table).toBeInTheDocument();
    expect(table).toBeVisible();
  });

  it('can render a table role element with an accessible name', () => {
    render(<Table aria-label="Interesting data" />);

    const table = screen.getByRole('table', {
      name: 'Interesting data',
    });

    expect(table).toBeInTheDocument();
  });

  it('can render a table role element with an accessible name defined by an associated heading', () => {
    render(
      <>
        <h2 id="h2">Interesting data</h2>
        <Table aria-labelledby="h2" />
      </>,
    );

    const table = screen.getByRole('table', {
      name: 'Interesting data',
    });

    expect(table).toBeInTheDocument();
  });

  it('renders an HTML table element', () => {
    const { container } = render(<Table />);

    const table = container.querySelector('table:only-child');

    expect(table).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<Table />);
    const table = container.querySelector(':only-child');

    expect(table).toHaveClass('utrecht-table');
  });

  it('can be hidden', () => {
    const { container } = render(<Table hidden />);

    const table = container.querySelector(':only-child');

    expect(table).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<Table className="full-width" />);

    const table = container.querySelector(':only-child');

    expect(table).toHaveClass('full-width');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLTableElement>();

    const { container } = render(<Table ref={ref} />);

    const table = container.querySelector(':only-child');

    expect(ref.current).toBe(table);
  });
});

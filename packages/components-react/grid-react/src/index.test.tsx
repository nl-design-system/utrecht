import { render, screen } from '@testing-library/react';
import { Grid, GridCell } from './index';
import '@testing-library/jest-dom';

describe('Grid', () => {
  it('renders a grid container', () => {
    const { container } = render(<Grid />);

    const grid = container.querySelector('.utrecht-grid__container');

    expect(grid).toBeInTheDocument();
  });

  it('renders children', () => {
    render(
      <Grid>
        <GridCell>Test content</GridCell>
      </Grid>,
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies spacing class', () => {
    const { container } = render(<Grid spacing="md" />);

    expect(container.firstChild).toHaveClass('utrecht-grid--spacing-md');
  });

  it('applies custom className', () => {
    const { container } = render(<Grid className="custom" />);

    expect(container.firstChild).toHaveClass('utrecht-grid__container');
    expect(container.firstChild).toHaveClass('custom');
  });
});

describe('GridCell', () => {
  it('renders a grid cell', () => {
    const { container } = render(<GridCell>Content</GridCell>);

    const cell = container.querySelector('.utrecht-grid__cell');

    expect(cell).toBeInTheDocument();
  });

  it('applies responsive column classes', () => {
    const { container } = render(
      <GridCell xs={12} md={6}>
        Content
      </GridCell>,
    );

    const cell = container.firstChild;

    expect(cell).toHaveClass('utrecht-grid--xs-12');
    expect(cell).toHaveClass('utrecht-grid--md-6');
  });
});

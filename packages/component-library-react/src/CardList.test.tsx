import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { CardList } from './CardList';
import { CardListItem } from './CardListItem';
import '@testing-library/jest-dom';

describe('Card list', () => {
  it('renders a list role element', () => {
    render(<CardList />);

    const list = screen.getByRole('list');

    expect(list).toBeInTheDocument();
  });

  it('renders an HTML C element', () => {
    const { container } = render(<CardList />);

    const list = container.querySelector('ul:only-child');

    expect(list).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<CardList />);

    const list = container.querySelector('ul:only-child');

    expect(list).toHaveClass('utrecht-card-list');
  });

  it('can contain a list item', () => {
    const { container } = render(
      <CardList>
        <CardListItem headingLevel={2} />
      </CardList>,
    );

    const list = container.querySelector(':only-child');

    const listItem = list?.querySelector(':only-child');

    expect(listItem).toBe(screen.getByRole('listitem'));
  });

  it('displays as block element', () => {
    const { container } = render(<CardList />);

    const list = container.querySelector(':only-child');

    expect(list).toBeVisible();
    expect(list).toHaveStyle({ display: 'block' });
  });

  it('can be hidden', () => {
    const { container } = render(<CardList hidden />);

    const list = container.querySelector(':only-child');

    expect(list).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<CardList className="squares" />);

    const list = container.querySelector(':only-child');

    expect(list).toHaveClass('squares');
  });
  it('can have a additional class name', () => {
    const { container } = render(<CardList className="large" />);

    const list = container.querySelector(':only-child');

    expect(list).toHaveClass('large');

    expect(list).toHaveClass('utrecht-card-list');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLUListElement>();

    const { container } = render(<CardList ref={ref} />);

    const list = container.querySelector(':only-child');

    expect(ref.current).toBe(list);
  });
});

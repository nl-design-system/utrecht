import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { OrderedList } from './OrderedList';
import { OrderedListItem } from './OrderedListItem';
import '@testing-library/jest-dom';

describe('Ordered list', () => {
  it('renders a list role element', () => {
    render(<OrderedList />);

    const list = screen.getByRole('list');

    expect(list).toBeInTheDocument();
  });

  it('renders an HTML ol element', () => {
    const { container } = render(<OrderedList />);

    const list = container.querySelector('ol:only-child');

    expect(list).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<OrderedList />);

    const list = container.querySelector(':only-child');

    expect(list).toHaveClass('utrecht-ordered-list');
  });

  it('can contain a list item', () => {
    const { container } = render(
      <OrderedList>
        <OrderedListItem />
      </OrderedList>,
    );

    const list = container.querySelector(':only-child');

    const listItem = list?.querySelector(':only-child');

    expect(listItem).toBe(screen.getByRole('listitem'));
  });

  it('displays as block element', () => {
    const { container } = render(<OrderedList />);

    const list = container.querySelector(':only-child');

    expect(list).toBeVisible();
    expect(list).toHaveStyle({ display: 'block' });
  });

  it('can be hidden', () => {
    const { container } = render(<OrderedList hidden />);

    const list = container.querySelector(':only-child');

    expect(list).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<OrderedList className="latin-numerals" />);

    const list = container.querySelector(':only-child');

    expect(list).toHaveClass('latin-numerals');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLOListElement>();

    const { container } = render(<OrderedList ref={ref} />);

    const list = container.querySelector(':only-child');

    expect(ref.current).toBe(list);
  });
});

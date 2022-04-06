import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { OrderedListItem } from './OrderedListItem';
import '@testing-library/jest-dom';

describe('Ordered list item', () => {
  it('renders a listitem role element', () => {
    render(<OrderedListItem />);

    const listItem = screen.getByRole('listitem');

    expect(listItem).toBeInTheDocument();
  });

  it('renders an HTML li element', () => {
    const { container } = render(<OrderedListItem />);

    const listItem = container.querySelector('li:only-child');

    expect(listItem).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<OrderedListItem />);

    const listItem = container.querySelector(':only-child');

    expect(listItem).toHaveClass('utrecht-ordered-list__item');
  });

  it('displays as list-item element', () => {
    const { container } = render(<OrderedListItem />);

    const listItem = container.querySelector(':only-child');

    expect(listItem).toBeVisible();
    expect(listItem).toHaveStyle({ display: 'list-item' });
  });

  it('renders items with rich text content ', () => {
    const { container } = render(
      <OrderedListItem>
        <strong>First</strong> item
      </OrderedListItem>,
    );

    const listItem = container.querySelector(':only-child');

    const richText = listItem?.querySelector('strong');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<OrderedListItem hidden />);

    const listItem = container.querySelector(':only-child');

    expect(listItem).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<OrderedListItem className="odd" />);

    const listItem = container.querySelector(':only-child');

    expect(listItem).toHaveClass('odd');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLLIElement>();

    const { container } = render(<OrderedListItem ref={ref} />);

    const listItem = container.querySelector(':only-child');

    expect(ref.current).toBe(listItem);
  });
});

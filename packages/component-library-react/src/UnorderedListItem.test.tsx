import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { UnorderedListItem } from './UnorderedListItem';
import '@testing-library/jest-dom';

describe('Unordered list item', () => {
  it('renders a listitem role element', () => {
    render(<UnorderedListItem />);

    const listItem = screen.getByRole('listitem');

    expect(listItem).toBeInTheDocument();
    expect(listItem).toBeVisible();
  });

  it('renders an HTML li element', () => {
    const { container } = render(<UnorderedListItem />);

    const listItem = container.querySelector('li:only-child');

    expect(listItem).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<UnorderedListItem />);

    const listItem = container.querySelector(':only-child');

    expect(listItem).toHaveClass('utrecht-unordered-list__item');
  });

  it('displays as list-item element', () => {
    const { container } = render(<UnorderedListItem />);

    const listItem = container.querySelector(':only-child');

    expect(listItem).toHaveStyle({ display: 'list-item' });
  });

  it('renders items with rich text content ', () => {
    const { container } = render(
      <UnorderedListItem>
        <strong>First</strong> item
      </UnorderedListItem>,
    );

    const listItem = container.querySelector(':only-child');

    const richText = listItem?.querySelector('strong');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<UnorderedListItem hidden />);

    const listItem = container.querySelector(':only-child');

    expect(listItem).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<UnorderedListItem className="odd" />);

    const listItem = container.querySelector(':only-child');

    expect(listItem).toHaveClass('odd');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLLIElement>();

    const { container } = render(<UnorderedListItem ref={ref} />);

    const listItem = container.querySelector(':only-child');

    expect(ref.current).toBe(listItem);
  });
});

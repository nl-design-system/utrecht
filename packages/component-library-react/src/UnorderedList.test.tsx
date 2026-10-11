import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { UnorderedList } from './UnorderedList';
import { UnorderedListItem } from './UnorderedListItem';
import '@testing-library/jest-dom';

describe('Unordered list', () => {
  it('renders a list role element', () => {
    render(<UnorderedList />);

    const list = screen.getByRole('list');

    expect(list).toBeInTheDocument();
  });

  it('renders an HTML ul element', () => {
    const { container } = render(<UnorderedList />);

    const list = container.querySelector('ul:only-child');

    expect(list).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<UnorderedList />);

    const list = container.querySelector(':only-child');

    expect(list).toHaveClass('utrecht-unordered-list');
  });

  it('renders a level-1 class name', () => {
    const { container } = render(<UnorderedList />);

    const list = container.querySelector(':only-child');

    expect(list).toHaveClass('utrecht-unordered-list--level-1');
  });

  it('can contain a list item', () => {
    const { container } = render(
      <UnorderedList>
        <UnorderedListItem />
      </UnorderedList>,
    );

    const list = container.querySelector(':only-child');

    const listItem = list?.querySelector(':only-child');

    expect(listItem).toBe(screen.getByRole('listitem'));
  });

  it('displays as block element', () => {
    const { container } = render(<UnorderedList />);

    const list = container.querySelector(':only-child');

    expect(list).toBeVisible();
    expect(list).toHaveStyle({ display: 'block' });
  });

  it('can be hidden', () => {
    const { container } = render(<UnorderedList hidden />);

    const list = container.querySelector(':only-child');

    expect(list).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<UnorderedList className="squares" />);

    const list = container.querySelector(':only-child');

    expect(list).toHaveClass('squares');
  });
  it('can have a additional class name', () => {
    const { container } = render(<UnorderedList className="large" />);

    const list = container.querySelector(':only-child');

    expect(list).toHaveClass('large');

    expect(list).toHaveClass('utrecht-unordered-list');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLUListElement>();

    const { container } = render(<UnorderedList ref={ref} />);

    const list = container.querySelector(':only-child');

    expect(ref.current).toBe(list);
  });

  it('can contain nested unordered lists', () => {
    const { container } = render(
      <UnorderedList>
        <UnorderedListItem>Parent item 1</UnorderedListItem>
        <UnorderedListItem>
          Parent item 2
          <UnorderedList>
            <UnorderedListItem>Child item 1</UnorderedListItem>
            <UnorderedListItem>Child item 2</UnorderedListItem>
          </UnorderedList>
        </UnorderedListItem>
        <UnorderedListItem>Parent item 3</UnorderedListItem>
      </UnorderedList>,
    );

    const parentList = container.querySelector(':only-child');
    const nestedLists = container.querySelectorAll('ul');
    const allListItems = container.querySelectorAll('li');

    expect(parentList).toBeInTheDocument();
    expect(nestedLists).toHaveLength(2); // parent list + 1 nested list
    expect(allListItems).toHaveLength(5); // 3 parent items + 2 child items

    // Check that nested list has the correct class
    const nestedList = nestedLists[1];
    expect(nestedList).toHaveClass('utrecht-unordered-list');
  });

  it('assigns increasing level classes to nested unordered lists', () => {
    const { container } = render(
      <UnorderedList>
        <UnorderedListItem>
          Level 1
          <UnorderedList>
            <UnorderedListItem>
              Level 2
              <UnorderedList>
                <UnorderedListItem>Level 3</UnorderedListItem>
              </UnorderedList>
            </UnorderedListItem>
          </UnorderedList>
        </UnorderedListItem>
      </UnorderedList>,
    );

    const lists = container.querySelectorAll('ul');

    expect(lists[0]).toHaveClass('utrecht-unordered-list--level-1');
    expect(lists[1]).toHaveClass('utrecht-unordered-list--level-2');
    expect(lists[2]).toHaveClass('utrecht-unordered-list--level-3');
  });

  it('accepts a level prop that overrides the automatically detected level', () => {
    const { container } = render(<UnorderedList level={4} />);

    const list = container.querySelector(':only-child');

    expect(list).toHaveClass('utrecht-unordered-list--level-4');
  });

  it('propagates an overridden level to nested unordered lists', () => {
    const { container } = render(
      <UnorderedList level={4}>
        <UnorderedListItem>
          Level 4
          <UnorderedList>
            <UnorderedListItem>Level 5</UnorderedListItem>
          </UnorderedList>
        </UnorderedListItem>
      </UnorderedList>,
    );

    const lists = container.querySelectorAll('ul');

    expect(lists[0]).toHaveClass('utrecht-unordered-list--level-4');
    expect(lists[1]).toHaveClass('utrecht-unordered-list--level-5');
  });

  it('lets a level prop correct the depth after a non-React list breaks the nesting chain', () => {
    // Simulates a raw HTML <ul> (not rendered by this component) sitting between two
    // React-managed lists, which would otherwise leave the inner list's context-derived
    // level stuck at 2 instead of the visually correct 3.
    const { container } = render(
      <UnorderedList>
        <UnorderedListItem>
          <ul className="utrecht-unordered-list utrecht-unordered-list--level-2">
            <li className="utrecht-unordered-list__item">
              <UnorderedList level={3}>
                <UnorderedListItem>Deepest item</UnorderedListItem>
              </UnorderedList>
            </li>
          </ul>
        </UnorderedListItem>
      </UnorderedList>,
    );

    const lists = container.querySelectorAll('ul');

    expect(lists[0]).toHaveClass('utrecht-unordered-list--level-1');
    expect(lists[1]).toHaveClass('utrecht-unordered-list--level-2');
    expect(lists[2]).toHaveClass('utrecht-unordered-list--level-3');
  });

  it('clamps the level class at 8 for deeply nested unordered lists', () => {
    let tree = <UnorderedListItem>Deepest level</UnorderedListItem>;

    for (let level = 9; level >= 1; level--) {
      tree = (
        <UnorderedListItem>
          <UnorderedList>{tree}</UnorderedList>
        </UnorderedListItem>
      );
    }

    const { container } = render(<UnorderedList>{tree}</UnorderedList>);

    const lists = container.querySelectorAll('ul');

    expect(lists).toHaveLength(10);
    expect(lists[7]).toHaveClass('utrecht-unordered-list--level-8');
    expect(lists[8]).toHaveClass('utrecht-unordered-list--level-8');
    expect(lists[9]).toHaveClass('utrecht-unordered-list--level-8');
  });
});

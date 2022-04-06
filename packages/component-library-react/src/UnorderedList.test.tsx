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

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLUListElement>();

    const { container } = render(<UnorderedList ref={ref} />);

    const list = container.querySelector(':only-child');

    expect(ref.current).toBe(list);
  });
});

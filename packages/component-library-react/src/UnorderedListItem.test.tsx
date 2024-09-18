import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { UnorderedListItem } from './UnorderedListItem';
import '@testing-library/jest-dom';

const CustomBulletIcon = () => (
  <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="4" cy="4" r="4" fill="currentColor" />
  </svg>
);

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
  it('can have a additional class name', () => {
    const { container } = render(<UnorderedListItem className="large" />);

    const listItem = container.querySelector(':only-child');

    expect(listItem).toHaveClass('large');

    expect(listItem).toHaveClass('utrecht-unordered-list__item');
  });
  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLLIElement>();

    const { container } = render(<UnorderedListItem ref={ref} />);

    const listItem = container.querySelector(':only-child');

    expect(ref.current).toBe(listItem);
  });
  it('should not render a custom marker by default', () => {
    const { container } = render(<UnorderedListItem />);

    const listItem = container.querySelector(':only-child');

    const marker = listItem?.querySelector('.utrecht-unordered-list__custom-marker');

    expect(marker).not.toBeInTheDocument();
    expect(listItem).not.toHaveClass('utrecht-unordered-list__custom-item');
  });
  it('renders a custom marker', () => {
    const { container } = render(<UnorderedListItem marker={<CustomBulletIcon />} />);

    const listItem = container.querySelector(':only-child');

    const marker = listItem?.querySelector('.utrecht-unordered-list__custom-marker');

    expect(marker).toBeInTheDocument();
    expect(listItem).toHaveClass('utrecht-unordered-list__custom-item');
  });
});

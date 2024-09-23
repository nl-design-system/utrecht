import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createRef } from 'react';
import { Listbox, ListboxOption, ListboxOptionGroup } from './index';

describe('Listbox', () => {
  it('renders a div HTML element', () => {
    const { container } = render(<Listbox />);

    const listbox = container.querySelector('div:only-child');

    expect(listbox).toBeInTheDocument();
    expect(listbox).toBeVisible();
  });

  it('renders a ul HTML element', () => {
    const { container } = render(<Listbox />);

    const unorderedList = container.querySelector('ul');

    expect(unorderedList).toBeInTheDocument();
    expect(unorderedList).toBeVisible();
  });

  it('renders a listbox role element', () => {
    render(<Listbox />);

    const listbox = screen.getByRole('listbox');

    expect(listbox).toBeInTheDocument();
  });

  it('renders a design system BEM block class name', () => {
    const { container } = render(<Listbox />);

    const listbox = container.querySelector(':only-child');

    expect(listbox).toHaveClass('utrecht-listbox');
  });

  describe('disabled state', () => {
    // `aria-disabled` is somehow not recognized as disabled state on a listbox by Testing Library
    it.todo('has a disabled listbox in the accessibility tree');

    // Temporary alternative to the accessibility tree test
    it('has a disabled listbox in the DOM', () => {
      render(<Listbox disabled />);

      const listbox = screen.getByRole('listbox');

      // Look at the DOM instead of the accessibility tree
      expect(listbox).toHaveAttribute('aria-disabled', 'true');
    });
  });

  describe('read-only state', () => {
    // `isReadOnly()` is not supported, unfortunately
    it.skip('has a listbox that is read-only in the accessibility tree', () => {});
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>();

    const { container } = render(<Listbox ref={ref} />);

    const listbox = container.querySelector(':only-child');

    expect(ref.current).toBe(listbox);
  });

  describe('option', () => {
    it('renders a li HTML element', () => {
      const { container } = render(
        <Listbox>
          <ListboxOption>Option 1</ListboxOption>
          <ListboxOption>Option 2</ListboxOption>
          <ListboxOption>Option 3</ListboxOption>
        </Listbox>,
      );

      const listbox = container.querySelector('ul > li');

      expect(listbox).toBeInTheDocument();
      expect(listbox).toBeVisible();
    });

    it('renders a option role element', () => {
      render(
        <Listbox>
          <ListboxOption>Option 1</ListboxOption>
          <ListboxOption>Option 2</ListboxOption>
          <ListboxOption>Option 3</ListboxOption>
        </Listbox>,
      );

      const option = screen.getByRole('option', { name: 'Option 1' });

      expect(option).toBeInTheDocument();
    });

    it('supports ForwardRef in React', () => {
      const ref = createRef<HTMLLIElement>();

      const { container } = render(<ListboxOption ref={ref} />);

      const option = container.querySelector(':only-child');

      expect(ref.current).toBe(option);
    });
  });

  describe('option group', () => {
    it('renders options as li HTML element inside a nested ul HTML element', () => {
      const { container } = render(
        <Listbox>
          <ListboxOptionGroup label="Odd">
            <ListboxOption>Option 1</ListboxOption>
            <ListboxOption>Option 3</ListboxOption>
          </ListboxOptionGroup>
          <ListboxOptionGroup label="Even">
            <ListboxOption>Option 2</ListboxOption>
          </ListboxOptionGroup>
        </Listbox>,
      );

      const groupedOption = container.querySelector('ul > li ul > li');

      expect(groupedOption).toBeInTheDocument();
    });

    it('renders a group role element', () => {
      render(
        <Listbox>
          <ListboxOptionGroup label="Odd">
            <ListboxOption>Option 1</ListboxOption>
            <ListboxOption>Option 3</ListboxOption>
          </ListboxOptionGroup>
          <ListboxOptionGroup label="Even">
            <ListboxOption>Option 2</ListboxOption>
          </ListboxOptionGroup>
        </Listbox>,
      );

      const optionGroup = screen.getByRole('group', { name: 'Odd' });

      expect(optionGroup).toBeInTheDocument();
    });

    it('supports ForwardRef in React', () => {
      const ref = createRef<HTMLLIElement>();

      const { container } = render(<ListboxOptionGroup ref={ref} />);

      const optionGroup = container.querySelector(':only-child');

      expect(ref.current).toBe(optionGroup);
    });
  });
});

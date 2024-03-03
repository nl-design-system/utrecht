import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Listbox, ListboxOption, ListboxOptionGroup } from './Listbox';

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
    // `aria-disabled` is somehow not recognized as disabled state
    it.skip('has a disabled listbox', () => {
      render(<Listbox disabled />);

      const listbox = screen.getByRole('listbox');

      expect(listbox).toBeDisabled();
    });
  });

  describe('read-only state', () => {
    // `isReadOnly()` is not supported, unfortunately
    it.skip('has a read-only listbox', () => {
      render(<Listbox disabled />);

      const listbox = screen.getByRole('listbox');

      expect(listbox).isReadOnly();
    });
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
  });
});

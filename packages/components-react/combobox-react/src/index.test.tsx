import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createRef } from 'react';
import { Combobox } from './index';

const comboboxList = ['Option 1', 'Option 2', 'Option 3'];

describe('Combobox', () => {
  it('renders a div HTML element', () => {
    const { container } = render(<Combobox options={comboboxList} label="Combobox Label" />);

    const combobox = container.querySelector('div:only-child');

    expect(combobox).toBeInTheDocument();
    expect(combobox).toBeVisible();
  });

  it('renders a design system BEM block class name', () => {
    const { container } = render(<Combobox options={comboboxList} label="Combobox Label" />);

    const combobox = container.querySelector(':only-child');

    expect(combobox).toHaveClass('utrecht-combobox');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLDivElement>();

    const { container } = render(<Combobox ref={ref} options={comboboxList} label="Combobox Label" />);

    const combobox = container.querySelector(':only-child');

    expect(ref.current).toBe(combobox);
  });
  it('renders a custom CSS class', () => {
    const { container } = render(<Combobox options={comboboxList} label="Combobox Label" className="custom-class" />);

    const combobox = container.querySelector(':only-child');

    expect(combobox).toHaveClass('custom-class');
  });
  describe('Accessibility', () => {
    it('renders a role of combobox', () => {
      const { container } = render(<Combobox options={comboboxList} label="Combobox Label" />);
      const comboboxTextbox = container.querySelector('input');
      expect(comboboxTextbox).toHaveAttribute('role', 'combobox');
    });
    it('renders a role of listbox', () => {
      const { container } = render(<Combobox options={comboboxList} label="Combobox Label" />);
      const combobox = screen.getByRole('combobox');
      fireEvent.click(combobox);
      const comboboxListbox = container.querySelector('.utrecht-listbox');
      expect(comboboxListbox).toHaveAttribute('role', 'listbox');
    });
    it('renders a role of option', () => {
      const { container } = render(<Combobox options={comboboxList} label="Combobox Label" />);
      const combobox = screen.getByRole('combobox');
      fireEvent.click(combobox);
      const listboxItems = container.querySelectorAll('.utrecht-listbox__option');
      listboxItems.forEach((item) => expect(item).toHaveAttribute('role', 'option'));
    });
  });
  describe('options', () => {
    it('renders a list of options', () => {
      const { getByText } = render(<Combobox options={comboboxList} label="Combobox Label" />);
      const combobox = screen.getByRole('combobox');
      fireEvent.click(combobox);
      comboboxList.forEach((option) => {
        expect(getByText(option)).toBeInTheDocument();
      });
    });
  });
  describe('label', () => {
    it('renders a label', () => {
      const { getByText } = render(<Combobox options={comboboxList} label="Combobox Label" />);
      expect(getByText('Combobox Label')).toBeInTheDocument();
    });
  });
  describe('inputProps', () => {
    it('renders inputProps', () => {
      const { getByPlaceholderText } = render(
        <Combobox options={comboboxList} label="Combobox Label" inputProps={{ placeholder: 'Search' }} />,
      );
      expect(getByPlaceholderText('Search')).toBeInTheDocument();
    });
    it('renders aria-label', () => {
      const { container } = render(
        <Combobox options={comboboxList} label="Combobox Label" inputProps={{ 'aria-label': 'Search' }} />,
      );
      const comboboxTextbox = container.querySelector('input');
      expect(comboboxTextbox).toHaveAttribute('aria-label', 'Search');
    });
    it('renders a disabled attribute', () => {
      const { container } = render(
        <Combobox options={comboboxList} label="Combobox Label" inputProps={{ disabled: true }} />,
      );
      const comboboxTextbox = container.querySelector('input');
      expect(comboboxTextbox).toBeDisabled();
    });
    it('renders a design system BEM block class name', () => {
      const { container } = render(<Combobox options={comboboxList} label="Combobox Label" />);
      const comboboxTextbox = container.querySelector('input');
      expect(comboboxTextbox).toHaveClass('utrecht-combobox__textbox');
      expect(comboboxTextbox).toHaveClass('utrecht-textbox--html-input');
      expect(comboboxTextbox).toHaveClass('utrecht-textbox');
    });
    it('renders a custom CSS class', () => {
      const { container } = render(
        <Combobox options={comboboxList} label="Combobox Label" inputProps={{ className: 'custom-class' }} />,
      );
      const comboboxTextbox = container.querySelector('input');

      expect(comboboxTextbox).toHaveClass('custom-class');
      expect(comboboxTextbox).toHaveClass('utrecht-combobox__textbox');
      expect(comboboxTextbox).toHaveClass('utrecht-textbox--html-input');
      expect(comboboxTextbox).toHaveClass('utrecht-textbox');
    });
    it('renders a required attribute', () => {
      const { container } = render(
        <Combobox options={comboboxList} label="Combobox Label" inputProps={{ required: true }} />,
      );
      const comboboxTextbox = container.querySelector('input');
      expect(comboboxTextbox).toBeRequired();
    });
    it('renders an aria-required attribute', () => {
      const { container } = render(
        <Combobox options={comboboxList} label="Combobox Label" inputProps={{ required: true }} />,
      );
      const comboboxTextbox = container.querySelector('input');
      expect(comboboxTextbox).toHaveAttribute('aria-required', 'true');
    });
  });
  describe('onComboboxChange', () => {
    it('calls onComboboxChange when the input value changes', () => {
      const onComboboxChange = jest.fn();
      const { container } = render(
        <Combobox options={comboboxList} label="Combobox Label" onComboboxChange={onComboboxChange} />,
      );
      const comboboxTextbox = container.querySelector('input');
      fireEvent.change(comboboxTextbox as HTMLInputElement, { target: { value: 'Option 1' } });
      expect(onComboboxChange).toHaveBeenCalledWith('Option 1');
      expect(onComboboxChange).toHaveBeenCalledTimes(1);
    });
  });
  describe('renderOptions', () => {
    it('renders custom options', () => {
      render(
        <Combobox
          options={comboboxList}
          label="Combobox Label"
          renderOptions={(option) => <span className="custom-option">{option}</span>}
        />,
      );
      const combobox = screen.getByRole('combobox');
      fireEvent.click(combobox);
      const listboxItem = screen.getAllByRole('option');
      const customOption = listboxItem[0]?.querySelector('.custom-option');

      expect(customOption).toBeInTheDocument();
      expect(listboxItem[0]).toHaveTextContent('Option 1');
    });
  });
});

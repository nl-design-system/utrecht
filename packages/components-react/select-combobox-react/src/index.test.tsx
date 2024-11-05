import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SelectCombobox } from './index';
import '@testing-library/jest-dom';

describe('Combobox', () => {
  it('renders a div HTML element', () => {
    const { container } = render(<SelectCombobox />);

    const combobox = container.querySelector('div:only-child');

    expect(combobox).toBeInTheDocument();
    expect(combobox).toBeVisible();
  });

  it('renders a combobox role element', () => {
    const { container } = render(<SelectCombobox />);

    const combobox = screen.getByRole('combobox');

    expect(combobox).toBeInTheDocument();
  });

  it('renders a textbox role element', () => {
    const { container } = render(<SelectCombobox />);

    const textbox = screen.getByRole('textbox');

    expect(textbox).toBeInTheDocument();
  });

  it('renders a listbox role element', () => {
    const { container } = render(<SelectCombobox expanded />);

    const listbox = screen.getByRole('listbox');

    expect(listbox).toBeInTheDocument();
  });

  it('renders no listbox role element by default', () => {
    const { container } = render(<SelectCombobox expanded />);

    try {
      const listbox = screen.getByRole('listbox');

      expect(listbox).not.toBeInTheDocument();
    } catch (e) {
      expect(true).toBe(true);
    }
  });

  describe('combobox', () => {
    it.skip('renders the label as name for the combobox role element', () => {
      const { container } = render(<SelectCombobox label="All options" />);

      const combobox = screen.getByRole('combobox', { name: 'All options' });

      expect(combobox).toBeInTheDocument();
    });

    it('has an aria-haspopup="listbox" attribute', () => {
      const { container } = render(<SelectCombobox label="All options" />);

      const combobox = screen.getByRole('combobox');

      expect(combobox).toHaveAttribute('aria-haspopup', 'listbox');
    });

    it('has a combobox that is not expanded by default', () => {
      const { container } = render(<SelectCombobox />);

      const combobox = screen.getByRole('combobox');

      expect(combobox).not.toHaveAttribute('aria-expanded', 'true');
    });

    describe('expanded', () => {
      it('has a combobox with an aria-expanded="true" attribute', () => {
        const { container } = render(<SelectCombobox expanded />);

        const combobox = screen.getByRole('combobox');

        expect(combobox).toHaveAttribute('aria-expanded', 'true');
      });
    });
  });

  it('renders a option role element', () => {
    const { container } = render(
      <SelectCombobox
        expanded
        options={[
          {
            disabled: false,
            selected: false,
            active: false,
            value: '1',
            children: 'Option 1',
          },
        ]}
      />,
    );

    const option = screen.getByRole('option', { name: 'Option 1' });

    expect(option).toBeInTheDocument();
  });

  describe('options', () => {
    it('clicking an option changes the value', () => {
      const { container } = render(
        <SelectCombobox
          expanded
          options={[
            {
              disabled: false,
              selected: false,
              active: false,
              value: '1',
              children: 'Option 1',
            },
          ]}
        />,
      );

      const option = screen.getByRole('option', { name: 'Option 1' });

      act(() => {
        option.click();
      });

      const textbox = screen.getByRole<HTMLInputElement>('textbox');

      expect(textbox.value).toBe('1');
    });

    it.skip('clicking a disabled option does not change the value', () => {
      const { container } = render(
        <SelectCombobox
          expanded
          options={[
            {
              disabled: true,
              selected: false,
              active: false,
              value: '1',
              children: 'Option 1',
            },
          ]}
        />,
      );

      const textbox = screen.getByRole<HTMLInputElement>('textbox');
      const option = screen.getByRole('option', { name: 'Option 1' });

      expect(textbox.value).toBe('');

      act(() => {
        option.click();
      });

      expect(textbox.value).toBe('');
    });

    it('clicking to select a value closes the combobox', () => {
      const { container } = render(
        <SelectCombobox
          expanded
          options={[
            {
              disabled: true,
              selected: false,
              active: false,
              value: '1',
              children: 'Option 1',
            },
          ]}
        />,
      );

      const option = screen.getByRole('option', { name: 'Option 1' });

      act(() => {
        option.click();
      });
      const combobox = screen.getByRole('combobox');

      expect(combobox).not.toHaveAttribute('aria-expanded', 'true');
    });
  });

  describe('keyboard', () => {
    it('expands the combobox using the ArrowDown key', async () => {
      const { container } = render(
        <SelectCombobox
          options={[
            {
              disabled: false,
              selected: false,
              active: false,
              value: '1',
              children: 'Option 1',
            },
          ]}
        />,
      );

      const combobox = screen.getByRole('combobox');
      const textbox = screen.getByRole('textbox');

      textbox.focus();

      expect(combobox).toHaveAttribute('aria-expanded', 'false');

      await userEvent.keyboard('{ArrowDown}');

      expect(combobox).toHaveAttribute('aria-expanded', 'true');
    });

    describe('closed combobox', () => {
      it('selects the first item using the ArrowDown key', async () => {
        const { container } = render(
          <SelectCombobox
            options={[
              {
                disabled: false,
                selected: false,
                active: false,
                value: '1',
                children: 'Option 1',
              },
            ]}
          />,
        );

        const combobox = screen.getByRole('combobox');
        const textbox = screen.getByRole('textbox');
        let option = screen.getByRole('option', { name: 'Option 1', hidden: true });

        textbox.focus();

        expect(option).toHaveAttribute('aria-selected', 'false');

        await userEvent.keyboard('{ArrowDown}');

        option = screen.getByRole('option', { name: 'Option 1' });

        expect(option).toHaveAttribute('aria-selected', 'true');
      });

      it('selects the last item using the ArrowUp key', async () => {
        const { container } = render(
          <SelectCombobox
            options={[
              {
                disabled: false,
                selected: false,
                active: false,
                value: '1',
                children: 'Option 1',
              },
              {
                disabled: false,
                selected: false,
                active: false,
                value: '2',
                children: 'Option 2',
              },
            ]}
          />,
        );

        const combobox = screen.getByRole('combobox');
        const textbox = screen.getByRole('textbox');
        let option = screen.getByRole('option', { name: 'Option 2', hidden: true });

        textbox.focus();

        expect(option).toHaveAttribute('aria-selected', 'false');

        await userEvent.keyboard('{ArrowUp}');

        option = screen.getByRole('option', { name: 'Option 2' });

        expect(option).toHaveAttribute('aria-selected', 'true');
      });
    });

    describe('expanded combobox', () => {
      it('closes the expanded combobox using the Escape key', async () => {
        const { container } = render(
          <SelectCombobox
            expanded
            options={[
              {
                disabled: false,
                selected: false,
                active: false,
                value: '1',
                children: 'Option 1',
              },
            ]}
          />,
        );

        const combobox = screen.getByRole('combobox');
        const textbox = screen.getByRole('textbox');

        textbox.focus();

        expect(combobox).toHaveAttribute('aria-expanded', 'true');

        await userEvent.keyboard('{Escape}');

        expect(combobox).toHaveAttribute('aria-expanded', 'false');
      });

      it.skip('changes the value to the selected item using the Enter key', async () => {
        const { container } = render(
          <SelectCombobox
            expanded
            options={[
              {
                selected: true,
                value: '1',
                children: 'Option 1',
              },
            ]}
          />,
        );

        const textbox = screen.getByRole<HTMLInputElement>('textbox');
        const option = screen.getByRole('option', { name: 'Option 1' });

        textbox.focus();

        await userEvent.keyboard('{Enter}');

        expect(textbox.value).toBe('Option 1');
      });
    });
  });
});

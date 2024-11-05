import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SelectCombobox } from './index';
import '@testing-library/jest-dom';

describe('Combobox', () => {
  const exampleValue = 'Hello, world!';

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

  /* The textbox role element is part of the WAI-ARIA 1.1 version,
   * but that old approach is not very user friendly.
   */
  it('renders no textbox role element', () => {
    const { container } = render(<SelectCombobox />);

    try {
      const textbox = screen.getByRole('textbox');

      expect(textbox).not.toBeInTheDocument();
    } catch (e) {
      expect(true).toBe(true);
    }
  });

  it('renders a listbox role element', () => {
    const { container } = render(<SelectCombobox defaultExpanded />);

    const listbox = screen.getByRole('listbox');

    expect(listbox).toBeInTheDocument();
  });

  it('renders no listbox role element when there are 0 options', () => {
    const { container } = render(<SelectCombobox defaultExpanded />);

    try {
      const listbox = screen.getByRole('listbox');

      expect(listbox).not.toBeInTheDocument();
    } catch (e) {
      expect(true).toBe(true);
    }
  });

  it('renders a design system BEM class name: utrecht-combobox', () => {
    const { container } = render(<SelectCombobox />);

    const combobox = container.querySelector(':only-child');

    expect(combobox).toHaveClass('utrecht-combobox');
  });

  it('can have a custom class name', () => {
    const { container } = render(<SelectCombobox className="invalid" />);

    const combobox = container.querySelector(':only-child');

    expect(combobox).toHaveClass('invalid');
  });

  it('can have a additional class name', () => {
    const { container } = render(<SelectCombobox className="large" />);

    const combobox = container.querySelector(':only-child');

    expect(combobox).toHaveClass('large', 'utrecht-combobox');
  });

  it('can be hidden', () => {
    const { container } = render(<SelectCombobox hidden />);

    const field = container.querySelector(':only-child');

    expect(field).not.toBeVisible();
  });

  describe('combobox', () => {
    it.skip('renders the label as name for the combobox role element', () => {
      const { container } = render(<SelectCombobox label="All options" />);

      const combobox = screen.getByRole('combobox', { name: 'All options' });

      expect(combobox).toBeInTheDocument();
    });

    it('has an aria-autocomplete="list" attribute', () => {
      const { container } = render(<SelectCombobox label="All options" />);

      const combobox = screen.getByRole('combobox');

      expect(combobox).toHaveAttribute('aria-autocomplete', 'list');
    });

    it('has a combobox that is not expanded by default', () => {
      const { container } = render(<SelectCombobox />);

      const combobox = screen.getByRole('combobox');

      expect(combobox).not.toHaveAttribute('aria-expanded', 'true');
    });

    describe('defaultExpanded', () => {
      it('has a combobox with an aria-expanded="true" attribute', () => {
        const { container } = render(<SelectCombobox defaultExpanded />);

        const combobox = screen.getByRole('combobox');

        expect(combobox).toHaveAttribute('aria-expanded', 'true');
      });
    });

    describe('expanded', () => {
      it('has a combobox with an aria-expanded="true" attribute', () => {
        const { container } = render(<SelectCombobox expanded />);

        const combobox = screen.getByRole('combobox');

        expect(combobox).toHaveAttribute('aria-expanded', 'true');
      });
    });

    it('has autocomplete="off" to prevent the expanding the native and listbox popup at the same time', () => {
      const { container } = render(<SelectCombobox label="All options" />);

      const combobox = screen.getByRole('combobox');

      expect(combobox).toHaveAttribute('autocomplete', 'off');
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

  describe.skip('options', () => {
    it('clicking an option changes the value', () => {
      const { container } = render(
        <SelectCombobox
          defaultExpanded
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
        userEvent.pointer({ target: option, keys: '[MouseLeft]' });
        // option.click();
      });

      const combobox = screen.getByRole<HTMLInputElement>('combobox');

      expect(combobox.value).toBe('1');
    });

    it('clicking a disabled option does not change the value', () => {
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

      const combobox = screen.getByRole<HTMLInputElement>('combobox');
      const option = screen.getByRole('option', { name: 'Option 1' });

      expect(combobox.value).toBe('');

      act(() => {
        option.click();
      });

      expect(combobox.value).toBe('');
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

  describe('disabled variant', () => {
    it('is not disabled by default', () => {
      const { container } = render(<SelectCombobox />);

      const combobox = screen.getByRole('combobox');

      expect(combobox).not.toBeDisabled();
    });

    it('can have a disabled state', () => {
      render(<SelectCombobox disabled />);

      const combobox = screen.getByRole('combobox');

      expect(combobox).toBeDisabled();
    });

    it('omits non-essential disabled attributes when not disabled', () => {
      render(<SelectCombobox disabled={false} />);

      const combobox = screen.getByRole('combobox');

      expect(combobox).not.toHaveAttribute('aria-disabled');
    });

    describe('listbox', () => {
      it('is not disabled by default', () => {
        render(<SelectCombobox disabled expanded />);

        const listbox = screen.getByRole('listbox');

        expect(listbox).not.toBeDisabled();
      });

      it('can have a disabled state', () => {
        render(<SelectCombobox disabled expanded />);

        const listbox = screen.getByRole('listbox');

        // Unfortunately testing-library does not support the `disabled` state for the `listbox` role.
        // expect(listbox).toBeDisabled();

        // Test the `aria-disabled` attribute instead, as workaround:
        expect(listbox).toHaveAttribute('aria-disabled', 'true');
      });
    });
  });

  describe('change event', () => {
    it('can trigger a change event', async () => {
      const handleChange = jest.fn();

      render(<SelectCombobox onChange={handleChange} />);

      const combobox = screen.getByRole('combobox');

      expect(handleChange).not.toHaveBeenCalled();

      combobox?.focus();
      await userEvent.keyboard('Hello, world!');

      expect(handleChange).toHaveBeenCalled();
    });

    it('does not trigger a change event when disabled', async () => {
      const handleChange = jest.fn();

      render(<SelectCombobox disabled onChange={handleChange} />);

      const combobox = screen.getByRole('combobox');

      combobox?.focus();
      await userEvent.keyboard('Hello, world!');

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('focus event', () => {
    it('can trigger a focus event', async () => {
      const handleFocus = jest.fn();

      render(<SelectCombobox onFocus={handleFocus} />);

      const combobox = screen.getByRole('combobox');

      expect(handleFocus).not.toHaveBeenCalled();

      combobox?.focus();

      expect(handleFocus).toHaveBeenCalled();
    });

    it('can trigger a focus event when read-only', async () => {
      const handleFocus = jest.fn();

      render(<SelectCombobox readOnly onFocus={handleFocus} />);

      const combobox = screen.getByRole('combobox');

      combobox?.focus();

      expect(handleFocus).toHaveBeenCalled();
    });

    it('does not trigger a focus event when disabled', async () => {
      const handleFocus = jest.fn();

      render(<SelectCombobox disabled onFocus={handleFocus} />);

      const combobox = screen.getByRole('combobox');

      combobox?.focus();

      expect(handleFocus).not.toHaveBeenCalled();
    });
  });

  describe('blur event', () => {
    it('can trigger a blur event', async () => {
      const handleBlur = jest.fn();

      render(<SelectCombobox onBlur={handleBlur} />);

      const combobox = screen.getByRole('combobox');

      expect(handleBlur).not.toHaveBeenCalled();

      combobox?.focus();
      combobox?.blur();

      expect(handleBlur).toHaveBeenCalled();
    });

    it('can trigger a blur event when read-only', async () => {
      const handleBlur = jest.fn();

      render(<SelectCombobox readOnly onBlur={handleBlur} />);

      const combobox = screen.getByRole('combobox');

      combobox?.focus();
      combobox?.blur();

      expect(handleBlur).toHaveBeenCalled();
    });

    it('does not trigger a blur event when disabled', async () => {
      const handleBlur = jest.fn();

      render(<SelectCombobox disabled onBlur={handleBlur} />);

      const combobox = screen.getByRole('combobox');

      combobox?.focus();
      combobox?.blur();

      expect(handleBlur).not.toHaveBeenCalled();
    });
  });

  describe('input event', () => {
    it('you can type the value in the combobox', async () => {
      const onInputHandler = jest.fn();
      render(<SelectCombobox onInput={onInputHandler} />);

      const combobox = screen.getByRole<HTMLInputElement>('combobox');

      combobox.focus();

      await userEvent.keyboard(exampleValue);

      expect(onInputHandler).toHaveBeenCalledTimes(exampleValue.length);
    });
  });

  describe('keyboard', () => {
    it('you can type the value in the textbox', async () => {
      const keys = 'Hello, world!';

      render(<SelectCombobox />);

      const combobox = screen.getByRole<HTMLInputElement>('combobox');

      combobox.focus();

      await userEvent.keyboard(exampleValue);

      expect(combobox.value).toBe(keys);
    });

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

      combobox.focus();

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
        let option = screen.getByRole('option', { name: 'Option 1', hidden: true });

        combobox.focus();

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
        let option = screen.getByRole('option', { name: 'Option 2', hidden: true });

        combobox.focus();

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
            defaultExpanded
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

        combobox.focus();

        expect(combobox).toHaveAttribute('aria-expanded', 'true');

        await userEvent.keyboard('{Escape}');

        expect(combobox).toHaveAttribute('aria-expanded', 'false');
      });

      it.skip('changes the value to the selected item using the Enter key', async () => {
        const { container } = render(
          <SelectCombobox
            defaultExpanded
            options={[
              {
                selected: true,
                value: '1',
                children: 'Option 1',
              },
            ]}
          />,
        );

        const combobox = screen.getByRole<HTMLInputElement>('combobox');
        const option = screen.getByRole('option', { name: 'Option 1' });

        combobox.focus();

        await userEvent.keyboard('{Enter}');

        expect(combobox.value).toBe('Option 1');
      });
    });
  });
});

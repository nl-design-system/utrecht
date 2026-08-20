import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { HeaderSearchBar } from './HeaderSearchBar';
import '@testing-library/jest-dom';

describe('Header search bar', () => {
  it('renders a search landmark with a name', () => {
    render(<HeaderSearchBar />);

    const search = screen.getByRole('search', { name: 'Zoeken op de website' });

    expect(search).toBeInTheDocument();
  });

  it('renders an HTML form element', () => {
    const { container } = render(<HeaderSearchBar />);

    const form = container.querySelector('form:only-child');

    expect(form).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<HeaderSearchBar />);

    const form = container.querySelector(':only-child');

    expect(form).toHaveClass('utrecht-header-search-bar');
  });

  it('reuses the search bar BEM class name', () => {
    const { container } = render(<HeaderSearchBar />);

    const form = container.querySelector(':only-child');

    expect(form).toHaveClass('utrecht-search-bar');
  });

  it('renders a search input', () => {
    render(<HeaderSearchBar />);

    const input = screen.getByRole('searchbox', { name: 'Zoeken' });

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'search');
  });

  it('renders search bar BEM class names on the input', () => {
    render(<HeaderSearchBar />);

    const input = screen.getByRole('searchbox');

    expect(input).toHaveClass('utrecht-textbox');
    expect(input).toHaveClass('utrecht-header-search-bar__input');
    expect(input).toHaveClass('utrecht-search-bar__input');
  });

  it('renders a submit button', () => {
    render(<HeaderSearchBar />);

    const button = screen.getByRole('button', { name: 'Zoek' });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('renders search bar BEM class names on the button', () => {
    render(<HeaderSearchBar />);

    const button = screen.getByRole('button');

    expect(button).toHaveClass('utrecht-button');
    expect(button).toHaveClass('utrecht-button--primary-action');
    expect(button).toHaveClass('utrecht-header-search-bar__button');
    expect(button).toHaveClass('utrecht-search-bar__button');
  });

  it('renders a search icon by default', () => {
    const { container } = render(<HeaderSearchBar />);

    const iconSlot = container.querySelector<HTMLElement>('.utrecht-search-bar__button-icon');
    const icon = container.querySelector<HTMLElement>('utrecht-icon-search');
    const fallbackIcon = icon?.querySelector('svg');

    expect(iconSlot).toBeInTheDocument();
    expect(iconSlot).toHaveClass('utrecht-header-search-bar__button-icon');
    expect(icon).toBeInTheDocument();
    expect(fallbackIcon).toBeInTheDocument();
  });

  it('renders the search icon before the button label', () => {
    render(<HeaderSearchBar />);

    const button = screen.getByRole('button', { name: 'Zoek' });
    const iconSlot = button.querySelector<HTMLElement>('.utrecht-search-bar__button-icon');
    const icon = button.querySelector<HTMLElement>('utrecht-icon-search');
    const label = button.querySelector('.utrecht-button__label');

    expect(iconSlot).toBe(button.firstElementChild);
    expect(iconSlot).toContainElement(icon);
    expect(label).toHaveTextContent('Zoek');
    expect(label?.previousElementSibling).toBe(iconSlot);
  });

  it('can have a custom class name', () => {
    const { container } = render(<HeaderSearchBar className="site-header__search" />);

    const form = container.querySelector(':only-child');

    expect(form).toHaveClass('site-header__search');
    expect(form).toHaveClass('utrecht-header-search-bar');
  });

  it('has a focus-visible state after keyboard focus', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <>
        <button type="button">Voor zoeken</button>
        <HeaderSearchBar />
      </>,
    );

    await user.tab();
    await user.tab();

    const form = container.querySelector('.utrecht-search-bar');

    expect(screen.getByRole('searchbox')).toHaveFocus();
    expect(form).toHaveClass('utrecht-search-bar--focus-visible');
  });

  it('does not have a focus-visible state after pointer focus', async () => {
    const user = userEvent.setup();
    const { container } = render(<HeaderSearchBar />);
    const input = screen.getByRole('searchbox');

    await user.click(input);

    const form = container.querySelector('.utrecht-search-bar');

    expect(input).toHaveFocus();
    expect(form).not.toHaveClass('utrecht-search-bar--focus-visible');
  });

  it('can be hidden', () => {
    const { container } = render(<HeaderSearchBar hidden />);

    const form = container.querySelector(':only-child');

    expect(form).not.toBeVisible();
  });

  it('can have a disabled state', () => {
    const { container } = render(<HeaderSearchBar disabled />);

    const form = container.querySelector(':only-child');
    const input = screen.getByRole('searchbox');
    const button = screen.getByRole('button');

    expect(form).toHaveClass('utrecht-header-search-bar--disabled');
    expect(input).toBeDisabled();
    expect(button).toBeDisabled();
  });

  it('can have an invalid state', () => {
    const { container } = render(<HeaderSearchBar invalid />);

    const form = container.querySelector(':only-child');
    const input = screen.getByRole('searchbox');

    expect(form).toHaveClass('utrecht-header-search-bar--invalid');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('can have a read-only state', () => {
    const { container } = render(<HeaderSearchBar readOnly />);

    const form = container.querySelector(':only-child');
    const input = screen.getByRole('searchbox');

    expect(form).toHaveClass('utrecht-header-search-bar--readonly');
    expect(input).toHaveAttribute('readonly');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLFormElement>();

    const { container } = render(<HeaderSearchBar ref={ref} />);

    const form = container.querySelector(':only-child');

    expect(ref.current).toBe(form);
  });

  it('supports ForwardRef for the input', () => {
    const ref = createRef<HTMLInputElement>();

    render(<HeaderSearchBar inputRef={ref} />);

    const input = screen.getByRole('searchbox');

    expect(ref.current).toBe(input);
  });
});

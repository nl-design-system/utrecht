import { render, screen } from '@testing-library/react';
import { NavList, NavListLink } from './NavList';
import '@testing-library/jest-dom';

describe('Navigation bar link list link', () => {
  it('renders a listitem role element', () => {
    render(
      <NavList>
        <NavListLink href="#">Home</NavListLink>
      </NavList>,
    );

    const list = screen.getByRole('listitem');

    expect(list).toBeInTheDocument();
  });

  it('renders a link role element', () => {
    render(
      <NavList>
        <NavListLink href="#">Home</NavListLink>
      </NavList>,
    );

    const list = screen.getByRole('link', { name: 'Home' });

    expect(list).toBeInTheDocument();
  });

  it('renders an HTML li element', () => {
    const { container } = render(
      <NavList>
        <NavListLink href="#">Home</NavListLink>
      </NavList>,
    );

    const list = container.querySelector('li:only-child');

    expect(list).toBeInTheDocument();
  });

  it('renders an HTML a element', () => {
    const { container } = render(
      <NavList>
        <NavListLink href="#">Home</NavListLink>
      </NavList>,
    );

    const list = container.querySelector('a:only-child');

    expect(list).toBeInTheDocument();
  });

  it('renders a design system BEM class name: utrecht-nav-list__item', () => {
    const { container } = render(
      <NavList>
        <NavListLink href="#">Home</NavListLink>
      </NavList>,
    );

    const list = container.querySelector('li:only-child');

    expect(list).toHaveClass('utrecht-nav-list__item');
  });

  it('renders a design system BEM class name: utrecht-nav-list__link', () => {
    const { container } = render(
      <NavList>
        <NavListLink href="#">Home</NavListLink>
      </NavList>,
    );

    const list = container.querySelector('a:only-child');

    expect(list).toHaveClass('utrecht-nav-list__link');
  });

  it('can contain a navigation list link', () => {
    const { container } = render(
      <NavList>
        <NavListLink href="#">Home</NavListLink>
      </NavList>,
    );

    const list = container.querySelector(':only-child');

    const listItem = list?.querySelector(':only-child');

    expect(listItem).toBe(screen.getByRole('listitem'));
  });

  it.todo('displays as block element');

  it.todo('can be hidden');

  it('can have a custom class name', () => {
    const { container } = render(
      <NavList>
        <NavListLink href="#" className="home">
          Home
        </NavListLink>
      </NavList>,
    );

    const list = container.querySelector('li:only-child');

    expect(list).toHaveClass('home');
  });

  it('can have a additional class name', () => {
    const { container } = render(
      <NavList>
        <NavListLink href="#" className="home">
          Home
        </NavListLink>
      </NavList>,
    );

    const list = container.querySelector('li:only-child');

    expect(list).toHaveClass('home');

    expect(list).toHaveClass('utrecht-nav-list__item');
  });

  it.todo('supports ForwardRef in React');

  it('renders center modifier class when center prop is true', () => {
    const { container } = render(
      <NavList>
        <NavListLink href="#" center>
          Home
        </NavListLink>
      </NavList>,
    );

    const listItem = container.querySelector('li:only-child');

    expect(listItem).toHaveClass('utrecht-nav-list__item--center');
  });

  it('renders current modifier class when isCurrent prop is set', () => {
    const { container } = render(
      <NavList>
        <NavListLink href="#" isCurrent="page">
          Home
        </NavListLink>
      </NavList>,
    );

    const link = container.querySelector('a:only-child');

    expect(link).toHaveClass('utrecht-nav-list__link--is-current');
  });
});

import { render, screen } from '@testing-library/react';
import { NavList, NavListLinkButton } from './NavList';
import '@testing-library/jest-dom';

describe('Navigation bar link list button', () => {
  it('renders a listitem role element', () => {
    render(
      <NavList>
        <NavListLinkButton formAction="/logout" formMethod="post">
          Logout
        </NavListLinkButton>
      </NavList>,
    );

    const list = screen.getByRole('listitem');

    expect(list).toBeInTheDocument();
  });

  it('renders a button role element', () => {
    render(
      <NavList>
        <NavListLinkButton formAction="/logout" formMethod="post">
          Logout
        </NavListLinkButton>
      </NavList>,
    );

    const list = screen.getByRole('button', { name: 'Logout' });

    expect(list).toBeInTheDocument();
  });

  it('renders an HTML li element', () => {
    const { container } = render(
      <NavList>
        <NavListLinkButton formAction="/logout" formMethod="post">
          Logout
        </NavListLinkButton>
      </NavList>,
    );

    const list = container.querySelector('li:only-child');

    expect(list).toBeInTheDocument();
  });

  it('renders an HTML button element', () => {
    const { container } = render(
      <NavList>
        <NavListLinkButton formAction="/logout" formMethod="post">
          Logout
        </NavListLinkButton>
      </NavList>,
    );

    const list = container.querySelector('button:only-child');

    expect(list).toBeInTheDocument();
  });

  it('renders a design system BEM class name: utrecht-nav-list__item', () => {
    const { container } = render(
      <NavList>
        <NavListLinkButton formAction="/logout" formMethod="post">
          Logout
        </NavListLinkButton>
      </NavList>,
    );

    const list = container.querySelector('li:only-child');

    expect(list).toHaveClass('utrecht-nav-list__item');
  });

  it('renders a design system BEM class name: utrecht-nav-list__link', () => {
    const { container } = render(
      <NavList>
        <NavListLinkButton formAction="/logout" formMethod="post">
          Logout
        </NavListLinkButton>
      </NavList>,
    );

    const list = container.querySelector('button:only-child');

    expect(list).toHaveClass('utrecht-nav-list__link');
  });

  it.todo('displays as block element');

  it.todo('can be hidden');

  it('can have a custom class name', () => {
    const { container } = render(
      <NavList>
        <NavListLinkButton className="home">Home</NavListLinkButton>
      </NavList>,
    );

    const list = container.querySelector('li:only-child');

    expect(list).toHaveClass('home');
  });

  it('can have a additional class name', () => {
    const { container } = render(
      <NavList>
        <NavListLinkButton className="home">Home</NavListLinkButton>
      </NavList>,
    );

    const list = container.querySelector('li:only-child');

    expect(list).toHaveClass('home');

    expect(list).toHaveClass('utrecht-nav-list__item');
  });

  it.todo('supports ForwardRef in React');

  it('renders current modifier class when isCurrent prop is set', () => {
    const { container } = render(
      <NavList>
        <NavListLinkButton formAction="/logout" formMethod="post" isCurrent="page">
          Logout
        </NavListLinkButton>
      </NavList>,
    );

    const button = container.querySelector('button:only-child');

    expect(button).toHaveClass('utrecht-nav-list__link--is-current');
  });
});

import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { NavList, NavListLink } from './NavList';
import '@testing-library/jest-dom';

describe('Navigation bar link list', () => {
  it('renders a list role element', () => {
    render(<NavList />);

    const list = screen.getByRole('list');

    expect(list).toBeInTheDocument();
  });

  it('renders an HTML ul element', () => {
    const { container } = render(<NavList />);

    const list = container.querySelector('ul:only-child');

    expect(list).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<NavList />);

    const list = container.querySelector(':only-child');

    expect(list).toHaveClass('utrecht-nav-list');
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

  it.skip('displays as block element', () => {
    const { container } = render(<NavList />);

    const list = container.querySelector(':only-child');

    expect(list).toBeVisible();
    expect(list).toHaveStyle({ display: 'block' });
  });

  it('can be hidden', () => {
    const { container } = render(<NavList hidden />);

    const list = container.querySelector(':only-child');

    expect(list).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<NavList className="align-end" />);

    const list = container.querySelector(':only-child');

    expect(list).toHaveClass('align-end');
  });

  it('can have a additional class name', () => {
    const { container } = render(<NavList className="align-end" />);

    const list = container.querySelector(':only-child');

    expect(list).toHaveClass('align-end');

    expect(list).toHaveClass('utrecht-nav-list');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLUListElement>();

    const { container } = render(<NavList ref={ref} />);

    const list = container.querySelector(':only-child');

    expect(ref.current).toBe(list);
  });

  it('renders inline-size-auto modifier class when inlineSizeAuto prop is true', () => {
    const { container } = render(<NavList inlineSizeAuto />);

    const list = container.querySelector(':only-child');

    expect(list).toHaveClass('utrecht-nav-list--inline-size-auto');
  });

  it('renders center modifier class when appearance is center', () => {
    const { container } = render(<NavList appearance="center" />);

    const list = container.querySelector(':only-child');

    expect(list).toHaveClass('utrecht-nav-list--center');
  });
});
